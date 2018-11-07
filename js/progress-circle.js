var frontEnd = new RadialProgressChart(".progress-circle", {
  diameter: 200,
  max: 100,
  round: true,
  series: [
    {
      labelStart: "\uF105",
      color: {
        linearGradient: {
          x1: "0%",
          y1: "100%",
          x2: "50%",
          y2: "0%",
          spreadMethod: "pad"
        },
        stops: [
          {
            offset: "0%",
            "stop-color": "#fe08b5",
            "stop-opacity": 1
          },
          {
            offset: "100%",
            "stop-color": "#ff1410",
            "stop-opacity": 1
          }
        ]
      }
    }
  ],
  center: {
    content: [
      function(value) {
        return value;
      },
      "%"
    ]
    /* y: 25 */
  }
});

var backEnd = new RadialProgressChart(".progress-circle1", {
  diameter: 200,
  max: 100,
  round: true,
  series: [
    {
      labelStart: "\uF105",
      color: {
        linearGradient: {
          x1: "0%",
          y1: "100%",
          x2: "50%",
          y2: "0%",
          spreadMethod: "pad"
        },
        stops: [
          {
            offset: "0%",
            "stop-color": "#fe08b5",
            "stop-opacity": 1
          },
          {
            offset: "100%",
            "stop-color": "#ff1410",
            "stop-opacity": 1
          }
        ]
      }
    }
  ],
  center: {
    content: [
      function(value) {
        return value;
      },
      "%"
    ]
    /* y: 25 */
  }
});

var dataStorage = new RadialProgressChart(".progress-circle2", {
  diameter: 200,
  max: 100,
  round: true,
  series: [
    {
      labelStart: "\uF105",
      color: {
        linearGradient: {
          x1: "0%",
          y1: "100%",
          x2: "50%",
          y2: "0%",
          spreadMethod: "pad"
        },
        stops: [
          {
            offset: "0%",
            "stop-color": "#fe08b5",
            "stop-opacity": 1
          },
          {
            offset: "100%",
            "stop-color": "#ff1410",
            "stop-opacity": 1
          }
        ]
      }
    }
  ],
  center: {
    content: [
      function(value) {
        return value;
      },
      "%"
    ]
    /* y: 25 */
  }
});

//   setTimeout(loop, 15000)

(function loop() {
  frontEnd.update(80);
  backEnd.update(65);
  dataStorage.update(70);
})();
