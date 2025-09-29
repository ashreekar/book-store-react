const booksData = [
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "description": "A novel set in the Jazz Age on Long Island, near New York City, that examines the American dream.",
    "publishedDate": "1925-04-10",
    "categories": "Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24197334M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24197334M-L.jpg"
    },
    "rating": 4.2
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "description": "A dystopian novel set in a totalitarian society ruled by Big Brother.",
    "publishedDate": "1949-06-08",
    "categories": "Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26282873M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26282873M-L.jpg"
    },
    "rating": 4.7
  },
  {
    "id": 3,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "description": "A novel about the serious issues of rape and racial inequality, told through the eyes of a child.",
    "publishedDate": "1960-07-11",
    "categories": "Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24197332M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24197332M-L.jpg"
    },
    "rating": 4.8
  },
  {
    "id": 4,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "description": "A romantic novel that charts the emotional development of the protagonist, Elizabeth Bennet.",
    "publishedDate": "1813-01-28",
    "categories": "Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL25407232M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL25407232M-L.jpg"
    },
    "rating": 4.6
  },
  {
    "id": 5,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "description": "A story about the events leading up to the nervous breakdown of a young man named Holden Caulfield.",
    "publishedDate": "1951-07-16",
    "categories": "Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24204964M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24204964M-L.jpg"
    },
    "rating": 4.1
  },
  {
    "id": 6,
    "title": "Dune",
    "author": "Frank Herbert",
    "description": "A landmark science fiction novel about a young nobleman's quest to control a desert planet and its valuable resource.",
    "publishedDate": "1965-08-01",
    "categories": "Science Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL35334575M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL35334575M-L.jpg"
    },
    "rating": 4.9
  },
  {
    "id": 7,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "description": "A fantasy novel about the adventures of hobbit Bilbo Baggins as he journeys to reclaim a treasure guarded by a dragon.",
    "publishedDate": "1937-09-21",
    "categories": "Fantasy",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26514934M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26514934M-L.jpg"
    },
    "rating": 4.8
  },
  {
    "id": 8,
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "description": "A dystopian novel about a future American society where books are outlawed and 'firemen' burn any that are found.",
    "publishedDate": "1953-10-19",
    "categories": "Dystopian",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26521193M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26521193M-L.jpg"
    },
    "rating": 4.5
  },
  {
    "id": 9,
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "description": "A dystopian novel that anticipates developments in reproductive technology, sleep-learning, and psychological manipulation.",
    "publishedDate": "1932-08-30",
    "categories": "Dystopian",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24227324M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24227324M-L.jpg"
    },
    "rating": 4.4
  },
  {
    "id": 10,
    "title": "The Hitchhiker's Guide to the Galaxy",
    "author": "Douglas Adams",
    "description": "A comedic science fiction series following the misadventures of the last surviving human, Arthur Dent.",
    "publishedDate": "1979-10-12",
    "categories": "Science Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26532857M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26532857M-L.jpg"
    },
    "rating": 4.6
  },
  {
    "id": 11,
    "title": "Moby Dick",
    "author": "Herman Melville",
    "description": "The saga of Captain Ahab and his relentless pursuit of Moby Dick, the great white whale.",
    "publishedDate": "1851-10-18",
    "categories": "Adventure",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26537751M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26537751M-L.jpg"
    },
    "rating": 3.9
  },
  {
    "id": 12,
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "description": "An epic novel that intertwines the lives of Russian aristocratic families during the Napoleonic era.",
    "publishedDate": "1869-01-01",
    "categories": "Historical Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24227245M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24227245M-L.jpg"
    },
    "rating": 4.3
  },
  {
    "id": 13,
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "description": "A psychological novel about the mental anguish and moral dilemmas of a poor ex-student in St. Petersburg who commits a murder.",
    "publishedDate": "1866-11-14",
    "categories": "Psychological Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL25407228M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL25407228M-L.jpg"
    },
    "rating": 4.5
  },
  {
    "id": 14,
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel García Márquez",
    "description": "A landmark novel that tells the multi-generational story of the Buendía family in the mythical town of Macondo.",
    "publishedDate": "1967-05-30",
    "categories": "Magical Realism",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26532201M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26532201M-L.jpg"
    },
    "rating": 4.4
  },
  {
    "id": 15,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "description": "An allegorical novel about a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding treasure there.",
    "publishedDate": "1988-04-25",
    "categories": "Fantasy",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26338575M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26338575M-L.jpg"
    },
    "rating": 4.2
  },
  {
    "id": 16,
    "title": "Sapiens: A Brief History of Humankind",
    "author": "Yuval Noah Harari",
    "description": "A book that surveys the history of humankind, from the Stone Age to the political and technological revolutions of the 21st century.",
    "publishedDate": "2011-07-15",
    "categories": "Non-Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26224388M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26224388M-L.jpg"
    },
    "rating": 4.8
  },
  {
    "id": 17,
    "title": "The Martian",
    "author": "Andy Weir",
    "description": "A science fiction novel about an astronaut stranded on Mars and his struggle to survive.",
    "publishedDate": "2011-09-27",
    "categories": "Science Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26442111M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26442111M-L.jpg"
    },
    "rating": 4.7
  },
  {
    "id": 18,
    "title": "The Handmaid's Tale",
    "author": "Margaret Atwood",
    "description": "A dystopian novel set in a near-future New England, in a totalitarian state resembling a theonomy that has overthrown the United States government.",
    "publishedDate": "1985-03-15",
    "categories": "Dystopian",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26514923M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26514923M-L.jpg"
    },
    "rating": 4.3
  },
  {
    "id": 19,
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "description": "A novel about a young science student Victor Frankenstein, who creates a sapient creature in an unorthodox scientific experiment.",
    "publishedDate": "1818-01-01",
    "categories": "Gothic",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24195191M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24195191M-L.jpg"
    },
    "rating": 4.4
  },
  {
    "id": 20,
    "title": "Dracula",
    "author": "Bram Stoker",
    "description": "An 1897 Gothic horror novel introducing the character of Count Dracula.",
    "publishedDate": "1897-05-26",
    "categories": "Gothic",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26532975M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26532975M-L.jpg"
    },
    "rating": 4.2
  },
  {
    "id": 21,
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "description": "A philosophical novel about a handsome young man who sells his soul for eternal youth and beauty.",
    "publishedDate": "1890-06-20",
    "categories": "Gothic",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL25413985M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL25413985M-L.jpg"
    },
    "rating": 4.3
  },
  {
    "id": 22,
    "title": "Wuthering Heights",
    "author": "Emily Brontë",
    "description": "A novel of intense, passionate love and revenge set on the wild English moors.",
    "publishedDate": "1847-12-01",
    "categories": "Gothic",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24227318M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24227318M-L.jpg"
    },
    "rating": 4.0
  },
  {
    "id": 23,
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "description": "A novel following the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester.",
    "publishedDate": "1847-10-16",
    "categories": "Gothic",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26532984M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26532984M-L.jpg"
    },
    "rating": 4.5
  },
  {
    "id": 24,
    "title": "Don Quixote",
    "author": "Miguel de Cervantes",
    "description": "A Spanish novel about a nobleman who reads so many chivalric romances that he loses his sanity and decides to become a knight-errant.",
    "publishedDate": "1605-01-16",
    "categories": "Satire",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26274415M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26274415M-L.jpg"
    },
    "rating": 4.1
  },
  {
    "id": 25,
    "title": "The Count of Monte Cristo",
    "author": "Alexandre Dumas",
    "description": "An adventure novel about a man who is wrongfully imprisoned, escapes from jail, acquires a fortune, and sets about getting revenge.",
    "publishedDate": "1844-08-28",
    "categories": "Adventure",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL25407261M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL25407261M-L.jpg"
    },
    "rating": 4.9
  },
  {
    "id": 26,
    "title": "The Odyssey",
    "author": "Homer",
    "description": "An ancient Greek epic poem that follows the Greek hero Odysseus, king of Ithaca, and his journey home after the Trojan War.",
    "publishedDate": "-0800-01-01",
    "categories": "Epic Poetry",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL25381845M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL25381845M-L.jpg"
    },
    "rating": 4.3
  },
  {
    "id": 27,
    "title": "Meditations",
    "author": "Marcus Aurelius",
    "description": "A series of personal writings by the Roman Emperor, recording his private notes to himself and ideas on Stoic philosophy.",
    "publishedDate": "0180-01-01",
    "categories": "Philosophy",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24194019M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24194019M-L.jpg"
    },
    "rating": 4.6
  },
  {
    "id": 28,
    "title": "The Art of War",
    "author": "Sun Tzu",
    "description": "An ancient Chinese military treatise dating from the Late Spring and Autumn Period (roughly 5th century BC).",
    "publishedDate": "-0500-01-01",
    "categories": "Strategy",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL25381839M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL25381839M-L.jpg"
    },
    "rating": 4.4
  },
  {
    "id": 29,
    "title": "The Stranger",
    "author": "Albert Camus",
    "description": "A novel by the French writer Albert Camus. Its theme and outlook are often cited as exemplars of Camus's philosophy of the absurd and existentialism.",
    "publishedDate": "1942-05-19",
    "categories": "Existentialism",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26217621M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26217621M-L.jpg"
    },
    "rating": 4.2
  },
  {
    "id": 30,
    "title": "Slaughterhouse-Five",
    "author": "Kurt Vonnegut",
    "description": "A science fiction-infused anti-war novel about the World War II experiences and journeys through time of a soldier named Billy Pilgrim.",
    "publishedDate": "1969-03-31",
    "categories": "Satire",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26217627M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26217627M-L.jpg"
    },
    "rating": 4.5
  },
  {
    "id": 31,
    "title": "American Gods",
    "author": "Neil Gaiman",
    "description": "A fantasy novel that blends Americana, fantasy, and various strands of ancient and modern mythology.",
    "publishedDate": "2001-06-19",
    "categories": "Fantasy",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26282876M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26282876M-L.jpg"
    },
    "rating": 4.4
  },
  {
    "id": 32,
    "title": "Beloved",
    "author": "Toni Morrison",
    "description": "A novel inspired by the story of an African-American slave, Margaret Garner, who escaped slavery in Kentucky late January 1856 by fleeing to Ohio, a free state.",
    "publishedDate": "1987-09-02",
    "categories": "Historical Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26532988M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26532988M-L.jpg"
    },
    "rating": 4.3
  },
  {
    "id": 33,
    "title": "A Brief History of Time",
    "author": "Stephen Hawking",
    "description": "A popular-science book on cosmology that explains a range of subjects in cosmology, including the Big Bang, black holes, and light cones.",
    "publishedDate": "1988-04-01",
    "categories": "Non-Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24195195M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24195195M-L.jpg"
    },
    "rating": 4.6
  },
  {
    "id": 34,
    "title": "Gone Girl",
    "author": "Gillian Flynn",
    "description": "A thriller novel that chronicles the events surrounding the sudden disappearance of a wife on her fifth wedding anniversary.",
    "publishedDate": "2012-06-05",
    "categories": "Thriller",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL25253886M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL25253886M-L.jpg"
    },
    "rating": 4.1
  },
  {
    "id": 35,
    "title": "The Shining",
    "author": "Stephen King",
    "description": "A horror novel about an aspiring writer and recovering alcoholic who accepts a position as the off-season caretaker of the isolated historic Overlook Hotel.",
    "publishedDate": "1977-01-28",
    "categories": "Horror",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24197343M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24197343M-L.jpg"
    },
    "rating": 4.5
  },
  {
    "id": 36,
    "title": "The Hunger Games",
    "author": "Suzanne Collins",
    "description": "A dystopian novel set in Panem, where a boy and a girl from each of the nation's twelve districts are chosen annually to compete in a televised death match.",
    "publishedDate": "2008-09-14",
    "categories": "Dystopian",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24204970M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24204970M-L.jpg"
    },
    "rating": 4.4
  },
  {
    "id": 37,
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling",
    "description": "The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage.",
    "publishedDate": "1997-06-26",
    "categories": "Fantasy",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26338572M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26338572M-L.jpg"
    },
    "rating": 4.9
  },
  {
    "id": 38,
    "title": "The Road",
    "author": "Cormac McCarthy",
    "description": "A post-apocalyptic novel detailing the journey of a father and his young son over a period of several months, across a landscape blasted by an unspecified cataclysm.",
    "publishedDate": "2006-09-26",
    "categories": "Post-apocalyptic",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24197340M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24197340M-L.jpg"
    },
    "rating": 4.2
  },
  {
    "id": 39,
    "title": "Animal Farm",
    "author": "George Orwell",
    "description": "An allegorical novella which reflects events leading up to the Russian Revolution of 1917 and then on into the Stalinist era of the Soviet Union.",
    "publishedDate": "1945-08-17",
    "categories": "Political Satire",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24227319M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24227319M-L.jpg"
    },
    "rating": 4.6
  },
  {
    "id": 40,
    "title": "The Little Prince",
    "author": "Antoine de Saint-Exupéry",
    "description": "A novella about a young prince who visits various planets in space, including Earth, and addresses themes of loneliness, friendship, love, and loss.",
    "publishedDate": "1943-04-06",
    "categories": "Children's Literature",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24204972M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24204972M-L.jpg"
    },
    "rating": 4.7
  },
  {
    "id": 41,
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "description": "A thriller novel that follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris.",
    "publishedDate": "2003-03-18",
    "categories": "Thriller",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24197342M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24197342M-L.jpg"
    },
    "rating": 4.0
  },
  {
    "id": 42,
    "title": "The Kite Runner",
    "author": "Khaled Hosseini",
    "description": "A story of an unlikely friendship between a wealthy boy and the son of his father's servant, set in Afghanistan.",
    "publishedDate": "2003-05-29",
    "categories": "Historical Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24204969M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24204969M-L.jpg"
    },
    "rating": 4.5
  },
  {
    "id": 43,
    "title": "Life of Pi",
    "author": "Yann Martel",
    "description": "A fantasy adventure novel about an Indian boy named Pi who survives 227 days after a shipwreck while stranded on a lifeboat in the Pacific Ocean with a Bengal tiger.",
    "publishedDate": "2001-09-11",
    "categories": "Adventure",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26282874M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26282874M-L.jpg"
    },
    "rating": 4.3
  },
  {
    "id": 44,
    "title": "The Book Thief",
    "author": "Markus Zusak",
    "description": "A historical novel set in Nazi Germany, narrated by Death, about a young girl who finds solace by stealing books and sharing them with others.",
    "publishedDate": "2005-03-14",
    "categories": "Historical Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24227246M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24227246M-L.jpg"
    },
    "rating": 4.6
  },
  {
    "id": 45,
    "title": "Where the Crawdads Sing",
    "author": "Delia Owens",
    "description": "A coming-of-age story about a young girl named Kya who is abandoned by her family and raises herself in the marshes of North Carolina.",
    "publishedDate": "2018-08-14",
    "categories": "Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL27221088M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL27221088M-L.jpg"
    },
    "rating": 4.5
  },
  {
    "id": 46,
    "title": "Educated: A Memoir",
    "author": "Tara Westover",
    "description": "A memoir detailing the author's journey from growing up in a survivalist family in rural Idaho to earning a PhD from Cambridge University.",
    "publishedDate": "2018-02-20",
    "categories": "Non-Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL26989809M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL26989809M-L.jpg"
    },
    "rating": 4.7
  },
  {
    "id": 47,
    "title": "Becoming",
    "author": "Michelle Obama",
    "description": "The memoir of the former First Lady of the United States, chronicling her life from childhood through her time in the White House.",
    "publishedDate": "2018-11-13",
    "categories": "Non-Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL27233201M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL27233201M-L.jpg"
    },
    "rating": 4.8
  },
  {
    "id": 48,
    "title": "Atomic Habits",
    "author": "James Clear",
    "description": "A self-help book that presents a practical framework for improving every day by focusing on small, incremental changes.",
    "publishedDate": "2018-10-16",
    "categories": "Non-Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL27173873M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL27173873M-L.jpg"
    },
    "rating": 4.9
  },
  {
    "id": 49,
    "title": "Thinking, Fast and Slow",
    "author": "Daniel Kahneman",
    "description": "A book that summarizes research that the author conducted over decades, often in collaboration with Amos Tversky, on cognitive biases and decision-making.",
    "publishedDate": "2011-10-25",
    "categories": "Non-Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL25164775M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL25164775M-L.jpg"
    },
    "rating": 4.6
  },
  {
    "id": 50,
    "title": "The Immortal Life of Henrietta Lacks",
    "author": "Rebecca Skloot",
    "description": "A non-fiction book about Henrietta Lacks and the immortal cell line, known as HeLa, that came from her cervical cancer cells in 1951.",
    "publishedDate": "2010-02-02",
    "categories": "Non-Fiction",
    "imageLinks": {
      "smallThumbnail": "https://covers.openlibrary.org/b/olid/OL24376595M-L.jpg",
      "thumbnail": "https://covers.openlibrary.org/b/olid/OL24376595M-L.jpg"
    },
    "rating": 4.7
  }
];

export { booksData };