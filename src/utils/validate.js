const validate = ({ type, value }) => {
  let regex = /./;
  switch (type) {
    case "email":
      regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(value)) return "Please enter a valid email.";
      else return "";
    case "password":
      regex = /^(?=.*[A-Z])[A-Za-z\d$@$!%*?&]{6,}/;
      if (!regex.test(value))
        return "Password should be 6 char long and have 1 uppercase char.";
      else return "";
    default:
      console.log("Invalid type :", type);
      return "Validation Failed.";
  }
};

export default validate;
