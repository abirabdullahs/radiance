// Interactive Periodic Table Data & Logic
const elements = [
  { number: 1, symbol: 'H', name: 'Hydrogen', group: 1, period: 1, category: 'nonmetal', info: 'Lightest element. Colorless, odorless gas.' },
  { number: 2, symbol: 'He', name: 'Helium', group: 18, period: 1, category: 'noble gas', info: 'Inert, colorless, odorless gas.' },
  { number: 3, symbol: 'Li', name: 'Lithium', group: 1, period: 2, category: 'alkali metal', info: 'Soft, silvery metal. Used in batteries.' },
  { number: 4, symbol: 'Be', name: 'Beryllium', group: 2, period: 2, category: 'alkaline earth metal', info: 'Hard, gray metal.' },
  { number: 5, symbol: 'B', name: 'Boron', group: 13, period: 2, category: 'metalloid', info: 'Black-brown solid.' },
  { number: 6, symbol: 'C', name: 'Carbon', group: 14, period: 2, category: 'nonmetal', info: 'Basis of life. Found in all living things.' },
  { number: 7, symbol: 'N', name: 'Nitrogen', group: 15, period: 2, category: 'nonmetal', info: 'Colorless, odorless gas. 78% of air.' },
  { number: 8, symbol: 'O', name: 'Oxygen', group: 16, period: 2, category: 'nonmetal', info: 'Essential for respiration.' },
  { number: 9, symbol: 'F', name: 'Fluorine', group: 17, period: 2, category: 'halogen', info: 'Pale yellow gas. Highly reactive.' },
  { number: 10, symbol: 'Ne', name: 'Neon', group: 18, period: 2, category: 'noble gas', info: 'Inert gas. Used in neon signs.' },
  { number: 11, symbol: 'Na', name: 'Sodium', group: 1, period: 3, category: 'alkali metal', info: 'Soft, reactive metal. Table salt component.' },
  { number: 12, symbol: 'Mg', name: 'Magnesium', group: 2, period: 3, category: 'alkaline earth metal', info: 'Light, strong metal. Used in fireworks.' },
  { number: 13, symbol: 'Al', name: 'Aluminum', group: 13, period: 3, category: 'post-transition metal', info: 'Lightweight, corrosion-resistant metal.' },
  { number: 14, symbol: 'Si', name: 'Silicon', group: 14, period: 3, category: 'metalloid', info: 'Used in electronics and glass.' },
  { number: 15, symbol: 'P', name: 'Phosphorus', group: 15, period: 3, category: 'nonmetal', info: 'Essential for life. Used in fertilizers.' },
  { number: 16, symbol: 'S', name: 'Sulfur', group: 16, period: 3, category: 'nonmetal', info: 'Yellow solid. Used in sulfuric acid.' },
  { number: 17, symbol: 'Cl', name: 'Chlorine', group: 17, period: 3, category: 'halogen', info: 'Greenish-yellow gas. Disinfectant.' },
  { number: 18, symbol: 'Ar', name: 'Argon', group: 18, period: 3, category: 'noble gas', info: 'Inert gas. Used in light bulbs.' },
  { number: 19, symbol: 'K', name: 'Potassium', group: 1, period: 4, category: 'alkali metal', info: 'Soft, reactive metal. Essential nutrient.' },
  { number: 20, symbol: 'Ca', name: 'Calcium', group: 2, period: 4, category: 'alkaline earth metal', info: 'Important for bones and teeth.' },
  { number: 21, symbol: 'Sc', name: 'Scandium', group: 3, period: 4, category: 'transition metal', info: 'Soft, silvery metal. Used in alloys.' },
  { number: 22, symbol: 'Ti', name: 'Titanium', group: 4, period: 4, category: 'transition metal', info: 'Strong, light metal. Used in aircraft.' },
  { number: 23, symbol: 'V', name: 'Vanadium', group: 5, period: 4, category: 'transition metal', info: 'Hard, silver-gray metal. Used in steel.' },
  { number: 24, symbol: 'Cr', name: 'Chromium', group: 6, period: 4, category: 'transition metal', info: 'Shiny, hard metal. Used in plating.' },
  { number: 25, symbol: 'Mn', name: 'Manganese', group: 7, period: 4, category: 'transition metal', info: 'Hard, brittle metal. Used in steel.' },
  { number: 26, symbol: 'Fe', name: 'Iron', group: 8, period: 4, category: 'transition metal', info: 'Main component of steel.' },
  { number: 27, symbol: 'Co', name: 'Cobalt', group: 9, period: 4, category: 'transition metal', info: 'Used in magnets and batteries.' },
  { number: 28, symbol: 'Ni', name: 'Nickel', group: 10, period: 4, category: 'transition metal', info: 'Corrosion-resistant metal. Coins.' },
  { number: 29, symbol: 'Cu', name: 'Copper', group: 11, period: 4, category: 'transition metal', info: 'Excellent conductor. Used in wiring.' },
  { number: 30, symbol: 'Zn', name: 'Zinc', group: 12, period: 4, category: 'post-transition metal', info: 'Used to galvanize steel.' },
  { number: 31, symbol: 'Ga', name: 'Gallium', group: 13, period: 4, category: 'post-transition metal', info: 'Melts in your hand. Used in electronics.' },
  { number: 32, symbol: 'Ge', name: 'Germanium', group: 14, period: 4, category: 'metalloid', info: 'Used in semiconductors.' },
  { number: 33, symbol: 'As', name: 'Arsenic', group: 15, period: 4, category: 'metalloid', info: 'Toxic metalloid. Used in pesticides.' },
  { number: 34, symbol: 'Se', name: 'Selenium', group: 16, period: 4, category: 'nonmetal', info: 'Used in glass and electronics.' },
  { number: 35, symbol: 'Br', name: 'Bromine', group: 17, period: 4, category: 'halogen', info: 'Red-brown liquid. Used in flame retardants.' },
  { number: 36, symbol: 'Kr', name: 'Krypton', group: 18, period: 4, category: 'noble gas', info: 'Inert gas. Used in lighting.' },
  { number: 37, symbol: 'Rb', name: 'Rubidium', group: 1, period: 5, category: 'alkali metal', info: 'Soft, silvery metal. Highly reactive.' },
  { number: 38, symbol: 'Sr', name: 'Strontium', group: 2, period: 5, category: 'alkaline earth metal', info: 'Used in fireworks.' },
  { number: 39, symbol: 'Y', name: 'Yttrium', group: 3, period: 5, category: 'transition metal', info: 'Used in LEDs and phosphors.' },
  { number: 40, symbol: 'Zr', name: 'Zirconium', group: 4, period: 5, category: 'transition metal', info: 'Resistant to corrosion. Used in reactors.' },
  { number: 41, symbol: 'Nb', name: 'Niobium', group: 5, period: 5, category: 'transition metal', info: 'Used in superconductors.' },
  { number: 42, symbol: 'Mo', name: 'Molybdenum', group: 6, period: 5, category: 'transition metal', info: 'Used in steel alloys.' },
  { number: 43, symbol: 'Tc', name: 'Technetium', group: 7, period: 5, category: 'transition metal', info: 'Radioactive. Used in medical imaging.' },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', group: 8, period: 5, category: 'transition metal', info: 'Used in electronics.' },
  { number: 45, symbol: 'Rh', name: 'Rhodium', group: 9, period: 5, category: 'transition metal', info: 'Used in catalytic converters.' },
  { number: 46, symbol: 'Pd', name: 'Palladium', group: 10, period: 5, category: 'transition metal', info: 'Used in jewelry and electronics.' },
  { number: 47, symbol: 'Ag', name: 'Silver', group: 11, period: 5, category: 'transition metal', info: 'Best conductor of electricity.' },
  { number: 48, symbol: 'Cd', name: 'Cadmium', group: 12, period: 5, category: 'post-transition metal', info: 'Toxic. Used in batteries.' },
  { number: 49, symbol: 'In', name: 'Indium', group: 13, period: 5, category: 'post-transition metal', info: 'Used in touchscreens.' },
  { number: 50, symbol: 'Sn', name: 'Tin', group: 14, period: 5, category: 'post-transition metal', info: 'Used to make bronze.' },
  { number: 51, symbol: 'Sb', name: 'Antimony', group: 15, period: 5, category: 'metalloid', info: 'Used in flame retardants.' },
  { number: 52, symbol: 'Te', name: 'Tellurium', group: 16, period: 5, category: 'metalloid', info: 'Used in solar panels.' },
  { number: 53, symbol: 'I', name: 'Iodine', group: 17, period: 5, category: 'halogen', info: 'Essential nutrient. Used as disinfectant.' },
  { number: 54, symbol: 'Xe', name: 'Xenon', group: 18, period: 5, category: 'noble gas', info: 'Used in lamps and anesthesia.' },
  { number: 55, symbol: 'Cs', name: 'Cesium', group: 1, period: 6, category: 'alkali metal', info: 'Soft, gold-colored metal. Highly reactive.' },
  { number: 56, symbol: 'Ba', name: 'Barium', group: 2, period: 6, category: 'alkaline earth metal', info: 'Used in medical imaging.' },
  { number: 57, symbol: 'La', name: 'Lanthanum', group: 3, period: 6, category: 'lanthanide', info: 'First of the lanthanides.' },
  { number: 58, symbol: 'Ce', name: 'Cerium', group: 4, period: 6, category: 'lanthanide', info: 'Used in lighter flints.' },
  { number: 59, symbol: 'Pr', name: 'Praseodymium', group: 5, period: 6, category: 'lanthanide', info: 'Used in magnets and glass.' },
  { number: 60, symbol: 'Nd', name: 'Neodymium', group: 6, period: 6, category: 'lanthanide', info: 'Used in strong magnets.' },
  { number: 61, symbol: 'Pm', name: 'Promethium', group: 7, period: 6, category: 'lanthanide', info: 'Radioactive. Used in luminous paint.' },
  { number: 62, symbol: 'Sm', name: 'Samarium', group: 8, period: 6, category: 'lanthanide', info: 'Used in magnets and cancer treatment.' },
  { number: 63, symbol: 'Eu', name: 'Europium', group: 9, period: 6, category: 'lanthanide', info: 'Used in TV screens and lamps.' },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', group: 10, period: 6, category: 'lanthanide', info: 'Used in MRI contrast agents.' },
  { number: 65, symbol: 'Tb', name: 'Terbium', group: 11, period: 6, category: 'lanthanide', info: 'Used in green phosphors.' },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', group: 12, period: 6, category: 'lanthanide', info: 'Used in magnets and lasers.' },
  { number: 67, symbol: 'Ho', name: 'Holmium', group: 13, period: 6, category: 'lanthanide', info: 'Used in magnets and nuclear reactors.' },
  { number: 68, symbol: 'Er', name: 'Erbium', group: 14, period: 6, category: 'lanthanide', info: 'Used in fiber optics.' },
  { number: 69, symbol: 'Tm', name: 'Thulium', group: 15, period: 6, category: 'lanthanide', info: 'Used in portable X-ray machines.' },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', group: 16, period: 6, category: 'lanthanide', info: 'Used in lasers and atomic clocks.' },
  { number: 71, symbol: 'Lu', name: 'Lutetium', group: 17, period: 6, category: 'lanthanide', info: 'Used in PET scans.' },
  { number: 72, symbol: 'Hf', name: 'Hafnium', group: 4, period: 6, category: 'transition metal', info: 'Used in nuclear control rods.' },
  { number: 73, symbol: 'Ta', name: 'Tantalum', group: 5, period: 6, category: 'transition metal', info: 'Used in electronics and surgery.' },
  { number: 74, symbol: 'W', name: 'Tungsten', group: 6, period: 6, category: 'transition metal', info: 'Highest melting point. Used in bulbs.' },
  { number: 75, symbol: 'Re', name: 'Rhenium', group: 7, period: 6, category: 'transition metal', info: 'Used in jet engines.' },
  { number: 76, symbol: 'Os', name: 'Osmium', group: 8, period: 6, category: 'transition metal', info: 'Densest element. Used in pens.' },
  { number: 77, symbol: 'Ir', name: 'Iridium', group: 9, period: 6, category: 'transition metal', info: 'Corrosion-resistant. Used in spark plugs.' },
  { number: 78, symbol: 'Pt', name: 'Platinum', group: 10, period: 6, category: 'transition metal', info: 'Used in jewelry and catalysts.' },
  { number: 79, symbol: 'Au', name: 'Gold', group: 11, period: 6, category: 'transition metal', info: 'Precious metal. Used in electronics.' },
  { number: 80, symbol: 'Hg', name: 'Mercury', group: 12, period: 6, category: 'post-transition metal', info: 'Liquid at room temp. Used in thermometers.' },
  { number: 81, symbol: 'Tl', name: 'Thallium', group: 13, period: 6, category: 'post-transition metal', info: 'Toxic. Used in electronics.' },
  { number: 82, symbol: 'Pb', name: 'Lead', group: 14, period: 6, category: 'post-transition metal', info: 'Toxic. Used in batteries.' },
  { number: 83, symbol: 'Bi', name: 'Bismuth', group: 15, period: 6, category: 'post-transition metal', info: 'Low toxicity. Used in medicine.' },
  { number: 84, symbol: 'Po', name: 'Polonium', group: 16, period: 6, category: 'post-transition metal', info: 'Radioactive. Used in antistatic devices.' },
  { number: 85, symbol: 'At', name: 'Astatine', group: 17, period: 6, category: 'halogen', info: 'Rare and radioactive.' },
  { number: 86, symbol: 'Rn', name: 'Radon', group: 18, period: 6, category: 'noble gas', info: 'Radioactive gas.' },
  { number: 87, symbol: 'Fr', name: 'Francium', group: 1, period: 7, category: 'alkali metal', info: 'Extremely rare and radioactive.' },
  { number: 88, symbol: 'Ra', name: 'Radium', group: 2, period: 7, category: 'alkaline earth metal', info: 'Radioactive. Used in luminous paint.' },
  { number: 89, symbol: 'Ac', name: 'Actinium', group: 3, period: 7, category: 'actinide', info: 'Radioactive. Used in radiation therapy.' },
  { number: 90, symbol: 'Th', name: 'Thorium', group: 4, period: 7, category: 'actinide', info: 'Radioactive. Used in gas mantles.' },
  { number: 91, symbol: 'Pa', name: 'Protactinium', group: 5, period: 7, category: 'actinide', info: 'Radioactive. Used in research.' },
  { number: 92, symbol: 'U', name: 'Uranium', group: 6, period: 7, category: 'actinide', info: 'Used as nuclear fuel.' },
  { number: 93, symbol: 'Np', name: 'Neptunium', group: 7, period: 7, category: 'actinide', info: 'Radioactive. Used in research.' },
  { number: 94, symbol: 'Pu', name: 'Plutonium', group: 8, period: 7, category: 'actinide', info: 'Used in nuclear weapons.' },
  { number: 95, symbol: 'Am', name: 'Americium', group: 9, period: 7, category: 'actinide', info: 'Used in smoke detectors.' },
  { number: 96, symbol: 'Cm', name: 'Curium', group: 10, period: 7, category: 'actinide', info: 'Radioactive. Used in research.' },
  { number: 97, symbol: 'Bk', name: 'Berkelium', group: 11, period: 7, category: 'actinide', info: 'Radioactive. Used in research.' },
  { number: 98, symbol: 'Cf', name: 'Californium', group: 12, period: 7, category: 'actinide', info: 'Used in neutron sources.' },
  { number: 99, symbol: 'Es', name: 'Einsteinium', group: 13, period: 7, category: 'actinide', info: 'Radioactive. Used in research.' },
  { number: 100, symbol: 'Fm', name: 'Fermium', group: 14, period: 7, category: 'actinide', info: 'Radioactive. Used in research.' },
  { number: 101, symbol: 'Md', name: 'Mendelevium', group: 15, period: 7, category: 'actinide', info: 'Radioactive. Used in research.' },
  { number: 102, symbol: 'No', name: 'Nobelium', group: 16, period: 7, category: 'actinide', info: 'Radioactive. Used in research.' },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', group: 17, period: 7, category: 'actinide', info: 'Radioactive. Used in research.' },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', group: 4, period: 7, category: 'transition metal', info: 'Synthetic. Radioactive.' },
  { number: 105, symbol: 'Db', name: 'Dubnium', group: 5, period: 7, category: 'transition metal', info: 'Synthetic. Radioactive.' },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', group: 6, period: 7, category: 'transition metal', info: 'Synthetic. Radioactive.' },
  { number: 107, symbol: 'Bh', name: 'Bohrium', group: 7, period: 7, category: 'transition metal', info: 'Synthetic. Radioactive.' },
  { number: 108, symbol: 'Hs', name: 'Hassium', group: 8, period: 7, category: 'transition metal', info: 'Synthetic. Radioactive.' },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', group: 9, period: 7, category: 'transition metal', info: 'Synthetic. Radioactive.' },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', group: 10, period: 7, category: 'transition metal', info: 'Synthetic. Radioactive.' },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', group: 11, period: 7, category: 'transition metal', info: 'Synthetic. Radioactive.' },
  { number: 112, symbol: 'Cn', name: 'Copernicium', group: 12, period: 7, category: 'post-transition metal', info: 'Synthetic. Radioactive.' },
  { number: 113, symbol: 'Nh', name: 'Nihonium', group: 13, period: 7, category: 'post-transition metal', info: 'Synthetic. Radioactive.' },
  { number: 114, symbol: 'Fl', name: 'Flerovium', group: 14, period: 7, category: 'post-transition metal', info: 'Synthetic. Radioactive.' },
  { number: 115, symbol: 'Mc', name: 'Moscovium', group: 15, period: 7, category: 'post-transition metal', info: 'Synthetic. Radioactive.' },
  { number: 116, symbol: 'Lv', name: 'Livermorium', group: 16, period: 7, category: 'post-transition metal', info: 'Synthetic. Radioactive.' },
  { number: 117, symbol: 'Ts', name: 'Tennessine', group: 17, period: 7, category: 'halogen', info: 'Synthetic. Radioactive.' },
  { number: 118, symbol: 'Og', name: 'Oganesson', group: 18, period: 7, category: 'noble gas', info: 'Synthetic. Radioactive.' },
];

const tableRows = 7;
const tableCols = 18;

function createPeriodicTable() {
  const table = document.getElementById('periodicTable');
  const lanthRow = document.getElementById('lanthanideRow');
  const actinRow = document.getElementById('actinideRow');
  table.innerHTML = '';
  lanthRow.innerHTML = '';
  actinRow.innerHTML = '';
  // Create a 2D array for table layout
  const layout = Array.from({ length: tableRows }, () => Array(tableCols).fill(null));
  elements.forEach(el => {
    // Place all elements in their main positions
    layout[el.period - 1][el.group - 1] = el;
  });
  for (let row = 0; row < tableRows; row++) {
    for (let col = 0; col < tableCols; col++) {
      const el = layout[row][col];
      if (el) {
        const div = document.createElement('div');
        div.className = 'pt-element pt-' + el.category.replace(/\s/g, '-');
        div.innerHTML = `
          <span class="pt-number">${el.number}</span>
          <span class="pt-symbol">${el.symbol}</span>
          <span class="pt-name">${el.name}</span>
        `;
        div.onclick = () => showElementModal(el);
        table.appendChild(div);
      } else {
        const empty = document.createElement('div');
        empty.className = 'pt-element pt-empty';
        empty.style.visibility = 'hidden';
        table.appendChild(empty);
      }
    }
  }
  // Render lanthanides (58-71) in the bottom row (excluding La)
  for (let i = 58; i <= 71; i++) {
    const el = elements.find(e => e.number === i);
    const div = document.createElement('div');
    div.className = 'pt-element pt-' + el.category.replace(/\s/g, '-');
    div.innerHTML = `
      <span class="pt-number">${el.number}</span>
      <span class="pt-symbol">${el.symbol}</span>
      <span class="pt-name">${el.name}</span>
    `;
    div.onclick = () => showElementModal(el);
    lanthRow.appendChild(div);
  }
  // Render actinides (90-103) in the bottom row (excluding Ac)
  for (let i = 90; i <= 103; i++) {
    const el = elements.find(e => e.number === i);
    const div = document.createElement('div');
    div.className = 'pt-element pt-' + el.category.replace(/\s/g, '-');
    div.innerHTML = `
      <span class="pt-number">${el.number}</span>
      <span class="pt-symbol">${el.symbol}</span>
      <span class="pt-name">${el.name}</span>
    `;
    div.onclick = () => showElementModal(el);
    actinRow.appendChild(div);
  }
}

function showElementModal(el) {
  const modal = document.getElementById('elementModal');
  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <h2 style="margin-bottom: 0.5rem; color: #0044cc; font-size: 1.3rem;">${el.name} <span style='color:#888;font-size:1.1rem;'>(${el.symbol})</span></h2>
    <p style="margin:0.2rem 0 0.7rem 0;font-size:1.05rem;"><strong>Atomic Number:</strong> ${el.number}</p>
    <p style="margin:0.2rem 0 0.7rem 0;"><strong>Category:</strong> <span style='color:#3a8dde;'>${el.category.replace(/-/g,' ')}</span></p>
    <p style="margin:0.2rem 0 0.7rem 0;">${el.info}</p>
  `;
  modal.classList.add('active');
  modal.style.display = 'flex';
  setTimeout(() => { modal.classList.add('active'); }, 10);
  document.body.style.overflow = 'hidden';
}

function closeElementModal() {
  const modal = document.getElementById('elementModal');
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 180);
}

// Make modal close on clicking outside content (backdrop)
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('elementModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeElementModal();
      }
    });
  }
});

window.onload = createPeriodicTable;
window.closeElementModal = closeElementModal;
