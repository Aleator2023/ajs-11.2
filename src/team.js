class Team {
    constructor() {
      this.characters = []; // Массив для хранения персонажей
    }
  
    add(character) {
      this.characters.push(character); // Добавление персонажа в команду
    }
  
    // Использование генератора для итерации
    *[Symbol.iterator]() {
      for (const character of this.characters) {
        yield character;
      }
    }
  }
  
  // Пример использования
  const team = new Team();
  team.add({ name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 });
  team.add({ name: 'Маг', type: 'Magician', health: 40, level: 1, attack: 45, defence: 5 });
  
  for (const character of team) {
    console.log(character);
  }
  