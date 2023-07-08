function generateMockData(numItems) {
  //可选值
  const areas = ["亚洲", "美洲", "欧洲", "南美洲"];
  const nations = ["中国", "美国", "意大利", "日本", "墨西哥", "巴西", "法国"];
  const popularities = ["高", "中", "较低", "极高"];
  const productNames = ["麻辣火锅", "经典芝士汉堡", "炸鸡块", "玛格丽塔披萨", "烤牛肉夹馍", "寿司拼盘", "玉米饼卷", "烤翅", "巴西烤肉", "法式可颂"];
  
  const imagePathMappings = {
    "麻辣火锅": ["hotpot1.jpg", "hotpot2.jpg"],
    "经典芝士汉堡": ["hamburger.png", "hamburger1.jpg"],
    "炸鸡块": ["chickenFired.jpg", "chickenFired1.jpg"],
    "玛格丽塔披萨": ["pizza.jpg", "pizza1.png"],
    "烤牛肉夹馍": ["beefBis.jpg", "beefBis1.jpg"],
    "寿司拼盘": ["shousi.jpg", "shousi1.jpg"],
    "玉米饼卷": ["yumi.jpg", "yumi1.jpg"],
    "烤翅": ["chi.jpg", "chi1.jpg"],
    "巴西烤肉": ["barbecue.jpg", "barbecue1.jpg"],
    "法式可颂": ["kesong.jpg", "kesong1.jpg"]
  };

  const products = [];

  for (let i = 0; i < numItems; i++) {
    const name = productNames[Math.floor(Math.random() * productNames.length)];
    const product = {
      id: i + 1,
      area: areas[Math.floor(Math.random() * areas.length)],
      nation: nations[Math.floor(Math.random() * nations.length)],
      popularity: popularities[Math.floor(Math.random() * popularities.length)],
      name: name,
      price: Math.floor(Math.random() * 300),
      remaining: Math.floor(Math.random() * 60),
      productionDate: new Date(Date.now() - Math.random() * 31536000000).toISOString(),
      imagePath: "assets/foodPic/" + imagePathMappings[name][Math.floor(Math.random() * 2)]
    };
    products.push(product);
  }
  return products;
}

const mockData = {
  products: generateMockData(100) //生成100个产品
};

console.log(JSON.stringify(mockData, null, 2));  // nicely formatted JSON output
