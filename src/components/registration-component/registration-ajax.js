import axios from "axios";

export const handleSubmit = userInput => event => {
  event.preventDefault();
  const apiEndPoint = "https://sheltered-stream-06916.herokuapp.com/add";
  console.log(apiEndPoint);
  console.log(userInput);
  axios
    .post(apiEndPoint, userInput)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
