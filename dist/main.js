class Controller {
    constructor(render,tmpManeger){
        this.render = render
        this.tmpManeger =tmpManeger
    }
    async loadPage(){
        let data = await this.tmpManeger.getDataFromDB()
        this.render.renderData(data)
        const tmp = this.tmpManeger
        const cont = this
        $(`.delete`).on(`click`,function(){
        let city = $(this).closest("span").find(".name").html()
        console.log(city)
           tmp.removeCity(city)
           location.reload()
        })
    }
    async handleSearch (){
       let cityInput = $(`#citySerch`).val()
       let waether = await this.tmpManeger.getCityData(cityInput)
       this.render.renderData([waether])
       const tmp = this.tmpManeger
       const save = $(`#button`)
       save.html('Save')
       save.on(`click`,function(){
        tmp.saveCity(waether)
        location.reload()
       })
       }
    
}

const tmpManeger = new TempManager()
const render = new Render()
const controller = new Controller(render,tmpManeger)
window.onload = controller.loadPage()
$(`#search`).on(`click`,function(){
    controller.handleSearch()
})