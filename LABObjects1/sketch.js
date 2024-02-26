let radio = {
  manufacturer: "panasonic",
  color: "pink",
  fm: true,
  radioWidth: 100,
  radioHeight: 50,
  radioOn: true,
  
  display: function(){
    fill(this.color);
    rect(this.radioX,this.radioY,this.radioWidth,this.radioHeight);
  },
  radioX:0,
  radioY:0,
  setPosition: function(xPos,yPos){
    this.radioX = xPos;
    this.radioY = yPos;
  }
  };
  
  
  
  function setup() {
    createCanvas(400, 400);
    background('lightgray');
    print(radio.manufacturer);
    print(radio.manufacturer, radio.radioOn);
    print("My radio was made by" + radio.manufacturer);
  }
  
  function draw() {
    
  }
  
  function mousePressed(){
    radio.setPosition(mouseX,mouseY);
  radio.display();
  }