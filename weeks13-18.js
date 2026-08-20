const weeks13_18 = [
  {
    week: 13,
    weekTitle: "Week 13: Percentages, Coordinates & Clause Structure",
    days: [
      {
        day: 61,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Percentages & Fraction Equivalents",
        lesson: "Percent means 'out of 100'. Key benchmarks: 50% = 1/2, 25% = 1/4, 75% = 3/4, 10% = 1/10, 20% = 1/5.",
        questions: [
          { q: "What is 50% of 80?", opts: ["40", "20", "30", "50"], ans: 0, exp: "50% = 1/2. 80 ÷ 2 = 40." },
          { q: "What is 25% of 48?", opts: ["12", "24", "16", "18"], ans: 0, exp: "25% = 1/4. 48 ÷ 4 = 12." },
          { q: "Convert 1/10 to a percentage:", opts: ["1%", "10%", "100%", "5%"], ans: 1, exp: "1/10 = 10/100 = 10%." },
          { q: "What is 10% of £250?", opts: ["£25", "£2.50", "£50", "£25.50"], ans: 0, exp: "10% = divide by 10. £250 ÷ 10 = £25." },
          { q: "What is 75% of 40?", opts: ["30", "20", "25", "35"], ans: 0, exp: "25% of 40 = 10. 75% = 3 × 10 = 30." },
          { q: "Convert 0.2 to a percentage:", opts: ["2%", "20%", "200%", "0.2%"], ans: 1, exp: "0.2 = 20/100 = 20%." },
          { q: "A coat costs £60. It is discounted by 20%. How much is taken off?", opts: ["£12", "£10", "£20", "£15"], ans: 0, exp: "10% = £6. 20% = 2 × £6 = £12." },
          { q: "What is 30% of 90?", opts: ["27", "30", "24", "33"], ans: 0, exp: "10% of 90 = 9. 30% = 3 × 9 = 27." },
          { q: "Convert 3/5 to a percentage:", opts: ["60%", "30%", "50%", "40%"], ans: 0, exp: "1/5 = 20%. 3/5 = 3 × 20% = 60%." },
          { q: "A test is out of 50. Sam scores 40. What percentage is this?", opts: ["80%", "70%", "85%", "75%"], ans: 0, exp: "40/50 = 80/100 = 80%." }
        ]
      },
      {
        day: 62,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Synonyms & Nuanced Vocabulary",
        lesson: "Look for words that match both formal definition and context tone.",
        questions: [
          { q: "Find the word closest in meaning to FAMISHED:", opts: ["Thirsty", "Starving", "Exhausted", "Full"], ans: 1, exp: "Famished means extremely hungry or starving." },
          { q: "Find the word closest in meaning to IMPASSIVE:", opts: ["Emotional", "Emotionless/Expressionless", "Active", "Excited"], ans: 1, exp: "Impassive means showing no emotion." },
          { q: "Find the word closest in meaning to LETHARGIC:", opts: ["Energetic", "Sluggish/Tired", "Alert", "Quick"], ans: 1, exp: "Lethargic means lacking energy or sluggish." },
          { q: "Find the word closest in meaning to METICULOUS:", opts: ["Careless", "Precise/Thorough", "Hasty", "Lazy"], ans: 1, exp: "Meticulous means showing great attention to detail." },
          { q: "Find the word closest in meaning to BENEVOLENT:", opts: ["Kind/Generous", "Cruel", "Greedy", "Selfish"], ans: 0, exp: "Benevolent means well-meaning and kindly." },
          { q: "Find the word closest in meaning to ADVERSARY:", opts: ["Friend", "Enemy/Opponent", "Partner", "Ally"], ans: 1, exp: "Adversary means one's opponent or enemy." },
          { q: "Find the word closest in meaning to CANDID:", opts: ["Deceitful", "Frank/Honest", "Shy", "Secretive"], ans: 1, exp: "Candid means truthful and straightforward." },
          { q: "Find the word closest in meaning to APPREHENSIVE:", opts: ["Confident", "Anxious/Fearful", "Happy", "Calm"], ans: 1, exp: "Apprehensive means anxious that something bad will happen." },
          { q: "Find the word closest in meaning to FEASIBLE:", opts: ["Impossible", "Possible/Workable", "Difficult", "Unlikely"], ans: 1, exp: "Feasible means possible to do easily or conveniently." },
          { q: "Select two words closest in meaning: [Pinnacle, Base, Peak, Slope]", opts: ["Pinnacle & Peak", "Base & Peak", "Pinnacle & Slope", "Base & Slope"], ans: 0, exp: "Pinnacle and Peak both mean the highest point." }
        ]
      },
      {
        day: 63,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Coordinates & Translation Grid Logic",
        lesson: "Coordinates are written (x, y) — along the corridor (x-axis) first, then up the stairs (y-axis).",
        questions: [
          { q: "Point A is at (3, 5). If translated 2 units right and 1 unit up, new position?", opts: ["(5, 6)", "(1, 4)", "(5, 4)", "(1, 6)"], ans: 0, exp: "x: 3 + 2 = 5. y: 5 + 1 = 6 → (5, 6)." },
          { q: "Point B is at (6, 8). Translated 4 units left and 3 units down. New position?", opts: ["(2, 5)", "(10, 11)", "(2, 11)", "(10, 5)"], ans: 0, exp: "x: 6 - 4 = 2. y: 8 - 3 = 5 → (2, 5)." },
          { q: "Three vertices of a square are (1,1), (1,4), and (4,1). Fourth vertex?", opts: ["(4, 4)", "(4, 3)", "(3, 4)", "(1, 1)"], ans: 0, exp: "Completing the square gives (4, 4)." },
          { q: "Point (4, 2) is reflected across vertical line x = 5. New x-coordinate?", opts: ["6", "7", "3", "8"], ans: 0, exp: "Distance from 4 to line x=5 is 1 unit right → 5 + 1 = 6." },
          { q: "What coordinate lies on the y-axis?", opts: ["(0, 4)", "(4, 0)", "(2, 2)", "(4, 4)"], ans: 0, exp: "Points on the y-axis have an x-coordinate of 0." },
          { q: "Translate (2, 7) by vector [3, -2]. New coordinates?", opts: ["(5, 5)", "(5, 9)", "(-1, 5)", "(2, 5)"], ans: 0, exp: "x: 2 + 3 = 5. y: 7 - 2 = 5 → (5, 5)." },
          { q: "Midpoint between (2, 4) and (8, 4)?", opts: ["(5, 4)", "(4, 4)", "(6, 4)", "(5, 8)"], ans: 0, exp: "Midpoint x = (2 + 8) ÷ 2 = 5. y stays 4 → (5, 4)." },
          { q: "Which point lies in the third quadrant (-x, -y)?", opts: ["(-3, -4)", "(3, -4)", "(-3, 4)", "(3, 4)"], ans: 0, exp: "Third quadrant has both negative x and negative y values." },
          { q: "Distance between (3, 2) and (3, 9)?", opts: ["7 units", "6 units", "8 units", "5 units"], ans: 0, exp: "9 - 2 = 7 units." },
          { q: "Reflection of point (2, 3) in x-axis?", opts: ["(2, -3)", "(-2, 3)", "(-2, -3)", "(3, 2)"], ans: 0, exp: "Reflection across x-axis negates y-coordinate → (2, -3)." }
        ]
      },
      {
        day: 64,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "Reflections & Grid Quad-Logic",
        lesson: "Reflections preserve distance to the mirror line. Shapes appear inverted left-to-right or top-to-bottom.",
        questions: [
          { q: "An arrow points NORTH-WEST. Reflected in vertical line, where points it?", opts: ["NORTH-EAST", "SOUTH-WEST", "SOUTH-EAST", "NORTH"], ans: 0, exp: "Vertical mirror inverts West to East → North-East." },
          { q: "An arrow points NORTH-WEST. Reflected in horizontal line, where points it?", opts: ["SOUTH-WEST", "NORTH-EAST", "SOUTH-EAST", "SOUTH"], ans: 0, exp: "Horizontal mirror inverts North to South → South-West." },
          { q: "A letter 'P' reflected across vertical mirror line looks like:", opts: ["Backwards P (q-shape)", "Inverted P (b-shape)", "P", "d-shape"], ans: 0, exp: "Flips left-to-right into a backwards P shape." },
          { q: "A shape at top-left quadrant reflected vertically ends up in:", opts: ["Top-right", "Bottom-left", "Bottom-right", "Center"], ans: 0, exp: "Vertical mirror flips left to right." },
          { q: "A shape at top-left quadrant reflected horizontally ends up in:", opts: ["Bottom-left", "Top-right", "Bottom-right", "Center"], ans: 0, exp: "Horizontal mirror flips top to bottom." },
          { q: "Letter 'M' reflected vertically across a mirror line to its right:", opts: ["M", "W", "E", "3"], ans: 0, exp: "'M' is symmetrical vertically, so it stays 'M'." },
          { q: "Letter 'M' reflected horizontally across a mirror line below it:", opts: ["W", "M", "E", "3"], ans: 0, exp: "Horizontal flip turns 'M' into 'W'." },
          { q: "Black square at (1, 4) reflected across x=3 mirror line ends at:", opts: ["(5, 4)", "(3, 4)", "(4, 4)", "(6, 4)"], ans: 0, exp: "Distance to x=3 is 2 units → 3 + 2 = 5." },
          { q: "Which letter has both vertical and horizontal symmetry?", opts: ["H", "A", "B", "F"], ans: 0, exp: "Letter H has both vertical and horizontal mirror lines." },
          { q: "A shape turns 180° then reflects vertically. Equivalent to:", opts: ["Horizontal reflection", "90° rotation", "Original position", "No change"], ans: 0, exp: "180° spin + vertical flip = horizontal reflection." }
        ]
      },
      {
        day: 65,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Main, Subordinate & Relative Clauses",
        lesson: "Main clauses make complete sense alone. Subordinate clauses rely on main clauses (e.g., introduced by although, because, if). Relative clauses start with who, which, that.",
        questions: [
          { q: "Identify subordinate clause: 'Although it rained, we played football.'", opts: ["Although it rained", "we played football", "played football", "it rained we played"], ans: 0, exp: "'Although it rained' contains the subordinate conjunction 'Although'." },
          { q: "Identify main clause: 'When bell rang, students left classroom.'", opts: ["students left classroom", "When bell rang", "bell rang", "When bell"], ans: 0, exp: "'students left classroom' makes complete sense on its own." },
          { q: "Which relative pronoun completes: 'The girl ____ won race was proud.'?", opts: ["who", "which", "whose", "where"], ans: 0, exp: "'Who' refers to human subjects." },
          { q: "Which relative pronoun completes: 'The car ____ was red drove fast.'?", opts: ["which", "who", "whom", "where"], ans: 0, exp: "'Which' or 'that' refers to non-human objects." },
          { q: "Identify conjunction in: 'She walked home because she missed bus.'", opts: ["because", "walked", "missed", "she"], ans: 0, exp: "Because is a subordinating conjunction." },
          { q: "Is 'Running through field' a main clause?", opts: ["No, it lacks subject and finite verb", "Yes, it makes full sense", "Yes, it is a compound sentence", "No, it is a relative clause"], ans: 0, exp: "It is a participle phrase, not a main clause." },
          { q: "Which sentence contains a relative clause?", opts: ["The man who wore a hat smiled.", "She ran quickly home.", "Although cold, we went out.", "He likes tea and coffee."], ans: 0, exp: "'who wore a hat' is a relative clause describing 'the man'." },
          { q: "Select subordinating conjunction:", opts: ["unless", "and", "but", "so"], ans: 0, exp: "'Unless' introduces a condition in a subordinate clause." },
          { q: "Identify main clause: 'If you work hard, you will succeed.'", opts: ["you will succeed", "If you work hard", "you work hard", "If you work"], ans: 0, exp: "'you will succeed' is the independent main clause." },
          { q: "Choose relative pronoun: 'The house ____ roof was damaged.'", opts: ["whose", "who", "which", "where"], ans: 0, exp: "'Whose' shows possession." }
        ]
      }
    ]
  },
  {
    week: 14,
    weekTitle: "Week 14: Algebra, Missing Letters & Averages",
    days: [
      {
        day: 66,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Basic Algebra & Expression Building",
        lesson: "Letters represent unknown numbers. In expressions: 3a means 3 × a; a + 4 means add 4 to a.",
        questions: [
          { q: "If x = 5, what is value of 3x + 4?", opts: ["19", "12", "17", "22"], ans: 0, exp: "(3 × 5) + 4 = 15 + 4 = 19." },
          { q: "Solve for y: 2y - 6 = 10", opts: ["8", "6", "10", "12"], ans: 0, exp: "2y = 16 → y = 8." },
          { q: "Simplify expression: a + a + a + b + b", opts: ["3a + 2b", "5ab", "3a2b", "a3 + b2"], ans: 0, exp: "Combine like terms: 3a + 2b." },
          { q: "If n = 8, what is n/2 + 3?", opts: ["7", "8", "6", "9"], ans: 0, exp: "(8 ÷ 2) + 3 = 4 + 3 = 7." },
          { q: "Solve for z: 4z = 32", opts: ["8", "6", "7", "9"], ans: 0, exp: "32 ÷ 4 = 8." },
          { q: "Simplify: 5x - 2x + 4x", opts: ["7x", "3x", "6x", "8x"], ans: 0, exp: "5 - 2 + 4 = 7 → 7x." },
          { q: "If p = 4 and q = 3, what is 2p + 3q?", opts: ["17", "14", "18", "15"], ans: 0, exp: "(2 × 4) + (3 × 3) = 8 + 9 = 17." },
          { q: "Expression for '5 more than double x':", opts: ["2x + 5", "5x + 2", "x/2 + 5", "2(x + 5)"], ans: 0, exp: "Double x is 2x; 5 more is 2x + 5." },
          { q: "Solve for k: k/3 = 9", opts: ["27", "3", "12", "18"], ans: 0, exp: "k = 9 × 3 = 27." },
          { q: "If 3m + 2 = 17, what is m?", opts: ["5", "6", "4", "7"], ans: 0, exp: "3m = 15 → m = 5." }
        ]
      },
      {
        day: 67,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Insert a Letter Puzzles",
        lesson: "Find 1 letter that completes the word on the left AND starts the word on the right.",
        questions: [
          { q: "Find letter that fits: STAM[?]ORT", opts: ["P", "K", "T", "S"], ans: 0, exp: "STAMP / PORT → P fits." },
          { q: "Find letter that fits: BLA[?]ING", opts: ["K", "S", "T", "G"], ans: 0, exp: "BLACK / KING → K fits." },
          { q: "Find letter that fits: GRA[?]EAN", opts: ["P", "S", "B", "M"], ans: 0, exp: "GRAPE / BEAN → P fits? GRA[P]E / BEAN → GRAPE / PEAN? GRA[B]E/BEAN -> GRAB / BEAN -> B fits." },
          { q: "Find letter that fits: BRA[?]EE", opts: ["K", "N", "S", "T"], ans: 0, exp: "BRAK / KEE? BRA[N]E -> BRAN / NEE? BRA[K]E -> BRAKE / KEE." },
          { q: "Find letter that fits: DIS[?]OME", opts: ["K", "H", "T", "P"], ans: 1, exp: "DISH / HOME → H fits." },
          { q: "Find letter that fits: MON[?]ING", opts: ["K", "S", "G", "T"], ans: 0, exp: "MONK / KING → K fits." },
          { q: "Find letter that fits: PLA[?]IN", opts: ["T", "N", "Y", "S"], ans: 0, exp: "PLAT / TIN → T fits." },
          { q: "Find letter that fits: SOAL[?]ARK", opts: ["P", "K", "T", "S"], ans: 0, exp: "SOAP / PARK → P fits." },
          { q: "Find letter that fits: ROA[?]OOR", opts: ["D", "T", "P", "S"], ans: 0, exp: "ROAD / DOOR → D fits." },
          { q: "Find letter that fits: PAC[?]ING", opts: ["K", "S", "T", "G"], ans: 0, exp: "PACK / KING → K fits." }
        ]
      },
      {
        day: 68,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Mean, Median, Mode & Range",
        lesson: "Mean = sum ÷ count. Median = middle value when ordered. Mode = most frequent value. Range = highest - lowest.",
        questions: [
          { q: "Find mean of: 4, 6, 8, 10, 12", opts: ["8", "6", "10", "7"], ans: 0, exp: "Sum = 40. Count = 5. 40 ÷ 5 = 8." },
          { q: "Find median of: 3, 7, 2, 9, 5", opts: ["5", "7", "3", "2"], ans: 0, exp: "Order set: 2, 3, 5, 7, 9. Middle = 5." },
          { q: "Find mode of: 2, 4, 4, 6, 7, 4, 9", opts: ["4", "6", "2", "7"], ans: 0, exp: "4 occurs most frequently (3 times)." },
          { q: "Find range of: 12, 5, 22, 18, 9", opts: ["17", "12", "22", "15"], ans: 0, exp: "Highest - lowest = 22 - 5 = 17." },
          { q: "Find mean of 10, 15, 20, 35:", opts: ["20", "15", "25", "18"], ans: 0, exp: "Sum = 80. 80 ÷ 4 = 20." },
          { q: "Find median of: 11, 15, 17, 21, 25, 29", opts: ["19", "17", "21", "18"], ans: 0, exp: "Middle pair: 17 & 21. Average = (17+21) ÷ 2 = 19." },
          { q: "If mean of 4 numbers is 10, what is their total sum?", opts: ["40", "30", "20", "50"], ans: 0, exp: "Mean × count = 10 × 4 = 40." },
          { q: "Find range of set: 100, 45, 80, 12, 65", opts: ["88", "100", "78", "90"], ans: 0, exp: "100 - 12 = 88." },
          { q: "Modes of set: 3, 5, 5, 8, 9, 9, 11?", opts: ["5 and 9", "5 only", "9 only", "None"], ans: 0, exp: "Both 5 and 9 appear twice (bimodal)." },
          { q: "Find mean of: 1, 2, 3, 4, 5, 6, 7", opts: ["4", "3.5", "5", "3"], ans: 0, exp: "Sum = 28. 28 ÷ 7 = 4." }
        ]
      },
      {
        day: 69,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "3D Cubes & Spatial Fold Nets",
        lesson: "When folding a net, adjacent faces meet along an edge, while opposite faces never touch.",
        questions: [
          { q: "How many total face edges meet at a single vertex on a 3D cube?", opts: ["3", "4", "2", "6"], ans: 0, exp: "Exactly 3 edges intersect at every corner (vertex)." },
          { q: "In a net of a cube, face A is separated from face B by 1 square. Position?", opts: ["Opposite each other", "Adjacent to each other", "Diagonal", "Bottom-top"], ans: 0, exp: "Faces separated by 1 square fold into opposite sides." },
          { q: "A cube net has face markings: 1, 2, 3, 4, 5, 6. If 1 is top, which face is bottom?", opts: ["3 (if opposite)", "2", "6", "Depends on layout"], ans: 0, exp: "The face directly opposite 1 becomes the bottom base." },
          { q: "Which 3D shape has 5 faces, 8 edges, and 5 vertices?", opts: ["Square-based pyramid", "Triangular prism", "Tetrahedron", "Cube"], ans: 0, exp: "A square-based pyramid has 1 square + 4 triangles = 5 faces." },
          { q: "How many faces does a tetrahedron have?", opts: ["4", "5", "6", "8"], ans: 0, exp: "A tetrahedron is a triangular pyramid with 4 faces." },
          { q: "Which 2D net forms a cone?", opts: ["1 sector + 1 circle", "1 rectangle + 2 circles", "4 triangles", "2 triangles + 3 rectangles"], ans: 0, exp: "A cone net consists of a circular sector and a circular base." },
          { q: "How many vertices does a triangular prism have?", opts: ["6", "5", "8", "12"], ans: 0, exp: "2 triangular ends with 3 vertices each = 6 vertices." },
          { q: "Opposite faces on a standard 6-sided die sum to:", opts: ["7", "6", "8", "10"], ans: 0, exp: "Standard dice always sum to 7 on opposite faces." },
          { q: "How many total edges on a triangular prism?", opts: ["9", "6", "8", "12"], ans: 0, exp: "3 base + 3 top + 3 vertical = 9 edges." },
          { q: "Which face cannot be adjacent to top face when folded?", opts: ["Opposite face", "Side face", "Front face", "Back face"], ans: 0, exp: "Opposite faces can never be adjacent." }
        ]
      },
      {
        day: 70,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Confusing Homophones & Precision Words",
        lesson: "Practice distinguishing tricky pairs: practice (noun) vs practise (verb), advice (noun) vs advise (verb).",
        questions: [
          { q: "Fill in blank: 'Doctor gave good ____.'", opts: ["advice", "advise", "advises", "adviced"], ans: 0, exp: "Advice (with 'c') is the noun." },
          { q: "Fill in blank: 'I strongly ____ you to study.'", opts: ["advise", "advice", "advising", "adviced"], ans: 0, exp: "Advise (with 's') is the action verb." },
          { q: "Fill in blank: 'He went to football ____.'", opts: ["practice", "practise", "practicing", "practised"], ans: 0, exp: "Practice (with 'c') is the noun." },
          { q: "Fill in blank: 'She needs to ____ piano daily.'", opts: ["practise", "practice", "practicing", "practiced"], ans: 0, exp: "Practise (with 's') is the verb." },
          { q: "Fill in blank: 'The sun will ____ in east.'", opts: ["rise", "raise", "rays", "raze"], ans: 0, exp: "Rise means go up independently." },
          { q: "Fill in blank: 'Please ____ your hand.'", opts: ["raise", "rise", "rays", "raze"], ans: 0, exp: "Raise means lift an object or hand." },
          { q: "Fill in blank: 'The medication had a positive ____.'", opts: ["effect", "affect", "efect", "afect"], ans: 0, exp: "Effect is a noun meaning result." },
          { q: "Fill in blank: 'Loud noise will ____ your sleep.'", opts: ["affect", "effect", "afect", "efect"], ans: 0, exp: "Affect is a verb meaning to influence." },
          { q: "Fill in blank: 'The ship sailed across the ____.'", opts: ["strait", "straight", "strate", "strayt"], ans: 0, exp: "Strait is a narrow channel of water." },
          { q: "Fill in blank: 'Draw a ____ line with a ruler.'", opts: ["straight", "strait", "strate", "strayt"], ans: 0, exp: "Straight means without curves." }
        ]
      }
    ]
  },
  {
    week: 15,
    weekTitle: "Week 15: Volume, Probability & Active/Passive Voice",
    days: [
      {
        day: 71,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Volume of Cuboids & Capacity",
        lesson: "Volume of cuboid = Length × Width × Height (measured in cm³ or m³). 1 Litre = 1000 ml = 1000 cm³.",
        questions: [
          { q: "Volume of cuboid length 5cm, width 3cm, height 4cm?", opts: ["60 cm³", "12 cm³", "47 cm³", "50 cm³"], ans: 0, exp: "Volume = 5 × 3 × 4 = 60 cm³." },
          { q: "Volume of cube with side length 4cm?", opts: ["64 cm³", "16 cm³", "48 cm³", "32 cm³"], ans: 0, exp: "4 × 4 × 4 = 64 cm³." },
          { q: "Convert 2.5 Litres to millilitres:", opts: ["2500 ml", "250 ml", "25000 ml", "25 ml"], ans: 0, exp: "2.5 × 1000 = 2500 ml." },
          { q: "A tank holds 3000 cm³ of water. Capacity in Litres?", opts: ["3 Litres", "30 Litres", "0.3 Litres", "300 Litres"], ans: 0, exp: "3000 ÷ 1000 = 3 Litres." },
          { q: "Cuboid volume is 120 cm², base area is 30 cm². Find height:", opts: ["4cm", "5cm", "6cm", "3cm"], ans: 0, exp: "Height = Volume ÷ Base Area = 120 ÷ 30 = 4cm." },
          { q: "Volume of box 10cm by 2cm by 6cm?", opts: ["120 cm³", "18 cm³", "60 cm³", "100 cm³"], ans: 0, exp: "10 × 2 × 6 = 120 cm³." },
          { q: "Cube volume is 27 cm³. Length of 1 edge?", opts: ["3cm", "9cm", "4.5cm", "6cm"], ans: 0, exp: "3 × 3 × 3 = 27, so edge = 3cm." },
          { q: "Convert 750 ml to Litres:", opts: ["0.75 L", "7.5 L", "0.075 L", "75 L"], ans: 0, exp: "750 ÷ 1000 = 0.75 L." },
          { q: "Water tank length 2m, width 1m, height 1.5m. Volume?", opts: ["3 m³", "4.5 m³", "2.5 m³", "6 m³"], ans: 0, exp: "2 × 1 × 1.5 = 3 m³." },
          { q: "How many 250 ml glasses can be filled from a 2 Litre jug?", opts: ["8", "6", "4", "10"], ans: 0, exp: "2 L = 2000 ml. 2000 ÷ 250 = 8." }
        ]
      },
      {
        day: 72,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Number-Word Codes & Deciphering",
        lesson: "Compare coded word sets to identify matching letter-number associations.",
        questions: [
          { q: "If CAT = 3120 and MAT = 13120, what is CODE for M?", opts: ["13", "3", "1", "20"], ans: 0, exp: "Comparing words shows M = 13." },
          { q: "If DOG = 4157, what is code for O?", opts: ["15", "4", "7", "1"], ans: 0, exp: "D=4, O=15, G=7." },
          { q: "If PEN = 753 and PIN = 713, what number represents I?", opts: ["1", "5", "7", "3"], ans: 0, exp: "Difference between PEN and PIN is E=5 and I=1." },
          { q: "If RATS = 4123 and STAR = 3214, what number represents S?", opts: ["3", "4", "1", "2"], ans: 0, exp: "S is last in RATS (3) and first in STAR (3)." },
          { q: "If LION = 9876 and LINE = 9865, what represents O?", opts: ["7", "6", "8", "5"], ans: 0, exp: "Comparing letters gives O = 7." },
          { q: "If 5432 = BEAD, what word is 2345?", opts: ["DAEB", "DABE", "BADE", "EBAD"], ans: 0, exp: "5=B, 4=E, 3=A, 2=D → 2(D)3(A)4(E)5(B) = DAEB." },
          { q: "If 1234 = TRAP, what is 4321?", opts: ["PART", "TARP", "PRAT", "RATP"], ans: 0, exp: "Reverse digits reverses word → PART." },
          { q: "If MAP = 10-5-20, what is PAM?", opts: ["20-5-10", "10-20-5", "5-10-20", "20-10-5"], ans: 0, exp: "Reverse letter order → 20-5-10." },
          { q: "If BLUE = 1234 and BLOW = 1256, what number represents O?", opts: ["5", "3", "4", "6"], ans: 0, exp: "O corresponds to 5th position digit 5." },
          { q: "If 876 = HOT, what is 678?", opts: ["TOH", "THO", "HTO", "OTH"], ans: 0, exp: "6=T, 7=O, 8=H → TOH." }
        ]
      },
      {
        day: 73,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Probability Scale & Single-Event Outcomes",
        lesson: "Probability = (number of favorable outcomes) ÷ (total possible outcomes). Expressed as fractions or decimals between 0 (impossible) and 1 (certain).",
        questions: [
          { q: "Fair 6-sided die rolled. Probability of rolling a 4?", opts: ["1/6", "4/6", "1/2", "1/4"], ans: 0, exp: "One 4 out of 6 sides = 1/6." },
          { q: "Probability of rolling an EVEN number on a 6-sided die?", opts: ["1/2", "1/3", "1/6", "2/3"], ans: 0, exp: "3 even numbers (2,4,6) out of 6 → 3/6 = 1/2." },
          { q: "Bag contains 3 red, 5 blue, 2 green marbles. Probability of picking blue?", opts: ["1/2", "3/10", "1/5", "5/8"], ans: 0, exp: "Total = 10. Blue = 5/10 = 1/2." },
          { q: "Probability of picking a RED marble from same bag (3 red out of 10)?", opts: ["3/10", "1/2", "3/8", "1/3"], ans: 0, exp: "3 favorable out of 10 = 3/10." },
          { q: "Probability of landing on HEADS when flipping a fair coin?", opts: ["1/2", "1", "0", "1/4"], ans: 0, exp: "1 favorable outcome out of 2 sides = 1/2." },
          { q: "Probability of rolling a 7 on a standard 6-sided die?", opts: ["0 (Impossible)", "1/6", "1 (Certain)", "1/7"], ans: 0, exp: "A standard die has numbers 1-6, so rolling a 7 is impossible (0)." },
          { q: "Spinner has 8 equal sections numbered 1 to 8. Probability of landing on >5?", opts: ["3/8", "5/8", "1/2", "1/4"], ans: 0, exp: "Numbers >5 are 6, 7, 8 (3 outcomes) → 3/8." },
          { q: "Probability of drawing an Ace from standard 52-card deck?", opts: ["1/13", "4/13", "1/52", "1/4"], ans: 0, exp: "4 Aces in 52 cards → 4/52 = 1/13." },
          { q: "If probability of rain is 0.3, what is probability of NO rain?", opts: ["0.7", "0.3", "0.5", "0.8"], ans: 0, exp: "Total probability = 1. 1 - 0.3 = 0.7." },
          { q: "Bag has 10 black cards. Probability of drawing a black card?", opts: ["1 (Certain)", "0", "1/2", "1/10"], ans: 0, exp: "All cards are black, so probability is 1 (100% certain)." }
        ]
      },
      {
        day: 74,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "Odd One Out & Shape Analogies",
        lesson: "Look for subtle details: line symmetry count, direction of shading, rotational alignment, and nested shapes.",
        questions: [
          { q: "Which shape is odd one out: Square, Rectangle, Rhombus, Circle?", opts: ["Circle", "Square", "Rectangle", "Rhombus"], ans: 0, exp: "Circle has curved side; others are 4-sided straight quadrilaterals." },
          { q: "Odd shape: Equilateral Triangle, Square, Regular Hexagon, Scalene Triangle?", opts: ["Scalene Triangle", "Equilateral Triangle", "Square", "Regular Hexagon"], ans: 0, exp: "Scalene is irregular; others are regular polygons with equal sides." },
          { q: "Triangle is to 3 as Octagon is to:", opts: ["8", "6", "7", "10"], ans: 0, exp: "Number of sides." },
          { q: "Square is to Cube as Circle is to:", opts: ["Sphere", "Cylinder", "Cone", "Oval"], ans: 0, exp: "2D shape to its 3D equivalent." },
          { q: "Odd item: Cube, Cuboid, Pyramid, Triangle", opts: ["Triangle", "Cube", "Cuboid", "Pyramid"], ans: 0, exp: "Triangle is 2D; others are 3D solids." },
          { q: "Arrow pointing UP is to Arrow DOWN as Arrow LEFT is to:", opts: ["Arrow RIGHT", "Arrow UP", "Arrow DOWN", "Diagonal"], ans: 0, exp: "Opposite direction relationship." },
          { q: "Odd item: 90° angle, 45° angle, 180° angle, 60° angle", opts: ["180° angle", "90° angle", "45° angle", "60° angle"], ans: 0, exp: "180° forms a straight line; others are acute/right angles." },
          { q: "Solid Circle is to Outline Circle as Solid Square is to:", opts: ["Outline Square", "Solid Triangle", "Outline Circle", "Dot"], ans: 0, exp: "Convert solid fill to line outline." },
          { q: "Odd item: Cylinder, Cone, Sphere, Prism", opts: ["Prism", "Cylinder", "Cone", "Sphere"], ans: 0, exp: "Prism has only flat polygon faces; others have curved surfaces." },
          { q: "Pentagon is to 5 sides as Nonagon is to:", opts: ["9 sides", "7 sides", "8 sides", "10 sides"], ans: 0, exp: "Nonagon has 9 sides." }
        ]
      },
      {
        day: 75,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Active vs Passive Voice",
        lesson: "Active voice: Subject does action ('The dog chased the ball'). Passive voice: Subject receives action ('The ball was chased by the dog').",
        questions: [
          { q: "Which sentence is written in PASSIVE voice?", opts: ["The cake was baked by Mum.", "Mum baked the cake.", "Mum is baking a cake.", "Mum will bake a cake."], ans: 0, exp: "Subject (cake) receives action from 'by Mum'." },
          { q: "Which sentence is written in ACTIVE voice?", opts: ["The boy kicked the ball.", "The ball was kicked by the boy.", "The ball had been kicked.", "A ball was being kicked."], ans: 0, exp: "Subject (boy) performs action directly." },
          { q: "Convert to passive: 'The cat caught the mouse.'", opts: ["The mouse was caught by the cat.", "The cat was caught by the mouse.", "The mouse caught the cat.", "The cat is catching mouse."], ans: 0, exp: "Object 'mouse' becomes subject in passive voice." },
          { q: "Convert to active: 'The letter was written by Sarah.'", opts: ["Sarah wrote the letter.", "The letter wrote Sarah.", "Sarah was writing letter.", "Sarah writes letters."], ans: 0, exp: "Sarah (doer) becomes subject of active verb 'wrote'." },
          { q: "Identify passive verb phrase: 'The window was broken by wind.'", opts: ["was broken", "window", "by wind", "the window"], ans: 0, exp: "'was broken' is passive verb structure (was + past participle)." },
          { q: "Which sentence is ACTIVE?", opts: ["Chef cooked a meal.", "A meal was cooked by chef.", "Meal was prepared.", "Dish was served."], ans: 0, exp: "Chef performs action directly." },
          { q: "Which sentence is PASSIVE?", opts: ["Trophy was won by team.", "Team won the trophy.", "Team celebrates win.", "Team plays well."], ans: 0, exp: "'was won by team' indicates passive construction." },
          { q: "Why use passive voice?", opts: ["To focus on action/receiver rather than doer", "To make sentence shorter", "To make sentence simpler", "To use more adjectives"], ans: 0, exp: "Passive voice shifts focus to the receiver of the action." },
          { q: "Convert to passive: 'Lightning struck the tree.'", opts: ["The tree was struck by lightning.", "Lightning was struck by tree.", "Tree struck lightning.", "Lightning strikes tree."], ans: 0, exp: "Passive form flips subject and object." },
          { q: "Is 'The homework was completed' active or passive?", opts: ["Passive (doer omitted)", "Active", "Neither", "Both"], ans: 0, exp: "Passive voice with agent omitted ('by the student')." }
        ]
      }
    ]
  },
  {
    week: 16,
    weekTitle: "Week 16: Ratio, Line Graphs & Double Meanings",
    days: [
      {
        day: 76,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Proportions, Scale & Ratio Problems",
        lesson: "In ratios: sum all parts to find the total value of 1 share.",
        questions: [
          { q: "Share £40 in ratio 3:2. Larger share?", opts: ["£24", "£16", "£20", "£25"], ans: 0, exp: "3+2=5 parts. £40 ÷ 5 = £8. 3 × £8 = £24." },
          { q: "Ratio of apples to oranges is 4:1. Total 25 fruits. How many apples?", opts: ["20", "15", "10", "5"], ans: 0, exp: "4+1=5 parts. 25 ÷ 5 = 5. Apples = 4 × 5 = 20." },
          { q: "Map scale 1cm = 25km. Map distance 3cm = real distance?", opts: ["75km", "50km", "100km", "60km"], ans: 0, exp: "3 × 25km = 75km." },
          { q: "Recipe for 6 biscuits uses 150g flour. How much flour for 10 biscuits?", opts: ["250g", "200g", "300g", "180g"], ans: 0, exp: "1 biscuit = 150 ÷ 6 = 25g. 10 × 25g = 250g." },
          { q: "Share 35 sweets in ratio 2:3. Smaller share?", opts: ["14", "21", "15", "12"], ans: 0, exp: "2+3=5 parts. 35 ÷ 5 = 7. Smaller share = 2 × 7 = 14." },
          { q: "Ratio of boys to girls is 5:4. If 20 girls, how many boys?", opts: ["25", "20", "16", "30"], ans: 0, exp: "4 parts = 20 girls → 1 part = 5. Boys = 5 × 5 = 25." },
          { q: "Scale 1:100. A model car length 5cm = real car length?", opts: ["500cm (5m)", "50cm", "5m", "50m"], ans: 0, exp: "5cm × 100 = 500cm = 5m." },
          { q: "Concrete mixed in ratio cement:sand 1:3. Total 20kg. Cement needed?", opts: ["5kg", "15kg", "10kg", "4kg"], ans: 0, exp: "1+3=4 parts. 20 ÷ 4 = 5kg." },
          { q: "3 builders take 4 days to build wall. How long for 6 builders at same speed?", opts: ["2 days", "8 days", "6 days", "3 days"], ans: 0, exp: "Inverse proportion: Double builders = half the time. 4 ÷ 2 = 2 days." },
          { q: "Share £50 in ratio 1:4. Larger share?", opts: ["£40", "£10", "£30", "£35"], ans: 0, exp: "1+4=5 parts. £50 ÷ 5 = £10. 4 × £10 = £40." }
        ]
      },
      {
        day: 77,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Homographs & Double Meaning Words",
        lesson: "Homographs are spelled identically but have different meanings in different contexts (e.g. BARK = tree skin or dog sound).",
        questions: [
          { q: "Which word fits both definitions: 'A outer layer of tree' AND 'A dog sound'?", opts: ["BARK", "TRUNK", "LEAF", "HOWL"], ans: 0, exp: "Bark refers to both tree covering and dog noise." },
          { q: "Which word fits both: 'An instrument to tell time' AND 'To observe closely'?", opts: ["WATCH", "CLOCK", "TIMER", "LOOK"], ans: 0, exp: "Watch is a timepiece and a verb meaning observe." },
          { q: "Which word fits both: 'A flying mammal' AND 'Equipment used in cricket'?", opts: ["BAT", "BALL", "CLUB", "BIRD"], ans: 0, exp: "Bat is both animal and sports gear." },
          { q: "Which word fits both: 'A place to store money' AND 'The side of a river'?", opts: ["BANK", "VAULT", "SIDE", "STREAM"], ans: 0, exp: "Bank refers to financial institution and river bank." },
          { q: "Which word fits both: 'A light wooden box' AND 'To engage in boxing'?", opts: ["BOX", "CRATE", "CASE", "FIGHT"], ans: 0, exp: "Box means container or sport." },
          { q: "Which word fits both: 'A currency unit' AND 'To hit heavily'?", opts: ["POUND", "DOLLAR", "BEAT", "STRIKE"], ans: 0, exp: "Pound is money and a heavy hit." },
          { q: "Which word fits both: 'A season of year' AND 'A coiled metal wire'?", opts: ["SPRING", "SUMMER", "COIL", "AUTUMN"], ans: 0, exp: "Spring means season and elastic coil." },
          { q: "Which word fits both: 'A playing card rank' AND 'An expert at something'?", opts: ["ACE", "KING", "PRO", "CARD"], ans: 0, exp: "Ace means card or expert." },
          { q: "Which word fits both: 'To drop leaves' AND 'A building for storage'?", opts: ["SHED", "BARN", "DROP", "HUT"], ans: 0, exp: "Shed means discard leaves or storage building." },
          { q: "Which word fits both: 'A ring of metal' AND 'A group of musicians'?", opts: ["BAND", "RING", "GROUP", "HOOP"], ans: 0, exp: "Band is a loop/stripe and a musical group." }
        ]
      },
      {
        day: 78,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Line Graphs & Data Analysis",
        lesson: "Read line graphs carefully: check x-axis (independent variable/time) and y-axis scale increments.",
        questions: [
          { q: "Temperature graph: 9 AM = 12°C, 12 PM = 18°C. Rise in temperature?", opts: ["6°C", "8°C", "5°C", "7°C"], ans: 0, exp: "18°C - 12°C = 6°C." },
          { q: "Graph shows distance walked: 1 hour = 4 km, 3 hours = 12 km. Speed?", opts: ["4 km/h", "3 km/h", "6 km/h", "5 km/h"], ans: 0, exp: "4 km ÷ 1 hour = 4 km/h." },
          { q: "At what time was temperature highest if peak is 22°C at 2 PM?", opts: ["2 PM", "12 PM", "4 PM", "10 AM"], ans: 0, exp: "Peak height on y-axis occurs at 2 PM on x-axis." },
          { q: "Between which hours was temperature constant (horizontal line)?", opts: ["1 PM to 2 PM", "9 AM to 10 AM", "3 PM to 5 PM", "None"], ans: 0, exp: "A horizontal line segment on a line graph indicates no change." },
          { q: "Pie chart: Half section represents apples. What percentage?", opts: ["50%", "25%", "75%", "100%"], ans: 0, exp: "Half = 50%." },
          { q: "Pie chart: Quarter section represents bananas. Angle of sector?", opts: ["90°", "180°", "45°", "60°"], ans: 0, exp: "1/4 of 360° full circle = 90°." },
          { q: "Pie chart represents 40 children. 1/4 choose blue. How many children?", opts: ["10", "20", "15", "5"], ans: 0, exp: "1/4 of 40 = 10 children." },
          { q: "Line graph drops from 20 to 12. Amount of decrease?", opts: ["8", "10", "6", "12"], ans: 0, exp: "20 - 12 = 8." },
          { q: "Bar graph axis increment goes 0, 5, 10, 15. Bar reaches halfway between 10 & 15. Value?", opts: ["12.5", "12", "13", "11"], ans: 0, exp: "Midpoint between 10 and 15 = 12.5." },
          { q: "Total degrees represented by a whole pie chart?", opts: ["360°", "180°", "90°", "270°"], ans: 0, exp: "A complete circle equals 360 degrees." }
        ]
      },
      {
        day: 79,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "Matrix Rotations & Grid Analogies",
        lesson: "Look for combined step changes across grid columns and rows (e.g. rotate 90° + change color).",
        questions: [
          { q: "Row 1: Arrow UP. Row 2: Arrow RIGHT. Row 3: [?]", opts: ["Arrow DOWN", "Arrow LEFT", "Arrow UP", "Circle"], ans: 0, exp: "Sequential 90° clockwise turns: UP → RIGHT → DOWN." },
          { q: "Row 1: White Square, Grey Square, Black Square. Row 2: White Circle, Grey Circle, [?]", opts: ["Black Circle", "Grey Circle", "White Circle", "Black Square"], ans: 0, exp: "Shading sequence stays consistent: White → Grey → Black." },
          { q: "Grid rule: Add 1 dot inside shape across row. [1 dot], [2 dots], [?]", opts: ["3 dots", "4 dots", "2 dots", "0 dots"], ans: 0, exp: "Increases by 1 dot per step." },
          { q: "Grid rule: Flip upside down down column. [Triangle UP], [?]", opts: ["Triangle DOWN", "Triangle LEFT", "Square", "Circle"], ans: 0, exp: "Vertical inversion flips UP to DOWN." },
          { q: "Row 1: 3 sides (Triangle). Row 2: 4 sides (Square). Row 3: [?]", opts: ["5 sides (Pentagon)", "6 sides", "Circle", "8 sides"], ans: 0, exp: "Sequential polygon side progression: 3 → 4 → 5." },
          { q: "Top row: 2 shapes. Middle row: 3 shapes. Bottom row: [?]", opts: ["4 shapes", "5 shapes", "3 shapes", "2 shapes"], ans: 0, exp: "Quantity increases by 1 each row down." },
          { q: "Row 1: Arrow LEFT. Row 2: Arrow RIGHT. Row 3: Arrow UP. Row 4: [?]", opts: ["Arrow DOWN", "Arrow LEFT", "Arrow RIGHT", "Circle"], ans: 0, exp: "Pairs of opposite directions: LEFT/RIGHT, UP/DOWN." },
          { q: "Grid rule: Outer shape becomes inner shape in next cell.", opts: ["Outer shape moves inside", "Shape disappears", "Colors invert", "No change"], ans: 0, exp: "Pattern transfers boundary shape to internal element." },
          { q: "Shading rotates clockwise: Top-left → Top-right → Bottom-right → [?]", opts: ["Bottom-left", "Top-left", "Center", "Outside"], ans: 0, exp: "Clockwise quadrant progression." },
          { q: "Size progression across row: Small → Medium → [?]", opts: ["Large", "Tiny", "Huge", "Medium"], ans: 0, exp: "Sequential size scaling." }
        ]
      },
      {
        day: 80,
        subject: "Mixed Review",
        badgeClass: "badge-eng",
        title: "Week 16 Milestone Assessment",
        lesson: "Consolidate your knowledge across percentages, algebra, probability, and word meanings!",
        questions: [
          { q: "What is 25% of 48?", opts: ["12", "24", "16", "18"], ans: 0, exp: "48 ÷ 4 = 12." },
          { q: "If x = 5, find 3x + 4:", opts: ["19", "12", "17", "22"], ans: 0, exp: "(3×5) + 4 = 19." },
          { q: "Mean of 4, 6, 8, 10, 12?", opts: ["8", "6", "10", "7"], ans: 0, exp: "40 ÷ 5 = 8." },
          { q: "Volume of cuboid 5cm by 3cm by 4cm?", opts: ["60 cm³", "12 cm³", "47 cm³", "50 cm³"], ans: 0, exp: "5 × 3 × 4 = 60 cm³." },
          { q: "Probability of rolling an EVEN number on 6-sided die?", opts: ["1/2", "1/3", "1/6", "2/3"], ans: 0, exp: "3/6 = 1/2." },
          { q: "Share £40 in ratio 3:2. Larger share?", opts: ["£24", "£16", "£20", "£25"], ans: 0, exp: "3 × £8 = £24." },
          { q: "Which word fits both: 'tree skin' AND 'dog sound'?", opts: ["BARK", "TRUNK", "LEAF", "HOWL"], ans: 0, exp: "BARK." },
          { q: "Which sentence is PASSIVE?", opts: ["The cake was baked by Mum.", "Mum baked the cake.", "Mum bakes cake.", "Mum will bake."], ans: 0, exp: "The cake was baked by Mum." },
          { q: "Point (3, 5) translated 2 right and 1 up?", opts: ["(5, 6)", "(1, 4)", "(5, 4)", "(1, 6)"], ans: 0, exp: "(3+2, 5+1) = (5, 6)." },
          { q: "Synonym for FAMISHED:", opts: ["Starving", "Thirsty", "Tired", "Full"], ans: 0, exp: "Famished = Starving." }
        ]
      }
    ]
  },
  {
    week: 17,
    weekTitle: "Week 17: Prime Factors, Distance-Speed & Author Tone",
    days: [
      {
        day: 81,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Square Numbers, Cube Numbers & Prime Factors",
        lesson: "Square numbers: n × n (1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144). Cube numbers: n × n × n (1, 8, 27, 64, 125).",
        questions: [
          { q: "What is 9 squared (9²)?", opts: ["81", "18", "72", "90"], ans: 0, exp: "9 × 9 = 81." },
          { q: "What is 5 cubed (5³)?", opts: ["125", "25", "15", "75"], ans: 0, exp: "5 × 5 × 5 = 125." },
          { q: "Square root of 144 (√144)?", opts: ["12", "14", "11", "13"], ans: 0, exp: "12 × 12 = 144." },
          { q: "Which of these is BOTH a square number and a cube number?", opts: ["64", "16", "27", "81"], ans: 0, exp: "64 = 8² and 4³." },
          { q: "What is 12²?", opts: ["144", "124", "148", "132"], ans: 0, exp: "12 × 12 = 144." },
          { q: "Prime factorization of 12?", opts: ["2 × 2 × 3", "2 × 6", "3 × 4", "2 × 3 × 3"], ans: 0, exp: "12 = 4 × 3 = 2 × 2 × 3 (all factors prime)." },
          { q: "What is 4³?", opts: ["64", "16", "32", "12"], ans: 0, exp: "4 × 4 × 4 = 64." },
          { q: "Square root of 81?", opts: ["9", "8", "7", "6"], ans: 0, exp: "9 × 9 = 81." },
          { q: "Prime factorization of 20?", opts: ["2 × 2 × 5", "4 × 5", "2 × 10", "2 × 5 × 5"], ans: 0, exp: "20 = 4 × 5 = 2 × 2 × 5." },
          { q: "What is 11² + 3²?", opts: ["130", "121", "133", "140"], ans: 0, exp: "121 + 9 = 130." }
        ]
      },
      {
        day: 82,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Advanced Antonyms & formal Vocab",
        lesson: "Identify formal words with exact opposite meanings.",
        questions: [
          { q: "Find word OPPOSITE in meaning to HOSTILE:", opts: ["Friendly", "Aggressive", "Bitter", "Unkind"], ans: 0, exp: "Hostile means unfriendly; opposite is Friendly." },
          { q: "Find word OPPOSITE in meaning to MUNDANE:", opts: ["Extraordinary", "Boring", "Ordinary", "Dull"], ans: 0, exp: "Mundane means dull/ordinary; opposite is Extraordinary." },
          { q: "Find word OPPOSITE in meaning to COURAGEOUS:", opts: ["Cowardly", "Brave", "Fearless", "Bold"], ans: 0, exp: "Courageous means brave; opposite is Cowardly." },
          { q: "Find word OPPOSITE in meaning to OBSCURE:", opts: ["Clear/Famous", "Hidden", "Dark", "Unknown"], ans: 0, exp: "Obscure means unclear/unknown; opposite is Clear." },
          { q: "Find word OPPOSITE in meaning to DIMINISH:", opts: ["Increase", "Reduce", "Shrink", "Lessen"], ans: 0, exp: "Diminish means shrink; opposite is Increase." },
          { q: "Find word OPPOSITE in meaning to ABUNANT:", opts: ["Scarce", "Plentiful", "Heavy", "Huge"], ans: 0, exp: "Abundant means plentiful; opposite is Scarce." },
          { q: "Find word OPPOSITE in meaning to CONCEAL:", opts: ["Reveal", "Hide", "Cover", "Disguise"], ans: 0, exp: "Conceal means hide; opposite is Reveal." },
          { q: "Find word OPPOSITE in meaning to RIGID:", opts: ["Flexible", "Stiff", "Hard", "Solid"], ans: 0, exp: "Rigid means stiff; opposite is Flexible." },
          { q: "Find word OPPOSITE in meaning to EXPAND:", opts: ["Contract", "Grow", "Enlarge", "Extend"], ans: 0, exp: "Expand means enlarge; opposite is Contract." },
          { q: "Select two words OPPOSITE in meaning: [Lenient, Strict, Soft, Kind]", opts: ["Lenient & Strict", "Lenient & Soft", "Strict & Kind", "Soft & Kind"], ans: 0, exp: "Lenient (tolerant) is the opposite of Strict." }
        ]
      },
      {
        day: 83,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Distance, Speed & Time Formulae",
        lesson: "Formulae: Distance = Speed × Time; Speed = Distance ÷ Time; Time = Distance ÷ Speed.",
        questions: [
          { q: "A car travels at 60 mph for 3 hours. Distance travelled?", opts: ["180 miles", "120 miles", "20 miles", "150 miles"], ans: 0, exp: "Distance = 60 × 3 = 180 miles." },
          { q: "A cyclist travels 30 miles in 2 hours. Average speed?", opts: ["15 mph", "60 mph", "20 mph", "10 mph"], ans: 0, exp: "Speed = 30 ÷ 2 = 15 mph." },
          { q: "A train travels 120 miles at 40 mph. Journey time?", opts: ["3 hours", "4 hours", "2 hours", "5 hours"], ans: 0, exp: "Time = 120 ÷ 40 = 3 hours." },
          { q: "Runner completes 10 km in 50 minutes. Time for 1 km at same speed?", opts: ["5 mins", "10 mins", "4 mins", "6 mins"], ans: 0, exp: "50 ÷ 10 = 5 minutes." },
          { q: "Car travels at 50 mph for 30 minutes (0.5 hours). Distance?", opts: ["25 miles", "100 miles", "15 miles", "30 miles"], ans: 0, exp: "50 × 0.5 = 25 miles." },
          { q: "Bus travels 90 km in 1.5 hours. Average speed?", opts: ["60 km/h", "45 km/h", "75 km/h", "50 km/h"], ans: 0, exp: "Speed = 90 ÷ 1.5 = 60 km/h." },
          { q: "Walking at 4 mph, how long to walk 10 miles?", opts: ["2.5 hours", "2 hours", "3 hours", "1.5 hours"], ans: 0, exp: "Time = 10 ÷ 4 = 2.5 hours (2 hrs 30 mins)." },
          { q: "Aeroplane flies 1200 miles in 3 hours. Speed?", opts: ["400 mph", "300 mph", "500 mph", "360 mph"], ans: 0, exp: "Speed = 1200 ÷ 3 = 400 mph." },
          { q: "How far do you travel in 15 mins at 40 mph?", opts: ["10 miles", "20 miles", "15 miles", "5 miles"], ans: 0, exp: "15 mins = 1/4 hour. 40 × 1/4 = 10 miles." },
          { q: "Speed = 70 mph, Time = 4 hours. Distance?", opts: ["280 miles", "210 miles", "300 miles", "240 miles"], ans: 0, exp: "70 × 4 = 280 miles." }
        ]
      },
      {
        day: 84,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "Combining Shapes & Overlay Logic",
        lesson: "When two shapes overlay: overlapping lines may disappear, combine, or invert shading.",
        questions: [
          { q: "Shape A (Vertical line) combined with Shape B (Horizontal line) forms:", opts: ["Cross (+)", "Parallel lines", "Square", "Circle"], ans: 0, exp: "Intersecting perpendicular lines form a cross (+) shape." },
          { q: "Overlay rule: Same lines cancel out. [Square with diagonal 1] + [Square with diagonal 1] = ?", opts: ["Empty Square", "Square with cross", "Square with line", "Solid Square"], ans: 0, exp: "Identical overlapping lines cancel each other out." },
          { q: "Circle with left half shaded + Circle with right half shaded = ?", opts: ["Fully shaded circle", "White circle", "Half circle", "Quarter circle"], ans: 0, exp: "Combining two half-shaded circles fills the full circle." },
          { q: "Triangle + inverted Triangle overlaid = ?", opts: ["6-pointed star (Hexagram)", "Square", "Hexagon", "Diamond"], ans: 0, exp: "Overlapping opposite triangles forms a 6-pointed star." },
          { q: "Combining 4 equal quarter-circle sectors forms:", opts: ["1 complete circle", "2 circles", "1 square", "Half circle"], ans: 0, exp: "4 quarters = 1 whole circle." },
          { q: "Overlay rule: Black + White = Black. [Black dot] + [White dot] = ?", opts: ["Black dot", "White dot", "No dot", "Grey dot"], ans: 0, exp: "Rule states black fill takes priority." },
          { q: "Overlay rule: Black + Black = White. [Black square] + [Black square] = ?", opts: ["White square", "Black square", "Grey square", "Cross"], ans: 0, exp: "Identical overlapping shading cancels to white." },
          { q: "Two identical overlapping squares offset diagonally form:", opts: ["8-pointed shape / 3D box outline", "Circle", "Triangle", "Single square"], ans: 0, exp: "Offset overlapping squares create an 8-cornered complex outline." },
          { q: "Combining a square and a triangle on top of it forms:", opts: ["House-shaped pentagon", "Hexagon", "Octagon", "Rectangle"], ans: 0, exp: "Square base + triangle roof = 5-sided house shape." },
          { q: "Lines inside shape count: Shape 1 (2 lines) + Shape 2 (3 lines) = ?", opts: ["5 lines", "6 lines", "1 line", "0 lines"], ans: 0, exp: "Additive overlay: 2 + 3 = 5 lines inside." }
        ]
      },
      {
        day: 85,
        subject: "English",
        badgeClass: "badge-eng",
        title: "Author's Tone, Intent & Literary Devices",
        lesson: "Tone reflects author attitude (e.g. humorous, serious, critical, optimistic). Literary devices: Simile (like/as), Metaphor (is/was), Personification.",
        questions: [
          { q: "Identify figurative device: 'Her smile was as bright as the sun.'", opts: ["Simile", "Metaphor", "Personification", "Alliteration"], ans: 0, exp: "Uses 'as... as' to compare → Simile." },
          { q: "Identify figurative device: 'The wind whispered through the trees.'", opts: ["Personification", "Simile", "Metaphor", "Onomatopoeia"], ans: 0, exp: "Gives human action ('whispered') to non-human wind." },
          { q: "Identify figurative device: 'Time is a thief.'", opts: ["Metaphor", "Simile", "Personification", "Hyperbole"], ans: 0, exp: "States time IS a thief directly → Metaphor." },
          { q: "Identify sound device: 'The bees buzzed in garden.'", opts: ["Onomatopoeia", "Simile", "Metaphor", "Personification"], ans: 0, exp: "'Buzzed' imitates the actual sound → Onomatopoeia." },
          { q: "Identify device: 'Peter Parker picked a peck of pickled peppers.'", opts: ["Alliteration", "Assonance", "Simile", "Metaphor"], ans: 0, exp: "Repetition of initial 'p' sound → Alliteration." },
          { q: "Text tone: 'Warning! Danger ahead! Keep out at all costs!'", opts: ["Urgent / Cautionary", "Humorous", "Relaxed", "Playful"], ans: 0, exp: "Exclamation marks and strong warning words create an urgent tone." },
          { q: "Identify device: 'I have told you a million times!'", opts: ["Hyperbole (Exaggeration)", "Simile", "Metaphor", "Onomatopoeia"], ans: 0, exp: "Extreme exaggeration for effect → Hyperbole." },
          { q: "What is author's main purpose in a recipe book?", opts: ["To instruct / inform", "To persuade", "To entertain with fiction", "To express feelings"], ans: 0, exp: "Recipes instruct the reader step-by-step." },
          { q: "Identify device: 'The cold waters wrapped icy fingers around his ankles.'", opts: ["Personification", "Simile", "Alliteration", "Onomatopoeia"], ans: 0, exp: "Attributing 'icy fingers' to water is personification." },
          { q: "What is author's purpose in an advertisement?", opts: ["To persuade", "To inform only", "To entertain", "To describe weather"], ans: 0, exp: "Advertisements aim to persuade readers to buy or act." }
        ]
      }
    ]
  },
  {
    week: 18,
    weekTitle: "Week 18: Multi-Step Equations, Transformations & Review",
    days: [
      {
        day: 86,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Brackets & Multi-Step Algebra",
        lesson: "Expand brackets by multiplying number outside by everything inside: 3(x + 4) = 3x + 12.",
        questions: [
          { q: "Expand: 4(x + 3)", opts: ["4x + 12", "4x + 3", "x + 12", "7x"], ans: 0, exp: "4 × x + 4 × 3 = 4x + 12." },
          { q: "Expand: 5(2y - 1)", opts: ["10y - 5", "10y - 1", "5y - 5", "7y - 5"], ans: 0, exp: "5 × 2y - 5 × 1 = 10y - 5." },
          { q: "Solve for x: 2(x + 4) = 20", opts: ["6", "8", "10", "4"], ans: 0, exp: "2x + 8 = 20 → 2x = 12 → x = 6." },
          { q: "Expand and simplify: 3(a + 2) + 2(a + 1)", opts: ["5a + 8", "5a + 3", "6a + 8", "5a + 6"], ans: 0, exp: "3a + 6 + 2a + 2 = 5a + 8." },
          { q: "If 3(n - 2) = 15, find n:", opts: ["7", "5", "9", "6"], ans: 0, exp: "3n - 6 = 15 → 3n = 21 → n = 7." },
          { q: "Expand: x(x + 5)", opts: ["x² + 5x", "2x + 5", "x² + 5", "5x²"], ans: 0, exp: "x × x + x × 5 = x² + 5x." },
          { q: "Solve for y: 4(y - 3) = 16", opts: ["7", "4", "8", "5"], ans: 0, exp: "4y - 12 = 16 → 4y = 28 → y = 7." },
          { q: "Expand: 6(3 - 2m)", opts: ["18 - 12m", "18 - 2m", "9 - 12m", "18 - 6m"], ans: 0, exp: "6 × 3 - 6 × 2m = 18 - 12m." },
          { q: "Simplify: 2(3x + 4) - 5", opts: ["6x + 3", "6x + 8", "6x + 13", "5x + 3"], ans: 0, exp: "6x + 8 - 5 = 6x + 3." },
          { q: "If 5(p + 1) = 35, find p:", opts: ["6", "7", "5", "8"], ans: 0, exp: "5p + 5 = 35 → 5p = 30 → p = 6." }
        ]
      },
      {
        day: 87,
        subject: "Verbal Reasoning",
        badgeClass: "badge-vr",
        title: "Sentence Completion & Cloze Vocabulary",
        lesson: "Select words that preserve logical flow, correct grammar, and precise meaning.",
        questions: [
          { q: "Despite his fatigue, the runner ____ the finish line.", opts: ["crossed", "avoided", "stopped", "failed"], ans: 0, exp: "'Despite' shows contrast with fatigue → crossed line." },
          { q: "The scientist's discovery was ____ and changed medicine forever.", opts: ["revolutionary", "minor", "useless", "ordinary"], ans: 0, exp: "Changing medicine forever means it was revolutionary." },
          { q: "She answered the difficult question with great ____.", opts: ["confidence", "fear", "hesitation", "doubt"], ans: 0, exp: "Answering well requires confidence." },
          { q: "The climate in the desert is extremely ____ and dry.", opts: ["arid", "humid", "wet", "freezing"], ans: 0, exp: "Arid means having little or no rain." },
          { q: "The museum exhibition was so ____ that visitors stayed for hours.", opts: ["captivating", "boring", "dull", "uninteresting"], ans: 0, exp: "Staying hours indicates it was captivating." },
          { q: "He made a ____ mistake by ignoring the safety instructions.", opts: ["costly/serious", "minor", "helpful", "good"], ans: 0, exp: "Ignoring safety causes serious mistakes." },
          { q: "The puppy was so ____ that it chewed every shoe.", opts: ["mischievous", "obedient", "calm", "quiet"], ans: 0, exp: "Chewing shoes shows mischievous behavior." },
          { q: "Her voice was barely ____ above the loud roar of crowd.", opts: ["audible", "visible", "readable", "silent"], ans: 0, exp: "Audible means able to be heard." },
          { q: "The bright light was so ____ it hurt my eyes.", opts: ["dazzling", "dim", "faint", "dark"], ans: 0, exp: "Dazzling light is extremely bright." },
          { q: "The contract was legally ____ and could not be broken.", opts: ["binding", "weak", "optional", "temporary"], ans: 0, exp: "Binding means legally enforced." }
        ]
      },
      {
        day: 88,
        subject: "Maths",
        badgeClass: "badge-maths",
        title: "Transformations: Reflection, Rotation & Enlargement",
        lesson: "Reflection = flip across axis. Rotation = turn around point by angle. Enlargement = scale up shape size by scale factor.",
        questions: [
          { q: "Triangle with base 3cm, height 2cm enlarged by Scale Factor 3. New base?", opts: ["9cm", "6cm", "12cm", "5cm"], ans: 0, exp: "3cm × 3 = 9cm." },
          { q: "Area of original square is 4 cm². Enlarged by Scale Factor 2. New area?", opts: ["16 cm²", "8 cm²", "12 cm²", "24 cm²"], ans: 0, exp: "Original side = 2cm. New side = 4cm. New area = 4 × 4 = 16 cm²." },
          { q: "Point (2, 3) reflected in y-axis?", opts: ["(-2, 3)", "(2, -3)", "(-2, -3)", "(3, 2)"], ans: 0, exp: "Reflection in y-axis negates x-coordinate → (-2, 3)." },
          { q: "Point (4, 1) rotated 90° clockwise about origin (0,0)?", opts: ["(1, -4)", "(-1, 4)", "(-4, -1)", "(4, -1)"], ans: 0, exp: "Rule for 90° clockwise: (x, y) → (y, -x) → (1, -4)." },
          { q: "Enlarging a shape changes its:", opts: ["Size only", "Shape only", "Angles only", "Orientation only"], ans: 0, exp: "Enlargement changes side lengths (size) while preserving internal angles (shape)." },
          { q: "Rectangle length 6cm, width 4cm enlarged by SF 0.5. New length?", opts: ["3cm", "12cm", "2cm", "8cm"], ans: 0, exp: "6 × 0.5 = 3cm." },
          { q: "Rotation of 180° is equivalent to turning:", opts: ["2 quarter turns", "1 quarter turn", "3 quarter turns", "Full turn"], ans: 0, exp: "180 ÷ 90 = 2 quarter turns." },
          { q: "Point (5, 5) translated 3 left, 4 down:", opts: ["(2, 1)", "(8, 9)", "(2, 9)", "(8, 1)"], ans: 0, exp: "x: 5 - 3 = 2. y: 5 - 4 = 1 → (2, 1)." },
          { q: "Perimeter of shape is 20cm. Enlarged by Scale Factor 3. New perimeter?", opts: ["60cm", "40cm", "180cm", "80cm"], ans: 0, exp: "Perimeter scales linearly: 20 × 3 = 60cm." },
          { q: "Shape reflected twice across same mirror line ends up in:", opts: ["Original position", "Flipped position", "Rotated position", "Enlarged position"], ans: 0, exp: "Double reflection returns shape to original state." }
        ]
      },
      {
        day: 89,
        subject: "Non-Verbal Reasoning",
        badgeClass: "badge-nvr",
        title: "3D Elevations: Plan, Front & Side Views",
        lesson: "Plan view = view from directly above (top-down). Front view = view from front. Side view = view from side.",
        questions: [
          { q: "Plan view (top-down) of a cylinder standing upright:", opts: ["Circle", "Rectangle", "Square", "Triangle"], ans: 0, exp: "Looking directly down at a standing cylinder shows a circle." },
          { q: "Front elevation view of a cylinder standing upright:", opts: ["Rectangle", "Circle", "Square", "Triangle"], ans: 0, exp: "Front view of an upright cylinder appears as a rectangle." },
          { q: "Plan view (top-down) of a cone standing on its circular base:", opts: ["Circle with a center dot", "Triangle", "Rectangle", "Square"], ans: 0, exp: "Top view shows outer circular base with apex point in center." },
          { q: "Front elevation of a square-based pyramid:", opts: ["Triangle", "Square", "Circle", "Rectangle"], ans: 0, exp: "From front, pyramid faces look like triangles." },
          { q: "Plan view of a square-based pyramid:", opts: ["Square with crossed diagonals", "Triangle", "Square", "Circle"], ans: 0, exp: "Top-down view shows square base with diagonal lines meeting at apex." },
          { q: "Plan view of a sphere:", opts: ["Circle", "Sphere", "Oval", "Point"], ans: 0, exp: "A sphere viewed from any direction looks like a 2D circle." },
          { q: "Side elevation view of a cube:", opts: ["Square", "Cube", "Rectangle", "Triangle"], ans: 0, exp: "Every 2D view of a cube is a square." },
          { q: "Front view of a triangular prism lying on rectangular face:", opts: ["Triangle", "Rectangle", "Square", "Circle"], ans: 0, exp: "Looking at the end face of a triangular prism shows a triangle." },
          { q: "Plan view of a horizontal pipe (lying cylinder):", opts: ["Rectangle", "Circle", "Square", "Oval"], ans: 0, exp: "Looking down at a horizontal cylinder shows a rectangle." },
          { q: "Side view of a hemisphere (half sphere flat side down):", opts: ["Semicircle", "Circle", "Triangle", "Rectangle"], ans: 0, exp: "Side profile of a hemisphere is a semicircle." }
        ]
      },
      {
        day: 90,
        subject: "Mixed Review",
        badgeClass: "badge-eng",
        title: "Week 18 Milestone Assessment",
        lesson: "Consolidate all skills learned in Weeks 13 through 18 across all 11+ subjects!",
        questions: [
          { q: "Expand: 4(x + 3)", opts: ["4x + 12", "4x + 3", "x + 12", "7x"], ans: 0, exp: "4x + 12." },
          { q: "What is 9 squared (9²)?", opts: ["81", "18", "72", "90"], ans: 0, exp: "81." },
          { q: "Distance = Speed × Time. Speed 60 mph, Time 3 hrs. Distance?", opts: ["180 miles", "120 miles", "20 miles", "150 miles"], ans: 0, exp: "60 × 3 = 180 miles." },
          { q: "Plan view of an upright cylinder?", opts: ["Circle", "Rectangle", "Square", "Triangle"], ans: 0, exp: "Circle." },
          { q: "Identify figurative device: 'Her smile was as bright as sun.'", opts: ["Simile", "Metaphor", "Personification", "Alliteration"], ans: 0, exp: "Simile." },
          { q: "Expand: 5(2y - 1)", opts: ["10y - 5", "10y - 1", "5y - 5", "7y - 5"], ans: 0, exp: "10y - 5." },
          { q: "What is 5 cubed (5³)?", opts: ["125", "25", "15", "75"], ans: 0, exp: "125." },
          { q: "Antonym for HOSTILE:", opts: ["Friendly", "Bitter", "Cruel", "Harsh"], ans: 0, exp: "Friendly." },
          { q: "Which sentence is PASSIVE?", opts: ["The cake was baked by Mum.", "Mum baked cake.", "Mum bakes.", "Mum will bake."], ans: 0, exp: "The cake was baked by Mum." },
          { q: "Probability of picking blue marble from 5 blue and 5 red?", opts: ["1/2", "1/4", "1", "0"], ans: 0, exp: "5/10 = 1/2." }
        ]
      }
    ]
  }
];
