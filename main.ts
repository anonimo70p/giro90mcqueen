function GIRAR90ºGRADOSDERECHA () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 35)
    basic.pause(350)
}
function GIRAR90ºGRADOSIZQUIERDA () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 35)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 35)
    basic.pause(350)
    maqueen.motorStop(maqueen.Motors.All)
}
let UltimoGiro = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
        maqueen.motorStop(maqueen.Motors.All)
        GIRAR90ºGRADOSIZQUIERDA()
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
            maqueen.motorStop(maqueen.Motors.All)
            GIRAR90ºGRADOSDERECHA()
            if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
                maqueen.motorStop(maqueen.Motors.All)
                GIRAR90ºGRADOSDERECHA()
                if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
                    maqueen.motorStop(maqueen.Motors.All)
                    GIRAR90ºGRADOSDERECHA()
                }
            }
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
})
