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
		'<nav class="navbar navbar-inverse navbar-fixed-top"> \
		<div class="container-fluid"> \
			<div class="navbar-header"> \
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"> \
				<span class="icon-bar"></span> \
				<span class="icon-bar"></span> \
				<span class="icon-bar"></span> \
			</button> \
			<a class="navbar-brand" href="#">Excilyano.me</a> \
			</div> \
			<div class="collapse navbar-collapse" id="myNavbar"> \
			<ul class="nav navbar-nav"> \
				<li><a href="'+ prefix +'index.html">Accueil</a></li> \
				<li><a href="'+ prefix +'about.html">A propos</a></li> \
				<li><a href="'+ prefix +'sds.html">Sweet Dreams Studio</a></li> \
				<li><a href="'+ prefix +'blog.html">Actualités</a></li> \
				<li class="dropdown"> \
				<a class="dropdown-toggle" data-toggle="dropdown" href="'+ prefix +'games.html">Mes jeux&nbsp;<span class="caret"></span></a> \
					<ul class="dropdown-menu"> \
						<li><a href="'+ prefix +'games/signal.html">Signal</a></li> \
						<li><a href="'+ prefix +'games/cig.html">Le Cube Inverseur de Gravité</a></li> \
						<li><a href="'+ prefix +'games/inhuman.html">Inhuman rampage</a></li> \
					</ul> \
				</li> \
				<li><a href="'+ prefix +'contact.html">Me contacter</a></li> \
			</ul> \
			<ul class="nav navbar-nav navbar-right"> \
				<p class="navbar-text">When life gives you dev skills, make&nbsp;videogames</p> \
			</ul> \
			</div> \
		</div> \
		</nav>'
}