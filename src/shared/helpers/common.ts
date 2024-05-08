export const generateRandomValue = (min: number, max: number): number => Math.floor(min + Math.random() * (max + 1 - min));

export const getRandomItem = <T>(items: T[]): T => items[generateRandomValue(0, items.length - 1)];

export const getRandomBooleanValue = (): boolean => !!generateRandomValue(0, 1);

export const getRandomArray = <T>(items: T[], length: number): T[] => {
  const array = new Set<T>();
  while (array.size < length) {
    array.add(getRandomItem(items));
  }
  return [...array.values()];
};
