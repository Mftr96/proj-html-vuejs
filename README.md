INFO STRUTTURAZIONE SITO:
Il sito è strutturato con Vite utilizzando componenti scritte tramite VueJs tramite Javascript.
Viene diviso in tre macro-componenti che sono:

1:  AppHeader
2:  AppMain
3:  AppFooter 

le tre macro componenti sono strutturate a loro volta da micro componenti, nello  specifico(in ordine di apprizione nel macro-componente):

AppHeader:
-Links
-CarouselHeader
-Jumbotron

AppMain:
-OurSolutions
-OurMissions
-OurWorks
-OurResults
-OurPrices 
-ClientsQuotes
-LatestNews
-NewProjects

AppFooter:
n/a(abbiamo preferito lavorare sul componente dato che non c'era bisogno di ulteriore suddivisione del componente già scarno di suo)
-------------------------------
IMMAGAZZINAMENTO DATI:
Per quanto riguarda l'utilizzo del percorso delle immagini, i percorsi vengono messi all'interno di un array nel data relativo al componente che le deve utilizzare. Successivamente per utilizzarlo in pagina viene combinato il dato con la funzione getImg (dichiarata al momento nel metodo nei componenti, ma c'è l'intenzione di impostare un file helper.js il quale verrà poi importato nelle componenti).
In generale, sono stati immessi i dati necessari nei singoli componenti. Rimane comunque attivo il file store.js per eventuali dati da immettere che hanno bisogno di essere immessi su tutto il sito.
--------------------------------------
LIBRERIE UTILIZZATE:
Su questo sito sono state utilizzate le seguenti librerie:
-Bootstrap(versione 5.3.3)
-Fontawesome
------------------------------------
GESTIONE COMPONENTI:
le componenti sono state Distribuite per i tre componenti del gruppo, in particolare:

Matteo: LatestNews,
NewProjects,
OurWorks,
OurResults,
Footer
--

Gabriele:
AppHeader(CarouselHeader,links,Jumbotron):
--

Fabio:
OurSolutions,
OurMissions,
OurResults,
OurWorks,
OurPrices,
OurQuotes,
CarouselHeader,
Jumbotron,
ClientsQuotes,
--
------------------------------------



