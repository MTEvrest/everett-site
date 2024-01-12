const generateClouds = () => {
    const cloudGenerators = [];
    //const numberGenerators = Math.max(4, Math.ceil(Math.random() * 6));
    const numberGenerators = 1;
    for(let i = 0; i < numberGenerators; i++){
        cloudGenerators.push(
            {
                direct: "left",
                size: {
                  width: 0,
                  height: 5
                },
                position: {
                  x: 102,
                },
                rate: {
                  quantity: {min: 10, max: 50},
                },
                life: {
                  count: 0,
                  duration: 0.1,
                  delay: {min: 1, max: 3}
                },
              }
        )
    }
    return cloudGenerators;
}

export default generateClouds;