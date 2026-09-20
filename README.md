# Destruction Simulator

A third-person 3D destruction playground with 100 unlockable weapons. Start with a hammer, earn 12 XP for every destroyed block, and unlock guns at level 50. Level requirements are 100 XP, then 160, 200, 240, 280, and so on, adding 40 XP per level after level 2. Extra XP carries into the next level. Level and equipped weapon are saved locally in your browser. Existing saves retain their level, weapons, and percentage of progress when upgrading to the new XP curve.

Run `npm start`, then open http://127.0.0.1:4187. You can also open index.html directly. Three.js is bundled locally; optional Google Fonts fall back to system fonts offline.

Click Enter the Yard to play. WASD moves, mouse looks, click attacks, Shift sprints, Space jumps, Q opens the arsenal, R rebuilds the yard, and Esc releases the mouse. Keys 1–9 equip the first nine unlocked weapons. Desktop keyboard and mouse required.

Block structures collapse when unsupported. Debris has gravity, floor bounce, spin, and friction, with a cap of 260 pieces. Weapons share melee, area-impact, and ranged systems, with increasing power and blast radius; their names do not imply 100 separate simulations. Rebuilding preserves progression. Clear browser site data to reset progression.

Renderer: Three.js 0.160.1 (MIT), bundled in vendor/three.min.js.

