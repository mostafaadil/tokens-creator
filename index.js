const createToken = (tokenLength) => {
    var text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678910#$%^&*+-~!@><";
    var token = "";
    for (var i = 0; i <tokenLength; i++) {
        var index = Math.floor(Math.random() * (text.length - 1 + 0) + 0);
        token += text[index];
    }
    return token
}
module.exports = createToken