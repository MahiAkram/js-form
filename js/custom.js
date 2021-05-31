var fname = document.getElementById('fname');
var fnameErr = document.getElementById('fnameErr');

var lname = document.getElementById('lname');
var lnameErr = document.getElementById('lnameErr');

var email = document.getElementById('email');
var emailErr = document.getElementById('emailErr');

var pass = document.getElementById('pass');
var passErr = document.getElementById('passErr');

var cpass = document.getElementById('cpass');
var cpassErr = document.getElementById('cpassErr');

function subm(){
    if(fname.value == ''){
        fname.style.border = '1px solid #ff0000';
        fname.focus();
        fnameErr.innerHTML = "Please fill out this section"
        return false;
    }
    if(lname.value == ''){
        lname.style.border = '1px solid #ff0000';
        lname.focus();
        lnameErr.innerHTML = "Please fill out this section"
        return false;
    }
    if(email.value == ''){
        email.style.border = '1px solid #ff0000';
        email.focus();
        emailErr.innerHTML = "Please fill out this section"
        return false;
    }
    if(pass.value == ''){
        pass.style.border = '1px solid #ff0000';
        pass.focus();
        passErr.innerHTML = "Please fill out this section"
        return false;
    }
    if(pass.value.length <= 5){
        pass.style.border = '1px solid #ff0000';
        pass.focus();
        passErr.innerHTML = "Password should be more than 5 characters"
        return false;
    }
    if(cpass.value == ''){
        cpass.style.border = '1px solid #ff0000';
        cpass.focus();
        cpassErr.innerHTML = "Please fill out this section"
        return false;
    }
    if(cpass.value != pass.value){
        cpass.style.border = '1px solid #ff0000';
        cpass.focus();
        cpassErr.innerHTML = "You pass didn't match"
        return false;
    }
}

function errRmv(){
    if(fname.value != ''){
        fname.style.border = '1px solid #ccd0d5';
        fnameErr.innerHTML = "";
    }
    if(lname.value != ''){
        lname.style.border = '1px solid #ccd0d5';
        lnameErr.innerHTML = "";
    }
    if(email.value != ''){
        email.style.border = '1px solid #ccd0d5';
        emailErr.innerHTML = "";
    }
    if(pass.value != ''){
        pass.style.border = '1px solid #ccd0d5';
        passErr.innerHTML = "";
    }
    if(cpass.value != ''){
        cpass.style.border = '1px solid #ccd0d5';
        cpassErr.innerHTML = "";
    }
}

fname.addEventListener('blur',errRmv);
lname.addEventListener('blur',errRmv);
email.addEventListener('blur',errRmv);
pass.addEventListener('blur',errRmv);
cpass.addEventListener('blur',errRmv);

