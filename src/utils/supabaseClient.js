import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qssrtoeiqrmfnbczncer.supabase.co";
const SUPBASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzc3J0b2VpcXJtZm5iY3puY2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NjM4MzgsImV4cCI6MTk5MzQzOTgzOH0._Nw1_MopnjcDFtTtpCRAGCzV0juQa6KQmDM4lbJgADo";

const supabaseClient = createClient(SUPABASE_URL, SUPBASE_ANON_KEY);

export default supabaseClient;