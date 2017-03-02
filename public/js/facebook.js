function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  console.log(response);
  $(".facebookLogin").hide();
  // document.getElementById(".facebookLogin").style.display='none';
  // document.getElementById(".facebookLogin").style.visibility = "hidden";
  // $("#name").hide();
  console.log("got here");
  document.getElementById("name").innerHTML = response['name'];
  // document.getElementById("photo").innerHTML = response['picture'];
  // document.getElementById("photo").src = response['picture'];
  var pic = response['picture'];
  var FBpic = pic.data.url;
  $("#photo").attr('src', FBpic);
}