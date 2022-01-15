interface useListData<T> {
  add: (obj: T) => T[];
  change: (index: number, obj: T) => T[];
  remove: (index: number) => T[];
}

export type { useListData };