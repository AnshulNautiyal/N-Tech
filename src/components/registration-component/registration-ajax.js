import axios from "axios";

export const handleSubmit = userInput => event => {
  document.body.style.overflow = "hidden";
  document.getElementById("modal").style.display = "block";
  event.preventDefault();
  const apiEndPoint =
    "https://sheltered-stream-06916.herokuapp.com/professional";
  axios
    .post(apiEndPoint, userInput)
    .then(function() {
      document.body.style.overflow = "auto";
      document.getElementById("modal").style.display = "none";
    })
    .catch(function(error) {
      console.log(error);
    });
};
