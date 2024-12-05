# Control Publish Sensor Calibration

```
## Payload with Data Types: (Device to Cloud on “CTRLCNT” container)
```

```json
{
  "op": 1,
  "to": "<container-ResourceId>",
  "fr": "<CRIS-AE-ID>",
  "rqi": "<unique-Request-Identifier>",
  "ty": 4,
  "pc": {
    "m2m:cin": {
      "lbl": ["CTRLCNT"],
      "cnf": "irn:ctrlSe",
      "con": {
        "cmdID": "<String value>",
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "ctlTy": "<String value>",
        "astTy": "<String value>",
        "dgt": "<String value>",
        "min": "<decimal value>",
        "max": "<decimal value>",
        "unt": "<String value>"
      }
    }
  },
  "rvi": "3"
}
```

```
## Payload with Sample Values:
```

```json
{
  "op": 1,
  "to": "<container-ResourceId>",
  "fr": "<CRIS-AE-ID>",
  "rqi": "<unique-Request-Identifier>",
  "ty": 4,
  "pc": {
    "m2m:cin": {
      "lbl": ["CTRLCNT"],
      "cnf": "irn:ctrlSe",
      "con": {
        "cmdID": "64575752",
        "devID": "0362500001",
        "astID": "0360500001",
        "pstID": "0360200001",
        "vndID": "11",
        "appID": "03",
        "ctlTy": "02",
        "astTy": "05",
        "dgt": "26102022075135",
        "min": 0,
        "max": 500,
        "unt": "01"
      }
    }
  },
  "rvi": "3"
}
```

## Field Descriptions:

- **op (Operation):** 1 signifies a create operation.
- **to (To):** The target resource, represented by `<container-ResourceId>`.
- **fr (From):** The originator of the request, represented by `<CRIS-AE-ID>`.
- **rqi (Request Identifier):** A unique request identifier.
- **ty (Resource Type):** 4 represents a content instance resource.
- **pc (Primitive Content):** Contains the actual request data.
  - **m2m:cin:** Represents the `<contentInstance>` object containing:
    - **lbl:** The labels attached to the `<contentInstance>` resource in the request.
    - **cnf:** Represents the content info attribute of the `<contentInstance>` resource.
    - **con:** The content of the `<contentInstance>` resource.
- **rvi (Release Version Indicator):** Specifies the version of the oneM2M release being used in the request.