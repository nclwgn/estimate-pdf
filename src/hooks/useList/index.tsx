import { useListData } from "./types";

function useList<T> (list: T[]): useListData<T> {
  const change = (index: number, obj: T): T[] => {
    // Removes specified element from array
    const newList = remove(index);

    // Inserts modified element into the same array index
    newList.splice(index, 0, obj);

    return newList;
  }

  const add = (obj: T): T[] => [...list, obj];

  const remove = (index: number): T[] => list.filter((_, i) => i !== index);

  return {
    change,
    add,
    remove
  }
}

export default useList;