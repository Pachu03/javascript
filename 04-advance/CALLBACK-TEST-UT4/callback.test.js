import * as callback from "./callback";
const numbers1 = [1, 2, 3, 4, 5];
const numbert2 = [2, 3, 1, 2];
const taskList = ["study", "buy", "sleep", "play"];
describe("callback", () => {
  it("should get 23 when adding [1, 2, 3, 4, 5] + [2, 3, 1, 2]", () => {
    const result = callback.sumArraysCallback(
      numbers1,
      numbert2,
      callback.sumArray
    );
    expect(result).toBe(23);
  });
  it("should gets My task list: study buy sleep play, when pass [study, buy, sleep, play]", () => {
    const result = callback.concatTask(taskList, callback.concatList);
    expect(result).toBe("My task list: study buy sleep play");
  });
});
