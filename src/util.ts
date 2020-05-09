export const getRandomValue = (min: number, max: number) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min
}

export const datetimeFormat = (date: Date): string => {
  return date.getFullYear() + (date.getMonth() + 1).toString().padStart(2, "00") + date.getDate().toString().padStart(2, "00")
    + date.getHours().toString().padStart(2, "00")
    + date.getMinutes().toString().padStart(2, "00")
    + date.getSeconds().toString().padStart(2, "00")
    + date.getMilliseconds().toString().padStart(3, "000")
}
