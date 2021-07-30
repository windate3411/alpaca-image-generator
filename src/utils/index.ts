import mergeImages from 'merge-images'

export const getRandomItem = (list: string[]) => {
  return list[Math.floor(Math.random() * list.length)]
}

export const getImage = (imagePath: string[]) => {
  return mergeImages(imagePath).then((b64) => b64)
}

export const downloadImage = (imageSrc: string) => {
  const a = document.createElement('a')
  a.href = imageSrc
  a.download = 'test.png'
  a.click()
}
