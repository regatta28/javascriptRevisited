


var profile = "I am a web developer developing in html, css and javascript";
var stops = ["I", "am", "a", "and", "in"];

function cleanProfile(profile, stops) {

var words = profile.split("I am a web developer developing in html, css and javascript");
var newProfile = ["web", "developer", "developing", "html", "css", "javascript"];

for (var i=0; i<words.length; i++) {
    if (stops.indexOf(words[i].toLowerCase()) === -1){
        newProfile.push(words[i])
    }
}

return newProfile;

}

console.log("Clean profile words:");
console.log(cleanProfile(profile, stops));
alert(cleanProfile(profile, stops));