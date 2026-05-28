create schema if not exists _migrations;
create table if not exists _migrations.applied (name text primary key, applied_at timestamptz default now());
insert into _migrations.applied (name) values ('00001_initial_schema.sql') on conflict do nothing;
