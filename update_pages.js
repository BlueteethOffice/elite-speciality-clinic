const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\Chitranjan Kumar\\Desktop\\ELITE SPECIALITY CLINIC\\src\\app';

const imageMap = {
  'braces': 'Braces.png',
  'braces-and-orthodontics': 'Braces.png',
  'composite-veneers': 'Composite Veneers.png',
  'fillings': 'Dental fillings.png',
  'dental-implants': 'Dental implant.png',
  'implants': 'Dental implant.png',
  'emax-veneers': 'Emax Veneers.png',
  'invisible-braces': 'Invisible Braces.png',
  'metal-free-crowns': 'Metal Free Crowns.png',
  'tooth-colored-crown': 'Metal Free Crowns.png',
  'microscopic-root-canal': 'Microscopic Root Canal.png',
  'root-canal-treatment': 'Root Canal Treatment.png',
  'teeth-cleaning': 'Teeth Cleaning.png',
  'teeth-whitening': 'Teeth whitening.png',
  'wisdom-teeth-extraction': 'Wisdom Teeth Extraction.png',
  'zoom-whitening': 'Zoom Whitening.png',
  'extraction': 'tooth extraction.png',
  'oral-surgery': 'tooth extraction.png'
};

const dirs = fs.readdirSync(baseDir);

dirs.forEach(dir => {
  if (imageMap[dir]) {
    const pagePath = path.join(baseDir, dir, 'page.js');
    if (fs.existsSync(pagePath)) {
      let content = fs.readFileSync(pagePath, 'utf8');
      
      // Inject heroImage prop
      const imageName = imageMap[dir];
      if (!content.includes('heroImage=')) {
        content = content.replace(
          /(icon=.*)/,
          `$1\n      heroImage="/images/treatments/${imageName}"`
        );
      }
      
      // Shorten tagline if it's too long
      const taglineMatch = content.match(/tagline="([^"]+)"/);
      if (taglineMatch) {
        let tagline = taglineMatch[1];
        if (tagline.length > 80) {
          // split by sentence and take first one, or just truncate
          let firstSentence = tagline.split('.')[0] + '.';
          if (firstSentence.length > 80) {
            firstSentence = firstSentence.substring(0, 80) + '...';
          }
          content = content.replace(`tagline="${tagline}"`, `tagline="${firstSentence}"`);
        }
      }
      
      fs.writeFileSync(pagePath, content);
      console.log(`Updated ${dir}`);
    }
  }
});
