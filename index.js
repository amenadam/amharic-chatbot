function normalizeText(text) {
  return text.replace(/[፣፤፡።]/g, "").trim(); // Remove common punctuation marks
}

const defaultMsg = [" ገና አማርኛ እየተማርኩ ነው።", " ምን እንዳሉ አልገባኝም", "ምን አሉኝ"];

function randomDefaultMsg() {
  let randomMsg = defaultMsg[Math.floor(Math.random() * defaultMsg.length)];
  return randomMsg;
}

let botName = "AmharicBot"; // Default bot name

function setBotName(name) {
  botName = name;
}
let agent = false; // Default agent status
function callCenterStatus(status) {
  agent = status;
}
let companyName = ""; //company name

function setCompanyName(name) {
  companyName = name;
}

let openingHour = "";
let closingHour = "";
let days = "";

function setOpenHours(openingHours, closingHours, dayss) {
  openingHour = openingHours;
  closingHour = closingHours;
  days = dayss;
}

let phoneNo = "";
let emailAdd = "";
let location = "";
function setContactAddress(phone, email, address) {
  phoneNo = phone;
  emailAdd = email;
  location = address;
}

let developerName = "Amenadam Solomon"; //default developer name
function setDeveloperName(name) {
  developerName = name;
}

let isWebsite = false;
let webAddress = "NO URL AVAILABLE";
function website(status, address) {
  isWebsite = status;
  webAddress = address;
}

let isDelivery = false;
let isDeliveryFree = false;
function delivery(status, price) {
  isDelivery = status;
  isDeliveryFree = price;
}
function processMessage(message) {
  const normalizedMessage = normalizeText(message);
  const lowerMessage = normalizedMessage.toLowerCase();

  if (
    lowerMessage.includes("ሰላም") ||
    lowerMessage.includes("ሀይ") ||
    lowerMessage.includes("hi") ||
    lowerMessage.includes("Hey") ||
    lowerMessage.includes("what's up") ||
    lowerMessage.includes("እንዴት ነህ")
  ) {
    return "ሰላም! እንዴት ነህ/ነሽ?";
  } else if (
    lowerMessage.includes("ማነህ") ||
    lowerMessage.includes("ስምህ") ||
    lowerMessage.includes("አንተ ሰው ነህ?")
  ) {
    return `እኔ ${botName} እባላለሁ።` + "\n" + ` በ ${developerName} ነው የተገነባውት`; //
  } else if (
    lowerMessage.includes("የድርጅት ስም") ||
    lowerMessage.includes("የድርጅቱ ስም") ||
    lowerMessage.includes("company name") ||
    lowerMessage.includes("የድርጅታቹ ስም")
  ) {
    return `ድርጅታችን ${companyName} ይባላል`;
  } else if (
    lowerMessage.includes("ምርቶችዎን እንዴት ልግዛ") ||
    lowerMessage.includes("እንዴት ልግዛ") ||
    lowerMessage.includes("ምርቶች") ||
    lowerMessage.includes("ምርቶ") ||
    lowerMessage.includes("ምርት") ||
    lowerMessage.includes("ምነ ምን") ||
    lowerMessage.includes("ማግኘት") ||
    lowerMessage.includes("ልግዛ")
  ) {
    if (isWebsite == true) {
      return `ምርቶቻችንነ ከ ድህረገጻችን ላይ ${webAddress} እንዲሁም አቅራቢያዎ ባለ ቅርንጫፋችን ማግኘት ይችላሉ`;
    } else {
      return "ምርቶቻችንነ አቅራቢያዎ ባለ ቅርንጫፋችን ማግኘት ይችላሉ";
    }
  } else if (
    lowerMessage.includes("ክፍት") ||
    lowerMessage.includes("ሰዓት") ||
    lowerMessage.includes("ስኣተ") ||
    lowerMessage.includes("ሰአት") ||
    lowerMessage.includes("ሰዐት") ||
    lowerMessage.includes("ሰዐተ") ||
    lowerMessage.includes("ቀን") ||
    lowerMessage.includes("አሁን") ||
    lowerMessage.includes("ነገ") ||
    lowerMessage.includes("ትላንት") ||
    lowerMessage.includes("በሳምንት")
  ) {
    return `${companyName} ከጠዋት ${openingHour} እስከ ${closingHour} በሳምንት ${days} ቀን አገልግሎት ይሰጣል `;
  } else if (
    lowerMessage.includes("ስልክ") ||
    lowerMessage.includes("ኢሜል") ||
    lowerMessage.includes("አድራሻ") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("location")
  ) {
    return `የ${companyName} ስልክ ቁጥር ${phoneNo} \nየኢምይል አድራሻ ${emailAdd} \nአድራሻችን ${location} ነው።`;
  } else if (lowerMessage.includes("አስተያየት")) {
    return `አስተያየቶን ለመቀበል ዝግጁ ነኝ`;
  } else if (
    lowerMessage.includes("መስራት") ||
    lowerMessage.includes("ታቃለህ") ||
    lowerMessage.includes("ታቃለ") ||
    lowerMessage.includes("ታውቃለህ") ||
    lowerMessage.includes("ታውቃለ")
  ) {
    return `በደንብ እንድማር ከረዳችሁኝ ብዙ ነገር መስራት እችላለሁ`;
  } else if (lowerMessage.includes(botName)) {
    return `አቤት ምን ልታዘዝ`;
  } else if (lowerMessage.includes("በቀሉ")) {
    return `በቀሉ ለጊዜው ስራ አቁማለች`;
  } else if (
    lowerMessage.includes("ቻው") ||
    lowerMessage.includes("ባይ") ||
    lowerMessage.includes("ሰላም ሁን")
  ) {
    return `በፈለጉት ሰዓት ላስተናግዶ ዝግጁ ነኝ`;
  } else if (
    lowerMessage.includes("ጥሪ") ||
    lowerMessage.includes("የጥሪ ማዕከል") ||
    lowerMessage.includes("ደንበኛ ማስተናገጃ") ||
    lowerMessage.includes("ኤጀንት")
  ) {
    let replay = "";

    if (agent == true) {
      replay = "የጥሪ ማዕከል ሰራተኛ እርሶን ለማገልገል ዝግጁ ነው።";
    } else {
      replay = `የጥሪ ማዕከሉ ሰራተኞች ደንበኞችን በማስተናገድ ላይ ስለሆኑ እባኮ ትንሽ ቆይተው ይሞክሩ`;
    }
    return replay;
  } else if (
    lowerMessage.includes("ቤት") ||
    lowerMessage.includes("ዴሊቨሪ") ||
    lowerMessage.includes("ሰፈር")
  ) {
    let replay = "";

    if (isDelivery == true && isDeliveryFree == true) {
      replay = "ያሉበት ቦታ በነጻ እኛ እራሳችን እናመጣለን";
    } else if (isDelivery == true && isDeliveryFree == false) {
      replay = "ያሉበት ቦታ በተመጣጣኝ ዋጋ እኛ እራሳችን እናመጣለን";
    } else {
      replay = `ይቅርታ እቃ የማድረስ አገልግሎት ለጊዜው አንሰጥም`;
    }
    return replay;
  } else {
    return `ይቅርታ! ${randomDefaultMsg()}`;
  }
}

module.exports = {
  processMessage,
  normalizeText,
  setBotName,
  setCompanyName,
  setOpenHours,
  setContactAddress,
  callCenterStatus,
  website,
  delivery,
};
