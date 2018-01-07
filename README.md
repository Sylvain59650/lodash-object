# lodash-object
Wrapper for lodash for work with objects

lodash-object reprend les fonctionnalités de lodash sur les tableaux, les chaines de caractères et les calculs mathématiques mais permet de travailler en objet.

Au lieu d'écrire 
<code>
var array = [1, 2, 3, 4];
_.remove(array,function(n) { return n % 2 == 0; });
</code>

vous écrirez 
<code>
var array = [1, 2, 3, 4];
array.remove(function(n) { return n % 2 == 0; });
</code>


usage

Tout d'abord, installer lodash :
npm install lodash --save

puis installer cette extension
npm install lodash-object --save

puis dans votre projet, ajouter les références à lodash et à lodash-object:
  <script src="./node_modules/lodash/lodash.min.js"></script>

 pour étendre les fonctionnalités des tableaux 
  <script src="./node_modules/lodash-object/dist/Array.js"></script>

pour étendre les fonctionnalités des chaines de caractères
<script src="./node_modules/lodash-object/dist/String.js"></script>

pour étendre les fonctionnalités mathématiques
<script src="./node_modules/lodash-object/dist/Math.js"></script>

<code>
<html>
<pre>
<head>
  <script src="./node_modules/lodash/lodash.min.js"></script>
  <script src="./node_modules/lodash-object/dist/Array.js"></script>
  <script src="./node_modules/lodash-object/dist/String.js"></script>
  <script src="./node_modules/lodash-object/dist/Math.js"></script>
</head>

<body>
  <script>
    document.write("It's worked".camelCase());
  </script>

</body>

</html>
</pre>
</html>
</code>
