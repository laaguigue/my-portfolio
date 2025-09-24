import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div />;
  }
  return (
    <NextThemeProvider attribute="class">
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;