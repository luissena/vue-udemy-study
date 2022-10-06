<template>
    <div id="main">
        <active-user :username="user.name" :userage="user.age"/> <!-- username (props) => data (object user) // userage == username -->
        <user-data @set-data="setUserData"/> <!-- set-data (emit) => setUserData (method) => setar novos valores p object user -->
    </div>
</template>

<script>
    export default {
      data() {
        return {
          user: {
            name: "Luis Sena",
            age: 19,
          },
        };
      },
      methods: {
        setUserData(name,age){
            this.user = {
                name: name,
                age: age
            }
        }
      }
    };
    </script>

<style>

    *{
        margin: 0;
        padding: 0;
    }

    #main{
        -webkit-box-shadow: 0px 0px 9px -2px rgba(0,0,0,0.18);
        -moz-box-shadow: 0px 0px 9px -2px rgba(0,0,0,0.18);
        box-shadow: 0px 0px 9px -2px rgba(0,0,0,0.18);
        width: 50%;
        height: 200px;
        margin: auto;
    }

    #active-user{
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        width: 50%;

        font-size: 2rem;

        
    }

    form{
        margin: auto;
        width: 50%;
        display: flex;
        flex-direction: column;
    }
    input{
        padding: 5px;
    }
</style>