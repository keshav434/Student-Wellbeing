function verifyPassword() {
    var pw = document.getElementById("password").value;
    //check empty password field  
    if (pw == "") {
        alert("**Fill the password please!");
        return false;
    }

    //minimum password length validation  
    if (pw.length < 8) {
        alert("**Password length must be atleast 8 characters");
        return false;
    }

    //maximum length of password validation  
    if (pw.length > 15) {
        alert("**Password length must not exceed 15 characters");
        return false;
    } else {
        alert("Entered Password matches the criterias set");
        return true;

    }
}

function myFunction() {
    document.open();
    document.close();
}

function ImageFun() {
    var Image_Id = document.getElementById('getImage');
    Image_Id.src = "Images/continue.jpeg";
}


function Signup() {
    var pw = document.getElementById("password").value;
    //check empty password field  
    if (pw == "") {
        alert("**Fill the password please!");
        return false;
    }

    //minimum password length validation  
    if (pw.length < 8) {
        alert("**Password length must be atleast 8 characters");
        return false;
    }

    //maximum length of password validation  
    if (pw.length > 15) {
        alert("**Password length must not exceed 15 characters");
        return false;
    } else {
        alert("Entered Password matches the criterias set");
        return true;

    }
}