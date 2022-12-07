const { results } = require("../controllers/songsController")

const songs = {
    list: [
            {
                id: 'lavenderhaze',
                title: "Lavander Haze",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "Meet me at midnight",
                    "Staring at the ceiling with you",
                    "Oh, you don't ever say too much",
                    "And you don't really read into",
                    "My melancholia",
                    "I've been under scrutiny (yeah, oh yeah)",
                    "You handle it beautifully (yeah, oh yeah)",
                    "All this shit is new to me (yeah, oh yeah)",
                    "I feel a lavender haze creeping up on me",
                    "So real, I'm damned if I do give a damn what people say",
                    "No deal, the 1950s shit they want from me",
                    "I just wanna stay in that lavender haze",
                    "All they keep asking me (all they keep asking me)",
                    "Is if I'm gonna be your bride",
                    "The only kind of girl they see (the only kind of girl they see)",
                    "Is a one night or a wife",
                    "I find it dizzying (yeah, oh yeah)",
                    "They're bringing up my history (yeah, oh yeah)",
                    "But you aren't even listening (yeah, oh yeah)",
                    "I feel a lavender haze creeping up on me",
                    "So real, I'm damned if I do give a damn what people say",
                    "No deal, the 1950s shit they want from me",
                    "I just wanna stay in that lavender haze (ooh, ooh, whoa whoa whoa whoa whoa)",
                    "That lavender haze",
                    "Talk your talk and go viral",
                    "I just need this love spiral",
                    "Get it off your chest",
                    "Get it off my desk (get it off my desk)",
                    "Talk your talk and go viral",
                    "I just need this love spiral",
                    "Get it off your chest",
                    "Get it off my desk",
                    "I feel (I feel) a lavender haze creeping up on me",
                    "So real, I'm damned if I do give a damn what people say",
                    "No deal (no deal), the 1950s shit they want from me",
                    "I just wanna stay in that lavender haze",
                    "Get it off your chest",
                    "Get it off my desk",
                    "That lavender haze",
                    "I just wanna stay",
                    "I just wanna stay",
                    "In that lavender haze",
                ]
            },
            {
                id: 'maroon',
                title: "Maroon",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "When the morning came we were cleaning incense off your vinyl shelf",
                    "'Cause we lost track of time again",
                    "Laughing with my feet in your lap",
                    "Like you were my closest friend",
                    "How'd we end up on the floor anyway? You say",
                    "Your roommate's cheap-ass screw-top rosé, that's how",
                    "I see you every day now",
                    "And I chose you",
                    "The one I was dancin' with",
                    "In New York, no shoes",
                    "Looked up at the sky and it was",
                    "The burgundy on my T-shirt when you splashed your wine into me",
                    "And how the blood rushed into my cheeks, so scarlet, it was",
                    "The mark you saw on my collarbone, the rust that grew between telephones",
                    "The lips I used to call home, so scarlet, it was maroon",
                    "When the silence came, we were shaking blind and hazy",
                    "How the hell did we lose sight of us again?",
                    "Sobbin' with your head in your hands",
                    "Ain't that the way shit always ends?",
                    "You were standing hollow-eyed in the hallway",
                    "Carnations you had thought were roses, that's us",
                    "I feel you no matter what",
                    "The rubies that I gave up",
                    "And I lost you",
                    "The one I was dancin' with",
                    "In New York, no shoes",
                    "Looked up at the sky and it was maroon",
                    "The burgundy on my T-shirt when you splashed your wine into me",
                    "And how the blood rushed into my cheeks, so scarlet, it was (maroon)",
                    "The mark you saw on my collarbone, the rust that grew between telephones",
                    "The lips I used to call home, so scarlet, it was (maroon)",
                    "And I wake with your memory over me",
                    "That's a real fucking legacy, legacy (it was maroon)",
                    "And I wake with your memory over me",
                    "That's a real fucking legacy to leave",
                    "The burgundy on my T-shirt when you splashed your wine into me",
                    "And how the blood rushed into my cheeks, so scarlet (it was maroon)",
                    "The mark you saw on my collarbone, the rust that grew between telephones",
                    "The lips I used to call home, so scarlet (it was maroon)",
                    "It was maroon",
                    "It was maroon",
                ]
            },
            {
                id: 'antihero',
                title: "Anti-Hero",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "I have this thing where I get older, but just never wiser",
                    "Midnights become my afternoons",
                    "When my depression works the graveyard shift",
                    "All of the people I've ghosted stand there in the room",
                    "I should not be left to my own devices",
                    "They come with prices and vices, I end up in crisis",
                    "(Tale as old as time)",
                    "I wake up screaming from dreaming",
                    "One day I'll watch as you're leaving",
                    "'Cause you got tired of my scheming",
                    "(For the last time)",
                    "It's me",
                    "Hi",
                    "I'm the problem, it's me",
                    "At teatime",
                    "Everybody agrees",
                    "I'll stare directly at the sun, but never in the mirror",
                    "It must be exhausting always rooting for the anti-hero",
                    "Sometimes I feel like everybody is a sexy baby",
                    "And I'm a monster on the hill",
                    "Too big to hang out",
                    "Slowly lurching toward your favorite city",
                    "Pierced through the heart but never killed",
                    "Did you hear my covert narcissism",
                    "I disguise as altruism like some kind of congressman?",
                    "(Tale as old as time)",
                    "I wake up screaming from dreaming",
                    "One day I'll watch as you're leaving and life will lose all its meaning",
                    "(For the last time)",
                    "It's me",
                    "Hi",
                    "I'm the problem, it's me",
                    "(I'm the problem, it's me)",
                    "At teatime",
                    "Everybody agrees",
                    "I'll stare directly at the sun, but never in the mirror",
                    "It must be exhausting always rooting for the anti-hero",
                    "I have this dream my daughter-in-law kills me for the money",
                    "She thinks I left them in the will",
                    "The family gathers 'round and reads it",
                    "And then someone screams out",
                    "She's laughing up at us from hell!",
                    "It's me",
                    "Hi",
                    "I'm the problem, it's me",
                    "It's me",
                    "Hi",
                    "I'm the problem, it's me",
                    "It's me",
                    "Hi",
                    "Everybody agrees",
                    "Everybody agrees",
                    "It's me",
                    "Hi (Hi)",
                    "I'm the problem, it's me",
                    "(I'm the problem, it's me)",
                    "At teatime (Time)",
                    "Everybody agrees",
                    "(Everybody agrees)",
                    "I'll stare directly at the sun, but never in the mirror",
                    "It must be exhausting always rooting for the anti-hero",
                ]
            },
            {
                id: 'snowonthebeach',
                title: "Snow On The Beach",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'youreonyourownkid',
                title: "You're On Your Own, Kid",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'midnightrain',
                title: "Midnight Rain",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'question',
                title: "Question...?",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'vigilanteshit',
                title: "Vigilante Shit",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'bejeweled',
                title: "Bejeweled",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'labyrinth',
                title: "Labyrinth",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'karma',
                title: "karma",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'sweetnothing',
                title: "Sweet Nothing",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'mastermind',
                title: "Mastermind",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'thegreatwar',
                title: "The Great War",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'biggerthanthewholesky',
                title: "Bigger Than The Whole Sky",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'paris',
                title: "Paris",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'highindifelity',
                title: "High Infidelity",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'glitch',
                title: "Glitch",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'wouldvecouldveshouldve',
                title: "Would've, Could've, Should've",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'dearreader',
                title: "Dear Reader",
                album: "Midnights",
                album_id: 'midnights',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'willow',
                title: "Willow",
                album: "evermore",
                album_id: 'evermore',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'champagneproblems',
                title: "Champagne Problems",
                album: "evermore",
                album_id: 'evermore',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'goldrush',
                title: "Gold Rush",
                album: "evermore",
                album_id: 'evermore',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'tisthedamnseason',
                title: "'tis the damn season",
                album: "evermore",
                album_id: 'evermore',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'the1',
                title: "the 1",
                album: "folklore",
                album_id: 'folklore',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'cardigan',
                title: "cardigan",
                album: "folklore",
                album_id: 'folklore',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'iforgotthatyouexisted',
                title: "I Forgot That You Existed",
                album: "Lover",
                album_id: 'lover',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'readyforit',
                title: "...Ready For It?",
                album: "reputation",
                album_id: 'reputation',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'welcometonewyork',
                title: "Welcome To New York",
                album: "1989",
                album_id: '1989',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'stateofgrace',
                title: "State Of Grace",
                album: "Red",
                album_id: 'red',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'sparksfly',
                title: "Sparks Fly",
                album: "Speak Now",
                album_id: 'speaknow',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'fearless',
                title: "Fearless",
                album: "Fearless",
                album_id: 'fearless',
                lyrics: [
                    "",
                ]
            },
            {
                id: 'timmcgraw',
                title: "Tim McGraw",
                album: "Taylor Swift",
                album_id: 'debut',
                lyrics: [
                    "",
                ]
            },
        ],
        findByAlbum: function (album_id) {
            let results = songs.list.filter((song) => song.album_id == album_id);
            return results;
        }
    
}

module.exports = songs;