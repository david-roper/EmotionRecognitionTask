export const addContinueButton = () => {

  const continueButton = document.createElement('button');

  continueButton.style.alignContent = 'center';
  continueButton.style.justifyContent = 'center';
  continueButton.style.position = 'flex';
  continueButton.style.display = 'None';
  continueButton.style.margin = '1';
  continueButton.className = 'btn btn-primary btn-lg';
  continueButton.textContent = 'Continue';

  return continueButton;
};

export const addInstructionContinueButton = () => {

  const continueButton = document.createElement('button');
  continueButton.style.margin = '1';
  continueButton.className = 'btn btn-primary btn-lg';
  continueButton.textContent = 'Continue';

  return continueButton;
};

export const createContinueButtonDiv = (continueButton: HTMLButtonElement) => {
  const continueButtonDiv = document.createElement('div');
  continueButtonDiv.style.justifyContent = 'center';
  continueButtonDiv.style.alignItems = 'center';
  continueButtonDiv.style.display = 'flex';
  continueButtonDiv.style.paddingTop = '1%';
  continueButtonDiv.appendChild(continueButton);

  return continueButtonDiv;
};

export const createWarningText = (text: string): HTMLParagraphElement => {
  const textBox = document.createElement('p')
  textBox.style.justifyContent = 'center';
  textBox.style.alignItems = 'center';
  textBox.style.display = 'None';
  textBox.style.paddingTop = '1%';
  textBox.style.color = 'red'
  textBox.textContent = text

  return textBox
}

export const createExamplePromptDiv = (content: string): HTMLDivElement => {
  const exampleDiv = document.createElement('div');
  exampleDiv.style.justifyContent = 'center';
  exampleDiv.style.alignItems = 'center';
  exampleDiv.style.paddingTop = '1%';
  exampleDiv.style.display = 'None';
  exampleDiv.textContent = content;

  return exampleDiv
}

export const revealEmotionButtons = () => {
  const emotionButtons = document.getElementsByName('custom-button-div');

  for (const emotionButton of emotionButtons) {
    emotionButton.style.display = 'flex';
  }
};

export const addBootstrapScripts = () => {
  const link = document.createElement('link');
  const cssLink = document.createElement('link');
  const bootstrapScript = document.createElement('script');

  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';

  cssLink.rel = 'stylesheet';
  cssLink.href = 'src/style.css';

  bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';

  document.head.appendChild(link);
  document.head.appendChild(cssLink);
  document.head.appendChild(bootstrapScript);
};

export const videoCoverHtmlGenerator = (filepath: string, top = '40%', left = '48%') => {
  return `
     
    <div class="video-container" id="videoContainer">
        <div class="video-overlay" id="overlay">
          <div class="cross" id="overlay-cross" style="left: ${left};top: ${top};"> </div>
        </div>
        <video id="video" preload="auto" >
          <source src=${filepath} type="video/mp4" />
        </video>
        
    </div>
    `;
};

export const audioHtmlGenerator = (filepath: string) => {
  return ` 
      <svg id="audioIcon" xmlns="http://www.w3.org/2000/svg" style="align-content: center;" version="1.0" width="200" height="180" viewBox="15 -12 40 100">
            <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style="stroke:#111;stroke-width:5;stroke-linejoin:round;fill:#111;"/>
            <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style="fill:none;stroke:#111;stroke-width:5;stroke-linecap:round"/>
        </svg>
        <audio id="audioContent" preload="auto">
            <source src=${filepath} type="audio/mpeg">
        </audio>
          `;
};
