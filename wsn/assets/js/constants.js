  // constants.js

export const dom = {
    logoUpload: document.getElementById('logoUpload'),
    hallNumberInput: document.getElementById('hallNumber'),
    standNumberInput: document.getElementById('standNumber'),
    generatedImagesSection: document.querySelector('.generated-images'),
    imagesContainer: document.querySelector('.images-container'),
    fileNameDisplay: document.querySelector('.file-name'),
    submitButton: document.getElementById('submitButton'),
    downloadAllButton: document.getElementById('downloadAllButton'),
    genericDownloadAll: document.getElementById('generic-downloadAll'),
    fileNamePictures: document.querySelector('.file-name-pictures'),
    submitButtonPictures: document.getElementById('submitButtonPictures'),
    generatePicturesSection : document.querySelector('.generated-pictures'),
    pictureUpload: document.getElementById('pictureUpload'),
    standNumberPictures: document.getElementById('standNumberPictures'),
    hallNumberPictures : document.getElementById('hallNumberPictures'),
    croppieContainer: document.getElementById('croppie-container'),
    picturesContainer: document.querySelector('.pictures-container'),
    downloadAllPicturesButton: document.getElementById('downloadAllPicturesButton'),
    downloadAllLogos: document.getElementById('downloadAllLogos')
  };

export const infoEvent = {
    name: "WHO'S NEXT 2025",
    abreviation: 'WSN-25'
  }

export const SOCIALS = [
    { name: 'instagram', url: '../shared-assets/socials/instagram.svg' },
    { name: 'facebook', url: '../shared-assets/socials/facebook.svg' },
    { name: 'x', url: '../shared-assets/socials/x.svg' },
    { name: 'tiktok', url: '../shared-assets/socials/tiktok.svg' },
    { name: 'linkedin', url: '../shared-assets/socials/linkedin.svg' },
    { name: 'meta', url: '../shared-assets/socials/meta.svg'},
    { name: 'mail', url: '../shared-assets/socials/mail.svg'},
    { name: 'google-ads', url: '../shared-assets/socials/google-ads.svg'}
  ];
  
 export const FORMATS_CUSTOMIZED_BANNERS = [
    { 
      nameEN: 'Square format',
      nameFR:'Format carré', 
      dataId:'customized-square-format-whos-next',
      templateEN: 'assets/templates/1080x1080.png', 
      templateFR: 'assets/templates/1080x1080.png', 
      description: '(1080x1080)', 
      socials: ['instagram', 'facebook', 'x'], 
      dimensions: [1080, 1080], 
      logoCenter: [540, 1033], 
      standLetterPosition: [1080-53, 1043], 
      maxLogoSize: [200, 70], 
      font: '32px NueueHaasDisplayMedium' 
    },
    { 
      nameEN: 'Square format',
      nameFR:'Format carré', 
      dataId:'customized-square-format-curve',
      templateEN: 'assets/templates/1080x1080-curve.png', 
      templateFR: 'assets/templates/1080x1080-curve.png', 
      description: '(1080x1080)', 
      socials: ['instagram', 'facebook', 'x'], 
      dimensions: [1080, 1080], 
      logoCenter: [540, 1033], 
      standLetterPosition: [1080-53, 1043], 
      maxLogoSize: [200, 70], 
      font: '32px NueueHaasDisplayMedium' 
    },
    { 
      nameEN: 'Story format', 
      nameFR: 'Format story', 
      dataId:'customized-story-format-whos-next',
      templateEN: 'assets/templates/1080x1920.png', 
      templateFR: 'assets/templates/1080x1920.png', 
      description: '(1080x1920)', 
      socials: ['instagram', 'facebook', 'tiktok'], 
      dimensions: [1080, 1920], 
      logoCenter: [540, 1873], 
      standLetterPosition: [1080-53, 1883], 
      maxLogoSize: [200, 70], 
      font: '32px NueueHaasDisplayMedium' 
    },
    { 
      nameEN: 'Story format', 
      nameFR: 'Format story', 
      dataId:'customized-story-format-curve',
      templateEN: 'assets/templates/1080x1920-curve.png', 
      templateFR: 'assets/templates/1080x1920-curve.png', 
      description: '(1080x1920)', 
      socials: ['instagram', 'facebook', 'tiktok'], 
      dimensions: [1080, 1920], 
      logoCenter: [540, 1873], 
      standLetterPosition: [1080-53, 1883], 
      maxLogoSize: [200, 70], 
      font: '32px NueueHaasDisplayMedium' 
    },
    { 
      nameEN: 'Portrait format', 
      nameFR: 'Format portrait', 
      dataId:'customized-portrait-format-whos-next',
      templateEN: 'assets/templates/1080x1350.png', 
      templateFR: 'assets/templates/1080x1350.png', 
      description: '(1080x1350)', 
      socials: ['facebook', 'instagram'], 
      dimensions: [1080, 1350], 
      logoCenter: [540, 1303], 
      standLetterPosition: [1080-53, 1313], 
      maxLogoSize: [200, 70], 
      font: '32px NueueHaasDisplayMedium' 
    },
    { 
      nameEN: 'Portrait format', 
      nameFR: 'Format portrait', 
      dataId:'customized-portrait-format-curve',
      templateEN: 'assets/templates/1080x1350-curve.png', 
      templateFR: 'assets/templates/1080x1350-curve.png', 
      description: '(1080x1350)', 
      socials: ['facebook', 'instagram'], 
      dimensions: [1080, 1350], 
      logoCenter: [540, 1303], 
      standLetterPosition: [1080-53, 1313], 
      maxLogoSize: [200, 70], 
      font: '32px NueueHaasDisplayMedium' 
    },
    { 
      nameEN: 'LinkedIn Banner', 
      nameFR: 'Bannière Linkedin',
      dataId:'customized-linkedin-banner-whos-next', 
      templateEN: 'assets/templates/1584x396.png', 
      templateFR: 'assets/templates/1584x396.png', 
      description: '(1584x396)', 
      socials: ['linkedin'], 
      dimensions: [1584, 396], 
      logoCenter: [792, 351], 
      standLetterPosition: [1584-74, 362], 
      maxLogoSize: [200, 70], 
      font: '32px NueueHaasDisplayMedium'
     },
     { 
      nameEN: 'LinkedIn Banner', 
      nameFR: 'Bannière Linkedin',
      dataId:'customized-linkedin-banner-curve', 
      templateEN: 'assets/templates/1584x396-curve.png', 
      templateFR: 'assets/templates/1584x396-curve.png', 
      description: '(1584x396)', 
      socials: ['linkedin'], 
      dimensions: [1584, 396], 
      logoCenter: [792, 351], 
      standLetterPosition: [1584-74, 362], 
      maxLogoSize: [200, 70], 
      font: '32px NueueHaasDisplayMedium'
     },
     { 
      nameEN: 'Landscape format', 
      nameFR: 'Format paysage', 
      dataId:'customized-landscape-format-whos-next',
      templateEN: 'assets/templates/1200x628.png', 
      templateFR: 'assets/templates/1200x628.png', 
      description: '(1200x628)', 
      socials: ['facebook', 'instagram', 'x'], 
      dimensions: [1200, 628], 
      logoCenter: [600, 583], 
      standLetterPosition: [1200-58, 594], 
      maxLogoSize: [200, 70], 
      font: '32px NueueHaasDisplayMedium'
     },
     { 
      nameEN: 'Landscape format', 
      nameFR: 'Format paysage', 
      dataId:'customized-landscape-format-curve',
      templateEN: 'assets/templates/1200x628-curve.png', 
      templateFR: 'assets/templates/1200x628-curve.png', 
      description: '(1200x628)', 
      socials: ['facebook', 'instagram', 'x'], 
      dimensions: [1200, 628], 
      logoCenter: [600, 583], 
      standLetterPosition: [1200-58, 594], 
      maxLogoSize: [200, 70], 
      font: '32px NueueHaasDisplayMedium'
     },
     { 
      nameEN: 'Email signature', 
      nameFR: 'Signature Email', 
      dataId:'customized-email-signature-whos-next',
      templateEN: 'assets/templates/600x140.png', 
      templateFR: 'assets/templates/600x140.png', 
      description: '(600x140)', 
      socials: ['mail'], 
      dimensions: [600, 140], 
      logoCenter: [300, 127], 
      standLetterPosition: [600-29, 131], 
      maxLogoSize: [70, 18], 
      font: '12px NueueHaasDisplayMedium'
     },
     { 
      nameEN: 'Email signature', 
      nameFR: 'Signature Email', 
      dataId:'customized-email-signature-curve',
      templateEN: 'assets/templates/600x140-curve.png', 
      templateFR: 'assets/templates/600x140-curve.png', 
      description: '(600x140)', 
      socials: ['mail'], 
      dimensions: [600, 140], 
      logoCenter: [300, 127], 
      standLetterPosition: [600-29, 131], 
      maxLogoSize: [70, 18], 
      font: '12px NueueHaasDisplayMedium'
     },
     { 
      nameEN: 'Small banner', 
      nameFR: 'Petite bannière',
      dataId:'customized-small-banner-whos-next', 
      templateEN: 'assets/templates/300x250.png', 
      templateFR: 'assets/templates/300x250.png', 
      description: '(300x250)', 
      socials: ['google-ads', 'meta'], 
      dimensions: [300, 250], 
      logoCenter: [150, 237], 
      standLetterPosition: [300-15, 241], 
      maxLogoSize: [34, 18], 
      font: '12px NueueHaasDisplayMedium'
     },
     { 
      nameEN: 'Small banner', 
      nameFR: 'Petite bannière',
      dataId:'customized-small-banner-curve', 
      templateEN: 'assets/templates/300x250-curve.png', 
      templateFR: 'assets/templates/300x250-curve.png', 
      description: '(300x250)', 
      socials: ['google-ads', 'meta'], 
      dimensions: [300, 250], 
      logoCenter: [150, 237], 
      standLetterPosition: [300-15, 241], 
      maxLogoSize: [34, 18], 
      font: '12px NueueHaasDisplayMedium'
     }
  ];
  
export const FORMATS_BANNERS_WITH_PICTURES = [
  { 
    nameEN: 'Landscape format', 
    nameFR:'Format paysage', 
    templateEN: 'assets/banners-with-pictures/picture-template_landscape.png', 
    templateFR: 'assets/banners-with-pictures/picture-template_landscape.png', 
    description: '(1080x1080)', 
    socials: ['instagram', 'facebook', 'x'], 
    dimensions: [1920, 1080], 
    picturePosition: [1280.58, 636.1], 
    standLetterPosition: [1537.8, 605.2], 
    pictureSize: [435.21, 381.75], 
    font: '52'
   },
  { 
    nameEN: 'Landscape format', 
    nameFR:'Format paysage', 
    templateEN: 'assets/banners-with-pictures/picture-template_landscape.png', 
    templateFR: 'assets/banners-with-pictures/picture-template_landscape.png', 
    description: '(1080x1080)', 
    socials: ['instagram', 'facebook', 'x'], 
    dimensions: [1920, 1080], 
    picturePosition: [1280.58, 636.1], 
    standLetterPosition: [1537.8, 605.2], 
    pictureSize: [435.21, 381.75], 
    font: '52'
   },
  { 
    nameEN: 'Story format', 
    nameFR: 'Format story', 
    templateEN: 'assets/banners-with-pictures/picture-template_portrait.png', 
    templateFR: 'assets/banners-with-pictures/picture-template_portrait.png', 
    description: '(1080x1920)', 
    socials: ['instagram', 'facebook', 'tiktok'], 
    dimensions: [1080, 1350], 
    picturePosition: [183.86, 277.46], 
    standLetterPosition: [424.61, 142.89], 
    pictureSize: [473.5, 415.34], 
    font: '52'
   }
]


export const LOGOS = [
  {
    name: 'Logo-Who-s-next-2025.png',
    src: '/assets/logos/logo-whosnext.png'
  }
]
