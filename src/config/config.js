
import { createClient } from '@supabase/supabase-js'

console.log(process.env.SUPABASE_URL)
console.log(process.env.SUPABASE_KEY)

const supabaseUrl = 'https://xobpoebtsuszxvfqchs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvYnBvZWJ0c3VzeHp2ZnFwY2hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzOTkyNTIsImV4cCI6MjAxNzk3NTI1Mn0.oNjMEhdWoW-TfPoHlF3ytyLHbra2B0VChjJnZFNc8B8'

export const supabase = createClient(supabaseUrl, supabaseKey);
