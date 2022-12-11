const User = function(name){
    this.name = name;
    this.Chatroom = null;
}

User.prototype = {
    send: function (message,to) {
        this.Chatroom.send(message,this,to);
    },
    receive: function(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

let Chatroom  = function(){
    let users = {}; //list of users
    return{
        register: function(user){
            users[user.name] = user;
            user.Chatroom = this
        },
        send:function(message,from,to){
            if(to){
                //Single user message
            }else{
                //Mass message
                for(key in users){
                    if(users[key] !== from){
                        users[key].receive(message,from);
                    }
                }
            }

        }
    }
}

const brad = new User("Brad");
const sarah = new User("Sarah");
const aly = new User("Aly");

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(sarah);
chatroom.register(aly);

brad.send("Hello Sarah",sarah);
sarah.send("Hello brad, you are the best dev ever",brad);
aly.send("Hello everone!!!!!!!!!!");
