const generateClouds = () => {
    let cloudGenerators = [];
    const numberGenerators = Math.max(4, Math.ceil(Math.random() * 6));
    //const numberGenerators = 1;
    let bottomY = 0;
    for(let i = 0; i < numberGenerators; i++){
        const topY = Math.ceil((100/numberGenerators) * (i+1));
        cloudGenerators.push(
            {
                direct: "left",
                size: {
                  width: 0,
                  height: 5
                },
                position: {
                  x: 102,
                  y: Math.max(bottomY, Math.ceil(Math.random()*topY)),
                },
                rate: {
                  quantity: {min: 10, max: 50},
                  delay: {min: 3, max: 8},
                },
              }
        )
        bottomY = topY + 20;
    }
    return cloudGenerators;
}

export default generateClouds;