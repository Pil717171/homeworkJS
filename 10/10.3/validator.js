function CommonValidator(msg) {
    this.errorMessage = msg || 'Common error message';
    this.toString = function() {
        return this.errorMessage;
    }
}

function Required() {
    CommonValidator.call(this, 'This field is required.');
    this.test = function(value) {
        return value.length > 0;
    }
}

function MinLength(value) {
    CommonValidator.call(this, 'Min length should be 7');
    this.test = function(value) {
        return value.length >= 7;
    }
}

// Валидатор для email
function EmailValidator () {
    CommonValidator.call(this, 'Неверно введен Email'); 
    this.test = function(value) {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(value) == true;
    }
}