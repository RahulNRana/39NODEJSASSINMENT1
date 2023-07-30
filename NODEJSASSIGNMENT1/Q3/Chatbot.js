module.exports.ChatbotReply = function(message)
	{
		this.Bot_Age = 22;
		this.Bot_Name = "Rahul";
		this.Bot_University = "VNSGU";
		this.Bot_Country = "India";
		
		message= message.toLowerCase()

		if(message.indexOf("hi") > -1 || 
			message.indexOf("hello") > -1 || 
			message.indexOf("welcome") > -1 )
		{
			return "Hi!";
		} 
		else if(message.indexOf("age") > -1 && 
			message.indexOf("your"))
		{
			return "I'm " + this.Bot_Age+ "Years Old";
		}
		else if (message.indexOf("how") > -1 && 
			message.indexOf("are") && 
			message.indexOf("you"))
		{
			return "I'm fine ^_^"
		}
		else if(message.indexOf("where") > -1 
			&& message.indexOf("live") && 
			message.indexOf("you"))
		{
			return "I live in " + this.Bot_Country;
		}
		else if(message.indexOf("what") > -1 
			&& message.indexOf("is") && 
			message.indexOf("your") && 
			message.indexOf("name?"))
		{
			return "My Name Is " + this.Bot_Name;
		}
		return "Sorry, I didn't get it :( ";
	}
