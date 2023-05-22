# M413 - TD1 : Réponses aux Questions

6.1

-L'évènement qui déclenchera l'appel de la fonction sera le chargement de la page 'onLoad()'.
-J'ai utilisé getElementById() pour récupérer l'objet.
-J'ai utilisé la propriété innerHTML pour récupérer le texte.

-J'ai utilisé la méthode getElementsByTagName pour récupérer h2.

-J'ai utilisé la propriété lenght pour savoir le nombre de balise h2.

-J'ai utilisé la méthode getElementsByCLassName pour récupérer les objets de la classe
-J'ai déterminé si il était pair ou non grâce à modulo 2, une opération simple qui permet de savoir si un nombre est divisible par 2 (donc savoir si il est pair).

6.2

-innerHTML:
La propriété innerHTML renvoie le contenu HTML de l'élément, y compris les balises HTML, et permet également de définir le contenu HTML d'un élément.

-innerText:
La propriété innerText renvoie uniquement le texte visible de l'élément, sans inclure les balises HTML.

-textContent:
La propriété textContent renvoie également uniquement le texte visible de l'élément, mais contrairement à innerText, il inclut également le texte des éléments enfants de l'élément.

6.3

Etant donné que l'on a la liste des auteurs dans le tableau créé, on a juste à changer l'index lors de la création de la variable author.
Dans mon cas j'ai utilisé l'index 0 pour obtenir le premier auteur, hors nous aurions pu remplacer ce 0 par "authors.length -1".

7

-J'obtiens le nombre de jour en plusieurs étapes, j'initialise 2 dates, celle actuelle et celle donnée. La soustraction entre les deux me donne un temps en milisecondes que je convertis ensuite en jours.
-Je fais la mise à jour du texte en utilisant la propriété innerHTML. Je lui donne la valeur de la phrase remplie avec les bonnes valeurs trouvées auparavant.

7.1

-J'ai utilisé setInterval car cette méthodes appelle simplement ma fonction en boucle, je trouve ça plus pratique que setTimeout qui m'oblige à relancer en boucle la fonction qui, elle même, appelle ma fonction qui modifie le temps.

8.1


-J'ai utilisé l'event "input".
-J'ai modifié la couleur du texte en modifiant la classe associée au champ, j'ai créé 2 classes qui ont une couleur de fond différente en CSS. Pour ce faire, quand la couleur doit être changée, je vide la classList du champ de texte et je lui ajoute la classe de la couleur que je souhaite.
