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
  accessories: ['earings', 'flower', 'glasses', 'headphone'],
  backgrounds: [
    'blue50',
    'blue60',
    'blue70',
    'darkblue30',
    'darkblue50',
    'darkblue70',
    'green50',
    'green60',
    'green70',
    'grey40',
    'grey70',
    'grey80',
    'red50',
    'red60',
    'red70',
    'yellow50',
    'yellow60',
    'yellow70',
  ],
}
