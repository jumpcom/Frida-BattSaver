MODDIR=${0%/*}

while :
do
  frida-inject -s $MODDIR/line_mod_script.js -n jp.naver.line.android
  sleep 3
done