

const balls = new Vue({
    el: '#app',
    data: {
        title: 'tap for a dad joke',
        joke: '',
        bgc: {
			backgroundColor: ''
		},
        colors: ["Aqua", "Aquamarine", "Bisque", "BlanchedAlmond", "Blue", "BlueViolet", "Chartreuse", "Coral", "CornflowerBlue", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSlateBlue", "DarkTurquoise", "DarkViolet", "DeepPink", "DodgerBlue", "FireBrick", "ForestGreen", "Fuchsia", "Gold", "GoldenRod", "Green", "GreenYellow", "HotPink", "IndianRed", "Indigo", "LawnGreen", "LightBlue", "LightCoral", "LightGreen", "LightSeaGreen", "Lime", "LimeGreen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "Navy", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SeaGreen", "Sienna", "SlateBlue", "SlateGray", "SpringGreen", "SteelBlue", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Yellow", "YellowGreen"],
        show: false
    },
    methods: {
        async showJoke() {
            this.bgc.backgroundColor = this.colors[this.getRandomIntInclusive(0,40)]
            this.show = false;
            let config = {
                headers: {
                    'Accept': 'application/json'
                }
            }
            const jokes = await axios.get('https://icanhazdadjoke.com', config);
            this.joke = jokes.data.joke;
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