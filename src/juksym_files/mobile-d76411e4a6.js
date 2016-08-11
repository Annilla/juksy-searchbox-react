function onYouTubePlayerAPIReady() { $(document).trigger("playerAPI:ready") }

function showDFP(t) { console.debug("Loading DFP:", t);
    var e = $("#" + t);
    googletag.cmd.push(function() { googletag.pubads().display(e.data("adunit"), e.data("dimensions"), t) }) }

function vponCallbackMethod(t) {
    if (t) return !1 }
window.Juksy = window.Juksy || { csrfToken: null, mod: {} };
var csrfToken = function() {
        return Juksy.csrfToken || $('meta[name="csrf-token"]').attr("content") },
    lareq = function(t) {
        return t.set({ "X-Requested-With": "XMLHttpRequest" }), "POST" !== t.method && "PUT" !== t.method && "DELETE" !== t.method || t.set({ "X-CSRF-TOKEN": csrfToken() }), t },
    module = function(t, e) {
        return e = e || !1, (e || _.isUndefined(Juksy.mod[t])) && (Juksy.mod[t] = $('[data-module~="' + t + '"]')), Juksy.mod[t] },
    template = function(t) {
        return Handlebars.compile($(t).html()) };
$(function() { $.ajaxSetup({ dataType: "json", headers: { "X-CSRF-TOKEN": csrfToken() } }) }), $(function() {
    function t(t) { u = l.getCurrentTime(), c = l.getDuration() - 1, $(".videoControl .time .current").html(o(u)), $(".videoControl .time .entire").html(o(c)) }

    function e(t) { 1 == t.data ? ($(".videoPlayer .play-button").hide(), $(".videoPlayer .play-button").closest(".youtube-player").find(".youtube-thumb").hide(), $(".videoControl .playBtn").css({ "background-image": "url(img/video/play_btn_hover.png)" }), l.unMute(), $(".videoControl .unMuteBtn").css({ "background-image": "url(img/video/unmute_btn_hover.png)" }), $(".videoControl .muteBtn").css({ "background-image": "url(img/video/mute_btn.png)" }), $(".videoControl .volume").slider("value", l.getVolume()), d = setInterval(n, 1e3), s = !0) : 2 != t.data && 0 != t.data || (clearInterval(d), $(".videoControl .playBtn").css({ "background-image": "url(img/video/play_btn.png)" }), $(".videoControl .unMuteBtn").css({ "background-image": "url(img/video/unmute_btn.png)" }), $(".videoControl .muteBtn").css({ "background-image": "url(img/video/mute_btn.png)" }), 0 == t.data && ($(".videoPlayer .play-button").show(), $(".videoPlayer .play-button").closest(".youtube-player").find(".youtube-thumb").show()), s = !1) }

    function o(t) {
        var e = t,
            o = Math.floor(e / 3600),
            n = Math.floor((e - 3600 * o) / 60),
            i = Math.floor(e - 3600 * o - 60 * n);
        o < 10 && (o = "0" + o), n < 10 && (n = "0" + n), i < 10 && (i = "0" + i);
        var a = o + ":" + n + ":" + i;
        return "00" == o && (a = n + ":" + i), a }

    function n() { u = l.getCurrentTime(), $(".videoControl .time .current").html(o(u)), $(".videoControl .progress .bar").slider("value", Math.floor(u / c * 100)) }
    var i = $(".youtube-player");
    if (i.length) {
        var a = document.createElement("script");
        a.src = "https://www.youtube.com/player_api";
        var r = document.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(a, r);
        var l, u, c, d, s = !1;
        $(document).on("playerAPI:ready", function() { l = new YT.Player("player", { height: "410", width: "730", playerVars: { autoplay: 0, controls: 0, showinfo: 0, rel: 0, modestbranding: 0, fs: 0 }, videoId: i.data("id"), events: { onReady: t, onStateChange: e } }) }), i.each(function() { $(this).append('<img class="youtube-thumb" src="https://img.youtube.com/vi/' + $(this).data("id") + '/hqdefault.jpg" /><div class="play-button"></div>') }), $(".play-button").click(function() { s === !1 && ($(this).hide(), $(this).closest(".youtube-player").find(".youtube-thumb").hide(), l.playVideo()) }) } }), $(function() { module("dotdotdot").each(function() { $(this).dotdotdot({ ellipsis: "...", wrap: "letter", height: $(this).data("height") }) }) }), $(function() { $(document).on("googledfp:init", function() { module("googledfp").each(function() { showDFP(this.id) }) }) }), $(function() {
    var t = { threshold: 200 },
        e = function() { $(".fb-like-btn").each(function() { $.belowthefold(this, t) || $.rightoffold(this, t) || $(this).trigger("appear") }) };
    $(window).scroll(function() {
        return e() }), $(document).on("facebook:init", function() { $.ajaxSetup({ cache: !0 }), $.getScript("//connect.facebook.net/zh_TW/sdk.js", function() { FB.init({ appId: "608477045879026", version: "v2.4", xfbml: !0 }), $(".fb-like-btn").each(function() { $(this).one("appear", function() {
                    if (!this.loaded) {
                        var t = $(this).prop("loaded", !0);
                        $("<fb:like/>").attr(t.data()).insertAfter(this);
                        FB.XFBML.parse(t.parent().get(0)) } }) }), e() }) }) }), $(function() { module("slider").each(function() { $("#slider1_container").attr("data-start-index", Math.floor(3 * Math.random() + 1) - 1);
        var t = $(this),
            e = t.data(),
            o = { $AutoPlay: _.get(e, "autoPlay", !1), $AutoPlaySteps: _.get(e, "autoPlaySteps", 1), $AutoPlayInterval: _.get(e, "autoPlayInterval", 3e3), $SlideDuration: _.get(e, "slideDuration", 500), $SlideWidth: _.get(e, "slideWidth", 210), $SlideSpacing: _.get(e, "slideSpacing", 0), $DisplayPieces: _.get(e, "displayPieces", 5), $StartIndex: _.get(e, "startIndex", 0), $ArrowNavigatorOptions: { $Class: $JssorArrowNavigator$, $ChanceToShow: _.get(e, "chanceToShow", 1), $AutoCenter: 2, $Steps: _.get(e, "arrowNavSteps", 3) } };
        _.has(e, "slideHeight") && (o.$SlideHeight = _.get(e, "slideHeight")), _.get(e, "bullet", !1) && (o.$BulletNavigatorOptions = { $Class: $JssorBulletNavigator$, $ChanceToShow: 2, $AutoCenter: 1, $Steps: 1, $Lanes: 1, $SpacingX: 20, $SpacingY: 0, $Orientation: 1 }), new $JssorSlider$(t.attr("id"), o) }) }), $(function() {
    if (module("youtube").on("youtube:loaded", function() { module("youtube").each(function() {
                var t = $(this),
                    e = t.data(),
                    o = t.find(".title, .play-button, .youtube-thumb"),
                    n = new YT.Player(e.playerId, { videoId: e.videoId, height: e.height, width: e.width, playerVars: { autoplay: 0, controls: 2, showinfo: 0, rel: 0, modestbranding: 0, fs: 0 }, events: { onStateChange: function(t) { t.data === YT.PlayerState.ENDED && o.show() } } });
                t.on("click", ".play-button", function() { o.hide(), n.playVideo() }) }) }), module("youtube").length) {
        var t = document.createElement("script");
        t.src = "https://www.youtube.com/player_api";
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e), window.onYouTubePlayerAPIReady = function() { module("youtube").trigger("youtube:loaded") } } }), $(function() { $(document).on("vpon:init", function() { vat.addPlacement("vpon_ad"), vat.addCallback("vpon_ad", "load", vponCallbackMethod), vat.load() }) }), $(function() { $(document).on("fastSearch:init", function() {
        var t = $(".searchRight"),
            e = $(".newsearch_close"),
            o = $(".newsearch_close, .newsearch_cover"),
            n = $(".newsearch_cover .black");
        t.on("click", function() { o.fadeIn() }), e.on("click", function() { o.fadeOut() }), n.on("click", function() { o.fadeOut() }) }) }), $(function() {
    var t = $(".innerNav nav > a"),
        e = new Array(t.size()),
        o = $(".innerNav .arrowL"),
        n = $(".innerNav .arrowR"),
        i = 2 * o.width(),
        a = function() {
            var e = t.filter("[data-category-id=" + JUKSY.categoryId + "]");
            return e.size() ? e.eq(0) : t.first() },
        r = function(t) {
            var o = e[t.index() - 1];
            return o < 0 ? 0 : o },
        l = function() {
            var t = $("#slider_container").scrollLeft(),
                e = $(".innerNav nav").width() - ($(window).width() - i),
                a = "canMove";
            0 == t ? (o.removeClass(a), n.addClass(a)) : t == e ? (o.addClass(a), n.removeClass(a)) : (o.addClass(a), n.addClass(a)) },
        u = function(t) {
            var e = $("#slider_container");
            e.scrollLeft();
            $("#slider_container").animate({ scrollLeft: "+=" + t * e.width() }, 500, "swing", function() { l() }) };
    $(document).on("subcategory:init", function() {
        if (JUKSY.categoryId) {
            var o, n = $(".innerNav").show(),
                c = $(".innerNavsub").show(),
                d = $(".slider4_container"),
                s = a();
            d.width($(window).width() - i), t.each(function(t) { e[t] = (e[t - 1] || 0) + $(this).outerWidth() }), $("nav", n).width(e[t.size() - 1]), s.addClass("now").siblings().removeClass("now"), $("#slider_container").scrollLeft(r(s)), l(), d.bind("touchstart", function(t) { o = setInterval(l, 500) }).bind("touchend", function(t) { clearInterval(o), l() }), $(".innerNav .arrowL, .innerNav .arrowR").on("click", function() { u($(this).data("direction")) }), t.filter(".hasSub").each(function(t, e) { $(this).on("click", function(e) { $("ul", c).hide().eq(t).show(), e.preventDefault() }) }) } }) }), $(function() { $(document).on("menu:init", function() {
        var t = new $.slidebars;
        $(".openMenu").on("click", function() { t.slidebars.toggle("left") }) }) }), $(function() { $(document).on("videoImg:init", function() { $(".videoImg").each(function() { $(this).prepend('<img src="//img.youtube.com/vi/' + $(this).data("id") + '/hqdefault.jpg" />'), $(".videoImg").height(9 * $(".videoImg").width() / 16 - 3), $(".videoImg img").css("top", 3 * -$(".videoImg").width() / 32 - 1) }) }) }), $(function() {
    function t(t, e) { e.slideToggle("normal", function() { e.is(":visible") ? t.transition({ rotate: "180deg" }) : t.transition({ rotate: "0deg" }) }) }
    $("nav ul li").not(".notToggle").on("click", function() {
        var e = $(this).find(">ul"),
            o = e.parent().find(".hasSub");
        t(o, e) }), $("nav ul li.notToggle h3").on("click", function() {
        var e = $("nav ul li.notToggle h3 .hasSub"),
            o = $("nav ul li.notToggle .subMenu");
        t(e, o) }), $("nav ul li.notToggle h3").trigger("click") }), $(function() {
    function t(t) {
        var e = t.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);
        return e && { protocol: e[1], host: e[2], hostname: e[3], port: e[4], pathname: e[5], search: e[6], hash: e[7] } }

    function e(t) {
        return /^\/\//.test(t) ? t : "//static.juksy.com" + t }
    $(document).on("image:lazyload", function() { $("img[data-src]").one("appear", function(o) {
            var n, i = $(this),
                a = i.data("src"),
                r = !("lazyImage" !== i.data("module") && "noMask" !== i.data("module")),
                l = "lazyImage" == i.data("module") ? "article" : "nomask";
            if (r && /^https?\:/i.test(a)) {
                var u = t(a);
                n = /juksy\.com$/i.test(u.hostname) ? e("/static/" + l + u.pathname) : a } else n = e((r ? "/static/" + l : "") + (/^\//.test(a) ? a : "/" + a));
            i.attr("data-original", n) }).lazyload({ threshold: 200 }) }) });
var JUKSY = JUKSY || { pageType: null, isCollection: !1, is18up: !1 };
$(function() { JUKSY.pageType = $('meta[property="juksy:type"]').attr("content"), JUKSY.is18up = !("true" !== $('meta[property="juksy:adult"]').attr("content")), JUKSY.isCollection = !("true" !== $('meta[property="juksy:collection"]').attr("content")), JUKSY.categoryId = $('meta[property="juksy:category"]').attr("content"), JUKSY.articleId = $('meta[property="juksy:article"]').attr("content") }), $(function() {
    var t = $(document);
    $(window).width();
    t.on("popup:dfp", function(t, e) { "article" !== JUKSY.pageType || 0 === $(e).length || $.cookie("popupAd:" + e) || ($.cookie("popupAd:" + e, !0, { path: "/", expires: Date.now() + 36e5 }), $(e).css({ display: "inline-block" }).siblings(".popup-content").css({ display: "none" }), $("#cover").addClass("active")) }), t.on("popup:bottomad", function() {
        var t = $(window),
            e = $(document),
            o = !1;
        t.scroll(function() {
            var n = t.scrollTop(),
                i = e.height() - 1.3 * t.height();!o && n > i && (o = !0, e.trigger("popup:dfp", ["#bottomAd"])) }) }), t.on("popup:alert", function() {
        var t = $("#alert");
        t.length && ($.colorbox({ href: "#alert", inline: !0, width: 320, height: 200, scrolling: !1, fixed: !0, closeButton: !1, overlayClose: !1 }), $("#alert .btn").click(function() { $.colorbox.close() })) }), t.on("popup:is18up", function() { JUKSY.is18up && !$.cookie("is18up") && $.colorbox({ html: '<div id="content18"><div class="title">本區域為限制級<span class="row2">未滿18歲不得瀏覽!</span></div><ul class="btn"><li>進入頁面</li><li>回到首頁</li></ul></div>', width: 300, height: 250, scrolling: !1, fixed: !0, closeButton: !1, overlayClose: !1, onComplete: function() { $("#content18 ul.btn li:first-child").click(function() { $.cookie("is18up", !0, { path: "/", expires: Date.now() + 36e5 }), $.colorbox.close() }), $("#content18 ul.btn li:last-child").click(function() { window.location = "/" }) } }) }), t.on("advert:cover", function() {
        var e = function() {
            var o = !JUKSY.is18up || $.cookie("is18up"),
                n = window.ONEAD_is_window_onload,
                i = (window.ONEAD || {}).flag_cover === !1;
            o && n && !i ? t.trigger("popup:dfp", ["#popupAd"]) : setTimeout(e, 100) };
        e() }) }), $(function() { $(".fbShare").on("click", function() { FB.ui({ method: "share", href: window.location.href }, function(t) {}) }) }), $(function() {
    var t = $(".articleMain");
    if (t.length) {
        var e = $("iframe[src^='https://www.youtube.com'], iframe[src^='//www.youtube.com']");
        e.each(function() { $(this).data("aspectRatio", this.height / this.width).removeAttr("height").removeAttr("width") }), $(window).resize(function() {
            var o = t.width();
            e.each(function() {
                var t = $(this);
                t.width(o).height(o * t.data("aspectRatio")) }) }).resize() } }), $(function() {
    var t = $(".articleMain");
    if (t.length) {
        var e = $(".articleMain img");
        e.each(function() { $(this).removeAttr("style"), $(this).attr({ width: "100%", height: "auto" }) }) } }), "undefined" != typeof googletag && googletag.cmd.push(function() { googletag.pubads().addEventListener("slotRenderEnded", function(t) { "dfp_320_480_popup" != t.slot.getSlotElementId() || t.isEmpty || $(document).trigger("advert:cover"), "dfp_300_250_popup" != t.slot.getSlotElementId() || t.isEmpty || $(document).trigger("popup:bottomad") }) }), $(function() {
    var t = $(document);
    t.trigger("popup:alert"), t.trigger("popup:is18up"), t.trigger("googledfp:init"), t.trigger("image:lazyload"), t.trigger("facebook:init"), t.trigger("menu:init"), t.trigger("subcategory:init"), t.trigger("videoImg:init"), t.trigger("image:add"), t.trigger("fastSearch:init") });
