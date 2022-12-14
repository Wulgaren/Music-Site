//funkcja ukrywajacej/pokazujacej elementy na stronie
function reveal() {
    //lista wszystkich elementow z klasa reveal
    var reveals = document.querySelectorAll(".reveal");

    //for dla elementow
    for (var i = 0; i < reveals.length; i++) {

        //wysokosc okienka przegladarki
        var windowHeight = window.innerHeight;

        //koordynaty gornej krawedzi elementu
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            //jesli gorna krawedz elementa jest mniejsza od okienka przegladarki - wysokosci elementu to pokazujemy
            reveals[i].classList.add("active");
            reveals[i].classList.remove("disactivate");
        } 
        else if (elementTop == 0) {
            //jesli element jest na samej gorze to nic z nim nie robimy
            reveals[i].classList.remove("active");
            reveals[i].classList.remove("disactivate");
        }
        else {
            //jesli gorna krawedz elementa jest wieksza od okienka przegladarki - wysokosci elementu to chowamy
            reveals[i].classList.remove("active");
            reveals[i].classList.add("disactivate");
        }
    }
}

//dodanie na scrollu funkcji ukrywajacej/pokazujacej gatunki na stronie
$(window).on("scroll", reveal);

//funkcja zatrzymujaca audio
function stopAudio(e) {
    e.data.audio.pause()

    //usuwanie eventu na kliknieciu
    $(window).off("click", stopAudio)
}

function playAudio(path) {
    let audio = new Audio(path)
    audio.play()

    //odstep czasowy zeby audio moglo sie wlaczyc
    setTimeout(function() {
        //pokliknieciu audio sie zatrzymuje
        $(window).on("click", {audio: audio}, stopAudio)
    }, 5)
}

//funkcja wykonujaca sie jak sie wszystko zaladuje
$(document).ready(function() {

    //dodanie funkcji wywolujacej sie po kliknieciu na kazdy guzik "wiecej"
    $('.modalBtn').each(function () {
        $(this).click(function () {
            let htmlToAppend = ""

            //sprawdzanie ktory guzik byl klikniety po id
            switch ($(this).attr('id')) {
                case "rockModal":
                    htmlToAppend = `W rocku najwa??niejsze s?? <span class="underline" onclick="playAudio('./assets/rockguitar.wav')">gitary</span> i <span class="underline" onclick="playAudio('./assets/rockdrums.mp3')">perkusja</span>. Gitary cz??sto u??ywaj?? r????nych efekt??w, takich jak przester albo echo.`
                    break
                case "popModal":
                    htmlToAppend = `Pop mo??e wykorzystywa?? r????ne instrumenty i d??wi??ki, wi??c trudno okre??li?? jeden wyznaczaj??cy d??wi??k. Pop cz??sto u??ywa <span class="underline" onclick="playAudio('./assets/popProgression.mp3')">prostych akord??w i progresji</span>.
                    `
                    break
                case "rapModal":
                    htmlToAppend = `Rap na przestrzeni lat bardzo si?? zmieni??, <span class="underline" onclick="playAudio('./assets/hiphopoldschool.mp3')">pocz??wszy od gangsterskich beat??w z USA</span> a?? do <span class="underline" onclick="playAudio('./assets/hiphoptrap.mp3')">trapu</span>. Powszechne sta??o si?? r??wnie?? programu Autotune, kt??ry s??u??y do przetworzeniu g??osu, tak aby by?? jak najbardziej w tonacji, daj??c mu specyficzny d??wi??k.`
                    break
                case "phonkModal":
                    htmlToAppend = `Najbardziej rozpoznawalnymi samplami (czyli fragmentu wcze??niej dokonanego nagrania muzycznego) to 
                        <span class="underline" onclick="playAudio('./assets/Cowbell808.aif')">cowbell</span> i wokale rapowane wzi??te z utwor??w podgatunku hip-hopowego 
                        <span class="underline" onclick="playAudio('./assets/MemphisRap.aif')">"Memphis Rap".</span>`
                    break
                case "houseModal":
                    htmlToAppend = `House jest znany z <span class="underline" onclick="playAudio('./assets/housebeat.aif')">perkusji</span> gdzie stopka (basowa cz?????? perkusji) uderza na ka??d?? nut?? jak i z <span class="underline" onclick="playAudio('./assets/housepiano.aif')">skocznego pianina</span>.`
                    break
                case "jazzModal":
                    htmlToAppend = `Jazz jest najbardziej rozpoznawanalny dzi??ki u??yciu atypowych akord??w muzycznych zawieraj??cych wi??cej ni?? 3 nuty (podstawowe akordy sk??adaj?? si?? z 3 nut) i typowych dla tego gatunku progresji akord??w (czyli sekwencji paru akord??w, kt??re zazwyczaj?? tworz?? ca??e utwory). Jazz jest rozpoznawalny tak??e przez cz??sto u??ywane w nim instrumenty, takie jak:
                        <ul>
                            <li class="underline" onclick="playAudio('./assets/JazzPiano.mp3')">Pianino</li>
                            <li class="underline" onclick="playAudio('./assets/Sax.wav')">Saksofon</li>
                            <li class="underline" onclick="playAudio('./assets/SnareBrush.wav')">"P??dzle" grane na werblach</li>
                        </ul>`
                    break
                case "rnbModal":
                    htmlToAppend = `R&B s??ynie z wolniejszego tempa, <span class="underline" onclick="playAudio('./assets/rnbbeat.mp3')">stonowanej perkusji</span> i <span class="underline" onclick="playAudio('./assets/rnbchords.mp3')">pe??nych uczucia akord??w.</span>`
                    break
                case "indieModal":
                    htmlToAppend = `Gatunek indie tak jak pop nie ma zdefiniowanego d??wi??ku, ale cz??sto wyr????nia si?? stonowanym brzmieniem.`
                    break
            }

            //czyszczenie i dodawanie tekstu do popupa
            $('#modal-text').empty()
            $('#modal-text').append(htmlToAppend)
        })
    })
})