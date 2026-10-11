# Hero video voiceovers

Narrated voiceovers for the 6 ambient hero videos (`public/videos/{niche}/hero.mp4`).
All clips use ONE consistent narrator voice: `avocado_v2:MAI_01` (Meta AI "Warm"),
generated with the `tts` skill (`/opt/hatch/skills/tts/SKILL.md`).

## Scripts (spoken form — spell out numbers/prices as heard)

### restaurant — Mama Esi's Kitchen
> Welcome to Mama Esi's Kitchen, in the heart of Osu. Fifteen years of real Ghanaian flavour — our famous banku and charcoal-grilled tilapia go for just eighty-five cedis. Message us on WhatsApp to reserve your table today.

### salon — Glow Haven Beauty Studio
> Welcome to Glow Haven Beauty Studio, East Legon's home of glow. Our signature frontal install — melted, natural, styled your way — is just three hundred and fifty cedis. Book your chair on WhatsApp today.

### bakery — Adom Delights
> Welcome to Adom Delights, Osu's favourite bakery. Everything is baked fresh every morning — our famous meat pies, a box of six for just sixty cedis. Order ahead on WhatsApp and skip the queue.

### fashion — Nhyira Chic Boutique
> Welcome to Nhyira Chic Boutique, where heritage meets modern style. Our signature Ahenema kente gown — bridal-ready and hand-finished — is eighteen hundred and fifty cedis. Chat to order on WhatsApp today.

### realestate — GoldCoast Homes Realty
> Welcome to GoldCoast Homes Realty, Cantonments, Accra. Every listing is physically inspected and ownership-verified — like this four-bedroom detached house for three point eight million cedis. Talk to an agent on WhatsApp today.

### cars — Accra Auto Hub
> Welcome to Accra Auto Hub, at Abossey Okai. Every car passes our one hundred and twenty point inspection — like this twenty nineteen Toyota RAV4 for three hundred and eighty-five thousand cedis. WhatsApp us to book a viewing.

## How to regenerate one voiceover

1. Edit the script above (keep it ~25–35 words / 10–15 seconds; spoken form).
2. Generate the narration (same voice every time for consistency):

```sh
/opt/hatch/bin/tts speak --voice avocado_v2:MAI_01 \
  --output voiceovers/voiceover-<niche>.mp3 --text-stdin
# (paste the script via stdin)
```

3. Re-mux into the hero video (video stream untouched, AAC 48k mono,
   0.6s lead-in, video looped to cover the narration, `+faststart`):

```sh
n=<niche>
ffmpeg -y -v error -stream_loop 1 -i voiceovers/backups/$n-hero-muted.mp4 \
  -i voiceovers/voiceover-$n.mp3 \
  -c:v copy -c:a aac -b:a 48k -ac 1 -ar 44100 -af "adelay=600" \
  -shortest -movflags +faststart public/videos/$n/hero.mp4
```

4. Rebuild and verify:

```sh
npm run build
ffprobe -v error -show_entries stream=codec_type -of csv=p=0 public/videos/$n/hero.mp4
# expect: video \n audio
```

## Files

- `voiceover-<niche>.mp3` — narration audio (source of truth for re-muxing)
- `backups/<niche>-hero-muted.mp4` — original muted hero video (pre-voiceover)
- `public/videos/<niche>/hero.mp4` — shipped file (video + AAC narration)

## To disable the voiceover for a niche

Remove the `video` field from slide 1 in `content/<niche>.ts`, or restore the
muted original:

```sh
cp voiceovers/backups/<niche>-hero-muted.mp4 public/videos/<niche>/hero.mp4
```

## Player behaviour (components/HeroSlider.tsx)

- Videos autoplay **muted** (browser policy) with a gold speaker toggle
  (bottom-left) to unmute; a "Tap for narration" hint shows while muted.
- Slider autoplay **pauses while unmuted** so the narration never gets cut
  off by a slide change; navigating slides re-mutes automatically.
- Toggling mute never restarts the video.
