

export default function trickLib(trickArr){
    const trickPick = {
      "Regular": {
      "Frontside": {
        "halfBoard": {
          "halfBody": {
            "Kickflip": "Frontside Flip",
            "Heelflip": "Frontside Heelflip",
            "Impossible": "Frontside 180 Impossible",
            "ollieNorth": "Frontside 180 Ollie North",
            "None": "Frontside 180"
          },
          "noBody": {
            "Kickflip": "Hardflip",
            "Heelflip": "Varial Heelflip",
            "None": "Frontside Shuvit"
          },
        },
        "fullBoard": {
           "halfBody": {
             "Kickflip": "Big Hardflip",
             "Heelflip": "Big Heelflip",
             "None": "Frontside Bigspin"
           },
           "fullBody": {
             "Kickflip": "Frontside 360 Kickflip",
             "Heelflip": "Frontside 360 Heelflip",
             "Impossible": "Frontside 360 Impossible",
             "ollieNorth": "Frontside 360 Ollie North",
             "None": "Frontside 360"
           },
           "noBody": {
             "Kickflip": "360 Hardflip",
             "Heelflip": "Laserflip",
             "None": "Frontside 360 Shuvit"
           },
        },
      },
      "Backside": {
        "halfBoard": {
          "halfBody": {
            "Kickflip": "Backside Flip",
            "Heelflip": "Backside Heelflip",
            "Impossible": "Backside 180 Impossible",
            "ollieNorth": "Backside 180 Ollie North",
            "None": "Backside 180"
          },
          "noBody": {
            "Kickflip": "Varial Kickflip",
            "Heelflip": "Inward Heelflip",
            "None": "Backside Shuvit"
          },
        },
        "fullBoard": {
           "halfBody": {
             "Kickflip": "Bigflip",
             "Heelflip": "Big Inward Heelflip",
             "None": "Backside Bigspin"
           },
           "fullBody": {
             "Kickflip": "Backside 360 Kickflip",
             "Heelflip": "Backside 360 Heelflip",
             "Impossible": "Backside 360 Impossible",
             "ollieNorth": "Backside 360 Ollie North",
             "None": "Backside 360"
           },
           "noBody": {
             "Kickflip": "360 Flip",
             "Heelflip": "360 Inward Heelflip",
             "None": "Backside 360 Shuvit"
           },
        },
      },
      "nofsbs":{
        "noBoard":{
          "noBody":{
            "Kickflip": "Kickflip",
            "Heelflip": "Heelflip",
            "Impossible": "Impossible",
            "ollieNorth": "Ollie North",
            "None": "Ollie, Seriously?"
          },
        },
      },
    },
      "Nollie": {
        "Frontside": {
        "halfBoard": {
          "halfBody": {
            "Kickflip": "Nollie Frontside Flip",
            "Heelflip": "Nollie Frontside Heelflip",
            "Impossible": "Nollie Frontside 180 Impossible",
            "ollieNorth": "Nollie Fronstide 180 Ollie North",
            "None": "Nollie Frontside 180"
          },
          "noBody": {
            "Kickflip": "Nollie Hardflip",
            "Heelflip": "Nollie Varial Heelflip",
            "None": "Nollie Frontside Shuvit"
          },
        },
        "fullBoard": {
           "halfBody": {
             "Kickflip": "Nollie Big Hardflip",
             "Heelflip": "Nollie Big Heelflip",
             "None": "Nollie Frontside Bigspin"
           },
           "fullBody": {
             "Kickflip": "Nollie Frontside 360 Kickflip",
             "Heelflip": "Nollie Frontside 360 Heelflip",
             "Impossible": "Nollie Frontside 360 Impossible",
             "ollieNorth": "Nollie Fronstide 360 Ollie North",
             "None": "Nollie Frontside 360"
           },
           "noBody": {
             "Kickflip": "Nollie 360 Hardflip",
             "Heelflip": "Nollie Laserflip",
             "None": "Nollie Frontside 360 Shuvit"
           },
        },
      },
      "Backside": {
        "halfBoard": {
          "halfBody": {
            "Kickflip": "Nollie Backside Flip",
            "Heelflip": "Nollie Backside Heelflip",
            "Impossible": "Nollie Backside 180 Impossible",
            "ollieNorth": "Nollie Backside 180 Ollie North",
            "None": "Nollie Backside 180"
          },
          "noBody": {
            "Kickflip": "Nollie Varial Kickflip",
            "Heelflip": "Nollie Inward Heelflip",
            "None": "Nollie Backside Shuvit"
          },
        },
        "fullBoard": {
           "halfBody": {
             "Kickflip": "Nollie Bigflip",
             "Heelflip": "Nollie Big Inward Heelflip",
             "None": "Nollie Backside Bigspin"
           },
           "fullBody": {
             "Kickflip": "Nollie Backside 360 Kickflip",
             "Heelflip": "Nollie Backside 360 Heelflip",
             "Impossible": "Nollie Backside 360 Impossible",
             "ollieNorth": "Nollie Backside 360 Ollie North",
             "None": "Nollie Backside 360"
           },
           "noBody": {
             "Kickflip": "Nollie 360 Flip",
             "Heelflip": "Nollie 360 Inward Heelflip",
             "None": "Nollie Backside 360 Shuvit"
           },
        },
      },
      "nofsbs":{
        "noBoard":{
          "noBody":{
            "Kickflip": "Nollieflip",
            "Heelflip": "Nollie Heelflip",
            "Impossible": "Nollie Impossible",
            "ollieNorth": "Nollie Ollie North",
            "None": "Nollie, Seriously?"
          },
        },
    },
      },
      "Switch": {
        "Frontside": {
        "halfBoard": {
          "halfBody": {
            "Kickflip": "Switch Frontside Flip",
            "Heelflip": "Switch Frontside Heelflip",
            "Impossible": "Switch Frontside 180 Impossible",
            "ollieNorth": "Switch Fronstide 180 Ollie North",
            "None": "Switch Frontside 180"
          },
          "noBody": {
            "Kickflip": "Switch Hardflip",
            "Heelflip": "Switch Varial Heelflip",
            "None": "Switch Frontside Shuvit"
          },
        },
        "fullBoard": {
           "halfBody": {
             "Kickflip": "Switch Big Hardflip",
             "Heelflip": "Switch Big Heelflip",
             "None": "Switch Frontside Bigspin"
           },
           "fullBody": {
             "Kickflip": "Switch Frontside 360 Kickflip",
             "Heelflip": "Switch Frontside 360 Heelflip",
             "Impossible": "Switch Frontside 360 Impossible",
             "ollieNorth": "Switch Fronstide 360 Ollie North",
             "None": "Switch Frontside 360"
           },
           "noBody": {
             "Kickflip": "Switch 360 Hardflip",
             "Heelflip": "Switch Laserflip",
             "None": "Switch Frontside 360 Shuvit"
           },
        },
      },
      "Backside": {
        "halfBoard": {
          "halfBody": {
            "Kickflip": "Switch Backside Flip",
            "Heelflip": "Switch Backside Heelflip",
            "Impossible": "Switch Backside 180 Impossible",
            "ollieNorth": "Switch Backside 180 Ollie North",
            "None": "Switch Backside 180"
          },
          "noBody": {
            "Kickflip": "Switch Varial Kickflip",
            "Heelflip": "Switch Inward Heelflip",
            "None": "Switch Backside Shuvit"
          },
        },
        "fullBoard": {
           "halfBody": {
             "Kickflip": "Switch Bigflip",
             "Heelflip": "Switch Big Inward Heelflip",
             "None": "Switch Backside Bigspin"
           },
           "fullBody": {
             "Kickflip": "Switch Backside 360 Kickflip",
             "Heelflip": "Switch Backside 360 Heelflip",
             "Impossible": "Switch Backside 360 Impossible",
             "ollieNorth": "Switch Backside 360 Ollie North",
             "None": "Switch Backside 360"
           },
           "noBody": {
             "Kickflip": "Switch 360 Flip",
             "Heelflip": "Switch 360 Inward Heelflip",
             "None": "Switch Backside 360 Shuvit"
           },
        },
      },
      "nofsbs":{
        "noBoard":{
          "noBody":{
            "Kickflip": "Switchflip",
            "Heelflip": "Switch Heelflip",
            "Impossible": "Switch Impossible",
            "ollieNorth": "Switch Ollie North",
            "None": "Switch Ollie, Seriously?"
          },
        },
      },
    },
        "Fakie": {
        "Frontside": {
        "halfBoard": {
          "halfBody": {
            "Kickflip": "Fakie Frontside Flip",
            "Heelflip": "Fakie Frontside Heelflip",
            "Impossible": "Fakie Frontside 180 Impossible",
            "ollieNorth": "Fakie Fronstide 180 Ollie North",
            "None": "Fakie Frontside 180"
          },
          "noBody": {
            "Kickflip": "Fakie Hardflip",
            "Heelflip": "Fakie Varial Heelflip",
            "None": "Fakie Frontside Shuvit"
          },
        },
        "fullBoard": {
           "halfBody": {
             "Kickflip": "Fakie Big Hardflip",
             "Heelflip": "Fakie Big Heelflip",
             "None": "Fakie Frontside Bigspin"
           },
           "fullBody": {
             "Kickflip": "Fakie Frontside 360 Kickflip",
             "Heelflip": "Fakie Frontside 360 Heelflip",
             "Impossible": "Fakie Frontside 360 Impossible",
             "ollieNorth": "Fakie Fronstide 360 Ollie North",
             "None": "Fakie Frontside 360"
           },
           "noBody": {
             "Kickflip": "Fakie 360 Hardflip",
             "Heelflip": "Fakie Laserflip",
             "None": "Fakie Frontside 360 Shuvit"
           },
        },
      },
      "Backside": {
        "halfBoard": {
          "halfBody": {
            "Kickflip": "Fakie Backside Flip",
            "Heelflip": "Fakie Backside Heelflip",
            "Impossible": "Fakie Backside 180 Impossible",
            "ollieNorth": "Fakie Backside 180 Ollie North",
            "None": "Fakie Backside 180"
          },
          "noBody": {
            "Kickflip": "Fakie Varial Kickflip",
            "Heelflip": "Fakie Inward Heelflip",
            "None": "Fakie Backside Shuvit"
          },
        },
        "fullBoard": {
           "halfBody": {
             "Kickflip": "Fakie Bigflip",
             "Heelflip": "Fakie Big Inward Heelflip",
             "None": "Fakie Backside Bigspin"
           },
           "fullBody": {
             "Kickflip": "Fakie Backside 360 Kickflip",
             "Heelflip": "Fakie Backside 360 Heelflip",
             "Impossible": "Fakie Backside 360 Impossible",
             "ollieNorth": "Fakie Backside 360 Ollie North",
             "None": "Fakie Backside 360"
           },
           "noBody": {
             "Kickflip": "Fakie 360 Flip",
             "Heelflip": "Fakie 360 Inward Heelflip",
             "None": "Fakie Backside 360 Shuvit"
           },
        },
      },
      "nofsbs":{
        "noBoard":{
          "noBody":{
            "Kickflip": "Fakieflip",
            "Heelflip": "Fakie Heelflip",
            "Impossible": "Fakie Impossible",
            "ollieNorth": "Fakie Ollie North",
            "None": "Fakie Ollie, Seriously?"
          },
        },
      },
     },
    };
    //return trickPick[trickArr[0]][trickArr[1]][trickArr[2]][trickArr[3]][trickArr[4]];
    
    if (typeof trickPick[trickArr[0]] === 'undefined' || typeof trickPick[trickArr[0]][trickArr[1]] === 'undefined' ||
        typeof trickPick[trickArr[0]][trickArr[1]][trickArr[2]] === 'undefined' || 
        typeof trickPick[trickArr[0]][trickArr[1]][trickArr[2]][trickArr[3]] === 'undefined' ||
        typeof trickPick[trickArr[0]][trickArr[1]][trickArr[2]][trickArr[3]][trickArr[4]] === 'undefined'){
      return "Well that's just great! YOU BROKE IT!";
    }
    else{
      return trickPick[trickArr[0]][trickArr[1]][trickArr[2]][trickArr[3]][trickArr[4]];
    }
  }

  