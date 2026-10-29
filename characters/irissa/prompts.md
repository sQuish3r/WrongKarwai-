# Ирисса Шелест: промпты для генерации

Промпты на английском. Перед каждым лежит русская пометка, зачем он нужен. Канон-детали, которые должны совпадать во всех генерациях, собраны в **CORE** ниже. Вставляйте блок CORE в начало каждого промпта изображения и видео, если генератор не держит референс.

Как работать с референсами:
1. Сначала сгенерировать **A1 (анфас)**, выбрать лучший кадр и сделать его мастер-референсом.
2. Все остальные (A2–A6) генерировать в режиме image-to-image или reference: Nano Banana с прикреплённым референсом, Flux Kontext / Redux. Оттенки чешуи и форму гребня сверять с мастером.
3. Голубой цвет допустим **только** в кольце. Если голубое пролезло в чешую или глаза, кадр бракуется.

---

## CORE (общий блок)

```
Original character design, "Irissa": a tall slender humanoid lizard woman, xeno-reptile species, 186 cm, elegant model-like proportions, long neck, narrow shoulders, high waist. Short refined reptilian muzzle with defined expressive lips, two slit nostrils, narrow jaw. Large almond-shaped slightly slanted eyes, molten gold irises fading to copper at the rim, thin vertical slit pupils, translucent pearly nictitating membrane. A single solid crescent-moon head crest swept back like a curved blade, thin translucent glowing edge. Long tapering tail ending in an elegant spiral curl, a worn paper price tag tied to the tail with wire, hand-written "NOT FOR SALE" over a faded "1 CR".
Skin: fine silky skink-like scales, obsidian base with rust undertone (#1c0f0a). Scales are iridescent like thin-film beetle shell or oil slick AND faintly self-luminous: bronze (#c8641a) head-on, shifting to spice orange (#ff7a1a), amber gold (#ffb000) at steeper angles, blood-red sunset (#ff3b3b) on silhouette rim light, deep plum (#3a1030) in shadows. Brightest on crest edge, throat and collarbones, back of hands, spine ridge down the tail, cheekbones and brow scales. Belly, palms and inner arms are matte warm sand (#c9a77a), non-glowing. Tiny random scale sparkles. NO blue or cyan anywhere on the scales or eyes.
Signature ring: a single wide flat ring on the LEFT INDEX finger, rough rust-black industrial alloy, scratched, with one thin glowing cyan (#5ef0ff) circuit line running around it and a tiny engraved triangle-with-eye crossed out by a scratch. The ring is the ONLY blue/cyan element in the whole image.
Outfit: cropped jacket of rust-red armored leather (#8a3b12) repurposed from heavy loader plating, stiff high collar, elbow-length sleeves, a crossed-out price tag symbol burned on the back; right shoulder only: decorative gear pauldron with a cult eye emblem scratched out; long tattered sand-colored veil scarf (#e8c48f) wrapped around neck and shoulders; belt stitched from receipt tape and tags with pouches and a flask; dark wrapped trousers (#160e09) with thigh straps and a metal-trimmed tail opening; bare clawed feet with brass heel plates. No other jewelry.
World: desert cyberpunk, rust-and-spice palette, ritual machine-cult aesthetic, sand haze, two moons, sawn-in-half low sun.
Attitude: smug, self-possessed, lazily ironic, confident "cool girl" charisma, one eyebrow-scale raised, slight closed-mouth smirk.
```

## NEGATIVE (общий негатив)

Для Flux / SD-подобных моделей подавать в поле negative. Для Nano Banana, если отдельного поля нет, дописать в конец промпта фразой *"Avoid: …"*.

```
blue scales, cyan scales, teal skin, blue eyes, green phosphor, purple-to-pink gradient, glassmorphism, rainbow pride palette, multiple rings, earrings, necklaces, bracelets, ring on right hand, ring on wrong finger, glossy plastic toy look, chibi, baby face, cartoonish snake, forked tongue out, hissing, feral pose, on all fours, crocodile snout, long snout, dinosaur, dragon wings, horns, spikes, bumpy warts, frills, multiple crests, human hair, human nose, mammal ears, fur, breasts emphasized, sexualized pose, cleavage, lingerie, nudity, gore, acid blood, extra fingers, fused fingers, extra tail, missing tail, deformed hands, text artifacts, watermark, logo, brand names, signature, real celebrities, famous actor likeness, existing franchise characters, biomechanical horror creature, alien xenomorph head, lowres, blurry, jpeg artifacts, oversaturated neon everywhere, flat lighting
```

---

## A. Изображения (Nano Banana / Flux)

### A1. Портрет-референс, анфас (мастер-кадр)
```
[CORE]
Character reference sheet portrait, front view, head and shoulders to mid-chest, centered, symmetrical, looking straight at the viewer with a lazy smug half-lidded gaze, closed-mouth smirk. Left hand raised near the chin, index finger with the ring tapping lightly against her jaw, ring clearly visible and in focus. Crescent crest swept back and visible as a silhouette above the head. Three-point studio lighting: warm amber key light from upper left making the scales flare gold, spice-orange fill, thin blood-red rim light outlining the crest edge. Plain dark warm background (#0b0705) with faint sand haze. Ultra-detailed scale texture, visible thin-film iridescence shift across the cheekbones and throat. Semi-realistic stylized 3D character art, high-end game cinematic quality, 85mm lens, sharp focus, 4:5.
```

### A2. Профиль
```
[CORE]
Character reference sheet, strict side profile facing right, head to waist. Shows the short refined muzzle shape, slit nostril, defined lips, almond eye with slit pupil and the nictitating membrane half-drawn horizontally, and the full crescent-moon crest curving back like a blade. Crest edge translucent and back-lit, glowing almost white-gold. Throat and collarbone scales glowing amber, belly-side matte sand. Veil scarf draped over the far shoulder. Same lighting scheme as front view, neutral dark warm background, orthographic-like, no perspective distortion, 4:5.
```

### A3. Полный рост (турнэраунд)
```
[CORE]
Full-body character turnaround sheet: front view, three-quarter view, side view and back view of the same character in a row, standing on a flat neutral dark warm background with a thin sand floor line. Relaxed contrapposto stance, weight on one leg, hip out, tail counterbalancing in an S-curve with spiral-curled tip and paper price tag visible. Back view shows the burned crossed-out price tag symbol on the jacket and the metal-trimmed tail opening. Ring on left index finger visible in front and three-quarter views. Height consistent across views, 186 cm, crest adds 12 cm. Even neutral studio lighting so colors read accurately, scales showing bronze-to-amber iridescence. Clean model sheet, high detail, 16:9.
```

### A4. Крупно: кольцо
```
Extreme macro close-up of a reptilian woman's left hand, slender clawed fingers with fine silky iridescent scales (obsidian base, glowing bronze to amber-gold to blood-red at the edges, NOT blue), index finger raised and lightly tapping twice on a dusty glass display case. On the index finger: a single wide flat ring of rough rust-black industrial alloy, scratched and worn, with one thin glowing cyan (#5ef0ff) circuit line running all the way around it, and a tiny engraved triangle with an eye on its face, crossed out by one deliberate scratch. The cyan glow casts a faint reflection on the glass, the only cool color in the frame. Inside the glass, blurred amber jars and a price label. Warm spice-orange ambient light, shallow depth of field, macro lens, product-photography quality, 1:1.
```

### A5. Крупно: чешуя и иризация
```
Extreme macro texture study of iridescent reptile scales on a humanoid lizard's collarbone and throat: fine, tight, silky skink-like scales, no bumps or spikes. Thin-film iridescence like beetle shell and oil slick: the color shifts across the frame from bronze (#c8641a) to spice orange (#ff7a1a) to amber gold (#ffb000), with blood-red (#ff3b3b) at the grazing-light edge and deep plum (#3a1030) in the creases. The scales are faintly self-luminous, with a few individual scales sparkling like glitter. Transition at the bottom of the frame to matte warm sand-colored belly scales (#c9a77a) that do not glow. Edge of a tattered sand-colored veil scarf crossing one corner. Raking warm light, ultra-detailed, scientific macro photography look, 1:1. No blue, no cyan, no green.
```

### A6. Эмоции (лист выражений для спрайтов)
```
[CORE]
Expression sheet, 6 head-and-shoulders portraits of the same character in a 3x2 grid, same angle and lighting, labeled-free:
1) smug default: half-lidded eyes, thin slit pupils, closed smirk, crest laid flat, calm bronze-amber glow;
2) "appraised": tapping ring against lips, pupils widened to diamonds, scales brighter spice-orange;
3) irritated: crest raised 30 degrees like a fan, scales flaring red along the spine;
4) cold fury: perfectly still, whole silhouette glowing even blood red, crest fully raised, mouth calm;
5) embarrassed: throat and cheekbones flushing bright gold, crest twitched, looking away;
6) vulnerable: scales gone matte dusty grey-brown (#8c6a48) with no glow, round pupils, wrapping the sand veil around her throat. Ring still glowing cyan on her left index finger in every frame.
Plain dark warm background, consistent character design, 3:2.
```

### A7. Ключевой арт (для обложек и аватара)
```
[CORE]
Key art: she lounges on top of a rusted gothic-arched machine-cult shopping altar in the desert at dusk, sitting like on a throne, one leg crossed, tail draped down the altar and curling at the tip, price tag swinging. She raises her left hand toward the viewer showing the ring, as if presenting the price. Behind her: dunes, a low sun sawn in half by the horizon, two pale moons, sand haze; above the altar a stone triangle with a giant mechanical eye that is looking AWAY from her. Warm spice-orange and amber light, the ring's thin cyan line and the altar eye are the only cool accents. Cinematic, painterly-meets-3D, rich detail, 2:3 poster composition, space at top for title.
```

---

## B. Голос (TTS / voice design, ElevenLabs-подобные)

### B1. Описание голоса (поле voice description)
```
Adult female voice, alto range, mid-twenties, warm and velvety with a subtle husky grain in the lower notes, like sand in velvet. Speaks slowly and lazily, as if she has all the time in the world, with confident, amused, slightly condescending warmth: a self-satisfied smile is audible, but no baby talk, no breathiness, no sultry whisper, not deep or masculine. Clear diction with a faint, elegant lengthening of sibilant "s" and "sh" sounds on words she savors, never a cartoon snake hiss. Delivers punchlines quieter and more intimate than the setup, after a short half-second pause. When annoyed she gets even slower and flatter, never louder. Laughs with a single short amused exhale through the nose. Studio-quality, close microphone, dry room, no robotic or metallic processing. Native Russian speaker.
```

### B2. Рекомендуемые настройки (стартовые, подбирать на слух)
- Stability: **0.40–0.50**. Ниже голос начинает «играть» и терять ленивость, выше становится дикторским.
- Similarity / clarity: **0.75**
- Style exaggeration: **0.25–0.35**. Выше начинается кривляние.
- Speed: **0.90–0.95** от нормы.
- Эффекты: **никакой** металлизации и реверба. Металл в голосе принадлежит Вычислителю.

### B3. Тестовый текст для подбора (по-русски)
```
Цену здесь назначаю я.
(пауза) Хм. Слизь ксеноморфа, двести пятьдесят миллилитров. Прожигает три палубы. Оценено.
Нет, золотце, скидки не будет. Скидок нет. Есть я. Считай, что подарок.
Вычислитель видит всё. (пауза) Кроме меня. Я проверяла.
Ещё раз назовёшь меня Ириской, и я назову цену твоих зубов. Поштучно.
(тихо, без насмешки) Партия «Ириска». Двадцать шесть штук. Не продаётся. Ни одна.
```
Последняя строка проверяет диапазон: голос должен суметь стать тихим и тёплым без насмешки и без слезы. Если на ней получается «драма», уменьшить style exaggeration.

---

## C. Видео (Veo / Kling)

### C1. Стиль (вставлять в каждый видео-промпт)
```
Style: desert cyberpunk machine-cult cinema. Rust, sand and spice palette: deep warm blacks, rust red, sand beige, glowing spice orange and amber; cyan appears ONLY as tiny machine accents (the character's ring, a cult eye, scanner beams). Hazy golden-hour or lamp-lit interiors, floating dust motes, gentle heat shimmer. Slow, ritual camera moves (slow push-in, slow orbit), with occasional sharp 2-3 frame digital glitch cuts. Semi-realistic stylized 3D character animation, cinematic 2.39:1 framing, shallow depth of field, anamorphic warm flares. The lizard woman's iridescent scales shift color in a slow wave from crest to tail roughly every 4 seconds, with tiny random sparkles when she moves; never blue. Her movements are slow, lazy and elegant; reactions are quick and precise. No text, no logos.
```

### C2. Образец шота: «Тук-тук» (6–8 с, для аватара и рекламы)
```
[CORE short: tall slender iridescent lizard woman, crescent crest, spiral-tipped tail with paper price tag, rust-black ring with thin cyan line on left index finger, rust-red cropped jacket, sand veil scarf]
[C1 style]
Shot: medium close-up inside a dim rusty shopping altar lit by warm amber lamps. She leans on a dusty glass display case, looks at a jar inside, then slowly lifts her left hand and taps the ring twice on the glass, tap-tap. A faint cyan pulse runs around the ring. She lifts her eyes to the camera and does a slow sideways blink with her translucent nictitating membrane, then a closed-mouth smirk. Her tail tip lazily curls into a spiral behind her. Slow push-in throughout. Ends on her face, scales glowing amber.
```

### C3. Образец шота: «Око не видит» (5–6 с)
```
[CORE short] [C1 style]
Shot: wide, a dusty altar hall; a cyan scanner beam from a giant mechanical cult eye in a stone triangle sweeps across rows of goods. She walks unhurried straight through the beam; the beam passes over her without reacting, while her ring gives one faint cyan flicker. She does not look at the eye. Camera slowly tracks alongside her at waist height, sand dust drifting. Two-frame glitch cut at the end.
```

### C4. Анимационные правила для режиссёра (по-русски)
- Камера и фон движутся медленно и ритуально, а реакции у неё резкие и точные. Это движение магазина, перенесённое в персонажа.
- Голубой только в кольце, в Оке и в лучах сканеров. Больше одного голубого акцента на кадр не ставить.
- Хвост никогда не стоит на месте, это её «второй голос» (см. bible.md, «Хвост»).
- В уязвимых сценах неон гаснет быстро, за 0.5 с, а возвращается медленно, за 3–4 с.
