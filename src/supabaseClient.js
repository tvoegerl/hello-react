import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uhkwpzhgksexloavtpjc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoa3dwemhna3NleGxvYXZ0cGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5NDI4MjgsImV4cCI6MTk5MjUxODgyOH0.OvtmgQyZO1UK9tIhU4LFiRBPXhGtdXKmPFcHyMcAoQk'

export const supabase = createClient(supabaseUrl, supabaseKey)