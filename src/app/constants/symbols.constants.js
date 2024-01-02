export const SYMBOLS_HALLOWEEN = ['🤖', '🦾', '⚙️', '🛠️', '🔧', '🎮', '🕹️', '👾', '🚀', '🚅', '🛰', '🌏', '🛩️', '🎆'];

export const SYMBOLS_ANIMALS = ['🗲', ' 📡', '💻', '🛰️', '⚛', '📱', '💾', '🌌', '🧠', '🎮', '🕹️', '👾', '🚀'];

export const SYMBOLS_SPORTS = ['🎓', '📚', '🚆', '🏗', '🚅', '🛰', '🌏', '🛩️', '🎆'];

export const SYMBOLS_FORTUNE = ['🔬', '🧬', '🧪', '🛸', '🔮', '🎧', '🪐', '👩‍🚀', 'π', '☄️', '💾', '🌌', '🧠'];

export const SYMBOLS_HALLOWEEN1 = ['🔧', '🎮', '🕹️', '👾', '🚀', '🤖', '🦾', '⚙️', '🛠️'];

export const SYMBOLS_ANIMALS1 = ['🗲', ' 📡', '💻', '🛰️', '⚛', '📱', '💾', '🌌', '🧠', '📚', '🚆', '🏗', '🚅'];

export const SYMBOLS_SPORTS1 = ['🎓', '📚', '🚆', '🏗', '🚅', '🛰', '🌏', '🛩️', '🎆'];

export const SYMBOLS_FORTUNE1 = ['🔬', '🧬', '🧪', '🛸', '🔮', '🎧', '🪐', '👩‍🚀', 'π', '☄️'];

export const ALL_SYMBOLS = [
    SYMBOLS_HALLOWEEN,
    SYMBOLS_ANIMALS,
    SYMBOLS_SPORTS,
    SYMBOLS_FORTUNE,
    SYMBOLS_HALLOWEEN1,
    SYMBOLS_ANIMALS1,
    SYMBOLS_SPORTS1,
    SYMBOLS_FORTUNE1,
];
export const SYMBOLS_RANDOM = ALL_SYMBOLS[(Math.random() * ALL_SYMBOLS.length) | 0];
