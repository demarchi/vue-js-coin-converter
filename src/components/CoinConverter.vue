<template>
    <div class="converter">
        <h2>{{coinA}} to {{coinB}}</h2>
        <input type="text" v-model="coinA_value" v-bind:placeholder="coinA" />
        <input type="button" value="Converter" v-on:click="converter" />
        <h2>{{coinB_value}}</h2>
    </div>
</template>

<script>

    export default {
        name: "Converter",
        props: ["coinA","coinB"],
        data(){
            return{
                coinA_value: "",
                coinB_value: 0,
            }
        },
        
        methods:{
            converter(){
                let from_to = this.coinA + "_" + this.coinB;
                
                let url = "https://free.currconv.com/api/v7/convert?q="+ from_to +"&compact=y&apiKey=9bc4c3198176577a4d65" 

                fetch(url)
                .then( res => { 
                    return res.json() 
                } )
                .then(json=>{ 
                    let quotation = json[from_to].val;
                    this.coinB_value = (quotation * parseFloat(this.coinA_value)).toFixed(2);
                })
            }
        }
    };

</script>

<style scoped>
    .converter {
        padding: 20px;
        max-width: 200px;
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);
        background-color: white;
    }
</style>