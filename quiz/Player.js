function Player(playerInfo)
{
    this.name = playerInfo.name;
    this.token = playerInfo.token;
    this.score = 0;
    this.answer = -1;
    
    return this;
}

module.exports = Player;