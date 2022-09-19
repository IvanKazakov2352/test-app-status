interface TreeItem {
  id: number;
  parent: number | "root";
  type?: string | null;
}

class TreeStore {
  private items: Array<TreeItem>;
  private parentItems: Array<TreeItem> = []
  private childItems: Array<TreeItem> = []
  constructor() {
    this.items = [
      { id: 1, parent: "root" },
      { id: 2, parent: 1, type: "test" },
      { id: 3, parent: 1, type: "test" },
      { id: 20, parent: 3, type: "test" },

      { id: 4, parent: 2, type: "test" },
      { id: 5, parent: 2, type: "test" },
      { id: 6, parent: 2, type: "test" },
      { id: 10, parent: 6, type: "test" },
      { id: 11, parent: 10, type: "test" },
      { id: 12, parent: 11, type: "test" },

      { id: 7, parent: 4, type: null },
      { id: 9, parent: 4, type: "test" },
      { id: 8, parent: 4, type: null },
    ];
  }
  public getAll() {
    return this.items;
  }

  public getItem(id: number) {
    return this.items.find((i) => i.id === id);
  }

  public getChildren(parentId: number) {
    return this.items.filter((item) => item.parent === parentId);
  }

  public getAllChildren(id: number | string) {
    this.items.forEach(item => {
      if(item.parent === id) {
        this.childItems.push(item)
        this.getAllChildren(item.id)
      }
    })
    return this.childItems;
  }

  public getAllParents(id: number | string) {
    this.items.forEach((item) => {
      if (item.id === id) {
        this.parentItems.push(item)
        this.getAllParents(item.parent)
      }
    });
    return this.parentItems
  }
}
const treeStore = new TreeStore();
console.log(treeStore.getAllChildren(4))