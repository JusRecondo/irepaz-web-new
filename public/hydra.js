var hydra = new Hydra({
    canvas: document.getElementById("hydraCanvas"),
    detectAudio: false,
});
noise().blend(solid(0.2, 0, 0.3,1)).modulate(noise(), 0.5).pixelate(20, 20).out()