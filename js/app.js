

const balls = new Vue({
    el: '#app',
    data: {
        title: 'tap for a dad joke',
        joke: '',
        bgc: {
            backgroundColor: '',
            footerColor: ''
		},
        colors: ["Aqua", "Aquamarine", "Blue", "BlueViolet", "Chartreuse", "Coral", "CornflowerBlue", "Crimson", "Cyan", "DarkCyan", "DarkGoldenRod", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSlateBlue", "DarkTurquoise", "DarkViolet", "DeepPink", "DodgerBlue", "FireBrick", "ForestGreen", "Fuchsia", "Gold", "GoldenRod", "Green", "HotPink", "IndianRed", "Indigo", "LawnGreen", "Lime", "LimeGreen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "Navy", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SeaGreen", "Sienna", "SlateBlue", "SlateGray", "SpringGreen", "SteelBlue", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Yellow", "YellowGreen"],
        show: false,
        shareURL: 'https://icanhazdadjoke.com'
    },
    methods: {
        async showJoke() {
            this.bgc.backgroundColor = this.colors[this.getRandomIntInclusive(0,40)]
            this.bgc.footerColor = this.colors[this.getRandomIntInclusive(0,40)]
            this.show = false;
            let config = {
                headers: {
                    'Accept': 'application/json'
                }
            }
            const jokes = await axios.get('https://icanhazdadjoke.com', config);
            this.joke = jokes.data.joke;
            this.shareURL = 'https://icanhazdadjoke.com';
            this.shareURL = this.shareURL + '/j/' + jokes.data.id;
            console.log(this.shareURL);
            this.show = true;
            setTimeout(() => {
                this.show = true;
            }, 2000);

        },

        getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
          }

    }
});