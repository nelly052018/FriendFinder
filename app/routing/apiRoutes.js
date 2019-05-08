var friends = require("./../data/friends")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)

    });
    app.post("/api/friends", function (req, res) {
        //console.log(req.body)
        var userInput = req.body
        var userResponses = userInput["scores[]"]
        console.log(userResponses)
        var matchName = ""
        var matchImage = ""
        var totalDifference = 1000
        for (var i = 0; i < friends.length; i++) {
            var eachDiff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                var scores = userResponses[j]
                eachDiff += Math.abs(friends[i].scores[j] - scores)
            }
            if (eachDiff < totalDifference) {
                totalDifference = eachDiff;
                matchName = friends[i].name;
                matchImage = friends[i].photo
            }

        }
        delete userInput["scores[]"];
        userInput.scores = userResponses

        friends.push(userInput)






        res.json({
            name: matchName,
            photo: matchImage,

        })
    });

}


