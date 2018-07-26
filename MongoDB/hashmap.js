var hashMap = [];
hashMap.length = 3;

String.prototype.hashCode = function(){
    var hash = 0;
    if(this.length == 0){
        return hash;
    }
    for(i=0; i<this.length; i++){
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char;  // bitwise operators are used to manipulate the string in binary
        hash &= hash;
    }
    return hash;                         // by the end of the loop, the hash is unique to this string
}
// Now, when we need a particular string's hash code, we may call its hashCode method, which we just created
var hashedKey = "role".hashCode();

function mod(input, div){
    return (input % div + div) % div;
}
// use the function to get the index position where we should store our data
function hashInsert(key, value){
  var hashedKey = key.hashCode();
  var idx = mod(hashedKey, hashMap.length);
  if (hashMap[idx] === undefined){
    hashMap[idx] = [key, value];

  }else {
        hashMap[idx][1] = value;
    }
}
hashInsert('role', 'sde')
console.log(hashMap);
//function to lookup
function hashLookup(hashmap, key){
  var hashedKey = key.hashCode();
  var idx = mod(hashedKey, hashMap.length);

    if (hashmap[idx][0]===key){
      return hashmap[idx][1];
    }
    else{
      return null;
    }

}
console.log(hashLookup(hashMap, "role"));

function hashGrowInsert(key, value, hashMap){
  var hashedKey = key.hashCode();
  var idx = mod(hashedKey, hashMap.length);
  if (hashMap[idx] === undefined){
    hashMap[idx] = [key, value];

  }else {
        hashMap[idx][1] = value;
    }

    //code to alter for growing hashMap
    var count =0;
    for(var i=0; i<hashMap.length; i++){
      if(hashMap[i]){count++;}
    }

    if(count > (0.70 * hashMap.length)){
      console.log("growth needed");
      return hashGrow(hashMap);
    }
    else{
      return hashMap;
    }
}

function hashGrow(hashMap){
  var currentCapacity = hashMap.length;
  var resizedHashMap = [];
    resizedHashMap.length = currentCapacity + (2 * currentCapacity); // increase by 200%
    for (let x = 0; x < hashMap.length; x++) {
        if (hashMap[x]){
            hashInsert(hashMap[x][0], hashMap[x][1], resizedHashMap);
        }
    }
    hashMap = resizedHashMap;
    console.log(hashMap)
    return hashMap;
}
hashGrowInsert('name', 'Tinku',hashMap);
hashGrowInsert('fav_color', 'green',hashMap);
hashGrowInsert('sport','soccer',hashMap);
