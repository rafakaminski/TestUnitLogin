function quantDigito(password){
    if (password.length >= 8){
        return true;
    } else {
        return false;
    }
}

module.exports = quantDigito