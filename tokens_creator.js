const createToken = () => {
    var text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678910#$%^&*+-~!@><";
    var token = "";
    const range = 1000;
    var time = new Date.now();
    console.log(time)
    for (var i = 0; i < 1000; i++) {
        var index = Math.floor(Math.random() * (text.length - 1 + 0) + 0);
        var temp = Math.floor(Math.random() * (time.length - 1 + 0) + 0)
        token += text[index] + temp;
    }
    return token
}
module.exports = createToken