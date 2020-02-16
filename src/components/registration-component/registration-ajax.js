import axios from "axios";

export const handleSubmit = userInput => event => {
  document.body.style.overflow = "hidden";
  document.getElementById("modal").style.display = "block";
  event.preventDefault();
  const apiEndPoint =
    "https://sheltered-stream-06916.herokuapp.com/professional";

  const formTag = event.target;
  axios
    .post(apiEndPoint, userInput)
    .then(function(response) {
      const { status = "true", message = "" } = response.data;
      document.body.style.overflow = "auto";
      document.getElementById("modal").style.display = "none";

      if (status === "true") {
        document.getElementById("SuccessFailModal").style.display = "block";
      }
      formTag.reset();
    })
    .catch(function(error) {
      console.log(error);
    });
};
