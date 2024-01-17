var quotes = [
    "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you\'re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life. — Carrie Ann Moss",
    "Some women choose to follow men, and some choose to follow their dreams. If you\'re wondering which way to go, remember that your career will never wake up and tell you that it doesn\'t love you anymore. — Lady Gaga",
    "Life is what happens to us while we are making other plans. ―Allen Saunders",
    "Life isn\'t about finding yourself. Life is about creating yourself. ―George Bernard Shaw",
    "You are the sum total of everything you\'ve ever seen, heard, eaten, smelled, been told, forgot ― it\'s all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive. ― Maya Angelou",
    "Doubt kills more dreams than failure ever will. - Suzy Kassem",
    "Keep your face always toward the sunshine, and shadows will fall behind you.  ― Walt Whitman",
    "Whether you think you can or think you can\'t, you\'re right. ― Henry Ford",
    "Your talent determines what you can do. Your motivation determines how much you\'re willing to do. Your attitude determines how well you do it. — Lou Holtz",
    "The happiness of your life depends on the quality of your thoughts. ― Marcus Aurelius",
    "Nothing is impossible. The word itself says \'I\'m possible!\' — Audrey Hepburn",
    "You are who you are meant to be. Dance as if no one\'s watching. Love as if it\'s all you know. Dream as if you\'ll live forever. Live as if you\'ll die today. ― James Dean",
    "You do not find the happy life. You make it. — Camilla Eyring Kimball",
    "You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth. ― William W. Purkey",
    "Happiness is not something readymade. It comes from your own actions. — Dalai Lama",
    "Folks are usually about as happy as they make up their minds to be.  ― Abraham Lincoln",
    "It is during our darkest moments that we must focus to see the light. — Aristotle",
    "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. - Dale Carnegie",
    "You learn more from failure than from success. Don\'t let it stop you. Failure builds character. — Unknown",
    "Fairytales do not tell children that dragons exist. Children already know that dragons exist. Fairytales tell children that dragons can be killed. ― G K Chesterton",
]
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));  
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
 
