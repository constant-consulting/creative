var $contactForm = $('#contactForm');
var targetEmail = 'constant-sales@googlegroups.com';
$contactForm.on('submit', function(ev){
    ev.preventDefault();
    var target = "https://formspree.io/constant-sales@googlegroups.com";
    var formData = {name: $('#Name').val(), message: $('#Message').val()};
    console.log("formdata");
    console.log(formData);
    console.log("submitting form")
    $.ajax({
        url: target,
        method: 'POST',
        data: formData,
        dataType: "json",
        success: function(msg){
            console.log("submitted");
            $("#message-success").show();
        }
    });
});
