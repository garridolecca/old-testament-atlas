// ============================================
// OLD TESTAMENT ATLAS — DATA
// All 39 books, cities, routes, and events
// ============================================

export const books = [
  {id:1,name:"Genesis",shortName:"Gen",category:"law",color:[201,168,76],hexColor:"#C9A84C",description:"The book of beginnings — creation, fall, flood, and the patriarchs",keyTheme:"Beginnings & Covenant",dateRange:"Creation – c. 1800 BC"},
  {id:2,name:"Exodus",shortName:"Exod",category:"law",color:[199,80,80],hexColor:"#C75050",description:"Israel's deliverance from Egypt and the giving of the Law at Sinai",keyTheme:"Deliverance & Law",dateRange:"c. 1446–1406 BC"},
  {id:3,name:"Leviticus",shortName:"Lev",category:"law",color:[232,213,183],hexColor:"#E8D5B7",description:"Laws of holiness, sacrifice, and worship for the priests and people",keyTheme:"Holiness & Sacrifice",dateRange:"c. 1446 BC"},
  {id:4,name:"Numbers",shortName:"Num",category:"law",color:[196,163,90],hexColor:"#C4A35A",description:"Israel's wilderness wanderings from Sinai to the plains of Moab",keyTheme:"Wandering & Faith",dateRange:"c. 1446–1406 BC"},
  {id:5,name:"Deuteronomy",shortName:"Deut",category:"law",color:[93,138,102],hexColor:"#5D8A66",description:"Moses' farewell speeches and renewal of the covenant",keyTheme:"Covenant Renewal",dateRange:"c. 1406 BC"},
  {id:6,name:"Joshua",shortName:"Josh",category:"history",color:[184,50,50],hexColor:"#B83232",description:"The conquest and division of the Promised Land under Joshua",keyTheme:"Conquest & Promise",dateRange:"c. 1406–1375 BC"},
  {id:7,name:"Judges",shortName:"Judg",category:"history",color:[139,107,61],hexColor:"#8B6B3D",description:"Cycles of sin, oppression, and deliverance through judges",keyTheme:"Cycles & Deliverance",dateRange:"c. 1375–1050 BC"},
  {id:8,name:"Ruth",shortName:"Ruth",category:"history",color:[212,130,158],hexColor:"#D4829E",description:"A story of loyalty, redemption, and love in Bethlehem",keyTheme:"Loyalty & Redemption",dateRange:"c. 1100 BC"},
  {id:9,name:"1 Samuel",shortName:"1 Sam",category:"history",color:[91,127,165],hexColor:"#5B7FA5",description:"The rise of the monarchy — Samuel, Saul, and David's early years",keyTheme:"Kingdom Begins",dateRange:"c. 1100–1010 BC"},
  {id:10,name:"2 Samuel",shortName:"2 Sam",category:"history",color:[122,93,199],hexColor:"#7A5DC7",description:"David's reign as king — triumphs, sins, and consequences",keyTheme:"David's Reign",dateRange:"c. 1010–970 BC"},
  {id:11,name:"1 Kings",shortName:"1 Kgs",category:"history",color:[218,165,32],hexColor:"#DAA520",description:"Solomon's glory, the divided kingdom, and Elijah's ministry",keyTheme:"Temple & Division",dateRange:"c. 970–850 BC"},
  {id:12,name:"2 Kings",shortName:"2 Kgs",category:"history",color:[160,82,45],hexColor:"#A0522D",description:"The decline and fall of both Israel and Judah",keyTheme:"Decline & Exile",dateRange:"c. 850–586 BC"},
  {id:13,name:"1 Chronicles",shortName:"1 Chr",category:"history",color:[142,107,189],hexColor:"#8E6BBD",description:"David's reign retold with focus on worship and the temple",keyTheme:"Worship & Legacy",dateRange:"c. 1010–970 BC"},
  {id:14,name:"2 Chronicles",shortName:"2 Chr",category:"history",color:[107,91,149],hexColor:"#6B5B95",description:"Solomon's temple through the exile — Judah's spiritual history",keyTheme:"Temple & Reform",dateRange:"c. 970–586 BC"},
  {id:15,name:"Ezra",shortName:"Ezra",category:"history",color:[58,157,116],hexColor:"#3A9D74",description:"The return from exile and rebuilding of the temple",keyTheme:"Return & Rebuild",dateRange:"c. 538–458 BC"},
  {id:16,name:"Nehemiah",shortName:"Neh",category:"history",color:[112,128,144],hexColor:"#708090",description:"Rebuilding Jerusalem's walls and restoring the community",keyTheme:"Walls & Renewal",dateRange:"c. 445–432 BC"},
  {id:17,name:"Esther",shortName:"Esth",category:"history",color:[199,80,143],hexColor:"#C7508F",description:"A Jewish queen saves her people in the Persian Empire",keyTheme:"Providence & Courage",dateRange:"c. 483–473 BC"},
  {id:18,name:"Job",shortName:"Job",category:"wisdom",color:[107,107,107],hexColor:"#6B6B6B",description:"The problem of suffering and God's sovereignty",keyTheme:"Suffering & Sovereignty",dateRange:"Patriarchal Era"},
  {id:19,name:"Psalms",shortName:"Ps",category:"wisdom",color:[65,105,225],hexColor:"#4169E1",description:"Songs of worship, lament, praise, and prophecy",keyTheme:"Worship & Prayer",dateRange:"c. 1410–450 BC"},
  {id:20,name:"Proverbs",shortName:"Prov",category:"wisdom",color:[230,184,0],hexColor:"#E6B800",description:"Practical wisdom for daily living from Solomon and others",keyTheme:"Wisdom & Instruction",dateRange:"c. 970–700 BC"},
  {id:21,name:"Ecclesiastes",shortName:"Eccl",category:"wisdom",color:[122,122,107],hexColor:"#7A7A6B",description:"The search for meaning — vanity of vanities",keyTheme:"Meaning & Purpose",dateRange:"c. 935 BC"},
  {id:22,name:"Song of Solomon",shortName:"Song",category:"wisdom",color:[220,53,69],hexColor:"#DC3545",description:"A poetic celebration of love between bride and bridegroom",keyTheme:"Love & Beauty",dateRange:"c. 965 BC"},
  {id:23,name:"Isaiah",shortName:"Isa",category:"major-prophet",color:[82,139,78],hexColor:"#528B4E",description:"Judgment and salvation — the suffering servant and coming Messiah",keyTheme:"Salvation & Messiah",dateRange:"c. 740–680 BC"},
  {id:24,name:"Jeremiah",shortName:"Jer",category:"major-prophet",color:[139,34,82],hexColor:"#8B2252",description:"The weeping prophet warns Judah before and during exile",keyTheme:"Warning & Judgment",dateRange:"c. 627–586 BC"},
  {id:25,name:"Lamentations",shortName:"Lam",category:"major-prophet",color:[60,60,78],hexColor:"#3C3C4E",description:"Poems of grief over Jerusalem's destruction",keyTheme:"Mourning & Hope",dateRange:"c. 586 BC"},
  {id:26,name:"Ezekiel",shortName:"Ezek",category:"major-prophet",color:[0,165,165],hexColor:"#00A5A5",description:"Visions of God's glory, judgment, and future restoration",keyTheme:"Glory & Vision",dateRange:"c. 593–571 BC"},
  {id:27,name:"Daniel",shortName:"Dan",category:"major-prophet",color:[230,126,34],hexColor:"#E67E22",description:"Faithfulness in exile — dreams, lions, and apocalyptic visions",keyTheme:"Faithfulness & Prophecy",dateRange:"c. 605–536 BC"},
  {id:28,name:"Hosea",shortName:"Hos",category:"minor-prophet",color:[219,112,147],hexColor:"#DB7093",description:"God's faithful love portrayed through a prophet's broken marriage",keyTheme:"Faithful Love",dateRange:"c. 755–715 BC"},
  {id:29,name:"Joel",shortName:"Joel",category:"minor-prophet",color:[74,103,65],hexColor:"#4A6741",description:"The day of the Lord — from locust plague to spiritual renewal",keyTheme:"Judgment & Renewal",dateRange:"c. 835–800 BC"},
  {id:30,name:"Amos",shortName:"Amos",category:"minor-prophet",color:[210,105,30],hexColor:"#D2691E",description:"A shepherd prophet demands justice and righteousness",keyTheme:"Justice & Righteousness",dateRange:"c. 760–750 BC"},
  {id:31,name:"Obadiah",shortName:"Obad",category:"minor-prophet",color:[139,94,60],hexColor:"#8B5E3C",description:"Judgment against Edom for betraying brother Jacob",keyTheme:"Edom's Judgment",dateRange:"c. 586–553 BC"},
  {id:32,name:"Jonah",shortName:"Jonah",category:"minor-prophet",color:[32,178,170],hexColor:"#20B2AA",description:"A reluctant prophet, a great fish, and God's mercy for Nineveh",keyTheme:"Mercy & Compassion",dateRange:"c. 780–760 BC"},
  {id:33,name:"Micah",shortName:"Mic",category:"minor-prophet",color:[188,143,143],hexColor:"#BC8F8F",description:"Justice, mercy, and the promise of a ruler from Bethlehem",keyTheme:"Justice & Promise",dateRange:"c. 735–700 BC"},
  {id:34,name:"Nahum",shortName:"Nah",category:"minor-prophet",color:[184,134,11],hexColor:"#B8860B",description:"The fall of Nineveh — God's justice against Assyria",keyTheme:"Divine Justice",dateRange:"c. 663–612 BC"},
  {id:35,name:"Habakkuk",shortName:"Hab",category:"minor-prophet",color:[95,158,160],hexColor:"#5F9EA0",description:"Wrestling with God — why do the wicked prosper?",keyTheme:"Faith & Questions",dateRange:"c. 609–605 BC"},
  {id:36,name:"Zephaniah",shortName:"Zeph",category:"minor-prophet",color:[44,62,107],hexColor:"#2C3E6B",description:"The great day of the Lord and the promise of restoration",keyTheme:"Day of the Lord",dateRange:"c. 640–621 BC"},
  {id:37,name:"Haggai",shortName:"Hag",category:"minor-prophet",color:[196,149,106],hexColor:"#C4956A",description:"A call to rebuild the temple after returning from exile",keyTheme:"Temple Priority",dateRange:"520 BC"},
  {id:38,name:"Zechariah",shortName:"Zech",category:"minor-prophet",color:[124,179,66],hexColor:"#7CB342",description:"Night visions and messianic prophecies of the coming king",keyTheme:"Messianic Hope",dateRange:"c. 520–480 BC"},
  {id:39,name:"Malachi",shortName:"Mal",category:"minor-prophet",color:[232,93,58],hexColor:"#E85D3A",description:"God's final Old Testament message — repent and prepare",keyTheme:"Final Messenger",dateRange:"c. 433–400 BC"}
];

export const cities = [
  // --- GENESIS cities ---
  {id:"eden",biblicalName:"Garden of Eden",modernName:"Southern Mesopotamia",region:"Mesopotamia",lat:31.0,lng:47.0,significance:"major",books:[1],events:[
    {book:1,order:1,action:"Creation of Humanity",description:"God placed Adam and Eve in the garden He had planted eastward in Eden.",verse:"Genesis 2:8",bookName:"Genesis",chapter:2,verseStart:8,verseEnd:15,quote:"And the LORD God planted a garden eastward in Eden; and there he put the man whom he had formed."},
    {book:1,order:2,action:"The Fall",description:"The serpent deceived Eve and both she and Adam ate the forbidden fruit, bringing sin into the world.",verse:"Genesis 3:6-7",bookName:"Genesis",chapter:3,verseStart:6,verseEnd:7,quote:"She took of the fruit thereof, and did eat, and gave also unto her husband; and he did eat."}
  ]},
  {id:"ararat",biblicalName:"Mount Ararat",modernName:"Eastern Turkey",region:"Armenia",lat:39.7,lng:44.3,significance:"moderate",books:[1],events:[
    {book:1,order:3,action:"Noah's Ark Rests",description:"After the great flood, Noah's ark came to rest on the mountains of Ararat.",verse:"Genesis 8:4",bookName:"Genesis",chapter:8,verseStart:4,verseEnd:4,quote:"And the ark rested upon the mountains of Ararat."}
  ]},
  {id:"babel",biblicalName:"Babel / Babylon",modernName:"Hillah, Iraq",region:"Babylonia",lat:32.536,lng:44.428,significance:"major",books:[1,12,14,15,23,24,26,27],events:[
    {book:1,order:4,action:"Tower of Babel",description:"Humanity built a tower to reach heaven; God confused their languages and scattered them.",verse:"Genesis 11:4-9",bookName:"Genesis",chapter:11,verseStart:4,verseEnd:9,quote:"Let us build us a city and a tower, whose top may reach unto heaven."},
    {book:12,order:5,action:"Fall of Jerusalem",description:"Nebuchadnezzar conquered Jerusalem and carried Judah into Babylonian exile.",verse:"2 Kings 25:1-11",bookName:"2 Kings",chapter:25,verseStart:1,verseEnd:11,quote:"He carried away all Jerusalem, and all the princes, and all the mighty men of valour."},
    {book:14,order:5,action:"Exile to Babylon",description:"Judah was carried into exile to Babylon as punishment for unfaithfulness.",verse:"2 Chronicles 36:20",bookName:"2 Chronicles",chapter:36,verseStart:20,verseEnd:20,quote:"And them that had escaped from the sword carried he away to Babylon."},
    {book:15,order:1,action:"Cyrus' Decree",description:"King Cyrus of Persia decreed that the Jews could return to Jerusalem and rebuild the temple.",verse:"Ezra 1:1-4",bookName:"Ezra",chapter:1,verseStart:1,verseEnd:4,quote:"The LORD stirred up the spirit of Cyrus king of Persia, that he made a proclamation."},
    {book:23,order:3,action:"Babylon Will Fall",description:"Isaiah prophesied the eventual overthrow and desolation of mighty Babylon.",verse:"Isaiah 13:19",bookName:"Isaiah",chapter:13,verseStart:19,verseEnd:19,quote:"Babylon, the glory of kingdoms, shall be as when God overthrew Sodom and Gomorrah."},
    {book:24,order:3,action:"Seventy Years of Exile",description:"Jeremiah prophesied that Judah would serve the king of Babylon for seventy years.",verse:"Jeremiah 25:11",bookName:"Jeremiah",chapter:25,verseStart:11,verseEnd:11,quote:"These nations shall serve the king of Babylon seventy years."},
    {book:26,order:3,action:"Ezekiel's Exile Ministry",description:"Ezekiel prophesied to the Jewish exiles living in Babylonia along the river Chebar.",verse:"Ezekiel 1:1-3",bookName:"Ezekiel",chapter:1,verseStart:1,verseEnd:3,quote:"The heavens were opened, and I saw visions of God."},
    {book:27,order:1,action:"Daniel in Babylon",description:"Daniel was taken captive to Babylon and trained in the king's court, refusing to defile himself.",verse:"Daniel 1:6-8",bookName:"Daniel",chapter:1,verseStart:6,verseEnd:8,quote:"Daniel purposed in his heart that he would not defile himself with the king's meat."},
    {book:27,order:2,action:"Fiery Furnace",description:"Shadrach, Meshach, and Abednego were thrown into a fiery furnace for refusing to worship the golden image.",verse:"Daniel 3:19-25",bookName:"Daniel",chapter:3,verseStart:19,verseEnd:25,quote:"He answered, Lo, I see four men loose, walking in the midst of the fire."},
    {book:27,order:3,action:"Writing on the Wall",description:"A mysterious hand wrote on the wall at Belshazzar's feast, foretelling Babylon's fall.",verse:"Daniel 5:5-6",bookName:"Daniel",chapter:5,verseStart:5,verseEnd:6,quote:"In the same hour came forth fingers of a man's hand, and wrote upon the wall."},
    {book:27,order:4,action:"Daniel in the Lions' Den",description:"Daniel was cast into a den of lions for praying to God, but the Lord shut the lions' mouths.",verse:"Daniel 6:16-22",bookName:"Daniel",chapter:6,verseStart:16,verseEnd:22,quote:"My God hath sent his angel, and hath shut the lions' mouths."}
  ]},
  {id:"ur",biblicalName:"Ur of the Chaldeans",modernName:"Tell el-Muqayyar, Iraq",region:"Mesopotamia",lat:30.963,lng:46.103,significance:"major",books:[1],events:[
    {book:1,order:5,action:"Abraham's Origin",description:"God called Abram to leave Ur of the Chaldeans and go to a land that He would show him.",verse:"Genesis 11:31",bookName:"Genesis",chapter:11,verseStart:31,verseEnd:31,quote:"They went forth from Ur of the Chaldees, to go into the land of Canaan."}
  ]},
  {id:"haran",biblicalName:"Haran",modernName:"Harran, Turkey",region:"Upper Mesopotamia",lat:36.866,lng:39.032,significance:"moderate",books:[1],events:[
    {book:1,order:6,action:"Abraham's Call",description:"From Haran, God called Abram to leave his country and kindred for the promised land.",verse:"Genesis 12:1-4",bookName:"Genesis",chapter:12,verseStart:1,verseEnd:4,quote:"Get thee out of thy country, and from thy kindred, unto a land that I will shew thee."},
    {book:1,order:10,action:"Jacob Flees to Haran",description:"Jacob fled to Haran to escape Esau's anger and worked for Laban for twenty years.",verse:"Genesis 28:10",bookName:"Genesis",chapter:28,verseStart:10,verseEnd:10,quote:"And Jacob went out from Beersheba, and went toward Haran."}
  ]},
  {id:"shechem",biblicalName:"Shechem",modernName:"Nablus",region:"Samaria",lat:32.214,lng:35.283,significance:"major",books:[1,6,7,11],events:[
    {book:1,order:7,action:"Abraham Enters Canaan",description:"Abram passed through the land to the place of Shechem, where God promised the land to his seed.",verse:"Genesis 12:6-7",bookName:"Genesis",chapter:12,verseStart:6,verseEnd:7,quote:"Unto thy seed will I give this land."},
    {book:6,order:6,action:"Covenant at Shechem",description:"Joshua gathered all the tribes of Israel at Shechem to renew their covenant with the LORD.",verse:"Joshua 24:1-25",bookName:"Joshua",chapter:24,verseStart:1,verseEnd:25,quote:"Choose you this day whom ye will serve; but as for me and my house, we will serve the LORD."},
    {book:7,order:3,action:"Abimelech's Tyranny",description:"Abimelech, Gideon's son, murdered his brothers and made himself king at Shechem.",verse:"Judges 9:1-6",bookName:"Judges",chapter:9,verseStart:1,verseEnd:6,quote:"The men of Shechem made Abimelech king."},
    {book:11,order:4,action:"Kingdom Divides",description:"Rehoboam rejected the people's plea at Shechem, and ten tribes broke away under Jeroboam.",verse:"1 Kings 12:1-16",bookName:"1 Kings",chapter:12,verseStart:1,verseEnd:16,quote:"What portion have we in David? To your tents, O Israel!"}
  ]},
  {id:"bethel",biblicalName:"Bethel",modernName:"Beitin",region:"Central Israel",lat:31.933,lng:35.233,significance:"moderate",books:[1,6,7,11,28,30],events:[
    {book:1,order:8,action:"Jacob's Ladder",description:"Jacob dreamed of a ladder reaching to heaven with angels ascending and descending.",verse:"Genesis 28:12-19",bookName:"Genesis",chapter:28,verseStart:12,verseEnd:19,quote:"This is none other but the house of God, and this is the gate of heaven."},
    {book:6,order:7,action:"Israelites Inquire of God",description:"The Israelites went up to Bethel to inquire of God during the conquest.",verse:"Joshua 7:2",bookName:"Joshua",chapter:7,verseStart:2,verseEnd:2,quote:"Joshua sent men from Jericho to Ai, which is beside Bethel."},
    {book:11,order:5,action:"Golden Calf at Bethel",description:"Jeroboam set up a golden calf at Bethel to keep the northern tribes from going to Jerusalem.",verse:"1 Kings 12:28-29",bookName:"1 Kings",chapter:12,verseStart:28,verseEnd:29,quote:"Behold thy gods, O Israel, which brought thee up out of the land of Egypt."},
    {book:28,order:2,action:"Hosea Condemns Bethel",description:"Hosea rebuked Israel's idolatrous worship at Bethel, calling it Beth-aven (house of wickedness).",verse:"Hosea 10:15",bookName:"Hosea",chapter:10,verseStart:15,verseEnd:15,quote:"So shall Bethel do unto you because of your great wickedness."},
    {book:30,order:2,action:"Amos Prophesies at Bethel",description:"Amos confronted Israel's corrupt worship at Bethel, warning of coming judgment.",verse:"Amos 7:10-13",bookName:"Amos",chapter:7,verseStart:10,verseEnd:13,quote:"But prophesy not again any more at Bethel: for it is the king's chapel."}
  ]},
  {id:"hebron",biblicalName:"Hebron / Mamre",modernName:"Hebron",region:"Judah",lat:31.533,lng:35.100,significance:"major",books:[1,6,10,13],events:[
    {book:1,order:9,action:"Abraham at Mamre",description:"Abraham dwelt by the oaks of Mamre in Hebron and built an altar to the LORD.",verse:"Genesis 13:18",bookName:"Genesis",chapter:13,verseStart:18,verseEnd:18,quote:"Then Abram removed his tent, and came and dwelt in the plain of Mamre, which is in Hebron."},
    {book:6,order:8,action:"Caleb Takes Hebron",description:"Caleb claimed Hebron as his inheritance, driving out the Anakim as God had promised.",verse:"Joshua 14:12-14",bookName:"Joshua",chapter:14,verseStart:12,verseEnd:14,quote:"Give me this mountain, whereof the LORD spake."},
    {book:10,order:1,action:"David Crowned at Hebron",description:"The men of Judah anointed David king over Judah at Hebron, where he reigned seven years.",verse:"2 Samuel 2:1-4",bookName:"2 Samuel",chapter:2,verseStart:1,verseEnd:4,quote:"The men of Judah came, and there they anointed David king over the house of Judah."},
    {book:13,order:1,action:"All Israel Crowns David",description:"All the tribes of Israel came to Hebron and anointed David king over all Israel.",verse:"1 Chronicles 11:1-3",bookName:"1 Chronicles",chapter:11,verseStart:1,verseEnd:3,quote:"They anointed David king over Israel, according to the word of the LORD."}
  ]},
  {id:"sodom",biblicalName:"Sodom",modernName:"Dead Sea Region",region:"Jordan Valley",lat:31.1,lng:35.4,significance:"moderate",books:[1],events:[
    {book:1,order:11,action:"Destruction of Sodom",description:"God rained fire and brimstone on Sodom and Gomorrah for their wickedness. Lot and his daughters escaped.",verse:"Genesis 19:24-26",bookName:"Genesis",chapter:19,verseStart:24,verseEnd:26,quote:"Then the LORD rained upon Sodom and upon Gomorrah brimstone and fire from the LORD out of heaven."}
  ]},
  {id:"beersheba",biblicalName:"Beersheba",modernName:"Be'er Sheva",region:"Negev",lat:31.252,lng:34.791,significance:"moderate",books:[1,7,11],events:[
    {book:1,order:12,action:"Abraham's Well",description:"Abraham dug a well and made a covenant with Abimelech at Beersheba.",verse:"Genesis 21:31-33",bookName:"Genesis",chapter:21,verseStart:31,verseEnd:33,quote:"He called that place Beersheba; because there they sware both of them."},
    {book:11,order:6,action:"Elijah Flees South",description:"Elijah fled from Jezebel to Beersheba, then continued into the wilderness wanting to die.",verse:"1 Kings 19:3-4",bookName:"1 Kings",chapter:19,verseStart:3,verseEnd:4,quote:"He went a day's journey into the wilderness, and sat down under a juniper tree."}
  ]},
  {id:"peniel",biblicalName:"Peniel",modernName:"Tulul edh-Dhahab",region:"East Jordan",lat:32.3,lng:35.57,significance:"minor",books:[1],events:[
    {book:1,order:13,action:"Jacob Wrestles God",description:"Jacob wrestled with a man until daybreak and was given the name Israel.",verse:"Genesis 32:24-30",bookName:"Genesis",chapter:32,verseStart:24,verseEnd:30,quote:"Thy name shall be called no more Jacob, but Israel: for thou hast striven with God and with men."}
  ]},
  {id:"dothan",biblicalName:"Dothan",modernName:"Tell Dothan",region:"Samaria",lat:32.395,lng:35.23,significance:"minor",books:[1,12],events:[
    {book:1,order:14,action:"Joseph Sold by Brothers",description:"Joseph's brothers sold him to Ishmaelite traders at Dothan, who took him to Egypt.",verse:"Genesis 37:17-28",bookName:"Genesis",chapter:37,verseStart:17,verseEnd:28,quote:"Come, let us sell him to the Ishmaelites, and let not our hand be upon him."},
    {book:12,order:4,action:"Elisha's Fiery Army",description:"God opened the servant's eyes to see horses and chariots of fire surrounding Dothan.",verse:"2 Kings 6:15-17",bookName:"2 Kings",chapter:6,verseStart:15,verseEnd:17,quote:"Fear not: for they that be with us are more than they that be with them."}
  ]},
  {id:"goshen",biblicalName:"Land of Goshen",modernName:"Nile Delta, Egypt",region:"Egypt",lat:30.85,lng:31.85,significance:"major",books:[1,2],events:[
    {book:1,order:15,action:"Jacob's Family Settles",description:"Joseph settled his father Jacob and brothers in the land of Goshen, the best of Egypt.",verse:"Genesis 47:6",bookName:"Genesis",chapter:47,verseStart:6,verseEnd:6,quote:"In the best of the land make thy father and brethren to dwell; in the land of Goshen let them dwell."},
    {book:2,order:1,action:"Israel Enslaved",description:"A new pharaoh enslaved the Israelites in Goshen, oppressing them with hard labor.",verse:"Exodus 1:8-14",bookName:"Exodus",chapter:1,verseStart:8,verseEnd:14,quote:"They made their lives bitter with hard bondage."}
  ]},
  // --- EXODUS cities ---
  {id:"memphis",biblicalName:"Memphis / Noph",modernName:"Mit Rahina, Egypt",region:"Egypt",lat:29.87,lng:31.25,significance:"major",books:[2],events:[
    {book:2,order:2,action:"The Ten Plagues",description:"God sent ten devastating plagues upon Egypt to compel Pharaoh to release the Israelites.",verse:"Exodus 7:14–12:30",bookName:"Exodus",chapter:7,verseStart:14,verseEnd:14,quote:"Thus saith the LORD, In this thou shalt know that I am the LORD."},
    {book:2,order:3,action:"The Passover",description:"God instituted the Passover — the angel of death passed over houses marked with lamb's blood.",verse:"Exodus 12:12-13",bookName:"Exodus",chapter:12,verseStart:12,verseEnd:13,quote:"When I see the blood, I will pass over you."}
  ]},
  {id:"red-sea",biblicalName:"Red Sea Crossing",modernName:"Gulf of Suez",region:"Sinai",lat:29.6,lng:32.9,significance:"major",books:[2],events:[
    {book:2,order:4,action:"Parting of the Red Sea",description:"God parted the Red Sea for Israel to cross on dry ground, then drowned the Egyptian army.",verse:"Exodus 14:21-28",bookName:"Exodus",chapter:14,verseStart:21,verseEnd:28,quote:"The LORD caused the sea to go back by a strong east wind all that night."}
  ]},
  {id:"sinai",biblicalName:"Mount Sinai / Horeb",modernName:"Jebel Musa, Sinai",region:"Sinai Peninsula",lat:28.539,lng:33.976,significance:"major",books:[2,3,4,11],events:[
    {book:2,order:5,action:"Ten Commandments Given",description:"God descended on Mount Sinai in fire and thunder and gave Moses the Ten Commandments.",verse:"Exodus 20:1-17",bookName:"Exodus",chapter:20,verseStart:1,verseEnd:17,quote:"I am the LORD thy God. Thou shalt have no other gods before me."},
    {book:3,order:1,action:"Levitical Laws Given",description:"At Mount Sinai, God gave Moses the laws of sacrifice, purity, and priestly conduct.",verse:"Leviticus 1:1-2",bookName:"Leviticus",chapter:1,verseStart:1,verseEnd:2,quote:"The LORD called unto Moses, and spake unto him out of the tabernacle."},
    {book:3,order:2,action:"Day of Atonement",description:"God established the Day of Atonement — Yom Kippur — for the forgiveness of Israel's sins.",verse:"Leviticus 16:30",bookName:"Leviticus",chapter:16,verseStart:30,verseEnd:30,quote:"On that day shall the priest make an atonement for you, to cleanse you."},
    {book:4,order:1,action:"Census at Sinai",description:"God commanded Moses to take a census of all Israel's fighting men at Sinai.",verse:"Numbers 1:1-3",bookName:"Numbers",chapter:1,verseStart:1,verseEnd:3,quote:"Take ye the sum of all the congregation of the children of Israel."},
    {book:11,order:7,action:"Elijah at Horeb",description:"Elijah traveled forty days to Horeb, where God spoke to him in a still small voice.",verse:"1 Kings 19:11-12",bookName:"1 Kings",chapter:19,verseStart:11,verseEnd:12,quote:"And after the fire a still small voice."}
  ]},
  {id:"elim",biblicalName:"Elim",modernName:"Wadi Gharandel",region:"Sinai",lat:29.2,lng:33.0,significance:"minor",books:[2],events:[
    {book:2,order:6,action:"Oasis of Rest",description:"Israel came to Elim, where there were twelve springs of water and seventy palm trees.",verse:"Exodus 15:27",bookName:"Exodus",chapter:15,verseStart:27,verseEnd:27,quote:"They came to Elim, where were twelve wells of water, and threescore and ten palm trees."}
  ]},
  {id:"rephidim",biblicalName:"Rephidim",modernName:"Wadi Refayid",region:"Sinai",lat:28.8,lng:33.5,significance:"minor",books:[2],events:[
    {book:2,order:7,action:"Water from the Rock",description:"Moses struck the rock at Rephidim and water gushed out for the thirsty Israelites.",verse:"Exodus 17:6",bookName:"Exodus",chapter:17,verseStart:6,verseEnd:6,quote:"Thou shalt smite the rock, and there shall come water out of it."}
  ]},
  // --- NUMBERS / DEUTERONOMY cities ---
  {id:"kadesh",biblicalName:"Kadesh Barnea",modernName:"Ein el-Qudeirat",region:"Negev",lat:30.64,lng:34.41,significance:"moderate",books:[4,5],events:[
    {book:4,order:2,action:"Twelve Spies Sent",description:"Moses sent twelve spies from Kadesh to scout the Promised Land; ten returned with a fearful report.",verse:"Numbers 13:26-33",bookName:"Numbers",chapter:13,verseStart:26,verseEnd:33,quote:"We were in our own sight as grasshoppers, and so we were in their sight."},
    {book:4,order:3,action:"Forty Years Decreed",description:"Because of Israel's unbelief, God decreed forty years of wandering in the wilderness.",verse:"Numbers 14:33-34",bookName:"Numbers",chapter:14,verseStart:33,verseEnd:34,quote:"Your children shall wander in the wilderness forty years."},
    {book:5,order:1,action:"Moses Recounts History",description:"At Kadesh, Moses reminded Israel of their rebellion and God's faithfulness.",verse:"Deuteronomy 1:19-46",bookName:"Deuteronomy",chapter:1,verseStart:19,verseEnd:46,quote:"Ye would not go up, but rebelled against the commandment of the LORD."}
  ]},
  {id:"paran",biblicalName:"Wilderness of Paran",modernName:"Sinai/Negev Desert",region:"Sinai",lat:29.5,lng:34.5,significance:"minor",books:[4],events:[
    {book:4,order:4,action:"Wilderness Wandering",description:"Israel wandered through the wilderness of Paran during the forty years of judgment.",verse:"Numbers 12:16",bookName:"Numbers",chapter:12,verseStart:16,verseEnd:16,quote:"The people journeyed from Hazeroth, and pitched in the wilderness of Paran."}
  ]},
  {id:"plains-moab",biblicalName:"Plains of Moab",modernName:"Jordan Valley",region:"Transjordan",lat:31.83,lng:35.55,significance:"moderate",books:[4,5],events:[
    {book:4,order:5,action:"Balaam's Blessing",description:"Balak hired Balaam to curse Israel, but God turned every curse into a blessing.",verse:"Numbers 23:11-12",bookName:"Numbers",chapter:23,verseStart:11,verseEnd:12,quote:"I cannot go beyond the word of the LORD, to do either good or bad."},
    {book:5,order:2,action:"Moses' Farewell",description:"On the plains of Moab, Moses delivered his farewell addresses to the next generation.",verse:"Deuteronomy 29:1",bookName:"Deuteronomy",chapter:29,verseStart:1,verseEnd:1,quote:"These are the words of the covenant which the LORD commanded Moses to make."}
  ]},
  {id:"nebo",biblicalName:"Mount Nebo",modernName:"Siyagha, Jordan",region:"Transjordan",lat:31.768,lng:35.727,significance:"moderate",books:[5],events:[
    {book:5,order:3,action:"Moses Views the Land",description:"From Mount Nebo, Moses saw the entire Promised Land before his death.",verse:"Deuteronomy 34:1-5",bookName:"Deuteronomy",chapter:34,verseStart:1,verseEnd:5,quote:"The LORD shewed him all the land. So Moses the servant of the LORD died there."}
  ]},
  // --- JOSHUA cities ---
  {id:"jericho",biblicalName:"Jericho",modernName:"Tell es-Sultan",region:"Jordan Valley",lat:31.861,lng:35.463,significance:"major",books:[6,12],events:[
    {book:6,order:1,action:"Walls of Jericho Fall",description:"Israel marched around Jericho seven days; on the seventh day the walls fell flat.",verse:"Joshua 6:20",bookName:"Joshua",chapter:6,verseStart:20,verseEnd:20,quote:"The wall fell down flat, so that the people went up into the city."},
    {book:12,order:3,action:"Elisha Heals Waters",description:"Elisha purified the waters of Jericho by casting salt into the spring.",verse:"2 Kings 2:19-22",bookName:"2 Kings",chapter:2,verseStart:19,verseEnd:22,quote:"I have healed these waters; there shall not be from thence any more death."}
  ]},
  {id:"gilgal",biblicalName:"Gilgal",modernName:"Near Jericho",region:"Jordan Valley",lat:31.899,lng:35.444,significance:"moderate",books:[6,9],events:[
    {book:6,order:2,action:"Memorial Stones",description:"Joshua set up twelve stones at Gilgal as a memorial of crossing the Jordan.",verse:"Joshua 4:19-24",bookName:"Joshua",chapter:4,verseStart:19,verseEnd:24,quote:"That all the people of the earth might know the hand of the LORD."},
    {book:9,order:1,action:"Saul Made King",description:"Samuel confirmed Saul as king before the LORD at Gilgal.",verse:"1 Samuel 11:15",bookName:"1 Samuel",chapter:11,verseStart:15,verseEnd:15,quote:"There they made Saul king before the LORD in Gilgal."}
  ]},
  {id:"ai",biblicalName:"Ai",modernName:"Et-Tell",region:"Central Israel",lat:31.917,lng:35.267,significance:"minor",books:[6],events:[
    {book:6,order:3,action:"Defeat and Victory at Ai",description:"Israel was first defeated at Ai due to Achan's sin, then conquered it after repentance.",verse:"Joshua 8:1-29",bookName:"Joshua",chapter:8,verseStart:1,verseEnd:29,quote:"Fear not: I have given into thy hand the king of Ai."}
  ]},
  {id:"gibeon",biblicalName:"Gibeon",modernName:"El-Jib",region:"Benjamin",lat:31.85,lng:35.18,significance:"moderate",books:[6,10,11],events:[
    {book:6,order:4,action:"Sun Stands Still",description:"Joshua commanded the sun to stand still over Gibeon during battle against the Amorites.",verse:"Joshua 10:12-13",bookName:"Joshua",chapter:10,verseStart:12,verseEnd:13,quote:"Sun, stand thou still upon Gibeon. And the sun stood still."},
    {book:11,order:1,action:"Solomon's Dream",description:"At Gibeon, God appeared to Solomon in a dream and granted him wisdom.",verse:"1 Kings 3:5-12",bookName:"1 Kings",chapter:3,verseStart:5,verseEnd:12,quote:"Ask what I shall give thee. Give thy servant an understanding heart."}
  ]},
  {id:"hazor",biblicalName:"Hazor",modernName:"Tell el-Qedah",region:"Upper Galilee",lat:33.017,lng:35.567,significance:"moderate",books:[6,7],events:[
    {book:6,order:5,action:"Northern Conquest",description:"Joshua conquered Hazor, the head of all the northern Canaanite kingdoms.",verse:"Joshua 11:10-11",bookName:"Joshua",chapter:11,verseStart:10,verseEnd:11,quote:"Joshua took Hazor, and smote the king thereof with the sword."},
    {book:7,order:1,action:"Deborah's Victory",description:"Deborah and Barak defeated Jabin king of Hazor and his general Sisera.",verse:"Judges 4:14-16",bookName:"Judges",chapter:4,verseStart:14,verseEnd:16,quote:"Up; for this is the day in which the LORD hath delivered Sisera into thine hand."}
  ]},
  {id:"shiloh",biblicalName:"Shiloh",modernName:"Khirbet Seilun",region:"Ephraim",lat:32.055,lng:35.289,significance:"moderate",books:[6,7,9,24],events:[
    {book:6,order:9,action:"Tabernacle at Shiloh",description:"The tabernacle of the LORD was set up at Shiloh after the conquest.",verse:"Joshua 18:1",bookName:"Joshua",chapter:18,verseStart:1,verseEnd:1,quote:"The whole congregation assembled together at Shiloh, and set up the tabernacle."},
    {book:9,order:2,action:"Hannah's Prayer",description:"Hannah prayed at the tabernacle in Shiloh for a son, and God gave her Samuel.",verse:"1 Samuel 1:9-20",bookName:"1 Samuel",chapter:1,verseStart:9,verseEnd:20,quote:"For this child I prayed; and the LORD hath given me my petition."},
    {book:24,order:4,action:"Shiloh's Destruction",description:"Jeremiah warned Jerusalem by recalling God's judgment on the sanctuary at Shiloh.",verse:"Jeremiah 7:12-14",bookName:"Jeremiah",chapter:7,verseStart:12,verseEnd:14,quote:"Go ye now unto my place which was in Shiloh, and see what I did to it."}
  ]},
  {id:"lachish",biblicalName:"Lachish",modernName:"Tell ed-Duweir",region:"Judah",lat:31.567,lng:34.85,significance:"moderate",books:[6,12],events:[
    {book:6,order:10,action:"Joshua Takes Lachish",description:"Joshua conquered Lachish on the second day of assault during the southern campaign.",verse:"Joshua 10:31-32",bookName:"Joshua",chapter:10,verseStart:31,verseEnd:32,quote:"The LORD delivered Lachish into the hand of Israel."},
    {book:12,order:2,action:"Sennacherib Besieges Lachish",description:"The Assyrian king Sennacherib besieged and captured Lachish during his invasion of Judah.",verse:"2 Kings 18:13-14",bookName:"2 Kings",chapter:18,verseStart:13,verseEnd:14,quote:"Sennacherib king of Assyria came up against all the fenced cities of Judah."}
  ]},
  {id:"megiddo",biblicalName:"Megiddo",modernName:"Tell el-Mutesellim",region:"Jezreel Valley",lat:32.585,lng:35.184,significance:"moderate",books:[6,7,12],events:[
    {book:7,order:2,action:"Deborah and Barak's Battle",description:"The battle against Sisera was fought near the waters of Megiddo.",verse:"Judges 5:19",bookName:"Judges",chapter:5,verseStart:19,verseEnd:19,quote:"The kings came and fought; then fought the kings of Canaan in Taanach by the waters of Megiddo."},
    {book:12,order:6,action:"Josiah Killed at Megiddo",description:"Good king Josiah was killed in battle against Pharaoh Necho at Megiddo.",verse:"2 Kings 23:29",bookName:"2 Kings",chapter:23,verseStart:29,verseEnd:29,quote:"King Josiah went against him; and he slew him at Megiddo."}
  ]},
  // --- JERUSALEM (shared by many books) ---
  {id:"jerusalem",biblicalName:"Jerusalem",modernName:"Jerusalem",region:"Judah",lat:31.768,lng:35.214,significance:"major",books:[10,11,12,13,14,15,16,19,20,21,22,23,24,25,29,30,31,33,35,36,37,38,39],events:[
    {book:10,order:2,action:"David Conquers Jerusalem",description:"David captured the Jebusite fortress of Zion and made Jerusalem his capital.",verse:"2 Samuel 5:6-9",bookName:"2 Samuel",chapter:5,verseStart:6,verseEnd:9,quote:"David took the strong hold of Zion: the same is the city of David."},
    {book:10,order:3,action:"Ark Brought to Jerusalem",description:"David brought the Ark of the Covenant to Jerusalem with great celebration.",verse:"2 Samuel 6:14-17",bookName:"2 Samuel",chapter:6,verseStart:14,verseEnd:17,quote:"David danced before the LORD with all his might."},
    {book:11,order:2,action:"Solomon Builds the Temple",description:"Solomon built the magnificent temple of the LORD in Jerusalem over seven years.",verse:"1 Kings 6:1-14",bookName:"1 Kings",chapter:6,verseStart:1,verseEnd:14,quote:"I will dwell among the children of Israel, and will not forsake my people."},
    {book:11,order:3,action:"Temple Dedication",description:"Solomon dedicated the temple with prayer and sacrifice; God's glory filled the house.",verse:"1 Kings 8:10-11",bookName:"1 Kings",chapter:8,verseStart:10,verseEnd:11,quote:"The glory of the LORD had filled the house of the LORD."},
    {book:12,order:1,action:"Hezekiah's Prayer",description:"When Sennacherib threatened Jerusalem, Hezekiah prayed and God delivered the city.",verse:"2 Kings 19:14-19",bookName:"2 Kings",chapter:19,verseStart:14,verseEnd:19,quote:"O LORD, save thou us out of his hand, that all the kingdoms of the earth may know."},
    {book:13,order:2,action:"David Plans the Temple",description:"David prepared materials and plans for the temple his son Solomon would build.",verse:"1 Chronicles 22:5-10",bookName:"1 Chronicles",chapter:22,verseStart:5,verseEnd:10,quote:"Solomon my son, he shall build my house and my courts."},
    {book:14,order:1,action:"Solomon's Temple Completed",description:"Solomon completed and dedicated the temple, and God's glory filled it.",verse:"2 Chronicles 7:1-3",bookName:"2 Chronicles",chapter:7,verseStart:1,verseEnd:3,quote:"The fire came down from heaven and the glory of the LORD filled the house."},
    {book:14,order:2,action:"Hezekiah's Reforms",description:"King Hezekiah reopened and cleansed the temple, restoring true worship in Jerusalem.",verse:"2 Chronicles 29:3-11",bookName:"2 Chronicles",chapter:29,verseStart:3,verseEnd:11,quote:"He opened the doors of the house of the LORD, and repaired them."},
    {book:14,order:3,action:"Josiah's Reformation",description:"Josiah found the Book of the Law and led the greatest spiritual reformation in Judah.",verse:"2 Chronicles 34:14-21",bookName:"2 Chronicles",chapter:34,verseStart:14,verseEnd:21,quote:"Hilkiah the priest found a book of the law of the LORD given by Moses."},
    {book:15,order:2,action:"Temple Rebuilt",description:"The returned exiles rebuilt and dedicated the second temple in Jerusalem.",verse:"Ezra 6:14-16",bookName:"Ezra",chapter:6,verseStart:14,verseEnd:16,quote:"The children of Israel dedicated this house of God with joy."},
    {book:16,order:2,action:"Walls Rebuilt in 52 Days",description:"Nehemiah led the people to rebuild Jerusalem's walls in just fifty-two days.",verse:"Nehemiah 6:15-16",bookName:"Nehemiah",chapter:6,verseStart:15,verseEnd:16,quote:"The wall was finished in fifty and two days. Our enemies perceived that this work was wrought of our God."},
    {book:19,order:1,action:"Zion, City of God",description:"The Psalms celebrate Jerusalem as the holy city, the dwelling place of the LORD.",verse:"Psalm 122:1-3",bookName:"Psalms",chapter:122,verseStart:1,verseEnd:3,quote:"I was glad when they said unto me, Let us go into the house of the LORD."},
    {book:19,order:2,action:"The Lord Reigns in Zion",description:"God is praised as the great King, dwelling in His holy mountain of Zion.",verse:"Psalm 48:1-2",bookName:"Psalms",chapter:48,verseStart:1,verseEnd:2,quote:"Great is the LORD, and greatly to be praised in the city of our God, in the mountain of his holiness."},
    {book:20,order:1,action:"Solomon's Wisdom",description:"Solomon composed proverbs of wisdom for instruction and understanding in Jerusalem.",verse:"Proverbs 1:1-7",bookName:"Proverbs",chapter:1,verseStart:1,verseEnd:7,quote:"The fear of the LORD is the beginning of knowledge."},
    {book:21,order:1,action:"Vanity of Vanities",description:"The Preacher in Jerusalem searched for meaning in all things under the sun.",verse:"Ecclesiastes 1:1-2",bookName:"Ecclesiastes",chapter:1,verseStart:1,verseEnd:2,quote:"Vanity of vanities, saith the Preacher; all is vanity."},
    {book:22,order:1,action:"Song of Love",description:"Solomon's love song celebrates the beauty and devotion between lover and beloved.",verse:"Song of Solomon 1:1-4",bookName:"Song of Solomon",chapter:1,verseStart:1,verseEnd:4,quote:"Let him kiss me with the kisses of his mouth: for thy love is better than wine."},
    {book:23,order:1,action:"Isaiah's Vision",description:"Isaiah saw the Lord seated on His throne in the temple and was called to prophesy.",verse:"Isaiah 6:1-8",bookName:"Isaiah",chapter:6,verseStart:1,verseEnd:8,quote:"I saw the Lord sitting upon a throne, high and lifted up. Here am I; send me."},
    {book:23,order:2,action:"Virgin Birth Prophesied",description:"Isaiah prophesied the sign of Immanuel — a virgin shall conceive and bear a son.",verse:"Isaiah 7:14",bookName:"Isaiah",chapter:7,verseStart:14,verseEnd:14,quote:"Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel."},
    {book:24,order:1,action:"Temple Sermon",description:"Jeremiah stood in the temple gate and warned Judah to amend their ways or face destruction.",verse:"Jeremiah 7:1-7",bookName:"Jeremiah",chapter:7,verseStart:1,verseEnd:7,quote:"Amend your ways and your doings, and I will cause you to dwell in this place."},
    {book:24,order:2,action:"New Covenant Promised",description:"Jeremiah prophesied a new covenant written on the heart, not on stone tablets.",verse:"Jeremiah 31:31-34",bookName:"Jeremiah",chapter:31,verseStart:31,verseEnd:34,quote:"I will put my law in their inward parts, and write it in their hearts."},
    {book:25,order:1,action:"Jerusalem Mourned",description:"The poet weeps over the destruction of Jerusalem, yet affirms God's mercies are new every morning.",verse:"Lamentations 3:22-23",bookName:"Lamentations",chapter:3,verseStart:22,verseEnd:23,quote:"It is of the LORD's mercies that we are not consumed; they are new every morning."},
    {book:25,order:2,action:"How the City Sits Solitary",description:"The once-great city Jerusalem sits desolate, weeping in the night after her destruction.",verse:"Lamentations 1:1",bookName:"Lamentations",chapter:1,verseStart:1,verseEnd:1,quote:"How doth the city sit solitary, that was full of people! How is she become as a widow!"},
    {book:29,order:1,action:"Joel's Call to Repentance",description:"Joel called Jerusalem to fasting and weeping before the coming day of the LORD.",verse:"Joel 2:12-13",bookName:"Joel",chapter:2,verseStart:12,verseEnd:13,quote:"Turn ye even to me with all your heart, and with fasting, and with weeping."},
    {book:29,order:2,action:"Spirit Poured Out",description:"Joel prophesied that God would pour out His Spirit on all flesh in the latter days.",verse:"Joel 2:28-29",bookName:"Joel",chapter:2,verseStart:28,verseEnd:29,quote:"I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy."},
    {book:30,order:3,action:"Amos Roars from Zion",description:"Amos declared that the LORD would roar from Zion in judgment against all the nations.",verse:"Amos 1:2",bookName:"Amos",chapter:1,verseStart:2,verseEnd:2,quote:"The LORD will roar from Zion, and utter his voice from Jerusalem."},
    {book:31,order:2,action:"Zion's Deliverance",description:"Obadiah prophesied that deliverers would come to Mount Zion and the kingdom would be the LORD's.",verse:"Obadiah 1:21",bookName:"Obadiah",chapter:1,verseStart:21,verseEnd:21,quote:"Saviours shall come up on mount Zion; and the kingdom shall be the LORD's."},
    {book:33,order:2,action:"Micah Warns Jerusalem",description:"Micah warned that Zion would be plowed as a field because of the sins of its leaders.",verse:"Micah 3:12",bookName:"Micah",chapter:3,verseStart:12,verseEnd:12,quote:"Therefore shall Zion for your sake be plowed as a field."},
    {book:35,order:1,action:"Habakkuk Questions God",description:"Habakkuk asked God why He allowed violence and injustice to go unpunished in Judah.",verse:"Habakkuk 1:2-4",bookName:"Habakkuk",chapter:1,verseStart:2,verseEnd:4,quote:"O LORD, how long shall I cry, and thou wilt not hear!"},
    {book:35,order:2,action:"The Just Shall Live by Faith",description:"God answered Habakkuk: the righteous will endure by faithfulness.",verse:"Habakkuk 2:4",bookName:"Habakkuk",chapter:2,verseStart:4,verseEnd:4,quote:"The just shall live by his faith."},
    {book:36,order:1,action:"Day of the Lord",description:"Zephaniah warned of the great and terrible day of the LORD coming upon Jerusalem.",verse:"Zephaniah 1:14-16",bookName:"Zephaniah",chapter:1,verseStart:14,verseEnd:16,quote:"The great day of the LORD is near; it is near, and hasteth greatly."},
    {book:36,order:2,action:"Promise of Restoration",description:"God promised to restore Jerusalem and gather the humble who take refuge in the LORD.",verse:"Zephaniah 3:14-17",bookName:"Zephaniah",chapter:3,verseStart:14,verseEnd:17,quote:"The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy."},
    {book:37,order:1,action:"Rebuild the Temple!",description:"Haggai urged the returned exiles to stop building their own houses and rebuild God's temple.",verse:"Haggai 1:4-8",bookName:"Haggai",chapter:1,verseStart:4,verseEnd:8,quote:"Is it time for you to dwell in your ceiled houses, and this house lie waste?"},
    {book:37,order:2,action:"Glory of the Latter House",description:"Haggai prophesied that the glory of the second temple would exceed the first.",verse:"Haggai 2:9",bookName:"Haggai",chapter:2,verseStart:9,verseEnd:9,quote:"The glory of this latter house shall be greater than of the former."},
    {book:38,order:1,action:"Night Visions",description:"Zechariah saw eight night visions of God's plan to restore and bless Jerusalem.",verse:"Zechariah 1:8-17",bookName:"Zechariah",chapter:1,verseStart:8,verseEnd:17,quote:"I am returned to Jerusalem with mercies: my house shall be built in it."},
    {book:38,order:2,action:"King on a Donkey",description:"Zechariah prophesied a coming king riding on a donkey, bringing salvation and peace.",verse:"Zechariah 9:9",bookName:"Zechariah",chapter:9,verseStart:9,verseEnd:9,quote:"Rejoice greatly, O daughter of Zion; thy King cometh unto thee, just and having salvation, lowly and riding upon an ass."},
    {book:39,order:1,action:"The Messenger Will Come",description:"Malachi prophesied that God would send His messenger to prepare the way before Him.",verse:"Malachi 3:1",bookName:"Malachi",chapter:3,verseStart:1,verseEnd:1,quote:"Behold, I will send my messenger, and he shall prepare the way before me."},
    {book:39,order:2,action:"Sun of Righteousness",description:"Malachi's final prophecy: the sun of righteousness shall arise with healing in his wings.",verse:"Malachi 4:2",bookName:"Malachi",chapter:4,verseStart:2,verseEnd:2,quote:"Unto you that fear my name shall the Sun of righteousness arise with healing in his wings."}
  ]},
  // --- MORE HISTORY / JUDGES / RUTH cities ---
  {id:"gaza",biblicalName:"Gaza",modernName:"Gaza City",region:"Philistia",lat:31.517,lng:34.450,significance:"moderate",books:[7],events:[
    {book:7,order:4,action:"Samson at Gaza",description:"Samson carried away the gates of Gaza and later was blinded and imprisoned there.",verse:"Judges 16:1-3",bookName:"Judges",chapter:16,verseStart:1,verseEnd:3,quote:"Samson took the doors of the gate of the city and carried them up to the top of a hill."},
    {book:7,order:5,action:"Samson's Final Act",description:"Blinded Samson pushed apart the pillars of the Philistine temple, killing thousands.",verse:"Judges 16:28-30",bookName:"Judges",chapter:16,verseStart:28,verseEnd:30,quote:"Let me die with the Philistines. And the house fell upon the lords."}
  ]},
  {id:"dan",biblicalName:"Dan",modernName:"Tell el-Qadi",region:"Upper Galilee",lat:33.249,lng:35.652,significance:"moderate",books:[7,11],events:[
    {book:7,order:6,action:"Tribe of Dan Migrates",description:"The tribe of Dan migrated north, conquered Laish, and renamed it Dan.",verse:"Judges 18:27-29",bookName:"Judges",chapter:18,verseStart:27,verseEnd:29,quote:"They called the name of the city Dan, after the name of Dan their father."},
    {book:11,order:8,action:"Golden Calf at Dan",description:"Jeroboam set up a golden calf at Dan as a rival worship site to Jerusalem.",verse:"1 Kings 12:29-30",bookName:"1 Kings",chapter:12,verseStart:29,verseEnd:30,quote:"He set the one in Bethel, and the other put he in Dan."}
  ]},
  {id:"ophrah",biblicalName:"Ophrah",modernName:"Central Manasseh",region:"Manasseh",lat:32.1,lng:35.267,significance:"minor",books:[7],events:[
    {book:7,order:7,action:"Gideon Called",description:"The angel of the LORD appeared to Gideon at Ophrah and called him to deliver Israel from Midian.",verse:"Judges 6:11-16",bookName:"Judges",chapter:6,verseStart:11,verseEnd:16,quote:"The LORD is with thee, thou mighty man of valour. Go in this thy might and save Israel."}
  ]},
  {id:"mizpah",biblicalName:"Mizpah",modernName:"Tell en-Nasbeh",region:"Benjamin",lat:31.85,lng:35.167,significance:"minor",books:[7,9],events:[
    {book:7,order:8,action:"Israel Assembles",description:"All Israel assembled at Mizpah to deal with the crime at Gibeah, leading to civil war with Benjamin.",verse:"Judges 20:1-3",bookName:"Judges",chapter:20,verseStart:1,verseEnd:3,quote:"All the children of Israel went out, and the congregation was gathered as one man."},
    {book:9,order:3,action:"Samuel Judges Israel",description:"Samuel regularly judged Israel at Mizpah, calling the nation to repent and serve the LORD.",verse:"1 Samuel 7:5-6",bookName:"1 Samuel",chapter:7,verseStart:5,verseEnd:6,quote:"Gather all Israel to Mizpeh, and I will pray for you unto the LORD."}
  ]},
  {id:"gibeah",biblicalName:"Gibeah",modernName:"Tell el-Ful",region:"Benjamin",lat:31.817,lng:35.233,significance:"minor",books:[7,9],events:[
    {book:9,order:4,action:"Saul's Capital",description:"Saul ruled as Israel's first king from his hometown of Gibeah.",verse:"1 Samuel 10:26",bookName:"1 Samuel",chapter:10,verseStart:26,verseEnd:26,quote:"And Saul also went home to Gibeah; and there went with him a band of men."}
  ]},
  {id:"moab",biblicalName:"Land of Moab",modernName:"Central Jordan",region:"Transjordan",lat:31.5,lng:35.7,significance:"moderate",books:[8],events:[
    {book:8,order:1,action:"Naomi in Moab",description:"During a famine, Naomi and her family moved to Moab, where her sons married Moabite women.",verse:"Ruth 1:1-4",bookName:"Ruth",chapter:1,verseStart:1,verseEnd:4,quote:"A certain man of Bethlehem-judah went to sojourn in the country of Moab."}
  ]},
  {id:"bethlehem",biblicalName:"Bethlehem",modernName:"Bethlehem",region:"Judah",lat:31.705,lng:35.202,significance:"major",books:[8,9,33],events:[
    {book:8,order:2,action:"Ruth and Boaz",description:"Ruth gleaned in Boaz's fields in Bethlehem. He redeemed her as kinsman-redeemer and they married.",verse:"Ruth 2:2-3",bookName:"Ruth",chapter:2,verseStart:2,verseEnd:3,quote:"Let me go to the field, and glean ears of corn after him in whose sight I shall find grace."},
    {book:8,order:3,action:"Ancestor of David",description:"Ruth and Boaz had a son Obed, who was the grandfather of King David.",verse:"Ruth 4:17",bookName:"Ruth",chapter:4,verseStart:17,verseEnd:17,quote:"There is a son born to Naomi; and they called his name Obed: he is the father of Jesse, the father of David."},
    {book:9,order:5,action:"David Anointed",description:"Samuel secretly anointed the young shepherd David as the future king of Israel in Bethlehem.",verse:"1 Samuel 16:11-13",bookName:"1 Samuel",chapter:16,verseStart:11,verseEnd:13,quote:"Arise, anoint him: for this is he. And the Spirit of the LORD came upon David."},
    {book:33,order:1,action:"Ruler from Bethlehem",description:"Micah prophesied that a future ruler of Israel would come from Bethlehem Ephrathah.",verse:"Micah 5:2",bookName:"Micah",chapter:5,verseStart:2,verseEnd:2,quote:"But thou, Bethlehem Ephrathah, though thou be little among the thousands of Judah, yet out of thee shall he come forth that is to be ruler in Israel."}
  ]},
  // --- SAMUEL / KINGS cities ---
  {id:"ramah",biblicalName:"Ramah",modernName:"Er-Ram",region:"Benjamin",lat:31.85,lng:35.217,significance:"minor",books:[9,24],events:[
    {book:9,order:6,action:"Samuel's Home",description:"Samuel was born and lived at Ramah, where he served as judge and prophet over Israel.",verse:"1 Samuel 7:17",bookName:"1 Samuel",chapter:7,verseStart:17,verseEnd:17,quote:"His return was to Ramah; for there was his house; and there he judged Israel."},
    {book:24,order:5,action:"Rachel Weeps at Ramah",description:"Jeremiah heard Rachel weeping at Ramah for her children being taken into exile.",verse:"Jeremiah 31:15",bookName:"Jeremiah",chapter:31,verseStart:15,verseEnd:15,quote:"A voice was heard in Ramah, lamentation and bitter weeping; Rachel weeping for her children."}
  ]},
  {id:"valley-elah",biblicalName:"Valley of Elah",modernName:"Wadi es-Sant",region:"Judah",lat:31.695,lng:34.954,significance:"minor",books:[9],events:[
    {book:9,order:7,action:"David Defeats Goliath",description:"Young David killed the giant Goliath with a sling and stone in the Valley of Elah.",verse:"1 Samuel 17:49-50",bookName:"1 Samuel",chapter:17,verseStart:49,verseEnd:50,quote:"David prevailed over the Philistine with a sling and with a stone."}
  ]},
  {id:"nob",biblicalName:"Nob",modernName:"Mount Scopus area",region:"Benjamin",lat:31.783,lng:35.233,significance:"minor",books:[9],events:[
    {book:9,order:8,action:"David Flees to Nob",description:"David fled to the priest Ahimelech at Nob and was given the showbread and Goliath's sword.",verse:"1 Samuel 21:1-9",bookName:"1 Samuel",chapter:21,verseStart:1,verseEnd:9,quote:"The priest gave him hallowed bread: for there was no bread there but the showbread."}
  ]},
  {id:"gath",biblicalName:"Gath",modernName:"Tell es-Safi",region:"Philistia",lat:31.617,lng:34.850,significance:"moderate",books:[9],events:[
    {book:9,order:9,action:"David Among Philistines",description:"David fled to King Achish of Gath and pretended to be mad to escape.",verse:"1 Samuel 21:10-15",bookName:"1 Samuel",chapter:21,verseStart:10,verseEnd:15,quote:"David changed his behaviour before them, and feigned himself mad."}
  ]},
  {id:"endor",biblicalName:"Endor",modernName:"Endor",region:"Issachar",lat:32.6,lng:35.367,significance:"minor",books:[9],events:[
    {book:9,order:10,action:"Saul and the Medium",description:"In desperation, King Saul consulted a medium at Endor before his final battle.",verse:"1 Samuel 28:7-19",bookName:"1 Samuel",chapter:28,verseStart:7,verseEnd:19,quote:"To morrow shalt thou and thy sons be with me."}
  ]},
  {id:"gilboa",biblicalName:"Mount Gilboa",modernName:"Gilboa Ridge",region:"Issachar",lat:32.5,lng:35.417,significance:"minor",books:[9],events:[
    {book:9,order:11,action:"Saul's Death",description:"King Saul and his sons died in battle against the Philistines on Mount Gilboa.",verse:"1 Samuel 31:1-6",bookName:"1 Samuel",chapter:31,verseStart:1,verseEnd:6,quote:"So Saul died, and his three sons, and his armourbearer, and all his men, that same day together."}
  ]},
  {id:"ziklag",biblicalName:"Ziklag",modernName:"Tell esh-Sharia",region:"Negev",lat:31.35,lng:34.6,significance:"minor",books:[9],events:[
    {book:9,order:12,action:"David's Refuge",description:"The Philistine king gave David the town of Ziklag as a refuge while fleeing Saul.",verse:"1 Samuel 27:5-6",bookName:"1 Samuel",chapter:27,verseStart:5,verseEnd:6,quote:"Achish gave him Ziklag that day."}
  ]},
  {id:"rabbah",biblicalName:"Rabbah",modernName:"Amman, Jordan",region:"Ammon",lat:31.95,lng:35.933,significance:"moderate",books:[10],events:[
    {book:10,order:4,action:"Uriah Killed at Rabbah",description:"David sent Uriah to the front lines at Rabbah to be killed, then took Bathsheba as his wife.",verse:"2 Samuel 11:14-17",bookName:"2 Samuel",chapter:11,verseStart:14,verseEnd:17,quote:"Set ye Uriah in the forefront of the hottest battle, and retire ye from him, that he may be smitten."}
  ]},
  {id:"mahanaim",biblicalName:"Mahanaim",modernName:"Tulul edh-Dhahab",region:"Gilead",lat:32.35,lng:35.717,significance:"minor",books:[10],events:[
    {book:10,order:5,action:"David Flees Absalom",description:"David retreated to Mahanaim when his son Absalom rebelled and seized Jerusalem.",verse:"2 Samuel 17:24",bookName:"2 Samuel",chapter:17,verseStart:24,verseEnd:24,quote:"David came to Mahanaim. And Absalom passed over Jordan."}
  ]},
  // --- KINGS / PROPHETS cities ---
  {id:"tyre",biblicalName:"Tyre",modernName:"Tyre, Lebanon",region:"Phoenicia",lat:33.271,lng:35.196,significance:"moderate",books:[11,26],events:[
    {book:11,order:9,action:"Hiram's Alliance",description:"King Hiram of Tyre supplied cedar wood and craftsmen for Solomon's temple.",verse:"1 Kings 5:1-10",bookName:"1 Kings",chapter:5,verseStart:1,verseEnd:10,quote:"Hiram king of Tyre sent his servants unto Solomon."},
    {book:26,order:2,action:"Prophecy Against Tyre",description:"Ezekiel prophesied the destruction of the wealthy trading city of Tyre.",verse:"Ezekiel 26:3-5",bookName:"Ezekiel",chapter:26,verseStart:3,verseEnd:5,quote:"I am against thee, O Tyrus; I will cause many nations to come up against thee."}
  ]},
  {id:"zarephath",biblicalName:"Zarephath",modernName:"Sarafand, Lebanon",region:"Phoenicia",lat:33.45,lng:35.29,significance:"minor",books:[11],events:[
    {book:11,order:10,action:"Elijah and the Widow",description:"During famine, Elijah stayed with a widow at Zarephath; her flour and oil never ran out.",verse:"1 Kings 17:8-16",bookName:"1 Kings",chapter:17,verseStart:8,verseEnd:16,quote:"The barrel of meal shall not waste, neither shall the cruse of oil fail."}
  ]},
  {id:"carmel",biblicalName:"Mount Carmel",modernName:"Haifa, Israel",region:"Carmel Range",lat:32.738,lng:35.033,significance:"moderate",books:[11],events:[
    {book:11,order:11,action:"Elijah vs. Prophets of Baal",description:"Elijah challenged 450 prophets of Baal on Mount Carmel; fire fell from heaven on Elijah's altar.",verse:"1 Kings 18:36-39",bookName:"1 Kings",chapter:18,verseStart:36,verseEnd:39,quote:"The fire of the LORD fell, and consumed the burnt sacrifice. The LORD, he is the God!"}
  ]},
  {id:"jezreel",biblicalName:"Jezreel",modernName:"Zir'in",region:"Jezreel Valley",lat:32.557,lng:35.327,significance:"moderate",books:[11,12],events:[
    {book:11,order:12,action:"Naboth's Vineyard",description:"Jezebel plotted to steal Naboth's vineyard in Jezreel for King Ahab, having Naboth murdered.",verse:"1 Kings 21:1-16",bookName:"1 Kings",chapter:21,verseStart:1,verseEnd:16,quote:"Hast thou killed, and also taken possession?"},
    {book:12,order:7,action:"Jehu's Revolution",description:"Jehu executed judgment on the house of Ahab at Jezreel, fulfilling Elijah's prophecy.",verse:"2 Kings 9:30-37",bookName:"2 Kings",chapter:9,verseStart:30,verseEnd:37,quote:"This is the word of the LORD, which he spake by his servant Elijah."}
  ]},
  {id:"damascus",biblicalName:"Damascus",modernName:"Damascus, Syria",region:"Aram/Syria",lat:33.514,lng:36.277,significance:"major",books:[11,12,23,30],events:[
    {book:12,order:8,action:"Naaman Healed",description:"Naaman, the Syrian commander, was healed of leprosy by washing in the Jordan at Elisha's command.",verse:"2 Kings 5:10-14",bookName:"2 Kings",chapter:5,verseStart:10,verseEnd:14,quote:"He went down and dipped himself seven times in Jordan, and his flesh came again like a little child."},
    {book:23,order:4,action:"Oracle Against Damascus",description:"Isaiah prophesied that Damascus would be reduced to a ruinous heap.",verse:"Isaiah 17:1",bookName:"Isaiah",chapter:17,verseStart:1,verseEnd:1,quote:"Behold, Damascus is taken away from being a city, and it shall be a ruinous heap."},
    {book:30,order:1,action:"Amos Condemns Damascus",description:"Amos pronounced judgment on Damascus for its cruelty against Gilead.",verse:"Amos 1:3",bookName:"Amos",chapter:1,verseStart:3,verseEnd:3,quote:"For three transgressions of Damascus, and for four, I will not turn away the punishment thereof."}
  ]},
  {id:"samaria",biblicalName:"Samaria",modernName:"Sebastia",region:"Samaria",lat:32.276,lng:35.193,significance:"major",books:[11,12,28,30],events:[
    {book:11,order:13,action:"Capital of Israel",description:"Omri built Samaria as the new capital of the northern kingdom of Israel.",verse:"1 Kings 16:24",bookName:"1 Kings",chapter:16,verseStart:24,verseEnd:24,quote:"He bought the hill Samaria and built on the hill, and called the name of the city Samaria."},
    {book:12,order:9,action:"Fall of Samaria",description:"Assyria conquered Samaria in 722 BC, ending the northern kingdom and deporting its people.",verse:"2 Kings 17:5-6",bookName:"2 Kings",chapter:17,verseStart:5,verseEnd:6,quote:"The king of Assyria took Samaria, and carried Israel away into Assyria."},
    {book:28,order:1,action:"Hosea's Marriage",description:"God told Hosea to marry an unfaithful wife to illustrate Israel's spiritual adultery.",verse:"Hosea 1:2-3",bookName:"Hosea",chapter:1,verseStart:2,verseEnd:3,quote:"Go, take unto thee a wife of whoredoms; for the land hath committed great whoredom."},
    {book:30,order:4,action:"Amos Condemns Samaria",description:"Amos denounced the wealthy women and corrupt leaders of Samaria for their oppression of the poor.",verse:"Amos 4:1-3",bookName:"Amos",chapter:4,verseStart:1,verseEnd:3,quote:"Hear this word, ye kine of Bashan, that oppress the poor, that crush the needy."}
  ]},
  {id:"shunem",biblicalName:"Shunem",modernName:"Sulam",region:"Jezreel Valley",lat:32.6,lng:35.35,significance:"minor",books:[12],events:[
    {book:12,order:10,action:"Shunammite's Son Raised",description:"Elisha raised the Shunammite woman's dead son back to life.",verse:"2 Kings 4:32-37",bookName:"2 Kings",chapter:4,verseStart:32,verseEnd:37,quote:"The child sneezed seven times, and the child opened his eyes."}
  ]},
  {id:"sidon",biblicalName:"Sidon",modernName:"Sidon, Lebanon",region:"Phoenicia",lat:33.557,lng:35.373,significance:"moderate",books:[11],events:[
    {book:11,order:14,action:"Jezebel's Origin",description:"Jezebel, daughter of the king of Sidon, brought Baal worship into Israel through King Ahab.",verse:"1 Kings 16:31",bookName:"1 Kings",chapter:16,verseStart:31,verseEnd:31,quote:"He took to wife Jezebel the daughter of Ethbaal king of the Zidonians, and went and served Baal."}
  ]},
  // --- EXILE / RETURN cities ---
  {id:"susa",biblicalName:"Susa / Shushan",modernName:"Shush, Iran",region:"Persia",lat:32.193,lng:48.255,significance:"major",books:[16,17,27],events:[
    {book:16,order:1,action:"Nehemiah's Prayer",description:"Nehemiah, cupbearer to the king in Susa, wept and prayed when he heard Jerusalem's walls were broken.",verse:"Nehemiah 1:1-4",bookName:"Nehemiah",chapter:1,verseStart:1,verseEnd:4,quote:"I sat down and wept, and mourned certain days, and fasted, and prayed before the God of heaven."},
    {book:17,order:1,action:"Esther Becomes Queen",description:"The Jewish maiden Esther was chosen as queen of Persia in the citadel of Susa.",verse:"Esther 2:17",bookName:"Esther",chapter:2,verseStart:17,verseEnd:17,quote:"The king loved Esther above all the women, and she obtained grace and favour in his sight."},
    {book:17,order:2,action:"Haman's Plot",description:"Haman plotted to destroy all Jews in the Persian Empire, but Esther interceded.",verse:"Esther 4:14",bookName:"Esther",chapter:4,verseStart:14,verseEnd:14,quote:"Who knoweth whether thou art come to the kingdom for such a time as this?"},
    {book:17,order:3,action:"Purim Established",description:"The Jews were saved and the feast of Purim was established to celebrate their deliverance.",verse:"Esther 9:20-22",bookName:"Esther",chapter:9,verseStart:20,verseEnd:22,quote:"They should make them days of feasting and joy, and of sending portions one to another."},
    {book:27,order:5,action:"Daniel's Vision at Susa",description:"Daniel had a vision of a ram and a goat at Susa, representing future kingdoms.",verse:"Daniel 8:1-2",bookName:"Daniel",chapter:8,verseStart:1,verseEnd:2,quote:"I saw in a vision; and I was by the river of Ulai."}
  ]},
  // --- WISDOM / JOB ---
  {id:"uz",biblicalName:"Land of Uz",modernName:"SE of Edom",region:"Arabia",lat:30.5,lng:36.0,significance:"moderate",books:[18],events:[
    {book:18,order:1,action:"Job's Trials",description:"Job, a righteous man in the land of Uz, lost everything — children, wealth, and health — yet held fast to God.",verse:"Job 1:1-3",bookName:"Job",chapter:1,verseStart:1,verseEnd:3,quote:"There was a man in the land of Uz, whose name was Job; and that man was perfect and upright."},
    {book:18,order:2,action:"God Answers Job",description:"God spoke to Job from a whirlwind, revealing His sovereign power over all creation.",verse:"Job 38:1-4",bookName:"Job",chapter:38,verseStart:1,verseEnd:4,quote:"Where wast thou when I laid the foundations of the earth? Declare, if thou hast understanding."},
    {book:18,order:3,action:"Job Restored",description:"God restored Job's fortunes twofold and blessed the latter end of his life more than the beginning.",verse:"Job 42:10-12",bookName:"Job",chapter:42,verseStart:10,verseEnd:12,quote:"The LORD gave Job twice as much as he had before."}
  ]},
  // --- PROPHETS cities ---
  {id:"chebar",biblicalName:"River Chebar",modernName:"Near Nippur, Iraq",region:"Babylonia",lat:32.126,lng:45.233,significance:"moderate",books:[26],events:[
    {book:26,order:1,action:"Ezekiel's Vision of Glory",description:"By the river Chebar, Ezekiel saw a stunning vision of God's glory — four living creatures and wheels within wheels.",verse:"Ezekiel 1:1-28",bookName:"Ezekiel",chapter:1,verseStart:1,verseEnd:28,quote:"The heavens were opened, and I saw visions of God."},
    {book:26,order:4,action:"Valley of Dry Bones",description:"God showed Ezekiel a valley of dry bones and brought them back to life, symbolizing Israel's restoration.",verse:"Ezekiel 37:1-10",bookName:"Ezekiel",chapter:37,verseStart:1,verseEnd:10,quote:"O ye dry bones, hear the word of the LORD. I will cause breath to enter into you, and ye shall live."}
  ]},
  {id:"anathoth",biblicalName:"Anathoth",modernName:"Anata",region:"Benjamin",lat:31.817,lng:35.267,significance:"minor",books:[24],events:[
    {book:24,order:6,action:"Jeremiah's Hometown",description:"Jeremiah was a priest from Anathoth, called by God before birth to be a prophet to the nations.",verse:"Jeremiah 1:1-5",bookName:"Jeremiah",chapter:1,verseStart:1,verseEnd:5,quote:"Before I formed thee in the belly I knew thee; and before thou camest forth I ordained thee a prophet."}
  ]},
  {id:"tahpanhes",biblicalName:"Tahpanhes",modernName:"Tell Defenneh, Egypt",region:"Egypt",lat:31.05,lng:32.55,significance:"minor",books:[24],events:[
    {book:24,order:7,action:"Jeremiah Taken to Egypt",description:"After Jerusalem fell, a remnant forced Jeremiah to flee with them to Tahpanhes in Egypt.",verse:"Jeremiah 43:7",bookName:"Jeremiah",chapter:43,verseStart:7,verseEnd:7,quote:"They came into the land of Egypt; for they obeyed not the voice of the LORD."}
  ]},
  {id:"nineveh",biblicalName:"Nineveh",modernName:"Mosul, Iraq",region:"Assyria",lat:36.359,lng:43.153,significance:"major",books:[32,34],events:[
    {book:32,order:3,action:"Nineveh Repents",description:"Jonah preached to Nineveh and the entire city repented in sackcloth and ashes.",verse:"Jonah 3:5-10",bookName:"Jonah",chapter:3,verseStart:5,verseEnd:10,quote:"The people of Nineveh believed God, and proclaimed a fast."},
    {book:34,order:1,action:"Nineveh's Doom",description:"Nahum prophesied the complete destruction of Nineveh for its cruelty and wickedness.",verse:"Nahum 1:1-2",bookName:"Nahum",chapter:1,verseStart:1,verseEnd:2,quote:"The LORD is jealous, and the LORD revengeth; the LORD will take vengeance on his adversaries."},
    {book:34,order:2,action:"Nineveh Falls",description:"Nahum described the fall of Nineveh in vivid detail — the city would be utterly destroyed.",verse:"Nahum 3:7",bookName:"Nahum",chapter:3,verseStart:7,verseEnd:7,quote:"Nineveh is laid waste: who will bemoan her?"}
  ]},
  {id:"joppa",biblicalName:"Joppa / Jaffa",modernName:"Jaffa, Israel",region:"Coastal Plain",lat:32.053,lng:34.755,significance:"moderate",books:[32],events:[
    {book:32,order:1,action:"Jonah Flees",description:"Jonah boarded a ship at Joppa heading for Tarshish, trying to flee from God's command.",verse:"Jonah 1:3",bookName:"Jonah",chapter:1,verseStart:3,verseEnd:3,quote:"Jonah rose up to flee unto Tarshish from the presence of the LORD."},
    {book:32,order:2,action:"The Great Fish",description:"God sent a great storm and a great fish to swallow Jonah, who prayed from inside for three days.",verse:"Jonah 1:17",bookName:"Jonah",chapter:1,verseStart:17,verseEnd:17,quote:"The LORD had prepared a great fish to swallow up Jonah."}
  ]},
  {id:"tarshish",biblicalName:"Toward Tarshish",modernName:"Western Mediterranean",region:"Mediterranean",lat:36.0,lng:-5.5,significance:"minor",books:[32],events:[
    {book:32,order:4,action:"Fleeing West",description:"Jonah tried to sail to Tarshish — the farthest known point west — to escape God's call eastward.",verse:"Jonah 1:3",bookName:"Jonah",chapter:1,verseStart:3,verseEnd:3,quote:"He found a ship going to Tarshish; so he paid the fare thereof."}
  ]},
  {id:"tekoa",biblicalName:"Tekoa",modernName:"Khirbet Tequa",region:"Judah",lat:31.633,lng:35.217,significance:"minor",books:[30],events:[
    {book:30,order:5,action:"Amos the Shepherd",description:"Amos, a shepherd from Tekoa, was called by God to prophesy against Israel's injustice.",verse:"Amos 1:1",bookName:"Amos",chapter:1,verseStart:1,verseEnd:1,quote:"The words of Amos, who was among the herdmen of Tekoa."}
  ]},
  {id:"bozrah",biblicalName:"Bozrah / Edom",modernName:"Buseirah, Jordan",region:"Edom",lat:30.733,lng:35.609,significance:"moderate",books:[31],events:[
    {book:31,order:1,action:"Edom Judged",description:"Obadiah pronounced God's judgment on Edom for violence against brother Jacob during Jerusalem's fall.",verse:"Obadiah 1:1-4",bookName:"Obadiah",chapter:1,verseStart:1,verseEnd:4,quote:"Though thou exalt thyself as the eagle, and though thou set thy nest among the stars, thence will I bring thee down."}
  ]},
  {id:"moresheth",biblicalName:"Moresheth-Gath",modernName:"Tell el-Judeideh",region:"Judah",lat:31.617,lng:34.9,significance:"minor",books:[33],events:[
    {book:33,order:3,action:"Micah's Home",description:"Micah prophesied from Moresheth-Gath, calling for justice, mercy, and humility.",verse:"Micah 6:8",bookName:"Micah",chapter:6,verseStart:8,verseEnd:8,quote:"What doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?"}
  ]},
  // --- HOSEA extra ---
  {id:"jezreel-valley",biblicalName:"Jezreel Valley",modernName:"Jezreel Valley",region:"Northern Israel",lat:32.58,lng:35.30,significance:"minor",books:[28],events:[
    {book:28,order:3,action:"Hosea Names His Son",description:"God told Hosea to name his son Jezreel as a sign of coming judgment on the house of Jehu.",verse:"Hosea 1:4-5",bookName:"Hosea",chapter:1,verseStart:4,verseEnd:5,quote:"Call his name Jezreel; for yet a little while, and I will avenge the blood of Jezreel."}
  ]}
];

// ============================================
// ROUTES
// ============================================
export const routes = [
  {book:1,name:"Abraham's Journey",outbound:[[46.103,30.963],[39.032,36.866],[35.283,32.214],[35.233,31.933],[31.25,29.87],[35.100,31.533],[34.791,31.252]],returnPath:null},
  {book:1,name:"Jacob's Journey",outbound:[[34.791,31.252],[35.233,31.933],[39.032,36.866],[35.57,32.3],[35.283,32.214]],returnPath:null},
  {book:2,name:"The Exodus",outbound:[[31.85,30.85],[31.25,29.87],[32.9,29.6],[33.0,29.2],[33.5,28.8],[33.976,28.539]],returnPath:null},
  {book:4,name:"Wilderness Wandering",outbound:[[33.976,28.539],[34.41,30.64],[34.5,29.5],[35.55,31.83]],returnPath:null},
  {book:6,name:"Joshua's Conquest",outbound:[[35.444,31.899],[35.463,31.861],[35.267,31.917],[35.18,31.85],[35.567,33.017]],returnPath:null},
  {book:8,name:"Ruth's Journey",outbound:[[35.7,31.5],[35.202,31.705]],returnPath:null},
  {book:9,name:"David's Flight",outbound:[[35.202,31.705],[35.233,31.817],[35.233,31.783],[34.850,31.617],[34.6,31.35]],returnPath:null},
  {book:10,name:"David to Jerusalem",outbound:[[35.100,31.533],[35.214,31.768],[35.933,31.95],[35.717,32.35]],returnPath:null},
  {book:11,name:"Elijah's Journey",outbound:[[35.29,33.45],[35.033,32.738],[34.791,31.252],[33.976,28.539]],returnPath:null},
  {book:15,name:"Return from Exile",outbound:[[44.428,32.536],[35.214,31.768]],returnPath:null},
  {book:16,name:"Nehemiah's Journey",outbound:[[48.255,32.193],[35.214,31.768]],returnPath:null},
  {book:24,name:"Jeremiah's Path",outbound:[[35.214,31.768],[35.217,31.85],[32.55,31.05]],returnPath:null},
  {book:27,name:"Daniel's Exile",outbound:[[35.214,31.768],[44.428,32.536]],returnPath:null},
  {book:32,name:"Jonah's Journey",outbound:[[34.755,32.053],[-5.5,36.0]],returnPath:[[34.755,32.053],[43.153,36.359]]}
];

// ============================================
// SCRIPTURE INDEX (computed)
// ============================================
export const scriptureIndex = new Map();
export const allChapters = [];

cities.forEach(city => {
  city.events.forEach(event => {
    if (!scriptureIndex.has(event.bookName)) {
      scriptureIndex.set(event.bookName, new Map());
    }
    const bookMap = scriptureIndex.get(event.bookName);
    if (!bookMap.has(event.chapter)) {
      bookMap.set(event.chapter, []);
    }
    bookMap.get(event.chapter).push({ ...event, cityId: city.id, cityName: city.biblicalName });
  });
});

scriptureIndex.forEach((chapters, bookName) => {
  const sortedChapters = [...chapters.keys()].sort((a, b) => a - b);
  sortedChapters.forEach(ch => {
    allChapters.push({ bookName, chapter: ch, eventCount: chapters.get(ch).length });
  });
});
