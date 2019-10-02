new Vue({
    el: '#vue-app',
    data: {
        name: 'Faisal',
        age: 28,
        job: 'ninja',
        website: 'http://faisalalam.me',
        websiteTag: '<a href="http://faisalalam.me">Web</a>',
        x: 0,
        y: 0,
        salary: ''
    },
    methods: {
        greet: function(param) {
            // return time;
            // return this.name;
            return 'Good ' + param + ' ! ' + this.name;
        },
        add: function(inc) {
            this.age += inc;
        },
        substruct: function(des) {
            this.age -= des;
        },
        updateXY: function(event) {
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('clicked this link');
        },
        logName: function() {
            console.log('you entered your name');
        },
        logAge: function() {
            console.log('you entered your age');
        }
    }
})