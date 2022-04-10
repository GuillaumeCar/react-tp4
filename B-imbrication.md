<img src="images/readme/header-small.jpg" >

# B. Imbrication & props <!-- omit in toc -->

_**Maintenant que votre environnement de développement est prêt, que votre serveur http tourne, nous allons modifier notre application pour mettre en oeuvre le principe d'imbrication et la technique des props.**_

## Sommaire <!-- omit in toc -->
- [B.1. VideoThumbnail](#b1-videothumbnail)
- [B.2. Function Components](#b2-function-components)

## B.1. VideoThumbnail

Actuellement notre VideoList contient tout le JSX associé aux vignettes ce qui alourdi inutilement le composant (_dans l'absolu, le boulot de la VideoList c'est de rendre une liste de vignette, peu importe ce que les vignettes contiennent, ce n'est pas vraiment son affaire_).

On va donc **externaliser le code des vignettes dans un sous-composant que l'on va appeler `VideoThumbnail`**.

La `VideoList` contiendra donc autant de `VideoThumbnail` qu'il y a de vidéos dans le tableau, ce qui nous donnera la structure suivante :

<img src="images/readme/screen-01.jpg" />

1. **Créez un composant `VideoThumbnail` dans un module `src/VideoThumbnail.js`.**

2. **Externalisez dans `VideoThumbnail` le JSX de chaque vignette de vidéo** (_tout le `<a href>...</a>`_)


## B.2. Function Components
_**Pour rappel React permet de déclarer ses composants non seulement sous forme de classe comme on l'a fait jusqu'ici mais aussi sous la forme de simples fonctions : on parle alors de "Function Components".**_

Imaginons ce Class Component :
```jsx
class Link extends React.Component {
	render() {
		return (
			<a href={this.props.url}>
				{this.props.label}
			</a>
		);
	}
}
```
Il ne contient qu'une méthode `render()` et rien d'autre. C'est typiquement le genre de composant qu'il est intéressant de transformer en **Function Component** :
```jsx
function Link( props ) {
	return (
		<a href={props.url}>
			{props.label}
		</a>
	);
}
```
Plus de `class`, plus de méthode `render`, le composant **DEVIENT** la méthode render ! On notera que comme on n'est plus dans une classe, on n'accède plus au props via `this.props` mais directement depuis les paramètres de la fonction !

Et avec un petit coup de [destructuring](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition) et de [arrow function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es) par dessus, on peut encore simplifier l'écriture et la rendre encore plus concise :

```jsx
const Link = ({ url, label }) => (
	<a href={url}>
		{label}
	</a>
);
```
_**Ces rappels étant faits, appliquons ce principe à quelques composants de notre application**_

1. **Transformez si ce n'est pas déjà le cas, le composant `VideoThumbnail` en _"function component"_.**
2. **Faites de même pour le composant `Menu`.**




## Étape suivante <!-- omit in toc -->
Une fois cette partie terminée, voyons comment utiliser conjointement React et l'API DOM : [C. React & l'API DOM](C-api-dom.md).