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
<code>
npm install lodash --save
</code>

puis installer cette extension
<code>
npm install lodash-object --save
</code>

puis dans votre projet, ajouter les références à lodash et à lodash-object:
<code>
  <script src="./node_modules/lodash/lodash.min.js"></script>
</code>

 pour étendre les fonctionnalités des tableaux 
 <code> 
  <script src="./node_modules/lodash-object/dist/Array.js"></script>
</code>

pour étendre les fonctionnalités des chaines de caractères
<code>
<script src="./node_modules/lodash-object/dist/String.js"></script>
</code>

pour étendre les fonctionnalités mathématiques
<code>
<script src="./node_modules/lodash-object/dist/Math.js"></script>
</code>


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
