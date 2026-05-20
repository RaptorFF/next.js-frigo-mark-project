"use client";

import { useState, useCallback } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { updateReservationStatus } from "@/app/_actions/reservations";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const SERVICE_LABELS = {
  installation: "Instalacija klime",
  maintenance: "Održavanje HVAC",
  repair: "Popravka aparata",
  heatPump: "Toplotna pumpa",
  cleaning: "Čišćenje kanala",
  thermostat: "Termostat",
  emergency: "Hitna intervencija",
};

const SERVICE_COLORS = {
  installation: "#2563eb",
  maintenance: "#16a34a",
  repair: "#ea580c",
  heatPump: "#7c3aed",
  cleaning: "#0891b2",
  thermostat: "#0d9488",
  emergency: "#dc2626",
};

const STATUS_LABELS = {
  pending: "Na čekanju",
  confirmed: "Potvrđeno",
  completed: "Završeno",
  cancelled: "Otkazano",
};

const STATUS_COLORS = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
  confirmed: "bg-blue-100 text-blue-800 border-blue-300",
  completed: "bg-green-100 text-green-800 border-green-300",
  cancelled: "bg-red-100 text-red-800 border-red-300",
};

function eventStyleGetter(event) {
  const color = SERVICE_COLORS[event.resource.service_type] ?? "#6b7280";
  return {
    style: {
      backgroundColor: color,
      border: "none",
      borderRadius: "6px",
      color: "#fff",
      fontSize: "0.78rem",
      padding: "2px 6px",
    },
  };
}

export default function AdminCalendar({ reservations: initial }) {
  const [reservations, setReservations] = useState(initial);
  const [selected, setSelected] = useState(null);
  const [updating, setUpdating] = useState(false);
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());

  const events = reservations.map((r) => {
    const start = new Date(
      `${r.preferred_date.toISOString().slice(0, 10)}T${r.preferred_time}`,
    );
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000); // +2 sata
    return {
      id: r.id,
      title: `${SERVICE_LABELS[r.service_type] ?? r.service_type} — ${r.name}`,
      start,
      end,
      resource: r,
    };
  });

  const handleSelectEvent = useCallback((event) => {
    setSelected(event.resource);
  }, []);

  const handleStatusChange = async (id, status) => {
    setUpdating(true);
    await updateReservationStatus(id, status);
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r)),
    );
    setSelected((prev) => (prev?.id === id ? { ...prev, status } : prev));
    setUpdating(false);
  };

  return (
    <div className="space-y-6">
      {/* Legenda */}
      <div className="flex flex-wrap gap-3">
        {Object.entries(SERVICE_LABELS).map(([key, label]) => (
          <span
            key={key}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full text-white"
            style={{ backgroundColor: SERVICE_COLORS[key] }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Kalendar */}
      <div className="bg-white rounded-xl shadow border border-gray-200 p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          view={view}
          onView={setView}
          date={date}
          onNavigate={setDate}
          eventPropGetter={eventStyleGetter}
          onSelectEvent={handleSelectEvent}
          popup
          messages={{
            today: "Danas",
            previous: "Prethodni",
            next: "Sledeći",
            month: "Mesec",
            week: "Nedelja",
            day: "Dan",
            agenda: "Agenda",
            showMore: (total) => `+${total} više`,
          }}
        />
      </div>

      {/* Modal detalji */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 space-y-4">
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Detalji rezervacije #{selected.id}
              </h2>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500 font-medium">Usluga</p>
                <p className="font-semibold">
                  {SERVICE_LABELS[selected.service_type] ??
                    selected.service_type}
                </p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Status</p>
                <span
                  className={`inline-block text-xs font-semibold px-2 py-0.5 rounded border ${STATUS_COLORS[selected.status]}`}
                >
                  {STATUS_LABELS[selected.status]}
                </span>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Datum</p>
                <p className="font-semibold">
                  {new Date(selected.preferred_date).toLocaleDateString(
                    "sr-RS",
                  )}
                </p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Vreme</p>
                <p className="font-semibold">
                  {String(selected.preferred_time).slice(0, 5)}
                </p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Klijent</p>
                <p className="font-semibold">{selected.name}</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Telefon</p>
                <p className="font-semibold">{selected.phone}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-500 font-medium">Email</p>
                <p className="font-semibold">{selected.email}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-500 font-medium">Adresa</p>
                <p className="font-semibold">{selected.address}</p>
              </div>
              {selected.notes && (
                <div className="col-span-2">
                  <p className="text-gray-500 font-medium">Napomene</p>
                  <p className="text-gray-700">{selected.notes}</p>
                </div>
              )}
            </div>

            {/* Promena statusa */}
            <div className="border-t pt-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Promeni status:
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(STATUS_LABELS).map(([key, label]) => (
                  <button
                    key={key}
                    disabled={updating || selected.status === key}
                    onClick={() => handleStatusChange(selected.id, key)}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition disabled:opacity-50 disabled:cursor-not-allowed ${STATUS_COLORS[key]}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabela svih rezervacija */}
      <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">
            Sve rezervacije ({reservations.length})
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Klijent</th>
                <th className="px-4 py-3 text-left">Usluga</th>
                <th className="px-4 py-3 text-left">Datum</th>
                <th className="px-4 py-3 text-left">Vreme</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Akcija</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {reservations.map((r) => (
                <tr
                  key={r.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelected(r)}
                >
                  <td className="px-4 py-3 text-gray-400">{r.id}</td>
                  <td className="px-4 py-3 font-medium">{r.name}</td>
                  <td className="px-4 py-3">
                    <span
                      className="inline-block text-xs text-white px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor:
                          SERVICE_COLORS[r.service_type] ?? "#6b7280",
                      }}
                    >
                      {SERVICE_LABELS[r.service_type] ?? r.service_type}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {new Date(r.preferred_date).toLocaleDateString("sr-RS")}
                  </td>
                  <td className="px-4 py-3">
                    {String(r.preferred_time).slice(0, 5)}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded border ${STATUS_COLORS[r.status]}`}
                    >
                      {STATUS_LABELS[r.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(r);
                      }}
                      className="text-blue-600 hover:underline text-xs"
                    >
                      Detalji
                    </button>
                  </td>
                </tr>
              ))}
              {reservations.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-8 text-center text-gray-400"
                  >
                    Nema rezervacija.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
