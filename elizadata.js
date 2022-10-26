// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"You awaken in a dark room."
];

var elizaFinals = [
"Thanks for playing!",
"We should do another session sometime."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike",
"move", "go",
"run", "go",
"wander", "go",
"walk", "go",
"venture", "go",
"leap", "jump",
"glance", "look"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"bag": ["pack", "backpack", "sack", "pouch"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
	["*", [
		"I don't think I understand.",
		"That doesn't make sense to me.",
		"What do you mean?"
	]]
]],
["go", 1, [
	["* go to *", [
		"You go to (2).",
		"You walk over to (2)."
	]],
	["* go north *", [
		"You go north. There is a rusty door.",
		"You go north. You find an old door.",
		"You feel your way to the north until you bump your head on a door.",
		"You run into a wall, hurting your head. Take 1d6 damage.",
	]],
	["* go south *", [
		"You go south. There is a rusty door.",
		"You go south. You find an old door.",
		"You feel your way to the south until you bump your head on a door.",
		"You run into a wall, hurting your head. Take 1d6 damage.",
	]],
	["* go east *", [
		"You go east. There is a rusty door.",
		"You go east. You find an old door.",
		"You feel your way to the east until you bump your head on a door.",
		"You run into a wall, hurting your head. Take 1d6 damage.",
	]],
	["* go west *", [
		"You go west. There is a rusty door.",
		"You go west. You find an old door.",
		"You feel your way to the west until you bump your head on a door.",
		"You run into a wall, hurting your head. Take 1d6 damage.",
	]],
	["* go through * door", [
		"You open the door. You find yourself in another dark room.",
		"The door appears to be jammed or locked. You cannot proceed.",
		"You bust the door open with a hefty kick. On the other side is another dark room."
	]],
	[" * go back *", [
		"You return to where you were before.",
		"You find that the door has locked behind you."
	]],
	["*", [
		"Where would you like to go?"
	]]
]],
["look", 2, [
	["* look at * room *", [
		"The room has four doors, one in each direction.",
		"The room is too dark to see very much.",
		"The room is completely empty.",
		"Nothing to see here.",
		"You notice a small glint out of the corner of your eye... but it was just your imagination."
	]],
	["* look at *", [
		"You take a look at (2). There's not much to observe.",
		"You gaze at (2). It's rather dull and uninteresting.",
		"You look at (2). You gain no insight.",
		"It's just (2).",
		"What? I don't remember mentioning (2)..."
	]],
	["* look *", [
		"The room has four doors, one in each direction.",
		"The room is too dark to see very much.",
		"The room is completely empty.",
		"Nothing to see here.",
		"You notice a small glint out of the corner of your eye... but it was just your imagination."
	]]
]],
["open", 2, [
	["* open * door *", [
		"You open the door. You find yourself in another dark room.",
		"The door appears to be jammed or locked. You cannot proceed.",
		"You bust the door open with a hefty kick. On the other side is another dark room.",
		"The door appears to be jammed or locked. Perhaps something from your bag might help."
	]],
	["* open * bag *", [
		"You open your bag. Inside there is a paper clip, a half-eaten ham sandwich, and a dead mouse."
	]]
]],
["use", 2, [
	["* use * paper clip * door *", [
		"You try to pick the lock on the door. It proves difficult, but you manage it in the end. The door slides open, revealing yet another dark room. In here, however, you notice a dusty typewriter."
	]],
	["* use * paper clip *", [
		"What would you like to use the paper clip on?",
		"How would you like to use the paper clip?"
	]],
	["* use *", [
		"You can't use (2).",
		"I don't know how you would use (2)."
	]]
]],
["light", 2, [
	["*", [
		"You can't find a light switch because it is too dark."
	]]
]],
["dig", 2, [
	["*", [
		"The material seems too tough to dig through here.",
		"You try digging for a while. You make approximately 1 millimeter of progress."
	]]
]],
["seduce", 2, [
	["* seduce *", [
		"Sadly, you cannot seduce (2)."
	]]
]],
["jump", 2, [
	["* jump *", [
		"You do a jump. It doesn't seem to change your situation very much."
	]]
]],
["say", 2, [
	["* say *", [
		"You say (2)."
	]]
]],
["die", 2, [
	["* die *", [
		"You stand completely still for several days until you eventually become dehydrated and die.",
		"You suddenly lose the will to live and impale yourself with your sword."
	]]
]],
["you", 2, [
	["*", [
		"What did you say about me?",
		"Stay in character, please.",
		"Okay, let's stay focused, please."
	]]
]],
["how", 2, [
	["*", [
		"Wouldn't you like to know."
	]]
]],
["what", 2, [
	["*", [
		"goto how"
	]]
]],
["where", 1, [
	["*", [
		"goto how"
	]]
]],
["when", 2, [
	["*", [
		"goto how"
	]]
]],
["why", 2, [
	["*", [
		"goto how"
	]]
]]
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof