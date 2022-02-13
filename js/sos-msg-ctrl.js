$(document).ready(function() {

  function toggleSidebar() {
    // $("#sos-msg-sidepanelCollapse").toggleClass("active");  // UI: button or badge
    $("#content").toggleClass("move-to-right");
    // $(".sidebar-item").toggleClass("active");
  }

  /*
  function toggleSidebarClose() {
    $("#content").toggleClass("move-to-left");
  }
  */

  // UI: button or badge manipulation
  $("#sos-msg-sidepanelCollapse").on("click tap", function() {
    toggleSidebar();
  });

  // UI: button or badge manipulation
  $(".sos-msg-sidepanel-close-btn").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});

