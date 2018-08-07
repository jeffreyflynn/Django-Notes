let x = 0, y = 65;


export const display_note = title => {
  const tab_length = Math.floor(window.innerWidth / 5);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (x + tab_length > window.innerWidth) x = 0;

  ctx.beginPath();
  ctx.moveTo(0, y);

  ctx.lineTo(x, y);                   // line to beginning of tab
  ctx.lineTo(x + 20, y - 45);         // diagonal line up for tab
  ctx.lineTo(x + tab_length, y - 45); // top of tab
  ctx.lineTo(x + tab_length + 20, y); // diagonal line down for tab
  ctx.lineTo(window.innerWidth, y);   // to end of file

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#000000";
  ctx.stroke();

  const gradient = ctx.createLinearGradient(x, y-45, x, y);
  gradient.addColorStop(0.2, "#F1D592"); // OG
  gradient.addColorStop(0.9, "#FAE1A5");

  ctx.fillStyle = gradient;
  ctx.fill();

  const grad = ctx.createLinearGradient(x, y, x, window.innerHeight - y);
  grad.addColorStop(0.1, "#FAE1A5")
  grad.addColorStop(1.0, "#FFEBB9")

  ctx.fillStyle = grad;
  ctx.fillRect(0, y, window.innerWidth, window.innerHeight - y);

  ctx.font="25px sans-serif";
  ctx.fillStyle = "#000000";
  ctx.fillText(title, x + 60, y - 10, tab_length);

  x += tab_length;
  y += 20;

  document.body.appendChild(canvas);
}