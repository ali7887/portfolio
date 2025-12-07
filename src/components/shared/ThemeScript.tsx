/**
 * ThemeScript - Prevents flash of wrong theme on initial load
 * Runs before React hydration to set theme immediately
 */
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const theme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const shouldBeDark = theme ? theme === 'dark' : prefersDark;
            
            if (shouldBeDark) {
              document.documentElement.classList.add('dark');
              document.documentElement.classList.remove('light');
              document.body.classList.add('dark');
              document.body.classList.remove('light');
            } else {
              document.documentElement.classList.remove('dark');
              document.documentElement.classList.add('light');
              document.body.classList.remove('dark');
              document.body.classList.add('light');
            }
          })();
        `,
      }}
    />
  );
}

