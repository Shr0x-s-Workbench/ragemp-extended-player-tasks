type TaskMap = {
    taskAchieveHeading: [heading: number, timeout: number];

    taskAimGunAt: [targetEntity: number, duration: number, instantBlend: boolean];
    taskAimGunAtCoord: [x: number, y: number, z: number, duration: number, instantBlend: boolean, useAlternate: boolean];
    taskAimGunScripted: [scriptTask: number, disableIdle: boolean, instantBlend: boolean];

    taskArrest: [target: number];

    taskBoatMission: [boat: number, p2: any, p3: any, x: number, y: number, z: number, missionType: any, maxSpeed: number, p9: any, p10: number, p11: any];

    taskChatTo: [target: number, p2: any, duration: number, p4: number, p5: number, p6: number, p7: number];

    taskClearLookAt: [];

    taskClimb: [unused: boolean];
    taskClimbLadder: [style: number];

    taskCombat: [targetPed: number, combatFlags: number, threatResponse: number];
    taskCombatHatedTargetsAround: [radius: number, flags: number];
    taskCombatHatedTargetsInArea: [x: number, y: number, z: number, radius: number, flags: any];

    taskCower: [duration: number];

    taskDriveBy: [targetPed: number, p2: any, x: number, y: number, z: number, p6: number, p7: any, shoot: boolean, firingPattern: number];

    taskEnterVehicle: [vehicle: number, timeout: number, seat: number, speed: number, flag: number, p6: any];

    taskFollowNavMeshToCoord: [x: number, y: number, z: number, speed: number, timeout: number, stoppingRange: number, persist: boolean, flags: number];
    taskFollowNavMeshToCoordAdvanced: [x: number, y: number, z: number, speed: number, timeout: number, unkFloat: number, unkInt: number, unkX: number, unkY: number, unkZ: number, flags: number];

    taskFollowPointRoute: [speed: number, mode: number];

    taskFollowToOffsetOf: [entity: number, offsetX: number, offsetY: number, offsetZ: number, speed: number, timeout: number, stoppingRange: number, persist: boolean];

    taskForceMotionState: [state: number, instant: boolean];

    taskGetOffBoat: [boat: number];

    taskGoStraightToCoord: [x: number, y: number, z: number, speed: number, timeout: number, heading: number, distanceToSlide: number];

    taskGotoAiming: [target: number, stopDistance: number, startAimDistance: number];

    taskGoToCoordAndAimAtHatedEntitiesNearCoord: [
        gotoX: number, gotoY: number, gotoZ: number,
        aimX: number, aimY: number, aimZ: number,
        speed: number, shoot: boolean,
        p9: number, p10: number, p11: boolean,
        p12: number, useHeading: boolean,
        firingPattern: number
    ];

    taskGoToCoordAnyMeans: [x: number, y: number, z: number, speed: number, vehicle: any, useLongRange: boolean, walkingStyle: number, flags: number];
    taskGoToCoordAnyMeansExtraParams: [x: number, y: number, z: number, speed: number, vehicle: any, useLongRange: boolean, walkingStyle: number, flags: number, p9: any, p10: any, p11: any];
    taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed: [x: number, y: number, z: number, speed: number, vehicle: any, useLongRange: boolean, walkingStyle: number, flags: number, p9: any, p10: any, p11: any, cruiseSpeed: any];

    taskGoToCoordWhileAimingAtCoord: [
        x: number, y: number, z: number,
        aimX: number, aimY: number, aimZ: number,
        speed: number, shoot: boolean,
        p9: number, p10: number, p11: boolean,
        flags: any, p13: boolean,
        firingPattern: number
    ];

    taskGuardCurrentPosition: [radius: number, duration: number, p3: number];

    taskGuardSphereDefensiveArea: [x: number, y: number, z: number, radius: number, p5: number, p6: any, p7: number, p8: number, p9: number, p10: number];

    taskHandsUp: [duration: number, facingPed: number, flags: number, playAnim: boolean];

    taskHeliChase: [target: number, x: number, y: number, z: number];
    taskHeliMission: [heli: number, p2: any, targetPed: number, x: number, y: number, z: number, mode: number, speed: number, radius: number, angle: number, p11: number, height: number, p13: number, p14: number];

    taskJump: [unused: boolean, ragdoll: boolean, climb: boolean];

    taskLeaveAnyVehicle: [flags: number, timeout: number];
    taskLeaveVehicle: [vehicle: number, flags: number];

    taskLookAt: [target: number, duration: number, flags: number, priority: number];

    taskMoveNetwork: [task: string, multiplier: number, p3: boolean, animDict: string, flags: number];
    taskMoveNetworkAdvanced: [task: string, x: number, y: number, z: number, rx: number, ry: number, rz: number, p8: any, p9: number, p10: boolean, animDict: string, flags: number];

    taskOpenVehicleDoor: [vehicle: number, timeout: number, doorIndex: number, speed: number];

    taskParachute: [force: boolean];
    taskParachuteToTarget: [x: number, y: number, z: number];

    taskPatrol: [route: string, p2: any, repeat: boolean, p4: boolean];

    taskPause: [duration: number];

    taskPerformSequence: [sequenceId: number];

    taskPlaneChase: [target: number, x: number, y: number, z: number];
    taskPlaneLand: [plane: number, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number];
    taskPlaneMission: [plane: number, targetVehicle: number, targetPed: number, x: number, y: number, z: number, mode: number, speed: number, p9: number, p10: number, maxAlt: number, minAlt: number];

    taskPlantBomb: [x: number, y: number, z: number, heading: number];

    taskPlayAnim: [dict: string, name: string, speed: number, speedMult: number, duration: number, flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean];
    taskPlayAnimAdvanced: [dict: string, name: string, x: number, y: number, z: number, rx: number, ry: number, rz: number, speed: number, speedMult: number, duration: number, flag: any, animTime: number, p14: any, p15: any];

    taskPlayPhoneGestureAnimation: [p1: any, p2: any, p3: any, duration: number, flags: number, loop: boolean, holdLast: boolean];

    taskPutDirectlyIntoCover: [x: number, y: number, z: number, timeout: any, p5: boolean, p6: number, p7: boolean, p8: boolean, p9: object, p10: boolean];
    taskPutDirectlyIntoMelee: [target: number, p2: number, p3: number, p4: number, p5: boolean];

    taskRappelFromHeli: [height: number];

    taskReactAndFlee: [target: number];

    taskReloadWeapon: [doReload: boolean];

    taskScriptedAnimation: [low: number, mid: number, high: number, blendIn: number, blendOut: number];

    taskSeekCoverFrom: [target: number, duration: number, preferFront: boolean];
    taskSeekCoverToCoords: [x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: any, p8: boolean];

    taskSetBlockingOfNonTemporaryEvents: [toggle: boolean];
    taskSetDecisionMaker: [decisionMaker: number];

    taskShockingEventReact: [eventId: number];

    taskShootAtCoord: [x: number, y: number, z: number, duration: number, firingPattern: number];

    taskShuffleToNextVehicleSeat: [vehicle: number];

    taskSkyDive: [];

    taskSlideToCoord: [x: number, y: number, z: number, heading: number, speed: number];
    taskSlideToCoordHdgRate: [x: number, y: number, z: number, heading: number, speed: number, headingRate: number];

    taskSmartFlee: [target: number, distance: number, time: any, preferPavements: boolean, updateTarget: boolean];
    taskSmartFleeCoord: [x: number, y: number, z: number, distance: number, time: number, preferPavements: boolean, quitIfOutOfRange: boolean];

    taskStandGuard: [x: number, y: number, z: number, heading: number, scenario: string];
    taskStandStill: [duration: number];

    taskStartScenarioAtPosition: [scenario: string, x: number, y: number, z: number, heading: number, duration: number, sitting: boolean, teleport: boolean];
    taskStartScenarioInPlace: [scenario: string, delay: number, playEnterAnim: boolean];

    taskStayInCover: [];

    taskStealthKill: [target: number, killType: number, p3: number, p4: boolean];

    taskStopPhoneGestureAnimation: [];

    taskSwapWeapon: [force: boolean];

    taskSweepAim: [anim: string, p2: string, p3: string, p4: string, duration: number, vehicle: number, p7: number, p8: number];

    taskSynchronizedScene: [scene: number, dict: string, name: string, speed: number, speedMult: number, duration: number, flag: number, playbackRate: number, p9: any];

    taskTurnToFace: [target: number, duration: number];
    taskTurnToFaceCoord: [x: number, y: number, z: number, duration: number];

    taskUseMobilePhone: [mode: number];
    taskUseMobilePhoneTimed: [duration: number];

    taskUseNearestScenarioToCoordWarp: [x: number, y: number, z: number, radius: number, p5: any];

    taskVehicleAimAt: [target: number];
    taskVehicleChase: [target: number];

    taskVehicleDriveToCoord: [vehicle: number, x: number, y: number, z: number, speed: number, p6: any, model: number, drivingMode: number, stopRange: number, p10: number];
    taskVehicleDriveToCoordLongrange: [vehicle: number, x: number, y: number, z: number, speed: number, drivingMode: number, stopRange: number];

    taskVehicleDriveWander: [vehicle: number, speed: number, drivingStyle: number];

    taskVehicleEscort: [vehicle: number, targetVehicle: number, mode: number, speed: number, drivingStyle: number, minDistance: number, p7: number, noRoadsDistance: number];

    taskVehicleFollow: [vehicle: number, target: number, drivingStyle: number, speed: number, minDistance: number];

    taskVehicleFollowWaypointRecording: [vehicle: number, recording: string, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: number];

    taskVehicleGotoNavmesh: [vehicle: number, x: number, y: number, z: number, speed: number, behavior: number, stoppingRange: number];

    taskVehicleHeliProtect: [vehicle: number, target: number, speed: number, p4: number, radius: number, altitude: number, p7: number];

    taskVehicleMissionCoorsTarget: [vehicle: number, x: number, y: number, z: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean];

    taskVehicleMissionTarget: [vehicle: number, target: number, mode: number, maxSpeed: number, drivingStyle: number, minDistance: number, p7: number, p8: boolean];

    taskVehiclePark: [vehicle: number, x: number, y: number, z: number, heading: number, mode: number, radius: number, keepEngineOn: boolean];

    taskVehicleTempAction: [vehicle: number, action: number, duration: number];

    taskWanderInArea: [x: number, y: number, z: number, radius: number, minLength: number, timeBetween: number];
    taskWanderStandard: [p1: number, p2: number];

    taskWarpIntoVehicle: [vehicle: number, seat: number];

    taskWrithe: [target: number, time: number, p3: number];

    uncuff: [];

    updateTaskAimGunScriptedTarget: [p1: number, p2: number, p3: number, p4: number, p5: boolean];
    updateTaskHandsUpDuration: [duration: number];
};
type TaskCaller = {
    [K in keyof TaskMap]: (...args: TaskMap[K]) => void;
};

function createTaskProxy(player: PlayerMp): TaskCaller {
    return new Proxy({} as TaskCaller, {
        get(_, taskName: string) {
            return (...args: any[]) => {
                player.call(`client::task:${taskName}`, args);
            };
        }
    });
}

Object.defineProperty(mp.Player.prototype, "task", {
    get: function () {
        if (!this._taskProxy) {
            this._taskProxy = createTaskProxy(this);
        }
        return this._taskProxy;
    }
});