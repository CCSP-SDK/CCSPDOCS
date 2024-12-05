# Monitoring

```
## Payload with Data Types
```

```json
{
  "op": 1,
  "to": "<container-ResourceId>",
  "fr": "<DEVICE-AE-ID>",
  "rqi": "<unique-Request-Identifier>",
  "ty": 4,
  "ot": "<String value>",
  "pc": {
    "m2m:cin": {
      "lbl": ["MNTCNT"],
      "cnf": "irn:mnt",
      "con": {
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "msgTy": "<String value>",
        "astTy": "<String value>",
        "dgt": "<String value>",
        "voltR": "<decimal value>",
        "voltY": "<decimal value>",
        "voltB": "<decimal value>",
        "volRY": "<decimal value>",
        "volYB": "<decimal value>",
        "volBR": "<decimal value>",
        "currR": "<decimal value>",
        "currY": "<decimal value>",
        "currB": "<decimal value>",
        "powFR": "<decimal value>",
        "powFY": "<decimal value>",
        "powFB": "<decimal value>",
        "eneCn": "<decimal value>",
        "power": "<decimal value>",
        "freqY": "<decimal value>",
        "eneEx": "<decimal value>",
        "currN": "<decimal value>",
        "powFT": "<decimal value>",
        "kwR": "<decimal value>",
        "kwY": "<decimal value>",
        "kwB": "<decimal value>",
        "kvaR": "<decimal value>",
        "kvaY": "<decimal value>",
        "kvaB": "<decimal value>",
        "kvaT": "<decimal value>",
        "kvarR": "<decimal value>",
        "kvarY": "<decimal value>",
        "kvarB": "<decimal value>",
        "kvarT": "<decimal value>",
        "iKVAh": "<decimal value>",
        "eKVAh": "<decimal value>",
        "rpLg": "<decimal value>",
        "rpLd": "<decimal value>",
        "thdVR": "<decimal value>",
        "thdVY": "<decimal value>",
        "thdVB": "<decimal value>",
        "thdCR": "<decimal value>",
        "thdCY": "<decimal value>",
        "thdCB": "<decimal value>"
      }
    }
  },
  "rvi": "3"
}
```

```
Payload with Sample Values
```

```json
{
  "op": 1,
  "to": "<container-ResourceId>",
  "fr": "<DEVICE-AE-ID>",
  "rqi": "<unique-Request-Identifier>",
  "ty": 4,
  "ot": "20141003T112032",
  "pc": {
    "m2m:cin": {
      "lbl": ["MNTCNT"],
      "cnf": "irn:mnt",
      "con": {
        "devID": "0362500001",
        "astID": "0360400001",
        "pstID": "0360100001",
        "vndID": "11",
        "appID": "03",
        "msgTy": "01",
        "astTy": "04",
        "dgt": "26102022075135",
        "voltR": 238.45,
        "voltY": 240.34,
        "voltB": 238.52,
        "volRY": 240.45,
        "volYB": 240.23,
        "volBR": 240.65,
        "currR": 12.12,
        "currY": 3.45,
        "currB": 10.23,
        "powFR": 1.1,
        "powFY": 0.4,
        "powFB": -0.3,
        "eneCn": 123.5,
        "power": 22.1,
        "freqY": 50.5,
        "eneEx": 234.5,
        "currN": 10.3,
        "powFT": 1.5,
        "kwR": 55.0,
        "kwY": 77.0,
        "kwB": 50.0,
        "kvaR": 40.0,
        "kvaY": 60.0,
        "kvaB": 80.0,
        "kvaT": 88.0,
        "kvarR": 77.0,
        "kvarY": 87.0,
        "kvarB": 88.0,
        "kvarT": 90.0,
        "iKVAh": 0.0,
        "eKVAh": 0.0,
        "rpLg": 0.0,
        "rpLd": 0.0,
        "thdVR": 0.0,
        "thdVY": 0.0,
        "thdVB": 0.0,
        "thdCR": 0.0,
        "thdCY": 0.0,
        "thdCB": 0.0
      }
    }
  },
  "rvi": "3"
}
```

## Field Descriptions

- **op (Operation):** 1 signifies a create operation.
- **to (To):** The target resource, represented by `<container-ResourceId>`.
- **fr (From):** The originator of the request, represented by `<DEVICE-AE-ID>`.
- **rqi (Request Identifier):** A unique request identifier.
- **ty (Resource Type):** 4 represents a content instance resource.
- **ot (Originating Timestamp):** Current timestamp of the device when the request is made.
- **pc (Primitive Content):** Contains the actual request data.
  - **m2m:cin (Content Instance):** Represents the `<contentInstance>` object containing:
    - **lbl (Label):** The labels attached to the `<contentInstance>` resource in the request.
    - **cnf (Content Info):** Represents the content info attribute of the `<contentInstance>` resource.
    - **con (Content):** The content of the `<contentInstance>` resource, which includes various fields such as:
- **rvi (Release Version Indicator):** Specifies the version of the oneM2M release being used in the request.