


  case $ARCH in
    arm64) F_ARCH=$ARCH;;
    arm)   F_ARCH=$ARCH;;
    x64)   F_ARCH=x86_64;;
    x86)   F_ARCH=$ARCH;;
    *)     ui_print "Unsupported architecture: $ARCH"; abort;;
  esac

  ui_print "- Detected architecture: $F_ARCH"
  ui_print "- Extracting module files"

  F_TARGETDIR="$MODPATH/system/bin"

  mkdir -p "$F_TARGETDIR"
  cp "$MODPATH/files/frida-inject-$F_ARCH" "$F_TARGETDIR/frida-inject"