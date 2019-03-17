module.exports = {
    name: 'Brexit',
    description: 'brexit means brexit get over it',
    execute(message, args) {
        client.on('message', message => {
            if(message.content === 'brexit') {
                message.channel.send('brexit means brexit get over it')
            }
        })
    }
}
