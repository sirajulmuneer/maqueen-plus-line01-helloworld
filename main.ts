DFRobotMaqueenPluss.I2CInit()
DFRobotMaqueenPluss.PID(PID.OFF)
basic.forever(function () {
    if (DFRobotMaqueenPluss.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPluss.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CW, 70)
    }
    if (DFRobotMaqueenPluss.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPluss.readPatrol(Patrol.R1) == 0) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 20)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 70)
    }
    if (DFRobotMaqueenPluss.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPluss.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 70)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 20)
    }
})
