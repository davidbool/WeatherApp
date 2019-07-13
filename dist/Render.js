class Render {

    constructor(){
    }
    renderData(allCityData){
            $('.cities').empty()
            const source = $('#city-template').html()
            const template = Handlebars.compile(source)
            let newHTML = template({city: allCityData})
            $('.cities').append(newHTML)                
            }
    }
    
