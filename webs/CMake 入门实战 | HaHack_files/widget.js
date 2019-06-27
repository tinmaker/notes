(function(theWindow) {
  var Swiftype = theWindow.Swiftype || (theWindow.Swiftype = {});
  Swiftype.root_url = Swiftype.root_url || "//search-api.swiftype.com";
  Swiftype.key = "BsgGvhRSS4dup6x1hXXE";
  Swiftype.inputElement = "#st-search-input";
  Swiftype.attachElement = "#st-search-input";
  Swiftype.renderStyle = "tab";
  Swiftype.searchPerPage = 10;
  Swiftype.autocompleteResultLimit = 10;

  // Unset optional configuration that may have been set by the old embed or attempted customization
  Swiftype.resultPageURL = undefined;
  Swiftype.resultContainingElement = null;
  Swiftype.disableAutocomplete = false;




  var executeCommand = theWindow[theWindow["SwiftypeObject"]];

  executeCommand("loadStyleSheet", "//s.swiftypecdn.com/assets/swiftype_nocode-841601ba635e8ac17871e4c70b068be7.css");
  executeCommand("loadScript", "//s.swiftypecdn.com/assets/swiftype_nocode-f95064ea8680552fbb5e2b326945412a.js");

})(window);
