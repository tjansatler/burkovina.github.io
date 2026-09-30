
if (typeof gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera !== "undefined") {
  gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera = {};
gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.idToCallbackMap = new Map();
gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.GDObjectObjects1= [];


gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.userFunc0xec8960 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];

const { rotateObjectToFaceSameWayAsCamera } = gdjs.__fireBulletExtension;

rotateObjectToFaceSameWayAsCamera(object);
};
gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.GDObjectObjects1);

const objects = gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.GDObjectObjects1;
gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.userFunc0xec8960(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.func = function(runtimeScene, Object, Object3D, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Object3D": Object3D
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.GDObjectObjects1.length = 0;

gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__FireBullet__RotateObjectToFaceSameWayAsCamera.registeredGdjsCallbacks = [];