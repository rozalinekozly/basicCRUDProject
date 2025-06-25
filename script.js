import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ldignxlbttqoqcvoycbj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkaWdueGxidHRxb3Fjdm95Y2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NTk3NDcsImV4cCI6MjA2NjQzNTc0N30.6kK3C9SI6GCqggzpf8qIPB31_PMIvs3ToPRpkjZFdII'

export const supabase = createClient(supabaseUrl, supabaseKey)

async function getMessage() {
  const { data, error } = await supabase
    .from('messages')
    .select('my_msg')
    .eq('id', 1)
    
  if (error ) {
    console.error('Error fetching data:', error);
      } else {
        console.log('Fetched data:', data);
      }
    }

getMessage();
