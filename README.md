Arome Handmade — Starter (multilingual RO/EN)
# main.py

def salut():
    print("Salut, Git!")

salut()
Descriere:
- Site demo pentru magazin de parfumuri naturale, săpunuri și lumânări.
- Limba implicită: română (RO). Se poate comuta în engleză (EN) din header.
- 3 produse demo incluse.
- Coș + Stripe Checkout (serverless) pentru Vercel.

Contact folosit în site: cameliaalexandra09@gmail.com

Setup local:
1. npm install
2. cp .env.example .env
3. Completează .env cu cheile Stripe (test)
   - VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
   - STRIPE_SECRET_KEY=sk_test_xxx
4. npm run dev

Deploy pe Vercel:
1. Push repo pe GitHub.
2. Import proiect în Vercel.
3. Setează build command: npm run build și output dir: dist.
4. Adaugă variabilele de mediu în Vercel.
