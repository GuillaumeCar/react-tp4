<img src="images/readme/header-small.jpg" >

# D. Navigation maison <!-- omit in toc -->

_**Pour terminer ce TP, nous allons tenter de mettre en place un système de navigation maison !**_

_**L'idée est d'afficher par défaut la `VideoList` mais de permettre à l'utilisateur, s'il clique sur une vignette, de consulter le `VideoDetail` associé :**_

<img src="images/readme/navigator.gif" />

## Sommaire <!-- omit in toc -->
- [D.1. Cahier des charges](#d1-cahier-des-charges)
- [D.2. Indices](#d2-indices)

## D.1. Cahier des charges

1. **Dans le fichier `app.js`, au lieu de rendre le composant `VideoList` ou `VideoDetail` instanciez un nouveau composant nommé `Navigator`.**
2. **Ce composant `Navigator` affichera par défaut la `VideoList`**
3. **Au clic sur un des `VideoThumbnail`, la `VideoList` doit demander au `Navigator` d'afficher le `VideoDetail` et lui passer l'id de la vidéo à afficher.**
4. **Le `VideoDetail` devra récupérer dans `data.js` la vidéo correspondant à l'id demandé** (*attention, on considère que les ids ne sont pas forcément dans l'ordre : utilisez plutôt la méthode [`array.find()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find)*).
5. **Un bouton dans `VideoDetail` doit permettre de retourner à la liste** (sans recharger complètement la page, sinon c'est de la triche !).

	Pour un affichage "harmonieux" avec les CSS, je vous recommande ce markup :
	```html
	<button class="backButton">
		&lt; Retour
	</button>
	```


## D.2. Indices
Si vraiment vous voulez des indices, alors il va falloir scroller un peu !
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
...Vous êtes sûr d'avoir besoin d'aide ?
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>OK, alors scrollez encore !
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

1. Il faudra un **`state`** dans le `Navigator`
2. Dans ce `state` vous devrez avoir une valeur qui indique la page en cours (_par exemple sous la forme d'un identifiant de type string comme 'list' ou 'detail'_)
3. C'est **en fonction de ce state** que vous afficherez soit la `VideoList` soit `VideoDetail`
4. Il faudra aussi trouver un moyen de dire au `Navigator` que l'utilisateur a cliqué sur une vignette de la `VideoList` de manière à changer le state et donc afficher le `VideoDetail`. Pour ça, sachez que lorsque vous passez des **`props`** à un composant enfant, on a jusque là passé des valeurs simples (_chaînes, nombres, objets_) mais en fait vous avez aussi le droit de **passer des références vers des fonctions ou des méthodes du composant parent** !

Si après ça vous avez encore besoin d'aide, interrogez moi ! :)