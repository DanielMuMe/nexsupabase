import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kfpomfpnodfawlqfhsxa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmcG9tZnBub2RmYXdscWZoc3hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MjYwNTIsImV4cCI6MjA3ODEwMjA1Mn0.ReQRUw983PDESlZKq_c1LGI1vOqhry0bfkiiF46cypg'
export const supabase = createClient (supabaseUrl, supabaseKey);