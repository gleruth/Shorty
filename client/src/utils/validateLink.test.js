import validateLink from "./validateLink";

it("validates a basic link", () => {
  expect(validateLink("https://www.ambler.fr")).toBeUndefined();
});

it("unvalidates a text that is not a link", () => {
  expect(validateLink("Ambulance")).toEqual("Your link is invalid: Ambulance");
});
