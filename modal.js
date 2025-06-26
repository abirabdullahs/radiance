// modal.js
// Simple modal for beautiful alerts

function showModal(message, type = "info") {
  let modal = document.getElementById("customModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "customModal";
    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-content">
        <span id="modalIcon"></span>
        <span id="modalMessage"></span>
        <button id="modalClose">OK</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
  // Always re-attach close handlers in case DOM changed
  modal.querySelector("#modalClose").onclick = () => {
    modal.style.display = "none";
  };
  modal.querySelector(".modal-backdrop").onclick = () => {
    modal.style.display = "none";
  };
  // Set icon and message
  const iconSpan = modal.querySelector("#modalIcon");
  if (type === "success") iconSpan.innerHTML = "<span style='font-size:2rem;color:#28a745;'>✔️</span>";
  else if (type === "error") iconSpan.innerHTML = "<span style='font-size:2rem;color:#dc3545;'>⚠️</span>";
  else iconSpan.innerHTML = "<span style='font-size:2rem;color:#0044cc;'>ℹ️</span>";
  modal.querySelector("#modalMessage").textContent = message;
  modal.className = type;
  modal.style.display = "flex";
}

window.showModal = showModal;
