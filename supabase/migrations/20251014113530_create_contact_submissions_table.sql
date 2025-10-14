/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person contacting
      - `email` (text) - Email address for response
      - `subject` (text) - Subject of the message
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp when submission was created
      - `read` (boolean) - Whether the message has been read (default false)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert their contact submissions
    - Add policy for authenticated admin users to read all submissions
  
  3. Notes
    - Anonymous users can only insert, not read submissions
    - This prevents spam and unauthorized access to contact data
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a contact form
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view submissions (for admin purposes)
CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);