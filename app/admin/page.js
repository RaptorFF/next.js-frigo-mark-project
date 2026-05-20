import { getReservations } from "@/app/_actions/reservations";
import AdminCalendar from "./AdminCalendar";

export const dynamic = "force-dynamic"; // uvek svježi podaci

export default async function AdminPage() {
  const reservations = await getReservations();

  // Serializacija — Date objekti se ne mogu direktno prenijeti u Client Component
  const serialized = reservations.map((r) => ({
    ...r,
    preferred_date:
      r.preferred_date instanceof Date
        ? r.preferred_date
        : new Date(r.preferred_date),
    created_at:
      r.created_at instanceof Date
        ? r.created_at.toISOString()
        : String(r.created_at),
  }));

  return (
    <main className="min-h-screen bg-gray-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Pregled Rezervacija
            </h1>
            <p className="text-gray-500 mt-1">
              Zakazane intervencije — FrigoMark
            </p>
          </div>
          <a
            href="/serviceBooking"
            className="text-sm text-blue-600 hover:underline"
          >
            + Nova rezervacija
          </a>
        </div>

        <AdminCalendar reservations={serialized} />
      </div>
    </main>
  );
}
