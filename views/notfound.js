function notFoundPage() {
  return `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 - Page Not Found</title>
</head>
<body style="font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 0; min-height: 100vh; position: relative;">

  <header style="background-color: #f44336; color: white; padding: 1rem; text-align: center;">
    <h1 style="margin: 0;">404 - Page Not Found</h1>
  </header>

  <main style="padding: 2rem; text-align: center; padding-bottom: 60px;">
    <h2 style="margin-bottom: 0.5rem;">Oops! 😕</h2>
    <p style="margin: 0.5rem 0;">The page you’re looking for doesn’t exist or has been moved.</p>
    <a href="/" style="display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 4px;">
      Go Back Home
    </a>
  </main>

  <footer style="position: fixed; bottom: 0; left: 0; width: 100%; padding: 1rem; background-color: #eee; text-align: center; color: #555;">
    &copy; 2025 Rakesh Mondal. All rights reserved.
  </footer>

</body>
</html>`;
}

module.exports = notFoundPage;
