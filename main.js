var json = {
    "devices": {
      "dev0": {
        "type": "Button",
        "label": "a",
        "net": "a",
        "order": 0,
        "bits": 1
      },
      "dev1": {
        "type": "Button",
        "label": "b",
        "net": "b",
        "order": 1,
        "bits": 1
      },
      "dev2": {
        "type": "Button",
        "label": "d",
        "net": "d",
        "order": 2,
        "bits": 1
      },
      "dev3": {
        "type": "Lamp",
        "label": "o",
        "net": "o",
        "order": 3,
        "bits": 1
      },
      "dev4": {
        "type": "Lamp",
        "label": "c",
        "net": "c",
        "order": 4,
        "bits": 1
      },
      "dev5": {
        "type": "Or",
        "label": "$or$tests/fulladder.sv:28$3",
        "bits": 1
      },
      "dev6": {
        "type": "Subcircuit",
        "label": "ha1",
        "celltype": "halfadder"
      },
      "dev7": {
        "type": "Subcircuit",
        "label": "ha2",
        "celltype": "halfadder"
      }
    },
    "connectors": [
      {
        "to": {
          "id": "dev6",
          "port": "a"
        },
        "from": {
          "id": "dev0",
          "port": "out"
        },
        "name": "a"
      },
      {
        "to": {
          "id": "dev6",
          "port": "b"
        },
        "from": {
          "id": "dev1",
          "port": "out"
        },
        "name": "b"
      },
      {
        "to": {
          "id": "dev7",
          "port": "b"
        },
        "from": {
          "id": "dev2",
          "port": "out"
        },
        "name": "d"
      },
      {
        "to": {
          "id": "dev3",
          "port": "in"
        },
        "from": {
          "id": "dev7",
          "port": "o"
        },
        "name": "o"
      },
      {
        "to": {
          "id": "dev4",
          "port": "in"
        },
        "from": {
          "id": "dev5",
          "port": "out"
        },
        "name": "c"
      },
      {
        "to": {
          "id": "dev5",
          "port": "in1"
        },
        "from": {
          "id": "dev6",
          "port": "c"
        },
        "name": "c1"
      },
      {
        "to": {
          "id": "dev5",
          "port": "in2"
        },
        "from": {
          "id": "dev7",
          "port": "c"
        },
        "name": "c2"
      },
      {
        "to": {
          "id": "dev7",
          "port": "a"
        },
        "from": {
          "id": "dev6",
          "port": "o"
        },
        "name": "t"
      }
    ],
    "subcircuits": {
      "halfadder": {
        "devices": {
          "dev0": {
            "type": "Input",
            "label": "a",
            "net": "a",
            "order": 0,
            "bits": 1
          },
          "dev1": {
            "type": "Input",
            "label": "b",
            "net": "b",
            "order": 1,
            "bits": 1
          },
          "dev2": {
            "type": "Output",
            "label": "o",
            "net": "o",
            "order": 2,
            "bits": 1
          },
          "dev3": {
            "type": "Output",
            "label": "c",
            "net": "c",
            "order": 3,
            "bits": 1
          },
          "dev4": {
            "label": "$and$tests/fulladder.sv:10$2",
            "type": "And",
            "bits": 1
          },
          "dev5": {
            "label": "$xor$tests/fulladder.sv:9$1",
            "type": "Xor",
            "bits": 1
          }
        },
        "connectors": [
          {
            "to": {
              "id": "dev4",
              "port": "in1"
            },
            "from": {
              "id": "dev0",
              "port": "out"
            },
            "name": "a"
          },
          {
            "to": {
              "id": "dev5",
              "port": "in1"
            },
            "from": {
              "id": "dev0",
              "port": "out"
            },
            "name": "a"
          },
          {
            "to": {
              "id": "dev4",
              "port": "in2"
            },
            "from": {
              "id": "dev1",
              "port": "out"
            },
            "name": "b"
          },
          {
            "to": {
              "id": "dev5",
              "port": "in2"
            },
            "from": {
              "id": "dev1",
              "port": "out"
            },
            "name": "b"
          },
          {
            "to": {
              "id": "dev2",
              "port": "in"
            },
            "from": {
              "id": "dev5",
              "port": "out"
            },
            "name": "o"
          },
          {
            "to": {
              "id": "dev3",
              "port": "in"
            },
            "from": {
              "id": "dev4",
              "port": "out"
            },
            "name": "c"
          }
        ]
      }
    }
  };

const circuit1 = new digitaljs.Circuit(json);
const paper1 = circuit1.displayOn($('#paper'));
circuit1.start();