export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col pt-20 bg-white">
      <main className="flex-1 max-w-3xl mx-auto w-full py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">Održavanje HVAC sistema</h1>
        <p className="text-lg mb-4">
          Redovno održavanje kako bi vaši sistemi radili glatko tokom cele
          godine.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Sezonski pregledi</li>
          <li>Zamena filtera</li>
          <li>Optimizacija performansi</li>
        </ul>
      </main>
    </div>
  );
}
