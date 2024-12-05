# Reset Schedule

```
## Payload with Data Types: (Device to Cloud on "CTRLCNT" container)
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
      "cnf": "irn:reSch",
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
        "ctlVal": "<String value>"
      }
    }
  },
  "rvi": "3"
}
```

```
## Reset Schedule Payload with Sample Values:
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
      "cnf": "irn:reSch",
      "con": {
        "cmdID": "343434",
        "devID": "0362500001",
        "astID": "0360400001",
        "pstID": "0360100001",
        "vndID": "11",
        "appID": "03",
        "ctlTy": "05",
        "astTy": "04",
        "dgt": "26102022075135",
        "ctlVal": "1"
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
- **msgTy (Message Type):** Message Type (String value).
- **pc (Primitive Content):** Contains the actual request data.
  - **m2m:cin:** Represents the `<contentInstance>` object containing:
    - **lbl:** The labels attached to the `<contentInstance>` resource in the request.
    - **cnf:** Represents the content info attribute of the `<contentInstance>` resource.
    - **con:** The content of the `<contentInstance>` resource.
- **rvi (Release Version Indicator):** Specifies the version of the oneM2M release being used in the request.