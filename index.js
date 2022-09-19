var TreeStore = /** @class */ (function () {
    function TreeStore() {
        this.parentItems = [];
        this.childItems = [];
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
    TreeStore.prototype.getAll = function () {
        return this.items;
    };
    TreeStore.prototype.getItem = function (id) {
        return this.items.find(function (i) { return i.id === id; });
    };
    TreeStore.prototype.getChildren = function (parentId) {
        return this.items.filter(function (item) { return item.parent === parentId; });
    };
    TreeStore.prototype.getAllChildren = function (id) {
        var _this = this;
        this.items.forEach(function (item) {
            if (item.parent === id) {
                _this.childItems.push(item);
                _this.getAllChildren(item.id);
            }
        });
        return this.childItems;
    };
    TreeStore.prototype.getAllParents = function (id) {
        var _this = this;
        this.items.forEach(function (item) {
            if (item.id === id) {
                _this.parentItems.push(item);
                _this.getAllParents(item.parent);
            }
        });
        return this.parentItems;
    };
    return TreeStore;
}());
var treeStore = new TreeStore();
console.log(treeStore.getAllChildren(4));
