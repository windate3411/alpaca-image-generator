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

export const imageMapping: { [key: string]: string[] } = {
  neck: ['default', 'bend-forward', 'bend-backward', 'thick'],
  ears: ['default', 'tilt-backward', 'tilt-forward'],
  hair: ['default', 'bang', 'curls', 'elegant', 'fancy', 'quiff', 'short'],
  accessories: ['earings', 'flower', 'glasses', 'headphone'],
  eyes: ['default', 'angry', 'naughty', 'panda', 'smart', 'star'],
  mouth: ['default', 'astonished', 'eating', 'laugh', 'tongue'],
  leg: [
    'default',
    'bubble-tea',
    'cookie',
    'game-console',
    'tilt-backward',
    'tilt-forward',
  ],
}
