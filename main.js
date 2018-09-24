$(document).ready(() => {
  const $menuButton = $('#menu_button');
  const $navDropdown = $('#nav-dropdown');

  $menuButton.on('click', () => {
    $navDropdown.show();
  })

  $navDropdown.on('mouseleave', () => {
    $navDropdown.hide();
  })
})

$(document).ready(() => {
  const $loginButton = $('.login-button');
  const $loginForm = $('.login-form');

  })

  // $('.login-button').on('click', () => {
  //   $('.login-form').toggle();

  $(document).ready(function(){
  $(".login-button").click(function(){
    $(".login-form").animate({
      width: "toggle"
    });
  });
});
