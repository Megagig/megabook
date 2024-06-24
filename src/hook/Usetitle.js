import { useEffect } from 'react';

export const Usetitle = (title) => {
  useEffect(() => {
    document.title = `${title} - MegaBook`;
  }, [title]);
  return null;
};
