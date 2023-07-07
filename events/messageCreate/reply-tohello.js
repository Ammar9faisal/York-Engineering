module.exports = (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === 'hello'){
        msg.reply("Hello! Welcome to the York Engineering '27 Server")
    }
}