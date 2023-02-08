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

<div><quiz id="9e1b459f-28eb-55df-ae0d-11e5f6abe150"></quiz></div>
<!--
Quiz binääriluvut 2
-->
<div><quiz id="561e6e0f-6a02-5566-a4ec-3f1e20cda6cf"></quiz></div>
<!--
Quiz binääriluvut 3
7c858955-b39d-59dc-8808-c2790e1988c8
-->
<div><quiz id="7c858955-b39d-59dc-8808-c2790e1988c8"></quiz></div>

<!--
Quiz Binääriluvut 4
8246018c-2769-56f2-8911-cc8fe6b9d713

-->
<div><quiz id="8246018c-2769-56f2-8911-cc8fe6b9d713"></quiz></div>
<!--
Quiz binääriluvut 5
4e12916c-e174-5ddd-ad34-f56c94aec7bd
-->
<div><quiz id="4e12916c-e174-5ddd-ad34-f56c94aec7bd"></quiz></div>


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


<div><quiz id="14752136-6b1c-586c-888c-5a200db6042d"></quiz></div>

<div><quiz id="adeec708-d238-534e-ad23-d6358628d2dc"></quiz></div>

<div><quiz id="004a437a-9736-58df-a61b-a3042dda5825"></quiz></div>

<div><quiz id="6224ca7e-6606-5a38-aaf0-9eec08697273"></quiz></div>








