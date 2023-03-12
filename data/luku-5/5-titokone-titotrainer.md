---
path: "/luku-5/5-titokone-titotrainer"
title: "Titokone ja TitoTrainer"
---

<div>
<lead>Kurssin oppimistavoitteisiin sisältyy konekielisen ohjelmoinnin perusteet. Konekielistäkään ohjelmointia ei opi ilman harjoittelua. Titokone on ttk-91 ohjelmien kehittämis- ja suoritusympäristö.</lead>
</div>

## Titokone
Titokone on simulaattori, jossa voi suorittaa ttk-91 ohjelmia. Titokoneelle voi antaa suoritettavan ttk-91 ohjelman käyttäen joko symbolista (k91) tai numeerista (b91) esitysmuotoa. Yleensä ohjelmat annetaan kirjoitettuna symbolisella ttk-91 konekielellä ja ne käännetään numeeriseen muotoon ennen suoritusta. Titokoneeseen sisältyy simulaattorin lisäksi myös seuraavat komponentit.

_Symbolisen konekielen kääntäjä_ lukee ttk-91 symbolisella konekielellä kirjoitetun ohjelman (esim. hello.k91) ja kääntää sen ttk-91 konekielelle (esim. hello.b91). Symbolisia konekielisiä ohjelmia voi kirjoittaa millä tahansa tekstieditorilla, kunhan vain muistaa laittaa tiedoston nimen loppuliitteeksi ".k91".

_Simulaattori_ lukee konekielisiä ohjelmia (hello.b91) yksi konekäsky kerrallaan ja emuloi sen aiheuttamat toiminnot simuloidussa ttk-91 järjestelmässä (ks. Luku 5.1). Esimerkiksi konekäskyn "add&nbsp;r1,&nbsp;=1000" suorittamisen tuloksena simuloidun rekisterin r1 arvoa kasvatetaan luvulla 1000 ja simuloidun tilarekisterin SR bitit GEL asetetaan ilmaisemaan tuloksen suhdetta lukuun nolla. Jos yhteenlaskusta aiheutui ylivuoto, se merkitään tilarekisterin SR bittiin O.

_Ohjelmiston kehitysympäristön_ avulla voidaan säätää kommentoinnin määrää symbolisen konekielen käännösaikana ja ohjelman suoritusaikana simulaattorissa. Se näyttää suoritusaikana järjestelmän rekistereiden ja muistin sisällön. Lisäksi se sallii suorituksen vain yksi konekäsky kerrallaan, mikä helpottaa ohjelmointivirheiden löytämistä.

_Animaattori_ aukeaa (optiona) ohjelman suoritusaikana omaan ikkunaansa ja näyttää ohjelman suorituksen animoidusti suorittimen rekisterien ja muistin tasolla. Esimerkiksi konekäskyn "add&nbsp;r1,&nbsp;=1000" muistista noudon yhteydessä se näyttää, kuinka kyseinen konekäsky haetaan muistista väylän kautta suorittimen käskyrekisteriin IR. Saman käskyn suorituksen yhteydessä se näyttää visuaalisesti, kuinka a) rekisterin r1 arvo viedään ALU:un, b) vakion 1000 arvo viedään IR:stä ALU:un ja d) lopulta ALU:n tulos viedään r1:een.

_Graafinen käyttöliittymä_ kokoaa kaikki edellä mainitut komponentit yhteen, jolloin niitä on helppo käyttää. Se koostuu useasta eri ikkunasta ja kehyksestä, joiden kokoa voi dynaamisesti säätää.

### Titokoneen käyttö
Titokonetta on tarkoitus käyttää symbolisen konekielen perusteiden harjoitteluun. Ohjelmat kirjoitetaan tekstieditorilla ttk-91 symbolisella konekielellä, ladataan Titokoneelle, käännetään ja lopuksi suoritetaan simulaattorissa hyödyntäen ohjelmiston kehitysympäristöä ja animaattoria.

Titokoneen omalle koneelle asennettavat eri versiot ja käyttöohjeet löytyvät verkkosivulta https://www.cs.helsinki.fi/group/titokone/. Titokoneen verkkosivulla on useita eri [jar](https://en.wikipedia.org/wiki/JAR_(file_format))-paketteja. Suosittelen käyttämään uusinta versiota [1.400](https://github.com/titokone/titokone/releases/download/titokone-1.4.0/titokone-1.400.jar). Helpoin tapa suorittaa Titokonetta on ladata (klikkaamalla ylläolevaa linkkiä) sen jar-paketti omalle koneelle ja avata se Javan suoritusympäristössä (JRE, Java Runtime Environment).

Java-ohjelmien suorittamista varten järjestelmässäsi täytyy olla asennettuna jokin Javan suoritusympäristö. Se voi olla Oraclen oma toteutus (esim. _Java SE_) tai avoimen lähdekoodin toteutus (esim. _OpenJDK (Java)_ tai _Amazon Corretto_). Viimeksi mainitut ympäristöt löytyvät Windows'in Software Center'istä, joka löytyy Windows-haulla näytön vasemmasta alanurkasta hakusanalla "Software Center" (Windows-10). Javan asentamista varten on ohjeita myös [täällä](https://materiaalit.github.io/tmc-asennus/netbeans_for_linux/).

Titokoneen verkkosivulta löytyy myös sen [käyttöohje](https://www.cs.helsinki.fi/group/titokone/v1.100/kayttoohje/manual_fi.html) ja [asennusohje omalle koneelle](https://www.cs.helsinki.fi/group/nodes/kurssit/tito/titokone/asennus/asennus.html). Huomioi, että ohjetta ei ole päivitetty koskien Javan asennusta. Huomaa, että Titokoneessa on se piirre, että oletusarvoisesti siinä on valittuna valmiiksi käännetyt "_b91 binary_" -tyyppiset tiedostot, joten valitse ohjelmatiedoston tyypiksi "_k91 source_".

Samalta verkkosivulta löytyy myös kokoelma ttk-91 esimerkkiohjelmia, hakemistossa [esimerkit](https://www.cs.helsinki.fi/group/nodes/kurssit/tito/esimerkit/). Voit ladata ne omalle koneellesi, ja valita ne sitten Titokoneelle syötteeksi käännöstä ja suoritusta varten.

Tietojenkäsittelytieteilijänä tule asentamaan omatoimisesti suuria määriä ohjelmistoja itsenäisesti. Jos yllä olevista ohjeista ei ole hyötyä JRE:n asentamiseen, tee esimerkiksi Google-haku "How to install JRE in Windows", jos asennat Windowsiin.

Ohjelmointi on hauskaa ja siten myös konekielinen ohjelmointi. Älä kuitenkaan käytä kaikkea aikaasi ohjelmointiin, koska kurssilla on paljon muutakin opittavaa.

Perustavoitteet symbolisella konekielellä ohjelmoinnille tällä kurssilla ovat seuraavat. Osaat toteuttaa symbolisella ttk-91 konekielellä erilaisten tietorakenteiden (muuttujat, 1- ja 2-ulotteiset taulukot, tietueet) muistivaraukset ja niihin viittaamiset. Osaat käyttää tietorakenteita myös osoitinmuuttujien avulla. Osaat toteuttaa koodissa haarautumiset ja erilaiset toistolauseet. Osaat käyttää (seuraavassa luvussa esiteltäviä) aliohjelmia ja funktioita sekä toteuttaa ne. Osaat selittää, mikä on aktivointitietue ja aktivointitietuepino. Osaat käyttää arvo- ja viiteparametreja. Osaat varata globaaleja tietorakenteita ja aliohjelmien paikallisia tietorakenteita. Osaat viitata aliohjelmissa parametreihin sekä globaaleihin ja paikallisiin tietorakenteisiin.



<text-box variant="example" name="Historiaa:  Akustinen viiveputki">

William B. Shockley ja J. Presper Eckert kehittivät 1946 muistiteknologian, joka perustui akustiseen elohopeaviiveputkeen. Kvartsikide muutti pietsosähköisen ilmiön avulla sähkövirran bitit putkessa eteneväksi akustiseksi signaaliksi. Signaali eteni putkessa vakionopeudella. Muunnos toimi myös toiseen suuntaan tiedon lukemiseksi. Kun data ehti edetä putken toiseen päähän, sen arvo voitiin lukea ja samalla se kirjoitettiin takaisin putken alkupäähän. Yhden 1,45m pitkän putken kapasiteetti oli 1000 bittiä. Maurice Wilkes käytti elohopeaviiveputkia vuonna 1949 EDSAC-koneen keskusmuistina.

<!-- kuva: ch-5-5-viiveputki    -->

![Wilkes EDSAC'in muistiyksikön vieressä. Siinä on metallilaatikossa viisi elohopeaviiveputkea.](./ch-5-5-viiveputki.svg)
<div>
<illustrations motive="ch-5-5-viiveputki"></illustrations>
</div>

</text-box>


## Yhteenveto
Tämä luku käsitteli konekielistä ohjelmointia esimerkkikonetta ttk-91 käyttäen. Kertasimme ensin ttk-91 suorittimen rakenteen ja esittelimme, kuinka valinta- ja toistolauseet toteutetaan konekielellä. Sen jälkeen kävimme läpi rakenteisen tiedon toteutustapoja ja rakenteiseen tietoon viittaamista yleensä indeksoidun tiedonosoitusmoodin avulla. Tutustuimme koodin optimoinnin käsitteeseen ja muutamaan yksinkertaiseen tapaan toteuttaa optimoitua koodia. Lopuksi esittelimme konekielisen ohjelmoinnin harjoitteluympäristön Titokone.

Vastaa alla olevaan kyselyyn kun olet valmis luvun 5 tehtävien kanssa.

<div><quiz id="cb592fa8-c221-5a69-a71d-4a93f7067ec7"></quiz></div>
