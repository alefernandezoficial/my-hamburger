
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-url.supabase.co';
const supabaseKey = 'your-anon-key';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;