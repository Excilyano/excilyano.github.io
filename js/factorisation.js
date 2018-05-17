if (document.getElementById("bandeau")) {
	var url = window.location.href;
	var regex = /\/html(\/\w+)+/g;
	var depth = url.match(regex).toString().split("/").length -3;
	var prefix = "";
	for (i=0; i<depth; i++) {
		prefix += "../";
	}
	bandeau(prefix);
}

function bandeau(prefix) {
	document.getElementById("bandeau").innerHTML =
		'<ul class="onglets"> \
			<div class="signature"> \
				<li class="titreOnglets">excilyano.me</li> \
				<li class="selecteur">v</li>\
				<li class="footer">When life gives you dev skills, make&nbsp;videogames</li> \
			</div> \
			<a href="'+ prefix +'index.html"><li class="lien">Accueil</li></a> \
			<a href="'+ prefix +'about.html"><li class="lien">A propos</li></a> \
			<a href="'+ prefix +'sds.html"><li class="lien">Sweet Dreams Studio</li></a> \
			<a href="'+ prefix +'blog.html"><li class="lien">Actualités</li></a> \
			<a href="'+ prefix +'games.html"><li class="lien surlien" onmouseover="montrerOnglet(\'jeux\')" onmouseout="cacherOnglet(\'jeux\')">Mes jeux</li></a> \
			<a href="'+ prefix +'contact.html"><li class="lien">Me contacter</li></a> \
			<ul class="sousOnglet" id="jeux" onmouseover="montrerOnglet(\'jeux\')" onmouseout="cacherOnglet(\'jeux\')"> \
				<a href="'+ prefix +'games/signal.html"><li class="lien">Signal</li></a> \
				<a href="'+ prefix +'games/cig.html"><li class="lien">Le Cube Inverseur de Gravité</li></a> \
				<a href="'+ prefix +'games/inhuman.html"><li class="lien">Inhuman rampage</li></a> \
			</ul> \
		</ul>';
}