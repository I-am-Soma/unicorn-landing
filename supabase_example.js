import { createClient } from '@supabase/supabase-js';

// Use environment variables to avoid hardcoding credentials
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function readTable() {
  const { data, error } = await supabase.from('contact_form').select('*');
  if (error) {
    throw error;
  }
  console.log('Existing rows:', data);
}

async function insertRow(row) {
  const { data, error } = await supabase.from('contact_form').insert([row]).select();
  if (error) {
    throw error;
  }
  console.log('Inserted row:', data);
}

async function main() {
  await readTable();
  await insertRow({ first_name: 'Test', last_name: 'User', email: 'test@example.com' });
}

main().catch(err => {
  console.error('Supabase error:', err);
  process.exit(1);
});
