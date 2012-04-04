// wishlist: hAudio or RDFa markup

var nodes = document.querySelectorAll(".newsItem");

for (var i = 0; i < nodes.length; i++) {
	var node = nodes[i];

	var parts = node.querySelectorAll(".jamTitle").item(0).textContent.split(/\s+by\s+/);

	var link = document.createElement("a");
	link.href = "http://toma.hk/?artist=" + encodeURIComponent(parts[1]) + "&title=" + encodeURIComponent(parts[0]);
	link.innerHTML = "▶ toma.hk";
	link.setAttribute("target", "_toma.hk");

	var span = document.createElement("span");
	span.setAttribute("class", "count");
	span.appendChild(link);

	var li = document.createElement("li");
	li.appendChild(span);

	node.querySelectorAll(".newsActions").item(0).appendChild(li);
}