var friendList = require("../app/data/friends")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    });

    app.post("/api/friends", function (req, res) {
        // var newFriend = req.body;
        // var newScore = 0;
        // var total = 0;
        var match = {
            name: "",
            photo: "",
            difference: 50
        }
        var newFriend = req.body;
        var newScore = newFriend.scores;
        var total = 0;
        // Calculating totals 
        for (var i = 0; i<friendList.length; i++) {
            total = 0;
    
            for (var j = 0; j< friendList[i].scores.length; j++) {
                total += Math.abs(friendList [i].scores[i] - newScore[j]);
    
                if (total <= match.difference) {
                    match.name = friendList[i].name,
                    match.photo = friendList[i].photo,
                    match.difference = total
                }
            }
        }
        friendList.push(newFriend);
        res.json(match);
        console.log(match);
    });
    }
    

   

   