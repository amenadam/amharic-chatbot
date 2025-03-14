Amharic Chatbot

Amharic Chatbot is a simple JavaScript package that allows you to create a chatbot that understands and responds in Amharic. It is easy to integrate into Node.js projects and can be extended with custom responses.

🚀 Installation

Install the package using npm:

npm install amharic-chatbot

📌 Usage

Import the package and use it in your JavaScript project:

const chatbot = require("amharic-chatbot");

console.log(chatbot.processMessage("ሰላም"));

customize your bot by including the folloeing
setBotName("አበበ");
setCompanyName("የአበበ ድርጅት");
setOpenHours("opening hour", "closing hour", "no of opening days");
setContactAddress("0937147373", "amenadamsolomon5@gmail.com", "ጅማ");
callCenterStatus(true);
website(true, "https://acelinks.rf.gd");
delivery(true, true);

🛠 Features

📢 Simple chatbot functionality

🔠 Understands basic Amharic

🔄 Easy to extend with custom responses

📝 Example Code

const chatbot = require("amharic-chatbot");

console.log(chatbot.processMessage("ሰላም")); // "እንዴት ነህ?"

🏗 Contributing

Feel free to contribute by submitting issues or pull requests on GitHub.

📜 License

This project is licensed under the MIT License.
