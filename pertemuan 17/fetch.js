const ambilDataUser  = () => {
    fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const {data} = responseData;
        data.forEach((user) => {
          const {first_name, last_name} = user;
          console.log(`First Name: ${first_name}, Last Name: ${last_name}`);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  ambilDataUser ();