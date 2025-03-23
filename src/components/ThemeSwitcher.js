import React from 'react';
import { Switch } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme as useNextUITheme } from '@nextui-org/react';

const ThemeSwitcher = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useNextUITheme();

  const handleChange = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Switch
      checked={isDark}
      onChange={handleChange}
      iconOn={<span>🌙</span>}
      iconOff={<span>☀️</span>}
    />
  );
};

export default ThemeSwitcher;