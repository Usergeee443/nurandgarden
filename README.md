# Nur & Garden — Eco-luxury UI

React asosidagi premium landing va sahifalar to‘plami. Dizayn konsepti “luxury minimalism + garden” estetikasiga tayangan.

## Ishga tushirish

```bash
npm install
npm start
```

## Loyihaning asosiy imkoniyatlari

- React Router asosidagi `Home`, `About`, `Products`, `Contact`, `Gallery` sahifalari.
- `react-i18next` orqali UZ / RU / EN tillarini qo‘llash; til holati headerdagi toggle orqali boshqariladi.
- Har sahifa uchun `react-helmet-async` yordamida title, description va OpenGraph metama’lumotlari.
- Hero Swiper optimizatsiyasi (mobile aspect ratio, manual/auto control) va scroll animatsiyalari (`AOS`).
- Minimalist preloader, responsive grid/masonry layoutlar, kontakt formasi va modal galereya.

## Tuzilma

- `src/components/layout` — Header/Footer kabi layout komponentlar.
- `src/components/ui` — qayta ishlatiladigan UI elementlar, masalan `LanguageToggle`.
- `src/sections/HeroSwiper` — bosh sahifa uchun to‘liq ekran slideri.
- `src/pages` — tematik sahifalar (Home, About, Products, Contact, Gallery).
- `src/data` — mahsulot va galereya ma’lumotlari.
- `src/locales` — UZ/RU/EN tarjima fayllari.
- `src/styles` — umumiy o‘zgaruvchilar va bazaviy CSS.
- `src/theme.js` — global tema konteksti.
- `src/assets` — logo va vizual tasvirlar (hero, mahsulot, galereya).

## Tasvirlar

`src/assets/images/` papkasidagi SVG va PNG fayllar brending estetikasini aks ettiruvchi placeholder tasvirlar hisoblanadi. Haqiqiy fotosuratlar tayyor bo‘lganda shu nomlar bilan almashtirish kifoya (`hero-01.png`, `product-*.svg`, `gallery-*.svg`).

## Kelgusida rivojlantirish

- Mahsulot kartalari uchun modal / detail sahifalar qo‘shish.
- Backend/e-mail integratsiyasi orqali kontakt formasini real xizmatga ulash.
- Performance optimizatsiyasi (image lazy-loading, bundle splitting).

## Vercel’ga joylash (deployment)

1. Vercel’da yangi projekt yarating va ushbu repoga ulaning.
2. `framework` sifatida **Create React App** avtomatik aniqlanadi; `build` buyrug‘i `npm run build`, `output` katalogi `build/`.
3. Peer konfliktlarini hal qilish uchun repo ildizida `.npmrc` faylida `legacy-peer-deps=true` sozlamasi tayyor – qo‘shimcha konfiguratsiya talab qilinmaydi.
4. Deployment vaqtida Vercel `npm install`, so‘ng `npm run build`, oxirida `build/` ni serve qiladi.
5. Muqobil: lokalda `npm install --legacy-peer-deps && npm run build` bajarib, `vercel deploy --prebuilt` orqali yopiq buildni yuborishingiz ham mumkin.

