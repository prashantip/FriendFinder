var friendList = require("../app/data/friends.js")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendList)
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        // existng firiends in the list
        var scoresArray = [];
        for (var i = 0; i < req.body.scores.lenght; i++) {
            scoresArray.push(parseInt(req.body.score[i]))
        }
        newFriend.scores = scoresArray;


        // check the new friend entry with the existing ones

        var scoreComparissonArry = [];
        for (var i = 0; i < friendList.lenght; i++) {

            // comparison
            var currentComparison = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
                currentComparison += Math.abs(newFriend.scores[j] - friendsList[i].scores[j]);
            }

            //push each cmp diff bet'n frieds to array
            scoreComparissonArry.push(currentComparison);

            var bestMatchPosition = 0;
            for (var i = 1; i < scoreComparissonArry.length; i++) {
                if (scoreComparisionArray[i] <= scoreComparissonArry[bestMatchPosition]) {
                    bestMatchPosition = i;
                }

            }
            var bestFriendMatch = friendList[bestMatchPosition];


            res.json(bestFriendMatch);

            friendsList.push(newFriend);

        }
    });//module exp = func

} //post api func


   // module.exports = apiRoutes;