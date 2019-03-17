module.exports = {
    name: 'avatar',
    execute(message, args) {
        client.on('message', message => {

            if (message.content === "what's my avatar") {
        
                message.reply(message.author.avatarURL);
            }
        });
    }
}
