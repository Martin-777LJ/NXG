import { createClient } from '@supabase/supabase-client';

const supabaseUrl = 'https://nfcbykbcuebbsrvvxkxv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mY2J5a2JjdWViYnNydnZ4a3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0NzgxMzAsImV4cCI6MjA4MzA1NDEzMH0.xEvY5IUhI2dvkOengLB31MQ3ToTeheo6nM8Pd2Q2vrc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
