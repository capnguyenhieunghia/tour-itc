const scenes = {
    0: './img/hinh3.jpg',
};

const viewer = pannellum.viewer('panorama', {
    type: 'equirectangular',
    panorama: scenes[0],
    autoLoad: true,
    showControls: true,
    hfov: 100,
    vOffset: 0,
});

function autoRotate() {
    setInterval(() => {
        viewer.setYaw(viewer.getYaw() + 5);
    }, 100);
}

autoRotate();

// 
document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

const devtools = /./;
Object.defineProperty(devtools, 'toString', {
    get: function () {
        return () => { };
    }
});
console.log('%c', devtools);
