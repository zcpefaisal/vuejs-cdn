new Vue({
    el: '#vue-app',
    data: {
        name: 'Faisal',
        job: 'ninja'
    },
    methods: {
        greet: function(param) {
            // return time;
            // return this.name;
            return 'Good ' + param + ' ! ' + this.name;
        }
    }
})