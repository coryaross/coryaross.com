const cases = {
  shima: {
    title: "Shima Capital",
    body:
      "Led marketing, communications, brand strategy, content, social, PR, thought leadership, and event strategy for an active early-stage Web3 venture firm with 180+ portfolio companies.",
    role: "CMO, July 2022-2026.",
    focus: "Fund launch, portfolio company support, founder narrative, media strategy, social growth, KOL relationships, and repeatable GTM playbooks.",
    proof:
      "Launched Shima's $200M fund with an exclusive in Blockworks and follow-on coverage in CoinDesk, Cointelegraph, BeInCrypto, and other major crypto publications."
  },
  tribal: {
    title: "Tribal Finance",
    body:
      "Stepped into a distressed Web3/RWA project where token delays, exchange complications, investor pressure, and community frustration had damaged trust.",
    role: "Interim executive lead, acting CEO / COO / CMO via Shima Capital.",
    focus: "Stakeholder management, operating asset control, community rebuild, communications cadence, exchange relationships, and market visibility.",
    proof:
      "Helped release a token that had been trapped for roughly two years while shifting community sentiment from openly hostile to cautiously constructive."
  },
  findora: {
    title: "Findora",
    body:
      "First senior marketing hire for an EVM-compatible Layer 1 using zero-knowledge proofs to enable on-chain confidentiality for stablecoins, wrapped tokens, NFTs, and DeFi.",
    role: "Director of Marketing, July 2021-July 2022.",
    focus: "Protocol launch strategy, Rialto Bridge naming and launch, EVM, staking, cross-chain education, community, reputation management, and conference strategy.",
    proof:
      "Grew X from roughly 10k to 100k+ followers in under a year and delivered about 30k new followers plus a 30x website traffic spike from the Rialto launch campaign."
  },
  mogul: {
    title: "Mogul Productions",
    body:
      "Joined as the first official marketing hire for a decentralized film financing and movie-based NFT platform working with recognizable IP, creators, and entertainment partners.",
    role: "Head of Marketing, April 2021-July 2021.",
    focus: "Crypto-native campaigns, entertainment-facing launches, community, content, PR, partnerships, social, email, and owned media.",
    proof:
      "Played a key role in a three-hour global livestream across multiple time zones that drew roughly 400k viewers and helped drive a $180k NFT sale."
  },
  peerplays: {
    title: "Peerplays Blockchain",
    body:
      "Joined as the first marketing employee and fourth overall hire at a blockchain-based gaming software developer with multiple on-chain product launches.",
    role: "Head of Marketing, October 2017-April 2021.",
    focus: "Brand, messaging, positioning, GTM, social, newsletters, product launches, niche ad campaigns, design guidelines, and development collaboration.",
    proof:
      "Helped scale the company to 20+ employees, added roughly 25k X followers from near zero, and grew combined monthly newsletter lists to 5k+ subscribers."
  }
};

const modal = document.querySelector("#case-modal");
const modalTitle = document.querySelector("#modal-title");
const modalBody = document.querySelector("#modal-body");
const modalRole = document.querySelector("#modal-role");
const modalFocus = document.querySelector("#modal-focus");
const modalProof = document.querySelector("#modal-proof");
let previousFocus = null;

function openCase(caseKey) {
  const item = cases[caseKey];
  if (!item) return;

  previousFocus = document.activeElement;
  modalTitle.textContent = item.title;
  modalBody.textContent = item.body;
  modalRole.textContent = item.role;
  modalFocus.textContent = item.focus;
  modalProof.textContent = item.proof;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.querySelector(".modal-close").focus();
}

function closeCase() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (previousFocus) previousFocus.focus();
}

document.querySelectorAll("[data-case]").forEach((button) => {
  button.addEventListener("click", () => openCase(button.dataset.case));
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeCase);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeCase();
  }
});
