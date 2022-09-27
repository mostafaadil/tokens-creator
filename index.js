const createToken = (tokenLength) => {
    var text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678910#$%^&*+-~!@><";
    var token = "";
    const range = 1000;
  //  console.log(time)
    for (var i = 0; i <tokenLength; i++) {
        var index = Math.floor(Math.random() * (text.length - 1 + 0) + 0);
        var time = new Date().getMilliseconds();
        token += text[index] + time;
    }
    return token
}
module.exports = createToken