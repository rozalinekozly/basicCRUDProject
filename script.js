import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ldignxlbttqoqcvoycbj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkaWdueGxidHRxb3Fjdm95Y2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NTk3NDcsImV4cCI6MjA2NjQzNTc0N30.6kK3C9SI6GCqggzpf8qIPB31_PMIvs3ToPRpkjZFdII';

const supabase = createClient(supabaseUrl, supabaseKey);

async function getMessage() {
  const { data, error } = await supabase
    .from('messages')
    .select('my_msg')
    .eq('id', 1)
    .single(); // <- THIS IS IMPORTANT

  const output = document.getElementById('output');

  if (error) {
    output.textContent = '❌ Roza: Message not found.';
    console.error('Supabase error:', error);
  } else {
    output.textContent = `✅ ${data.my_msg}`;
    console.log('Message received:', data.my_msg);
  }
}

getMessage();
