---

# NebulaNotes

**NebulaNotes** is a powerful web application that allows users to create, manage, and organize notes in a flexible tree structure. Designed as a Notion-like tool, NebulaNotes offers a rich set of features for both individual and collaborative productivity.

## Features

- **Authentication**: Secure user authentication powered by Supabase.
- **Note Management**: Create, update, reorder, and delete notes with ease.
- **Image Management**: Upload, update, and remove images associated with your notes.
- **Page Customization**: Modify page titles and cover images to personalize your workspace.
- **Page Management**: Create, update, and delete entire pages for comprehensive content organization.

## Tech Stack

NebulaNotes is built with modern technologies for a smooth and responsive user experience:

- **React**: For building interactive user interfaces.
- **TypeScript**: Ensuring type safety and reducing errors in your code.
- **Vite**: A fast build tool and development server for a seamless development experience.
- **DndKit**: A drag-and-drop toolkit that powers the reordering of notes.
- **TailwindCSS**: A utility-first CSS framework for quick and responsive design.
- **Supabase**: Provides backend services including database, authentication, and storage.
- **Netlify**: For fast and reliable hosting.

## Running the App Locally

To run NebulaNotes on your local machine, follow these steps:

1. **Set Up Supabase**: Create a new project in Supabase and obtain your project URL and API key.

2. **Configure Environment Variables**: Add the following environment variables to your `.env` file:

   ```
   VITE_SUPABASE_URL="your-supabase-url"
   VITE_SUPABASE_API_KEY="your-supabase-api-key"
   ```

3. **Install Dependencies**: Install the required dependencies by running:

   ```
   npm install
   ```

4. **Start the Development Server**: Start the app using either of the following commands:

   ```
   npm run dev
   ```

   or

   ```
   netlify dev
   ```
