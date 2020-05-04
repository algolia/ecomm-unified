import React from 'react';

export function useMatchMedia(config) {
  const [isMobile, setIsMobile] = React.useState(
    () =>
      !window.matchMedia(`(min-width: ${config.styles.breakpoints.sm}px)`)
        .matches
  );

  React.useEffect(() => {
    function onChange(event) {
      setIsMobile(!event.matches);
    }

    const mediaQuery = window.matchMedia(
      `(min-width: ${config.styles.breakpoints.sm}px)`
    );

    mediaQuery.addListener(onChange);

    return () => {
      mediaQuery.removeListener(onChange);
    };
  }, [config.styles.breakpoints.sm]);

  return { isMobile };
}