//TODO: add warnings like last day to buy fall trees,
//last day to buy pig to get truffles before winter etc.

const birthdays = [
  {
    name: "Kent",
    season: "spring",
    day: 4,
    loves: ["Fiddlehead Risotto", "Roasted Hazelnuts"],
    likes: ["Daffodil", "Eggs", "Fruit"]
  }
];

module.exports = {
  birthdays: birthdays.map(({ name, season, day, loves, likes }) => {
    return { name, key: name, season, day, loves, likes };
  })
};
