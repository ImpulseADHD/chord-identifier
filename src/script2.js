document.addEventListener("DOMContentLoaded", function () {
    // Get tempo elements
    const tempoInput = document.getElementById('tempo');
    const tempoMinus = document.getElementById('tempoMinus');
    const tempoPlus = document.getElementById('tempoPlus');
  
    // Set initial tempo
    let tempo = parseInt(tempoInput.value);
  
    // Get scale and key elements
    const scaleSelect = document.getElementById('scale');
    const keySelect = document.getElementById('key');
  
    // Event listener for tempo minus button
    tempoMinus.addEventListener('click', function() {
      updateTempo(Math.max(tempo - 5, 20)); // Decrease tempo by 5, with a lower limit of 20
    });
  
    // Event listener for tempo plus button
    tempoPlus.addEventListener('click', function() {
      updateTempo(tempo + 5); // Increase tempo by 5
    });
  
    // Event listener for scale select dropdown
    scaleSelect.addEventListener('change', function() {
      const scale = scaleSelect.value;
      const key = keySelect.value;
  
      // Generate and display scale notes
      const scaleNotes = generateScaleNotes(scale, key);
      displayScaleNotes(scaleNotes);
    });
  
    // Event listener for key select dropdown
    keySelect.addEventListener('change', function() {
      const scale = scaleSelect.value;
      const key = keySelect.value;
  
      // Generate and display scale notes
      const scaleNotes = generateScaleNotes(scale, key);
      displayScaleNotes(scaleNotes);
    });
  
    // Function to update tempo
    function updateTempo(value) {
      tempo = value;
      tempoInput.value = tempo;
    }
  
    // Function to generate scale notes
    function generateScaleNotes(scale, key) {
      // Define the intervals for each scale type
      const scaleIntervals = {
        Major: [0, 2, 4, 5, 7, 9, 11],
        naturalMinor: [0, 2, 3, 5, 7, 8, 10],
        harmonicMinor: [0, 2, 3, 5, 7, 8, 11],
        melodicMinor: [0, 2, 3, 5, 7, 9, 11],
        pentatonicMajor: [0, 2, 4, 7, 9],
        pentatonicMinor: [0, 3, 5, 7, 10],
        blues: [0, 3, 5, 6, 7, 10]
      };
  
      // Get the starting index of the key in the notes array
      const startingIndex = notes.indexOf(key);
  
      // Get the scale intervals
      const intervals = scaleIntervals[scale];
  
      // Generate scale notes
      const scaleNotes = [];
      for (let i = 0; i < intervals.length; i++) {
        const index = (startingIndex + intervals[i]) % notes.length;
        scaleNotes.push(notes[index]);
      }
      return scaleNotes;
    }
  
    // Function to display scale notes
    function displayScaleNotes(scaleNotes) {
      const scaleNotesContainer = document.getElementById('scaleNotes');
      scaleNotesContainer.innerHTML = '';
  
      scaleNotes.forEach(note => {
        const span = document.createElement('span');
        span.textContent = note;
        scaleNotesContainer.appendChild(span);
      });
    }
  
    // Function to play a chord
    function playChord(chord) {
      const duration = "2n";
      const notes = chord.split(' ');
      Tone.loaded().then(() => {
        const synth = new Tone.PolySynth().toDestination();
        synth.triggerAttackRelease(notes, duration);
      });
    }
  
    // Map of chord names to their degrees in the scale
    const chordDegrees = {
      'I': 0,
      'ii': 1,
      'iii': 2,
      'IV': 3,
      'V': 4,
      'vi': 5,
      'viio': 6,
      'VIIb': 6
    };
  
    // Event listener for chord buttons
    const chordButtons = document.querySelectorAll('.chord-button');
    chordButtons.forEach(button => {
      button.addEventListener('click', function() {
        const degree = button.dataset.degree;
        const scale = scaleSelect.value;
        const key = keySelect.value;
        const scaleNotes = generateScaleNotes(scale, key);
        const chordIndex = chordDegrees[degree];
        const chordNotes = [];
        for (let i = 0; i < 3; i++) {
          chordNotes.push(scaleNotes[chordIndex + i]);
        }
        playChord(chordNotes.join(' '));
      });
    });
  
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Get tempo elements
    const tempoInput = document.getElementById('tempo');
    const tempoMinus = document.getElementById('tempoMinus');
    const tempoPlus = document.getElementById('tempoPlus');
  
    // Set initial tempo
    let tempo = parseInt(tempoInput.value);
  
    // Get scale and key elements
    const scaleSelect = document.getElementById('scale');
    const keySelect = document.getElementById('key');
  
    // Event listener for tempo minus button
    tempoMinus.addEventListener('click', function() {
      updateTempo(Math.max(tempo - 5, 20)); // Decrease tempo by 5, with a lower limit of 20
    });
  
    // Event listener for tempo plus button
    tempoPlus.addEventListener('click', function() {
      updateTempo(tempo + 5); // Increase tempo by 5
    });
  
    // Event listener for scale select dropdown
    scaleSelect.addEventListener('change', function() {
      const scale = scaleSelect.value;
      const key = keySelect.value;
  
      // Generate and display scale notes
      const scaleNotes = generateScaleNotes(scale, key);
      displayScaleNotes(scaleNotes);
    });
  
    // Event listener for key select dropdown
    keySelect.addEventListener('change', function() {
      const scale = scaleSelect.value;
      const key = keySelect.value;
  
      // Generate and display scale notes
      const scaleNotes = generateScaleNotes(scale, key);
      displayScaleNotes(scaleNotes);
    });
  
    // Function to update tempo
    function updateTempo(value) {
      tempo = value;
      tempoInput.value = tempo;
    }
  
    // Function to generate scale notes
    function generateScaleNotes(scale, key) {
      // Define the intervals for each scale type
      const scaleIntervals = {
        Major: [0, 2, 4, 5, 7, 9, 11],
        naturalMinor: [0, 2, 3, 5, 7, 8, 10],
        harmonicMinor: [0, 2, 3, 5, 7, 8, 11],
        melodicMinor: [0, 2, 3, 5, 7, 9, 11],
        pentatonicMajor: [0, 2, 4, 7, 9],
        pentatonicMinor: [0, 3, 5, 7, 10],
        blues: [0, 3, 5, 6, 7, 10]
      };
  
      // Get the starting index of the key in the notes array
      const startingIndex = notes.indexOf(key);
  
      // Get the scale intervals
      const intervals = scaleIntervals[scale];
  
      // Generate scale notes
      const scaleNotes = [];
      for (let i = 0; i < intervals.length; i++) {
        const index = (startingIndex + intervals[i]) % notes.length;
        scaleNotes.push(notes[index]);
      }
      return scaleNotes;
    }
  
    // Function to display scale notes
    function displayScaleNotes(scaleNotes) {
      const scaleNotesContainer = document.getElementById('scaleNotes');
      scaleNotesContainer.innerHTML = '';
  
      scaleNotes.forEach(note => {
        const span = document.createElement('span');
        span.textContent = note;
        scaleNotesContainer.appendChild(span);
      });
    }
  
    // Function to play a chord
    function playChord(chord) {
      const duration = "2n";
      const notes = chord.split(' ');
      Tone.loaded().then(() => {
        const synth = new Tone.PolySynth().toDestination();
        synth.triggerAttackRelease(notes, duration);
      });
    }
  
    // Map of chord names to their degrees in the scale
    const chordDegrees = {
      'I': 0,
      'ii': 1,
      'iii': 2,
      'IV': 3,
      'V': 4,
      'vi': 5,
      'viio': 6,
      'VIIb': 6
    };
  
    // Event listener for chord buttons
    const chordButtons = document.querySelectorAll('.chord-button');
    chordButtons.forEach(button => {
      button.addEventListener('click', function() {
        const degree = button.dataset.degree;
        const scale = scaleSelect.value;
        const key = keySelect.value;
        const scaleNotes = generateScaleNotes(scale, key);
        const chordIndex = chordDegrees[degree];
        const chordNotes = [];
        for (let i = 0; i < 3; i++) {
          chordNotes.push(scaleNotes[chordIndex + i]);
        }
        playChord(chordNotes.join(' '));
      });
    });
  
  });
  