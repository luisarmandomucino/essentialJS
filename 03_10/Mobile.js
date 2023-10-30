class Mobile {


    constructor(
        model, 
        brand, 
        batterySize,
        color,
        screenSize,
        numOfCams
    ) {
        this.model = model;
        this.brand = brand;
        this.batterySize = batterySize;
        this.color = color;
        this.screenSize = screenSize;
        this.numOfCams = numOfCams;
    }

    // métodos

    changeModel (newModel) {
        this.model = newModel;
    }

    changeBrand(newBrand) {
        this.brand = newBrand;
    }
    
    
}

export default Mobile; 