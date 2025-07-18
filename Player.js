class Player {
  constructor(name, level) {
    // things about the player 
    this.name = name;
    // the players level what spell and damge they have based off of this
    this.level = Number.isInteger(parseInt(level, 10)) ? parseInt(level, 10) : 1; // default level 1 if NaN

    // cords 
    this.posX = 0;
    this.posY = 0;

    // the level at which the player is at in the game every time you beat a boss and move onnto the next map this goes up by one
    this.gameLevel = 0; 
  }

  /// @breif calcs and returns how much damge the player can do
  /// @param {weaponLvL} the level of the weapon that is being used
  /// @return the amount of damge that gets done
  attack (weaponLvL) {
    /// @breif how much damage is being done
    /// @return the amount of calced damage
    const damage = () => {
      // use weaponLvL and this.level to cacl how much damage also use random nums
      let rand = Math.floor(Math.random() * 5);
      rand += weaponLvl + this.level;
      return rand;
    }

    return damage();
  }

  /// @breif when the player moves onto the next map afterbeating that maps boss.
  incGameLevel () {
    this.gameLevel++;
    return;
  }
};
