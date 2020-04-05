MODDIR=${0%/*}

sleep 90
while :
do
  frida-inject -s $MODDIR/main_script.js -n jp.naver.line.android
  sleep 5
done