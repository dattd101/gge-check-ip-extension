async function fetchIP() {
  const ipDiv = document.getElementById("ip");
  ipDiv.textContent = "Fetching...";
  try {
    const res = await fetch("https://ifconfig.me/ip");
    const ip = await res.text();
    ipDiv.textContent = ip.trim();
  } catch (err) {
    ipDiv.textContent = "Error fetching IP";
  }
}

document.getElementById("refresh").addEventListener("click", fetchIP);

// Tự load IP khi mở popup
fetchIP();
