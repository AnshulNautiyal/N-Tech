import axios from "axios";

export const handleSubmit = userInput => event => {
  event.preventDefault();
  const apiEndPoint =
    "https://sheltered-stream-06916.herokuapp.com/professional";
  axios
    .post(apiEndPoint, userInput)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
