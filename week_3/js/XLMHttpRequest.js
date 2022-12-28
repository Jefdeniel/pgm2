//1. Create a XMLHttpRequest object (Send to and load data from a WebAPI)
var xhr =
  typeof XMLHttpRequest != undefined
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
//2. Declare the type of the response
xhr.responseType = "json";
//3. Listen to the changes in states within the connection
xhr.onreadystatechange = function () {
  switch (xhr.readyState) {
    case 0:
      console.log("UNSENT");
      break;
    case 1:
      console.log("OPENED");
      break;
    case 2:
      console.log("HEADERS RECEIVED");
      console.log(this.getAllResponseHeaders());
      break;
    case 3:
      console.log("LOADING");
      break;
    case 4:
    default:
      console.log("LOADED");
      //If status equals 200 then everything is ok else nok
      if (xhr.status == 200) {
        console.log("OK");
        //Get the received data --> response
        var data = !xhr.responseType ? JSON.parse(xhr.response) : xhr.response;
        console.log(data);
      } else {
        console.log(Error(xhr.status));
      }
      break;
  }
};
//4. Open the connection or tunnel to the resource on the url
xhr.open("GET", url, true);
//5. Make the request to the specified resource
xhr.send(null);
