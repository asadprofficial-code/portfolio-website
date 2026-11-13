// Tjänstesidor – samma uppbyggnad som Techknights SEO- och webbsidor (H2-sektioner, listor, tabeller, FAQ),
// men egen text, egen målgrupp (småföretag i hela Sverige) och inga Stockholmssökord.
// Sektionsfält: h2, body (sträng eller lista), bullets, ordered, table {head, rows}, after.
export const SERVICES = [
  {
    slug: "seo",
    name: "SEO",
    short: "SEO-analys, sökordsanalys, teknisk SEO, innehåll och länkar – med månadsrapport.",
    image: "/img/seo-dashboard.png",
    metaTitle: "SEO-tjänster för småföretag – sökmotoroptimering i hela Sverige",
    metaDescription:
      "SEO för småföretag i hela Sverige: SEO-analys, sökordsanalys, teknisk SEO, innehåll och länkbygge. Tydlig offert och en rapport varje månad.",
    h1: "SEO-tjänster för småföretag",
    tagline: "Sökmotoroptimering som ska ge fler kunder – inte bara bättre placeringar.",
    intro:
      "Vi hjälper småföretag i hela Sverige att synas på Google och i AI-sök. Arbetet följer en fast ordning – analys, sökord, teknik, innehåll och länkar – och ni ser resultatet i en rapport varje månad.",
    bullets: [
      "SEO-analys som visar vad som stoppar sajten och vad som ska göras först.",
      "Sökord som matchar det era kunder faktiskt söker efter, med en sida per sökord.",
      "Tekniska ändringar som vi gör själva i WordPress, Shopify och Next.js.",
      "Texter och länkar som bygger förtroende – inga köpta länkpaket.",
      "Synlighet i AI-tjänster som ChatGPT och Googles AI-översikter.",
      "Månadsrapport med placeringar, trafik och förfrågningar.",
    ],
    heroImage: "/img/seo-dashboard.png",
    techTitle: "Verktygen bakom vårt SEO-arbete",
    techIntro: "Vi mäter och analyserar med samma verktyg som större byråer – och visar er siffrorna.",
    tech: [
      { name: "Search Console", text: "Klick och placeringar" },
      { name: "Analytics 4", text: "Besök och förfrågningar" },
      { name: "Semrush", text: "Sökord och konkurrenter" },
      { name: "Ahrefs", text: "Länkar och DR" },
      { name: "PageSpeed", text: "Laddtid och Core Web Vitals" },
      { name: "Screaming Frog", text: "Teknisk genomsökning" },
      { name: "WordPress", text: "Vanligaste CMS:et" },
      { name: "Shopify", text: "E-handel" },
    ],
    whyTitle: "Därför väljer småföretag oss för SEO",
    whyImage: "/img/seo-dashboard.png",
    why: [
      "Ni pratar direkt med den som gör jobbet – ingen säljare emellan.",
      "Skriftlig offert innan vi börjar.",
      "Vi gör de tekniska ändringarna själva.",
      "Inga köpta länkar och inga löften om förstaplatser.",
      "Rapport på svenska varje månad.",
    ],
    stepsTitle: "Kom igång med SEO",
    steps: [
      { title: "Genomgång", text: "Ett kort videomöte där vi tittar på sajten, era mål och era konkurrenter." },
      { title: "Analys och plan", text: "Ni får en prioriterad åtgärdslista och en offert för arbetet." },
      { title: "Start", text: "Vi börjar med det som ger störst effekt och rapporterar varje månad." },
    ],
    alts: [
      { image: "/img/content-writing-workspace.png", title: "En SEO-plan som passar er verksamhet", body: "Ett lokalt tjänsteföretag och en webbutik behöver olika saker. Vi börjar med vad era kunder söker efter och bygger planen därifrån – inte från en färdig mall." },
      { image: "/img/web-dev-workspace.png", title: "Flexibelt upplägg utan krångel", body: "Börja med en analys, välj löpande SEO eller beställ en enskild insats. Ni bestämmer takten och kan ändra upplägget när verksamheten förändras.", reverse: true },
      { image: "/img/ecommerce-dashboard.png", title: "Beslut baserade på data, inte gissningar", body: "Varje åtgärd följs upp i Search Console och Analytics. Ser vi att något inte ger effekt ändrar vi det – och berättar varför." },
    ],
    centeredTitle: "Från teknik till text – SEO på ett ställe",
    centeredBody: "Teknisk SEO, innehåll, lokal synlighet och länkar hänger ihop. När samma team gör allt blir det inga glapp mellan analys och genomförande.",
    sections: [
      {
        h2: "Vad är SEO och varför behöver ett småföretag det?",
        body: [
          "SEO (sökmotoroptimering) betyder att man gör en webbplats lättare att hitta i Googles vanliga sökresultat – de träffar som inte är annonser. Den som klickar på ett organiskt resultat kostar er ingenting per klick, och besökaren letar redan efter det ni säljer.",
          "För ett mindre företag är det ofta den billigaste vägen till nya kunder över tid. Annonser slutar ge trafik den dag budgeten tar slut. En sida som rankar fortsätter att ta emot besökare så länge den håller måttet.",
          "Arbetet brukar delas i två delar: det som görs på den egna sajten (teknik, struktur och innehåll) och det som händer utanför den (länkar och omnämnanden från andra webbplatser).",
        ],
      },
      {
        h2: "Så går ett SEO-uppdrag till hos oss",
        body: ["Vi arbetar i samma steg för alla kunder, oavsett om sajten är ny eller har funnits länge:"],
        ordered: true,
        bullets: [
          "Genomgång: vi granskar teknik, innehåll, länkar och de företag som syns före er i dag.",
          "Mål: vi kommer överens om vad som ska mätas – helst förfrågningar och försäljning, inte bara placeringar.",
          "Sökordsplan: sökorden grupperas efter vad sökaren vill göra och kopplas till rätt sida. Ni godkänner planen innan vi börjar.",
          "Första åtgärderna: tekniska fel och de sidor som har störst chans att klättra tas först.",
          "Löpande arbete: nya texter, förbättringar och länkar, med en rapport och ett videomöte varje månad.",
        ],
        after: [
          "Eftersom vi även bygger webbplatser gör vi de tekniska ändringarna själva. Ni behöver inte skicka vidare en lista till någon annan utvecklare.",
        ],
      },
      {
        h2: "SEO-analys – det här tittar vi på",
        body: [
          "Analysen är första steget och kan också köpas separat, till exempel om ni vill ha en second opinion på det SEO-arbete som redan görs. Vi går igenom:",
        ],
        bullets: [
          "Hastighet och mobilvy – hur snabbt sidorna laddar och hur de fungerar i telefonen.",
          "Indexering – om Google hittar rätt sidor via sitemap, robots.txt och canonical-taggar.",
          "Fel och omdirigeringar – trasiga länkar, 404-sidor och kedjor av omdirigeringar.",
          "Sökord – vilka ord ni rankar på i dag och vilka era konkurrenter tar som ni saknar.",
          "Innehåll – tunna sidor, dubbletter och sidor som tävlar om samma sökord.",
          "Länkar – vilka sajter som länkar till er och om något ser riskabelt ut.",
        ],
        after: [
          "Ni får en lista där varje åtgärd är sorterad efter effekt och arbetsinsats, plus en ärlig bedömning av vad som är rimligt att nå och när.",
        ],
      },
      {
        h2: "Sökordsanalys – så väljer vi sökord",
        body: [
          "Ett bra sökord säger något om vad personen vill. Den som skriver ”vad är SEO” vill lära sig. Den som skriver ”SEO-hjälp för småföretag” letar efter någon att anlita. Vi prioriterar sökord där sökaren är nära ett beslut, även om volymen är lägre.",
          "Vi tittar både på korta, breda sökord och på längre fraser med färre sökningar. De längre fraserna är ofta lättare att ranka på och ger besökare som vet vad de vill ha.",
          "Varje sökord får en egen sida. Om två sidor försöker ranka på samma ord konkurrerar de med varandra, och då brukar ingen av dem lyckas. Det kallas kannibalisering och är ett av de vanligaste felen vi hittar.",
        ],
      },
      {
        h2: "Teknisk SEO – det här ingår",
        body: ["Teknisk SEO handlar om att Google ska kunna hitta, läsa och förstå sajten. Är grunden fel hjälper inga texter, så den kommer först:"],
        bullets: [
          "Laddtid och Core Web Vitals, till exempel bilder som är för stora och skript som bromsar.",
          "Rätt sidor i Googles index – och fel sidor utanför.",
          "Tydlig sajtstruktur med logiska adresser och interna länkar.",
          "Strukturerad data (schema) så att Google och AI-tjänster förstår vad sidan handlar om.",
          "Omdirigeringar när sidor flyttas, så att ingen trafik går förlorad.",
          "Kontroll av att innehållet syns även när sajten bygger mycket på JavaScript.",
        ],
      },
      {
        h2: "Innehåll och on-page SEO",
        body: [
          "En sida förtjänar att ranka när den svarar bättre på frågan bakom sökordet än de sidor som redan ligger högt. Därför börjar vi alltid med att se vad som rankar i dag, och skriver sedan något som är tydligare, mer konkret och bättre anpassat till er kund.",
          "On-page betyder också detaljerna: en titel och metabeskrivning som får folk att klicka, rubriker som följer det läsaren undrar, och en tydlig uppmaning om vad besökaren ska göra härnäst. En sida som rankar men inte ger några förfrågningar är inte klar.",
          "Vi skriver tjänstesidor, guider och artiklar och länkar ihop dem så att de stärker varandra.",
        ],
      },
      {
        h2: "Länkbygge – utan köpta länkpaket",
        body: [
          "Länkar från andra webbplatser är fortfarande en viktig signal för Google. En relevant länk från en sajt i er bransch väger tyngre än många länkar från okända sajter.",
          "Vi skaffar länkar genom branschkataloger, samarbeten, gästartiklar och innehåll som andra vill hänvisa till. Vi köper inga länkpaket och använder inga länknätverk, eftersom det kan ge ett straff från Google som kostar mer än det någonsin gav.",
        ],
      },
      {
        h2: "SEO för AI-sök (GEO)",
        body: [
          "Allt fler ställer sina frågor till ChatGPT, Gemini eller Perplexity, och Google visar AI-översikter överst i många sökningar. Då räcker det inte att ranka – ert företag behöver också vara den källa som AI-tjänsten väljer att citera.",
          "Arbetet kallas GEO (generative engine optimization) och bygger på samma grund som vanlig SEO: sidor som svarar direkt på frågan, rubriker formulerade som frågor, fakta med tydliga källor och att ert företag nämns på andra trovärdiga sajter.",
        ],
      },
      {
        h2: "Lokal SEO och Google Företagsprofil",
        body: [
          "Har ni kunder i ett visst område – en ort, en kommun eller en region – är lokal SEO ofta det snabbaste sättet att få fler samtal. Det handlar om att synas i Google Maps och i kartrutan överst i sökresultatet.",
          "Vi går igenom och fyller i er Google Företagsprofil, ser till att namn, adress och telefonnummer är lika överallt, hjälper er att få fler omdömen och bygger sidor på sajten som beskriver ert område.",
        ],
      },
      {
        h2: "SEO för e-handel, tjänsteföretag och B2B",
        body: [
          "Upplägget skiljer sig beroende på vad ni säljer. En webbutik behöver kategorisidor och produktsidor som rankar, och en teknisk grund som klarar filter och många produkter. Ett tjänsteföretag behöver tydliga sidor per tjänst och ofta lokal synlighet.",
          "För B2B kan sökord med mycket få sökningar vara de mest värdefulla, eftersom en enda ny kund kan vara värd mycket. Vi anpassar planen efter det.",
        ],
      },
      {
        h2: "Vad kostar SEO?",
        body: ["Priset beror på hur stor sajten är, hur hård konkurrensen är i er bransch och hur mycket som ska göras varje månad. Vi erbjuder tre upplägg:"],
        table: {
          head: ["Upplägg", "Vad det innebär", "Passar när"],
          rows: [
            ["SEO-analys", "En genomgång med prioriterad åtgärdslista, engångspris", "Ni vill veta vad som behöver göras innan ni bestämmer er"],
            ["Löpande SEO", "Månadsupplägg för analys, åtgärder, texter och rapport", "Ni vill växa stadigt och slippa göra arbetet själva"],
            ["Engångsinsats", "En avgränsad uppgift, till exempel teknisk SEO eller en flytt av sajten", "Ni har ett specifikt problem som ska lösas"],
          ],
        },
        after: ["Efter en kort genomgång får ni en skriftlig offert. Ni betalar aldrig för arbete ni inte har godkänt."],
      },
      {
        h2: "Hur lång tid tar SEO?",
        body: [
          "Tekniska fel kan ge effekt redan efter några veckor när Google har läst om sidorna. Nya sidor och texter tar oftast längre tid, och för de flesta småföretag syns den tydliga skillnaden efter några månader.",
          "Hur snabbt det går beror på konkurrensen, hur sajten ser ut i dag och hur mycket som görs varje månad. Vi mäter från första dagen, så ni kan följa utvecklingen själva.",
        ],
      },
      {
        h2: "SEO-byrå, frilansare eller göra det själv?",
        body: [
          "Att göra SEO själv går, men tar tid och kräver att man hänger med i förändringar hos Google. En stor byrå kan mycket men är ofta dyr för ett litet företag, och kontakten går via en säljare eller projektledare.",
          "Hos oss pratar ni direkt med de två personer som gör jobbet. Ni får byråns arbetssätt med en frilansares närhet och pris.",
        ],
      },
      {
        h2: "Vad kan ingen SEO-leverantör garantera?",
        body: ["Var försiktig med den som lovar för mycket. Det här kan ingen garantera:"],
        bullets: [
          "En förstaplats i Google på ett visst datum.",
          "Ett exakt antal besökare eller kunder.",
          "Att en placering ligger kvar för alltid – Google och konkurrenterna förändras.",
        ],
        after: [
          "Det vi kan lova är ett tydligt arbetssätt, realistiska mål och rapporter som visar exakt vad som har gjorts och vad det har gett.",
        ],
      },
      {
        h2: "Så mäter vi resultat",
        body: [
          "Vi använder Google Search Console för att se klick, visningar och placeringar, och Google Analytics 4 för att se vad besökarna gör och hur många som hör av sig. Placeringar för era viktigaste sökord följs varje vecka.",
          "Varje månad får ni en kort rapport på svenska: vad som har gjorts, vad som har förändrats och vad vi gör härnäst.",
        ],
      },
    ],
    faq: [
      { q: "Vad kostar SEO för ett småföretag?", a: "Det beror på sajtens storlek och konkurrensen i er bransch. Efter en kort genomgång får ni en skriftlig offert för analysen eller för löpande SEO." },
      { q: "Hur lång tid tar det innan vi syns bättre på Google?", a: "Tekniska förbättringar kan märkas efter några veckor. Nytt innehåll tar oftast några månader. Vi mäter från dag ett så att ni ser utvecklingen." },
      { q: "Kan ni garantera en förstaplats?", a: "Nej, det kan ingen ärligt lova. Vi lovar ett tydligt arbetssätt och rapporter som visar vad som har gjorts och vilken effekt det har haft." },
      { q: "Arbetar ni med företag i hela Sverige?", a: "Ja. Vi arbetar på distans och har möten via video, så det spelar ingen roll var i Sverige ni finns." },
      { q: "Kan vi köpa bara en SEO-analys?", a: "Ja. Analysen kan köpas separat. Ni får en prioriterad åtgärdslista som ni kan genomföra själva eller låta oss göra." },
      { q: "Gör ni lokal SEO och Google Företagsprofil?", a: "Ja. Vi optimerar er profil, ser till att uppgifterna stämmer överallt och bygger sidor för det område där era kunder finns." },
      { q: "Vilka plattformar arbetar ni med?", a: "Främst WordPress, Shopify och Next.js, men SEO-analysen fungerar för alla plattformar." },
      { q: "Är det bindningstid?", a: "Vi rekommenderar att ge SEO några månader, men villkoren står tydligt i offerten innan ni bestämmer er." },
    ],
  },
  {
    slug: "webbdesign",
    name: "Webbdesign",
    short: "Hemsidor, WordPress-sajter, landningssidor och webbutiker för småföretag.",
    image: "/img/web-dev-workspace.png",
    metaTitle: "Webbdesign för småföretag – hemsida som syns i Google",
    metaDescription:
      "Webbdesign för småföretag i hela Sverige: hemsida, WordPress-sajt, landningssida eller webbutik. Mobilanpassat, snabbt och byggt för Google – med tydlig offert.",
    h1: "Webbdesign för småföretag",
    tagline: "En hemsida som ser proffsig ut, laddar snabbt och ger förfrågningar.",
    intro:
      "Vi designar och bygger hemsidor för småföretag i hela Sverige – från en enkel företagssajt till en webbutik. Ni får en skriftlig offert innan vi börjar och en sajt som är byggd för att synas i Google.",
    bullets: [
      "Design som passar ert varumärke och är lika tydlig på telefonen som på datorn.",
      "Snabb laddning och ren kod som gör det lättare att ranka.",
      "Ni kan själva ändra texter och bilder efter lansering.",
      "SEO-grund från start: rubriker, metadata, sitemap och omdirigeringar.",
      "Underhåll och support efter lansering om ni vill.",
    ],
    heroImage: "/img/services-hero.png",
    techTitle: "Plattformar och tekniker vi bygger med",
    techIntro: "Vi väljer plattform efter vad ni behöver – inte tvärtom.",
    tech: [
      { name: "WordPress", text: "Hemsidor ni uppdaterar själva" },
      { name: "Elementor", text: "Visuell sidbyggare" },
      { name: "Shopify", text: "Webbutiker" },
      { name: "WooCommerce", text: "E-handel i WordPress" },
      { name: "Next.js", text: "Snabba moderna sajter" },
      { name: "React", text: "Interaktiva gränssnitt" },
      { name: "Tailwind", text: "Ren och snabb CSS" },
      { name: "HTML/CSS", text: "Egen kod" },
    ],
    whyTitle: "Därför väljer småföretag oss för sin hemsida",
    whyImage: "/img/web-dev-workspace.png",
    why: [
      "Offert och tidsplan skriftligt innan vi börjar.",
      "SEO-grunden ingår alltid – inte ett tillägg.",
      "Ni äger sajten, domänen och innehållet.",
      "Ni kan själva ändra texter och bilder.",
      "Support och underhåll efter lansering om ni vill.",
    ],
    stepsTitle: "Kom igång med er nya hemsida",
    steps: [
      { title: "Videomöte", text: "Vi går igenom verksamheten, målgruppen och vad hemsidan ska uppnå." },
      { title: "Förslag och design", text: "Ni får förslag, offert och en design att godkänna innan bygget." },
      { title: "Bygge och lansering", text: "Vi bygger i en testmiljö, lanserar och visar hur ni sköter sajten." },
    ],
    alts: [
      { image: "/img/homepage-hero.png", title: "En hemsida som passar er verksamhet", body: "En frisör, en byggfirma och en webbutik behöver olika sidor och funktioner. Vi utgår från hur era kunder väljer leverantör och bygger sajten efter det." },
      { image: "/img/shopify-dashboard.png", title: "Flexibelt – från enkel sajt till webbutik", body: "Börja med en enkel företagssajt och bygg ut när det behövs, med fler sidor, bokning eller en webbutik. Sajten är byggd för att kunna växa.", reverse: true },
      { image: "/img/portfolio-hero.png", title: "Snabb, säker och lätt att sköta", body: "Ren kod, komprimerade bilder och uppdaterade system gör sajten snabb och säker. Med underhåll sköter vi uppdateringar och säkerhetskopior åt er." },
    ],
    centeredTitle: "Design, bygge och SEO – allt på ett ställe",
    centeredBody: "När samma team designar, bygger och optimerar för Google behöver ni inte koordinera flera leverantörer. Ni får en färdig hemsida som är redo att ge förfrågningar.",
    sections: [
      {
        h2: "Vad är webbdesign – och vad gör vi?",
        body: [
          "Webbdesign är både hur en hemsida ser ut och hur den fungerar: var besökaren hittar det den söker, hur tydligt erbjudandet är och hur lätt det är att ta kontakt. En snygg sida som ingen förstår ger inga kunder.",
          "Vi tar hand om hela vägen – struktur, design, bygge, texter och den tekniska grunden för SEO – så att ni får en färdig sajt i stället för ett antal delar som ska pusslas ihop.",
        ],
      },
      {
        h2: "Det här kan vi bygga åt er",
        body: ["Vi bygger det som passar er verksamhet och budget:"],
        table: {
          head: ["Typ av webbplats", "Passar för"],
          rows: [
            ["Hemsida för småföretag", "Företag som vill presentera sina tjänster och få fler förfrågningar"],
            ["WordPress-hemsida", "Den som vill kunna uppdatera allt innehåll själv i ett välkänt system"],
            ["Landningssida", "En kampanj, en ny tjänst eller annonser som ska leda till ett tydligt mål"],
            ["Webbutik", "Försäljning online i Shopify eller WooCommerce, med betalning och frakt"],
            ["Ny design av befintlig sajt", "En sajt som känns gammal, är långsam eller inte ger några kontakter"],
          ],
        },
      },
      {
        h2: "Varför är hemsidan så viktig?",
        body: [
          "De flesta kunder kollar upp ett företag på nätet innan de hör av sig. Hemsidan avgör på några sekunder om ni verkar seriösa, och om besökaren stannar eller går vidare till nästa sökträff.",
          "En bra hemsida jobbar dygnet runt: den svarar på vanliga frågor, visar vad ni har gjort och gör det enkelt att ta nästa steg.",
        ],
      },
      {
        h2: "Så går ett webbprojekt till",
        body: ["Alla projekt följer samma steg, så att ni vet var vi är och vad som händer härnäst:"],
        ordered: true,
        bullets: [
          "Videomöte: vi går igenom verksamheten, målgruppen, nuvarande sajt och konkurrenter.",
          "Förslag och offert: ni får ett skriftligt förslag med sidor, funktioner, tidsplan och pris.",
          "Struktur och design: vi tar fram sidornas upplägg och utseende som ni godkänner.",
          "Bygge: vi bygger i en testmiljö där ni kan klicka runt och lämna synpunkter.",
          "Innehåll: texter och bilder läggs in och anpassas för sökmotorer.",
          "Lansering: vi kopplar domän, formulär och statistik och visar hur ni uppdaterar sajten.",
        ],
      },
      {
        h2: "Byggd för att synas i Google och AI-sök",
        body: [
          "Det är mycket billigare att bygga rätt från början än att rätta till det i efterhand. Därför får varje sida en tydlig rubrikstruktur, titel och metabeskrivning, snabb laddning, en sitemap och strukturerad data.",
          "Byter ni från en gammal sajt flyttar vi med de gamla adresserna med omdirigeringar, så att ni inte tappar den trafik ni redan har. Vill ni sedan växa vidare kan vi fortsätta med löpande SEO.",
        ],
      },
      {
        h2: "Vad kostar en hemsida?",
        body: [
          "Priset beror främst på hur många sidor sajten ska ha och vilka funktioner som behövs. Bokning, inloggning, avancerade formulär och kopplingar till andra system tar mest tid. En webbutik blir oftast dyrare än en vanlig hemsida, eftersom betalning, frakt och produkter ska sättas upp.",
          "Efter första mötet får ni en skriftlig offert. Vill ni lägga till något längre fram får ni en ny offert innan vi gör det.",
        ],
      },
      {
        h2: "Hur lång tid tar ett hemsideprojekt?",
        body: [
          "En mindre företagssajt brukar ta några veckor från start till lansering. En webbutik eller en sajt med många sidor tar längre tid.",
          "Den största faktorn är ofta innehållet: när texter, bilder och synpunkter kommer in. Vi sätter tidsplanen i förslaget och stämmer av den varje vecka.",
        ],
      },
      {
        h2: "Vad måste en modern hemsida klara?",
        body: ["Det här är grundkrav i dag, inte tillägg:"],
        bullets: [
          "Mobilanpassning – de flesta besök kommer från telefonen.",
          "Snabb laddning, som påverkar både besökarna och Google.",
          "Tillgänglighet, så att sidan fungerar med skärmläsare och tangentbord.",
          "Säker uppkoppling (https) och uppdaterade system.",
          "Cookie-ruta och integritetspolicy som följer GDPR.",
        ],
      },
      {
        h2: "Underhåll och support efter lansering",
        body: [
          "En hemsida behöver skötas. Plugins och system behöver uppdateras, säkerhetskopior tas och små ändringar göras. Annars blir sajten långsammare och mer sårbar för varje månad.",
          "Vill ni slippa tänka på det erbjuder vi underhåll som ett månadsavtal: uppdateringar, säkerhetskopior, övervakning och en viss tid för ändringar varje månad.",
        ],
      },
      {
        h2: "Så väljer ni rätt leverantör för er hemsida",
        body: ["Titta på det här innan ni bestämmer er:"],
        bullets: [
          "Tidigare arbeten som liknar det ni behöver.",
          "En skriftlig offert och en tidsplan.",
          "Att ni äger sajten, domänen och innehållet efteråt.",
          "Att SEO finns med från början och inte är ett dyrt tillägg.",
          "Vad som händer efter lansering – support, ändringar och uppdateringar.",
        ],
        after: ["En bra leverantör förklarar varför den föreslår en viss lösning, inte bara hur den ser ut."],
      },
    ],
    faq: [
      { q: "Vad kostar en hemsida för ett småföretag?", a: "Det beror på antal sidor och funktioner. Efter ett kort videomöte får ni en skriftlig offert." },
      { q: "Hur snabbt kan en ny hemsida vara klar?", a: "En mindre företagssajt tar oftast några veckor. En webbutik eller en större sajt tar längre tid. Tidsplanen står i förslaget." },
      { q: "Kan vi uppdatera hemsidan själva?", a: "Ja. Vi bygger så att ni kan ändra texter och bilder själva, och vi visar hur det går till vid lanseringen." },
      { q: "Bygger ni webbutiker?", a: "Ja, i Shopify eller WooCommerce, med betalning, frakt och produktsidor som är anpassade för Google." },
      { q: "Vem äger hemsidan när den är klar?", a: "Det gör ni – sajten, domänen och allt innehåll." },
      { q: "Ingår SEO när ni bygger en hemsida?", a: "Den tekniska SEO-grunden ingår alltid: rubriker, metadata, sitemap, laddtid och omdirigeringar från gamla adresser. Löpande SEO kan läggas till." },
      { q: "Ingår underhåll efter lansering?", a: "Det kan läggas till som ett månadsavtal med uppdateringar, säkerhetskopior och ändringar." },
      { q: "Arbetar ni med företag i hela Sverige?", a: "Ja. Vi arbetar på distans och har alla möten via video." },
    ],
  },
];

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
