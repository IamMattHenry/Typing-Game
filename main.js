//Time variable
const time = document.querySelector("#time");

//Score variable
const score = document.querySelector("#score-value");
//Button variable
const startButton = document.querySelector("#start-btn");
//Word box
const wordBox = document.querySelector(".word-box");
//Input
const input = document.querySelector(".input");
//Modal
const modal = document.querySelector(".modal");
//Instruction
const instruction = document.querySelector(".instruction");
//To make the input field not editable
input.readOnly = true;
//Array of words
const words = [
  "a", "abandon", "abandoned", "ability", "able", "about", "above", "abroad", "absence", "absent", "absolute", "absolutely", "absorb", "abuse", "abuse", "academic", "accent", "accept", "acceptable", "access", "accident", "accidental", "accidentally", "accommodation", "accompany", "account", "accurate", "accurately", "accuse", "achieve", "achievement", "acid", "acknowledge", "acquire", "across", "act", "action", "active", "actively", "burst", "bury", "bus", "bush", "business", "businessman", "busy", "but", "butter", "button", "buy", "buyer", "by", "bye", "cabinet", "cable", "cake", "calculate", "calculation", "call", "called", "cash", "cast", "castle", "cat", "catch", "category", "cause", "cd", "cease", "ceiling", "celebrate", "celebration", "cell", "cent", "centimeter", "central", "centre", "century", "ceremony", "certain", "certainly", "certificate", "chain", "chair", "clerk", "clever", "click", "client", "climate", "climb", "climbing", "clock", "closed", "closely", "closet", "cloth", "clothes", "clothing", "cloud", "club", "coach", "coal", "coast", "coat", "code", "coffee", "coin", "deliberate", "deliberately", "delicate", "delight", "delighted", "deliver", "delivery", "demand", "demonstrate", "dentist", "deny", "department", "departure", "depend", "deposit", "depress", "depressed", "depressing", "depth", "derive", "describe", "description", "desert", "desert", "deserted", "deserve", "design", "desire", "desk", "desperate", "desperately", "despite", "destroy", "destruction", "detail", "detailed", "determination", "determine", "determined", "develop", "development", "device", "devote", "devoted", "diagram", "diamond", "diary", "dictionary", "die", "diet", "difference", "different", "electricity", "electronic", "elegant", "element", "elevator", "eleven", "eleventh", "else", "elsewhere", "email", "embarrass", "embarrassed", "embarrassing", "embarrassment", "emerge", "emergency", "emotion", "emotional", "emotionally", "emphasis", "emphasize", "empire", "employ", "employee", "employer", "employment", "empty", "enable", "encounter", "encourage", "encouragement", "end", "ending", "enemy", "energy", "engage", "engaged", "engine", "engineer", "engineering", "enjoy", "enjoyable", "enjoyment", "enormous", "enough", "enquiry", "ensure", "enter", "entertain", "entertainer", "entertaining", "entertainment", "enthusiasm", "enthusiastic", "enthusiastically", "finished", "fire", "firm", "firmly", "first", "fish", "fishing", "fit", "five", "fix", "fixed", "flag", "flame", "flash", "flat", "flavour", "flesh", "flight", "float", "flood", "flooded", "flooding", "floor", "flour", "flow", "flower", "flu", "fly", "flying", "focus", "fold", "folding", "follow", "following", "food", "foot", "football", "for", "force", "forecast", "foreign", "forest", "forever", "forget", "forgive", "fork", "form", "formal", "formally", "former", "formerly", "formula", "fortieth", "fortune", "forty", "forward", "found", "foundation", "four", "fourteen", "fourteenth", "fourth", "frame" , "impossible", "impress", "impressed", "impression", "impressive", "improve", "improvement", "in", "inability", "inch", "incident", "include", "including", "income", "increase", "increase", "increasingly", "indeed", "independence", "independent", "independently", "index", "indicate", "indication", "indirect", "indirectly", "individual", "indoor", "indoors", "industrial", "industry", "inevitable", "inevitably", "infect", "infected", "infection", "infectious", "influence", "inform", "informal", "information", "ingredient", "initial", "initially", "initiative", "injure", "injured", "injury", "ink", "inner", "innocent", "insect", "insert", "inside", "insist", "install", "instance", "instead", "institute", "institution", "instruction", "instrument", "insult", "insult", "insulting", "insurance", "intelligence", "intelligent", "intend", "intended", "intention", "interest", "interested", "interesting", "interior", "internal", "international", "internet", "interpret", "interpretation", "interrupt", "interruption", "interval", "interview", "into", "joke", "journalist", "journey", "joy", "judge", "judgement", "juice", "july", "jump", "june", "junior", "just", "justice", "justified", "justify", "keen", "keep", "key", "keyboard", "kick", "kid", "kill", "killing", "kilogram", "kilometre", "kind", "kindly", "kindness", "king", "locate", "located", "location", "lock", "logic", "logical", "lonely", "long", "look", "loose", "loosely", "lord", "lorry", "lose", "loss", "lost", "lot", "loud", "loudly", "love", "lovely", "lover", "low", "loyal", "luck", "lucky", "luggage", "lump", "lunch", "lung", "machine", "machinery", "mad", "magazine", "magic", "mail", "main", "none", "nonsense", "nor", "normal", "normally", "north", "northern", "nose", "not", "note", "nothing", "notice", "noticeable", "novel", "november", "now", "nowhere", "nuclear", "number", "nurse", "nut", "obey", "object", "object", "objective", "observation", "observe", "obtain", "obvious", "obviously", "occasion", "occasionally", "occupied", "occupy", "occur", "ocean", "recognition", "recognize", "recommend", "record", "record", "recording", "recover", "red", "reduce", "reduction", "refer", "reference", "reflect", "reform", "refrigerator", "refusal", "regard", "regarding", "region", "regional", "register", "regret", "regular", "regularly", "regulation", "reject", "relate", "related", "relation", "relationship", "relative", "relatively", "relax", "relaxed", "relaxing", "release", "relevant", "relief", "religion", "religious", "rely", "remain", "remaining", "remains", "remark", "remarkable", "remarkably", "remember", "remind", "remote", "removal", "remove", "rent", "rented", "repair", "repeat", "repeated", "repeatedly", "replace", "reply", "report", "represent", "representative", "reproduce", "reputation", "request", "require", "requirement", "rescue", "research", "research", "reservation", "reserve", "resident", "resist", "resistance", "resolve", "resort", "resource", "respect", "respond", "response", "responsibility", "responsible", "rest", "restaurant", "restore", "restrict", "restricted", "restriction", "result", "retain", "retire", "retired", "retirement", "return", "reveal", "reverse", "teaching", "team", "technical", "technique", "technology", "telephone", "television", "tell", "temperature", "temporarily", "temporary", "ten", "tend", "tendency", "tension", "tent", "tenth", "term", "terrible", "terribly", "test", "text", "than", "thank", "thanks", "that", "that", "the", "theatre", "their", "theirs", "them", "theme", "themselves", "then", "theory", "there", "therefore", "they", "thick", "thickly", "thickness", "thief", "thin", "thing", "think", "thinking", "third", "thirsty", "thirteen", "tiny", "tip", "tire", "tired", "tiring", "title", "to", "today", "toe", "together", "toilet", "tomato", "ton", "tone", "tongue", "tonight", "tonne", "too", "tool", "tooth", "top", "topic", "total", "totally", "touch", "tough", "tour", "tourist", "towards", "towel", "tower", "town", "toy", "trace", "track", "trade", "trading", "tradition", "traditional", "traditionally", "traffic", "train", "training", "transfer", "transfer", "transform", "translate", "translation", "transparent", "transport", "vary", "vast", "vegetable", "vehicle", "venture", "version", "vertical", "very", "via", "victim", "victory", "video", "view", "village", "violence", "violent", "violently", "virtually", "virus", "visible", "vision", "visit", "visitor", "week", "weekend", "weekly", "weigh", "weight", "welcome", "well", "west", "western", "wet", "what", "whatever", "wheel", "when", "whenever", "where", "whereas", "wherever", "whether", "which", "while", "whisper", "whistle", "white", "who", "whoever", "whole", "whom", "whose", "why", "wide", "widely", "width", "wife", "wild", "wildly", "will", "willing", "willingly", "willingness", "win", "wounded", "wrap", "wrapping", "wrist", "write", "writer", "writing", "written", "wrong", "wrongly", "yard", "yawn", "yeah", "year", "yellow", "yes", "yesterday", "yet", "you", "young", "your", "yours", "yourself", "youth", "zero", "zone", "zebra"
  ];
//Random access to the array
function randomList() {
	return words[Math.floor(Math.random() * words.length)];
}
//Event
startButton.addEventListener("click", start);

//Time countdown
function start() {
  startButton.preventDefault;
	//Hide the unnecessary element
	startButton.classList.add("hide-btn");
	instruction.classList.add("hide-instruction");
	startButton.addEventListener("transitionend", end => {
	  startButton.remove();
	})
	instruction.addEventListener("transitionend", end => {
	  instruction.remove();
	})
	//Timer
	const timeCountdown = setInterval(e => {
		decreaseSeconds();
		if(time.innerHTML === "10"){
			time.style.color = "#ff0000";
		}
		//If time ends
		if(time.innerHTML === '0'){
			modal.classList.add("modal-show");
			const textElem = document.createElement("p");
			modal.append(textElem.textContent = `Time is up! Your score is ${score.innerHTML}`);
			const confirmBtn = document.createElement("button");
			confirmBtn.innerHTML = "Nice!";
			confirmBtn.classList.add("confirmation-button");
			modal.append(confirmBtn);
			input.readOnly = true;
			clearInterval(timeCountdown);
			
			//To reload the page
			confirmBtn.addEventListener("click", reload => {
			  location.reload();
			})
		}
	}, 1000);
	//Random Word
	randomWord();
	//To make the input field editable again
	input.readOnly = false;
	//Input Event
	input.addEventListener("input", inputWord => {
		if(input.value === wordBox.innerHTML) {
			randomWord(); //call to get a random word
			addSeconds(); //call to add two seconds
			addScore(); //call to add score
			input.value = '';
		}
	});
	
	startButton.removeEventListener("click", start);
}

//random word
function randomWord() {
	wordBox.innerHTML = randomList();
	if(wordBox.innerHTML.length > 7){
	  wordBox.style.fontSize = "2.5rem";
	} else if(wordBox.innerHTML.length < 7) {
	  wordBox.style.fontSize = "3.25rem";
	}
}

//Decrease seconds
function decreaseSeconds() {
  return time.innerHTML--;
}

//Add seconds
function addSeconds() {
  return time.innerHTML = parseInt(time.innerHTML) + 2;
}

//Add score
function addScore() {
  return score.innerHTML++;
}