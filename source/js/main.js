document.addEventListener("DOMContentLoaded", function() {
  // Load library
  var gui = require("nw.gui");

  // Reference to window
  var win = gui.Window.get();

  // Create menu container
  var Menu = new gui.Menu({
    type: "menubar"
  });

  //initialize default mac menu
  Menu.createMacBuiltin("Duolingo");

  // Get the root menu from the default mac menu
  var rootMenu = Menu.items[0].submenu;
  var windowMenu = Menu.items[2].submenu;

  // Append new item to root menu
  windowMenu.insert(
    new gui.MenuItem({
      type: "normal",
      label: "Toggle Fullscreen",
      key: "F",
      modifiers: "cmd",
      click : function () {
        win.toggleFullscreen();
      }
    })
  );

  windowMenu.insert(
    new gui.MenuItem({
      type: "normal",
      label: "Reload App",
      key: "r",
      modifiers: "cmd",
      click : function () {
        // Reload node-webkit instance
        win.reload();

        // Native javascript reload event only reloads the page
        // location.reload(true);
      }
    })
  );

  // Remove about Node Webkit
  rootMenu.removeAt(0);

  // Append Menu to Window
  gui.Window.get().menu = Menu;
});