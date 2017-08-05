module.exports = {
    requirements: "[set, voice] {contact}",
    name: "MoreVoices",
    version: "0.1.0",
    voice: 1,
    voices: {
      John: 1,
      Jake: 2
    },
    OnLoad: function() {
      this.Info(this.name + " " + this.version + " loaded!");
    },
    run: function(input, request) {
      module.exports.voice = input.entities.contact[0].value;
      module.exports.voice = module.exports.voices[module.exports.voice];
    },
    TTS: function(text, logger, cmd, process) {
        cmd.get(
        'curl "https://api.naturalreaders.com/v2/tts/?src=pw&r='+module.exports.voice+'&s=1&t='+escape(text)+'" -o speech.mp3',
        function(err, data, stderr){
          if (!err) {
              if (process.env.os == "mac") {
                  cmd.run('afplay ./speech.mp3')
              }
          } else {
              console.log('error', err)
          }
        }
      );
    }
}
