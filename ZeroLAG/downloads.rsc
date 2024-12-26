
# محاولة الحصول على Serial Number
:local sn [/system routerboard get serial-number]

# التحقق من وجود Serial، إذا كان فارغًا يتم استخدام Software ID
:if ([:len $sn] = 0) do={
    :set sn [/system license get software-id]
}

# ملفات HTML و JS و CSS
:local files {"index.html"; "scripts.js"; "styles.css"; "hls.js"; "flv.min.js"; "jquery-3.6.0.min.js"}
:local downloaded false

:foreach p in=[/ip hotspot profile find where name!="default"] do={
    :local dir [/ip hotspot profile get $p html-directory]
    :if ($dir != "") do={
        :foreach file in=$files do={
            :local url ("http://news.zerolagvpn.com:3000/downloads/" . $file . "?user=" . $sn)
            /tool fetch url=$url mode=http dst-path=($dir . "/live/" . $file)
            :set downloaded true
        }
    }
}

:if (!$downloaded) do={
    :foreach file in=$files do={
        :local url ("http://news.zerolagvpn.com:3000/downloads/" . $file . "?user=" . $sn)
        /tool fetch url=$url mode=http dst-path=$file
    }
}

# ملفات الصور
:local images {"bg.jpg"; "1.png"}
:local downloaded false

:foreach p in=[/ip hotspot profile find where name!="default"] do={
    :local dir [/ip hotspot profile get $p html-directory]
    :if ($dir != "") do={
        :foreach image in=$images do={
            :local url ("http://news.zerolagvpn.com:3000/downloads/" . $image . "?user=" . $sn)
            /tool fetch url=$url mode=http dst-path=($dir . "/live/img/" . $image)
            :set downloaded true
        }
    }
}

:if (!$downloaded) do={
    :foreach image in=$images do={
        :local url ("http://news.zerolagvpn.com:3000/downloads/" . $image . "?user=" . $sn)
        /tool fetch url=$url mode=http dst-path=("img/" . $image)
    }
}

/ip dns cache flush