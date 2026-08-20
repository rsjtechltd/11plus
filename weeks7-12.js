const weeks7_12 = [
  {
    week: 7,
    weekTitle: "Week 7: Fractions, Decimals & Direct Speech",
    days: [
      {
        day: 31,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Converting Fractions & Decimals",
        lesson: "To convert tenths and hundredths to decimals: 1/10 = 0.1, 1/100 = 0.01, 1/2 = 0.5, 1/4 = 0.25, 3/4 = 0.75.",
        questions: [
          { q: "What is 3/10 expressed as a decimal?", opts: ["0.03", "0.3", "3.0", "0.33"], ans: 1, exp: "3/10 = 0.3." },
          { q: "Convert 0.25 into a fraction in simplest form:", opts: ["1/4", "1/2", "2/5", "25/10"], ans: 0, exp: "0.25 = 25/100 = 1/4." },
          { q: "What is 7/100 expressed as a decimal?", opts: ["0.7", "0.07", "7.0", "0.77"], ans: 1, exp: "7/100 = 0.07." },
          { q: "Convert 0.5 into a fraction in simplest form:", opts: ["1/5", "1/2", "5/100", "2/5"], ans: 1, exp: "0.5 = 5/10 = 1/2." },
          { q: "Which fraction is equivalent to 0.75?", opts: ["1/2", "3/4", "2/3", "4/5"], ans: 1, exp: "0.75 = 75/100 = 3/4." },
          { q: "What is 9/10 as a decimal?", opts: ["0.09", "0.9", "9.0", "0.99"], ans: 1, exp: "9/10 = 0.9." },
          { q: "Which decimal is equal to 1/10?", opts: ["0.01", "0.1", "1.0", "0.11"], ans: 1, exp: "1/10 = 0.1." },
          { q: "Convert 0.6 into a fraction in simplest form:", opts: ["6/10", "3/5", "1/6", "2/3"], ans: 1, exp: "0.6 = 6/10 = 3/5." },
          { q: "What is 45/100 as a decimal?", opts: ["0.45", "4.5", "0.045", "0.54"], ans: 0, exp: "45/100 = 0.45." },
          { q: "Which value is the largest?", opts: ["0.4", "0.45", "0.09", "0.39"], ans: 1, exp: "0.45 is larger than 0.40, 0.09, and 0.39." }
        ]
      },
      {
        day: 32,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Compound Words & Word Building",
        lesson: "A compound word is formed by joining two distinct smaller words without changing their spellings.",
        questions: [
          { q: "Which word joins SUN to form a compound word?", opts: ["SHINE", "LIGHT", "FLOWER", "ALL OF THESE"], ans: 3, exp: "Sunshine, Sunlight, and Sunflower are all compound words." },
          { q: "Combine PASS and WORD to form a compound word:", opts: ["Pass-word", "Password", "Pass word", "Passward"], ans: 1, exp: "Password is written as a single word." },
          { q: "Which word can follow FOOT to form a compound word?", opts: ["BALL", "PRINT", "STEP", "ALL OF THESE"], ans: 3, exp: "Football, Footprint, and Footstep are all valid." },
          { q: "Combine TOOTH and BRUSH:", opts: ["Teethbrush", "Toothbrush", "Tooth-brush", "Brush-tooth"], ans: 1, exp: "TOOTH + BRUSH = Toothbrush." },
          { q: "Which word precedes COAT to form a compound word?", opts: ["RAIN", "OVER", "WAIST", "ALL OF THESE"], ans: 3, exp: "Raincoat, Overcoat, and Waistcoat are all valid." },
          { q: "Combine JELLY and FISH:", opts: ["Jellyfish", "Jelly-fish", "Jelliesfish", "Fishjelly"], ans: 0, exp: "JELLY + FISH = Jellyfish." },
          { q: "Which word follows FIRE to form a compound word?", opts: ["FLY", "WORKS", "PLACE", "ALL OF THESE"], ans: 3, exp: "Firefly, Fireworks, and Fireplace are all valid." },
          { q: "Combine PAN and CAKE:", opts: ["Pancake", "Pan-cake", "Pancakes", "Cakepan"], ans: 0, exp: "PAN + CAKE = Pancake." },
          { q: "Which word precedes BOARD to form a compound word?", opts: ["BLACK", "KEY", "STAR", "ALL OF THESE"], ans: 3, exp: "Blackboard, Keyboard, and Starboard are all valid." },
          { q: "Combine SNOW and FLAKE:", opts: ["Snowflake", "Snow-flake", "Snowflakes", "Flakesnow"], ans: 0, exp: "SNOW + FLAKE = Snowflake." }
        ]
      },
      {
        day: 33,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Perimeter & Area of Composite Shapes",
        lesson: "To find the area of an L-shape composite shape: split it into two simpler rectangles, calculate each area, and add them together.",
        questions: [
          { q: "A 10cm by 6cm rectangle has a 3cm by 2cm corner removed. Remaining area?", opts: ["54 cm²", "60 cm²", "52 cm²", "56 cm²"], ans: 0, exp: "Original area = 60 cm². Removed area = 6 cm². 60 - 6 = 54 cm²." },
          { q: "An L-shape is made of two rectangles: 4cm × 3cm and 5cm × 2cm. Total area?", opts: ["22 cm²", "20 cm²", "24 cm²", "18 cm²"], ans: 0, exp: "Area 1 = 12 cm². Area 2 = 10 cm². Total = 12 + 10 = 22 cm²." },
          { q: "Perimeter of an equilateral triangle with side length 12cm?", opts: ["24cm", "36cm", "48cm", "30cm"], ans: 1, exp: "3 equal sides: 3 × 12 = 36cm." },
          { q: "Area of a square with a perimeter of 24cm?", opts: ["24 cm²", "36 cm²", "16 cm²", "48 cm²"], ans: 1, exp: "Side = 24 ÷ 4 = 6cm. Area = 6 × 6 = 36 cm²." },
          { q: "A rectangular garden is 8m long and 5m wide. What is its perimeter?", opts: ["26m", "40m", "13m", "28m"], ans: 0, exp: "8 + 5 + 8 + 5 = 26m." },
          { q: "Area of a rectangle with length 15cm and width 4cm?", opts: ["38 cm²", "60 cm²", "19 cm²", "50 cm²"], ans: 1, exp: "15 × 4 = 60 cm²." },
          { q: "A square field has an area of 81 m². What is its perimeter?", opts: ["36m", "18m", "81m", "72m"], ans: 0, exp: "Side = √81 = 9m. Perimeter = 4 × 9 = 36m." },
          { q: "Perimeter of a regular octagon with side length 7cm?", opts: ["42cm", "56cm", "49cm", "64cm"], ans: 1, exp: "8 equal sides: 8 × 7 = 56cm." },
          { q: "A rectangle has an area of 32 cm² and a width of 4cm. What is its length?", opts: ["6cm", "8cm", "10cm", "12cm"], ans: 1, exp: "Length = Area ÷ Width = 32 ÷ 4 = 8cm." },
          { q: "Composite shape made of two squares with side lengths 4cm and 3cm. Total area?", opts: ["25 cm²", "20 cm²", "14 cm²", "28 cm²"], ans: 0, exp: "Area 1 = 16 cm². Area 2 = 9 cm². Total = 16 + 9 = 25 cm²." }
        ]
      },
      {
        day: 34,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "Shape Sequences & Rotations",
        lesson: "Track rotations carefully: 45° = half quarter turn; 90° = quarter turn; 180° = half turn.",
        questions: [
          { q: "An arrow points NORTH. It turns 180° clockwise. Direction now?", opts: ["EAST", "WEST", "SOUTH", "NORTH-EAST"], ans: 2, exp: "180° reverses direction: North becomes South." },
          { q: "An arrow points EAST. It turns 90° anti-clockwise. Direction now?", opts: ["NORTH", "SOUTH", "WEST", "SOUTH-EAST"], ans: 0, exp: "90° anti-clockwise from East points North." },
          { q: "Sequence: [Circle, Square, Pentagon, Hexagon, ___]. Next shape?", opts: ["Septagon/Heptagon", "Octagon", "Triangle", "Decagon"], ans: 0, exp: "Side count increases: 0, 4, 5, 6, 7 (Heptagon)." },
          { q: "An arrow points SOUTH-WEST. It turns 180°. Direction now?", opts: ["NORTH-EAST", "NORTH-WEST", "SOUTH-EAST", "NORTH"], ans: 0, exp: "180° reverses South-West into North-East." },
          { q: "Pattern rule: Shading alternates [Black, White, Black, White, ___]. Next shade?", opts: ["Black", "White", "Grey", "Striped"], ans: 0, exp: "Alternating sequence: next is Black." },
          { q: "A line rotates 45° clockwise each step: [UP, NORTH-EAST, EAST, ___]. Next direction?", opts: ["SOUTH-EAST", "SOUTH", "SOUTH-WEST", "WEST"], ans: 0, exp: "45° clockwise from East points South-East." },
          { q: "How many degrees turn is needed to face from NORTH to WEST clockwise?", opts: ["90°", "180°", "270°", "360°"], ans: 2, exp: "North → East (90°) → South (180°) → West (270°)." },
          { q: "Shape sequence sides: [3, 6, 9, 12, ___]. Next side count?", opts: ["14", "15", "16", "18"], ans: 1, exp: "Sequence adds 3 sides each step: 12 + 3 = 15." },
          { q: "A shape turns 90° clockwise 4 times. Total rotation?", opts: ["180°", "270°", "360°", "90°"], ans: 2, exp: "4 × 90° = 360° (full turn back to start)." },
          { q: "Which shape is the odd one out: Square, Rectangle, Trapezium, Cube?", opts: ["Square", "Rectangle", "Trapezium", "Cube"], ans: 3, exp: "Cube is a 3D shape; others are 2D quadrilaterals." }
        ]
      },
      {
        day: 35,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Punctuation & Direct Speech Rules",
        lesson: "Direct speech rules: 1) Open speech marks (“), 2) Capital letter for first spoken word, 3) Punctuation (! ? , .) INSIDE speech marks, 4) Close speech marks (”).",
        questions: [
          { q: "Which sentence uses direct speech punctuation correctly?", opts: ["\"Hello!\" said Maya.", "\"hello!\" said Maya.", "\"Hello! said Maya.\"", "Hello! said Maya."], ans: 0, exp: "Capital letter inside speech marks, punctuation inside, closing marks before verb." },
          { q: "Where does the comma go: \"Wait\" shouted Tom.", opts: ["Inside speech marks after Wait", "Outside speech marks", "After shouted", "No comma needed"], ans: 0, exp: "Punctuation goes inside speech marks: \"Wait,\" shouted Tom." },
          { q: "Select the correctly punctuated sentence:", opts: ["\"Where are you going?\" asked Mum.", "\"Where are you going\"? asked Mum.", "\"Where are you going? asked Mum.\"", "Where are you going? asked Mum."], ans: 0, exp: "Question mark goes inside closing speech marks." },
          { q: "Which sentence needs speech marks?", opts: ["Sarah said she was tired.", "I am tired, said Sarah.", "Sarah felt very tired.", "Sarah went to bed early."], ans: 1, exp: "Direct words 'I am tired' require speech marks." },
          { q: "Where should the capital letter be: \"____ look at that!\" cried Leo.", opts: ["Quickly", "quickly", "QUICKLY", "Quick"], ans: 0, exp: "The first word of direct speech requires a capital letter." },
          { q: "Which mark is missing: \"Stop thief\" yelled the guard.", opts: ["Exclamation mark inside speech marks", "Question mark", "Full stop after guard", "Comma after guard"], ans: 0, exp: "Requires exclamation mark: \"Stop thief!\" yelled the guard." },
          { q: "Select the correct punctuation:", opts: ["\"I love swimming,\" said Ben.", "\"I love swimming\", said Ben.", "\"I love swimming\" said Ben.", "I love swimming, said Ben."], ans: 0, exp: "Comma must be placed inside the closing quotation marks." },
          { q: "Which word is the reporting verb in: \"Run!\" shouted Coach Smith.", opts: ["Run", "shouted", "Coach", "Smith"], ans: 1, exp: "Shouted is the verb indicating how the speech was spoken." },
          { q: "Choose the correct sentence:", opts: ["\"What a amazing day!\" she exclaimed.", "\"What an amazing day!\" she exclaimed.", "\"What an amazing day! she exclaimed.\"", "What an amazing day! she exclaimed."], ans: 1, exp: "'an amazing' is grammatically correct; speech marks enclosed properly." },
          { q: "When a new speaker talks in a story, you must always:", opts: ["Start a new line/paragraph", "Use bold text", "Use capital letters for all words", "Add two full stops"], ans: 0, exp: "A new speaker always requires a new line." }
        ]
      }
    ]
  },
  {
    week: 8,
    weekTitle: "Week 8: Mental Arithmetic, VR Codes & Timetables",
    days: [
      {
        day: 36,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Factors, Multiples & Rapid Speed Check",
        lesson: "Multiples are numbers in a times table. Factors are numbers that divide evenly into a target number.",
        questions: [
          { q: "What is 9 × 8?", opts: ["64", "72", "81", "63"], ans: 1, exp: "9 × 8 = 72." },
          { q: "Which number is a factor of 42?", opts: ["5", "6", "8", "9"], ans: 1, exp: "6 × 7 = 42." },
          { q: "What is 84 ÷ 12?", opts: ["6", "7", "8", "9"], ans: 1, exp: "84 ÷ 12 = 7." },
          { q: "Which number is a multiple of 8?", opts: ["28", "36", "48", "52"], ans: 2, exp: "8 × 6 = 48." },
          { q: "Find the Highest Common Factor (HCF) of 12 and 20:", opts: ["2", "4", "5", "6"], ans: 1, exp: "Factors of 12: 1,2,3,4,6,12. Factors of 20: 1,2,4,5,10,20. HCF = 4." },
          { q: "Find the Lowest Common Multiple (LCM) of 6 and 8:", opts: ["16", "24", "32", "48"], ans: 1, exp: "Multiples of 6: 6,12,18,24... Multiples of 8: 8,16,24... LCM = 24." },
          { q: "What is 11 × 11?", opts: ["110", "121", "132", "122"], ans: 1, exp: "11 × 11 = 121." },
          { q: "Which of these is a prime number?", opts: ["15", "21", "23", "27"], ans: 2, exp: "23 has only two factors: 1 and 23." },
          { q: "What is 144 ÷ 12?", opts: ["11", "12", "13", "14"], ans: 1, exp: "144 ÷ 12 = 12." },
          { q: "If 8 boxes hold 6 books each, how many books in total?", opts: ["42", "48", "54", "56"], ans: 1, exp: "8 × 6 = 48 books." }
        ]
      },
      {
        day: 37,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Letter-Number Codes & Number Sequences",
        lesson: "Look for numerical patterns (+3, ×2, -4) or position-based letter keys.",
        questions: [
          { q: "What comes next in sequence: 3, 7, 11, 15, __?", opts: ["18", "19", "20", "21"], ans: 1, exp: "Rule: Add 4 each time. 15 + 4 = 19." },
          { q: "What comes next in sequence: 2, 4, 8, 16, __?", opts: ["24", "30", "32", "64"], ans: 2, exp: "Rule: Double previous number. 16 × 2 = 32." },
          { q: "What comes next in sequence: 50, 43, 36, 29, __?", opts: ["22", "21", "23", "20"], ans: 0, exp: "Rule: Subtract 7 each time. 29 - 7 = 22." },
          { q: "If A=1, B=2, C=3, what is word value for DOG (4+15+7)?", opts: ["24", "26", "28", "30"], ans: 1, exp: "4 + 15 + 7 = 26." },
          { q: "What comes next in sequence: 1, 4, 9, 16, 25, __?", opts: ["30", "35", "36", "49"], ans: 2, exp: "Square numbers: 1², 2², 3², 4², 5², 6² = 36." },
          { q: "What comes next in sequence: 100, 90, 81, 73, __?", opts: ["64", "66", "65", "67"], ans: 1, exp: "Subtractions increase: -10, -9, -8, -7 → 73 - 7 = 66." },
          { q: "If CAT = 24, what is BAT (2+1+20)?", opts: ["22", "23", "24", "25"], ans: 1, exp: "2 + 1 + 20 = 23." },
          { q: "What comes next in sequence: 5, 10, 20, 40, __?", opts: ["60", "70", "80", "100"], ans: 2, exp: "Rule: Double each number. 40 × 2 = 80." },
          { q: "What comes next in sequence: 4, 9, 14, 19, __?", opts: ["23", "24", "25", "26"], ans: 1, exp: "Rule: Add 5 each time. 19 + 5 = 24." },
          { q: "If RED = 27 (18+5+4), what is BLUE (2+12+21+5)?", opts: ["40", "38", "42", "36"], ans: 0, exp: "2 + 12 + 21 + 5 = 40." }
        ]
      },
      {
        day: 38,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "24-Hour Clock & Timetables",
        lesson: "To convert PM times to 24-hour time: add 12 to the hour (e.g. 4:15 PM = 16:15). For AM times, keep the hour same.",
        questions: [
          { q: "Convert 17:45 to 12-hour clock time:", opts: ["7:45 PM", "5:45 PM", "5:45 AM", "7:45 AM"], ans: 1, exp: "17:45 - 12:00 = 5:45 PM." },
          { q: "Convert 9:20 PM to 24-hour clock time:", opts: ["19:20", "21:20", "09:20", "22:20"], ans: 1, exp: "9 + 12 = 21 → 21:20." },
          { q: "A train leaves at 10:15 and arrives at 12:40. How long is journey?", opts: ["2 hrs 15 mins", "2 hrs 25 mins", "2 hrs 35 mins", "1 hr 45 mins"], ans: 1, exp: "10:15 to 12:15 = 2 hrs. 12:15 to 12:40 = 25 mins. Total = 2 hrs 25 mins." },
          { q: "A film starts at 14:10 and lasts 1 hour 50 minutes. Finish time?", opts: ["16:00", "15:50", "16:10", "15:40"], ans: 0, exp: "14:10 + 1 hr = 15:10. 15:10 + 50 mins = 16:00." },
          { q: "Convert 00:30 to 12-hour clock time:", opts: ["12:30 AM", "12:30 PM", "1:30 AM", "11:30 PM"], ans: 0, exp: "00:30 represents 30 minutes after midnight = 12:30 AM." },
          { q: "How many minutes between 08:45 and 10:15?", opts: ["75 mins", "90 mins", "80 mins", "100 mins"], ans: 1, exp: "08:45 to 09:45 = 60 mins. 09:45 to 10:15 = 30 mins. Total = 90 mins." },
          { q: "Convert 3:15 PM to 24-hour clock time:", opts: ["13:15", "15:15", "14:15", "16:15"], ans: 1, exp: "3 + 12 = 15 → 15:15." },
          { q: "A bus runs every 20 minutes starting at 09:10. When is the 4th bus?", opts: ["10:10", "10:00", "10:20", "09:50"], ans: 0, exp: "1st=09:10, 2nd=09:30, 3rd=09:50, 4th=10:10." },
          { q: "Convert 22:05 to 12-hour clock time:", opts: ["10:05 PM", "10:05 AM", "8:05 PM", "9:05 PM"], ans: 0, exp: "22:05 - 12:00 = 10:05 PM." },
          { q: "How many seconds in 3 and a half minutes?", opts: ["180 secs", "210 secs", "240 secs", "200 secs"], ans: 1, exp: "3 mins = 180 secs. Half min = 30 secs. 180 + 30 = 210 secs." }
        ]
      },
      {
        day: 39,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Context Vocabulary & Word Matching",
        lesson: "Select the word that best fits the exact meaning of the sentence context.",
        questions: [
          { q: "Select word closest in meaning to ABUNDANT:", opts: ["Scarce", "Plentiful", "Rare", "Small"], ans: 1, exp: "Abundant means existing in large quantities (plentiful)." },
          { q: "Select word closest in meaning to SOLITARY:", opts: ["Crowded", "Alone", "Friendly", "Loud"], ans: 1, exp: "Solitary means done or existing alone." },
          { q: "Select word closest in meaning to ACCURATE:", opts: ["Correct", "Wrong", "Faulty", "Careless"], ans: 0, exp: "Accurate means correct in all details." },
          { q: "Select word closest in meaning to VAGUE:", opts: ["Clear", "Unclear", "Exact", "Detailed"], ans: 1, exp: "Vague means thinking or expressing unclearly." },
          { q: "Select word closest in meaning to OBSOLETE:", opts: ["Modern", "Outdated", "New", "Popular"], ans: 1, exp: "Obsolete means no longer produced or used (outdated)." },
          { q: "Select word closest in meaning to COMPEL:", opts: ["Force", "Allow", "Stop", "Prevent"], ans: 0, exp: "Compel means to force or oblige someone to do something." },
          { q: "Select word closest in meaning to CANDID:", opts: ["Deceitful", "Honest", "Shy", "Secretive"], ans: 1, exp: "Candid means truthful and straightforward (honest)." },
          { q: "Select word closest in meaning to DIVERSE:", opts: ["Similar", "Varied", "Identical", "Same"], ans: 1, exp: "Diverse means showing a great deal of variety." },
          { q: "Select word closest in meaning to FRANTIC:", opts: ["Calm", "Hectic/Wild", "Peaceful", "Slow"], ans: 1, exp: "Frantic means conducted in a hurried and wild manner." },
          { q: "Select word closest in meaning to IMMENSE:", opts: ["Huge", "Tiny", "Short", "Narrow"], ans: 0, exp: "Immense means extremely large or huge." }
        ]
      },
      {
        day: 40,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Homophones & Word Classes",
        lesson: "Homophones sound identical but have different spellings and meanings. Word classes: Noun (thing), Verb (action), Adjective (describes noun), Adverb (describes verb).",
        questions: [
          { q: "Fill in blank: 'The knight rode his ____ into battle.'", opts: ["horse", "hoarse", "horce", "whores"], ans: 0, exp: "Horse is the animal; hoarse means a raspy voice." },
          { q: "Fill in blank: 'The sea was calm, and the ____ was clear.'", opts: ["weather", "whether", "wether", "weathur"], ans: 0, exp: "Weather refers to atmospheric conditions." },
          { q: "Which word class is 'swiftly' in: 'She ran swiftly'?", opts: ["Noun", "Verb", "Adjective", "Adverb"], ans: 3, exp: "Swiftly describes how she ran (verb), making it an adverb." },
          { q: "Fill in blank: 'He ate a whole ____ of pie.'", opts: ["piece", "peace", "peece", "pease"], ans: 0, exp: "Piece means a portion; peace means quiet/harmony." },
          { q: "Which word class is 'glorious' in: 'A glorious sunny day'?", opts: ["Noun", "Verb", "Adjective", "Adverb"], ans: 2, exp: "Glorious describes the noun 'day', making it an adjective." },
          { q: "Fill in blank: 'They left ____ bags on the bus.'", opts: ["there", "their", "they're", "thier"], ans: 1, exp: "Their is possessive pronoun showing ownership." },
          { q: "Which word class is 'whispered' in: 'She whispered a secret'?", opts: ["Noun", "Verb", "Adjective", "Adverb"], ans: 1, exp: "Whispered is an action word (verb)." },
          { q: "Fill in blank: 'The castle stood on a high ____.'", opts: ["cliff", "clef", "clif", "kliff"], ans: 0, exp: "Cliff is spelled c-l-i-f-f." },
          { q: "Which word class is 'courage'?", opts: ["Abstract Noun", "Proper Noun", "Verb", "Adjective"], ans: 0, exp: "Courage is an abstract noun (a state/quality)." },
          { q: "Fill in blank: 'The wind ____ the autumn leaves away.'", opts: ["blew", "blue", "bloo", "bleu"], ans: 0, exp: "Blew is the past tense of blow; blue is the color." }
        ]
      }
    ]
  },
  {
    week: 9,
    weekTitle: "Week 9: Decimals, Symmetry & Comprehension",
    days: [
      {
        day: 41,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Decimal Place Value & Ordering",
        lesson: "Compare decimals digit by digit from left to right starting at tenths, then hundredths.",
        questions: [
          { q: "Which decimal has the largest value?", opts: ["0.6", "0.58", "0.09", "0.59"], ans: 0, exp: "0.6 = 0.60, which is larger than 0.59, 0.58, or 0.09." },
          { q: "What is the value of the digit 7 in 4.72?", opts: ["7 units", "7 tenths", "7 hundredths", "7 tens"], ans: 1, exp: "The first digit after decimal point represents tenths." },
          { q: "Order from smallest to largest: [0.3, 0.03, 0.33]", opts: ["0.03, 0.3, 0.33", "0.3, 0.03, 0.33", "0.33, 0.3, 0.03", "0.03, 0.33, 0.3"], ans: 0, exp: "0.03 (3 hundredths) < 0.30 (30 hundredths) < 0.33 (33 hundredths)." },
          { q: "What is 2.4 + 3.8?", opts: ["6.0", "6.2", "5.2", "6.4"], ans: 1, exp: "2.4 + 3.8 = 6.2." },
          { q: "What is 5.0 - 1.6?", opts: ["3.4", "3.6", "4.4", "3.2"], ans: 0, exp: "5.0 - 1.6 = 3.4." },
          { q: "What is the value of 5 in 0.05?", opts: ["5 tens", "5 units", "5 tenths", "5 hundredths"], ans: 3, exp: "Second digit after decimal point represents hundredths." },
          { q: "Round 4.7 to the nearest whole number:", opts: ["4", "5", "4.5", "5.0"], ans: 1, exp: "7 tenths rounds up to 5." },
          { q: "What is 0.8 + 0.5?", opts: ["1.3", "1.2", "0.13", "1.5"], ans: 0, exp: "0.8 + 0.5 = 1.3." },
          { q: "Which decimal is equal to 3/4?", opts: ["0.34", "0.75", "0.5", "0.3"], ans: 1, exp: "3/4 = 75/100 = 0.75." },
          { q: "What is 10 - 4.25?", opts: ["5.75", "6.25", "5.25", "6.75"], ans: 0, exp: "10.00 - 4.25 = 5.75." }
        ]
      },
      {
        day: 42,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "Lines of Symmetry & Mirror Images",
        lesson: "Reflections mirror every point across the symmetry line. Distance to the mirror line remains equal.",
        questions: [
          { q: "How many lines of symmetry does a regular square have?", opts: ["2", "4", "6", "8"], ans: 1, exp: "A square has 4 lines of symmetry (2 diagonal, 1 vertical, 1 horizontal)." },
          { q: "How many lines of symmetry does a circle have?", opts: ["1", "4", "360", "Infinite"], ans: 3, exp: "A circle has an infinite number of symmetry lines passing through its center." },
          { q: "How many lines of symmetry in an equilateral triangle?", opts: ["1", "2", "3", "6"], ans: 2, exp: "An equilateral triangle has 3 lines of symmetry." },
          { q: "How many lines of symmetry in a regular hexagon?", opts: ["4", "6", "8", "12"], ans: 1, exp: "A regular hexagon has 6 lines of symmetry." },
          { q: "If an arrow pointing LEFT is reflected in a vertical mirror line, where does it point?", opts: ["LEFT", "RIGHT", "UP", "DOWN"], ans: 1, exp: "Vertical reflection flips left into right." },
          { q: "If an arrow pointing UP is reflected in a horizontal mirror line, where does it point?", opts: ["UP", "DOWN", "LEFT", "RIGHT"], ans: 1, exp: "Horizontal reflection flips top into bottom." },
          { q: "How many lines of symmetry in a regular pentagon?", opts: ["3", "5", "10", "4"], ans: 1, exp: "A regular pentagon has 5 lines of symmetry." },
          { q: "How many lines of symmetry in a parallelogram with unequal sides?", opts: ["0", "2", "4", "1"], ans: 0, exp: "A standard non-rhombus parallelogram has 0 lines of symmetry." },
          { q: "How many lines of symmetry in an isosceles triangle?", opts: ["0", "1", "2", "3"], ans: 1, exp: "An isosceles triangle has 1 line of symmetry." },
          { q: "Letter 'E' reflected vertically across a mirror line to its right looks like:", opts: ["Flipped E (3-like)", "E", "F", "Rotated E"], ans: 0, exp: "Vertical mirror line flips the letter horizontally." }
        ]
      },
      {
        day: 43,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Pictograms & Bar Charts",
        lesson: "Always check the key! In pictograms, 1 symbol may represent 2, 4, 5, or 10 items.",
        questions: [
          { q: "In a pictogram, 1 circle symbol = 4 children. How many children do 3.5 circles represent?", opts: ["12", "14", "16", "10"], ans: 1, exp: "3 × 4 = 12. Half circle = 2. 12 + 2 = 14 children." },
          { q: "If 1 star symbol = 5 books, how many stars are needed to represent 35 books?", opts: ["6", "7", "8", "5"], ans: 1, exp: "35 ÷ 5 = 7 stars." },
          { q: "A bar chart shows Monday=10, Tuesday=15, Wednesday=20. What is total for 3 days?", opts: ["40", "45", "50", "35"], ans: 1, exp: "10 + 15 + 20 = 45." },
          { q: "In a pictogram, 1 square = 10 cars. How many cars represented by 2.5 squares?", opts: ["20", "25", "30", "15"], ans: 1, exp: "2 × 10 = 20. Half square = 5. 20 + 5 = 25 cars." },
          { q: "If 1 book icon = 8 readers, how many readers do 4 icons represent?", opts: ["24", "32", "40", "28"], ans: 1, exp: "4 × 8 = 32 readers." },
          { q: "Bar chart: Cats=12, Dogs=18. How many more dogs than cats?", opts: ["4", "6", "8", "5"], ans: 1, exp: "18 - 12 = 6." },
          { q: "In a pictogram, 1 triangle = 6 apples. How many apples represented by 5 triangles?", opts: ["25", "30", "35", "24"], ans: 1, exp: "5 × 6 = 30 apples." },
          { q: "If 1 car icon = 4 vehicles, how many icons represent 28 vehicles?", opts: ["6", "7", "8", "9"], ans: 1, exp: "28 ÷ 4 = 7 icons." },
          { q: "Bar chart: Apples=15, Bananas=25, Oranges=10. Total fruit?", opts: ["45", "50", "55", "40"], ans: 1, exp: "15 + 25 + 10 = 50 fruit." },
          { q: "If half a circle symbol represents 3 pets, how many pets does 1 full circle represent?", opts: ["3", "6", "9", "12"], ans: 1, exp: "3 × 2 = 6 pets." }
        ]
      },
      {
        day: 44,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Antonyms & Paired Opposites",
        lesson: "Look for exact semantic opposites across formal vocabulary lists.",
        questions: [
          { q: "Find the word OPPOSITE in meaning to FRUGAL:", opts: ["Thrifty", "Wasteful/Extravagant", "Poor", "Cheap"], ans: 1, exp: "Frugal means economical; Wasteful is the opposite." },
          { q: "Find the word OPPOSITE in meaning to ARTIFICIAL:", opts: ["Fake", "Natural", "Synthetic", "False"], ans: 1, exp: "Artificial means man-made; Natural is the opposite." },
          { q: "Find the word OPPOSITE in meaning to TRANSPARENT:", opts: ["Clear", "Opaque", "Glassy", "Bright"], ans: 1, exp: "Transparent lets light through; Opaque blocks light." },
          { q: "Find the word OPPOSITE in meaning to OPTIMISTIC:", opts: ["Hopeful", "Pessimistic", "Positive", "Cheerful"], ans: 1, exp: "Optimistic sees the bright side; Pessimistic sees the negative." },
          { q: "Find the word OPPOSITE in meaning to COMPLIMENT:", opts: ["Praise", "Insult", "Flatter", "Honor"], ans: 1, exp: "Compliment means praise; Insult is the opposite." },
          { q: "Find the word OPPOSITE in meaning to ANCIENT:", opts: ["Old", "Modern", "Historic", "Aged"], ans: 1, exp: "Ancient means very old; Modern means current/new." },
          { q: "Find the word OPPOSITE in meaning to RIGID:", opts: ["Stiff", "Flexible", "Hard", "Solid"], ans: 1, exp: "Rigid means stiff/inflexible; Flexible is the opposite." },
          { q: "Find the word OPPOSITE in meaning to ACQUIT:", opts: ["Clear", "Convict", "Free", "Pardon"], ans: 1, exp: "Acquit means declare innocent; Convict means find guilty." },
          { q: "Find the word OPPOSITE in meaning to MANDATORY:", opts: ["Compulsory", "Optional", "Required", "Forced"], ans: 1, exp: "Mandatory means required; Optional is the opposite." },
          { q: "Select two words OPPOSITE in meaning: [Barren, Fertile, Empty, Dry]", opts: ["Barren & Fertile", "Barren & Empty", "Fertile & Dry", "Empty & Dry"], ans: 0, exp: "Barren means unproductive; Fertile means productive." }
        ]
      },
      {
        day: 45,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Comprehension & Text Deductions",
        lesson: "Read questions carefully: 'Find word in text' requires exact extraction; 'Why did X happen' requires logical inference.",
        questions: [
          { q: "'The lighthouse beam sliced through thick fog as waves crashed.' What was the weather like?", opts: ["Calm and sunny", "Foggy and stormy", "Snowy", "Clear night"], ans: 1, exp: "'Thick fog' and 'crashing waves' indicate foggy, stormy weather." },
          { q: "Text above: What does 'sliced' describe?", opts: ["The waves", "The light beam", "The fog", "The rocks"], ans: 1, exp: "The light beam 'sliced' through fog." },
          { q: "'Oliver clutched his winning ticket tightly, heart pounding.' How felt Oliver?", opts: ["Bored", "Thrilled and excited", "Scared", "Sad"], ans: 1, exp: "Winning ticket and pounding heart show excitement." },
          { q: "What does 'clutched' mean?", opts: ["Dropped", "Held tightly", "Threw", "Folded"], ans: 1, exp: "Clutched means held firmly/tightly." },
          { q: "'The abandoned cottage stood silently, overgrown with ivy.' How moved cottage?", opts: ["It didn't move", "It shook", "It creaked", "It fell"], ans: 0, exp: "'Stood silently' indicates no movement." },
          { q: "What does 'abandoned' mean?", opts: ["In use", "Deserted / Uninhabited", "New", "Clean"], ans: 1, exp: "Abandoned means left behind or deserted." },
          { q: "Identify adjective in: 'The overgrown ivy covered walls.'", opts: ["overgrown", "ivy", "covered", "walls"], ans: 0, exp: "Overgrown describes the noun 'ivy'." },
          { q: "Identify verb in: 'The lighthouse beam sliced through fog.'", opts: ["lighthouse", "beam", "sliced", "fog"], ans: 2, exp: "Sliced is the action verb." },
          { q: "Identify noun in: 'Oliver clutched his ticket.'", opts: ["Oliver & ticket", "clutched", "his", "tightly"], ans: 0, exp: "Oliver is a proper noun; ticket is a common noun." },
          { q: "Which word is an adverb in: 'Oliver clutched ticket tightly.'", opts: ["Oliver", "clutched", "ticket", "tightly"], ans: 3, exp: "Tightly describes how he clutched." }
        ]
      }
    ]
  },
  {
    week: 10,
    weekTitle: "Week 10: Multi-Step Money, Shapes & Mid-Term Review",
    days: [
      {
        day: 46,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Multi-Step Money & Change Problems",
        lesson: "Always calculate total expenditure first, then subtract from initial amount.",
        questions: [
          { q: "Maya has £15. She buys 2 pens at £2.40 each and a pad for £3.50. Change?", opts: ["£6.70", "£5.70", "£4.70", "£7.70"], ans: 0, exp: "Pens = £4.80. Total spent = £4.80 + £3.50 = £8.30. £15.00 - £8.30 = £6.70." },
          { q: "3 cinema tickets cost £21. How much do 5 tickets cost?", opts: ["£30", "£35", "£28", "£42"], ans: 1, exp: "1 ticket = £21 ÷ 3 = £7. 5 × £7 = £35." },
          { q: "Sam spends £4.20 on lunch and £1.80 on bus fare daily. Cost for 5 days?", opts: ["£25", "£30", "£35", "£28"], ans: 1, exp: "Daily = £4.20 + £1.80 = £6.00. 5 × £6 = £30." },
          { q: "Change from £20 when buying 4 items at £3.80 each?", opts: ["£4.80", "£5.20", "£4.20", "£3.80"], ans: 0, exp: "4 × £3.80 = £15.20. £20.00 - £15.20 = £4.80." },
          { q: "Eight oranges cost £1.60. How much do 12 oranges cost?", opts: ["£2.20", "£2.40", "£2.60", "£2.00"], ans: 1, exp: "1 orange = 160 ÷ 8 = 20p. 12 × 20p = 240p = £2.40." },
          { q: "A meal deal costs £4.50. Buying items separately costs £6.20. Savings?", opts: ["£1.50", "£1.70", "£1.80", "£2.00"], ans: 1, exp: "£6.20 - £4.50 = £1.70." },
          { q: "Tom buys 3 postcards at 60p each and a £2.50 badge. Total cost?", opts: ["£4.30", "£4.10", "£3.90", "£4.50"], ans: 0, exp: "3 × 60p = £1.80. £1.80 + £2.50 = £4.30." },
          { q: "Change from £10 after paying £2.45 and £3.85?", opts: ["£3.70", "£3.80", "£4.70", "£3.60"], ans: 0, exp: "Total = £6.30. £10.00 - £6.30 = £3.70." },
          { q: "If 5 drinks cost £6.50, how much do 2 drinks cost?", opts: ["£2.40", "£2.60", "£2.80", "£3.00"], ans: 1, exp: "1 drink = £6.50 ÷ 5 = £1.30. 2 × £1.30 = £2.60." },
          { q: "Leo saves £2.50 per week for 8 weeks, then buys a £14 game. Money left?", opts: ["£5", "£6", "£7", "£8"], ans: 1, exp: "Total saved = 8 × £2.50 = £20. Left = £20 - £14 = £6." }
        ]
      },
      {
        day: 47,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Hidden Words & Missing Insertions",
        lesson: "Look closely across word boundaries to identify hidden 3-4 letter words.",
        questions: [
          { q: "Find the 4-letter hidden word in: 'THE RED'", opts: ["TREE", "HERD", "THEM", "DEER"], ans: 1, exp: "TH[E R]ED → HERD." },
          { q: "Find the 3-letter hidden word in: 'PENS ARE'", opts: ["PEN", "ARE", "NSA", "DEN"], ans: 2, exp: "PE[NS A]RE → NSA." },
          { q: "Find letter that fits both words: PEA[?]EAR", opts: ["R", "K", "N", "S"], ans: 0, exp: "PEAR / REAR → R fits." },
          { q: "Find letter that fits both words: BOA[?]ABLE", opts: ["T", "R", "D", "N"], ans: 0, exp: "BOAT / TABLE → T fits." },
          { q: "Find 4-letter hidden word in: 'LATE ACHES'", opts: ["LATE", "ACHE", "EACH", "TEAC"], ans: 2, exp: "LAT[E ACH]ES → EACH." },
          { q: "Find letter that fits both words: CAR[?]OOR", opts: ["D", "E", "T", "P"], ans: 0, exp: "CARD / DOOR → D fits." },
          { q: "Find 4-letter hidden word in: 'GRAND OPENING'", opts: ["DOPE", "DROP", "OPEN", "GRAND"], ans: 0, exp: "GRAN[D OPE]NING → DOPE." },
          { q: "Find letter that fits both words: BAT[?]OME", opts: ["H", "T", "S", "P"], ans: 0, exp: "BATH / HOME → H fits." },
          { q: "Find 4-letter hidden word in: 'SOAP APPLE'", opts: ["SOAP", "PAPA", "PALE", "LEAP"], ans: 1, exp: "SOA[P APP]LE → PAPA." },
          { q: "Find letter that fits both words: PIN[?]ING", opts: ["K", "S", "G", "T"], ans: 0, exp: "PINK / KING → K fits." }
        ]
      },
      {
        day: 48,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Properties of 2D Polygons & Angles",
        lesson: "Polygons are 2D shapes with straight sides. Regular polygons have equal sides and equal angles.",
        questions: [
          { q: "Name of a 7-sided polygon:", opts: ["Hexagon", "Heptagon", "Octagon", "Nonagon"], ans: 1, exp: "A 7-sided polygon is a Heptagon (or Septagon)." },
          { q: "Name of a 10-sided polygon:", opts: ["Octagon", "Nonagon", "Decagon", "Pentagon"], ans: 2, exp: "A 10-sided polygon is a Decagon." },
          { q: "What is the sum of angles inside a quadrilateral (4-sided shape)?", opts: ["180°", "360°", "270°", "540°"], ans: 1, exp: "Quadrilateral interior angles add up to 360°." },
          { q: "A polygon with 6 equal sides and 6 equal angles is called a:", opts: ["Regular Hexagon", "Irregular Hexagon", "Pentagon", "Octagon"], ans: 0, exp: "Equal sides and angles make it a Regular Hexagon." },
          { q: "How many right angles inside a standard square?", opts: ["2", "3", "4", "6"], ans: 2, exp: "A square has 4 right angles (90° each)." },
          { q: "Which quadrilateral has only 1 pair of parallel sides?", opts: ["Parallelogram", "Trapezium", "Rhombus", "Rectangle"], ans: 1, exp: "A Trapezium has exactly 1 pair of parallel sides." },
          { q: "Which quadrilateral has 4 equal sides but no right angles?", opts: ["Square", "Rectangle", "Rhombus", "Trapezium"], ans: 2, exp: "A Rhombus has 4 equal sides with non-90° angles." },
          { q: "Interior angle sum of an equilateral triangle?", opts: ["180°", "360°", "90°", "270°"], ans: 0, exp: "3 × 60° = 180°." },
          { q: "Name of an 8-sided polygon:", opts: ["Hexagon", "Heptagon", "Octagon", "Nonagon"], ans: 2, exp: "An 8-sided polygon is an Octagon." },
          { q: "What type of triangle has all 3 sides of different lengths?", opts: ["Equilateral", "Isosceles", "Scalene", "Right-angled"], ans: 2, exp: "A Scalene triangle has 3 unequal sides and angles." }
        ]
      },
      {
        day: 49,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "3D Cubes & Folded Nets",
        lesson: "Nets fold into 3D shapes. Opposing faces on a cube net never touch or share an edge.",
        questions: [
          { q: "How many square faces make up a standard cube net?", opts: ["4", "5", "6", "8"], ans: 2, exp: "A cube net consists of 6 square faces." },
          { q: "When a cube net folds, how many total edges does the 3D cube have?", opts: ["8", "10", "12", "14"], ans: 2, exp: "A 3D cube has 12 edges." },
          { q: "How many total vertices (corners) does a cube have?", opts: ["6", "8", "12", "16"], ans: 1, exp: "A cube has 8 vertices." },
          { q: "In a standard 6-sided die, opposite faces always sum to:", opts: ["6", "7", "8", "10"], ans: 1, exp: "Opposite sides on a standard die always add up to 7." },
          { q: "Which 3D shape is formed by a net with 2 circles and 1 rectangle?", opts: ["Cone", "Cylinder", "Sphere", "Cuboid"], ans: 1, exp: "A Cylinder net has 2 circular bases and 1 rectangular side." },
          { q: "Which 3D shape net has 1 square base and 4 triangular sides?", opts: ["Triangular Prism", "Square-based Pyramid", "Cone", "Cube"], ans: 1, exp: "Square base + 4 triangles = Square-based Pyramid." },
          { q: "Which 3D shape net has 2 triangular bases and 3 rectangular sides?", opts: ["Triangular Prism", "Triangular Pyramid", "Cuboid", "Cone"], ans: 0, exp: "Triangular Prism has 2 triangles + 3 rectangles." },
          { q: "How many faces does a square-based pyramid have in total?", opts: ["4", "5", "6", "8"], ans: 1, exp: "1 square base + 4 triangular faces = 5 faces." },
          { q: "How many edges does a square-based pyramid have?", opts: ["6", "8", "10", "12"], ans: 1, exp: "4 base edges + 4 side edges = 8 edges." },
          { q: "Which 3D shape has 0 straight edges and 0 flat faces?", opts: ["Cylinder", "Cone", "Sphere", "Cube"], ans: 2, exp: "A Sphere is completely curved with 0 flat faces or straight edges." }
        ]
      },
      {
        day: 50,
        subject: "Mixed Review",
        badgeClass: "badge-eng",
        title: "Day 50 Mid-Term Milestone Check",
        lesson: "Test your combined skills across Maths, Verbal Reasoning, Non-Verbal Reasoning, and English!",
        questions: [
          { q: "What is 3/10 as a decimal?", opts: ["0.03", "0.3", "3.0", "0.33"], ans: 1, exp: "3/10 = 0.3." },
          { q: "Convert 17:45 to 12-hour clock time:", opts: ["7:45 PM", "5:45 PM", "5:45 AM", "7:45 AM"], ans: 1, exp: "17:45 - 12:00 = 5:45 PM." },
          { q: "Area of rectangle length 15cm, width 4cm?", opts: ["38 cm²", "60 cm²", "19 cm²", "50 cm²"], ans: 1, exp: "15 × 4 = 60 cm²." },
          { q: "How many lines of symmetry in a regular square?", opts: ["2", "4", "6", "8"], ans: 1, exp: "A square has 4 lines of symmetry." },
          { q: "Synonym for ABUNDANT:", opts: ["Scarce", "Plentiful", "Rare", "Small"], ans: 1, exp: "Abundant = Plentiful." },
          { q: "Antonym for TRANSPARENT:", opts: ["Clear", "Opaque", "Glassy", "Bright"], ans: 1, exp: "Transparent opposite is Opaque." },
          { q: "Which sentence uses direct speech correctly?", opts: ["\"Hello!\" said Maya.", "\"hello!\" said Maya.", "\"Hello! said Maya.\"", "Hello! said Maya."], ans: 0, exp: "Correct quotation punctuation." },
          { q: "Sum of angles on a straight line?", opts: ["90°", "180°", "270°", "360°"], ans: 1, exp: "Angles on a straight line = 180°." },
          { q: "How many faces does a Cube have?", opts: ["4", "6", "8", "12"], ans: 1, exp: "A cube has 6 faces." },
          { q: "Change from £15 after spending £8.30?", opts: ["£6.70", "£5.70", "£4.70", "£7.70"], ans: 0, exp: "£15.00 - £8.30 = £6.70." }
        ]
      }
    ]
  },
  {
    week: 11,
    weekTitle: "Week 11: Fractions of Quantities, Analogies & Grammar",
    days: [
      {
        day: 51,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Fractions of Quantities & Mixed Numbers",
        lesson: "To find a fraction of a quantity: divide total by denominator, multiply by numerator. Mixed numbers combine whole numbers and fractions (e.g., 1 1/2).",
        questions: [
          { q: "What is 3/5 of 60?", opts: ["30", "36", "24", "40"], ans: 1, exp: "60 ÷ 5 = 12. 12 × 3 = 36." },
          { q: "What is 4/7 of 42?", opts: ["24", "28", "18", "32"], ans: 0, exp: "42 ÷ 7 = 6. 6 × 4 = 24." },
          { q: "Convert improper fraction 7/2 to a mixed number:", opts: ["3 1/2", "2 1/2", "3 1/4", "4 1/2"], ans: 0, exp: "7 ÷ 2 = 3 with remainder 1 → 3 1/2." },
          { q: "Convert mixed number 2 3/4 to an improper fraction:", opts: ["11/4", "9/4", "8/4", "10/4"], ans: 0, exp: "(2 × 4) + 3 = 11 → 11/4." },
          { q: "What is 5/8 of 64?", opts: ["35", "40", "45", "48"], ans: 1, exp: "64 ÷ 8 = 8. 8 × 5 = 40." },
          { q: "What is 2/9 of 81?", opts: ["18", "27", "16", "24"], ans: 0, exp: "81 ÷ 9 = 9. 9 × 2 = 18." },
          { q: "Convert improper fraction 11/3 to a mixed number:", opts: ["3 2/3", "3 1/3", "4 1/3", "2 2/3"], ans: 0, exp: "11 ÷ 3 = 3 with remainder 2 → 3 2/3." },
          { q: "What is 3/10 of 200?", opts: ["50", "60", "70", "80"], ans: 1, exp: "200 ÷ 10 = 20. 20 × 3 = 60." },
          { q: "A class has 32 pupils. 3/4 walk to school. How many walk?", opts: ["20", "24", "22", "28"], ans: 1, exp: "32 ÷ 4 = 8. 8 × 3 = 24 pupils." },
          { q: "Convert mixed number 1 4/5 to an improper fraction:", opts: ["9/5", "8/5", "7/5", "10/5"], ans: 0, exp: "(1 × 5) + 4 = 9 → 9/5." }
        ]
      },
      {
        day: 52,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Analogy Relationships & Word Pairs",
        lesson: "Form a test sentence defining the exact relationship between word 1 and word 2, then apply it to the second pair.",
        questions: [
          { q: "PETAL is to FLOWER as PAGE is to:", opts: ["WORD", "BOOK", "PAPER", "PEN"], ans: 1, exp: "Petal is part of a flower; Page is part of a book." },
          { q: "PILOT is to AEROPLANE as CAPTAIN is to:", opts: ["CAR", "SHIP", "TRAIN", "BUS"], ans: 1, exp: "Pilot operates aeroplane; Captain operates ship." },
          { q: "CUB is to BEAR as KITTEN is to:", opts: ["DOG", "CAT", "FOX", "RABBIT"], ans: 1, exp: "Cub is a baby bear; Kitten is a baby cat." },
          { q: "LISTEN is to EAR as LOOK is to:", opts: ["NOSE", "EYE", "HAND", "MOUTH"], ans: 1, exp: "Listen using ear; Look using eye." },
          { q: "AUTHOR is to BOOK as ARCHITECT is to:", opts: ["PAINTING", "BUILDING", "SONG", "STATUE"], ans: 1, exp: "Author creates book; Architect designs building." },
          { q: "HEAT is to FIRE as COLD is to:", opts: ["SUN", "ICE", "WATER", "WIND"], ans: 1, exp: "Fire produces heat; Ice produces cold." },
          { q: "KNIFE is to CUT as PEN is to:", opts: ["WRITE", "DRAW", "INK", "PAPER"], ans: 0, exp: "Knife cuts; Pen writes." },
          { q: "EXPAND is to CONTRACT as INCREASE is to:", opts: ["GROW", "DECREASE", "MULTIPLY", "ADD"], ans: 1, exp: "Expand/Contract are antonyms; Increase/Decrease are antonyms." },
          { q: "FOOT is to SHOE as HAND is to:", opts: ["RING", "GLOVE", "SOCK", "ARM"], ans: 1, exp: "Shoe covers foot; Glove covers hand." },
          { q: "BIRD is to NEST as BEE is to:", opts: ["HIVE", "HONEY", "FLOWER", "WING"], ans: 0, exp: "Bird lives in nest; Bee lives in hive." }
        ]
      },
      {
        day: 53,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Perimeter & Missing Side Lengths",
        lesson: "For irregular or rectilinear shapes, find missing side lengths first by using parallel opposite sides.",
        questions: [
          { q: "A rectangle has perimeter 30cm and length 10cm. Find width:", opts: ["5cm", "10cm", "6cm", "8cm"], ans: 0, exp: "Perimeter = 2L + 2W. 30 - 20 = 10. 10 ÷ 2 = 5cm width." },
          { q: "An L-shape has horizontal sides of 8cm and 3cm. Find missing horizontal side:", opts: ["5cm", "11cm", "4cm", "6cm"], ans: 0, exp: "8 - 3 = 5cm." },
          { q: "A square has a perimeter of 48cm. What is its area?", opts: ["144 cm²", "96 cm²", "121 cm²", "100 cm²"], ans: 0, exp: "Side = 48 ÷ 4 = 12cm. Area = 12 × 12 = 144 cm²." },
          { q: "Perimeter of an isosceles triangle with sides 8cm, 8cm, and 5cm?", opts: ["21cm", "16cm", "13cm", "20cm"], ans: 0, exp: "8 + 8 + 5 = 21cm." },
          { q: "A rectangle has width 4cm and area 36 cm². Find perimeter:", opts: ["26cm", "13cm", "20cm", "18cm"], ans: 0, exp: "Length = 36 ÷ 4 = 9cm. Perimeter = 9 + 4 + 9 + 4 = 26cm." },
          { q: "Perimeter of a regular decagon with side length 6cm?", opts: ["60cm", "50cm", "70cm", "80cm"], ans: 0, exp: "10 sides × 6cm = 60cm." },
          { q: "An L-shape has vertical sides 12cm and 7cm. Find missing vertical side:", opts: ["5cm", "19cm", "6cm", "4cm"], ans: 0, exp: "12 - 7 = 5cm." },
          { q: "A square field has perimeter 100m. Length of 1 side?", opts: ["25m", "20m", "50m", "30m"], ans: 0, exp: "100 ÷ 4 = 25m." },
          { q: "Perimeter of a regular hexagon with side length 11cm?", opts: ["66cm", "55cm", "77cm", "60cm"], ans: 0, exp: "6 sides × 11cm = 66cm." },
          { q: "Rectangular room has length 7m, width 4m. Cost of skirt board at £3/m around perimeter?", opts: ["£66", "£84", "£22", "£44"], ans: 0, exp: "Perimeter = 7 + 4 + 7 + 4 = 22m. Cost = 22 × £3 = £66." }
        ]
      },
      {
        day: 54,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Letter-Number Key Transformations",
        lesson: "Match given letter keys to their numerical equivalents carefully before decoding.",
        questions: [
          { q: "If A=1, B=2, C=3... Z=26, decode 18-5-1-4:", opts: ["READ", "ROAD", "RIDE", "RUDE"], ans: 0, exp: "18=R, 5=E, 1=A, 4=D → READ." },
          { q: "Decode 2-12-21-5:", opts: ["BLUE", "BLOW", "BOLD", "BARE"], ans: 0, exp: "2=B, 12=L, 21=U, 5=E → BLUE." },
          { q: "Decode 7-1-13-5:", opts: ["GAME", "GATE", "GIVE", "GONE"], ans: 0, exp: "7=G, 1=A, 13=M, 5=E → GAME." },
          { q: "If CODE = 3-15-4-5, what is MATH (13-1-20-8)?", opts: ["13-1-20-8", "12-1-20-8", "13-2-20-8", "13-1-19-8"], ans: 0, exp: "M=13, A=1, T=20, H=8." },
          { q: "Decode 10-21-13-16:", opts: ["JUMP", "JUST", "JUNK", "JUNE"], ans: 0, exp: "10=J, 21=U, 13=M, 16=P → JUMP." },
          { q: "Decode 6-12-25:", opts: ["FLY", "FOX", "FAR", "FUN"], ans: 0, exp: "6=F, 12=L, 25=Y → FLY." },
          { q: "If A=26, B=25 (reverse code), what is Z?", opts: ["1", "26", "0", "2"], ans: 0, exp: "Z is 1 in reverse alphabetical key." },
          { q: "Decode 19-20-1-18:", opts: ["STAR", "STEM", "STOP", "STEP"], ans: 0, exp: "19=S, 20=T, 1=A, 18=R → STAR." },
          { q: "Decode 16-1-18-11:", opts: ["PARK", "PACK", "PART", "PAIL"], ans: 0, exp: "16=P, 1=A, 18=R, 11=K → PARK." },
          { q: "If SWIM = 19-23-9-13, what is FISH?", opts: ["6-9-19-8", "6-8-19-8", "5-9-19-8", "6-9-18-8"], ans: 0, exp: "F=6, I=9, S=19, H=8." }
        ]
      },
      {
        day: 55,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Adverbs, Prepositions & Sentence Structure",
        lesson: "Adverbs describe HOW, WHEN, or WHERE an action happens. Prepositions show direction, position, or time (e.g. under, over, beside, during).",
        questions: [
          { q: "Identify preposition in: 'The cat slept under the warm blanket.'", opts: ["slept", "under", "warm", "blanket"], ans: 1, exp: "Under is a preposition showing position." },
          { q: "Identify adverb in: 'She sang beautifully during the concert.'", opts: ["beautifully", "sang", "during", "concert"], ans: 0, exp: "Beautifully describes how she sang." },
          { q: "Identify preposition in: 'He walked across the busy street.'", opts: ["walked", "across", "busy", "street"], ans: 1, exp: "Across is a preposition showing movement/direction." },
          { q: "Which word is an adverb of time?", opts: ["yesterday", "softly", "everywhere", "carefully"], ans: 0, exp: "Yesterday indicates WHEN the action happened." },
          { q: "Identify preposition in: 'The book was placed on the table.'", opts: ["placed", "on", "the", "table"], ans: 1, exp: "On shows position." },
          { q: "Which sentence contains a preposition of time?", opts: ["We arrived before noon.", "He sat beside me.", "The ball rolled under.", "She ran outside."], ans: 0, exp: "'Before' indicates time relation to noon." },
          { q: "Identify adverb in: 'The train arrived late.'", opts: ["train", "arrived", "late", "the"], ans: 2, exp: "Late describes when the train arrived." },
          { q: "Identify preposition in: 'They hid behind the large oak tree.'", opts: ["hid", "behind", "large", "tree"], ans: 1, exp: "Behind shows relative position." },
          { q: "Which word is an adverb of place?", opts: ["everywhere", "quickly", "tomorrow", "happily"], ans: 0, exp: "Everywhere indicates WHERE an action occurs." },
          { q: "Choose correct preposition: 'She has been studying ____ 2 hours.'", opts: ["for", "since", "during", "at"], ans: 0, exp: "'for' specifies duration of time." }
        ]
      }
    ]
  },
  {
    week: 12,
    weekTitle: "Week 12: Order of Operations, Matrices & Milestone Check",
    days: [
      {
        day: 56,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Order of Operations (BODMAS / BIDMAS)",
        lesson: "Always carry out calculations in order: Brackets (), Orders/Indices, Division & Multiplication (left to right), Addition & Subtraction (left to right).",
        questions: [
          { q: "What is 3 + 4 × 2?", opts: ["14", "11", "10", "12"], ans: 1, exp: "Multiply first: 4 × 2 = 8. Then add: 3 + 8 = 11." },
          { q: "What is (5 + 3) × 4?", opts: ["32", "17", "23", "20"], ans: 0, exp: "Brackets first: 5 + 3 = 8. Then multiply: 8 × 4 = 32." },
          { q: "What is 10 - 2 × 3?", opts: ["24", "4", "16", "8"], ans: 1, exp: "Multiply first: 2 × 3 = 6. Then subtract: 10 - 6 = 4." },
          { q: "What is 20 ÷ (2 + 3)?", opts: ["13", "4", "7", "5"], ans: 1, exp: "Brackets first: 2 + 3 = 5. Then divide: 20 ÷ 5 = 4." },
          { q: "What is 6 + 12 ÷ 3?", opts: ["6", "10", "8", "12"], ans: 1, exp: "Divide first: 12 ÷ 3 = 4. Then add: 6 + 4 = 10." },
          { q: "What is (15 - 5) ÷ 2?", opts: ["5", "10", "12.5", "8"], ans: 0, exp: "Brackets first: 15 - 5 = 10. Then divide: 10 ÷ 2 = 5." },
          { q: "What is 2 × 3² (2 × 3 squared)?", opts: ["36", "18", "12", "24"], ans: 1, exp: "Square first: 3² = 9. Then multiply: 2 × 9 = 18." },
          { q: "What is 8 + 2 × 5 - 3?", opts: ["47", "15", "17", "20"], ans: 1, exp: "Multiply: 2×5=10. Then: 8 + 10 - 3 = 15." },
          { q: "What is 18 ÷ 3 + 4 × 2?", opts: ["20", "14", "16", "18"], ans: 1, exp: "Divide & Multiply first: 18÷3=6, 4×2=8. Then add: 6 + 8 = 14." },
          { q: "What is 50 - (10 + 5 × 2)?", opts: ["30", "40", "20", "35"], ans: 0, exp: "Inside brackets multiply first: 5×2=10, 10+10=20. Then: 50 - 20 = 30." }
        ]
      },
      {
        day: 57,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "Matrix Patterns & Grid Deductions",
        lesson: "Look for rules working both across rows (horizontally) and down columns (vertically).",
        questions: [
          { q: "Row 1: [1 circle], [2 circles]. Row 2: [1 square], [?]", opts: ["1 square", "2 squares", "3 squares", "Circle"], ans: 1, exp: "Pattern doubles shape count across row." },
          { q: "Row 1: Black, White. Row 2: White, [?]", opts: ["Grey", "Black", "White", "Striped"], ans: 1, exp: "Inverts colors across grid." },
          { q: "Grid rule: Side count increases by 1 across row. [Triangle], [Square], [?]", opts: ["Circle", "Pentagon", "Hexagon", "Octagon"], ans: 1, exp: "3 sides → 4 sides → 5 sides (Pentagon)." },
          { q: "Grid rule: Rotates 90° clockwise down column. UP → RIGHT → [?]", opts: ["LEFT", "DOWN", "UP", "DIAGONAL"], ans: 1, exp: "90° clockwise from RIGHT points DOWN." },
          { q: "Row 1: Small circle, Medium circle, Large circle. Row 2: Small square, Medium square, [?]", opts: ["Small square", "Large square", "Large circle", "Tiny square"], ans: 1, exp: "Size progresses small → medium → large." },
          { q: "Shading rule across row: White → Grey → Black. Row 2: Grey → Black → [?]", opts: ["White", "Grey", "Black", "Striped"], ans: 0, exp: "Cycles through shading: White follows Black." },
          { q: "Row 1: 2 lines, 4 lines, 6 lines. Row 2: 1 star, 2 stars, [?]", opts: ["3 stars", "4 stars", "5 stars", "6 stars"], ans: 0, exp: "Sequence adds 1 star each step." },
          { q: "Top row: Solid shape. Bottom row: Outline shape. Top: Solid Triangle. Bottom: [?]", opts: ["Solid Triangle", "Outline Triangle", "Solid Square", "Circle"], ans: 1, exp: "Bottom row converts solid into outline." },
          { q: "Row 1: Arrow UP. Row 2: Arrow DOWN. Row 3: Arrow LEFT. Row 4: [?]", opts: ["Arrow RIGHT", "Arrow UP", "Arrow DOWN", "Circle"], ans: 0, exp: "Opposite direction rule: LEFT becomes RIGHT." },
          { q: "Grid rule: Inner shape count doubles across row. [1 dot inside], [2 dots inside], [?]", opts: ["3 dots", "4 dots", "5 dots", "6 dots"], ans: 1, exp: "Doubles count: 1 → 2 → 4 dots." }
        ]
      },
      {
        day: 58,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Cloze Passages & Context Vocabulary",
        lesson: "Use context clues from surrounding sentences to determine correct word choices and grammar.",
        questions: [
          { q: "The old wooden bridge was highly ____ and unsafe to cross.", opts: ["unstable", "sturdy", "secure", "solid"], ans: 0, exp: "Unsafe to cross indicates it was unstable." },
          { q: "She made a ____ decision after considering all options.", opts: ["wise", "foolish", "hasty", "careless"], ans: 0, exp: "Considering options shows a wise decision." },
          { q: "The team celebrated their ____ after winning the final match.", opts: ["defeat", "triumph", "loss", "failure"], ans: 1, exp: "Winning a match leads to celebrating a triumph." },
          { q: "He spoke in a quiet ____ so no one else could hear.", opts: ["shout", "whisper", "bellow", "scream"], ans: 1, exp: "A quiet whisper prevents others from hearing." },
          { q: "The sun began to ____ behind distant mountains.", opts: ["rise", "descend", "ascend", "climb"], ans: 1, exp: "Behind mountains at sunset the sun descends." },
          { q: "Despite the heavy rain, they ____ on their journey.", opts: ["halted", "continued", "stopped", "abandoned"], ans: 1, exp: "'Despite' indicates they continued despite obstacles." },
          { q: "The detective searched carefully for any hidden ____.", opts: ["clues", "mistakes", "errors", "noises"], ans: 0, exp: "Detectives search for clues." },
          { q: "Her explanation was clear and easy to ____.", opts: ["understand", "confuse", "complicate", "forget"], ans: 0, exp: "A clear explanation is easy to understand." },
          { q: "The castle was built on top of a steep ____.", opts: ["cliff", "river", "valley", "lake"], ans: 0, exp: "Castles were built high on steep cliffs." },
          { q: "The audience burst into loud ____ at the end of performance.", opts: ["applause", "silence", "tears", "sleep"], ans: 0, exp: "Performances end with audience applause." }
        ]
      },
      {
        day: 59,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Prime Numbers, HCF & LCM Sprint",
        lesson: "Prime numbers under 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Remember 1 is NOT a prime number!",
        questions: [
          { q: "Which of these is a prime number?", opts: ["15", "21", "29", "33"], ans: 2, exp: "29 has only two factors: 1 and 29." },
          { q: "Find Highest Common Factor (HCF) of 18 and 24:", opts: ["3", "6", "9", "12"], ans: 1, exp: "Factors of 18: 1,2,3,6,9,18. Factors of 24: 1,2,3,4,6,8,12,24. HCF = 6." },
          { q: "Find Lowest Common Multiple (LCM) of 5 and 6:", opts: ["15", "20", "30", "60"], ans: 2, exp: "Multiples of 5: 5,10,15,20,25,30... Multiples of 6: 6,12,18,24,30... LCM = 30." },
          { q: "Is 2 prime?", opts: ["Yes", "No"], ans: 0, exp: "Yes, 2 is the smallest prime and only even prime number." },
          { q: "How many prime numbers are there between 1 and 10?", opts: ["3", "4", "5", "6"], ans: 1, exp: "Primes between 1 and 10 are: 2, 3, 5, 7 (4 numbers)." },
          { q: "Find HCF of 15 and 25:", opts: ["3", "5", "10", "15"], ans: 1, exp: "Factors of 15: 1,3,5,15. Factors of 25: 1,5,25. HCF = 5." },
          { q: "Find LCM of 4 and 10:", opts: ["20", "40", "30", "15"], ans: 0, exp: "Multiples of 4: 4,8,12,16,20... Multiples of 10: 10,20... LCM = 20." },
          { q: "Which of these is NOT a prime number?", opts: ["11", "13", "15", "17"], ans: 2, exp: "15 has factors 1, 3, 5, 15." },
          { q: "Sum of first three prime numbers (2 + 3 + 5)?", opts: ["10", "9", "8", "11"], ans: 0, exp: "2 + 3 + 5 = 10." },
          { q: "HCF of 20 and 30?", opts: ["5", "10", "15", "20"], ans: 1, exp: "Factors of 20: 1,2,4,5,10,20. Factors of 30: 1,2,3,5,6,10,15,30. HCF = 10." }
        ]
      },
      {
        day: 60,
        subject: "Mixed Review",
        badgeClass: "badge-eng",
        title: "Week 12 Milestone Assessment",
        lesson: "Consolidate all skills learned in Weeks 7 through 12 across Maths, VR, NVR, and English!",
        questions: [
          { q: "What is 3 + 4 × 2?", opts: ["14", "11", "10", "12"], ans: 1, exp: "BODMAS: 4 × 2 = 8. 3 + 8 = 11." },
          { q: "What is 3/5 of 60?", opts: ["30", "36", "24", "40"], ans: 1, exp: "60 ÷ 5 = 12. 12 × 3 = 36." },
          { q: "Convert 0.25 into a fraction in simplest form:", opts: ["1/4", "1/2", "2/5", "25/10"], ans: 0, exp: "0.25 = 1/4." },
          { q: "Identify preposition in: 'The cat slept under the table.'", opts: ["slept", "under", "cat", "table"], ans: 1, exp: "Under is a preposition." },
          { q: "PETAL is to FLOWER as PAGE is to:", opts: ["WORD", "BOOK", "PAPER", "PEN"], ans: 1, exp: "Page is part of a book." },
          { q: "Find HCF of 18 and 24:", opts: ["3", "6", "9", "12"], ans: 1, exp: "HCF = 6." },
          { q: "Area of a rectangle with length 15cm and width 4cm?", opts: ["38 cm²", "60 cm²", "19 cm²", "50 cm²"], ans: 1, exp: "15 × 4 = 60 cm²." },
          { q: "An arrow points NORTH. It turns 180°. Direction now?", opts: ["EAST", "WEST", "SOUTH", "NORTH-EAST"], ans: 2, exp: "180° turns North into South." },
          { q: "Find word OPPOSITE in meaning to FRUGAL:", opts: ["Thrifty", "Wasteful", "Poor", "Cheap"], ans: 1, exp: "Frugal opposite is Wasteful." },
          { q: "Decode 18-5-1-4 (A=1, B=2...):", opts: ["READ", "ROAD", "RIDE", "RUDE"], ans: 0, exp: "18=R, 5=E, 1=A, 4=D → READ." }
        ]
      }
    ]
  }
];
