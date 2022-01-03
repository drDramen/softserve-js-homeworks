module.exports = {
  sayGreeting(name) {
    const time = new Date().getHours();

    switch (true) {
      case time >= 23 || time < 5:
        return 'Good night, ' + name;
      case time >= 5 && time < 11:
        return 'Good morning, ' + name;
      case time >= 11 || time < 17:
        return 'Good afternoon, ' + name;
      default:
        return 'Good evening, ' + name;
    }
  },
};
