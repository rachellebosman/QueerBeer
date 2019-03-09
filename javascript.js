var app = new Vue({
    el: '#app',
    data: { 
    }, 

    data () {
        return {

            show_winkelwagen: false,
            bierkeuze: "",   
            aantal_items: 0,      
            bestel_lijst: [], 
            bier_in_bestel_lijst: {naam:""},
            bieren: [

                {
                "id": 1, 
                "soort": "IPA",
                "naam": "De IPGAY",
                "omschrijving": "De IPGAY is een krachtige maar toch gebalanseerde Indian Pale Ale die eigenlijk wel op elk moment van de dag kan.",
                "img": " ../vue/img/ipgay.png ", 
                "percentage": "6,2%",
                "brouwerij": "Brouwerij Bosman"
                },
        
                {
                "id": 2, 
                "soort": "trippel",
                "naam": "GenderNeutraal",
                "omschrijving": "Gender neutraal, de derde gender die er is. De alcohol in dit biertje is sterk aanwezig, dit bier een een overwegend fruitig karakter van citrusfruit en passievrucht.",
                "percentage": "8.5",
                "img": " ../vue/img/genderneutraal.png ", 
                "brouwerij": "x"
                },
        
                {
                "id": 3, 
                "soort": "dubbel",
                "naam": "I Bi Gay",
                "percentage": "6.5%",
                "img": " ../vue/img/ibegay.png ",
                "omschrijving": "De I Be Gay laat u dubbel genieten van dit biertje. Dit is een dubbel biertje die zoet-bitter is met veel volheiden toetsen van karamel.",
                "brouwerij": "x"
                },
        
                {
                "id": 4, 
                "soort": "",
                "naam": "test",
                "brouwerij": "x"
                } ]  

        } } ,

    methods: {

        showDiv() {
            document.getElementById('animatie').style.display = "block";
        },

        toevoegenWinkelwagen(bestel_lijst, naam){ 
            let toevoegen = { naam: naam }
            bestel_lijst.push(toevoegen);     
        },

        lijstVerwijderen(bestel_lijst, naam, aantal_items){
            this.aantal_items=0;
            bestel_lijst.splice(naam);     
        },

        index(aantal_items){
            this.aantal_items = aantal_items + 1;
        },   

        afrekenen(){
            alert("afgerekend");
        }
    } 
})
