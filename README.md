# NebulaNotes
https://nebulanotes.netlify.app/

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

---

Screenshots
<img width="848" alt="Screenshot 2024-08-30 at 5 06 16 PM" src="https://github.com/user-attachments/assets/407a79d8-0c14-4efe-b405-97c63c986c57">
<img width="1429" alt="Screenshot 2024-08-30 at 4 52 16 PM" src="https://github.com/user-attachments/assets/c928e3f1-46ff-4d9a-90a1-88d820c1d625">
<img width="817" alt="Screenshot 2024-08-30 at 4 52 29 PM" src="https://github.com/user-attachments/assets/c49b539f-0b0f-4e1e-948d-81b0bd647cae">


----

### future functions/features (To Do)

- support markdown
- page directory
- popup notifications instead of alerts
- tags
- search bar
- dark mode
- share notes?



