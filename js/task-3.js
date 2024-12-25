class StringBuilder {
  // Özel alan tanımı
  #value;

  constructor(initialValue) {
    this.#value = initialValue; // İlk dizeyi özel #value özelliğine atar
  }

  // #value özelliğinin geçerli değerini döndürür
  getValue() {
    return this.#value;
  }

  // #value özelliğinin sonuna str ekler
  padEnd(str) {
    this.#value += str;
  }

  // #value özelliğinin başına str ekler
  padStart(str) {
    this.#value = str + this.#value;
  }

  // #value özelliğinin başına ve sonuna str ekler
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

// Örnek başlatma ve yöntem çağrıları
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
