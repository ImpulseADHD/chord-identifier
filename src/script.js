document.addEventListener("DOMContentLoaded", function () {
  // Get tempo elements
  const tempoInput = document.getElementById('tempoInput');
  const tempoMinus = document.getElementById('tempoMinus');
  const tempoPlus = document.getElementById('tempoPlus');

  // Set initial tempo
  let tempo = parseInt(tempoInput.value);

  //Import Piano Tones
  // Define an array of note names from A0 to D8, replacing '#' with 's'
  const notes = [
    "A0", "A#0", "B0",
    "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1",
    "A1", "A#1", "B1",
    "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2",
    "A2", "A#2", "B2",
    "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3",
    "A3", "A#3", "B3",
    "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4",
    "A4", "A#4", "B4",
    "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5",
    "A5", "A#5", "B5",
    "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6",
    "A6", "A#6", "B6",
    "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7",
    "A7", "A#7", "B7",
    "C8", "C#8", "D8"
  ];
  
  // Create a new sampler and import Piano tones
  const sampler = new Tone.Sampler({
    urls: Object.fromEntries(notes.map(note => [note, `${note.replace('#', 's')}.mp3`])),
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/"
  }).toDestination();


  // Function to play a chord using Tone.js and Sampler
  /*
  function playChord(notes, duration = "2n") {
    // Trigger attack and release for each note in the chord
    Tone.loaded().then(() => {
      notes.forEach(note => {
        sampler.triggerAttackRelease(note, duration);
      })
  }) 
  }
  */

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
    // Initialize an array to store the generated notes
    const scaleNotes = [];
    // Iterate through the notes array, starting from the key index
    interval = scaleIntervals[scale];
    for (const octave of [0, 1, 2]) {
      interval.forEach((add) => {
        const i = startingIndex + add + 12*octave; // Multiply add by 12 to represent a full octave
      scaleNotes.push(notes[i]);
      });
    }
    return scaleNotes;
  }

  function displayScaleNotes(scaleNotes) {
    // Get the container element where scale notes will be displayed
    const scaleNotesContainer = document.getElementById('scaleNotes');

    // Clear any existing content
    scaleNotesContainer.innerHTML = '';

    // Create a new div element to hold the scale notes
    const scaleNotesDiv = document.createElement('div');

    // Set the class for styling
    scaleNotesDiv.className = 'scale-notes';

    // Add the scale notes to the div
    scaleNotes.forEach(note => {
        const noteSpan = document.createElement('span');
        noteSpan.textContent = note;
        scaleNotesDiv.appendChild(noteSpan);
    });

    // Append the div to the container
    scaleNotesContainer.appendChild(scaleNotesDiv);
  }

  // Function to play a chord using Tone.js
  function playChord(notes, duration = "2n",) {
    Tone.loaded().then(() => {
      const synth = new Tone.PolySynth().toDestination();
    
      synth.triggerAttackRelease(notes, duration);
    })
  }
  
  // Event listener for tempo minus button
  tempoMinus.addEventListener('click', function() {
    updateTempo(Math.max(tempo - 5, 20)); // Decrease tempo by 5, with a lower limit of 20
  });

  // Event listener for tempo plus button
  tempoPlus.addEventListener('click', function() {
    updateTempo(tempo + 5); // Increase tempo by 5
  });

  
  // Event listener for scale select dropdown
  const scaleSelect = document.getElementById('scaleSelect');
  scaleSelect.addEventListener('change', function() {
    const scale = scaleSelect.value;
    const key = document.getElementById('keySelect').value;

    displayScaleNotes(generateScaleNotes(scale, key));
  });

  // Event listener for key select dropdown
  const keySelect = document.getElementById('keySelect');
  keySelect.addEventListener('change', function() {
    const key = keySelect.value;
    const scale = document.getElementById('scaleSelect').value;
    displayScaleNotes(generateScaleNotes(scale, key));
  });

  /*
  // Event listener for CMajorChord button
  document.getElementById('CMajorChord').addEventListener('click', function() {
    playChord(["C4", "E4", "G4"]); // C Major Chord
  });

  // Event listener for DMajorChord button
  document.getElementById('DMajorChord').addEventListener('click', function() {
    playChord(["D4", "F#4", "A4"]); // D Major Chord
  });
  */


});
