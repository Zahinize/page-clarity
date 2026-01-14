// This runs in the PAGE (main) world
(function () {
  window.googletag = window.googletag || {};
  window.googletag.cmd = [];

  const noop = () => {};

  window.googletag.defineSlot = noop;
  window.googletag.display = noop;
  window.googletag.pubads = () => ({
    enableSingleRequest: noop,
    addEventListener: noop,
    refresh: noop,
  });

  console.log("PageClarity extension invoked");
})();
