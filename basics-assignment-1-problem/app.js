const app = Vue.createApp({
    data(){
        return{
            name: "Luis",
            age: 19,
            imgLink: 'https://lh3.googleusercontent.com/fife/AAbDypBpSm5taq_qiGbyhUbnjN6r952n6ASWkrN6h_k1KLxJGZuV90FKlPulBkzKERH0SM62UOz5v-JoFqb0Ebb67tN7QAf6hPnRenZAHKMpBKLxgB5W9xl4aS3q1a0M1pzO6m6SlIpDYYK5Eot6Ap0s6bjrJmVVdnlkPmnGxePA5Fs8jU46bnEOVfJ_zQUQiT6xLfzO1YDIGx7NPwbF5XqwT61v0SgE7dPZSr-ej7xRG7TqucbI1OXthpUxKX_wT0qID3Ddd5Lx5TMMXu3vlXNKikI3ZSiMmCVxnU9pc3Tj_mdPr6wqs4xfHc8PiaFW_PcDOdTRkW9rcNDKU4lbkf6R316KavkU-V1XjRbIf8IBuk5wBdVhlbx2j4TJysqXUm5lIge2G78UPQ-eVbw_loGyaQmntLKb0h87A34i7iGzVf_gVyKimjYuuqrPCchIqfAb3PgNdy60vVBYv5GgYsXxr7AeTwfoGVHr7uBNIhZUIHAUHQhMjrDfYPR8Qv3CNF4Zz7M0KFKb2Fzx1ikY0BRDLxPePXcsSTUvVdkWYq4b1trAV72jwgrq-ehfJtG1l1Tfoxuld6rkioWQCBWnBnR_8LC9lJLXDER_fNyKsXI_agc58Hzt5_E0Dra5d4ld0ojRjWuL1HiHplut29NZsGI3z-P1weoTtjYm9_N0riuTzlbtcLbfJZSM6xPLTi_Jn9WG9qwviUCUlC_HLZgkXVSh4IuQrBoFYyVMzWoG2ckCWkl9aAnSe-Z9crun-1I-82qOa4y2XoEhxSdWnRPAm94NZrYXErKoBXMxtX4mJ-KYdyCgChIPY40q6q8pFlwcCT3p5O03RAPXQLkBVwFq43i7ow4M39PoI2gVbmMa5J815WOelkCOMvNlu1QKjEEJ-um7nutIW_YDnJqwwslspiHvSOHy4aP1d43R8P5YJSrwvOMwOGdJNmxVsGAzhUKc3w8daFx9jYdYjDWKr3Mmx6ye_ch8kV9y=w1173-h999'
        };
    },
    methods: {
        ageIn5years(){
            return this.age + 5;
        },
        favoriteNumber(){
            return Math.random()
        }
    }
}).mount('#assignment');