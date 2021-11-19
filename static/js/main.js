
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input2').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
            
  
    
    /*==================================================================
    [ Validate ]*/
    var pass = $('.validate-input input[name="pass"]');
    var sex = $('.validate-input input[name="sex"]');
    var age = $('.validate-input input[name="Age"]');
    var sib = $('.validate-input input[name="sib"]');
    var parch = $('.validate-input input[name="parch"]');
    var fare = $('.validate-input input[name="fare"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(pass).val().trim() == ''){
            showValidate(pass);
            check=false;
        }

        if($(sex).val().trim() == ''){
            showValidate(sex);
            check=false;
        }

        if($(age).val().trim() == ''){
            showValidate(age);
            check=false;
        }

        if($(sib).val().trim() == ''){
            showValidate(sib);
            check=false;
        }

        if($(parch).val().trim() == ''){
            showValidate(parch);
            check=false;
        }

        if($(fare).val().trim() == ''){
            showValidate(fare);
            check=false;
        }

        return check;
    });


    $('.validate-form .input2').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);