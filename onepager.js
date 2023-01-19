let Index = document.getElementById('index');
// alle hoverable items ophalen
let allHovers = document.querySelectorAll('.hover');

// voor elke hoverable items iets doen (allHovers zijn alle items, e = 1 item)
allHovers.forEach(e => {

    // pakt de id van de item (hover_0, hover_1, hover_2 etc)
    let id = e.id
    // alleen de laatste character pakken uit de id, zodat er een index is (hover_0 word 0, hover1 word 1 etc)
    let index = id.charAt(id.length - 1);

    // voor elke item een event listener toevoegen, 'listens for an event', hij wacht tot er 'mouseenter' plaats vindt
    e.addEventListener('mouseenter', e => {
        // als de event plaat vindt, dan wordt alles hieronder uitgevoerd
        Index.style.top = 100 * index + 'px';
        let allScreens = document.querySelectorAll('.screen');
        allScreens.forEach(e => {
            e.classList.remove('visible')
        })
        let nowVisible = document.getElementById('screen_' + index);
        nowVisible.classList.add('visible');
    })
})

