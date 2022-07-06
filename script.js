const app = new Vue({
    el: "#root",
    data: {
        toDos: [
            {
                text: 'Comprare i pomodori',
                done: false,
            },
            {
                text: 'Comprare la pasta',
                done: false,
            },
            {
                text: 'Comprare la farina',
                done: false,
            },
            {
                text: 'Comprare il sale',
                done: false,
            },
            {
                text: 'Comprare la motosega',
                done: true,
            },
        ],
    },

    methods: {
        elementDone: function(text, done){
            if(this.done != false){
                this.text.classList.add("text-decoration-line-through");
            }
        }
    }
})