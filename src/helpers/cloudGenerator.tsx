const generateClouds = () => {
    let cloudGenerators = [];
    const numberGenerators = Math.max(4, Math.ceil(Math.random() * 7));
    let bottomY = 0;
    for(let i = 0; i < numberGenerators; i++){
        const topY = Math.ceil((100/numberGenerators) * (i+1));
        cloudGenerators.push(
            {
                direct: "left",
                size: {
                  width: 0,
                  height: 10
                },
                position: {
                  x: 100,
                  y: Math.max(bottomY, Math.ceil(Math.random()*topY)),
                },
                rate: {
                  quantity: Math.max(10, Math.ceil(Math.random()*30)),
                  delay: Math.max(5, Math.ceil(Math.random()*15)),
                },
              }
        )
        bottomY = topY + 1;
    }
    return cloudGenerators;
}

export default generateClouds;