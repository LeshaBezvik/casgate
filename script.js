$(document).ready(function() {
    var inputIds = ["formName", "formEmail", "formPhone", "formMessage"];
  
    for (var i = 0; i < inputIds.length; i++) {
      var inputElement = $("#" + inputIds[i]);
  
      inputElement.on("focus", function() {
        $(this).addClass("active");
          $(this).prev(".form__label").addClass("active");
      });
  
      inputElement.on("blur", function() {
        if ($(this).val() === "") {
          $(this).removeClass("active");
          $(this).prev(".form__label").removeClass("active");
        }
      });
    }

    var header = $("#header");
    var formElement = $(".hide-header-point").first(); // Вибираємо перший елемент з класом .form
  
    var offsetPixels = 60;
    var scrollPositionToShowHeader = formElement.offset().top - offsetPixels; /* Вказуємо, коли показувати заголовок */
  
    $(window).scroll(function() {
      if ($(this).scrollTop() >= scrollPositionToShowHeader) {
        header.addClass("hide-header");
      } else {
        header.removeClass("hide-header");
      }
    });

});
