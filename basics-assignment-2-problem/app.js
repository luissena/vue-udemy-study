const app = Vue.createApp({
    data(){
        return{
            output: "",
            outputConfirmed: ""

        }
    },
    methods:{
        showAlert(){
            window.alert('Alerta')
        },
        setOutput(event){
            this.output = event.target.value
        },
        setOutputConfirmed(){
            this.outputConfirmed = this.output
        }
    }
})

app.mount('#assignment')