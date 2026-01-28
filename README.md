# Snoo’s Ever-Shifting Dungeon

A daily, community-driven dungeon crawler game built on Devvit for Reddit.

## Game Description

Snoo’s Ever-Shifting Dungeon is a 2D top-down dungeon crawler where the level layouts, monsters, and daily modifiers are entirely created and voted on by the Reddit community. Each day, users submit designs via comments on a dedicated post, and the top-voted submissions shape that day's dungeon.

### Features
- **Community-Driven Content**: Users design room layouts using an in-game tile editor, suggest monsters and modifiers.
- **Daily Gameplay**: Fresh content every day keeps players engaged.
- **GameMaker Integration**: The core game is built in GameMaker Studio, exported to HTML5, and embedded in the Devvit app.
- **Interactive Posts**: Play directly in Reddit posts.
- **Leaderboards**: Compete for daily high scores.

### How to Play
1. Visit the daily dungeon post.
2. Play the generated dungeon based on community submissions.
3. Submit your own designs using the tile editor in the app.
4. Vote on submissions in the comments to influence future days.

### Technical Stack
- **Frontend**: React with TypeScript, Tailwind CSS
- **Backend**: Express.js with Devvit APIs
- **Game Engine**: GameMaker Studio (HTML5 export)
- **Platform**: Reddit Devvit

## Getting Started

1. Ensure you have Node.js 22+ installed.
2. Clone or set up the project.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start development and playtest on Reddit.
5. For the GameMaker part, create a project in GameMaker Studio, implement the dungeon logic, and export to HTML5. Host the files (e.g., on GitHub Pages) and update the `gameUrl` in `GameEmbed.tsx`.

## Submission for Hackathon

- **App Listing**: [Link to your app on developer.reddit.com](https://developers.reddit.com/apps/snoos-dungeon)
- **Demo Post**: Create a public post in your test subreddit running the game.
- **Repository**: [Public GitHub repo](https://github.com/your-repo/snoos-dungeon)

## Commands

- `npm run dev`: Starts development server and playtest.
- `npm run build`: Builds client and server.
- `npm run deploy`: Uploads new version.
- `npm run launch`: Publishes for review.
- `npm run check`: Type checks, lints, and prettifies.
