class TempManager {
  constructor() {
    this.cityData = []
  }

  async getDataFromDB() {
    const cities = await $.get(`/cities`) 
      for (let city of cities) {
        this.cityData.push(city)
      }
    return this.cityData
  }

  async getCityData(cityName) {
    const data = await $.get(`/city/${cityName}`)
    const realdata = {
      name: cityName,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
      conditionPic: data.current.condition.icon,
      updatedAt: data.current.last_updated
    }
    return realdata
  }


  saveCity(data) {
    $.ajax({
      type: "POST",
      url: `/city`,
      data: data,
      success: function (data) {
      }
    })
  }


  removeCity(cityname) {
    $.ajax({
      type: "DELETE",
      url: `/city`,
      data: { city: cityname },
      success: function (data) {
      }
    })
  }

}

