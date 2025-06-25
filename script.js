const supabaseUrl = 'https://ldignxlbttqoqcvoycbj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkaWdueGxidHRxb3Fjdm95Y2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NTk3NDcsImV4cCI6MjA2NjQzNTc0N30.6kK3C9SI6GCqggzpf8qIPB31_PMIvs3ToPRpkjZFdII';

// Dynamically load Supabase client
(async () => {
  const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm');
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Functions
  window.fetchMessage = async function () {
    const id = document.getElementById('idInput').value;
    if (!id) return alert('Please enter a number.');

    const { data, error } = await supabase
      .from('messages') // your actual table
      .select('my_msg')
      .eq('id', id)
      .single();

    if ( !data) {
      alert('Roza: Message not found.');
      return;
    }

    if(error) {
       alert('ERROR');
      return;
    }

    document.getElementById('msgBox').value = data.my_msg;
    document.getElementById('resultBox').style.display = 'block';
  };

  window.updateMessage = async function () {
    const id = document.getElementById('idInput').value;
    const newMsg = document.getElementById('msgBox').value;

    const { error } = await supabase
      .from('messages')
      .update({ my_msg: newMsg })
      .eq('id', id);

    if (error) {
      alert('Update failed.');
    } else {
      alert('Message updated!');
    }
  };
})();
