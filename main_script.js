var Color = {
    RESET: "\x1b[39;49;00m", Black: "0;01", Blue: "4;01", Cyan: "6;01", Gray: "7;11", Green: "2;01", Purple: "5;01", Red: "1;01", Yellow: "3;01",
    Light: {
        Black: "0;11", Blue: "4;11", Cyan: "6;11", Gray: "7;01", Green: "2;11", Purple: "5;11", Red: "1;11", Yellow: "3;11"
    }
};

function _time(ms) {
    return new Date(ms).toString();
}

Java.perform(function () {

    function toast(string) {
        var CharSequence = Java.use('java.lang.CharSequence');
        var jString = Java.use('java.lang.String');
        var charSequence = Java.cast(jString.$new(string), CharSequence);
        Java.scheduleOnMainThread(function () {
            Java.use("android.widget.Toast")
                .makeText(
                    Java.use("android.app.ActivityThread").currentApplication().getApplicationContext(),
                    charSequence,
                    0 // https://developer.android.com/reference/android/widget/Toast#LENGTH_LONG
                )
                .show();
        });
    }

    /*Java.use('android.app.AlarmManager').set.overload('int', 'long', 'android.app.PendingIntent').implementation = function (type, time, intent) {
        
        //if(time Date.now)
        if((time-Date.now() > 280000)){
            toast('type:'+type+' from:' + _time(time) + ' diff:' + (time-Date.now()), { c: Color.Light.Cyan });
            return this.set(type, time*2, intent);
        }
    }*/

    toast("Line has been reduced resources");
    const TIME = Java.use('android.os.SystemClock');
    Java.use('android.os.MessageQueue').enqueueMessage.overload('android.os.Message', 'long').implementation = function ($yaa, $time) {
        const $uptime = TIME.uptimeMillis();
        const $diff = ($time - $uptime) / 1000;
        if ($diff > 0.3) {
            //LOG('android.os.MessageQueue.enqueueMessage:' + $yaa + "|" + $diff + "|" + ($diff * 5000), { c: Color.Light.Cyan });
            return this.enqueueMessage($yaa, $time + ($diff * 5000));
        }

        //LOG('android.os.MessageQueue.enqueueMessage:'+$yaa+"|"+$diff+"|"+($diff), { c: Color.Light.Cyan });
        return this.enqueueMessage($yaa, $time);
    }
});