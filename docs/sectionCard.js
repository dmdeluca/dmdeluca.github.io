function createSectionCard(name, links) {
  if (!name) {
    console.error("no name provided for section.");
    return;
  }
  const card = document.importNode($("#section-card")[0].content, true);
  card.querySelector(".section-card-header").innerHTML = name;
  if (links) {
    links.forEach((link, i) => {
      const item = createSectionCardListItem(link);
      card.querySelector("ul.section-card-list").appendChild(item);
    });
  } else {
    console.log("no links provided.");
  }
  return card;
}

function createSectionCardListItem(link) {
  const item = document.importNode(
    $("#section-card-list-item")[0].content,
    true
  );
  item.querySelector(".link").href = link.url;
  item.querySelector(".link").target = link.target;
  item.querySelector(".link").innerHTML = link.active;
  item.querySelector(".inactiveText").innerHTML = link.inactive ?? "";
  return item;
}
