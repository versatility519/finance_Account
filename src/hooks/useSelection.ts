import { useState } from 'react';

export function useSelection<T>(items: T[], getKey: (item: T) => string) {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

  const isSelected = (item: T) => selectedKeys.has(getKey(item));
  
  const toggleSelection = (item: T) => {
    const key = getKey(item);
    const newSelection = new Set(selectedKeys);
    if (newSelection.has(key)) {
      newSelection.delete(key);
    } else {
      newSelection.add(key);
    }
    setSelectedKeys(newSelection);
  };

  const toggleAll = (items: T[]) => {
    if (selectedKeys.size === items.length) {
      setSelectedKeys(new Set());
    } else {
      setSelectedKeys(new Set(items.map(getKey)));
    }
  };

  const clearSelection = () => {
    setSelectedKeys(new Set());
  };

  return {
    selectedKeys,
    isSelected,
    toggleSelection,
    toggleAll,
    clearSelection,
  };
}