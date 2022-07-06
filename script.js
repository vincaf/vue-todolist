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

        newToDo: "",
    },

    methods: {
        removeElement: function(index){
            this.toDos.splice(index, 1);
        },

        addToList: function(currentToDo){
            if(currentToDo == ""){
                console.warn('Un elemento vuoto non è valido!');
            } else {
                this.toDos.push(
                    {
                        text: currentToDo,
                        done: false,
                    });
                this.newToDo = '';
            }
        }
    }
})