const makeAjaxRequest = ({ url, method = 'GET' }) => {
    console.log(url, method);
  }
  makeAjaxRequest({ url: "google.com" });

  export {makeAjaxRequest}