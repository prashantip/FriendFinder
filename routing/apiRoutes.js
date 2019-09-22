var friendList = require("../app/data/friends.js")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var newScore = 0;
        var total = 0;
        var match = {
            name: "",
            photo: "",
            difference: 50
        }
    
        // Calculating totals 
        for (var i = 0; i<friendList.length; i++) {
            total = 0;
    
            for (var j = 0; j< friendList[i].length; j++) {
                total += Math.abs(friendList[i].newScore[j] - newFriend.newScore[j]);
    
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
   


   

   