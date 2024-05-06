import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tdhopxqkbsivwcarlldg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaG9weHFrYnNpdndjYXJsbGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMzc0NTQsImV4cCI6MjAyODcxMzQ1NH0.vL5QPMWZ7NyBPVhd-DXAOf-dkjy3kOnOJo9fQY2ZSyg";
export const supabase = createClient(supabaseUrl, supabaseKey);
