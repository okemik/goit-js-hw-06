// Storage sınıfı tanımı
class Storage {
  constructor(items) {
    this.items = items; // İlk mal dizisini items özelliğine atar
  }

  // Mevcut öğelerin dizisini döndürür
  getItems() {
    return this.items;
  }

  // Yeni bir öğeyi items dizisine ekler
  addItem(newItem) {
    this.items.push(newItem);
  }

  // Belirtilen öğeyi items dizisinden kaldırır
  removeItem(itemToRemove) {
    this.items = this.items.filter(item => item !== itemToRemove);
  }
}

// Örnek başlatma ve yöntem çağrıları
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
