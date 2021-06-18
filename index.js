function applyMask({ pattern, string }) {
  let j = 0;
  let charSpecials = ` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`;
  const onlySpecials = charSpecials.split("");
  const numbers = "1234567890";
  const letters = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM";
  let maskedString = "";

  let stringFlat = string.split("");

  charSpecials.split("").map((char, idx) => {
    stringFlat.map((charString, jx) => {
      if (char === charString) {
        stringFlat[jx] = null;
      }
    });
  });
  stringFlat = stringFlat.join("");

  pattern.split("").map((char, i) => {

    if (
      onlySpecials.includes(char) &&
      !onlySpecials.includes(stringFlat[j]) &&
      stringFlat[j] !== undefined
    ) {
      maskedString += char;
    }

    if (
      (letters.split("").includes(stringFlat[j]) && char === "S") ||
      (numbers.split("").includes(stringFlat[j]) && char === "0") ||
      char === "A"
    ) {
      if (stringFlat[j] !== undefined && !onlySpecials.includes(char)) {
        maskedString += stringFlat[j];
        j++;
      }
    }
  });
  return maskedString;
}

let customName = 'myMask';

let inputs = document.querySelectorAll(`[${customName}]`);

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    let atributteContent = input.getAttribute("myMask");
    let masked = applyMask({
      pattern: atributteContent,
      string: input.value,
    });
    input.value = masked;
  });
});
