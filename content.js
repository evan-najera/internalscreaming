	walk(document.body);
	walk(document.title);
	function walk(node) 
	{
		// I stole this function from here:
		// http://is.gd/mwZp7E
		
		var child, next;

		switch ( node.nodeType )  
		{
			case 1:  // Element
			case 9:  // Document
			case 11: // Document fragment
				child = node.firstChild;
				while ( child ) 
				{
					next = child.nextSibling;
					walk(child);
					child = next;
				}
				break;

			case 3: // Text node
				if(node.parentElement.tagName.toLowerCase() != "script") {
					handleText(node);
					stuff(node);
				}
				break;
		}
	}
	
	function handleText(textNode) {
		var v = textNode.nodeValue;
		var t = document.title;

	  // Deal with the easy case
	  v = v.replace(/\b(T|t)he (C|c)loud/g, function(match, p1, p2, offset, string) {
		// t - 7 = m
		// c - 1 = b
		m = String.fromCharCode(p1.charCodeAt(0) - 7);
		b = String.fromCharCode(p2.charCodeAt(0) - 1);
		return m + "y " + b + "utt";
	  });
	  t = t.replace(/\b(T|t)he (C|c)loud/g, function(match, p1, p2, offset, string) {
		// t - 7 = m
		// c - 1 = b
		m = String.fromCharCode(p1.charCodeAt(0) - 7);
		b = String.fromCharCode(p2.charCodeAt(0) - 1);
		return m + "y " + b + "utt";
	  });
	  // Deal with private clouds
	  v = v.replace(/\b(P|p)rivate (C|c)loud/g, function(match, p1, p2, offset, string) {
		// c - 1 = b
		b = String.fromCharCode(p2.charCodeAt(0) - 1);
		return b + "utt";
	  });
	  t = t.replace(/\b(P|p)rivate (C|c)loud/g, function(match, p1, p2, offset, string) {
		// c - 1 = b
		b = String.fromCharCode(p2.charCodeAt(0) - 1);
		return b + "utt";
	  });
	  // Get the corner cases
	  if(v.match(/cloud/i)) {
		// If we're not talking about weather
		if(v.match(/PaaS|SaaS|IaaS|computing|data|storage|cluster|distributed|server|hosting|provider|grid|enterprise|provision|apps|hardware|software|/i)) {
		  v = v.replace(/(C|c)loud/gi, function(match, p1, offset, string) {
			// c - 1 = b
			b = String.fromCharCode(p1.charCodeAt(0) - 1);
			return b + "utt";
		  });
		}
	  }
	  if(t.match(/cloud/i)) {
		// If we're not talking about weather
		if(t.match(/PaaS|SaaS|IaaS|computing|data|storage|cluster|distributed|server|hosting|provider|grid|enterprise|provision|apps|hardware|software|/i)) {
		  t = t.replace(/(C|c)loud/gi, function(match, p1, offset, string) {
			// c - 1 = b
			b = String.fromCharCode(p1.charCodeAt(0) - 1);
			return b + "utt";
		  });
		}
	  }
		textNode.nodeValue = v;
		document.title = t;
	}
	function stuff(textNode){
			document.title = document.title.replace(/(F|f)acebook/gi, "Facepalm");
			textNode.nodeValue = textNode.nodeValue.replace(/(F|f)acebook/gi, "Facepalm");
			document.title = document.title.replace(/(A|a)pple/gi, "Æbleskrog");
			textNode.nodeValue = textNode.nodeValue.replace(/(A|a)pple/gi, "Æbleskrog");
			document.title = document.title.replace(/iPhone/gi, "iFon");
			textNode.nodeValue = textNode.nodeValue.replace(/iPhone/gi, "iFon");
			document.title = document.title.replace(/iPad/gi, "iDskipadski");
			textNode.nodeValue = textNode.nodeValue.replace(/iPad/gi, "iDskipadski");
			document.title = document.title.replace(/(A|a)pp Store/gi, "App Stur");
			textNode.nodeValue = textNode.nodeValue.replace(/(A|a)pp Store/gi, "App Stur");
			document.title = document.title.replace(/(T|t)witter/gi, "Pipper");
			textNode.nodeValue = textNode.nodeValue.replace(/(T|t)witter/gi, "Pipper");
			document.title = document.title.replace(/(P|p)interest/gi, "Pinderest");
			textNode.nodeValue = textNode.nodeValue.replace(/(P|p)interest/gi, "Pinderest");
			document.title = document.title.replace(/(G|g)oogle/gi, "Goggl");
			textNode.nodeValue = textNode.nodeValue.replace(/(G|g)oogle/gi, "Goggl");
	}
	setTimeout(function(){
		walk(document.title);
		walk(document.body);
	},1000);
