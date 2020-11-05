let terms;  // dictionary mapping GenZ word to standard english translation
main()


async function main() {
  /**
   * Retrieves the terms from the back-end
   */
  let response = await fetch("../api/GetTranslations");
  console.log(response);
  terms = await response.json();
  console.log(terms);
}

function convert() {
  /**
   * Converts the current input and sets the text of the output-box
   */

}