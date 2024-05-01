const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const ageInput = document.getElementById('age-input');
const submitButton = document.getElementById('submit-button');
const resultsParagraph = document.getElementById('results-paragraph');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  resultsParagraph.style.opacity = '1';
  calculateAge();
});

ageInput.addEventListener(
  'click',
  () => (resultsParagraph.style.opacity = '0')
);

function calculateAge() {
  const ageInputValue = ageInput.value;
  const currentDate = new Date();
  const birthdayDate = new Date(ageInputValue);
  if (ageInputValue === '' || birthdayDate > currentDate) {
    resultsParagraph.textContent = `Please Enter Valid Birthday.`;
    resultsParagraph.style.color = 'tomato';
    ageInput.style.outline = '1px solid #d5d8fe';
  } else {
    resultsParagraph.style.color = '#d5d8fe';
    ageInput.style.outline = 'none';
    let age = getAge(ageInputValue);
    resultsParagraph.textContent = `You Are ${age} ${
      age > 1 ? 'Years' : 'Year'
    } Old!`;
  }
}

function getAge(ageInputValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(ageInputValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}
