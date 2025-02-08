const febHolidays = [
    "Dear bhaspondi girl, please feel it 😂",
    "This is the cycle of love 😈",
    "This Promise Day, I promise to laugh with you in the good times",
    "My love for you is boundless, unconditional. 🤩",
    "I promise to love you the same, without ego and intention 🤗",
    " I promise to cherish what we have and create lifetime of memories together.❤",
    "I promise to be your partner-in-crime, confidant, and biggest cheerleader.❤️",
    "I promise to keep irritating you✔",
    "I promise to keep making you say",
    "'Bohot khoon jalate ho mera'",
    "But always remember",
    "I will always be there for you",
    "No matter how far we are🥰",
    "I promise I will never multi-thread on you",
    "You're one pretty, cute, funny,",
    "sweet but a lot dumb girl. 🤞✍",
    "In simple words I laugh a lot with you.😍",
    "And ofcourse I love to roast you.",
    "But you take those roast bravely❤️",
    "That's what makes us better together🥺",
    "I will support you in all your dreams. 🤞✔",
    "Don't ever think that you're alone💓",
    "You are a very special person in my life🥰",
    "I don't want to fight with you 😒",
    "And trust me I dont want anyone else 🥰",
    "But you fight with me a lot😞",
    "But still I prefer to be with you.",
    "I still try to make efforts💖",
    "I know one day you'll realise you do matter to me.",
    "I hope something really good happens 🤨",
    "It feels good to be with you",
    "We are virtually connencted right now💓",
    "There's some hardships, 😢",
    "But we can overcome them 🥰",
    "and it made me realised how",
    "important you are in my life❤️",
    "This complete love cycle is just for you, 😘",
    "my unconditional love,my private variable💖",
    "Please take care of love who really loves you❤",
    "I'm binary in love; you're the one and only '1 in my life",
    "I pray you achieve every thing you've wanted🙏",
    "Love You 3000❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = 1;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
