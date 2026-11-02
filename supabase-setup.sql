-- Weekly Volleyball — sign-up sheet
-- Paste this whole thing into Supabase → SQL Editor → New query → Run. Once, ever.

create table if not exists public.sheets (
  sheet      text primary key,
  week       text not null,
  names      text[] not null default '{}',
  updated_at timestamptz not null default now()
);

create table if not exists public.signups (
  sheet      text not null,
  week       text not null,
  name       text not null,
  coming     boolean,
  watch      boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (sheet, week, name)
);

-- if you ran an earlier version of this file, this adds the watching column
alter table public.signups add column if not exists watch boolean not null default false;

alter table public.sheets  enable row level security;
alter table public.signups enable row level security;

-- Everyone who has the link can read the names and answer for themselves.
-- Nothing can be deleted, and no other table in the project is reachable.
drop policy if exists sheets_read   on public.sheets;
drop policy if exists sheets_write  on public.sheets;
drop policy if exists sheets_update on public.sheets;
create policy sheets_read   on public.sheets  for select to anon using (true);
create policy sheets_write  on public.sheets  for insert to anon with check (true);
create policy sheets_update on public.sheets  for update to anon using (true) with check (true);

drop policy if exists signups_read   on public.signups;
drop policy if exists signups_write  on public.signups;
drop policy if exists signups_update on public.signups;
create policy signups_read   on public.signups for select to anon using (true);
create policy signups_write  on public.signups for insert to anon with check (true);
create policy signups_update on public.signups for update to anon using (true) with check (true);
