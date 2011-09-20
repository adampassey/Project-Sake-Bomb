
curl -X PUT http://127.0.0.1:5984/games

curl -X PUT http://127.0.0.1:5984/games/_design/view \
-H "Content-Type: application/json" -d '{"views": {"all": {"map":"function(doc){emit(null,doc);}"},
"pc": {"map":"function(doc){if(doc.platform=='"'"'pc'"'"') emit(null,doc);}" },
"ps3": {"map":"function(doc){if(doc.platform=='"'"'ps3'"'"')
emit(null,doc);}" },
"psp": {"map":"function(doc){if(doc.platform=='"'"'psp'"'"')
emit(null,doc);}" },
"psn": {"map":"function(doc){if(doc.platform=='"'"'psn'"'"')
emit(null,doc);}" },
"wii": {"map":"function(doc){if(doc.platform=='"'"'wii'"'"')
emit(null,doc);}" },
"ds": {"map":"function(doc){if(doc.platform=='"'"'ds'"'"') emit(null,doc);}" },
"x360": {"map":"function(doc){if(doc.platform=='"'"'x360'"'"')
emit(null,doc);}" },
"xbla": {"map":"function(doc){if(doc.platform=='"'"'xbla'"'"')
emit(null,doc);}" },
"iphone": {"map":"function(doc){if(doc.platform=='"'"'iphone'"'"')
emit(null,doc);}" },
"ipad": {"map":"function(doc){if(doc.platform=='"'"'ipad'"'"')
emit(null,doc);}" },
"android": {"map":"function(doc){if(doc.platform=='"'"'android'"'"')
emit(null,doc);}" },
"mac": {"map":"function(doc){if(doc.platform=='"'"'mac'"'"')
emit(null,doc);}" },
"linux": {"map":"function(doc){if(doc.platform=='"'"'linux'"'"')
emit(null,doc);}" }}}'

curl -X PUT http://127.0.0.1:5984/games/_design/search \
-H "Content-Type: application/json" -d '{"views": {
   "all": {
       "map": "function(doc){if(doc.platform=='"'"'all'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var words = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in words) { emit(words[word], doc._id);}}}"

   },

   "pc": {

       "map": "function(doc){if(doc.platform=='"'"'pc'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var words = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in words) { emit(words[word], doc._id);}}}"

   },

   "ps3": {

       "map": "function(doc){if(doc.platform=='"'"'ps3'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var words = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in words) { emit(words[word], doc._id);}}}"

   },

   "psp": {

       "map": "function(doc){if(doc.platform=='"'"'psp'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var words = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in words) { emit(words[word], doc._id);}}}"

   },

   "psn": {

       "map": "function(doc){if(doc.platform=='"'"'psn'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var words = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in words) { emit(words[word], doc._id);}}}"

   },

   "wii": {

       "map": "function(doc){if(doc.platform=='"'"'wii'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var words = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in words) { emit(words[word], doc._id);}}}"

   },

   "ds": {

       "map": "function(doc){if(doc.platform=='"'"'ds'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var words = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in words) { emit(words[word], doc._id);}}}"

   },

   "x360": {

       "map": "function(doc){if(doc.platform=='"'"'x360'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var worx360 = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in worx360) { emit(worx360[word], doc._id);}}}"

   },

   "xbla": {

       "map": "function(doc){if(doc.platform=='"'"'xbla'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var worxbla = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in worxbla) { emit(worxbla[word], doc._id);}}}"

   },

   "iphone": {

       "map": "function(doc){if(doc.platform=='"'"'iphone'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var woriphone = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in woriphone) { emit(woriphone[word], doc._id);}}}"

   },

   "ipad": {

       "map": "function(doc){if(doc.platform=='"'"'ipad'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var woripad = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in woripad) { emit(woripad[word], doc._id);}}}"

   },

   "android": {

       "map": "function(doc){if(doc.platform=='"'"'android'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var worandroid = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in worandroid) { emit(worandroid[word], doc._id);}}}"

   },

   "mac": {

       "map": "function(doc){if(doc.platform=='"'"'mac'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var wormac = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in wormac) { emit(wormac[word], doc._id);}}}"

   },

   "linux": {

       "map": "function(doc){if(doc.platform=='"'"'linux'"'"'&&doc.name){ var name = doc.name.split('"'"' '"'"'); for(var n in name){ var txt = '"'"''"'"'; var i = 0; do{i++; txt+= name[n].substr(0,i)+'"'"' '"'"'; }while(name[n]!=name[n].substr(0,i)); } var worlinux = txt.replace(/[!.,;]+/g,'"'"''"'"').toLowerCase().split('"'"' '"'"'); for (var word in worlinux) { emit(worlinux[word], doc._id);}}}"

   }

}}'
