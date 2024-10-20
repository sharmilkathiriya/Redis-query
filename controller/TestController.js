const client = require("../redisClient");

exports.TestContorller = async (req, res) => {
  try {
    // https://youtu.be/Vx2zPMPvmug?si=p41t7l_vMlNLHA30

     await client.set("msg:1", "Deimos"); // set data
    // const clientRes = await client.get("msg:1"); // get data by key

    // await client.set("test:1", "expire");
    // await client.expire("test:1", 10); //set expire time 10 sec
    // const clientRes = await client.get("test:1");
    // const clientRes = await client.get("test:name:2");   // use multipal ":" in key for group
    // const checkSetValue= await client.set("msg:2", "Deimos",'nx');  //  set only if key not exiest

    // const clientRes = await client.mGet(["user:1","user:2"]);  // get multipal value

    // const clientRes= await client.mSet([["msg:6", "Hii"],["msg:7", "Hello"]]);

    // const  clientRes = await client.set("incrdicr","1")
    // const clientRes = await client.incrBy("incrdicr","5")  //  Increment number
    // const clientRes = await client.incrBy("incrdicr","-1")  //  dicrement number

    // const clientRes = await client.incrByFloat("incrdicr","0.5")   // Increment float number

    //  await client.set("JSON", JSON.stringify( {name: "Hyperion",type: "Bike"}));  // set JSON data

    // const clientRes = await client.get("JSON")  // get JSON data

    // QUE                   STACK
    // L -> INSERT            L -> INSERT
    // R -> REMOVE            L -> REMOVE

    // const clientRes = await client.lPush("message",'Ham')  // list in add from left side   => ["   " , "   " , "   "]

    // const clientRes = await client.rPush("message",'man')  // list in add from right side   ["   " , "   " , "   "]  <=

    //  const clientRes = await client.lPop("message")  // list in remove from left side <=  ["   " , "   " , "   "]

    //  const clientRes = await client.lLen("message")  // get list length

    // const clientRes = await client.lRange("message",0,-1)   // get list value

    // const clientRes = await client.lPush("blockMessage",'Ham:4')
    // const clientRes = await client.blPop("blockMessage",10)  // remove form pop and if not value then wait 10sec and then return null

    // const clientRes = await client.sAdd("IP",'4') // set is an unordered collection of add unique strings

    // const clientRes = await client.sRem("IP",'5')  //  remove value from set

    // const clientRes = await client.sIsMember("IP",'1')  // check value is present or not

    // const clientRes = await client.hSet("hashObject", {
    //     'model': 'Deimos',
    //     'brand': 'Ergonom',
    //     'type': 'Enduro bikes',
    //     'price': 4972,
    //   })      // add object like value using hash

    //   const clientRes  = await client.hGet('hashObject', 'model')  // get value form hash
    //   const clientRes  = await client.hGet('hashObject', ['model','type'])  // get multipal value form hash
    // const clientRes = await client.hSet("hashObject", {'features': JSON.stringify( ['item1', 'item2', 'item3'])})   //able to add value externaly in hash

    // const clientRes  = await client.zAdd('zScore', { score: 1, value: 'Jeel' })   //  sorted sets auto sorted by score
    // const clientRes = await client.zRange('zScore', 0, -1);   // get all value
    // const clientRes = await client.zRank('zScore','Norem');  // get value rank
    // const clientRes = await client.zRem('zScore','Norem');   // remove value

    // const clientRes = await client.xAdd(
    //     'race:france', '*', {
    //       'rider': 'Castilla',
    //       'speed': '30.2',
    //       'position': '1',
    //       'location_id': '1'
    //     }
    //   ); // tracking user actions and return timestamp

    // const clientRes = await client.geoAdd('geolocation',
    // {longitude: -122.2469854,latitude: 37.8104049,member: 'station:3'});   // set member with geolocation for calculate by KM

    // const clientRes = await client.geoRadius(
    // "geolocation",
    // -122.2469854, 37.8104049,
    // 2, "km"
    // );   //  find place arround let, long  (NOT WORKING)

    // const clientRes = client.SUBSCRIBE("not", (message) => {
    //     console.log("Received message:", message);
    // });  live chat ex:- socketio (NOT WORKING)

    // const clientRes = await client.PUBLISH("not", "Hii"); live chat ex:- socketio (NOT WORKING)

    // console.log("clientResponse", clientRes);

    //  REAL EXAMPAL
    // try {
    //   const clientRes = await client.get("apidata");

    //   if (clientRes) {
    //     console.log("IF", clientRes.length);
    //     return res.json({
    //       message: "Operation successful",
    //       data: JSON.parse(clientRes),
    //     });
    //   } else {
    //     const realTest = await testApi();
    //     await client.set("apidata", JSON.stringify({ realTest }));
    //     await client.expire("apidata", 10);
    //     console.log("ELSE", realTest.length);
    //     return res.json({ message: "Operation successful", data: realTest });
    //   }
    // } catch (error) {
    //   return res.json({ error: error.message });
    // }

    res.json({ message: "Operation successful" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const testApi = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};
