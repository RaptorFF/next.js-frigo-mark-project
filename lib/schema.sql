-- ============================================================
-- FrigoMark - Schema baze podataka
-- Pokrenite ovu skriptu u pgAdmin Query Tool
-- ============================================================

-- 1. Kreirajte bazu podataka (jednom, ručno u pgAdmin):
--    Desni klik na "Databases" > Create > Database > Name: frigomark_db

-- 2. Povežite se na frigomark_db, otvorite Query Tool i pokrenite sledeće:

CREATE TABLE IF NOT EXISTS reservations (
  id            SERIAL PRIMARY KEY,
  service_type  VARCHAR(100)  NOT NULL,
  preferred_date DATE         NOT NULL,
  preferred_time TIME         NOT NULL,
  name          VARCHAR(255)  NOT NULL,
  email         VARCHAR(255)  NOT NULL,
  phone         VARCHAR(50)   NOT NULL,
  address       VARCHAR(500)  NOT NULL,
  notes         TEXT,
  status        VARCHAR(50)   NOT NULL DEFAULT 'pending',
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Index za brzo filtriranje po datumu
CREATE INDEX IF NOT EXISTS idx_reservations_date ON reservations (preferred_date);

-- Index za filtriranje po statusu
CREATE INDEX IF NOT EXISTS idx_reservations_status ON reservations (status);

-- Primer testnih podataka (opciono)
-- INSERT INTO reservations (service_type, preferred_date, preferred_time, name, email, phone, address, notes)
-- VALUES
--   ('installation', CURRENT_DATE + 1, '10:00', 'Petar Petrović', 'petar@example.com', '0601234567', 'Cara Dušana 12, Beograd', 'Montaža klima uređaja 12kW'),
--   ('maintenance',  CURRENT_DATE + 2, '14:30', 'Marija Jović',   'marija@example.com', '0617654321', 'Knez Mihailova 5, Novi Sad', 'Godišnji servis HVAC sistema'),
--   ('emergency',    CURRENT_DATE,     '09:00', 'Stefan Nikolić', 'stefan@example.com', '0621111222', 'Bulevar Oslobođenja 77, Niš', 'Kvar toplotne pumpe');
