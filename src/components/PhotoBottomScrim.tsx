export function PhotoBottomScrim({ card = false }: { card?: boolean }) {
  return (
    <div
      className={card ? 'app-photo-scrim-bottom app-photo-scrim-bottom--card' : 'app-photo-scrim-bottom'}
      aria-hidden
    />
  );
}
