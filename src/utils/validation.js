const validateSignupData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || lastName) {
    throw new Error('Name is not valid!');
  } else if (firstName.length < 4 || firstName.length > 50) {
    throw new Error('FirstName should be 4-50 charaters');
  } else if (lastName.length < 4 || lastName.length > 50) {
    throw new Error('FirstName should be 4-50 charaters');
  }
};
