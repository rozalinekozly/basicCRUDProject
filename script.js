import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://ldignxlbttqoqcvoycbj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
const supabase = createClient(supabaseUrl, supabaseKey)

async function fetchMessage() {
  const id = Number(document.getElementById('idInput').value)
  if (!id) return alert('Please enter a number.')

  const { data, error } = await supabase
    .from('messages')
    .select('my_msg')
    .eq('id', id)
    .single()

  if (error || !data) {
    alert('Message not foundi.')
    return
  }

  document.getElementById('msgBox').value = data.my_msg
  document.getElementById('resultBox').style.display = 'block'
}

async function updateMessage() {
  const id = Number(document.getElementById('idInput').value)
  const newMsg = document.getElementById('msgBox').value

  const { error } = await supabase
    .from('messages')
    .update({ my_msg: newMsg })
    .eq('id', id)

  if (error) {
    alert('Failed to update.')
  } else {
    alert('Message updated!')
  }
}

window.fetchMessage = fetchMessage
window.updateMessage = updateMessage
