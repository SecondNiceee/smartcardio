for %%F in (
    src-images\for-doctors.png
    src-images\for-generation.png
    src-images\for-hospitals.png
    src-images\for-users.png
    src-images\howto-applic-ankle.png
    src-images\howto-applic-knee.png
    src-images\howto-applic-stomach.png
    ) do (
        for %%W in (3840) do (
            mkdir public\images\r\%%W
            magick.exe %%F -resize %%Wx -quality 97 -define webp:image-hint=photo -define webp:method=6 -define webp:pass=10 -define webp:auto-filter=true public\images\r\%%W\%%~nF.webp
        )
        for %%W in (1560 1440 1200 1140 1024 768 576 480 360) do (
            mkdir public\images\r\%%W
            magick.exe %%F -resize %%Wx -quality 99 -define webp:image-hint=photo -define webp:method=6 -define webp:pass=10 -define webp:auto-filter=true public\images\r\%%W\%%~nF.webp
        )
)
