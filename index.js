function shout(hello) {
    return hello.toUpperCase();
}

function whisper(hello) {
    return hello.toLowerCase();
}

function logShout(hello) {
    console.log(hello.toUpperCase());
}

function logWhisper(hello) {
    console.log(hello.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const cantAnswer = "I can't hear you!";
    const canAnswer = "YES INDEED!";
    const loveAnswer = "I would love to!";

    if (string === string.toLowerCase()){
        return cantAnswer;
    }

    else if (string === string.toUpperCase()){
        return canAnswer;
    }

    else if (string === "Let's have dinner together!"){
        return loveAnswer;
    }
}
