---
description: How to make it check For Tea +
---

# Tea + Verification

## Example to check if player has Tea+ (Premium)

#### Request

```js
let url = "http://localhost:3000/premium?user=c9e49f5826394be488779f175187f917"
let data = await fetch(url);
let json = await data.json();
console.log(json)
```

#### Output

```json
{
  "uuid": "c9e49f5826394be488779f175187f917",
  "active": true,
  "ends": 1694182595006,
  "name": "Skyblock_Lobby",
  "starts": 1691590595006,
  "success": true
}
```

<div align="center">

<img src="https://github.com/TeaclientMinecraft/TeaProxy/assets/78495381/8c1c7f14-1fc1-48da-8a7a-0a2d0355e2fe" alt="">

</div>
