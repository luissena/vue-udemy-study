<template>
    <section>
        <form @submit.prevent="submitData"> <!-- submit => chama o submitData(method) -->
            <input type="text" placeholder="Your name" v-model="enteredName"/>
            <input type="number" placeholder="Your age" v-model="enteredAge" />
            <button>Set User Data</button>
        </form>
    </section>
</template>

<script>
    export default{
        emits: ['set-data'], // Criação do emit
        data(){
            return{
                enteredName: "",
                enteredAge: "",
            };
        },
        methods: {
            submitData(){
                this.$emit('set-data',this.enteredName ,this.enteredAge) // envia o emit?
            }
        }
    }
</script>

