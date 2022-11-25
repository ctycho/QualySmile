$('#serviceSend').on('click', function() {
    let name = $('#user_name').val();
    let phone = $('#user_phone').val();

    console.log(name)
    console.log(phone)

    $.ajax({
        url: '../ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'phone': phone },
        dataType: 'html',
        beforeSend:  function() {
            $('#sendMail').prop('disabled', true)
        },
        success: function(data) {
            console.log(data)
            $('#sendMail').prop('disabled', false)

            if (data) {
                $('#serviceForm').trigger('reset');
                document.getElementById('modal').classList.add('modal__show');
            }
        }
    })
})

$('#sendMail').on('click', function() {
    let name = $('#name').val();
    let phone = $('#phone').val();

    console.log(name)
    console.log(phone)

    $.ajax({
        url: '../ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'phone': phone },
        dataType: 'html',
        beforeSend:  function() {
            $('#sendMail').prop('disabled', true)
        },
        success: function(data) {
            console.log(data)
            $('#sendMail').prop('disabled', false)

            if (data) {
                $('#mailForm').trigger('reset');
                document.getElementById('modal').classList.add('modal__show');
            }
        }
    })
})


//  Service form
function onlyNumberKey(evt) {       
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode < 48 || ASCIICode > 57) && ASCIICode != 43)
        return false;
    return true;
}
function notNumberKey(evt) {       
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode < 48 || ASCIICode > 57) && ASCIICode != 43)
        return true;
    return false;
}