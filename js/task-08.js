const formRef = document.querySelector('.login-form');

const onFormSubmit = function (event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    alert('All fields must be filled!');
  }
  const data = { email, password };

  console.log(data);
  event.currentTarget.reset();
};

formRef.addEventListener('submit', onFormSubmit);
