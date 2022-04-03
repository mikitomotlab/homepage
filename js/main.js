var app = new Vue({
    el: '#app',
    data: {
        maxrating: 0,

        contentslist: [
            { id: 1, url: "./github.html", text: "Top"},
            { id: 2, url: "#about", text: "About"},
            { id: 3, url: "#skills", text: "Skills"},
            { id: 4, url: "#works", text: "Works"},
            { id: 5, url: "./hobby.html", text: "Hobby"},
        ],

        languages: [
            { id: 1, src: "C:/Users/k0913/Desktop/homepage/image/Creo.png", url: "https://www.ptc.com/ja/products/cad/creo"},
            { id: 5, src: "C:/Users/k0913/Desktop/homepage/image/ROS.png", url: "http://wiki.ros.org"},
            { id: 6, src: "C:/Users/k0913/Desktop/homepage/image/Arduino.png", url: "https://www.arduino.cc"},
            { id: 9, src: "C:/Users/k0913/Desktop/homepage/image/C++.png", url: "https://ja.wikipedia.org/wiki/C%2B%2B"},
            { id: 10, src: "C:/Users/k0913/Desktop/homepage/image/Python.png", url: "https://www.python.jp"},
            { id: 12, src: "C:/Users/k0913/Desktop/homepage/image/Vue.png", url: "https://jp.vuejs.org/index.html"},
        ],


        memo: [
            { id: 1, url: "./github.html", text: "github'"},
            { id: 2, url: "./raspicamera.html", text: "raspicamera"},
            { id: 3, url: "./hobby.html", text: "hobby"},
            { id: 4, url: "#events", text: "Events"},
            { id: 5, url: "#works", text: "Works"},
            { id: 6, url: "#interests", text: "Interests"},
            { id: 7, url: "#links", text: "Links"},
        ],

        linklist: [
            { id: 1, src: "./images/Twitter.png", url: "https://twitter.com/ei01241"},
            { id: 2, src: "./images/Instagram.png", url: "https://instagram.com/ei01241"},
            { id: 3, src: "./images/Facebook.png",  url: "https://www.facebook.com/profile.php?id=100040398917098"},
            { id: 4, src: "./images/GitHub.png", url: "https://github.com/ei0410"},
            { id: 5, src: "./images/FC2.png", url: "https://ei0124.blog.fc2.com"},
        ]
    },
    created () {
        fetch('https://codeforces.com/api/user.info?handles=ei0124')
        .then( response => {
            return response.json()
        })
        .then( json => {
            this.maxrating = json.result[0].maxRating
        })
        .catch( (err) => {
            this.maxrating = err
        });
    },
    methods: {
        beforeEnter(el) {
          this.$nextTick(() => {
              el.style.transitionDelay = 150 * parseInt(el.dataset.index, 10) + 'ms'
          })
        },
    }
})
