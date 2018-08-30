start Xvfb 

    npm run startXvfb

or 

    Xvfb :1 -screen 0 '1023x1818x32' -ac &> /dev/null

start record video

    ffmpeg -f alsa -i pulse -f x11grab -r 30 -s 1023x1818 -i :1.0 -acodec pcm_s16le -vcodec libx264 -preset ultrafast -crf 0 '/home/dev/Рабочий стол/Projects/nodejs-video-capturing/video/output.mkv'

convert into .mp4

    ffmpeg -i output.mkv -vcodec libx264 -preset slow -crf 22 -threads 0 video.mp4

See the display content

    DISPLAY=:{dispkay-number} xset q

    export DISPLAY=:{display-number}

to select display

    chromium-browser --disable-gpu 'https://searchwilderness.com/examples/amp-stories/'

to start the chromium
