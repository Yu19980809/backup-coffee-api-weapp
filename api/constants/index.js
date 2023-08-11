const drinks = [
  {
    category: '经典咖啡',
    name: '生酪拿铁',
    sales: 2,
    current_price: 18,
    origin_price: 20,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/8cca037f-b25f-4b5e-a757-84f9022e6a41/生酪拿铁.jpg'
  },
  {
    category: '经典咖啡',
    name: '美式咖啡',
    sales: 0,
    current_price: 21,
    origin_price: 21,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/c8d37ca1-0bcc-4041-913b-e86b66313d2a/美式咖啡.jpg'
  },
  {
    category: '丝绒拿铁',
    name: '生椰丝绒拿铁',
    sales: 0,
    current_price: 22,
    origin_price: 22,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/19e21d7b-f6a4-4acc-ba71-2098e56554d5/webp/5f8ccc7a-ed57-4893-aeac-6a360639e420.jpg'
  },
  {
    category: '丝绒拿铁',
    name: '黑糖丝绒拿铁',
    sales: 0,
    current_price: 22,
    origin_price: 25,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/892149b1-5024-445c-863a-dc6a83211e34/黑糖丝绒拿铁.jpg'
  },
  {
    category: '丝绒拿铁',
    name: '香草丝绒拿铁',
    sales: 0,
    current_price: 23,
    origin_price: 23,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/2755d632-fb05-4eb5-8707-dea33a81af58/香草丝绒拿铁.jpg'
  },
  {
    category: '丝绒拿铁',
    name: '布丁丝绒拿铁',
    sales: 0,
    current_price: 21,
    origin_price: 21,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/2bacf466-1529-419a-b3e2-a0e9dfbc6fef/webp/f9cf859a-9184-4da4-9347-98502a185bba.jpg'
  },
  {
    category: '厚乳拿铁',
    name: '陨石厚乳拿铁',
    sales: 2,
    current_price: 26,
    origin_price: 26,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/e2b4e7f1-00df-4eb7-a207-b9ff5e8f773e/陨石厚乳拿铁.jpg'
  },
  {
    category: '厚乳拿铁',
    name: '太妃厚乳拿铁',
    sales: 0,
    current_price: 25,
    origin_price: 25,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/0b1a6952-c417-4f16-bf8f-83f52c504987/太妃厚乳拿铁.jpg'
  },
  {
    category: '拿铁',
    name: '焦糖拿铁',
    sales: 0,
    current_price: 23,
    origin_price: 23,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/2b3e511c-9f70-409b-b404-e80a535cfc73/黑糖拿铁.jpg'
  },
  {
    category: '拿铁',
    name: '香草拿铁',
    sales: 0,
    current_price: 22,
    origin_price: 22,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/bc0ec280-c418-4549-808e-8272cb1b5afb/香草拿铁.jpg'
  },
  {
    category: '拿铁',
    name: '白桃抹茶拿铁',
    sales: 0,
    current_price: 24,
    origin_price: 24,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/8807a01f-c43b-4bab-a8dd-aac036574e75/白桃抹茶拿铁.jpg'
  },
  {
    category: '拿铁',
    name: '椰云拿铁',
    sales: 0,
    current_price: 25,
    origin_price: 25,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/5d7c8906-3048-481a-8d74-e2bd73e174a6/椰云拿铁.jpg'
  },
  {
    category: '拿铁',
    name: '生椰拿铁',
    sales: 0,
    current_price: 20,
    origin_price: 20,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/18f7b2c8-d002-4b7a-a579-69a86acc9743/webp/0b3ce15b-d94a-4d5a-b012-e35dcc8176fc.jpeg'
  },
  {
    category: '拿铁',
    name: '阿华田雪顶拿铁',
    sales: 0,
    current_price: 22,
    origin_price: 22,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/08d7c579-a21f-4cae-960c-e818d6810dbe/阿华田拿铁.jpg'
  },
  {
    category: '果茶',
    name: '冰摇红茶',
    sales: 2,
    current_price: 16,
    origin_price: 16,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/e20dab98-bbc5-4ff0-b4f7-5069f7e50206/冰摇红茶.jpg'
  },
  {
    category: '果茶',
    name: '冰摇柠檬茶',
    sales: 2,
    current_price: 15,
    origin_price: 15,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/d531db65-0683-4ffd-9acc-e7046b141730/冰摇柠檬茶.jpg'
  },
  {
    category: '冷萃系列',
    name: '经典冰美式',
    sales: 2,
    current_price: 20,
    origin_price: 20,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/ed22e738-1f34-4703-9b15-f33da1f173dc/经典冰美式.jpg'
  },
  {
    category: '蛋糕小食',
    name: '梅果杯子蛋糕',
    sales: 0,
    current_price: 18,
    origin_price: 18,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/da5fde10-3d0e-4599-86c7-af0d1b65ad82/梅果杯子蛋糕.jpg'
  },
  {
    category: '蛋糕小食',
    name: '黑巧克力蛋糕',
    sales: 0,
    current_price: 20,
    origin_price: 20,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/9748bdc0-3f92-4c28-9450-a03c69598be1/黑巧克力蛋糕.jpg'
  },
  {
    category: '蛋糕小食',
    name: '榴莲蛋糕',
    sales: 0,
    current_price: 23,
    origin_price: 23,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/fc31e754-7ce0-4051-be24-6f133a416392/榴莲蛋糕.jpg'
  },
  {
    category: '蛋糕小食',
    name: '提拉米苏',
    sales: 0,
    current_price: 24,
    origin_price: 24,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/0194e03e-aefc-4da4-beb5-0922c8bf71e8/提拉米苏千层.jpg'
  },
  {
    category: '配件',
    name: '马克杯',
    sales: 0,
    current_price: 15,
    origin_price: 25,
    image: 'https://nhsoft-persistent-1251937768.cos.ap-shanghai.myqcloud.com/mars-file/818849308107317249/983a8f21-0c5e-44b5-8a3d-9f23f2050fe1/咖啡.jpg'
  }
]

export {
  drinks
}
