create table if not exists public.certivo_access (
  user_id uuid primary key references auth.users(id) on delete cascade,
  stripe_customer_id text,
  stripe_subscription_id text,
  plan text not null default 'free',
  status text not null default 'free',
  access_until timestamptz,
  updated_at timestamptz not null default now()
);

alter table public.certivo_access enable row level security;

drop policy if exists "Students can read their own Certivo access" on public.certivo_access;

create policy "Students can read their own Certivo access"
on public.certivo_access
for select
to authenticated
using (auth.uid() = user_id);

create index if not exists certivo_access_customer_idx
on public.certivo_access (stripe_customer_id);

create index if not exists certivo_access_subscription_idx
on public.certivo_access (stripe_subscription_id);
