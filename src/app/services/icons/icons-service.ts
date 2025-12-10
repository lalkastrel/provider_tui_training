import { Injectable } from '@angular/core';

export interface IconItem {
  id: number;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  private items: IconItem[] = [
    { 
      id: 0, 
      icon: 'heart',
    },
    { 
      id: 1, 
      icon: 'cat',
    },
    { 
      id: 2, 
      icon: 'calendar',
    },
    { 
      id: 3, 
      icon: 'bell',
    },
    { 
      id: 4, 
      icon: 'activity',
    },
    { 
      id: 5, 
      icon: 'triangle',
    },
    { 
      id: 6, 
      icon: 'search',
    },
    { 
      id: 7, 
      icon: 'scan',
    },
    { 
      id: 8, 
      icon: 'message-square',
    },
    { 
      id: 9, 
      icon: 'star',
    }
  ];

  constructor() {}

  getItems(): IconItem[] {
    return this.items;
  }

  getItemById(id: number): IconItem | undefined {
    return this.items.find(item => item.id === id);
  }

  getCount(): number {
    return this.items.length;
  }

  getNextItem(currentId: number): IconItem | undefined {
    const nextId = (currentId + 1) % this.items.length;
    return this.getItemById(nextId);
  }

  getPrevItem(currentId: number): IconItem | undefined {
    const prevId = currentId === 0 ? this.items.length - 1 : currentId - 1;
    return this.getItemById(prevId);
  }
}