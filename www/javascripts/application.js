// Display the native navigation bar with the title "Hello World!"
steroids.view.navigationBar.show("The awesome app");

var loginButton = new steroids.buttons.NavigationBarButton();
loginButton.title = "the Button";

loginButton.onTap = function() {
    navigator.notification.alert(
        'You tapped the button!',
        function(){},
        'the Alert',
        'I did!'
    );
}

steroids.view.navigationBar.update({
    buttons: {
      right: [loginButton]
    }
});

function showModal() {
  var webView = new steroids.views.WebView("/views/modalExample/show.html");
  steroids.modal.show(webView);
}

