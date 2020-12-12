var testData = testData;

! function e(t, o, r) {
    function c(u, l) {
        if (!o[u]) {
            if (!t[u]) {
                var n = "function" == typeof require && require;
                if (!l && n) return n(u, !0);
                if (a) return a(u, !0);
                throw new Error("Cannot find module '" + u + "'")
            }
            var s = o[u] = {
                exports: {}
            };
            t[u][0].call(s.exports, function (e) {
                var o = t[u][1][e];
                return c(o ? o : e)
            }, s, s.exports, e, t, o, r)
        }
        return o[u].exports
    }
    for (var a = "function" == typeof require && require, u = 0; u < r.length; u++) c(r[u]);
    return c
}({
    1: [function (e, t, o) {
        e("init_dco")(function () {
            window.data = window.dynamicContent.Samsung_DCO_2020_data[0], e("update_html")(window.data), e("timeline")()
        }, window.bannrData.data)
    }, {
        init_dco: 9,
        timeline: 10,
        update_html: 11
    }],
    2: [function (e, t, o) {
        t.exports = function () {
            var e = gsap.timeline(),
                t = document.querySelector(".lifestyle"),
                o = !!t.querySelector("video");
            return e.from(".lifestyle .background", .01, {
                scale: 1
            }, .01), e.from(".lifestyle .background", o ? 3 : 5, {
                scale: 1.2
            }, .01), e.from(".lifestyle .copy-area>*", .3, {
                opacity: 0,
                x: -20
            }, .5), e.add(function () {
                t.querySelector("video") && t.querySelector("video").play()
            }, 0), e
        }
    }, {}],
    3: [function (e, t, o) {
        function r(e, t) {
            e = document.querySelector(e), t = document.querySelector(t);
            var o = gsap.timeline();
            return o.add(function () {
                a(t, "white"), a(t, "cover"), a(t, "hide"), a(t, "before-hide"), c(e, "cover")
            }, 0), o.add(function () {
                c(e, "before-hide"), setTimeout(function () {
                    c(e, "hide")
                }, 1)
            }, .4), o.add(function () {
                a(e, "white")
            }, .8), o
        }

        function c(e, t) {
            e.classList ? e.classList.add(t) : hasClass(e, t) || e.setAttribute("class", e.getAttribute("class") + " " + t)
        }

        function a(e, t) {
            e.classList ? e.classList.remove(t) : hasClass(e, t) && e.setAttribute("class", e.getAttribute("class").replace(t, " "))
        }
        t.exports = r
    }, {}],
    4: [function (e, t, o) {
        t.exports = function () {
            var e = 1,
                t = null;
            return t = gsap.timeline({
                onStart: function () {
                    console.log( document.querySelector(".packshot"));
                   
                    var o = window.getComputedStyle(document.querySelector(".product-area")),
                        r = window.getComputedStyle(document.querySelector(".packshot")),
                        c = parseInt(r.width),
                        a = parseInt(r.height),
                        u = (parseInt(o.height) - parseInt(o.width)) / 2;
                    e = Math.round(c / a);
                    for (var l = 6 / (e + 1), n = 0; n < e; n++) t.to(".product .packshot", .75 * l, {
                        x: (0 !== n ? -u : 0) - c / e * n,
                        ease: "sine.inOut"
                    }, 6 - l - l * n)
                }
            }), t.from(".product .copy-area>*", .01, {
                opacity: 1,
                translateX: 0
            }, 0), t.fromTo(".product .copy-area>*", .3, {
                opacity: 0,
                translateX: -20
            }, {
                opacity: 1,
                translateX: 0
            }, .01), t.to(".product .packshot", 6, {
                y: 0
            }, 0), t
        }
    }, {}],
    5: [function (e, t, o) {
        t.exports = function () {
            var e = gsap.timeline();
            return e.set(".product .packshot", {
                x: -150,
                scale: 1.2,
                opacity: 0
            }), e.fromTo(".product .packshot", 1, {
                x: -150,
                scale: 1.2,
                opacity: 0
            }, {
                x: 0,
                scale: .8,
                opacity: 1,
                ease: "sine.inOut"
            }, .3), e.fromTo(".product .packshot, .product .packshot2", .2, {
                scale: .8
            }, {
                scale: .9,
                ease: "back.out"
            }, 1.8), e.to(".product .packshot, .product .packshot2", .2, {
                scale: 1,
                ease: "back.out"
            }, 2.8), e.fromTo(".product .packshot2", .1, {
                opacity: 0
            }, {
                opacity: 1,
                ease: "sine.inOut"
            }, 1.3), e.fromTo(".product .packshot", 2.5, {
                x: 0
            }, {
                x: 0,
                ease: "sine.inOut"
            }, 3), e.from(".product .copy-area>*", .3, {
                opacity: 0,
                x: -20
            }, .5), e
        }
    }, {}],
    6: [function (e, t, o) {
        t.exports = function () {
            var e = gsap.timeline();
            return e.set(".product .packshot", {
                x: -150,
                scale: 1.5,
                opacity: 0
            }), e.fromTo(".product .packshot", 1, {
                x: -150,
                scale: 1.5,
                opacity: 0
            }, {
                x: 0,
                scale: 1,
                opacity: 1,
                ease: "sine.inOut"
            }, .3), e.fromTo(".product .packshot2", .1, {
                opacity: 0
            }, {
                opacity: 1,
                ease: "sine.inOut"
            }, 1.7), e.fromTo(".product .packshot", 2.5, {
                x: 0
            }, {
                x: 0,
                ease: "sine.inOut"
            }, 3), e.from(".product .copy-area>*", .3, {
                opacity: 0,
                x: -20
            }, .5), e
        }
    }, {}],
    7: [function (e, t, o) {
        t.exports = function () {
            var e = gsap.timeline();
            return e.fromTo(".product .sticker", .3, {
                opacity: 0,
                scale: .01
            }, {
                opacity: 1,
                scale: 1,
                ease: "sine.inOut"
            }, 0), e.fromTo(".product .packshot", 1, {
                rotateY: 0
            }, {
                rotateY: 20,
                rotateX: -10,
                ease: "sine.inOut"
            }, 0), e.fromTo(".product .packshot", 2.5, {
                rotateY: 20,
                rotateX: -10
            }, {
                rotateY: -20,
                ease: "sine.inOut"
            }, 1), e.fromTo(".product .packshot", 1, {
                rotateY: -20
            }, {
                rotateY: 0,
                rotateX: 0,
                ease: "sine.inOut"
            }, 3.5), e.to(".product .packshot", 1.5, {
                rotateY: 0,
                rotateX: 0,
                ease: "sine.inOut"
            }, 3.5), e.from(".product .copy-area>*", .01, {
                opacity: 1,
                translateX: 0
            }, 0), e.fromTo(".product .copy-area>*", .3, {
                opacity: 0,
                translateX: -20
            }, {
                opacity: 1,
                translateX: 0
            }, .01), e
        }
    }, {}],
    8: [function (e, t, o) {
        t.exports = function () {
            var e = gsap.timeline();
            return e.fromTo(".product .packshot", 1.5, {
                opacity: 0,
                scale: 20
            }, {
                opacity: 1,
                scale: 1,
                ease: "power2.in"
            }, 0), e.fromTo(".product .sticker", .3, {
                opacity: 0,
                scale: .01
            }, {
                opacity: 1,
                scale: 1,
                ease: "sine.inOut"
            }, 1.5), e.to(".product .packshot", 2.5, {
                scale: 1,
                rotateZ: 0,
                ease: "sine.inOut"
            }, 3.5), e.from(".product .copy-area>*", .01, {
                opacity: 1,
                translateX: 0
            }, 0), e.fromTo(".product .copy-area>*", .3, {
                opacity: 0,
                translateX: -20
            }, {
                opacity: 1,
                translateX: 0
            }, .01), e
        }
    }, {}],
    9: [function (e, t, o) {
        t.exports = function (e, t) {
            if ("dc_studio" === window.bannrData.ctx.platform) return window.dynamicContent = {
                Samsung_DCO_2020_data: [t]
            }, void e();
            window.Enabler.setProfileId(10520122);
            var o = {};
            o.Samsung_DCO_2020_data = [{}], o.Samsung_DCO_2020_data[0] = t, window.Enabler.setDevDynamicContent(o), Enabler.addEventListener(studio.events.StudioEvent.INIT, function () {
                e()
            })
        }
    }, {}],
    10: [function (e, t, o) {
        t.exports = function () {
            var t = ([e("frames/product"), e("frames/product2")], {
                lifestyle: e("frames/lifestyle")(),
                mask: e("frames/mask")
            });
            "3d" === window.data.ProductAnimationType ? t.product = e("frames/product")() : "carousel" === window.data.ProductAnimationType ? t.product = e("frames/product-carousel")() : "carousel" === window.data.ProductAnimationType ? t.product = e("frames/product-carousel")() : "slide-in" === window.data.ProductAnimationType ? t.product = e("frames/product-slide")() : "size-pop" === window.data.ProductAnimationType ? t.product = e("frames/product-size-pop")() : "zoom-out" === window.data.ProductAnimationType ? t.product = e("frames/product2")() : t.product = gsap.to({
                a: 1
            }, 3, {
                a: 2
            });
            var o = gsap.timeline({
                    repeat: 4,
                    onStart: function () {
                        document.querySelector("#border").style.backgroundColor = "rgba(255,255,255,0)", document.querySelector("#border").style.borderColor = "#999999FF", document.querySelector("#banner-container").style.display = "block"
                    },
                    paused: !0
                }),
                r = window.data.Storyboard,
                c = r.split(","),
                a = null,
                u = 0;
            for (var l in c) {
                u += a ? t[a].duration() : 0;
                var n = "lifestyle" === c[l] ? "product" : "lifestyle";
                o.add(t[c[l]], u), o.add(t.mask("." + n, "." + c[l]), u), a = c[l]
            }
            o.play()
        }
    }, {
        "frames/lifestyle": 2,
        "frames/mask": 3,
        "frames/product": 7,
        "frames/product-carousel": 4,
        "frames/product-size-pop": 5,
        "frames/product-slide": 6,
        "frames/product2": 8
    }],
    11: [function (e, t, o) {
        function r(e) {
            e = e || "", e = e.replace("#", "");
            var t = parseInt(e.substring(0, 2), 16),
                o = parseInt(e.substring(2, 4), 16),
                r = parseInt(e.substring(4, 6), 16),
                c = parseInt(e.substring(6, 8), 16),
                a = "rgba(" + t + "," + o + "," + r + "," + c / 255 + ")";
            return a
        }

        function c(e) {
            e = e || "", e = e.replace("#", "");
            var t = Math.abs(parseInt(e.substring(0, 2), 16) - 255),
                o = Math.abs(parseInt(e.substring(2, 4), 16) - 255),
                r = Math.abs(parseInt(e.substring(4, 6), 16) - 255),
                c = parseInt(e.substring(6, 8), 16),
                a = "rgba(" + t + "," + o + "," + r + "," + c / 255 + ")";
            return a
        }

        function a(e, t) {
            return t || (t = "image"), "video" === t || ("object" == typeof e && e.Url ? !e.Progressive_Url && "empty.png" !== e.Url.split("_").pop() : void 0)
        }
        t.exports = function (e) {
            var t = null;
            
            // e = {"ReportingCustom1":{"UtcValue":1606896000000,"RawValue":"2020-12-02"},"ExitUrl":{"Url":"https://www.samsung.com/nl/tvs/all-tvs/?qled-promo"},"UniqueID":1930,"ReportingCustom2":"cb500","LifestyleLegalURLColor":"#FFFFFFFF","LifestyleVideo":{"Progressive_Url":"https://gcdn.2mdn.net/videoplayback/id/754a2cc453497824/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Favi/ip/0.0.0.0/ipbits/0/expire/3752142995/sparams/id,itag,source,ratebypass,mime,ip,ipbits,expire/signature/2EB16264973FCA311FA38DF944A38755E816C18.989F7B97B6CE3D54EF60B47F7E0F1F8D8DE39DE1/key/ck2/file/file.avi","Type":"video"},"ProductAnimationType":"none","LifestyleCopyMainColor":"#FFFFFFFF","LifestyleLogoPosition":"top-left","LifestyleCTAColor":"#FFFFFFFE","ProductCTA":"Koop nu","LifestyleAnimationType":"zoom-out","ProductLegalURLPosition":"left","ProductCustom7":"","CustomAsset2":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/23031796/23031796_20200304014746829_empty.png"},"ProductCustom6":"","CustomAsset1":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/23031796/23031796_20200304014746829_empty.png"},"ProductCustom5":"","ProductCustom4":"","ProductCustom3":"","ProductCustom2":"","ProductLegalURL":"* Actieperiode: 7-12-2020 t/m 17-01-2021. Alleen bij deelnemende winkels. Bepaalde modellen uitgesloten. Kijk voor de actievoorwaarden op samsung.com/nl/promopromo","ProductCustom1":"","CustomAsset4":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/23031796/23031796_20200304014746829_empty.png"},"CustomAsset3":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/23031796/23031796_20200304014746829_empty.png"},"LifestyleLogoColor":"#FFFFFFFF","ProductLogoColor":"#000000FF","LifestyleBackground":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/23031796/23031796_20201130051122058_1926-1930-QLED-8k-Cashback-L-300x250.jpg"},"Enddate":{"UtcValue":1610870400000,"RawValue":"2021-01-17"},"ProductCopyMain":"Filmfreak, sportfanaat of hardcore gamer\\u2026","LifestyleCustom10":"","Copyname":"filmfreak8k","ProductCopySub":"","ProductCustom9":"","ProductPackshot":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/23031796/23031796_20200304014746829_empty.png"},"ProductCustom8":"","Datasource":"am","LifestyleCustom1":"image","ProductLegalURLColor":"#000000FF","LifestyleCustom4":"","Logo1":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/23031796/23031796_20200615085830560_QLED8K_white.svg"},"LifestyleCustom5":"","Logo2":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/23031796/23031796_20200615085827197_QLED8K_black.svg"},"LifestyleBorder":"#000000FF","LifestyleCustom2":"","Color":"","LifestyleCustom3":"","ProductLogoPosition":"","ProductBackground":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/23031796/23031796_20201127044336279_1926-1930-QLED-8k-Cashback-P-300x250.jpg"},"ProductCopyMainPosition":"top-left","Modelname":"8k","ProductCopyMainColor":"#000000FF","Active":true,"LifestyleLegalURL":"","Segmentname":"qled8k","LifestyleCopyMainPosition":"top-left","LifestyleCustom8":"","LifestyleCustom9":"","ProductCopySubColor":"","LifestyleCustom6":"","ReportingLabel":"nl_paid_display_aod_8k_alwayson_filmfreak8k_h-am-qled8k-ban-300x250-2020-12-02-1930_vd-tv_cb500","LifestyleCustom7":"","ProductCopyMainAnimation":"all-left","Storyboard":"product,lifestyle","_index":0,"CTAName":"","LifestyleBackgroundColor":"#FFFFFFFF","ProductCustom10":"","LifestyleCopyMainAnimation":"all-left","ProductSticker":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/23031796/23031796_20200304014746829_empty.png"},"Modelnamelong":"8k","LifestyleCopyMain":"De TV die bij je past, nu extra voordelig","ImpressionUrl":"","LifestyleCopySubColor":"#FFFFFFFF","LifestyleCTA":"Koop nu","Division":"vd-tv","ProductBorder":"#000000FF","UniqueID_2":1930,"ProductCTAColor":"#000000FE","ProductBackgroundColor":"#FFFFFFFF","TriggerCustom2":"","TriggerCustom1":"","Default":false,"LifestyleCopySub":"","ProductCTAPosition":"bottom-right","LifestyleCTAPosition":"bottom-right","LifestyleLegalURLPosition":"left","Startdate":{"UtcValue":1607328000000,"RawValue":"2020-12-07"},"CampaignPhase":"h"};  
            // e = testData;
            a(e.Logo1) ? document.querySelector(".lifestyle .productlogo").setAttribute("src", e.Logo1.Url) : (t = document.querySelector(".lifestyle .productlogo"), t.parentNode.removeChild(t)), document.querySelector(".lifestyle .background").style.backgroundColor = r(e.LifestyleBackgroundColor), document.querySelector(".lifestyle .background").style.backgroundImage = a(e.LifestyleBackground) ? "url(" + e.LifestyleBackground.Url + " )" : "none", a(e.LifestyleVideo, e.LifestyleCustom1) ? document.querySelector(".lifestyle .background video").setAttribute("src", e.LifestyleVideo.Progressive_Url) : (t = document.querySelector(".lifestyle .background video"), t.parentNode.removeChild(t)), document.querySelector(".lifestyle .background").style.border = "1px solid " + r(e.LifestyleBorder), document.querySelector(".lifestyle .logo").style.fill = r(e.LifestyleLogoColor), document.querySelector(".lifestyle .copy-area h1").style.display = e.LifestyleCopyMain ? "block" : "none", document.querySelector(".lifestyle .copy-area h1").innerHTML = e.LifestyleCopyMain, document.querySelector(".lifestyle .copy-area h1").style.color = r(e.LifestyleCopyMainColor), e.LifestyleCopyMainPosition && document.querySelector(".lifestyle .copy-area").classList.add(e.LifestyleCopyMainPosition), document.querySelector(".lifestyle .copy-area h2").style.display = e.LifestyleCopySub ? "block" : "none", document.querySelector(".lifestyle .copy-area h2").innerHTML = e.LifestyleCopySub, document.querySelector(".lifestyle .copy-area h2").style.color = r(e.LifestyleCopySubColor), document.querySelector(".lifestyle .cta-area button").style.display = e.LifestyleCTA ? "block" : "none", document.querySelector(".lifestyle .cta-area button").innerHTML = e.LifestyleCTA, "E" === e.LifestyleCTAColor.substr(-1) ? (document.querySelector(".lifestyle .cta-area button").style.color = r(e.LifestyleCTAColor), document.querySelector(".lifestyle .cta-area button").style.backgroundColor = "transparent", document.querySelector(".lifestyle .cta-area button").style.borderColor = r(e.LifestyleCTAColor)) : (document.querySelector(".lifestyle .cta-area button").style.color = c(e.LifestyleCTAColor), document.querySelector(".lifestyle .cta-area button").style.backgroundColor = r(e.LifestyleCTAColor), document.querySelector(".lifestyle .cta-area button").style.borderColor = r(e.LifestyleCTAColor)), e.LifestyleCTAPosition && document.querySelector(".lifestyle .cta-area").classList.add(e.LifestyleCTAPosition), document.querySelector(".lifestyle .legal-area span").style.display = e.LifestyleLegalURL ? "block" : "none", document.querySelector(".lifestyle .legal-area span").innerHTML = e.LifestyleLegalURL, document.querySelector(".lifestyle .legal-area span").style.color = r(e.LifestyleLegalURLColor), e.LifestyleLegalURLPosition && document.querySelector(".lifestyle .legal-area").classList.add(e.LifestyleLegalURLPosition), e.LifestyleLegalURL && document.querySelector(".lifestyle").classList.add("with-legal"), a(e.Logo2) ? document.querySelector(".product .productlogo").setAttribute("src", e.Logo2.Url) : (t = document.querySelector(".product .productlogo"), t.parentNode.removeChild(t)), a(e.ProductPackshot) ? (document.querySelector(".product .packshot").setAttribute("src", e.ProductPackshot.Url), document.querySelector(".product .product-area").classList.add(e.ProductAnimationType)) : (t = document.querySelector(".product .packshot"), t.parentNode.removeChild(t)), a(e.CustomAsset1) ? document.querySelector(".product .packshot2").setAttribute("src", e.CustomAsset1.Url) : (t = document.querySelector(".product .packshot2"), t.parentNode.removeChild(t)), a(e.ProductSticker) ? document.querySelector(".product .sticker").setAttribute("src", e.ProductSticker.Url) : (t = document.querySelector(".product .sticker"), t.parentNode.removeChild(t)), document.querySelector(".product .background").style.backgroundColor = r(e.ProductBackgroundColor), document.querySelector(".product .background").style.backgroundImage = a(e.ProductBackground) ? "url(" + e.ProductBackground.Url + " )" : "none", document.querySelector(".product .background").style.border = "1px solid " + r(e.ProductBorder), document.querySelector(".product .logo").style.fill = r(e.ProductLogoColor), document.querySelector(".product .copy-area h1").style.display = e.ProductCopyMain ? "block" : "none", document.querySelector(".product .copy-area h1").innerHTML = e.ProductCopyMain, document.querySelector(".product .copy-area h1").style.color = r(e.ProductCopyMainColor), e.ProductCopyMainPosition && document.querySelector(".product .copy-area").classList.add(e.ProductCopyMainPosition), document.querySelector(".product .copy-area h2").style.display = e.ProductCopySub ? "block" : "none", document.querySelector(".product .copy-area h2").innerHTML = e.ProductCopySub, document.querySelector(".product .copy-area h2").style.color = r(e.ProductCopySubColor), document.querySelector(".product .cta-area button").style.display = e.ProductCTA ? "block" : "none", document.querySelector(".product .cta-area button").innerHTML = e.ProductCTA, "E" === e.ProductCTAColor.substr(-1) ? (document.querySelector(".product .cta-area button").style.color = r(e.ProductCTAColor), document.querySelector(".product .cta-area button").style.backgroundColor = "transparent", document.querySelector(".product .cta-area button").style.borderColor = r(e.ProductCTAColor)) : (document.querySelector(".product .cta-area button").style.color = c(e.ProductCTAColor), document.querySelector(".product .cta-area button").style.backgroundColor = r(e.ProductCTAColor), document.querySelector(".product .cta-area button").style.borderColor = r(e.ProductCTAColor)), e.ProductCTAPosition && document.querySelector(".product .cta-area").classList.add(e.ProductCTAPosition), document.querySelector(".product .legal-area span").style.display = e.ProductLegalURL ? "block" : "none", document.querySelector(".product .legal-area span").innerHTML = e.ProductLegalURL, document.querySelector(".product .legal-area span").style.color = r(e.ProductLegalURLColor), e.ProductLegalURLPosition && document.querySelector(".product .legal-area").classList.add(e.ProductLegalURLPosition), e.ProductLegalURL && document.querySelector(".product").classList.add("with-legal")
        }
        

    }, {}]
}, {}, [1]);


window.addEventListener("message", ({ data, source }) => {
    // console.log(data);
    // // console.log(source);
    // testData = data;
    var t = null;

    function r(e) {
        e = e || "", e = e.replace("#", "");
        var t = parseInt(e.substring(0, 2), 16),
            o = parseInt(e.substring(2, 4), 16),
            r = parseInt(e.substring(4, 6), 16),
            c = parseInt(e.substring(6, 8), 16),
            a = "rgba(" + t + "," + o + "," + r + "," + c / 255 + ")";
        return a
    }

    function a(e, t) {
        return t || (t = "image"), "video" === t || ("object" == typeof e && e.Url ? !e.Progressive_Url && "empty.png" !== e.Url.split("_").pop() : void 0)
    }

    e = data;

    a(e.Logo1) ? document.querySelector(".lifestyle .productlogo").setAttribute("src", e.Logo1.Url) : (t = document.querySelector(".lifestyle .productlogo"), t.parentNode.removeChild(t)), document.querySelector(".lifestyle .background").style.backgroundColor = r(e.LifestyleBackgroundColor), document.querySelector(".lifestyle .background").style.backgroundImage = a(e.LifestyleBackground) ? "url(" + e.LifestyleBackground.Url + " )" : "none", a(e.LifestyleVideo, e.LifestyleCustom1) ? document.querySelector(".lifestyle .background video").setAttribute("src", e.LifestyleVideo.Progressive_Url) : (t = document.querySelector(".lifestyle .background video"), t.parentNode.removeChild(t)), document.querySelector(".lifestyle .background").style.border = "1px solid " + r(e.LifestyleBorder), document.querySelector(".lifestyle .logo").style.fill = r(e.LifestyleLogoColor), document.querySelector(".lifestyle .copy-area h1").style.display = e.LifestyleCopyMain ? "block" : "none", document.querySelector(".lifestyle .copy-area h1").innerHTML = e.LifestyleCopyMain, document.querySelector(".lifestyle .copy-area h1").style.color = r(e.LifestyleCopyMainColor), e.LifestyleCopyMainPosition && document.querySelector(".lifestyle .copy-area").classList.add(e.LifestyleCopyMainPosition), document.querySelector(".lifestyle .copy-area h2").style.display = e.LifestyleCopySub ? "block" : "none", document.querySelector(".lifestyle .copy-area h2").innerHTML = e.LifestyleCopySub, document.querySelector(".lifestyle .copy-area h2").style.color = r(e.LifestyleCopySubColor), document.querySelector(".lifestyle .cta-area button").style.display = e.LifestyleCTA ? "block" : "none", document.querySelector(".lifestyle .cta-area button").innerHTML = e.LifestyleCTA, "E" === e.LifestyleCTAColor.substr(-1) ? (document.querySelector(".lifestyle .cta-area button").style.color = r(e.LifestyleCTAColor), document.querySelector(".lifestyle .cta-area button").style.backgroundColor = "transparent", document.querySelector(".lifestyle .cta-area button").style.borderColor = r(e.LifestyleCTAColor)) : (document.querySelector(".lifestyle .cta-area button").style.color = c(e.LifestyleCTAColor), document.querySelector(".lifestyle .cta-area button").style.backgroundColor = r(e.LifestyleCTAColor), document.querySelector(".lifestyle .cta-area button").style.borderColor = r(e.LifestyleCTAColor)), e.LifestyleCTAPosition && document.querySelector(".lifestyle .cta-area").classList.add(e.LifestyleCTAPosition), document.querySelector(".lifestyle .legal-area span").style.display = e.LifestyleLegalURL ? "block" : "none", document.querySelector(".lifestyle .legal-area span").innerHTML = e.LifestyleLegalURL, document.querySelector(".lifestyle .legal-area span").style.color = r(e.LifestyleLegalURLColor), e.LifestyleLegalURLPosition && document.querySelector(".lifestyle .legal-area").classList.add(e.LifestyleLegalURLPosition), e.LifestyleLegalURL && document.querySelector(".lifestyle").classList.add("with-legal"), a(e.Logo2) ? document.querySelector(".product .productlogo").setAttribute("src", e.Logo2.Url) : (t = document.querySelector(".product .productlogo"), t.parentNode.removeChild(t)), a(e.ProductPackshot) ? (document.querySelector(".product .packshot").setAttribute("src", e.ProductPackshot.Url), document.querySelector(".product .product-area").classList.add(e.ProductAnimationType)) : (t = document.querySelector(".product .packshot"), t.parentNode.removeChild(t)), a(e.CustomAsset1) ? document.querySelector(".product .packshot2").setAttribute("src", e.CustomAsset1.Url) : (t = document.querySelector(".product .packshot2"), t.parentNode.removeChild(t)), a(e.ProductSticker) ? document.querySelector(".product .sticker").setAttribute("src", e.ProductSticker.Url) : (t = document.querySelector(".product .sticker"), t.parentNode.removeChild(t)), document.querySelector(".product .background").style.backgroundColor = r(e.ProductBackgroundColor), document.querySelector(".product .background").style.backgroundImage = a(e.ProductBackground) ? "url(" + e.ProductBackground.Url + " )" : "none", document.querySelector(".product .background").style.border = "1px solid " + r(e.ProductBorder), document.querySelector(".product .logo").style.fill = r(e.ProductLogoColor), document.querySelector(".product .copy-area h1").style.display = e.ProductCopyMain ? "block" : "none", document.querySelector(".product .copy-area h1").innerHTML = e.ProductCopyMain, document.querySelector(".product .copy-area h1").style.color = r(e.ProductCopyMainColor), e.ProductCopyMainPosition && document.querySelector(".product .copy-area").classList.add(e.ProductCopyMainPosition), document.querySelector(".product .copy-area h2").style.display = e.ProductCopySub ? "block" : "none", document.querySelector(".product .copy-area h2").innerHTML = e.ProductCopySub, document.querySelector(".product .copy-area h2").style.color = r(e.ProductCopySubColor), document.querySelector(".product .cta-area button").style.display = e.ProductCTA ? "block" : "none", document.querySelector(".product .cta-area button").innerHTML = e.ProductCTA, "E" === e.ProductCTAColor.substr(-1) ? (document.querySelector(".product .cta-area button").style.color = r(e.ProductCTAColor), document.querySelector(".product .cta-area button").style.backgroundColor = "transparent", document.querySelector(".product .cta-area button").style.borderColor = r(e.ProductCTAColor)) : (document.querySelector(".product .cta-area button").style.color = c(e.ProductCTAColor), document.querySelector(".product .cta-area button").style.backgroundColor = r(e.ProductCTAColor), document.querySelector(".product .cta-area button").style.borderColor = r(e.ProductCTAColor)), e.ProductCTAPosition && document.querySelector(".product .cta-area").classList.add(e.ProductCTAPosition), document.querySelector(".product .legal-area span").style.display = e.ProductLegalURL ? "block" : "none", document.querySelector(".product .legal-area span").innerHTML = e.ProductLegalURL, document.querySelector(".product .legal-area span").style.color = r(e.ProductLegalURLColor), e.ProductLegalURLPosition && document.querySelector(".product .legal-area").classList.add(e.ProductLegalURLPosition), e.ProductLegalURL && document.querySelector(".product").classList.add("with-legal")
       
});




