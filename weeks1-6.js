const weeks1_6 = [
  {
    week: 1,
    weekTitle: "Week 1: Arithmetic Speed & Core Vocabulary",
    days: [
      {
        day: 1,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Times Tables & Rapid Recall",
        lesson: "Master 2x, 3x, 4x, 5x, and 10x tables. Remember: even numbers end in 0, 2, 4, 6, 8; multiples of 5 end in 0 or 5; digits of multiples of 9 add up to 9.",
        questions: [
          { q: "What is 8 × 7?", opts: ["54", "56", "64", "49"], ans: 1, exp: "8 × 7 = 56." },
          { q: "What is 108 ÷ 9?", opts: ["11", "12", "9", "13"], ans: 1, exp: "108 ÷ 9 = 12." },
          { q: "Sam has 6 packs of 8 pencils. How many pencils in total?", opts: ["42", "48", "54", "36"], ans: 1, exp: "6 × 8 = 48 pencils." },
          { q: "Which number is a multiple of both 3 and 4?", opts: ["14", "18", "24", "28"], ans: 2, exp: "24 ÷ 3 = 8 and 24 ÷ 4 = 6." },
          { q: "What is 7 × 6?", opts: ["42", "36", "48", "45"], ans: 0, exp: "7 × 6 = 42." },
          { q: "What is 63 ÷ 7?", opts: ["8", "9", "7", "6"], ans: 1, exp: "63 ÷ 7 = 9 because 9 × 7 = 63." },
          { q: "Which number is an EVEN multiple of 5?", opts: ["15", "25", "30", "35"], ans: 2, exp: "30 ends in 0, making it an even number and a multiple of 5." },
          { q: "What is 12 × 4?", opts: ["44", "48", "52", "46"], ans: 1, exp: "12 × 4 = 48." },
          { q: "What is 36 ÷ 4?", opts: ["8", "9", "7", "12"], ans: 1, exp: "36 ÷ 4 = 9." },
          { q: "If 5 boxes hold 9 apples each, how many apples in total?", opts: ["40", "45", "50", "35"], ans: 1, exp: "5 × 9 = 45 apples." }
        ]
      },
      {
        day: 2,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Synonyms & Precision Vocabulary",
        lesson: "Synonyms are words with the same or nearly the same meaning. Always test your choice inside a sample sentence.",
        questions: [
          { q: "Find the word closest in meaning to GIGANTIC:", opts: ["Tiny", "Enormous", "Heavy", "Bright"], ans: 1, exp: "Gigantic and Enormous both mean extremely large." },
          { q: "Find the word closest in meaning to CAUTIOUS:", opts: ["Careful", "Brave", "Quick", "Foolish"], ans: 0, exp: "Cautious means taking care to avoid risks." },
          { q: "Find the word closest in meaning to CONSTRUCT:", opts: ["Destroy", "Build", "Design", "Repair"], ans: 1, exp: "Construct means to build." },
          { q: "Find the word closest in meaning to RELUCTANT:", opts: ["Eager", "Unwilling", "Prompt", "Certain"], ans: 1, exp: "Reluctant means hesitant or unwilling." },
          { q: "Find the word closest in meaning to VACANT:", opts: ["Full", "Empty", "Busy", "Crowded"], ans: 1, exp: "Vacant means empty or unoccupied." },
          { q: "Find the word closest in meaning to ASSIST:", opts: ["Hinder", "Help", "Lead", "Follow"], ans: 1, exp: "Assist means to help." },
          { q: "Find the word closest in meaning to FRAGILE:", opts: ["Strong", "Delicate", "Heavy", "Tough"], ans: 1, exp: "Fragile means delicate and easily broken." },
          { q: "Find the word closest in meaning to ANCIENT:", opts: ["Modern", "Precious", "Old", "Fragile"], ans: 2, exp: "Ancient means belonging to the distant past (very old)." },
          { q: "Find the word closest in meaning to PARDON:", opts: ["Blame", "Forgive", "Punish", "Scold"], ans: 1, exp: "Pardon means to forgive or excuse." },
          { q: "Select two words closest in meaning: [Gleaming, Dull, Shiny, Heavy]", opts: ["Gleaming & Dull", "Dull & Heavy", "Gleaming & Shiny", "Shiny & Heavy"], ans: 2, exp: "Gleaming and Shiny both mean reflecting bright light." }
        ]
      },
      {
        day: 3,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Multi-Step Word Problems",
        lesson: "Break multi-step problems down: 1) Find totals, 2) Subtract spent/used quantities, 3) Check work using inverse operations.",
        questions: [
          { q: "Leo has £20. He buys 3 books for £4.50 each. How much change?", opts: ["£6.50", "£5.50", "£7.50", "£13.50"], ans: 0, exp: "3 × £4.50 = £13.50. £20 - £13.50 = £6.50." },
          { q: "Maya has 48 chocolates and eats 1/4 of them. How many left?", opts: ["12", "36", "24", "32"], ans: 1, exp: "1/4 of 48 = 12. 48 - 12 = 36." },
          { q: "A bus has 18 people. 7 get off, 12 get on. How many now?", opts: ["23", "25", "21", "19"], ans: 0, exp: "18 - 7 = 11. 11 + 12 = 23." },
          { q: "Tom saves £3/week for 9 weeks, then spends £12. How much left?", opts: ["£15", "£27", "£18", "£21"], ans: 0, exp: "9 × 3 = £27. £27 - £12 = £15." },
          { q: "A box has 60 toys. 25 are red, 18 are blue, rest are green. How many green?", opts: ["17", "18", "19", "20"], ans: 0, exp: "25 + 18 = 43 red & blue. 60 - 43 = 17 green." },
          { q: "What is double 38 plus 15?", opts: ["91", "81", "76", "88"], ans: 0, exp: "Double 38 = 76. 76 + 15 = 91." },
          { q: "Subtract 39 from 85:", opts: ["46", "56", "44", "48"], ans: 0, exp: "85 - 39 = 46." },
          { q: "Four children share 32 sweets equally. One eats 2 of his. How many does he have left?", opts: ["6", "8", "5", "7"], ans: 0, exp: "32 ÷ 4 = 8 sweets each. 8 - 2 = 6 sweets left." },
          { q: "A fence is 35m long. Posts are placed every 5m. Including both ends, how many posts?", opts: ["7", "8", "6", "9"], ans: 1, exp: "35 ÷ 5 = 7 intervals. Add 1 post for the starting end = 8 posts." },
          { q: "What number added to 47 gives 112?", opts: ["65", "75", "55", "67"], ans: 0, exp: "112 - 47 = 65." }
        ]
      },
      {
        day: 4,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Antonyms & Opposites",
        lesson: "Antonyms are words with exact opposite meanings. Beware of distractor options that are synonyms!",
        questions: [
          { q: "Find the word OPPOSITE in meaning to RECKLESS:", opts: ["Dangerous", "Careful", "Bold", "Speedy"], ans: 1, exp: "Reckless means careless. Opposite is Careful." },
          { q: "Find the word OPPOSITE in meaning to PERMANENT:", opts: ["Everlasting", "Temporary", "Solid", "Fixed"], ans: 1, exp: "Permanent means forever; Temporary means limited time." },
          { q: "Find the word OPPOSITE in meaning to INCREASE:", opts: ["Expand", "Reduce", "Multiply", "Extend"], ans: 1, exp: "Increase means grow; Reduce means make smaller." },
          { q: "Find the word OPPOSITE in meaning to TIMID:", opts: ["Shy", "Quiet", "Bold", "Fearful"], ans: 2, exp: "Timid means shy; Bold means brave." },
          { q: "Find the word OPPOSITE in meaning to DENSE:", opts: ["Thick", "Sparse", "Heavy", "Solid"], ans: 1, exp: "Dense means closely packed; Sparse means thinly scattered." },
          { q: "Find the word OPPOSITE in meaning to FREQUENT:", opts: ["Regular", "Rare", "Often", "Continuous"], ans: 1, exp: "Frequent means happening often; Rare means happening seldom." },
          { q: "Find the word OPPOSITE in meaning to COMPASSIONATE:", opts: ["Kind", "Cruel", "Caring", "Gentle"], ans: 1, exp: "Compassionate means kind; Cruel means unfeeling or harsh." },
          { q: "Find the word OPPOSITE in meaning to ABUNDANT:", opts: ["Scarce", "Plentiful", "Huge", "Heavy"], ans: 0, exp: "Abundant means plenty; Scarce means rare or in short supply." },
          { q: "Find the word OPPOSITE in meaning to EXPAND:", opts: ["Stretch", "Contract", "Grow", "Enlarge"], ans: 1, exp: "Expand means get bigger; Contract means get smaller." },
          { q: "Select two words OPPOSITE in meaning: [Triumph, Victory, Defeat, Success]", opts: ["Triumph & Victory", "Victory & Defeat", "Defeat & Success", "Triumph & Success"], ans: 1, exp: "Victory means winning; Defeat means losing." }
        ]
      },
      {
        day: 5,
        subject: "English",
        badgeClass: "badge-eng", title: "Punctuation & Possessive Apostrophes",
        lesson: "Possessive apostrophes show ownership: singular owner = boy's coat (before 's'); plural owners = boys' coats (after 's').",
        questions: [
          { q: "Which sentence uses the possessive apostrophe correctly?", opts: ["The dog's lead was lost.", "The dogs' lead was lost.", "The dogs lead' was lost.", "The dog lead's was lost."], ans: 0, exp: "One dog owning a lead = dog's lead." },
          { q: "Fill in the blank: '____ going to the park.'", opts: ["Their", "There", "They're", "Thier"], ans: 2, exp: "They're = They are." },
          { q: "Which sentence needs a question mark at the end?", opts: ["I wonder where he went", "Where are you going", "He asked where I lived", "She knows"], ans: 1, exp: "'Where are you going' is a direct question." },
          { q: "Select the correctly punctuated sentence:", opts: ["Its raining.", "It's raining.", "Its' raining.", "It is raining,"], ans: 1, exp: "It's = It is." },
          { q: "Where should the comma go: 'Although it was cold we went outside.'", opts: ["after 'Although'", "after 'cold'", "after 'went'", "no comma needed"], ans: 1, exp: "Comma separates the introductory clause: 'Although it was cold, we went outside.'" },
          { q: "Identify the noun in this sentence: 'The energetic puppy ran fast.'", opts: ["energetic", "puppy", "ran", "fast"], ans: 1, exp: "Puppy is a naming word (noun)." },
          { q: "Select the sentence showing plural ownership (multiple girls):", opts: ["The girl's coats were hung up.", "The girls' coats were hung up.", "The girls coat's were hung up.", "The girl coats were hung up."], ans: 1, exp: "Plural noun 'girls' taking ownership places apostrophe after the 's'." },
          { q: "Which mark belongs inside speech marks: 'Stop' shouted Ben.", opts: ["Exclamation Mark", "Question Mark", "Full Stop", "Comma"], ans: 0, exp: "Shouted indicates excitement, needing an Exclamation Mark inside speech." },
          { q: "Choose the correct homophone: 'Put the books over ____.'", opts: ["their", "there", "they're", "thier"], ans: 1, exp: "There indicates a place or location." },
          { q: "Identify the verb in: 'She walked carefully across the bridge.'", opts: ["She", "walked", "carefully", "bridge"], ans: 1, exp: "Walked is the action word (verb)." }
        ]
      }
    ]
  },
  {
    week: 2,
    weekTitle: "Week 2: Fractions, VR Codes & Decimals",
    days: [
      {
        day: 6,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Fractions & Equivalent Fractions",
        lesson: "To find a fraction of a quantity: divide total by the bottom (denominator), then multiply answer by the top (numerator).",
        questions: [
          { q: "What is 3/4 of 36?", opts: ["18", "27", "24", "21"], ans: 1, exp: "36 ÷ 4 = 9. 9 × 3 = 27." },
          { q: "Which fraction is equivalent to 2/5?", opts: ["4/10", "3/10", "2/10", "5/10"], ans: 0, exp: "Multiply top and bottom by 2: (2×2)/(5×2) = 4/10." },
          { q: "What is 1/3 of 60?", opts: ["15", "20", "25", "30"], ans: 1, exp: "60 ÷ 3 = 20." },
          { q: "Simplify 6/12 to its simplest form:", opts: ["1/3", "1/2", "2/3", "3/4"], ans: 1, exp: "Divide top and bottom by 6 = 1/2." },
          { q: "Which fraction is the largest?", opts: ["1/2", "1/4", "1/8", "1/10"], ans: 0, exp: "1/2 represents half, which is larger than 1/4, 1/8, or 1/10." },
          { q: "What is 2/3 of 24?", opts: ["12", "16", "18", "20"], ans: 1, exp: "24 ÷ 3 = 8. 8 × 2 = 16." },
          { q: "A pizza is cut into 8 slices. Ben eats 3 slices. What fraction is left?", opts: ["3/8", "5/8", "1/2", "4/8"], ans: 1, exp: "8 - 3 = 5 slices left → 5/8." },
          { q: "Which fraction is equivalent to 3/4?", opts: ["6/8", "5/8", "9/16", "6/12"], ans: 0, exp: "Multiply top and bottom by 2: 3/4 = 6/8." },
          { q: "What is 4/5 of 45?", opts: ["36", "30", "32", "40"], ans: 0, exp: "45 ÷ 5 = 9. 9 × 4 = 36." },
          { q: "Express 5/10 in simplest form:", opts: ["1/5", "1/2", "2/5", "5/1"], ans: 1, exp: "Divide top and bottom by 5 = 1/2." }
        ]
      },
      {
        day: 7,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "VR Alphabet Shift Codes",
        lesson: "Determine the alphabetical shift rule (+1, -1, +2, etc.) for each letter and apply it precisely to the target word.",
        questions: [
          { q: "If CAT is coded as DBU (+1 step), what is DOG?", opts: ["EPH", "EOF", "FPH", "CPH"], ans: 0, exp: "D(+1)=E, O(+1)=P, G(+1)=H → EPH." },
          { q: "If FISH is coded as EHRG (-1 step), what is DUCK?", opts: ["CTBJ", "CVCL", "ETDL", "EVBJ"], ans: 0, exp: "D(-1)=C, U(-1)=T, C(-1)=B, K(-1)=J → CTBJ." },
          { q: "What comes next in sequence: B, D, F, H, __?", opts: ["I", "J", "K", "L"], ans: 1, exp: "Sequence adds 2 steps each time: H (+2) = J." },
          { q: "If PEN = 16-5-14 (alphabet position), what is CAP?", opts: ["3-1-16", "3-2-16", "2-1-16", "3-1-15"], ans: 0, exp: "C=3, A=1, P=16 → 3-1-16." },
          { q: "If GAME is coded as HBNF (+1 step), what is PLAY?", opts: ["QMBZ", "QKMZ", "OKZX", "QKBY"], ans: 0, exp: "P(+1)=Q, L(+1)=M, A(+1)=B, Y(+1)=Z → QMBZ." },
          { q: "What comes next in sequence: Z, X, V, T, __?", opts: ["S", "R", "Q", "P"], ans: 1, exp: "Sequence subtracts 2 steps each time: T (-2) = R." },
          { q: "If RED = 18-5-4, what is BLUE?", opts: ["2-12-21-5", "2-11-20-5", "3-12-21-5", "2-12-22-5"], ans: 0, exp: "B=2, L=12, U=21, E=5 → 2-12-21-5." },
          { q: "If BIRD is coded as CJSE (+1 step), what is HAWK?", opts: ["IBXL", "JCYM", "IBXK", "GZVJ"], ans: 0, exp: "H(+1)=I, A(+1)=B, W(+1)=X, K(+1)=L → IBXL." },
          { q: "What comes next in sequence: C, F, I, L, __?", opts: ["M", "N", "O", "P"], ans: 2, exp: "Sequence skips 2 letters (+3 steps): L (+3) = O." },
          { q: "If COLD is coded as BNKC (-1 step), what is WARM?", opts: ["VZQL", "VZQNK", "XBSN", "UBQL"], ans: 0, exp: "W(-1)=V, A(-1)=Z (wraps around), R(-1)=Q, M(-1)=L → VZQL." }
        ]
      },
      {
        day: 8,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Decimals & Money Calculations",
        lesson: "Align decimal points vertically when adding or subtracting money. Always remember £1 = 100p.",
        questions: [
          { q: "What is £3.45 + £4.80?", opts: ["£8.25", "£8.15", "£7.25", "£8.35"], ans: 0, exp: "£3.45 + £4.80 = £8.25." },
          { q: "You buy items for £2.60 and £1.75. Change from £10?", opts: ["£5.65", "£4.35", "£5.35", "£6.65"], ans: 0, exp: "Total spent = £4.35. £10.00 - £4.35 = £5.65." },
          { q: "Convert 350p to pounds:", opts: ["£35.00", "£3.50", "£0.35", "£350.00"], ans: 1, exp: "350 ÷ 100 = £3.50." },
          { q: "Express 0.5 as a fraction in simplest form:", opts: ["1/5", "1/2", "5/100", "2/5"], ans: 1, exp: "0.5 = 5/10 = 1/2." },
          { q: "What is £10 - £6.32?", opts: ["£3.68", "£3.78", "£4.68", "£3.58"], ans: 0, exp: "£10.00 - £6.32 = £3.68." },
          { q: "Four drinks cost £1.20 each. Total cost?", opts: ["£4.20", "£4.80", "£5.00", "£4.60"], ans: 1, exp: "4 × £1.20 = £4.80." },
          { q: "Express 0.7 as a fraction:", opts: ["7/100", "7/10", "7/1", "1/7"], ans: 1, exp: "0.7 = 7/10." },
          { q: "Which decimal is equal to 1/4?", opts: ["0.4", "0.25", "0.5", "0.14"], ans: 1, exp: "1/4 = 0.25." },
          { q: "An apple costs 45p. How many can you buy with £2?", opts: ["3", "4", "5", "6"], ans: 1, exp: "4 × 45p = £1.80. 5 × 45p = £2.25 (exceeds £2). Maximum is 4." },
          { q: "How much change from £5 after buying a £2.30 notebook?", opts: ["£2.70", "£2.30", "£3.70", "£2.60"], ans: 0, exp: "£5.00 - £2.30 = £2.70." }
        ]
      },
      {
        day: 9,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Hidden Words & Compound Words",
        lesson: "Hidden words span across two adjacent words (end of word 1 + start of word 2). Compound words join two whole words into one.",
        questions: [
          { q: "Find the hidden 4-letter word in: 'THE RED'", opts: ["TREE", "HERD", "THEM", "DEER"], ans: 1, exp: "TH[E R]ED → HERD." },
          { q: "Which word joins SUN to make a valid compound word?", opts: ["SHINE", "LIGHT", "FLOWER", "ALL OF THESE"], ans: 3, exp: "Sunshine, Sunlight, Sunflower are all valid compound words." },
          { q: "Find the 3-letter hidden word in: 'PENS ARE'", opts: ["PEN", "ARE", "NSA", "DEN"], ans: 2, exp: "PE[NS A]RE → NSA." },
          { q: "Which word precedes BOARD to make a compound word?", opts: ["BLACK", "KEY", "SKATE", "ALL OF THESE"], ans: 3, exp: "Blackboard, Keyboard, Skateboard are all valid." },
          { q: "Find the 4-letter hidden word in: 'LATE ACHES'", opts: ["LATE", "ACHE", "EACH", "TEAC"], ans: 2, exp: "LAT[E ACH]ES → EACH." },
          { q: "Find the hidden 4-letter word in: 'GRAND OPENING'", opts: ["DOPE", "DROP", "OPEN", "GRAND"], ans: 0, exp: "GRAN[D OPE]NING → DOPE." },
          { q: "Combine WATER and FALL to form a word:", opts: ["Watery", "Waterfall", "Fallingwater", "Waterdrop"], ans: 1, exp: "WATER + FALL = Waterfall." },
          { q: "Find the 3-letter hidden word in: 'CAT ATE'", opts: ["CAT", "ATE", "ATA", "TAT"], ans: 2, exp: "C[AT A]TE → ATA." },
          { q: "Which word follows RAIN to make a compound word?", opts: ["BOW", "COAT", "DROP", "ALL OF THESE"], ans: 3, exp: "Rainbow, Raincoat, Raindrop are all valid." },
          { q: "Find the 4-letter hidden word in: 'SOAP APPLE'", opts: ["SOAP", "PAPA", "PALE", "LEAP"], ans: 1, exp: "SOA[P APP]LE → PAPA." }
        ]
      },
      {
        day: 10,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Spelling & Homophones",
        lesson: "Stationery (writing paper) ends in -ery; Stationary (stopped vehicle) ends in -ary. Memory trick: 'a rat' is in sepARATe.",
        questions: [
          { q: "Which word is spelled CORRECTLY?", opts: ["Neccessary", "Necessary", "Necassary", "Neccesary"], ans: 1, exp: "Necessary is correct (1 'c', 2 's's)." },
          { q: "Select the correct spelling:", opts: ["Seperate", "Separate", "Seprate", "Sepparate"], ans: 1, exp: "Separate is correct (contains 'a rat')." },
          { q: "Fill in blank: 'The car remained ____ at the traffic lights.'", opts: ["stationery", "stationary", "stationry", "stationerry"], ans: 1, exp: "Stationary (ending in -ary) means standing still." },
          { q: "Select the correctly spelled word:", opts: ["Definately", "Definitely", "Definitly", "Deffinitely"], ans: 1, exp: "Definitely is correct (contains 'finite')." },
          { q: "Which sentence uses 'weather' or 'whether' correctly?", opts: ["I don't know weather to go.", "The weather is sunny today.", "Whether is cold outside.", "Weather or not you agree."], ans: 1, exp: "Weather refers to sunshine, rain, temperature." },
          { q: "Fill in blank: 'He bought writing paper from the ____ shop.'", opts: ["stationary", "stationery", "stationry", "stationerry"], ans: 1, exp: "Stationery (ending in -ery) refers to paper/pens." },
          { q: "Select the correct spelling:", opts: ["Accommodate", "Acommodate", "Accomodate", "Acomodate"], ans: 0, exp: "Accommodate has 2 'c's and 2 'm's." },
          { q: "Fill in blank: 'The loud music had a bad ____ on my sleep.'", opts: ["affect", "effect", "efect", "afect"], ans: 1, exp: "Effect is a noun meaning result; affect is a verb." },
          { q: "Which homophone fits: 'She wore a ____ of silver shoes.'", opts: ["pear", "pair", "pare", "payr"], ans: 1, exp: "Pair means a set of two." },
          { q: "Select the correctly spelled word:", opts: ["Embarrass", "Embaras", "Embarass", "Emberrass"], ans: 0, exp: "Embarrass has 2 'r's and 2 's's." }
        ]
      }
    ]
  },
  {
    week: 3,
    weekTitle: "Week 3: Geometry, NVR Shapes & Time",
    days: [
      {
        day: 11,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Perimeter & Regular Polygons",
        lesson: "Perimeter is the total distance around the outside edge. Add all outer side lengths together.",
        questions: [
          { q: "Perimeter of rectangle with length 8cm, width 5cm?", opts: ["26cm", "40cm", "13cm", "28cm"], ans: 0, exp: "8 + 5 + 8 + 5 = 26cm." },
          { q: "Square has perimeter 36cm. Length of 1 side?", opts: ["6cm", "9cm", "12cm", "8cm"], ans: 1, exp: "36 ÷ 4 = 9cm." },
          { q: "How many sides does an Octagon have?", opts: ["6", "7", "8", "10"], ans: 2, exp: "An Octagon has 8 sides." },
          { q: "Perimeter of regular hexagon with side length 6cm?", opts: ["30cm", "36cm", "42cm", "24cm"], ans: 1, exp: "A regular hexagon has 6 sides: 6 × 6 = 36cm." },
          { q: "How many degrees in a full turn?", opts: ["90°", "180°", "270°", "360°"], ans: 3, exp: "A full turn measures 360 degrees." },
          { q: "What type of angle is 115°?", opts: ["Acute", "Right Angle", "Obtuse", "Reflex"], ans: 2, exp: "An angle between 90° and 180° is Obtuse." },
          { q: "Isosceles triangle has two 7cm sides. Perimeter is 20cm. Third side length?", opts: ["6cm", "7cm", "8cm", "5cm"], ans: 0, exp: "7 + 7 = 14cm. 20 - 14 = 6cm." },
          { q: "How many lines of symmetry does a rectangle have?", opts: ["1", "2", "4", "infinite"], ans: 1, exp: "A standard rectangle has 2 lines of symmetry." },
          { q: "Perimeter of an equilateral triangle with side length 9cm?", opts: ["18cm", "27cm", "36cm", "24cm"], ans: 1, exp: "3 equal sides: 3 × 9 = 27cm." },
          { q: "Perimeter of a regular pentagon with side length 8cm?", opts: ["32cm", "40cm", "48cm", "35cm"], ans: 1, exp: "5 equal sides: 5 × 8 = 40cm." }
        ]
      },
      {
        day: 12,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "NVR Rotations, Symmetry & Sequences",
        lesson: "Track shape turns: 90° clockwise = 1 quarter turn right; 180° = completely opposite direction.",
        questions: [
          { q: "Arrow points NORTH, turns 90° CLOCKWISE. Direction now?", opts: ["SOUTH", "WEST", "EAST", "NORTH-WEST"], ans: 2, exp: "90° Clockwise from North is East." },
          { q: "Arrow turns 180° clockwise. UP becomes:", opts: ["LEFT", "RIGHT", "DOWN", "UP"], ans: 2, exp: "180° turn reverses UP into DOWN." },
          { q: "What comes next in sequence: [1 star, 3 stars, 5 stars, 7 stars, ...]", opts: ["8 stars", "9 stars", "10 stars", "11 stars"], ans: 1, exp: "Pattern adds 2 stars each step: 7 + 2 = 9." },
          { q: "How many sides does a Pentagon have?", opts: ["5", "6", "7", "8"], ans: 0, exp: "A Pentagon has 5 sides." },
          { q: "Arrow turns 90° ANTI-CLOCKWISE starting from EAST. Direction now?", opts: ["NORTH", "SOUTH", "WEST", "SOUTH-EAST"], ans: 0, exp: "90° anti-clockwise (left) from East is North." },
          { q: "Shading cycle: [Black, White, Grey, Black, White, ___]. Next shade?", opts: ["Black", "White", "Grey", "Striped"], ans: 2, exp: "The 3-stage repeating pattern is Black, White, Grey." },
          { q: "How many sides does a Nonagon have?", opts: ["7", "8", "9", "10"], ans: 2, exp: "A Nonagon has 9 sides." },
          { q: "If a line turns 270° clockwise, how many quarter turns is that?", opts: ["1", "2", "3", "4"], ans: 2, exp: "270 ÷ 90 = 3 quarter turns." },
          { q: "Which shape is the odd one out: Square, Rectangle, Rhombus, Cylinder?", opts: ["Square", "Rectangle", "Rhombus", "Cylinder"], ans: 3, exp: "Cylinder is 3D; all others are 2D polygons." },
          { q: "How many lines of symmetry in a regular square?", opts: ["2", "4", "6", "8"], ans: 1, exp: "A square has 4 lines of symmetry." }
        ]
      },
      {
        day: 13,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Area & 24-Hour Time Calculations",
        lesson: "Area of a rectangle = Length × Width (measured in cm² or m²). For 24-hour PM time, add 12 to the hour.",
        questions: [
          { q: "Area of rectangle length 9cm, width 4cm?", opts: ["26 cm²", "36 cm²", "13 cm²", "32 cm²"], ans: 1, exp: "Area = 9 × 4 = 36 cm²." },
          { q: "Square has side length 7cm. Its area?", opts: ["28 cm²", "49 cm²", "14 cm²", "35 cm²"], ans: 1, exp: "Area = 7 × 7 = 49 cm²." },
          { q: "Convert 16:20 to 12-hour clock time:", opts: ["6:20 PM", "4:20 PM", "4:20 AM", "6:20 AM"], ans: 1, exp: "16:20 - 12 hours = 4:20 PM." },
          { q: "Film starts 2:15 PM, lasts 1h 45m. Finish time?", opts: ["3:45 PM", "4:00 PM", "4:15 PM", "4:30 PM"], ans: 1, exp: "2:15 + 1h 45m = 4:00 PM." },
          { q: "How many minutes in 2 and a half hours?", opts: ["120 mins", "130 mins", "150 mins", "160 mins"], ans: 2, exp: "2 hours = 120 mins. Half hour = 30 mins. 120 + 30 = 150 mins." },
          { q: "Swimming pool is 10m long, 5m wide. Floor area?", opts: ["30 m²", "50 m²", "25 m²", "15 m²"], ans: 1, exp: "Area = 10 × 5 = 50 m²." },
          { q: "Convert 8:35 PM to 24-hour time:", opts: ["20:35", "18:35", "08:35", "21:35"], ans: 0, exp: "8 + 12 = 20 → 20:35." },
          { q: "Train leaves 09:15, arrives 11:05. Journey duration?", opts: ["1 hr 50 mins", "1 hr 40 mins", "2 hrs 10 mins", "1 hr 45 mins"], ans: 0, exp: "09:15 to 10:15 = 1 hr. 10:15 to 11:05 = 50 mins. Total = 1 hr 50 mins." },
          { q: "Area of rectangle length 12cm, width 3cm?", opts: ["30 cm²", "36 cm²", "15 cm²", "24 cm²"], ans: 1, exp: "Area = 12 × 3 = 36 cm²." },
          { q: "Lesson starts 10:45 AM, lasts 50 minutes. Finish time?", opts: ["11:35 AM", "11:25 AM", "11:45 AM", "12:05 PM"], ans: 0, exp: "10:45 + 15 mins = 11:00 AM. Remaining 35 mins → 11:35 AM." }
        ]
      },
      {
        day: 14,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "3D Shapes & Spatial Logic",
        lesson: "3D Properties: Cubes have 6 square faces, 8 vertices (corners), and 12 straight edges.",
        questions: [
          { q: "Triangle is to 3 sides as Pentagon is to:", opts: ["4 sides", "5 sides", "6 sides", "8 sides"], ans: 1, exp: "Pentagon has 5 sides." },
          { q: "Sphere is to Circle as Cube is to:", opts: ["Square", "Rectangle", "Triangle", "Box"], ans: 0, exp: "Cube is the 3D counterpart of a 2D square." },
          { q: "Which 3D shape has 6 square faces?", opts: ["Cuboid", "Cube", "Pyramid", "Sphere"], ans: 1, exp: "Cube has 6 identical square faces." },
          { q: "How many vertices (corners) does a Cuboid have?", opts: ["6", "8", "12", "10"], ans: 1, exp: "A cuboid has 8 vertices." },
          { q: "How many edges does a triangular pyramid (tetrahedron) have?", opts: ["4", "6", "8", "5"], ans: 1, exp: "A tetrahedron has 6 edges." },
          { q: "Which 2D shape has 4 equal sides but no 90° right angles?", opts: ["Square", "Rectangle", "Rhombus", "Trapezium"], ans: 2, exp: "A Rhombus has 4 equal sides with non-90° angles." },
          { q: "What angle turn is made moving North to South-East clockwise?", opts: ["90°", "135°", "180°", "225°"], ans: 1, exp: "North to East is 90°, plus 45° to South-East = 135°." },
          { q: "How many faces does a triangular prism have?", opts: ["4", "5", "6", "7"], ans: 1, exp: "2 triangular end faces + 3 rectangular side faces = 5 faces." },
          { q: "How many edges does a Cube have?", opts: ["8", "10", "12", "14"], ans: 2, exp: "A cube has 12 straight edges." },
          { q: "What direction is opposite to SOUTH-WEST?", opts: ["NORTH-WEST", "NORTH-EAST", "SOUTH-EAST", "NORTH"], ans: 1, exp: "Opposite of South is North; opposite of West is East → NORTH-EAST." }
        ]
      },
      {
        day: 15,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Comprehension & Text Evidence",
        lesson: "Direct facts are stated word-for-word in the text. Inferences require reading between the lines.",
        questions: [
          { q: "'The exhausted climber reached the summit.' What does exhausted mean?", opts: ["Excited", "Extremely tired", "Cold", "Lost"], ans: 1, exp: "Exhausted = extremely tired." },
          { q: "Text above: What time of day was it when the climber arrived ('dusk settled')?", opts: ["Dawn", "Midday", "Evening / Dusk", "Midnight"], ans: 2, exp: "Dusk refers to evening twilight." },
          { q: "'Liam clutched his umbrella as fierce gusts blew.' What was weather like?", opts: ["Sunny and warm", "Windy and stormy", "Snowing", "Calm"], ans: 1, exp: "Fierce gusts and clutching umbrella implies stormy winds." },
          { q: "'Sophie stared blankly at paper, hands trembling.' How felt Sophie?", opts: ["Confident", "Anxious and nervous", "Bored", "Angry"], ans: 1, exp: "Trembling hands and staring blankly show anxiety." },
          { q: "What is a synonym for 'summit'?", opts: ["Base", "Peak / Top", "Slope", "Valley"], ans: 1, exp: "Summit = peak or top." },
          { q: "'The floorboards creaked softly under intruder's boots.' How moved he?", opts: ["Loudly", "Stealthily / Quietly", "Running", "Stomping"], ans: 1, exp: "Creaking 'softly' shows quiet, stealthy movement." },
          { q: "Identify adjective in: 'The fierce gusts blew strongly.'", opts: ["fierce", "gusts", "blew", "strongly"], ans: 0, exp: "Fierce describes the noun 'gusts'." },
          { q: "Identify adverb in: 'The fierce gusts blew strongly.'", opts: ["fierce", "gusts", "blew", "strongly"], ans: 3, exp: "Strongly describes how the verb 'blew' happened." },
          { q: "Identify verb in: 'The water flowed rapidly down the stream.'", opts: ["water", "flowed", "rapidly", "stream"], ans: 1, exp: "Flowed is the action verb." },
          { q: "What type of word is 'rapidly'?", opts: ["Noun", "Adjective", "Adverb", "Verb"], ans: 2, exp: "Words ending in -ly describing verbs are adverbs." }
        ]
      }
    ]
  },
  {
    week: 4,
    weekTitle: "Week 4: Advanced Arithmetic, VR Analogies & Grammar",
    days: [
      {
        day: 16,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Missing Number Equations & Inverses",
        lesson: "Use inverse calculations to solve missing numbers: check addition with subtraction, multiplication with division.",
        questions: [
          { q: "What number added to 47 gives 112?", opts: ["65", "75", "55", "67"], ans: 0, exp: "112 - 47 = 65." },
          { q: "What is double 38 plus 15?", opts: ["91", "81", "76", "88"], ans: 0, exp: "Double 38 = 76. 76 + 15 = 91." },
          { q: "Subtract 39 from 85:", opts: ["46", "56", "44", "48"], ans: 0, exp: "85 - 39 = 46." },
          { q: "Which number is a factor of 36?", opts: ["5", "7", "9", "11"], ans: 2, exp: "9 × 4 = 36." },
          { q: "Solve for x: x - 28 = 54", opts: ["82", "72", "26", "84"], ans: 0, exp: "54 + 28 = 82." },
          { q: "Solve for y: 6 × y = 72", opts: ["11", "12", "13", "14"], ans: 1, exp: "72 ÷ 6 = 12." },
          { q: "What is half of 144?", opts: ["62", "72", "82", "68"], ans: 1, exp: "144 ÷ 2 = 72." },
          { q: "If a box has 100 sweets and 37 are eaten, how many remain?", opts: ["63", "73", "53", "67"], ans: 0, exp: "100 - 37 = 63." },
          { q: "What is 15 × 6?", opts: ["80", "90", "85", "95"], ans: 1, exp: "15 × 6 = 90." },
          { q: "Solve for z: 95 + z = 140", opts: ["35", "45", "55", "40"], ans: 1, exp: "140 - 95 = 45." }
        ]
      },
      {
        day: 17,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Word Relationships & Analogies",
        lesson: "Create a test sentence defining the link: GLOVE is to HAND → 'A glove is worn on a hand'. Apply same rule to target pair.",
        questions: [
          { q: "PETAL is to FLOWER as PAGE is to:", opts: ["WORD", "BOOK", "PAPER", "PEN"], ans: 1, exp: "Petal is part of a flower; Page is part of a book." },
          { q: "PILOT is to AEROPLANE as CAPTAIN is to:", opts: ["CAR", "SHIP", "TRAIN", "BUS"], ans: 1, exp: "Pilot operates aeroplane; Captain operates ship." },
          { q: "CUB is to BEAR as KITTEN is to:", opts: ["DOG", "CAT", "FOX", "RABBIT"], ans: 1, exp: "Cub is baby bear; Kitten is baby cat." },
          { q: "LISTEN is to EAR as LOOK is to:", opts: ["NOSE", "EYE", "HAND", "MOUTH"], ans: 1, exp: "You listen with ear; look with eye." },
          { q: "AUTHOR is to BOOK as ARCHITECT is to:", opts: ["PAINTING", "BUILDING", "SONG", "STATUE"], ans: 1, exp: "Author creates book; Architect designs building." },
          { q: "HEAT is to FIRE as COLD is to:", opts: ["SUN", "ICE", "WATER", "WIND"], ans: 1, exp: "Fire produces heat; Ice produces cold." },
          { q: "KNIFE is to CUT as PEN is to:", opts: ["WRITE", "DRAW", "INK", "PAPER"], ans: 0, exp: "Knife is used to cut; Pen is used to write." },
          { q: "EXPAND is to CONTRACT as INCREASE is to:", opts: ["GROW", "DECREASE", "MULTIPLY", "ADD"], ans: 1, exp: "Expand and contract are antonyms; Increase and decrease are antonyms." },
          { q: "FOOT is to SHOE as HAND is to:", opts: ["RING", "GLOVE", "SOCK", "ARM"], ans: 1, exp: "Shoe covers foot; Glove covers hand." },
          { q: "BIRD is to NEST as BEE is to:", opts: ["HIVE", "HONEY", "FLOWER", "WING"], ans: 0, exp: "Bird lives in nest; Bee lives in hive." }
        ]
      },
      {
        day: 18,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Money Problems & Unit Rates",
        lesson: "Unit rate technique: Find cost of 1 item first (total cost ÷ quantity), then multiply by requested amount.",
        questions: [
          { q: "4 ice creams cost £8. How much do 7 cost?", opts: ["£12", "£14", "£16", "£10"], ans: 1, exp: "1 ice cream = £8 ÷ 4 = £2. 7 × £2 = £14." },
          { q: "An apple costs 45p. How many can you buy with £2?", opts: ["3", "4", "5", "6"], ans: 1, exp: "4 × 45p = £1.80. 5 × 45p = £2.25 (exceeds £2). Maximum is 4." },
          { q: "A train ticket costs £6. How much for 8 tickets?", opts: ["£42", "£48", "£54", "£46"], ans: 1, exp: "6 × £8 = £48." },
          { q: "Change from £20 when spending 3 × £4.50?", opts: ["£6.50", "£5.50", "£7.50", "£13.50"], ans: 0, exp: "3 × £4.50 = £13.50. £20 - £13.50 = £6.50." },
          { q: "5 pencils cost 75p. Cost of 1 pencil?", opts: ["12p", "15p", "18p", "20p"], ans: 1, exp: "75 ÷ 5 = 15p." },
          { q: "3 notebooks cost £4.50. Cost of 5 notebooks?", opts: ["£6.50", "£7.50", "£8.00", "£7.00"], ans: 1, exp: "1 notebook = £4.50 ÷ 3 = £1.50. 5 × £1.50 = £7.50." },
          { q: "Sam buys 2 drinks at £1.40 each and a snack for £1.10. Total?", opts: ["£3.90", "£3.80", "£4.00", "£3.70"], ans: 0, exp: "2 × £1.40 = £2.80. £2.80 + £1.10 = £3.90." },
          { q: "Change from £10 after spending £3.65?", opts: ["£6.35", "£6.45", "£7.35", "£6.25"], ans: 0, exp: "£10.00 - £3.65 = £6.35." },
          { q: "Six eggs cost 90p. Cost of 10 eggs?", opts: ["£1.30", "£1.50", "£1.60", "£1.40"], ans: 1, exp: "1 egg = 90 ÷ 6 = 15p. 10 × 15p = 150p = £1.50." },
          { q: "If 8 books cost £24, how much do 3 books cost?", opts: ["£8", "£9", "£10", "£12"], ans: 1, exp: "1 book = £24 ÷ 8 = £3. 3 × £3 = £9." }
        ]
      },
      {
        day: 19,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Advanced Synonyms & Antonyms",
        lesson: "Pay attention to subtle context clues and word types (adjectives, verbs, nouns) when matching word pairs.",
        questions: [
          { q: "Synonym for FRAGILE:", opts: ["Strong", "Delicate", "Heavy", "Tough"], ans: 1, exp: "Fragile = Delicate." },
          { q: "Antonym for COMPASSIONATE:", opts: ["Kind", "Cruel", "Caring", "Gentle"], ans: 1, exp: "Compassionate opposite is Cruel." },
          { q: "Synonym for VACANT:", opts: ["Full", "Empty", "Busy", "Crowded"], ans: 1, exp: "Vacant = Empty." },
          { q: "Antonym for ABUNDANT:", opts: ["Scarce", "Plentiful", "Huge", "Heavy"], ans: 0, exp: "Abundant opposite is Scarce." },
          { q: "Synonym for CONCEAL:", opts: ["Show", "Hide", "Open", "Expose"], ans: 1, exp: "Conceal = Hide." },
          { q: "Antonym for GENEROSITY:", opts: ["Kindness", "Greed", "Charity", "Warmth"], ans: 1, exp: "Generosity opposite is Greed." },
          { q: "Synonym for CAPTIVATE:", opts: ["Bore", "Fascinate", "Repel", "Ignore"], ans: 1, exp: "Captivate = Fascinate." },
          { q: "Antonym for HOSTILE:", opts: ["Friendly", "Aggressive", "Unkind", "Bitter"], ans: 0, exp: "Hostile opposite is Friendly." },
          { q: "Synonym for HINDER:", opts: ["Help", "Obstruct", "Allow", "Support"], ans: 1, exp: "Hinder = Obstruct." },
          { q: "Antonym for DOMINANT:", opts: ["Powerful", "Submissive", "Strong", "Chief"], ans: 1, exp: "Dominant opposite is Submissive." }
        ]
      },
      {
        day: 20,
        subject: "Mixed Review",
        badgeClass: "badge-eng",
        title: "Week 4 Mastery Assessment",
        lesson: "Consolidate your progress across Maths, Verbal Reasoning, Non-Verbal Reasoning, and English!",
        questions: [
          { q: "What is 12 × 9?", opts: ["108", "96", "118", "102"], ans: 0, exp: "12 × 9 = 108." },
          { q: "Calculate 3/5 of 45:", opts: ["27", "18", "30", "21"], ans: 0, exp: "45 ÷ 5 = 9. 9 × 3 = 27." },
          { q: "Convert 19:45 to 12-hour time:", opts: ["7:45 PM", "8:45 PM", "7:45 AM", "9:45 PM"], ans: 0, exp: "19:45 - 12:00 = 7:45 PM." },
          { q: "Perimeter of square with area 36 cm²:", opts: ["24cm", "36cm", "12cm", "18cm"], ans: 0, exp: "Side = 6cm. Perimeter = 6 × 4 = 24cm." },
          { q: "Synonym for RELUCTANT:", opts: ["Eager", "Unwilling", "Prompt", "Certain"], ans: 1, exp: "Reluctant = Unwilling." },
          { q: "Antonym for PERMANENT:", opts: ["Everlasting", "Temporary", "Solid", "Fixed"], ans: 1, exp: "Permanent opposite is Temporary." },
          { q: "PETAL is to FLOWER as PAGE is to:", opts: ["WORD", "BOOK", "PAPER", "PEN"], ans: 1, exp: "Page is part of a book." },
          { q: "Solve for x: x + 39 = 85", opts: ["46", "56", "44", "48"], ans: 0, exp: "85 - 39 = 46." },
          { q: "Area of rectangle length 8cm, width 5cm?", opts: ["26 cm²", "40 cm²", "13 cm²", "28 cm²"], ans: 1, exp: "8 × 5 = 40 cm²." },
          { q: "Select correctly spelled word:", opts: ["Neccessary", "Necessary", "Necassary", "Neccesary"], ans: 1, exp: "Necessary is correct." }
        ]
      }
    ]
  },
  {
    week: 5,
    weekTitle: "Week 5: Angles, Cloze Tests & Code Logic",
    days: [
      {
        day: 21,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Angles & Line Rules",
        lesson: "Angles on a straight line total 180°. Angles around a point total 360°. Angles in a triangle total 180°.",
        questions: [
          { q: "Two angles on a straight line are 70° and x. What is x?", opts: ["110°", "100°", "120°", "90°"], ans: 0, exp: "180° - 70° = 110°." },
          { q: "Missing angle in a right angle (90°) if one part is 35°?", opts: ["55°", "65°", "45°", "145°"], ans: 0, exp: "90° - 35° = 55°." },
          { q: "Sum of interior angles inside any triangle?", opts: ["180°", "360°", "270°", "90°"], ans: 0, exp: "Angles in a triangle add up to 180°." },
          { q: "An angle measuring 210° is classified as:", opts: ["Obtuse", "Reflex", "Acute", "Right"], ans: 1, exp: "Angles greater than 180° but less than 360° are Reflex angles." },
          { q: "An angle measuring 45° is classified as:", opts: ["Acute", "Obtuse", "Reflex", "Right"], ans: 0, exp: "Angles under 90° are Acute." },
          { q: "An angle measuring 135° is classified as:", opts: ["Acute", "Obtuse", "Reflex", "Right"], ans: 1, exp: "Angles between 90° and 180° are Obtuse." },
          { q: "Three angles around a point are 100°, 120°, and y. Find y:", opts: ["140°", "130°", "150°", "160°"], ans: 0, exp: "360° - (100° + 120°) = 360° - 220° = 140°." },
          { q: "Equilateral triangle has 3 equal angles. Each angle equals:", opts: ["45°", "60°", "90°", "50°"], ans: 1, exp: "180° ÷ 3 = 60°." },
          { q: "Right-angled triangle has one 90° angle and one 40° angle. Third angle?", opts: ["50°", "40°", "60°", "45°"], ans: 0, exp: "180° - (90° + 40°) = 50°." },
          { q: "Angles on a straight line are 50°, 60°, and z. Find z:", opts: ["70°", "80°", "60°", "90°"], ans: 0, exp: "180° - (50° + 60°) = 70°." }
        ]
      },
      {
        day: 22,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Letter-Number Pair Codes",
        lesson: "Identify mathematical relationships between alphabet positions and code numbers.",
        questions: [
          { q: "If A=2, B=4, C=6, what is value of DOG (D+O+G)?", opts: ["52", "42", "26", "30"], ans: 0, exp: "D=8, O=30, G=14. 8 + 30 + 14 = 52." },
          { q: "If RED = 27, what is BED if B=2, E=5, D=4?", opts: ["11", "20", "15", "18"], ans: 0, exp: "2 + 5 + 4 = 11." },
          { q: "Complete number pair: [3, 9] [4, 16] [5, ?]", opts: ["20", "25", "30", "15"], ans: 1, exp: "Square rule: 5 × 5 = 25." },
          { q: "If Z=1, Y=2, X=3 (reverse order), what is C?", opts: ["24", "25", "26", "23"], ans: 0, exp: "C is 24th from back of alphabet." },
          { q: "Complete pair: [2, 6] [3, 9] [4, 12] [5, ?]", opts: ["15", "18", "20", "14"], ans: 0, exp: "Multiply by 3 rule: 5 × 3 = 15." },
          { q: "If CAT = 24 (3+1+20), what is DOG (4+15+7)?", opts: ["26", "28", "24", "30"], ans: 0, exp: "4 + 15 + 7 = 26." },
          { q: "Complete pair: [5, 10] [8, 16] [12, ?]", opts: ["20", "24", "28", "22"], ans: 1, exp: "Double rule: 12 × 2 = 24." },
          { q: "If SUN = 54 (19+21+14), what is MOON (13+15+15+14)?", opts: ["57", "55", "60", "52"], ans: 0, exp: "13 + 15 + 15 + 14 = 57." },
          { q: "Complete pair: [10, 5] [20, 10] [30, ?]", opts: ["15", "20", "25", "10"], ans: 0, exp: "Halving rule: 30 ÷ 2 = 15." },
          { q: "If A=1, B=2, C=3, what is CAB (3+1+2)?", opts: ["6", "7", "5", "8"], ans: 0, exp: "3 + 1 + 2 = 6." }
        ]
      },
      {
        day: 23,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Cloze Tests & Grammar Rules",
        lesson: "Read full sentences before selecting missing words to verify correct tense, word class, and context.",
        questions: [
          { q: "The storm raged ____ all through the night.", opts: ["fiercely", "fierce", "fiercer", "fiercest"], ans: 0, exp: "Adverb 'fiercely' describes verb 'raged'." },
          { q: "She was so ____ in her book she didn't hear door.", opts: ["absorbed", "distracted", "ignoring", "detached"], ans: 0, exp: "Absorbed means deeply engrossed." },
          { q: "Neither Tom ____ his brother came to party.", opts: ["or", "nor", "and", "but"], ans: 1, exp: "Correlative conjunction pair: 'Neither... nor'." },
          { q: "Choose noun: 'He ran with great speed.'", opts: ["ran", "great", "speed", "with"], ans: 2, exp: "Speed is an abstract noun." },
          { q: "The children played ____ in garden.", opts: ["happily", "happy", "happier", "happiness"], ans: 0, exp: "Adverb 'happily' describes verb 'played'." },
          { q: "Although it rained, ____ went for walk.", opts: ["they", "them", "their", "theirs"], ans: 0, exp: "Subject pronoun 'they' is required." },
          { q: "Either Sarah ____ Emma will lead team.", opts: ["nor", "or", "and", "but"], ans: 1, exp: "Correlative conjunction pair: 'Either... or'." },
          { q: "Choose adjective: 'The silver coin glistened.'", opts: ["silver", "coin", "glistened", "the"], ans: 0, exp: "Silver describes noun 'coin'." },
          { q: "He walked ____ across slippery ice.", opts: ["cautiously", "cautious", "caution", "cautioner"], ans: 0, exp: "Adverb 'cautiously' describes verb 'walked'." },
          { q: "Choose verb: 'The bird soared high above clouds.'", opts: ["bird", "soared", "high", "clouds"], ans: 1, exp: "Soared is the action verb." }
        ]
      },
      {
        day: 24,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "Odd One Out Shape Puzzles",
        lesson: "Check side counts, symmetry lines, shading cycles, and line crossings systematically.",
        questions: [
          { q: "Which shape is odd one out?", opts: ["Triangle", "Square", "Hexagon", "Circle"], ans: 3, exp: "Circle has curved side; others are straight-sided polygons." },
          { q: "Which side count is odd one out: [3], [5], [7], [6]?", opts: ["3 sides", "5 sides", "7 sides", "6 sides"], ans: 3, exp: "6 is even; 3, 5, 7 are odd side counts." },
          { q: "Find odd item: Cube, Sphere, Pyramid, Square", opts: ["Cube", "Sphere", "Pyramid", "Square"], ans: 3, exp: "Square is 2D; others are 3D shapes." },
          { q: "Odd direction: North, East, Up, South", opts: ["North", "East", "Up", "South"], ans: 2, exp: "Up is 3D direction; others are cardinal compass points." },
          { q: "Odd shape: Rectangle, Rhombus, Parallelogram, Circle", opts: ["Rectangle", "Rhombus", "Parallelogram", "Circle"], ans: 3, exp: "Circle is not a 4-sided quadrilateral." },
          { q: "Odd angle: 30°, 45°, 60°, 120°", opts: ["30°", "45°", "60°", "120°"], ans: 3, exp: "120° is Obtuse; others are Acute angles." },
          { q: "Odd side count: Pentagon (5), Octagon (8), Hexagon (6), Decagon (10)", opts: ["Pentagon", "Octagon", "Hexagon", "Decagon"], ans: 0, exp: "Pentagon has an odd side count (5); others are even." },
          { q: "Find odd 3D shape: Cone, Cylinder, Sphere, Cube", opts: ["Cone", "Cylinder", "Sphere", "Cube"], ans: 3, exp: "Cube has only flat faces; others have curved surfaces." },
          { q: "Find odd unit: Metre, Centimetre, Kilogram, Millimetre", opts: ["Metre", "Centimetre", "Kilogram", "Millimetre"], ans: 2, exp: "Kilogram measures mass; others measure length." },
          { q: "Odd turn count: 90°, 180°, 270°, 300°", opts: ["90°", "180°", "270°", "300°"], ans: 3, exp: "300° is not a multiple of 90° (quarter turns)." }
        ]
      },
      {
        day: 25,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Factors, Primes & Multiples",
        lesson: "Primes have exactly 2 factors (1 and itself). 1 is NOT prime. Factors divide evenly without remainders.",
        questions: [
          { q: "Which of these is a prime number?", opts: ["9", "15", "17", "21"], ans: 2, exp: "17 has only two factors: 1 and 17." },
          { q: "List all factors of 12:", opts: ["1,2,3,4,6,12", "2,4,6,12", "1,3,6,12", "2,3,4,6"], ans: 0, exp: "Factors of 12 are 1, 2, 3, 4, 6, 12." },
          { q: "Lowest Common Multiple (LCM) of 4 and 6?", opts: ["12", "24", "18", "8"], ans: 0, exp: "Multiples of 4: 4,8,12... Multiples of 6: 6,12... LCM = 12." },
          { q: "Highest Common Factor (HCF) of 16 and 24?", opts: ["4", "6", "8", "12"], ans: 2, exp: "Common factors: 1, 2, 4, 8. Highest is 8." },
          { q: "Which of these is NOT a prime number?", opts: ["2", "3", "5", "9"], ans: 3, exp: "9 has 3 factors (1, 3, 9), so it is composite." },
          { q: "First three multiples of 7:", opts: ["7,14,21", "7,12,18", "14,21,28", "1,7,14"], ans: 0, exp: "7×1=7, 7×2=14, 7×3=21." },
          { q: "Smallest prime number?", opts: ["0", "1", "2", "3"], ans: 2, exp: "2 is the smallest and only even prime number." },
          { q: "Factors of 20:", opts: ["1,2,4,5,10,20", "2,4,5,10", "1,2,5,10,20", "1,4,5,20"], ans: 0, exp: "Factors of 20 are 1, 2, 4, 5, 10, 20." },
          { q: "LCM of 3 and 5?", opts: ["10", "12", "15", "20"], ans: 2, exp: "3 × 5 = 15." },
          { q: "HCF of 12 and 18?", opts: ["2", "3", "6", "9"], ans: 2, exp: "Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. HCF = 6." }
        ]
      }
    ]
  },
  {
    week: 6,
    weekTitle: "Week 6: Ratio, Word Insertions & Review",
    days: [
      {
        day: 26,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Simple Ratio & Scaling",
        lesson: "Ratio compares quantities. Add ratio parts together to find total shares (e.g. 1:3 ratio = 4 total shares).",
        questions: [
          { q: "Share £20 in ratio 1:3. Larger share?", opts: ["£5", "£10", "£15", "£12"], ans: 2, exp: "1+3=4 parts. £20÷4 = £5/part. 3 × £5 = £15." },
          { q: "Class of 30 pupils, ratio boys:girls is 2:1. How many girls?", opts: ["10", "20", "15", "12"], ans: 0, exp: "2+1=3 parts. 30÷3 = 10. Girls (1 part) = 10." },
          { q: "Scale 1cm = 5m. Map distance 4cm = real distance?", opts: ["15m", "20m", "25m", "10m"], ans: 1, exp: "4 × 5m = 20m." },
          { q: "Recipe for 4 cakes needs 100g sugar. Sugar for 10 cakes?", opts: ["200g", "250g", "300g", "150g"], ans: 1, exp: "1 cake = 25g. 10 × 25g = 250g." },
          { q: "Share £30 in ratio 1:2. Larger share?", opts: ["£10", "£20", "£15", "£25"], ans: 1, exp: "3 parts. £30÷3 = £10. 2 × £10 = £20." },
          { q: "Ratio of red to blue balls is 3:2. If 15 red balls, how many blue?", opts: ["10", "8", "12", "6"], ans: 0, exp: "3 parts = 15 red → 1 part = 5. Blue (2 parts) = 2 × 5 = 10." },
          { q: "Scale 1cm = 10km. Map distance 7cm = real distance?", opts: ["50km", "60km", "70km", "80km"], ans: 2, exp: "7 × 10km = 70km." },
          { q: "Drink mix ratio squash:water is 1:4. Total 500ml drink. How much squash?", opts: ["100ml", "200ml", "125ml", "150ml"], ans: 0, exp: "1+4=5 parts. 500÷5 = 100ml." },
          { q: "Share 24 sweets in ratio 1:1:", opts: ["12 each", "10 and 14", "8 and 16", "6 and 18"], ans: 0, exp: "Ratio 1:1 means equal shares: 24 ÷ 2 = 12 each." },
          { q: "If 2 pens cost 60p, cost of 5 pens?", opts: ["£1.20", "£1.50", "£1.80", "£1.40"], ans: 1, exp: "1 pen = 30p. 5 × 30p = 150p = £1.50." }
        ]
      },
      {
        day: 27,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Word Insertions (One Letter Fits Both)",
        lesson: "Find 1 letter that completes the end of word 1 AND the start of word 2.",
        questions: [
          { q: "Find letter that fits: BOA[?]ABLE", opts: ["T", "R", "D", "N"], ans: 0, exp: "BOAT / TABLE → T fits." },
          { q: "Find letter that fits: PEA[?]EAR", opts: ["R", "K", "N", "S"], ans: 0, exp: "PEAR / REAR → R fits." },
          { q: "Find letter that fits: HA[?]AT", opts: ["T", "P", "S", "M"], ans: 0, exp: "HAT / TAT → T fits." },
          { q: "Find letter that fits: CAR[?]OOR", opts: ["D", "E", "T", "P"], ans: 0, exp: "CARD / DOOR → D fits." },
          { q: "Find letter that fits: PEA[?]EAD", opts: ["R", "T", "S", "K"], ans: 0, exp: "PEAR / READ → R fits." },
          { q: "Find letter that fits: BAT[?]OME", opts: ["H", "T", "S", "P"], ans: 0, exp: "BATH / HOME → H fits." },
          { q: "Find letter that fits: PLA[?]IN", opts: ["N", "T", "Y", "E"], ans: 0, exp: "PLAN / NIN... PLA[N]IN → PLAN / NIN? PLA[T]IN -> PLAT / TIN -> T fits." },
          { q: "Find letter that fits: PIN[?]ING", opts: ["K", "S", "G", "T"], ans: 0, exp: "PINK / KING → K fits." },
          { q: "Find letter that fits: BAL[?]AMP", opts: ["L", "M", "T", "P"], ans: 0, exp: "BALL / LAMP → L fits." },
          { q: "Find letter that fits: SOAL[?]ARK", opts: ["P", "K", "T", "S"], ans: 0, exp: "SOAP / PARK → P fits." }
        ]
      },
      {
        day: 28,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Verbs, Tenses & Modal Verbs",
        lesson: "Ensure tense consistency. Modal verbs (must, should, could, might) express necessity or possibility.",
        questions: [
          { q: "Identify irregular past tense of 'CATCH':", opts: ["Catched", "Caught", "Cot", "Catching"], ans: 1, exp: "Caught is irregular past tense." },
          { q: "Which word is an adverb?", opts: ["Quick", "Quickly", "Quicker", "Quickness"], ans: 1, exp: "Quickly describes how an action is performed." },
          { q: "Choose correct form: 'He ____ to school yesterday.'", opts: ["walks", "walked", "walking", "will walk"], ans: 1, exp: "Yesterday requires past tense 'walked'." },
          { q: "Identify modal verb: 'You must finish your work.'", opts: ["finish", "must", "your", "work"], ans: 1, exp: "Must is a modal verb showing necessity." },
          { q: "Past tense of 'RUN':", opts: ["Runned", "Ran", "Running", "Runs"], ans: 1, exp: "Ran is irregular past tense." },
          { q: "Past tense of 'TEACH':", opts: ["Teached", "Taught", "Thought", "Teaching"], ans: 1, exp: "Taught is irregular past tense." },
          { q: "Which word is a modal verb?", opts: ["Should", "Jump", "Happy", "Softly"], ans: 0, exp: "Should is a modal auxiliary verb." },
          { q: "Present continuous tense of 'READ':", opts: ["Read", "Reads", "Is reading", "Was reading"], ans: 2, exp: "Is reading indicates present continuous action." },
          { q: "Past tense of 'SWIM':", opts: ["Swimmed", "Swam", "Swum", "Swimming"], ans: 1, exp: "Swam is irregular past tense." },
          { q: "Which sentence is written in future tense?", opts: ["She sang a song.", "She is singing.", "She will sing a song.", "She sings well."], ans: 2, exp: "'Will sing' indicates future tense." }
        ]
      },
      {
        day: 29,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "Pattern Matrices & Grid Reasoning",
        lesson: "Examine grids systematically: check rules horizontally across rows AND vertically down columns.",
        questions: [
          { q: "Row 1: [1 circle], [2 circles]. Row 2: [1 square], [?]", opts: ["1 square", "2 squares", "3 squares", "Circle"], ans: 1, exp: "Pattern doubles shape count across row." },
          { q: "Row 1: Black, White. Row 2: White, [?]", opts: ["Grey", "Black", "White", "Striped"], ans: 1, exp: "Inverts shading across grid." },
          { q: "Grid rule: Side count increases by 1 across row. [Triangle], [Square], [?]", opts: ["Circle", "Pentagon", "Hexagon", "Octagon"], ans: 1, exp: "3 sides → 4 sides → 5 sides (Pentagon)." },
          { q: "Grid rule: Rotates 90° clockwise down column. UP → RIGHT → [?]", opts: ["LEFT", "DOWN", "UP", "DIAGONAL"], ans: 1, exp: "90° clockwise from RIGHT points DOWN." },
          { q: "Row 1: Small circle, Medium circle, Large circle. Row 2: Small square, Medium square, [?]", opts: ["Small square", "Large square", "Large circle", "Tiny square"], ans: 1, exp: "Size progresses small → medium → large." },
          { q: "Shading rule across row: White → Grey → Black. Row 2: Grey → Black → [?]", opts: ["White", "Grey", "Black", "Striped"], ans: 0, exp: "Cycles through shading: White follows Black." },
          { q: "Row 1: 2 lines, 4 lines, 6 lines. Row 2: 1 star, 2 stars, [?]", opts: ["3 stars", "4 stars", "5 stars", "6 stars"], ans: 0, exp: "Sequence adds 1 star each step." },
          { q: "Top row: Solid shape. Bottom row: Outline shape. Top: Solid Triangle. Bottom: [?]", opts: ["Solid Triangle", "Outline Triangle", "Solid Square", "Circle"], ans: 1, exp: "Bottom row converts solid into outline." },
          { q: "Row 1: Arrow UP. Row 2: Arrow DOWN. Row 3: Arrow LEFT. Row 4: [?]", opts: ["Arrow RIGHT", "Arrow UP", "Arrow DOWN", "Circle"], ans: 0, exp: "Opposite direction rule: LEFT becomes RIGHT." },
          { q: "Grid rule: Shape inside shape. Square inside Circle → Triangle inside Circle → Circle inside [?]", opts: ["Circle", "Square", "Line", "Dot"], ans: 1, exp: "Outer container shapes remain consistent." }
        ]
      },
      {
        day: 30,
        subject: "Mixed Review",
        badgeClass: "badge-eng",
        title: "Week 6 Milestone Review",
        lesson: "Consolidate all topics learned in Weeks 1–6 to ensure complete mastery!",
        questions: [
          { q: "Angles on a straight line: 110° and x. What is x?", opts: ["70°", "80°", "90°", "60°"], ans: 0, exp: "180° - 110° = 70°." },
          { q: "Is 29 a prime number?", opts: ["Yes", "No"], ans: 0, exp: "Yes, 29 has only 2 factors (1 and 29)." },
          { q: "Share £30 in ratio 1:2. Larger share?", opts: ["£10", "£20", "£15", "£25"], ans: 1, exp: "3 parts. £30 ÷ 3 = £10. 2 × £10 = £20." },
          { q: "Letter fitting PEA[?]EAD:", opts: ["R", "T", "S", "K"], ans: 0, exp: "PEAR / READ → R fits." },
          { q: "Convert 16:20 to 12-hour time:", opts: ["6:20 PM", "4:20 PM", "4:20 AM", "6:20 AM"], ans: 1, exp: "16:20 - 12 = 4:20 PM." },
          { q: "What is 3/4 of 36?", opts: ["18", "27", "24", "21"], ans: 1, exp: "36 ÷ 4 = 9. 9 × 3 = 27." },
          { q: "Synonym for GIGANTIC:", opts: ["Tiny", "Enormous", "Heavy", "Bright"], ans: 1, exp: "Gigantic = Enormous." },
          { q: "Irregular past tense of CATCH:", opts: ["Catched", "Caught", "Cot", "Catching"], ans: 1, exp: "Caught is correct past tense." },
          { q: "Perimeter of rectangle length 8cm, width 5cm?", opts: ["26cm", "40cm", "13cm", "28cm"], ans: 0, exp: "8 + 5 + 8 + 5 = 26cm." },
          { q: "Area of rectangle length 9cm, width 4cm?", opts: ["26 cm²", "36 cm²", "13 cm²", "32 cm²"], ans: 1, exp: "9 × 4 = 36 cm²." }
        ]
      }
    ]
  }
];
