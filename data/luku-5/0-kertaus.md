---
path: '/luku-5/0-kertaus'
title: 'Perusteet-kurssin kertaus'
hidden: false
---


<div>
<lead>
Tässä osiossa kerrataan hieman Tietokoneen toiminnan perusteet -kurssilla opittuja asioita. Jokainen kertausosion tehtävistä on sellainen, että voit yrittää vastaamista niin monta kertaa kuin tarvitset, kunnes vastaus on oikein. Jos tehtävässä on useampi vastauskenttä, on jokaiseen annettava vastaus ennen kuin voi painaa Vastaa-nappia. Näet tehtävästä saadut osapisteet myös osittain oikeista vastauksista, mutta vasta kokonaan vastattuasi näet mitkä olivat oikein. Kun olet saanut hankittua vähintään 20 pistettä tehtävistä, saat sähköpostiisi ilmoittautumislinkin Tietokoneen toiminnan jatkokurssille. Ilmoittauduttuasi pääset kurssin Moodle-oppimisympäristöön, jossa on tiedot kurssin muista tehtävistä ja kokeesta.
</lead>
</div>

</text-box>


## Binääri- ja heksadesimaaliluvut

Binäärilukujen ja heksadesimaalilukujen perusteiden konkreettinen osaaminen mahdollistaa niiden hyödyntämisen muun muassa algoritmien suunnittelussa ja ohjelmoinnissa, rinnakkaisohjelmoinnissa, kryptografiassa ja tietoliikenteessä. Erilaiset kantalukujärjestelmät eivät siis kuulu pelkästään tietojenkäsittelytieteilijän ja ohjelmoijan yleissivistykseen, vaan lisäksi niiden ymmärtäminen on välttämätöntä useiden alan menetelmien oppimiseksi ja soveltamiseksi. Verkosta löytyvien muuntimien tai vaikkapa Pythonin käyttö lukujärjestelmämuunnoksiin harjoitellessasi ei edistä oppimistasi. Sen sijaan oppimistasi edistää, kun teet kaikki tehtävissä pyydetyt muunnokset käsin kynällä ruutupaperille ennen vastaamista. Kannattaa myös harjoitella niitä tarvittaessa vapaaehtoisesti enemmänkin.

Lisätietoja lukujärjestelmistä löydät Tietokoneen toiminnan perusteet -kurssilta ja asiaa käsittelevästä [lisämateriaalista](https://tkt-tito.github.io/osa2/kantalukujarjestelmat/).

### Kymmenjärjestelmä ja binäärijärjestelmä

Kymmenjärjestelmän luvut ovat 10-kantaisia lukuja ja binääriluvut 2-kantaisia lukuja. Heksadesimaaliluvut puolestaan ovat 16-kantaisia lukuja. Kymmenjärjestelmässä numeron paikka ilmaisee, montako mitäkin kymmenen potenssia (ykköset, kymmenet, sadat jne.) tarvitaan luvun ilmaisemiseen. Esimerkiksi

<p>2735 = 2&#8901;1000 + 7&#8901;100 + 3&#8901;10 + 5&#8901;1</p>

Binäärijärjestelmässä eli 2-kantajärjestelmässä vastaavasti numeron paikka ilmaisee, montako mitäkin kahden potenssia (ykköset, kakkoset, neljät, kahdeksat jne.) tarvitaan luvun ilmaisemiseen. Esimerkiksi

<p>0b1001 = 1&#8901;8 + 0&#8901;4 + 0&#8901;2 + 1&#8901;1 = 9</p>

Useissa ohjelmointikielissä on mahdollisuus ilmaista kokonaisluku binäärilukuna tai heksadesimaalilukuna. Muun muassa Pythonissa, Javassa, Javascriptissä, C:ssä ja C++:ssa käytetään etuliitettä 0b binäärilukujen ilmaisuun ja etuliitettä 0x heksadesimaalilukujen ilmaisuun. Esimerkiksi Pythonissa käyttäisit sitä näin:

```python
luku = 0b1001
```
Muuttujan `luku` arvo on tällöin sama kuin jos kirjoittaisit näin:
```python
luku = 9
```

<!--
Quiz binääriluvut 1
-->

<div><quiz id="17c1e89b-8f4f-434b-9dba-d85a04e668c9"></quiz></div>
<!--
Quiz binääriluvut 2
-->
<div><quiz id="a2a0ee7a-095f-4387-b428-7d21ebf3251c"></quiz></div>
<!--
Quiz binääriluvut 3
13e5e8d1-c762-4526-97e6-c27eaed1e19c
-->
<div><quiz id="13e5e8d1-c762-4526-97e6-c27eaed1e19c"></quiz></div>

<!--
Quiz Binääriluvut 4
7488e46c-69fe-419e-8356-b4e9b3925938

-->
<div><quiz id="7488e46c-69fe-419e-8356-b4e9b3925938"></quiz></div>
<!--
Quiz binääriluvut 5
fc9e2af3-21a7-45b1-a73c-8abbb1062fd8
-->
<div><quiz id="fc9e2af3-21a7-45b1-a73c-8abbb1062fd8"></quiz></div>


### Heksadesimaalijärjestelmä

Binääriluvuissa on vain kaksi eri numeroa, joten niillä ilmaistut luvut ovat pitkiä. Siksi lukuja ilmaistaan usein heksadesimaalilukuina binäärilukujen sijaan. Heksadesimaalijärjestelmässä eli 16-kantajärjestelmässä puolestaan numeron paikka ilmaisee, montako mitäkin luvun 16 potenssia (ykköset, kuudettoista, kuudettoista, kaksisataaviisikymmentäkuudet jne.) tarvitaan luvun ilmaisemiseen.

Koska 16-kantaisessa järjestelmässä tarvitaan 16 numeroa, on käytössä kirjaimet A – F kuvaamaan ”numeroita” 10 – 15. Niinpä numerot nollasta yhdeksään ovat samat, mutta:
10 = A, 11 = B, 12 = C, 13 = D, 14 = E ja 15 = F.

Esimerkiksi heksadesimaaliluku 0x1AB muunnetaan kymmenjärjestelmään seuraavasti:

0x1AB = 1&#8901;256 + A&#8901;16 + B&#8901;1
= 1&#8901;256 + 10&#8901;16 + 11
= 256 + 160 + 11
= 427

Potenssimerkinnöin ilmaisten:

<p>0x1AB = 1&#8901;16<sup>2</sup> + 10&#8901;16<sup>1</sup> + 11&#8901;16<sup>0</sup> =256 + 160 + 11 = 427</p>

Esimerkiksi Pythonissa voit antaa muuttujalle kokonaislukuarvon heksadesimaalimuodossa näin:
```python
luku = 0x1AB
```
Muuttujan `luku` arvo on tällöin sama kuin jos kirjoittaisit näin:
```python
luku = 427
```

Heksadesimaalilukujen ja binäärilukujen väliset muunnokset ovat suoraviivaisia. Kukin heksadesimaalinumero voidaan ilmaista neljällä bitillä eli binääriluvuilla 0b0000 \- 0b1111. Esimerkiksi 0b0000 \= 0x0 ja 0b1111 \= 0xF.

Esimerkki: Luvun 0xCAFE muuntaminen binääriluvuksi

- 0xC = 12 = 0b1100
- 0xA = 10 = 0b1010
- 0xF = 15 = 0b1111
- 0xE = 14 = 0b1110

Niinpä 0xCAFE = 0b 1100 1010 1111 1110.


<div><quiz id="a1c638cf-a60a-4c75-b190-58e37ac740b6"></quiz></div>

<div><quiz id="e118f74c-6a8c-48e6-8f1a-e695e0f1ccea"></quiz></div>

<div><quiz id="66be783b-a5b9-4121-ba7c-33661ffda408"></quiz></div>

<div><quiz id="95d23e3f-a4fd-4457-a3e4-31ced6c9e6d7"></quiz></div>








