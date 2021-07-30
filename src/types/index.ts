type AlpacaImageType =
  | 'Hair'
  | 'Ears'
  | 'Eyes'
  | 'Mouth'
  | 'Neck'
  | 'Leg'
  | 'Accessories'
  | 'Background'

export interface AlpacaImageTypeList {
  imageTypeList: AlpacaImageType[]
}

export interface imageMapping {
  accessories: ['earings', 'flower', ' glasses', 'headphone']
  ears: ['default', 'tilt-backward', 'tilt-forward']
  eyes: ['default', 'angry', 'naughty', 'panda', 'smart', 'star']
  hair: ['default', 'bang', 'curls', 'elegant', 'fancy', 'quiff', 'short']
  leg: [
    'default',
    'bubble-tea',
    'cookie',
    'game-console',
    'tilt-backward',
    'tilt-forward'
  ]
  mouth: ['default', 'astonished', 'eating', 'laugh', 'tongue']
  neck: ['default', 'bend-forward', 'bend-backward', 'thick']
}
