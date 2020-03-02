const fetchData = (endPoint, setterName) => {
  fetch(endPoint, {
    headers: {
      "Content-Type": "application/json",
      credentials: "same-origin"
    }
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .then(body => setterName(body))
    .catch(error => console.error(`Error in fetch: ${error.message}`));
};

export default fetchData;