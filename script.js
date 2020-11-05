let terms;  // dictionary mapping GenZ word to standard english translation
main()


function main() {
  /**
   * Retrieves the terms from the back-end
   */
  let response = fetch("../api/GetTranslations")
  let data = response.json()
  console.log(data)
}

function convert() {
  /**
   * Converts the current input and sets the text of the output-box
   */

}