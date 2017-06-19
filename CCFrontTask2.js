exports.damage = function(spellString) {
	var damage = 0;
	var feCount = (spellString.match(/fe/g) || []).length;
  if ((feCount >1) || (feCount == 0)) {
  	//more than one 'fe' or doesn't contain fe
  	return damage;
  }
  //trim input spell so it starts with everyting after fe and damage = 1
	spellString = spellString.substring(spellString.indexOf("fe") + 2);
  damage += 1;
  //trim input spell so it ends with last ai
  spellString = spellString.substring(0, spellString.lastIndexOf("ai")+2);
  //loop through the remaining spell
  while(spellString.length > 0) {      
    // check if next spell part is 
    switch(spellString.substring(0,3)) {
    	//check 3 letter spell with biggest number of points
      case "dai":
      	damage += 5;
        spellString = spellString.slice(3);
        continue;
      	break;
      default:
      	break;
    }
      
    switch(spellString.substring(0,4)) {
    	//check 4 letter spell - mix of "ai" and "ne"
      case "aine":
      	damage += 4;
        spellString = spellString.slice(4);
        continue;
      	break;
      default:
      	break;  
    }
      
    switch(spellString.substring(0,3)) {
            //check 3 letter spells
      case "jee":
      case "ain":
      	damage += 3;
        spellString = spellString.slice(3);
        continue;
      	break;
      default:
      	break;
    }
           
    switch(spellString.substring(0,2)) {
    	//check 2 letter spells
      case "je":
      case "ne":
      case "ai":
      	damage += 2;
        spellString = spellString.slice(2);
        continue;
        break;
      default:
      	break;
    }
    damage -= 1;
    spellString = spellString.slice(1);
  }
  if (damage < 0) {
  	damage = 0;
  }
  return damage;
}