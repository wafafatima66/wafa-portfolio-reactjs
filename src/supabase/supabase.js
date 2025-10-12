import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tafuuhbytixzppowklvf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhZnV1aGJ5dGl4enBwb3drbHZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMzY5MzIsImV4cCI6MjA3NDkxMjkzMn0._ep2JzMo10gm6WHZcsopPBNrH8uU5DQVg5s9lgL526w'

export const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase