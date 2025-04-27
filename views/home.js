function hompage() {
  return `<html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to My Node.js App</title>
      </head>
      <body style="font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 0; min-height: 100vh; position: relative;">
        <header style="background-color: #4CAF50; color: white; padding: 1rem; text-align: center;">
          <h1 style="margin: 0;">My Node.js Application</h1>
        </header>

        <main style="padding: 2rem; text-align: center; padding-bottom: 60px;">
          <h2 style="margin-bottom: 0.5rem;">Welcome 👋</h2>
          <p style="margin: 0.5rem 0;">
            This is the homepage of a Node.js application.
          </p>
          <p style="margin: 0.5rem 0;">
            Start building your backend API or full-stack app here!
          </p>
        </main>

        <footer style="position: fixed; bottom: 0; left: 0; width: 100%; padding: 1rem; background-color: #eee; text-align: center; color: #555;">
          &copy; 2025 Rakesh Mondal. All rights reserved.
        </footer>
      </body>
    </html>`;
}

module.exports = hompage;
