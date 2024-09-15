const profile = {
    username: "Jacob",
    playTime: 300,

    // Метод изменения имени профиля
    changeUsername(newName) {
        this.username = newName;
    },

    // Метод для обновления времени игры
    updatePlayTime(hours) {
        this.playTime += hours;
    },

    // Метод для получения информации о профиле
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};

// Код для проверки 
console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"