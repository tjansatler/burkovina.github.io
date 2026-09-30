gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDEnemyBulletObjects2_1final = [];

gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2_1final = [];

gdjs.Game_32SceneCode.GDPlayerBulletObjects2_1final = [];

gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2_1final = [];

gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3= [];
gdjs.Game_32SceneCode.GDPlayerBulletObjects1= [];
gdjs.Game_32SceneCode.GDPlayerBulletObjects2= [];
gdjs.Game_32SceneCode.GDPlayerBulletObjects3= [];
gdjs.Game_32SceneCode.GDEnemyBulletObjects1= [];
gdjs.Game_32SceneCode.GDEnemyBulletObjects2= [];
gdjs.Game_32SceneCode.GDEnemyBulletObjects3= [];
gdjs.Game_32SceneCode.GDEnemyObjects1= [];
gdjs.Game_32SceneCode.GDEnemyObjects2= [];
gdjs.Game_32SceneCode.GDEnemyObjects3= [];
gdjs.Game_32SceneCode.GDHUD_9595TextObjects1= [];
gdjs.Game_32SceneCode.GDHUD_9595TextObjects2= [];
gdjs.Game_32SceneCode.GDHUD_9595TextObjects3= [];
gdjs.Game_32SceneCode.GDCenter_9595TextObjects1= [];
gdjs.Game_32SceneCode.GDCenter_9595TextObjects2= [];
gdjs.Game_32SceneCode.GDCenter_9595TextObjects3= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Plant_Obstacle": gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Game_32SceneCode.GDPlayerBulletObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects1Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Game_32SceneCode.GDPlayerBulletObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
gdjs.Game_32SceneCode.GDPlayerBulletObjects2.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getCenterXInScene()), (gdjs.Game_32SceneCode.GDPlayerObjects2[i].getCenterYInScene()), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects2Objects, (gdjs.Game_32SceneCode.GDPlayerObjects2[i].getAngle()), 700, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDPlayerBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterXInScene()), (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterYInScene()), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects1Objects, (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getAngle()), 700, null);
}
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects2Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects2Objects = Hashtable.newFrom({"Plant_Obstacle": gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.Game_32SceneCode.GDEnemyBulletObjects2});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects2[i].getX() < (( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects2[k] = gdjs.Game_32SceneCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects2[i].getX() > (( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects2[k] = gdjs.Game_32SceneCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects2[i].getY() < (( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects2[k] = gdjs.Game_32SceneCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects2[i].getY() > (( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects2[k] = gdjs.Game_32SceneCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Plant_Obstacle"), gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects2Objects, false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects2Objects, false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, 550, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects2[i].getTimerElapsedTimeInSecondsOrNaN("shoot") > 1.6 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects2[k] = gdjs.Game_32SceneCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects2 */
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
gdjs.Game_32SceneCode.GDEnemyBulletObjects2.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].resetTimer("shoot");
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].getBehavior("FireBullet").Fire((gdjs.Game_32SceneCode.GDEnemyObjects2[i].getCenterXInScene()), (gdjs.Game_32SceneCode.GDEnemyObjects2[i].getCenterYInScene()), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyBulletObjects2Objects, gdjs.toDegrees(Math.atan2((( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getCenterYInScene()) - (gdjs.Game_32SceneCode.GDEnemyObjects2[i].getCenterYInScene()), (( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getCenterXInScene()) - (gdjs.Game_32SceneCode.GDEnemyObjects2[i].getCenterXInScene()))), 350, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].rotateTowardObject((gdjs.Game_32SceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDPlayerObjects1[0] : null), 0, runtimeScene);
}
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects3Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects3});
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("I", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
const repeatCount3 = 4;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.Game_32SceneCode.GDEnemyObjects3.length = 0;


gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).setNumber(repeatIndex3);
let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects3Objects, gdjs.randomInRange(100, 1180), gdjs.randomInRange(100, 620), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects3[i].setScale(3);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects3[i].resetTimer("shoot");
}
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


};gdjs.Game_32SceneCode.mapOfEmptyGDEnemyObjects = Hashtable.newFrom({"Enemy": []});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects2});
gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{


const repeatCount2 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 3;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects, gdjs.randomInRange(100, 1180), gdjs.randomInRange(100, 620), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].setScale(3);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].resetTimer("shoot");
}
}
}
}

}


};gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Game_32SceneCode.mapOfEmptyGDEnemyObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spawn") > 2;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Health").Heal(25, null);
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects2Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Game_32SceneCode.GDPlayerBulletObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects3Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Game_32SceneCode.GDPlayerBulletObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects3Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects3Objects = Hashtable.newFrom({"PlayerBullet": gdjs.Game_32SceneCode.GDPlayerBulletObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects3Objects = Hashtable.newFrom({"Plant_Obstacle": gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyBulletObjects2Objects = Hashtable.newFrom({"EnemyBullet": gdjs.Game_32SceneCode.GDEnemyBulletObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyBulletObjects3Objects = Hashtable.newFrom({"EnemyBullet": gdjs.Game_32SceneCode.GDEnemyBulletObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects3Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyBulletObjects3Objects = Hashtable.newFrom({"EnemyBullet": gdjs.Game_32SceneCode.GDEnemyBulletObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects3Objects = Hashtable.newFrom({"Plant_Obstacle": gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Game_32SceneCode.GDPlayerBulletObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects2 */
/* Reuse gdjs.Game_32SceneCode.GDPlayerBulletObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].getBehavior("Health").Hit(15, false, false, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerBulletObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects2[k] = gdjs.Game_32SceneCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2.length = 0;

gdjs.Game_32SceneCode.GDPlayerBulletObjects2.length = 0;

gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2_1final.length = 0;
gdjs.Game_32SceneCode.GDPlayerBulletObjects2_1final.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Game_32SceneCode.GDPlayerBulletObjects3);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects3Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDPlayerBulletObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDPlayerBulletObjects2_1final.indexOf(gdjs.Game_32SceneCode.GDPlayerBulletObjects3[j]) === -1 )
            gdjs.Game_32SceneCode.GDPlayerBulletObjects2_1final.push(gdjs.Game_32SceneCode.GDPlayerBulletObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2_1final.indexOf(gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3[j]) === -1 )
            gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2_1final.push(gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Plant_Obstacle"), gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3);
gdjs.copyArray(runtimeScene.getObjects("PlayerBullet"), gdjs.Game_32SceneCode.GDPlayerBulletObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerBulletObjects3Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2_1final.indexOf(gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3[j]) === -1 )
            gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2_1final.push(gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDPlayerBulletObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDPlayerBulletObjects2_1final.indexOf(gdjs.Game_32SceneCode.GDPlayerBulletObjects3[j]) === -1 )
            gdjs.Game_32SceneCode.GDPlayerBulletObjects2_1final.push(gdjs.Game_32SceneCode.GDPlayerBulletObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2_1final, gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2);
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerBulletObjects2_1final, gdjs.Game_32SceneCode.GDPlayerBulletObjects2);
gdjs.copyArray(gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2_1final, gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerBulletObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerBulletObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyBullet"), gdjs.Game_32SceneCode.GDEnemyBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyBulletObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyBulletObjects2 */
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Health").Hit(10, false, false, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.Game_32SceneCode.GDEnemyBulletObjects2.length = 0;

gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2.length = 0;

gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDEnemyBulletObjects2_1final.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2_1final.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("EnemyBullet"), gdjs.Game_32SceneCode.GDEnemyBulletObjects3);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyBulletObjects3Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDEnemyBulletObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDEnemyBulletObjects2_1final.indexOf(gdjs.Game_32SceneCode.GDEnemyBulletObjects3[j]) === -1 )
            gdjs.Game_32SceneCode.GDEnemyBulletObjects2_1final.push(gdjs.Game_32SceneCode.GDEnemyBulletObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2_1final.indexOf(gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3[j]) === -1 )
            gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2_1final.push(gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("EnemyBullet"), gdjs.Game_32SceneCode.GDEnemyBulletObjects3);
gdjs.copyArray(runtimeScene.getObjects("Plant_Obstacle"), gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyBulletObjects3Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDEnemyBulletObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDEnemyBulletObjects2_1final.indexOf(gdjs.Game_32SceneCode.GDEnemyBulletObjects3[j]) === -1 )
            gdjs.Game_32SceneCode.GDEnemyBulletObjects2_1final.push(gdjs.Game_32SceneCode.GDEnemyBulletObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2_1final.indexOf(gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3[j]) === -1 )
            gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2_1final.push(gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDEnemyBulletObjects2_1final, gdjs.Game_32SceneCode.GDEnemyBulletObjects2);
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2_1final, gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2);
gdjs.copyArray(gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2_1final, gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyBulletObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyBulletObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Health").Hit(15, false, false, null);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HUD_Text"), gdjs.Game_32SceneCode.GDHUD_9595TextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDHUD_9595TextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDHUD_9595TextObjects2[i].getBehavior("Text").setText("HP: " + gdjs.evtTools.common.toString((( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getBehavior("Health").Health(null))) + "  Kills: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()) + "  Wave: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Center_Text"), gdjs.Game_32SceneCode.GDCenter_9595TextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCenter_9595TextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCenter_9595TextObjects2[i].getBehavior("Text").setText("YOU DIED - press R");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


};gdjs.Game_32SceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Plant_Obstacle"), gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects, false);
}
}
}

}


{


gdjs.Game_32SceneCode.eventsList0(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn");
}
}

}


{


gdjs.Game_32SceneCode.eventsList6(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList7(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList8(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerBulletObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyBulletObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDHUD_9595TextObjects1.length = 0;
gdjs.Game_32SceneCode.GDHUD_9595TextObjects2.length = 0;
gdjs.Game_32SceneCode.GDHUD_9595TextObjects3.length = 0;
gdjs.Game_32SceneCode.GDCenter_9595TextObjects1.length = 0;
gdjs.Game_32SceneCode.GDCenter_9595TextObjects2.length = 0;
gdjs.Game_32SceneCode.GDCenter_9595TextObjects3.length = 0;

gdjs.Game_32SceneCode.eventsList9(runtimeScene);
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerBulletObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyBulletObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDHUD_9595TextObjects1.length = 0;
gdjs.Game_32SceneCode.GDHUD_9595TextObjects2.length = 0;
gdjs.Game_32SceneCode.GDHUD_9595TextObjects3.length = 0;
gdjs.Game_32SceneCode.GDCenter_9595TextObjects1.length = 0;
gdjs.Game_32SceneCode.GDCenter_9595TextObjects2.length = 0;
gdjs.Game_32SceneCode.GDCenter_9595TextObjects3.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
