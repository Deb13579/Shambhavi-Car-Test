var testdrive, testwall
var testspeed, testweight
var deformation 
function setup() {
  createCanvas(1600,400);
  testspeed = random(55,90)
  testweight = random(400,1500)
 testdrive = createSprite(50, 200, 50, 50);
 testwall = createSprite(1500,200,60,height/2)
 testdrive.velocityX = testspeed; 
 testdrive.shapeColor = "cyan"
}

function draw() {
  background("black");  
  
      if(testwall.x-testdrive.x < (testdrive.width/testwall.width)/2)
      {
        testdrive.velocityX = 0
        deformation = 0.5*testweight*testspeed*testspeed /25000
    if (deformation < 100){
      console.log("Have a good time. From Deb")
          testdrive.shapeColor = "lime"
        }
    if (180 > deformation && deformation > 100){
      console.log("Hello Shambhavi")
          testdrive.shapeColor = "yellow"
        }
    if (deformation > 180){
      console.log("KKR")
          testdrive.shapeColor= "red"
        }
    
      }
    
  drawSprites();
}
