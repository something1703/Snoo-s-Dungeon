import { useDailyContent } from '../hooks/useDailyContent';
import { TileEditor } from './TileEditor';
import { GameEmbed } from './GameEmbed';

export const App = () => {
  const { layout, monster, modifier, loading } = useDailyContent();

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading daily dungeon...</div>;
  }

  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold text-center mb-4">Snoo’s Ever-Shifting Dungeon</h1>
      <p className="text-center mb-4">Today's dungeon: Layout from community, Monster: {monster}, Modifier: {modifier}</p>
      
      <GameEmbed layout={layout} monster={monster} modifier={modifier} />
      
      <div className="mt-6">
        <TileEditor />
      </div>
    </div>
  );
};
