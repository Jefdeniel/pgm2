const EMOJIS_JSON = `./data/emojis.json`;

(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.registerListeners();
      this.updateUI();
    },
    cacheElements() {
      this.$emojisList = document.querySelector(".emojis-list");
      this.$tooltip = document.querySelector(".tooltip");
    },
    registerListeners() {
      this.$emojisList.addEventListener("mousemove", (ev) => {
        const data = this.getEmojiNode(ev.target).querySelector(
          ".emoji__tooltip"
        ).innerHTML;
        if (this.$tooltip.innerHTML !== data) {
          this.$tooltip.innerHTML = data;
        }
        this.$tooltip.style.left = `${ev.pageX}px`;
        this.$tooltip.style.top = `${ev.pageY}px`;
      });
    },
    updateUI() {
      loadJsonByPromise(EMOJIS_JSON)
        .then((data) => {
          this.$emojisList.innerHTML = this.getHTMLForEmojis(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getHTMLForEmojis(emojis) {
      return emojis.map((emoji) => this.getHTMLForEmoji(emoji)).join("");
    },
    getHTMLForEmoji(emoji) {
      return `
      <div class="emoji">
        <span class="emoji__symbol">${emoji.symbol}</span>
        <span class="emoji__title">${emoji.title}</span>
        <span class="emoji__tooltip">
          <code class="emoji__unicode"><pre>${emoji.symbol.unicodeEscape()}</pre></code>
          <span class="emoji_keywords">
            ${emoji.keywords}
          </span>
        </span>
      </div>
      `;
    },
    getEmojiNode(node, depth = 0) {
      if (node && node.classList.contains("emojis")) return null;

      if (node && node.classList.contains("emoji")) {
        return node;
      } else {
        return this.getEmojiNode(node.parentNode, ++depth);
      }
    },
  };
  app.initialize();
})();

