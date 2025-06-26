Project Overview
This is my first project connecting a frontend website (HTML, CSS, JS) to a cloud database using Supabase.

The goal was to build a basic CRUD application (Create, Read, Update, Delete) that allows:

Reading a saved message from the database

Updating the message with a button click

Viewing all changes live through an online interface

The site is deployed via Vercel, making it accessible from anywhere.

Tools and Technologies
Technology	Description
Supabase	A cloud-based database service built on PostgreSQL. I created a table called messages with two fields: id and my_msg.
Vercel	A platform for deploying frontend projects. Automatically connected to GitHub for smooth updates.
Git & GitHub	Used for version control and pushing code to the cloud.
HTML / CSS / JS	A simple static site that connects to the database using the Supabase JS client library.

What I Learned
How to connect a JavaScript file to a cloud database and run queries like SELECT, UPDATE, and INSERT.

How to use a Supabase API key securely in the code.

How to configure Supabase Policies to ensure read and write permissions — without them, queries won’t work.

How to deploy a site to Vercel through GitHub and keep the site updated with every code push.

Challenges I Faced
At first, I couldn’t read the message from the database. Eventually, I realized I needed to activate a SELECT policy in Supabase for unauthenticated users.

The UPDATE operation didn’t work until I confirmed that the anon role had explicit permission.

I initially struggled to understand how the files were connected — especially how JS communicates with Supabase using the API key.

Deployment to Vercel only worked properly once I ensured index.html was in the root directory.

I also encountered confusion between plain JavaScript and using modules. I learned that to use import, I must include type="module" in the script tag.
