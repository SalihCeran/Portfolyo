function index() {	
	setTimeout("location.href = 'index.html';",1)
}

function hakkimizda() {	
	setTimeout("location.href = 'hakkimizda.html';",1)
}

function about() {	
	setTimeout("location.href = 'about.html';",1)
}

function hizmetlerimiz() {	
	setTimeout("location.href = 'hizmetlerimiz.html';",1)
}

function services() {	
	setTimeout("location.href = 'services.html';",1)
}

function iletisim() {	
	setTimeout("location.href = 'iletisim.html';",1)
}

function contact() {	
	setTimeout("location.href = 'contact.html';",1)
}


function lang_show() {
	document.getElementById('lang-cont').className ='lang-sag';
	document.getElementById('lang-1').className ='gorun';
	
	
	setTimeout("flag1b_show()", 600);
	setTimeout("flag1a_kaybol()", 600);
	setTimeout("flag2_show()", 200);
	setTimeout("lang2_show()", 200);
	setTimeout("flag3_show()", 400);
	setTimeout("lang3_show()", 400);	
}

function lang_kaybol() {
	
	document.getElementById('lang-cont').className ='lang-sol';
	
	document.getElementById('lang-3').className ='kaybol';
	document.getElementById('flag-3').className ='kaybol';	
	setTimeout("flag2_kaybol()", 200);
	setTimeout("lang2_kaybol()", 200);
	setTimeout("lang1_kaybol()", 400);	
	setTimeout("flag1b_kaybol()", 600);	
	setTimeout("flag1a_show()", 600);	
	
}

		function txt1a_show() {	document.getElementById('txt1a').className ='lang-gorunur'; }	
		function txt1b_show() {	document.getElementById('txt1b').className ='lang-gorunur'; }
		function flag1a_show() {	document.getElementById('flag1a').className ='lang-gorunur'; }	
		function flag1b_show() {	document.getElementById('flag1b').className ='lang-gorunur'; }
		function flag2_show() {	document.getElementById('flag-2').className ='gorun'; }
		function flag3_show() {	document.getElementById('flag-3').className ='gorun'; }
		function lang2_show() {	document.getElementById('lang-2').className ='gorun'; }
		function lang3_show() {	document.getElementById('lang-3').className ='gorun'; }
		
		
		
		function txt1a_kaybol() {	document.getElementById('txt1a').className ='lang-gizli'; }	
		function txt1b_kaybol() {	document.getElementById('txt1b').className ='lang-gizli'; }
		function flag1a_kaybol() {	document.getElementById('flag1a').className ='lang-gizli'; }	
		function flag1b_kaybol() {	document.getElementById('flag1b').className ='lang-gizli'; }	
		function lang1_kaybol() {	document.getElementById('lang-1').className ='kaybol'; }
		function flag2_kaybol() {	document.getElementById('flag-2').className ='kaybol'; }
		function flag3_kaybol() {	document.getElementById('flag-3').className ='kaybol'; }
		function lang2_kaybol() {	document.getElementById('lang-2').className ='kaybol'; }
		function lang3_kaybol() {	document.getElementById('lang-3').className ='kaybol'; }

		
		
