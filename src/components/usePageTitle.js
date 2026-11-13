import { useEffect } from 'react';

export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Elim Bridge Technologies` : 'Elim Bridge Technologies';
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
}
