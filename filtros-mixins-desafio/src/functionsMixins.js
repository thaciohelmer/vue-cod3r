export default {
  computed: {
    substituteCommaCG: function () {
      return this.name
        .replaceAll(" ", ",")
        .split(",")
        .filter((e) => e.length !== 0)
        .join(",");
    },
    wordLengthCG: function () {
      var wordsWithLength = [];
      const singleWords = this.name.split(" ").filter((e) => e.length !== 0);
      singleWords.forEach((e) => {
        wordsWithLength.push(`${e} (${e.length})`);
      });
      return wordsWithLength.join(" ");
    },
  },
}