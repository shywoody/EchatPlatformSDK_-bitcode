(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{226:function(f,e,_){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,_(227),_(228);var d,a=(d=_(6))&&d.__esModule?d:{default:d},c=_(229);var b=_(230),o=_(231);var i=function(f){console.log("初始化表情---");var e,_={};for(e in window.emojiLanJson)_[window.emojiLanJson[e]]=e;a.default.setDataByName("emoMap",b),a.default.setDataByName("emoCodeTolan",emojiLanJson),a.default.setDataByName("emoLanToCode",_),(0,c.initEmotionDomMobile)(o),(0,c.initEmotionMenuMobile)(),window.testaaa=1};e.default=i},227:function(f,e,_){},228:function(f,e,_){},229:function(f,e,_){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.initEmotionDomMobile=function(f){var e,_,d,a=['<li class="emo-page hover flex1"><ul class="clearfix box">'],b=['<li class="dot-list-li hover">0</li>'],o=0,i=f.length>63?63:f.length,t=/(^\[#)|(#\]$)/g;for(e=0;e<i;e++)0!=e&&(e-0)%7==0&&(a.push("</ul>"),(e-0)%21==0?(a.push('</li><li class="emo-page flex1"><ul class="clearfix box">'),b.push('<li class="dot-list-li">'+ ++o+"</li>")):a.push('<ul class="clearfix box">')),_=f[e],d=_.replace(t,""),a.push(c.replace(/\$\{n\}/g,d));a.push("</ul></li></ul>"),_$("emo_list").innerHTML=a.join(""),_$("emo_list").style.width=100*(o+1)+"%",_$("emo_dot_list").innerHTML=b.join("")},e.initEmotionDomPc=function(f){var e,_,d=[],a=f.length,b=/(^\[#)|(#\]$)/g;a>150&&(a=150);for(e=0;e<a;e++)_=f[e],n=_.replace(b,""),d.push(c.replace(/\$\{n\}/g,n));_$("emo_list").innerHTML=d.join("")},e.initEmotionMenuMobile=function(){var f=0;a.default.pageSlide("#emo_list",(function(e){0!=e&&(f+=e,$(".dot-list-li",_$("emo_dot_list")).removeClass("hover"),$($(".dot-list-li",_$("emo_dot_list")).removeClass("hover").results[f]).addClass("hover"))}))},e.initEmotionMenuPc=function(){},_(3),_(10),_(28),_(227);var d,a=(d=_(4))&&d.__esModule?d:{default:d};var c='<li class="emoji ej-k${n}" code="${n}"></li>'},230:function(f){f.exports=JSON.parse('{"2049":1,"2122":1,"2139":1,"2194":1,"2195":1,"2196":1,"2197":1,"2198":1,"2199":1,"2328":1,"2600":1,"2601":1,"2602":1,"2603":1,"2604":1,"2611":1,"2614":1,"2615":1,"2618":1,"2620":1,"2622":1,"2623":1,"2626":1,"2638":1,"2639":1,"2648":1,"2649":1,"2650":1,"2651":1,"2652":1,"2653":1,"2660":1,"2663":1,"2665":1,"2666":1,"2668":1,"2692":1,"2693":1,"2694":1,"2695":1,"2696":1,"2697":1,"2699":1,"2702":1,"2705":1,"2708":1,"2709":1,"2712":1,"2714":1,"2716":1,"2721":1,"2728":1,"2733":1,"2734":1,"2744":1,"2747":1,"2753":1,"2754":1,"2755":1,"2757":1,"2763":1,"2764":1,"2795":1,"2796":1,"2797":1,"2934":1,"2935":1,"3030":1,"3297":1,"3299":1,"1f6e1":1,"1f6e0":1,"1f6e3":1,"1f6e2":1,"1f6cc":1,"1f6cb":1,"1f6ce":1,"1f6cd":1,"1f6cf":1,"1f6e4":1,"1f6e5":1,"1f6e9":1,"1f6d0":1,"1f6bd":1,"1f6bc":1,"1f6bb":1,"1f6ba":1,"1f6bf":1,"1f6be":1,"1f6f3":1,"23cf":1,"1f6f0":1,"1f6eb":1,"1f6ec":1,"23e9":1,"23f0":1,"23f2":1,"23f1":1,"23f3":1,"1f6a1":1,"1f6a0":1,"1f6a3":1,"1f6a2":1,"1f6a5":1,"23ea":1,"1f6a4":1,"23eb":1,"1f6a7":1,"23ec":1,"1f6a6":1,"1f6a9":1,"1f6a8":1,"23f8":1,"23f9":1,"23ef":1,"23ee":1,"23ed":1,"23fa":1,"1f6ad":1,"1f6ae":1,"1f6af":1,"1f1fa_1f1e6":1,"1f6aa":1,"1f6ab":1,"1f6ac":1,"1f6c0":1,"1f6c1":1,"1f6c3":1,"1f6c2":1,"1f6c5":1,"1f6c4":1,"1f6b0":1,"1f6b8":1,"1f6b7":1,"1f6b6":1,"1f6b5":1,"1f6b4":1,"1f6b3":1,"1f6b2":1,"1f6b1":1,"1f6b9":1,"1f004":1,"e059":1,"e058":1,"e057":1,"e056":1,"e055":1,"e054":1,"e053":1,"e052":1,"1f37d":1,"e051":1,"1f37c":1,"e050":1,"1f37b":1,"1f37a":1,"1f37f":1,"1f37e":1,"e04e":1,"e04f":1,"1f391":1,"e04c":1,"e04d":1,"1f392":1,"e04a":1,"1f390":1,"e04b":1,"1f396":1,"1f393":1,"1f399":1,"1f397":1,"1f38a":1,"1f38c":1,"1f38b":1,"1f38e":1,"1f38d":1,"1f38f":1,"e05a":1,"e033":1,"1f39b":1,"1f39a":1,"e032":1,"e031":1,"e030":1,"e037":1,"e036":1,"e035":1,"e034":1,"e01f":1,"1f39f":1,"1f39e":1,"e02a":1,"e02b":1,"e02e":1,"e02f":1,"e02c":1,"e02d":1,"e038":1,"e039":1,"e042":1,"e041":1,"e044":1,"e043":1,"e046":1,"e045":1,"e048":1,"e047":1,"e040":1,"e03a":1,"e03b":1,"e03c":1,"e03d":1,"e03e":1,"e03f":1,"e049":1,"e51d":1,"1f488":1,"e51c":1,"1f487":1,"e51b":1,"e149":1,"1f486":1,"e148":1,"1f485":1,"e51a":1,"1f484":1,"1f483":1,"1f1fd_1f1f0":1,"27b0":1,"1f482":1,"e51f":1,"e51e":1,"1f481":1,"1f480":1,"e13b":1,"e13a":1,"e13f":1,"e532":1,"e13e":1,"e531":1,"e13d":1,"e530":1,"e13c":1,"e535":1,"1f46e":1,"e536":1,"1f46f":1,"e12f":1,"1f46c":1,"e533":1,"1f46d":1,"e534":1,"1f46a":1,"1f46b":1,"e537":1,"e142":1,"e143":1,"e140":1,"e141":1,"e146":1,"e52a":1,"e147":1,"1f478":1,"e144":1,"1f479":1,"e145":1,"1f475":1,"e138":1,"e52c":1,"e137":1,"1f474":1,"e52b":1,"1f477":1,"e52e":1,"d83c_df88":1,"1f476":1,"e52d":1,"e139":1,"1f471":1,"1f470":1,"e52f":1,"1f473":1,"1f472":1,"d83c_df81":1,"d83c_df82":1,"e12a":1,"e12c":1,"1f45f":1,"e12b":1,"e12e":1,"e12d":1,"e11e":1,"1f45b":1,"1f45c":1,"e11f":1,"0030_20e3":1,"1f45d":1,"1f45e":1,"2b1b":1,"2b1c":1,"1f45a":1,"e130":1,"e131":1,"e132":1,"1f467":1,"e133":1,"1f468":1,"e134":1,"e135":1,"1f469":1,"e136":1,"e129":1,"e128":1,"e127":1,"e126":1,"e11d":1,"e510":1,"e11c":1,"e11b":1,"e11a":1,"e517":1,"1f48c":1,"1f48d":1,"e518":1,"e515":1,"1f48a":1,"e516":1,"1f48b":1,"e10f":1,"e513":1,"e514":1,"1f48e":1,"e10d":1,"e511":1,"e10e":1,"1f48f":1,"e512":1,"e124":1,"e125":1,"27bf":1,"e122":1,"e123":1,"e120":1,"e121":1,"e519":1,"1f493":1,"e50e":1,"e50d":1,"1f492":1,"e119":1,"1f495":1,"1f494":1,"e50f":1,"e116":1,"1f497":1,"e115":1,"1f496":1,"e50c":1,"1f499":1,"e118":1,"1f498":1,"e117":1,"e50b":1,"e10a":1,"e521":1,"e10c":1,"e520":1,"e10b":1,"1f491":1,"1f490":1,"e526":1,"1f47a":1,"e527":1,"1f47b":1,"e528":1,"1f47c":1,"e529":1,"e522":1,"1f47d":1,"e523":1,"1f47e":1,"e524":1,"1f47f":1,"e525":1,"1f489":1,"e111":1,"e112":1,"e113":1,"e114":1,"e110":1,"1f42e":1,"1f42f":1,"1f42c":1,"1f42d":1,"1f443":1,"2b06":1,"e106":1,"1f444":1,"2b07":1,"e107":1,"1f441":1,"e104":1,"1f442":1,"2b05":1,"e105":1,"1f440":1,"e108":1,"e109":1,"1f439":1,"1f438":1,"e103":1,"1f437":1,"e102":1,"1f436":1,"e101":1,"1f435":1,"1f434":1,"1f42b":1,"1f42a":1,"1f41f":1,"d83d_dc7b":1,"1f41b":1,"1f41c":1,"1f41d":1,"1f41e":1,"1f430":1,"1f431":1,"1f432":1,"1f433":1,"d83d_dc7f":1,"1f428":1,"e509":1,"1f427":1,"e508":1,"1f429":1,"1f424":1,"1f1f5_1f1fe":1,"1f423":1,"1f426":1,"1f1f5_1f1fc":1,"1f425":1,"e501":1,"1f41a":1,"e503":1,"e502":1,"e505":1,"e504":1,"e507":1,"e506":1,"1f44e":1,"1f44f":1,"0038_20e3":1,"1f461":1,"1f462":1,"1f460":1,"1f465":1,"1f466":1,"1f463":1,"1f464":1,"1f459":1,"1f458":1,"1f457":1,"1f456":1,"1f44d":1,"1f44c":1,"1f44b":1,"1f44a":1,"1f43d":1,"1f43e":1,"1f43f":1,"1f450":1,"1f451":1,"1f452":1,"1f453":1,"1f454":1,"1f455":1,"1f446":1,"1f445":1,"1f448":1,"1f447":1,"1f449":1,"1f43a":1,"1f43c":1,"1f43b":1,"0033_20e3":1,"1f1fa_1f1ec":1,"1f400":1,"1f1f5_1f1e6":1,"1f1fa_1f1f8":1,"1f1fa_1f1f2":1,"1f1fa_1f1ff":1,"1f1fa_1f1fe":1,"1f412":1,"1f1f5_1f1ec":1,"1f413":1,"1f1f5_1f1ed":1,"1f414":1,"1f1f5_1f1ea":1,"1f415":1,"1f1f5_1f1eb":1,"1f416":1,"1f417":1,"1f418":1,"1f419":1,"1f420":1,"1f422":1,"1f421":1,"1f40b":1,"1f40a":1,"1f40d":1,"1f40c":1,"1f40f":1,"1f40e":1,"1f409":1,"1f403":1,"1f404":1,"1f401":1,"1f402":1,"1f407":1,"1f408":1,"1f405":1,"1f406":1,"1f411":1,"1f1f5_1f1f7":1,"1f410":1,"1f1f5_1f1f9":1,"1f1f5_1f1f8":1,"1f1f5_1f1f3":1,"1f1f5_1f1f2":1,"1f1f5_1f1f1":1,"1f1f5_1f1f0":1,"1f1fb_1f1fa":1,"1f1fb_1f1f3":1,"1f1fb_1f1ee":1,"1f1fb_1f1ea":1,"1f1fb_1f1ec":1,"1f1fb_1f1e6":1,"1f1fb_1f1e8":1,"2b50":1,"2b55":1,"27a1":1,"1f5e1":1,"1f1f1_1f1f0":1,"1f5e3":1,"1f1f2_1f1f0":1,"1f1f1_1f1f7":1,"1f1f2_1f1f6":1,"1f1f2_1f1f5":1,"1f1f1_1f1f9":1,"1f1f2_1f1f8":1,"1f1f1_1f1f8":1,"1f1f2_1f1f7":1,"1f1f2_1f1f2":1,"1f1f2_1f1f1":1,"1f1f2_1f1f4":1,"1f1f2_1f1f3":1,"1f5dc":1,"1f1f2_1f1f9":1,"1f1f1_1f1ee":1,"1f1f2_1f1ed":1,"1f1f2_1f1eb":1,"1f1f2_1f1ec":1,"1f5bc":1,"1f1f2_1f1ea":1,"1f5d3":1,"1f5d2":1,"1f5d1":1,"1f1f1_1f1fa":1,"1f1f2_1f1fa":1,"1f1f2_1f1fb":1,"1f1f2_1f1fc":1,"1f1f2_1f1fd":1,"1f1f2_1f1fe":1,"1f1f2_1f1ff":1,"1f5c2":1,"1f5c3":1,"1f5c4":1,"1f5b1":1,"1f5b2":1,"1f1f1_1f1e8":1,"1f1f1_1f1e7":1,"1f1f1_1f1e6":1,"1f5a5":1,"1f5a8":1,"00a9":1,"1f1ee_1f1f3":1,"1f1ee_1f1f4":1,"1f1ee_1f1f1":1,"1f1ee_1f1f2":1,"1f1ee_1f1f9":1,"1f1ee_1f1f7":1,"1f1ee_1f1f8":1,"1f1ee_1f1f6":1,"1f1ee_1f1ea":1,"1f1f3_1f1e6":1,"1f1f3_1f1e8":1,"1f1ee_1f1e8":1,"1f1ee_1f1e9":1,"1f1f3_1f1ee":1,"1f1f3_1f1ec":1,"1f1f3_1f1eb":1,"1f1f3_1f1ea":1,"0037_20e3":1,"26fd":1,"1f1f3_1f1f4":1,"1f1f3_1f1f5":1,"1f1f3_1f1f7":1,"1f1f3_1f1f1":1,"1f1e6_1f1e8":1,"1f1e6_1f1e9":1,"1f1f3_1f1fa":1,"1f1f3_1f1ff":1,"1f1e6_1f1f2":1,"1f1e6_1f1f1":1,"1f1e6_1f1f6":1,"1f1e6_1f1f7":1,"1f1e6_1f1f4":1,"1f5ff":1,"1f1e6_1f1f8":1,"1f1e6_1f1f9":1,"1f5fa":1,"1f1e6_1f1eb":1,"1f1e6_1f1ea":1,"d83d_dcaa":1,"1f5fe":1,"1f5fd":1,"1f5fc":1,"1f5fb":1,"1f1e6_1f1ec":1,"1f1e6_1f1ee":1,"1f5ef":1,"d83d_dcb0":1,"1f1e6_1f1fc":1,"1f1f2_1f1e8":1,"1f1f2_1f1e9":1,"1f1e6_1f1fa":1,"1f1e6_1f1ff":1,"1f1f2_1f1e6":1,"1f1e6_1f1fd":1,"1f5f3":1,"1f5dd":1,"1f5de":1,"1f1ff_1f1f2":1,"1f381":1,"1f380":1,"1f1f9_1f1e9":1,"1f1e9_1f1f4":1,"1f1e9_1f1f2":1,"1f385":1,"26b0":1,"1f384":1,"26b1":1,"1f1e9_1f1f0":1,"1f383":1,"e009":1,"1f382":1,"e008":1,"1f389":1,"e007":1,"1f388":1,"e006":1,"1f387":1,"1f386":1,"21a9":1,"e005":1,"e003":1,"e004":1,"e001":1,"1f379":1,"1f1f9_1f1f0":1,"1f1f9_1f1f1":1,"e002":1,"1f36b":1,"1f36c":1,"1f1f9_1f1f7":1,"1f36a":1,"1f1f9_1f1f9":1,"1f36f":1,"1f1f9_1f1f2":1,"1f1f9_1f1f3":1,"1f36d":1,"1f1f9_1f1f4":1,"1f36e":1,"26c8":1,"1f370":1,"1f372":1,"1f371":1,"1f374":1,"1f1f9_1f1ef":1,"1f373":1,"1f376":1,"1f1f9_1f1ed":1,"26c4":1,"1f375":1,"1f1f9_1f1ec":1,"26c5":1,"1f378":1,"1f1f9_1f1eb":1,"1f377":1,"1f368":1,"1f369":1,"1f1ff_1f1fc":1,"e409":1,"e405":1,"231a":1,"e406":1,"1f35a":1,"e407":1,"231b":1,"1f35b":1,"e408":1,"1f35c":1,"26ab":1,"e401":1,"e402":1,"1f35d":1,"26aa":1,"e403":1,"1f35e":1,"e404":1,"1f35f":1,"e01a":1,"e01e":1,"e411":1,"e01d":1,"e410":1,"e01c":1,"e01b":1,"1f34f":1,"1f367":1,"1f366":1,"e029":1,"e028":1,"1f365":1,"1f364":1,"e027":1,"1f363":1,"1f362":1,"1f361":1,"1f360":1,"e022":1,"1f359":1,"e025":1,"e026":1,"1f357":1,"e023":1,"1f358":1,"e024":1,"1f34d":1,"e414":1,"e415":1,"1f34e":1,"e00e":1,"1f34b":1,"e412":1,"e00f":1,"1f34c":1,"e413":1,"e418":1,"1f34a":1,"e419":1,"e416":1,"e417":1,"1f33f":1,"e420":1,"e00b":1,"1f33e":1,"e00a":1,"e422":1,"e00d":1,"e421":1,"e00c":1,"1f354":1,"26a1":1,"e40b":1,"e017":1,"e016":1,"1f353":1,"e40a":1,"1f356":1,"e40d":1,"e019":1,"1f355":1,"1f1ff_1f1e6":1,"e40c":1,"e018":1,"1f350":1,"e40f":1,"e40e":1,"1f352":1,"26a0":1,"1f351":1,"e010":1,"e011":1,"1f346":1,"e012":1,"1f347":1,"e013":1,"1f348":1,"e014":1,"e41a":1,"e015":1,"1f349":1,"e423":1,"1f33a":1,"e424":1,"1f33b":1,"e425":1,"1f33c":1,"e426":1,"1f33d":1,"e427":1,"1f1f9_1f1e8":1,"e428":1,"e429":1,"1f1f9_1f1e6":1,"26f5":1,"1f340":1,"26f4":1,"1f341":1,"26f3":1,"26f2":1,"26f9":1,"1f344":1,"26f8":1,"1f345":1,"26f7":1,"1f342":1,"1f343":1,"1f32f":1,"1f32d":1,"1f32e":1,"1f32c":1,"1f32b":1,"1f32a":1,"1f338":1,"1f337":1,"1f336":1,"1f335":1,"26f0":1,"26f1":1,"1f339":1,"1f330":1,"1f331":1,"1f332":1,"1f333":1,"1f334":1,"1f31c":1,"1f31d":1,"1f31e":1,"1f31f":1,"26fa":1,"26ea":1,"1f31b":1,"1f31a":1,"1f325":1,"1f324":1,"1f327":1,"1f326":1,"1f329":1,"1f328":1,"1f320":1,"1f321":1,"26d4":1,"26d3":1,"26d1":1,"1f30f":1,"1f30d":1,"1f30e":1,"1f30b":1,"1f30c":1,"26bd":1,"1f30a":1,"26be":1,"1f319":1,"1f318":1,"1f317":1,"1f316":1,"1f315":1,"1f314":1,"1f313":1,"1f310":1,"1f311":1,"1f312":1,"0035_20e3":1,"21aa":1,"26e9":1,"26ce":1,"26cf":1,"1f307":1,"1f306":1,"1f309":1,"1f308":1,"1f303":1,"1f302":1,"1f305":1,"1f304":1,"1f301":1,"1f300":1,"1f1f7_1f1fa":1,"1f1f7_1f1fc":1,"00ae":1,"e439":1,"e438":1,"e435":1,"e434":1,"e437":1,"e436":1,"d83ddc9d":1,"e42b":1,"e42a":1,"1f1ef_1f1ea":1,"e41f":1,"1f1ef_1f1f5":1,"1f1ef_1f1f4":1,"e41b":1,"e41c":1,"e41d":1,"e41e":1,"e430":1,"0036_20e3":1,"e431":1,"e432":1,"e433":1,"1f1ef_1f1f2":1,"e449":1,"e448":1,"e447":1,"e446":1,"e445":1,"e43c":1,"e43b":1,"e43a":1,"e42e":1,"e42f":1,"e42c":1,"e42d":1,"e443":1,"e444":1,"e441":1,"e442":1,"e440":1,"e44b":1,"1f1e9_1f1ff":1,"e44a":1,"e44c":1,"e43d":1,"e43e":1,"e43f":1,"1f1f7_1f1ea":1,"1f1f7_1f1f4":1,"1f1f7_1f1f8":1,"1f1e9_1f1ec":1,"1f1e9_1f1ea":1,"1f1e9_1f1ef":1,"1f1f1_1f1fe":1,"1f1f1_1f1fb":1,"1f4bd":1,"1f4bc":1,"1f4bf":1,"1f4be":1,"1f4d0":1,"1f4d2":1,"1f4d1":1,"1f4d4":1,"1f4d3":1,"1f4d5":1,"1f4d6":1,"1f4d7":1,"1f4d8":1,"1f4d9":1,"1f4ca":1,"1f4cb":1,"1f4cc":1,"1f4cf":1,"1f4ce":1,"1f4cd":1,"1f4e1":1,"1f4e0":1,"1f4e5":1,"1f4e4":1,"1f4e3":1,"1f4e2":1,"1f4e8":1,"1f4e9":1,"1f4e6":1,"1f4e7":1,"1f1ec_1f1fc":1,"0032_20e3":1,"1f1ec_1f1fe":1,"1f4dc":1,"1f4dd":1,"1f4da":1,"1f4db":1,"1f1ec_1f1fa":1,"1f1ec_1f1f9":1,"1f1ec_1f1f7":1,"1f1ec_1f1f8":1,"1f4df":1,"1f4de":1,"1f4f4":1,"1f1ec_1f1f1":1,"1f4f3":1,"1f1ec_1f1f2":1,"1f4f6":1,"1f4f5":1,"1f0cf":1,"1f4f0":1,"1f1ec_1f1f5":1,"1f1ec_1f1f6":1,"1f4f2":1,"1f1ec_1f1f3":1,"1f4f1":1,"1f4f7":1,"1f4f8":1,"1f4f9":1,"1f4eb":1,"1f1ec_1f1ea":1,"1f4ec":1,"1f4ed":1,"1f4ee":1,"1f1ec_1f1ee":1,"1f1ec_1f1ed":1,"1f1ec_1f1ec":1,"1f4ea":1,"1f1ec_1f1eb":1,"1f1ec_1f1e6":1,"1f1ec_1f1e7":1,"1f1ec_1f1e9":1,"1f4ef":1,"002a_20e3":1,"1f4ff":1,"1f4fc":1,"1f4fd":1,"1f4fa":1,"1f4fb":1,"1f1f0_1f1fc":1,"1f1f0_1f1ff":1,"1f1f0_1f1fe":1,"25fb":1,"1f1f0_1f1f2":1,"0039_20e3":1,"25fc":1,"25fd":1,"25fe":1,"1f1f0_1f1ea":1,"1f1f0_1f1f3":1,"1f1f0_1f1f5":1,"1f1f0_1f1f7":1,"1f1f0_1f1ee":1,"1f1f0_1f1ed":1,"1f1f0_1f1ec":1,"274c":1,"274e":1,"1f202":1,"1f201":1,"1f1eb_1f1f7":1,"1f23a":1,"1f1eb_1f1f4":1,"1f1eb_1f1f2":1,"1f1eb_1f1f0":1,"303d":1,"1f1eb_1f1ee":1,"1f1eb_1f1ef":1,"1f250":1,"1f251":1,"1f4a3":1,"1f4a2":1,"1f4a5":1,"1f4a4":1,"1f4a7":1,"1f4a6":1,"1f4a9":1,"1f4a8":1,"270b":1,"1f4a0":1,"270a":1,"1f4a1":1,"270d":1,"270c":1,"270f":1,"1f4aa":1,"1f21a":1,"1f4b9":1,"1f4b8":1,"1f4b7":1,"1f4b6":1,"1f4b5":1,"1f4b4":1,"1f4b3":1,"1f4b1":1,"1f234":1,"1f4b2":1,"1f235":1,"1f232":1,"1f4b0":1,"1f233":1,"271d":1,"1f4bb":1,"1f4ba":1,"1f4c9":1,"1f1f6_1f1e6":1,"1f4c8":1,"1f4c5":1,"1f237":1,"1f4c4":1,"1f236":1,"1f4c7":1,"1f239":1,"1f4c6":1,"1f238":1,"1f4c0":1,"1f4c1":1,"1f4c2":1,"1f4c3":1,"1f4af":1,"1f4ab":1,"1f4ac":1,"1f22f":1,"1f4ad":1,"1f4ae":1,"e341":1,"e340":1,"e345":1,"e344":1,"e343":1,"e342":1,"e32e":1,"e32d":1,"e33c":1,"e33d":1,"e33a":1,"e33b":1,"e348":1,"1f685":1,"e349":1,"1f686":1,"1f683":1,"e346":1,"1f684":1,"e347":1,"1f681":1,"1f682":1,"1f680":1,"1f170":1,"e330":1,"1f171":1,"e332":1,"e331":1,"e334":1,"e333":1,"e31d":1,"e31c":1,"e31f":1,"e31e":1,"269b":1,"269c":1,"e32a":1,"e32b":1,"e32c":1,"e335":1,"e336":1,"e337":1,"e338":1,"e339":1,"e323":1,"e322":1,"e321":1,"1f699":1,"e320":1,"1f698":1,"1f1ed_1f1f0":1,"1f1ed_1f1f3":1,"1f1ed_1f1f2":1,"1f68b":1,"1f1ed_1f1f7":1,"1f68a":1,"1f1f9_1f1ff":1,"1f1ed_1f1f9":1,"e30f":1,"1f68f":1,"1f1f9_1f1fc":1,"e30e":1,"1f68e":1,"1f1f9_1f1fb":1,"e30d":1,"1f68d":1,"e30c":1,"e30b":1,"1f68c":1,"e31a":1,"e31b":1,"e328":1,"e329":1,"e326":1,"e327":1,"e324":1,"e325":1,"1f688":1,"e310":1,"1f687":1,"e312":1,"e311":1,"1f689":1,"e30a":1,"1f690":1,"e317":1,"1f691":1,"e318":1,"e319":1,"1f692":1,"1f693":1,"1f694":1,"e313":1,"1f695":1,"e314":1,"1f696":1,"e315":1,"1f697":1,"e316":1,"1f1ea_1f1f9":1,"1f1ea_1f1f8":1,"1f1ea_1f1f7":1,"1f1ea_1f1ec":1,"1f1ea_1f1ea":1,"1f1ea_1f1ed":1,"1f69d":1,"1f69e":1,"1f1ea_1f1e8":1,"1f69f":1,"1f69a":1,"1f69b":1,"1f69c":1,"1f1ea_1f1e6":1,"1f19a":1,"1f18e":1,"d83d_de4f":1,"1f195":1,"1f196":1,"267f":1,"1f197":1,"1f198":1,"e33e":1,"1f199":1,"e33f":1,"1f191":1,"1f192":1,"1f193":1,"1f194":1,"1f17f":1,"1f17e":1,"e34c":1,"e34b":1,"e34d":1,"1f1ea_1f1fa":1,"e34a":1,"267b":1,"25ab":1,"25aa":1,"1f1e8_1f1ee":1,"1f1e8_1f1ed":1,"1f1e8_1f1ec":1,"1f1e8_1f1eb":1,"25c0":1,"1f1e8_1f1ff":1,"1f1e8_1f1fc":1,"1f1e8_1f1fb":1,"1f1e8_1f1fe":1,"1f1e8_1f1fd":1,"25b6":1,"1f1e8_1f1fa":1,"1f60a":1,"1f60b":1,"1f60c":1,"1f60d":1,"1f1e8_1f1e8":1,"1f60e":1,"1f60f":1,"1f1e8_1f1e6":1,"1f620":1,"d83d_de0c":1,"1f611":1,"1f610":1,"1f613":1,"1f612":1,"1f615":1,"1f614":1,"1f617":1,"1f616":1,"1f619":1,"1f618":1,"1f1e8_1f1f2":1,"1f1e8_1f1f3":1,"1f1e8_1f1f4":1,"1f1e8_1f1f5":1,"1f1e8_1f1f7":1,"0023_20e3":1,"d83d_de1d":1,"1f1e8_1f1f0":1,"1f1e8_1f1f1":1,"1f602":1,"1f601":1,"1f600":1,"1f606":1,"1f605":1,"1f604":1,"1f603":1,"d83d_de32":1,"d83d_de33":1,"1f609":1,"1f1e8_1f1e9":1,"1f608":1,"1f607":1,"d83d_de31":1,"d83d_de37":1,"1f640":1,"e303":1,"e302":1,"1f642":1,"e305":1,"1f641":1,"e304":1,"e307":1,"e306":1,"e309":1,"e308":1,"0034_20e3":1,"1f62f":1,"1f62e":1,"1f62b":1,"1f62a":1,"1f62d":1,"1f62c":1,"d83d_de02":1,"d83d_de04":1,"1f636":1,"1f637":1,"1f638":1,"1f639":1,"1f632":1,"1f633":1,"1f634":1,"1f635":1,"e301":1,"1f631":1,"1f630":1,"1f61f":1,"1f61e":1,"1f61d":1,"1f61c":1,"1f61b":1,"1f61a":1,"1f1ed_1f1fa":1,"d83d_de14":1,"d83d_de12":1,"1f629":1,"1f627":1,"1f628":1,"1f625":1,"1f626":1,"1f623":1,"1f624":1,"1f621":1,"1f622":1,"1f9c0":1,"1f64d":1,"1f64c":1,"1f64f":1,"1f64e":1,"1f64a":1,"1f64b":1,"1f63e":1,"1f63d":1,"1f63c":1,"1f63b":1,"1f63f":1,"1f63a":1,"1f645":1,"1f646":1,"1f643":1,"1f644":1,"1f649":1,"1f647":1,"1f648":1,"1f3d3":1,"1f3d2":1,"1f3d5":1,"1f3d4":1,"1f3d1":1,"1f3d0":1,"1f3be":1,"1f3bd":1,"1f3bf":1,"1f3ca":1,"1f3cb":1,"1f3cc":1,"1f3cd":1,"1f3d6":1,"1f3d7":1,"1f3d8":1,"1f3d9":1,"1f3e6":1,"1f3e5":1,"1f3e4":1,"1f3e3":1,"1f3e2":1,"1f3e1":1,"1f3e0":1,"1f3cf":1,"1f3ce":1,"1f3dd":1,"1f3de":1,"1f3db":1,"1f3dc":1,"1f3da":1,"1f3e9":1,"1f3e7":1,"1f3e8":1,"1f3b1":1,"1f3b0":1,"1f3b3":1,"1f3b2":1,"1f3aa":1,"1f3ab":1,"1f3b4":1,"1f3b5":1,"1f3b6":1,"1f3b7":1,"1f3b8":1,"1f3b9":1,"1f3c0":1,"1f3c4":1,"1f3c3":1,"1f3c2":1,"1f3c1":1,"1f3af":1,"1f3ae":1,"1f3ad":1,"1f3ac":1,"1f3bb":1,"1f3bc":1,"1f3ba":1,"1f3c7":1,"1f3c8":1,"1f3c5":1,"1f3c6":1,"1f3c9":1,"1f3df":1,"1f3f0":1,"1f3f3":1,"1f3f4":1,"1f3f5":1,"1f3f7":1,"1f3f9":1,"1f3f8":1,"1f1f4_1f1f2":1,"1f3eb":1,"1f3ea":1,"1f3ed":1,"1f3ec":1,"1f3ef":1,"1f3ee":1,"1f3fc":1,"1f3fb":1,"1f3fa":1,"1f3ff":1,"1f3fe":1,"1f3fd":1,"e159":1,"e14b":1,"e14c":1,"e14a":1,"e14f":1,"e14d":1,"e14e":1,"e150":1,"263a":1,"e154":1,"e153":1,"e152":1,"e151":1,"e158":1,"e157":1,"e156":1,"e155":1,"e15a":1,"264d":1,"264e":1,"264f":1,"264a":1,"264b":1,"264c":1,"1f49e":1,"1f49d":1,"1f49c":1,"1f49b":1,"261d":1,"1f49f":1,"1f49a":1,"1f1fe_1f1f9":1,"1f1f8_1f1e8":1,"1f1f8_1f1e9":1,"1f1f8_1f1e6":1,"1f1f8_1f1e7":1,"262a":1,"262e":1,"262f":1,"1f1fe_1f1ea":1,"1f1f8_1f1f8":1,"1f1f8_1f1f7":1,"1f1f8_1f1f9":1,"1f1f8_1f1f4":1,"1f1f8_1f1f3":1,"1f1f8_1f1f0":1,"1f1f8_1f1f2":1,"1f1f8_1f1f1":1,"203c":1,"1f3a8":1,"1f3a7":1,"1f3a9":1,"1f3a4":1,"1f3a3":1,"1f3a6":1,"1f3a5":1,"1f1f8_1f1ef":1,"260e":1,"1f1f8_1f1ed":1,"1f1f8_1f1ee":1,"1f1f8_1f1ec":1,"1f3a0":1,"1f1f8_1f1ea":1,"1f3a1":1,"1f3a2":1,"1f910":1,"1f914":1,"1f913":1,"1f912":1,"1f911":1,"1f918":1,"1f917":1,"1f916":1,"1f915":1,"1f1f8_1f1fd":1,"1f1f8_1f1fe":1,"1f1f8_1f1ff":1,"1f1f8_1f1fb":1,"e202":1,"e201":1,"1f579":1,"1f578":1,"1f577":1,"e209":1,"e207":1,"e208":1,"e205":1,"e206":1,"1f587":1,"e203":1,"e204":1,"1f56f":1,"1f55b":1,"1f981":1,"1f55a":1,"1f980":1,"1f55d":1,"1f983":1,"1f55c":1,"1f982":1,"1f567":1,"1f566":1,"1f570":1,"1f573":1,"1f574":1,"1f575":1,"1f576":1,"1f55e":1,"1f55f":1,"1f54c":1,"e20f":1,"1f54b":1,"e20e":1,"1f54a":1,"e20d":1,"e20c":1,"e220":1,"1f559":1,"1f558":1,"e224":1,"1f557":1,"e223":1,"1f556":1,"e222":1,"1f555":1,"e221":1,"e227":1,"1f564":1,"e228":1,"1f565":1,"e225":1,"1f562":1,"e226":1,"1f563":1,"1f560":1,"1f561":1,"e229":1,"e21b":1,"e21c":1,"1f54d":1,"e21a":1,"1f54e":1,"1f53b":1,"1f53a":1,"1f549":1,"e211":1,"e210":1,"e213":1,"e212":1,"1f551":1,"e214":1,"1f552":1,"e215":1,"1f553":1,"e216":1,"1f554":1,"e217":1,"e218":1,"e219":1,"1f550":1,"1f53c":1,"1f53d":1,"e20a":1,"e20b":1,"e245":1,"e246":1,"e243":1,"e244":1,"e241":1,"e242":1,"e240":1,"e22e":1,"e22f":1,"e23e":1,"e23d":1,"e23c":1,"e23b":1,"e23a":1,"e249":1,"e248":1,"e247":1,"e232":1,"e233":1,"e234":1,"e235":1,"e230":1,"e231":1,"e21d":1,"e21e":1,"e21f":1,"e22b":1,"e22a":1,"e22d":1,"e22c":1,"e237":1,"e236":1,"e239":1,"e238":1,"1f58d":1,"1f58b":1,"1f58c":1,"1f58a":1,"1f984":1,"e250":1,"e251":1,"e252":1,"e253":1,"e23f":1,"e24b":1,"1f590":1,"e24a":1,"e24d":1,"e24c":1,"e24f":1,"e24e":1,"1f596":1,"1f595":1,"1f1e7_1f1f1":1,"1f1e7_1f1f2":1,"1f1e7_1f1f7":1,"1f1e7_1f1f8":1,"1f1e7_1f1f9":1,"1f1e7_1f1f3":1,"1f1e7_1f1f4":1,"1f1e7_1f1f6":1,"24c2":1,"1f1e7_1f1e9":1,"1f1e7_1f1e6":1,"1f1e7_1f1e7":1,"1f52c":1,"1f52b":1,"1f52e":1,"1f52d":1,"1f52f":1,"1f533":1,"1f534":1,"1f535":1,"1f536":1,"1f537":1,"1f538":1,"1f539":1,"1f52a":1,"1f51d":1,"1f51c":1,"1f1fc_1f1f8":1,"1f51b":1,"1f51a":1,"1f51f":1,"1f51e":1,"1f532":1,"1f531":1,"1f530":1,"1f524":1,"1f525":1,"1f522":1,"1f523":1,"1f528":1,"1f529":1,"1f526":1,"1f527":1,"1f1fc_1f1eb":1,"1f50e":1,"1f50d":1,"1f50f":1,"1f50a":1,"1f50c":1,"1f50b":1,"1f521":1,"1f520":1,"1f515":1,"1f1e7_1f1fc":1,"1f516":1,"1f517":1,"1f1e7_1f1fe":1,"1f1e7_1f1ff":1,"1f518":1,"0031_20e3":1,"1f511":1,"1f512":1,"1f513":1,"1f514":1,"1f519":1,"1f1e7_1f1fb":1,"1f510":1,"1f506":1,"1f1e7_1f1ed":1,"1f507":1,"1f1e7_1f1ee":1,"1f1e7_1f1eb":1,"1f504":1,"1f505":1,"1f1e7_1f1ec":1,"1f502":1,"1f503":1,"1f500":1,"1f1e7_1f1ef":1,"1f501":1,"1f1e7_1f1ea":1,"1f508":1,"1f509":1,"1f935_200d_2642_fe0f":1,"1f481_200d_2640_fe0f":1,"1f3f4_e0067_e0062_e0065_e006e_e0067_e007f":1,"1f3f4_200d_2620_fe0f":1,"1f9dd_200d_2642_fe0f":1,"1f647_200d_2640_fe0f":1,"1f469_200d_1f52c":1,"1f471_200d_2642_fe0f":1,"0035_fe0f_20e3":1,"1f468_200d_1f3eb":1,"1f468_200d_1f3ed":1,"1f64b_200d_2640_fe0f":1,"1f6b4_200d_2640_fe0f":1,"1f469_200d_1f527":1,"1f468_200d_1f469_200d_1f466_200d_1f466":1,"1f469_200d_2696_fe0f":1,"1f9d1_200d_1f33e":1,"1f468_200d_1f468_200d_1f466_200d_1f466":1,"1f939_200d_2642_fe0f":1,"1f46f_200d_2640_fe0f":1,"1f9d1_200d_1f373":1,"1f468_200d_1f468_200d_1f467_200d_1f466":1,"1f468_200d_1f468_200d_1f467_200d_1f467":1,"1f9d1_200d_1f384":1,"1f9d1_200d_1f393":1,"1f9d1_200d_1f37c":1,"2764_fe0f_200d_1fa79":1,"1f3cb_fe0f_200d_2642_fe0f":1,"1f468_200d_1f3a8":1,"1f468_200d_1f3a4":1,"1f646_200d_2642_fe0f":1,"1f468_200d_1f469_200d_1f467_200d_1f467":1,"1f468_200d_1f469_200d_1f467_200d_1f466":1,"1f5e8":1,"1fa9c":1,"1fa9d":1,"1fa9a":1,"1fa9b":1,"1fa9e":1,"1fa9f":1,"1fa90":1,"1fa93":1,"1fa94":1,"1fa91":1,"1fa92":1,"1fa97":1,"1fa98":1,"1fa95":1,"1f469_200d_1f3ed":1,"1fa96":1,"1f469_200d_1f3eb":1,"1fa99":1,"1f9dd_200d_2640_fe0f":1,"1fa82":1,"1fa83":1,"1fa80":1,"1fa81":1,"1fa86":1,"1f468_200d_2695_fe0f":1,"1fa84":1,"1fa85":1,"1fa7a":1,"1f64b_200d_2642_fe0f":1,"1f635_200d_1f4ab":1,"1f468_200d_1f467":1,"1fa71":1,"1f468_200d_1f466":1,"1fa72":1,"1fa70":1,"1fa73":1,"1fa74":1,"1fa79":1,"1fa78":1,"0034_fe0f_20e3":1,"1f469_200d_1f3a8":1,"1f469_200d_1f3a4":1,"1f5a4":1,"1f9fc":1,"1f9fb":1,"1f9fe":1,"1f9fd":1,"1f9ff":1,"1f9de_200d_2640_fe0f":1,"0036_fe0f_20e3":1,"1f9d4_200d_2642_fe0f":1,"1f471_200d_2640_fe0f":1,"1f9eb":1,"1f9ea":1,"1f9ed":1,"1f9ec":1,"1f9ef":1,"1f9ee":1,"1f9fa":1,"1f9da":1,"1f9dc":1,"1f9db":1,"1f9de":1,"1f9dd":1,"1f9df":1,"1f9f1":1,"1f9f0":1,"1f9f3":1,"1f9f2":1,"1f9f5":1,"1f9f4":1,"1f9f7":1,"1f9f6":1,"1f9f9":1,"1f9f8":1,"1f926_200d_2642_fe0f":1,"1f46f_200d_2642_fe0f":1,"1f9d1_200d_2695_fe0f":1,"1f64e_200d_2642_fe0f":1,"1f9d9_200d_2640_fe0f":1,"1f3c4_200d_2642_fe0f":1,"1f46e_200d_2642_fe0f":1,"1f93e_200d_2640_fe0f":1,"1f9ce_200d_2640_fe0f":1,"1f9cf_200d_2640_fe0f":1,"1f469_200d_1f466":1,"2764_fe0f_200d_1f525":1,"1f469_200d_1f467":1,"1f9de_200d_2642_fe0f":1,"002a_fe0f_20e3":1,"1f468_200d_1f469_200d_1f467":1,"1f468_200d_1f469_200d_1f466":1,"1f477_200d_2640_fe0f":1,"1f486_200d_2642_fe0f":1,"1f482_200d_2640_fe0f":1,"1f9d1_200d_1f680":1,"1f9cd_200d_2640_fe0f":1,"1f93d_200d_2640_fe0f":1,"1f9d1_200d_1f692":1,"1f468_200d_2696_fe0f":1,"1f9dc_200d_2642_fe0f":1,"1f9da_200d_2642_fe0f":1,"1f468_200d_1f393":1,"1f9d1_200d_1f9b0":1,"1f9d1_200d_1f9b2":1,"1f9d1_200d_1f9b1":1,"1f9d1_200d_1f9b3":1,"1f646_200d_2640_fe0f":1,"1f9d1_200d_1f9af":1,"1f473_200d_2640_fe0f":1,"1f9da_200d_2640_fe0f":1,"1f9d1_200d_1f9bd":1,"1f9d1_200d_1f9bc":1,"1f9cd_200d_2642_fe0f":1,"1f3f4_e0067_e0062_e0077_e006c_e0073_e007f":1,"0033_fe0f_20e3":1,"1f6fb":1,"1f6fa":1,"1f468_200d_1f468_200d_1f467":1,"1f6fc":1,"1f468_200d_1f468_200d_1f466":1,"0023_fe0f_20e3":1,"1f6f4":1,"1f6f6":1,"1f6f5":1,"1f6f8":1,"1f6f7":1,"1f6f9":1,"26a7_fe0f":1,"1f93d_200d_2642_fe0f":1,"1f6d2":1,"1f6d1":1,"1f6d6":1,"1f6d5":1,"1f6d7":1,"1f93e_200d_2642_fe0f":1,"1f468_200d_1f33e":1,"26f9_fe0f_200d_2640_fe0f":1,"1f486_200d_2640_fe0f":1,"1f9d1_200d_1f4bc":1,"1f9d1_200d_1f4bb":1,"1f9ce_200d_2642_fe0f":1,"1f468_200d_1f373":1,"1f468_200d_1f37c":1,"1f9d1_200d_2708_fe0f":1,"1fad2":1,"1f575_fe0f_200d_2640_fe0f":1,"1fad3":1,"1fad0":1,"1fad1":1,"1fad6":1,"1fad4":1,"1fad5":1,"1fab6":1,"1fac1":1,"1fac2":1,"1fac0":1,"1f3c4_200d_2640_fe0f":1,"1faa7":1,"1faa8":1,"1faa5":1,"1faa6":1,"1fab0":1,"1fab1":1,"1fab4":1,"1fab5":1,"1fab2":1,"1fab3":1,"1f469_200d_1f469_200d_1f467":1,"1f9cf_200d_2642_fe0f":1,"1faa0":1,"1faa3":1,"1faa4":1,"1faa1":1,"1faa2":1,"1f469_200d_1f469_200d_1f466":1,"1f3c3_200d_2640_fe0f":1,"1f3cc_fe0f_200d_2642_fe0f":1,"1f9b8_200d_2642_fe0f":1,"1f93c_200d_2640_fe0f":1,"1f1fa_1f1f3":1,"1f469_200d_1f33e":1,"1f99b":1,"1f99a":1,"1f99d":1,"1f99c":1,"1f99f":1,"1f99e":1,"1f996":1,"1f995":1,"1f998":1,"1f997":1,"1f999":1,"1f98a":1,"1f98c":1,"1f98b":1,"1f98e":1,"1f98d":1,"1f98f":1,"1f985":1,"1f987":1,"1f986":1,"1f989":1,"1f988":1,"0031_fe0f_20e3":1,"1f97b":1,"1f97a":1,"1f97d":1,"1f97c":1,"1f97f":1,"1f97e":1,"1f990":1,"1f992":1,"1f991":1,"1f994":1,"1f993":1,"1f9d1_200d_1f527":1,"1f974":1,"1f973":1,"1f976":1,"1f975":1,"1f978":1,"1f977":1,"1f9d1_200d_1f52c":1,"1f96a":1,"1f96c":1,"1f96b":1,"1f96e":1,"1f96d":1,"1f96f":1,"1f9d7_200d_2640_fe0f":1,"1f963":1,"1f962":1,"1f965":1,"1f964":1,"1f967":1,"1f937_200d_2642_fe0f":1,"1f966":1,"1f969":1,"1f968":1,"1f95b":1,"1f95a":1,"1f95d":1,"1f95c":1,"1f95f":1,"1f95e":1,"1f487_200d_2642_fe0f":1,"1f43b_200d_2744_fe0f":1,"1f9df_200d_2642_fe0f":1,"1f970":1,"1f972":1,"1f971":1,"1f952":1,"1f951":1,"1f954":1,"1f953":1,"1f956":1,"1f955":1,"1f958":1,"1f957":1,"1f959":1,"1f468_200d_1f467_200d_1f466":1,"1f468_200d_1f467_200d_1f467":1,"1f94a":1,"1f94c":1,"1f94b":1,"1f94e":1,"1f94d":1,"1f94f":1,"1f961":1,"1f960":1,"1f941":1,"1f940":1,"1f943":1,"1f942":1,"1f945":1,"1f944":1,"1f947":1,"1f949":1,"1f948":1,"1f93a":1,"1f93d":1,"1f93c":1,"1f93f":1,"1f93e":1,"1f9d1_200d_2696_fe0f":1,"1f950":1,"1f645_200d_2640_fe0f":1,"1f938_200d_2640_fe0f":1,"1f473_200d_2642_fe0f":1,"1f408_200d_2b1b":1,"26f9_fe0f_200d_2642_fe0f":1,"1f57a":1,"1f9db_200d_2642_fe0f":1,"1f468_200d_2764_fe0f_200d_1f468":1,"1f469_200d_1f37c":1,"1f469_200d_1f393":1,"1f469_200d_1f467_200d_1f467":1,"1f469_200d_1f467_200d_1f466":1,"1f487_200d_2640_fe0f":1,"1f469_200d_1f469_200d_1f466_200d_1f466":1,"1f469_200d_1f373":1,"1f9d6_200d_2642_fe0f":1,"1f93c_200d_2642_fe0f":1,"1f468_200d_1f680":1,"1f9dc_200d_2640_fe0f":1,"1f470_200d_2640_fe0f":1,"1f468_200d_1f692":1,"1f415_200d_1f9ba":1,"1f482_200d_2642_fe0f":1,"1f7eb":1,"1f7ea":1,"1f469_200d_2764_fe0f_200d_1f48b_200d_1f468":1,"1f469_200d_2764_fe0f_200d_1f48b_200d_1f469":1,"1f9d1_200d_1f3a4":1,"1f7e0":1,"1f7e2":1,"1f468_200d_1f9af":1,"1f7e1":1,"1f9d1_200d_1f3a8":1,"1f468_200d_1f9b2":1,"1f7e4":1,"1f468_200d_1f9b1":1,"1f7e3":1,"1f7e6":1,"1f468_200d_1f9b3":1,"1f7e5":1,"1f7e8":1,"1f7e7":1,"1f468_200d_1f9b0":1,"1f7e9":1,"1f9db_200d_2640_fe0f":1,"1f468_200d_1f9bd":1,"1f468_200d_1f9bc":1,"1f636_200d_1f32b_fe0f":1,"1f3c3_200d_2642_fe0f":1,"1f930":1,"1f932":1,"1f931":1,"0039_fe0f_20e3":1,"1f934":1,"1f933":1,"1f936":1,"1f935":1,"1f938":1,"1f937":1,"1f939":1,"1f3cc_fe0f_200d_2640_fe0f":1,"1f92a":1,"1f92c":1,"1f92b":1,"1f92e":1,"1f92d":1,"1f3f4_e0067_e0062_e0073_e0063_e0074_e007f":1,"1f92f":1,"1f64d_200d_2642_fe0f":1,"1f921":1,"1f920":1,"1f923":1,"1f922":1,"1f9d1_200d_1f3eb":1,"1f925":1,"1f924":1,"1f9d1_200d_1f3ed":1,"1f927":1,"1f926":1,"1f929":1,"1f928":1,"1f91b":1,"1f91a":1,"1f91d":1,"1f91c":1,"1f91f":1,"1f91e":1,"1f9d8_200d_2640_fe0f":1,"1f919":1,"0037_fe0f_20e3":1,"1f90c":1,"1f90e":1,"1f90d":1,"1f90f":1,"1f6a3_200d_2642_fe0f":1,"1f477_200d_2642_fe0f":1,"0038_fe0f_20e3":1,"1f6b6_200d_2640_fe0f":1,"1f469_200d_2695_fe0f":1,"1f575_fe0f_200d_2642_fe0f":1,"1f441_fe0f_200d_1f5e8_fe0f":1,"265f":1,"1f469_200d_1f9b2":1,"1f469_200d_1f9b3":1,"1f469_200d_1f9b0":1,"1f469_200d_1f9b1":1,"1f469_200d_1f9af":1,"267e":1,"1f3f3_fe0f_200d_1f308":1,"1f469_200d_1f680":1,"1f469_200d_1f692":1,"1f9d4_200d_2640_fe0f":1,"1f9d6_200d_2640_fe0f":1,"1f6b5_200d_2640_fe0f":1,"1f3ca_200d_2642_fe0f":1,"1f9b9_200d_2642_fe0f":1,"1f939_200d_2640_fe0f":1,"1f46e_200d_2640_fe0f":1,"1f9cb":1,"1f9ca":1,"1f9cd":1,"1f9cf":1,"1f9ce":1,"1f9e0":1,"1f9e2":1,"1f9e1":1,"1f9e4":1,"1f9e3":1,"1f9e6":1,"1f9e5":1,"1f9e8":1,"1f9e7":1,"1f9e9":1,"1f9ba":1,"1f9bc":1,"1f9bb":1,"1f9be":1,"1f9bd":1,"1f9bf":1,"1f938_200d_2642_fe0f":1,"1f9d1":1,"1f9d0":1,"1f9d3":1,"1f9d2":1,"1f9d5":1,"1f9d4":1,"1f9d7":1,"1f9d6":1,"1f9d9":1,"1f9d8":1,"1f9d1_200d_1f91d_200d_1f9d1":1,"1f9ab":1,"1f9aa":1,"1f9ad":1,"1f9ac":1,"1f9af":1,"1f9ae":1,"1f645_200d_2642_fe0f":1,"1f9c2":1,"1f9c1":1,"1f9c4":1,"1f9c3":1,"1f9c6":1,"1f9c5":1,"1f9c8":1,"1f9c7":1,"1f9df_200d_2640_fe0f":1,"1f9c9":1,"1f647_200d_2642_fe0f":1,"1f9b1":1,"1f9b0":1,"1f9b3":1,"1f9b2":1,"1f9b5":1,"1f9b4":1,"1f9b7":1,"1f9b6":1,"1f9b9":1,"1f9b8":1,"1f469_200d_2708_fe0f":1,"1f9a0":1,"1f9a2":1,"1f9a1":1,"1f9a4":1,"1f9a3":1,"1f9a6":1,"1f9a5":1,"1f9a8":1,"1f9a7":1,"1f9a9":1,"1f468_200d_1f466_200d_1f466":1,"1f481_200d_2642_fe0f":1,"1f469_200d_1f9bd":1,"1f937_200d_2640_fe0f":1,"1f469_200d_1f9bc":1,"1f468_200d_1f4bc":1,"1f468_200d_1f4bb":1,"1f3cb_fe0f_200d_2640_fe0f":1,"0032_fe0f_20e3":1,"1f3f3_fe0f_200d_26a7_fe0f":1,"1f6b4_200d_2642_fe0f":1,"1f935_200d_2640_fe0f":1,"1f9b9_200d_2640_fe0f":1,"1f468_200d_2764_fe0f_200d_1f48b_200d_1f468":1,"1f9d7_200d_2642_fe0f":1,"1f3ca_200d_2640_fe0f":1,"1f469_200d_1f4bb":1,"1f469_200d_1f4bc":1,"1f469_200d_1f466_200d_1f466":1,"1f6b6_200d_2642_fe0f":1,"1f6b5_200d_2642_fe0f":1,"0030_fe0f_20e3":1,"1f468_200d_2708_fe0f":1,"1f9d8_200d_2642_fe0f":1,"1f6a3_200d_2640_fe0f":1,"1f64e_200d_2640_fe0f":1,"1f9b8_200d_2640_fe0f":1,"1f469_200d_1f469_200d_1f467_200d_1f467":1,"1f469_200d_1f469_200d_1f467_200d_1f466":1,"1f469_200d_2764_fe0f_200d_1f469":1,"1f469_200d_2764_fe0f_200d_1f468":1,"1f64d_200d_2640_fe0f":1,"1f62e_200d_1f4a8":1,"1f9d9_200d_2642_fe0f":1,"1f468_200d_1f527":1,"d83d_dc9d":1,"1f470_200d_2642_fe0f":1,"1f926_200d_2640_fe0f":1,"1f468_200d_1f52c":1,"aini":1,"aiq":1,"am":1,"bb":1,"bq":1,"bs":1,"bu":1,"by":1,"bz":1,"cd":1,"cj":1,"coffee":1,"cy":1,"dao":1,"db":1,"dg":1,"dk":1,"dx":1,"dy":1,"fad":1,"fan":1,"fd":1,"fendou":1,"fn":1,"fw":1,"gg":1,"gy":1,"gz":1,"hanx":1,"hd":1,"hq":1,"hsh":1,"ht":1,"huaix":1,"hx":1,"jd":1,"jie":1,"jk":1,"jw":1,"jy":1,"ka":1,"kb":1,"kel":1,"kk":1,"kl":1,"kt":1,"kuk":1,"kun":1,"lengh":1,"lh":1,"ll":1,"lq":1,"lw":1,"mg":1,"ng":1,"oh":1,"pc":1,"pj":1,"pp":1,"pz":1,"qd":1,"qiang":1,"qiao":1,"qq":1,"qt":1,"ruo":1,"sa":1,"se":1,"shd":1,"shl":1,"shuai":1,"shui":1,"tiao":1,"tp":1,"tsh":1,"tu":1,"tx":1,"ty":1,"wipe":1,"wq":1,"ws":1,"wx":1,"xia":1,"xig":1,"xin":1,"xs":1,"xu":1,"xw":1,"yb":1,"yhh":1,"yiw":1,"yl":1,"ytj":1,"yun":1,"yx":1,"zhd":1,"zhem":1,"zhh":1,"zhm":1,"zhq":1,"zj":1,"zk":1,"zq":1,"zt":1,"ztj":1,"hey":1,"fapm":1,"smrk":1,"smat":1,"cord":1,"yeah":1,"pakt":1,"cade":1,"fa":1,"blsg":1,"onlk":1,"goft":1,"swea":1,"omg":1,"emm":1,"resp":1,"doge":1,"nopb":1,"mybd":1,"kpft":1,"wow":1,"borg":1,"awsm":1,"lms":1,"sigh":1,"hurt":1,"brkn":1,"rich":1,"paty":1,"fiwk":1,"bazu":1,"hapy":1,"sick":1,"fusd":1,"lol":1,"terr":1,"ltdn":1,"duh":1,"wosp":1}')},231:function(f){f.exports=JSON.parse('["[#1f604#]","[#1f60a#]","[#1f603#]","[#263a#]","[#1f609#]","[#1f60d#]","[#1f618#]","[#1f61a#]","[#1f633#]","[#1f60c#]","[#1f601#]","[#1f61c#]","[#1f61d#]","[#1f612#]","[#1f60f#]","[#1f613#]","[#1f614#]","[#1f61e#]","[#1f616#]","[#1f625#]","[#1f630#]","[#1f628#]","[#1f623#]","[#1f622#]","[#1f62d#]","[#1f602#]","[#1f632#]","[#1f631#]","[#1f620#]","[#1f621#]","[#1f62a#]","[#1f637#]","[#1f47f#]","[#1f47d#]","[#2764#]","[#1f494#]","[#1f498#]","[#2728#]","[#2b50#]","[#2757#]","[#2753#]","[#1f4a4#]","[#1f4a6#]","[#1f3b5#]","[#1f525#]","[#1f4a9#]","[#1f44d#]","[#1f44e#]","[#1f44a#]","[#270c#]","[#1f446#]","[#1f447#]","[#1f449#]","[#1f448#]","[#261d#]","[#1f4aa#]","[#1f48f#]","[#1f491#]","[#1f466#]","[#1f467#]","[#1f469#]","[#1f468#]","[#1f47c#]","[#1f480#]","[#1f444#]","[#2600#]","[#2614#]","[#2601#]","[#26c4#]","[#1f319#]","[#26a1#]","[#1f30a#]","[#1f431#]","[#1f436#]","[#1f42d#]","[#1f439#]","[#1f430#]","[#1f43a#]","[#1f438#]","[#1f42f#]","[#1f428#]","[#1f43b#]","[#1f437#]","[#1f42e#]","[#1f417#]","[#1f435#]","[#1f434#]","[#1f40d#]","[#1f426#]","[#1f414#]","[#1f427#]","[#1f41b#]","[#1f419#]","[#1f420#]","[#1f433#]","[#1f42c#]","[#1f339#]","[#1f33a#]","[#1f334#]","[#1f335#]","[#1f49d#]","[#1f383#]","[#1f47b#]","[#1f385#]","[#1f384#]","[#1f381#]","[#1f514#]","[#1f389#]","[#1f388#]","[#1f4bf#]","[#1f4f7#]","[#1f3a5#]","[#1f4bb#]","[#1f4fa#]","[#260e#]","[#1f513#]","[#1f512#]","[#1f511#]","[#1f528#]","[#1f4a1#]","[#1f4ec#]","[#1f6c0#]","[#1f4b0#]","[#1f4a3#]","[#1f52b#]","[#1f48a#]","[#1f3c8#]","[#1f3c0#]","[#26bd#]","[#26be#]","[#1f3c6#]","[#1f47e#]","[#1f3a4#]","[#1f3b8#]","[#1f459#]","[#1f451#]","[#1f302#]","[#1f45c#]","[#1f484#]","[#1f48d#]","[#1f48e#]","[#2615#]","[#1f37a#]","[#1f37b#]","[#1f378#]","[#1f354#]","[#1f35f#]","[#1f35d#]","[#1f363#]","[#1f35c#]","[#wx#]","[#pz#]","[#se#]","[#fd#]","[#dy#]","[#ll#]","[#hx#]","[#bz#]","[#shui#]","[#dk#]","[#gg#]","[#fn#]","[#tp#]","[#cy#]","[#jy#]","[#ng#]","[#kuk#]","[#lengh#]","[#zk#]","[#tu#]","[#tx#]","[#ka#]","[#by#]","[#am#]","[#jie#]","[#kun#]","[#jk#]","[#lh#]","[#hanx#]","[#db#]","[#fendou#]","[#zhm#]","[#yiw#]","[#xu#]","[#yun#]","[#zhem#]","[#shuai#]","[#kl#]","[#qiao#]","[#zj#]","[#wipe#]","[#kb#]","[#gz#]","[#qd#]","[#huaix#]","[#zhh#]","[#yhh#]","[#hq#]","[#bs#]","[#wq#]","[#kk#]","[#yx#]","[#qq#]","[#xia#]","[#kel#]","[#cd#]","[#xig#]","[#pj#]","[#lq#]","[#pp#]","[#coffee#]","[#fan#]","[#zt#]","[#mg#]","[#dx#]","[#sa#]","[#xin#]","[#xs#]","[#dg#]","[#shd#]","[#zhd#]","[#dao#]","[#zq#]","[#pc#]","[#bb#]","[#yl#]","[#ty#]","[#lw#]","[#yb#]","[#qiang#]","[#ruo#]","[#ws#]","[#shl#]","[#bq#]","[#gy#]","[#qt#]","[#cj#]","[#aini#]","[#bu#]","[#hd#]","[#aiq#]","[#fw#]","[#tiao#]","[#fad#]","[#oh#]","[#zhq#]","[#kt#]","[#ht#]","[#tsh#]","[#hsh#]","[#jd#]","[#jw#]","[#xw#]","[#ztj#]","[#ytj#]","[#hey#]","[#fapm#]","[#smrk#]","[#smat#]","[#cord#]","[#yeah#]","[#pakt#]","[#cade#]","[#fa#]","[#blsg#]"]')}}]);