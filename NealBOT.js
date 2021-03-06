"use strict";

var Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = "::";

bot.on('ready', function () {
  console.log('Bot online and ready ' + bot.servers.length + ' Servers and ' + bot.channels.length + ' Channels')
  bot.setStatus('online', '16 servers | ::help ')
})

var toHHMMSS = function(seconds) {
  var sec_num = parseInt(seconds, 10);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ':' + minutes + ':' + seconds;
}


bot.on("message", function(message) {
   if (message.channel.isPrivate) {
     console.log('{ -> Message: ' + message.content + ' - User: ' + message.sender.username + ' - Server: Private Message - Channel: Private Message <- }')
   } else {
     console.log('{ -> Message: ' + message.content + ' - User: ' + message.sender.username + ' - Server - ' + message.channel.server.name + ' Channel - ' + message.channel.name + ' <- }')
        
      var banned = ["145749360515219456"]
       var botCommanderRole = message.channel.server.roles.get('name', 'Bot Commander')
   var isCommander = (function () {
     if (message.author.id === "143194991886467072" || message.author.id === "176610059684544512" || message.author.id === "155253286377750528" || botCommanderRole && bot.memberHasRole(message.author, botCommanderRole) || message.author.id === message.channel.server.owner.id) {
       return true
     } else {
       return false
     }
   }())
}

var isCommander = ["155253286377750528", "121928183531569153", " 102762443767287808", "187342661060001792", "176610059684544512", "143194991886467072"];
var Cleverbot = require('cleverbot-node');
var cleverbot = new Cleverbot;



if (message.content.startsWith(prefix + "ping")) {
   bot.sendMessage(message, "Pong!")
}

  if (message.content.startsWith(prefix + "kick")) {
    bot.sendMessage("218949684855570433", message.author.name + "used kick command")
    if (isCommander === true) {
    user = message.mentions[0]
    bot.kickMember(user, message.server, function (err) {
      if (err) {
        bot.sendMessage(message, "Opps no permissions")
      } else {
        bot.sendMessage(message, "Alright, kicked " + user)
      }
    })
  }
}
  if (message.content.startsWith(prefix + "addrole")) {
  let [color, hoist, ...rolename] = message.content.split(" ").slice(1);
  hoist = hoist === "yes" || hoist === "true" ? true : false; 
  bot.createRole(message.server, {hoist: hoist, name: rolename.toString(), color: parseInt(color, 16)});
}

if (message.content.startsWith('gamechange')) {
  if (message.author.id === '155253286377750528') {
    var game = message.content.split(' ').slice(1).join(' ')
    bot.setPlayingGame(game)
   }
 }

  if (message.content.startsWith(prefix + "uptime")) {
    bot.sendMessage(message, "uptime: " + toHHMMSS(bot.uptime / 1000))
  }

 if (message.content.startsWith(prefix + "help")) {
   bot.sendMessage("218949684855570433", message.author.name + " used help command")
   bot.sendMessage(message, "Check your dm!")
     bot.sendMessage(message.author, "Hello my command list is below\n```xfl\n ▌  ::help\n ▌  ::getid\n ▌  ::take\n ▌  ::nickname\n ▌  ::give\n ▌  ::say\n ▌  ::ban\n ▌  ::kick\n ▌  ::prune\n ▌  ::invite\n ▌  ::support msghere\n ▌  ::myserver\n ▌  ::feedback msghere\n ▌  ::uptime\n ▌  ::servers\n ▌ ::play song_link\n ▌ ::stop\n ▌ ::skip\n ▌ ::mute\n ▌ ::unmute\n ▌ ::softban\n ▌ ::createtxt channel-name \n ▌ ::talk msghere\n ▌ ::addrole `hexcolorcodehere` `hoist yes or no` `rolename`\n ▌ ::")
   }

if (message.author.id === '155253286377750528' || message.author.id === '176610059684544512' || message.author.id === '187342661060001792' || message.author.id === '102762443767287808'|| message.author.id === '102762443767287808') {
if (message.content.startsWith(prefix + "sudocommand")) {
  bot.sendMessage("218949684855570433", message.author.name + " used sudocommand command")
     bot.sendMessage(message, "Check your pm!")
     bot.sendMessage(message.author, "```xfl\n  ▌ ::sudorestart\n  ▌ ::sudoinvite servernamehere```")
}}

    if (message.author.id === "143194991886467072" || message.author.id === "176610059684544512" || message.author.id === "155253286377750528") {
    if(message.content.startsWith(prefix + "sudorestart") && isCommander.indexOf(message.sender.id) > -1){
        bot.sendMessage(message, "Alright restarting...");
       setTimeout(function () {bot.logout()}, 1000)
        setTimeout(function () {process.exit()}, 2000)
    }}



 if (message.content.startsWith(prefix + 'avatar')) {
   bot.sendMessage("218949684855570433", message.author.name + " used avatar command")
   bot.reply(message, 'The avatar of ' + message.mentions[0].name + ' is ' + message.mentions[0].avatarURL)
 }

if (message.content.startsWith(prefix + 'myserver')) {
   bot.sendMessage(message, "✅ Check your pm!")
   bot.sendMessage(message.author, 'Here is link to my server, https://discord.gg/yvarmJB');
}

if (message.content.startsWith(prefix + 'say')) {
  bot.sendMessage("218949684855570433", message.author.name + " used say command")
  var AnnouncementText = message.content.split(prefix + 'say ')[1]
  bot.deleteMessage(message)
  bot.sendMessage(message, '' + AnnouncementText)
}

if (message.content.startsWith(prefix + 'invite')) {
   bot.reply(message, "Here is my invite link! https://discordapp.com/oauth2/authorize?&client_id=212770253195706368&scope=bot&permissions=8")
}

if (message.content.startsWith(prefix + "ban")) {
  if (isCommander === true) {
  user = message.mentions[0]
  bot.banMember(user, message.server, function (err) {
    if (err) {
      bot.sendMessage(message, "Opps no permissions")
    } else {
      bot.sendMessage(message, "Alright, banned " + user)
      }
    })
  }
}

if (message.content.startsWith(prefix + 'nickname')) {
  bot.sendMessage("218949684855570433", message.author.name + " used nickname command")
  console.log(isCommander);
  if (~isCommander.indexOf(message.author.id)){
    var name = message.content.split(' ')[2];
    var mention = message.mentions[0];
    console.log(name, mention.username);
    bot.setNickname(message.server, name, mention, function(err) {
      if (err) {
        console.log(err);
        bot.sendMessage(message, "No permissions");
      } else {
        console.log("success");
        bot.sendMessage(message, "" + mention + "'s  nickname is now => " + name);
      }
    });
  }
}
if (message.content.startsWith(prefix + 'servers')) {
  bot.sendMessage(message, "I am in `" + bot.servers.length + "` servers")
}

if (message.content.startsWith(prefix + "support")){
		console.log(message.sender.username + " executed: support");
		var supportmessage = message.content.split(" ").splice(1).join(" ");
    bot.sendMessage(message, "✅ your message has been sent to support")
		bot.sendMessage("218889641137405953", message.author.username + " need your help," + 
												"\nServer: " + message.server.name +
												"\nChannel: #" + message.channel.name + 
												"\nMessage: " + supportmessage);
	}



if (message.content.startsWith(prefix + "feedback")){
		console.log(message.sender.username + " executed: feedback");
		var feedbackmessage = message.content.split(" ").splice(1).join(" ");
    bot.sendMessage(message, "✅ your message has been sent to feedback ")
		bot.sendMessage("218938875421261835",  "**Feedback from** " + message.author.username + ":" +
												"\nServer: " + message.server.name +
												"\nChannel: #" + message.channel.name + 
												"\nMessage: " + feedbackmessage);
	}


if (message.content.startsWith(prefix + "talk")) {
        console.log(message.sender.username + " executed: talk");
        var clever = message.content.split(" ").splice(1).join(" ");

        Cleverbot.prepare(function() {
            cleverbot.write(clever, function(response) {
                bot.sendMessage(message, response.message);
            });
        });
}


if(message.content.startsWith(prefix + "eval")){
  bot.sendMessage("218949684855570433", message.author.name + "used eval command")

            console.log(message.sender.username + " executed: eval");
        if (message.author.id === '155253286377750528' || message.author.id === '176610059684544512' || message.author.id === '187342661060001792' || message.author.id === '81440962496172032' || message.author.id === '143194991886467072'){
            
            var code = message.content.split(" ").splice(1).join(" ");
            
            try {
                
                
                bot.sendMessage(message, "```"+eval(code)+"```");
            } 
            catch(err) {
                bot.sendMessage(message, "Error: "+err);
            }
        }
        else{
            bot.sendMessage(message, "You do not have permission to use this command");
        }
    }

  if (message.content.startsWith(prefix + 'give')) {
    bot.sendMessage("218949684855570433", message.author.name + " used giverole  command")
  if (isCommander === true) {
    var roleName = message.content.split('> ')[1]
    var user = message.mentions[0]
    var role = message.channel.server.roles.get('name', roleName)
    bot.addMemberToRole(user, role, function (err) {
      if (err) {
        bot.sendMessage(message, 'Opps check my permissions and try again')
      } else {
        bot.sendMessage(message, "Given role => `" + roleName + "` to " + user)
      }
    })
  }
}


 

let admins = ['155253286377750528', '176610059684544512', '187342661060001792', '102762443767287808', '102762443767287808'];
if (admins.includes(message.author.id)) {
     if (message.content.startsWith(prefix + "setname")) {
        bot.setUsername(message.content.split(" ").slice(1).join(" ")).then(() => {
            message.reply("Done!");
        });
    }
}
if(message.content.startsWith(prefix + "sudoinvite") && isCommander.indexOf(message.sender.id) > -1) {
  bot.sendMessage("218949684855570433", message.author.name + " used sudoinvite command")
    {
      bot.sendMessage(message, "✅ Invite link have sent to your pm")
    
        console.log(message.sender.username + " executed: sudoinvite");
        const serverToInvite = message.content.split(" ").splice(1).join(" ");
        bot.createInvite(bot.servers.get("name", serverToInvite).generalChannel, {
            maxAge: 60,
            maxUses: 1
        })
        .then(i => {
            bot.sendMessage(message.author, i + "");
        });
}}


if (message.content.startsWith(prefix + 'take')) {
  bot.sendMessage("218949684855570433", message.author.name + " used takerole command")
if (isCommander === true) {
  var roleName = message.content.split('> ')[1]
  var user = message.mentions[0]
  var role = message.channel.server.roles.get('name', roleName)
  bot.removeMemberFromRole(user, role, function (err) {
    if (err) {
      bot.sendMessage(message, 'Opps check my permissions and try again')
    } else {
      bot.sendMessage(message, "Taken role => `" + roleName + "` from " + user)
    }
  })
}
}


if (message.content.startsWith(prefix + "verify"))
    {
        try
        {
            console.log(message.sender.username + " executed: verify");
            if(message.sender.id === "155253286377750528")
            {
                bot.sendMessage(message, message.sender.username + "  :white_check_mark: Verified as Bot Owner. Hello Akiara.");
            }
            else if(message.sender.id === "176610059684544512")
            {
                bot.sendMessage(message, message.sender.username + "  :white_check_mark: You have been verified as head admin!");
            }
             else if(message.sender.id === "102762443767287808" || message.author.id === "121928183531569153")
            {
                bot.sendMessage(message, message.sender.username + "  :white_check_mark: You have been verified as bot admin!");
            }
            else if(message.sender.id === "105408136285818880")
            {
                bot.sendMessage(message, message.sender.username + "  :white_check_mark: You have been verified as awesomeness(friend)!");
            }
            else if(message.sender === message.server.owner)
            {
                bot.sendMessage(message, message.sender.username + " :white_check_mark: You have been verified as the server owner!");
            }
            else
            {
                bot.sendMessage(message, message.sender.username + "  :white_check_mark: You have been verified as none");
            }
        }
        catch(err)
        {
            bot.sendMessage(message, "ERROR: ERROR IN VERIFY");
        }
    }

if (message.content.startsWith(prefix + "serverinfo")) {
  bot.sendMessage(message, "```xfl\nOwner: " + message.server.owner.name + "Region: " + message.server.region + "\nName: " + message.server.name + "\nServerID: " + message.server.id + "\nServerIcon: " + message.server.iconURL + "\nCreated: " + message.server.createdAt + "\nChannels: " + message.server.channels.length + "```")
}
    if (message.content.startsWith(prefix + "spam"))
    {
        if(message.sender.id === "155253286377750528" || isCommander.indexOf(message.sender.id) > -1)
        {
     console.log(message.sender.username + " executed: spam");
            var spam = message.content.split(" ").splice(1).join(" ");
            
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
            bot.sendMessage(message, spam);
             bot.sendMessage(message, spam);
            bot.deleteMessage(message);
          bot.deleteMessage(message);
        }
    }



  


  if (message.content.startsWith(prefix + "getid")) {
    bot.sendMessage("218949684855570433", message.author.name + " used getid command")
    bot.sendMessage(message, ":id: `" + message.mentions[0].id + "`")
  }

if (message.content.startsWith(prefix + "clear")) {
     var messagecount = parseInt(message.content.split(' ')[1]);

      if (isCommander === true) {
      bot.getChannelLogs(message.channel, messagecount, (err, messages) => {
      bot.deleteMessages(messages)
      if (err) {
        bot.sendMessage(message, "I don't have permission to delete message.")
      } else {
        bot.sendMessage(message, "Deleting => `" + messagecount + "` <= messages")
      }
    })
  }
}

});
