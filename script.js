let terms;  // dictionary mapping GenZ word to standard english translation
main()


async function main() {
  /**
   * Retrieves the terms from the back-end
   */
  let response = await fetch("../api/GetTranslations")
  terms = await response.json();
}

function convert() {
  /**
   * Converts the current input and sets the text of the output-box
   */
  let input = document.getElementById('input').value.toLowerCase()
  input = input.split(' ')

  let output = ''
  for (let i = 0; i < input.length; i++) {
    let term = input[i];
    if (term in terms) {
      let possible_terms = terms[term];
      let index = Math.floor(Math.random()*possible_terms.length)
      output += possible_terms[index] + ' ';
    } else {
      output += term + ' ';
    }
  }

  document.getElementById('output').value = output
}