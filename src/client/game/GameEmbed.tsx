interface GameEmbedProps {
  layout: string;
  monster: string;
  modifier: string;
}

export function GameEmbed({ layout, monster, modifier }: GameEmbedProps) {
  // Placeholder for GameMaker game URL
  const gameUrl = 'https://your-hosted-gamemaker-game.com/index.html'; // Replace with real URL

  const fullUrl = `${gameUrl}?layout=${layout}&monster=${monster}&modifier=${encodeURIComponent(modifier)}`;

  return (
    <div className="border p-4 rounded">
      <h2 className="text-lg font-semibold mb-2">Play the Dungeon</h2>
      <iframe src={fullUrl} width="800" height="600" title="Snoo's Dungeon" className="border" />
    </div>
  );
}