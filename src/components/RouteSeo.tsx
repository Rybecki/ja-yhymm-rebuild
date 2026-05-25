import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { resolveRouteSeo } from '../config/siteSeo';

export function RouteSeo() {
  const { pathname } = useLocation();
  const meta = useMemo(() => resolveRouteSeo(pathname), [pathname]);
  usePageMeta(meta);
  return null;
}
