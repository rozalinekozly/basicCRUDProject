import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ldignxlbttqoqcvoycbj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkaWdueGxidHRxb3Fjdm95Y2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NTk3NDcsImV4cCI6MjA2NjQzNTc0N30.6kK3C9SI6GCqggzpf8qIPB31_PMIvs3ToPRpkjZFdII'; 
const supabase = createClient(supabaseUrl, supabaseKey);

// READ message
document.getElementById('readBtn').addEventListener('click', async () => {
  const id = Number(document.getElementById('messageId').value);
  const { data, error } = await supabase
    .from('messages')
    .select('my_msg')
    .eq('id', id)
    .single();

  const output = document.getElementById('readResult');
  if (error || !data) {
    output.textContent = '❌ Message not found.';
  } else {
    output.textContent = `✅ Message: ${data.my_msg}`;
  }
});

// UPDATE message
document.getElementById('updateBtn').addEventListener('click', async () => {
  const id = Number(document.getElementById('messageId').value);
  const newMsg = document.getElementById('newMessage').value;

  const { error } = await supabase
    .from('messages')
    .update({ my_msg: newMsg })
    .eq('id', id);

  const updateResult = document.getElementById('updateResult');
  if (error) {
    updateResult.textContent = '❌ Failed to update.';
  } else {
    updateResult.textContent = '✅ Message updated!';
  }
});
