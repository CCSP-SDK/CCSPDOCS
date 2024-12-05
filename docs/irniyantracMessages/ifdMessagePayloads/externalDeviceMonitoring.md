# External Device Monitoring

```
## Payload with Data Types: (Device to Cloud on "MNTCNT" container)
```

```json
{
  "op": 1,
  "to": "<container-ResourceId>",
  "fr": "<DEVICE-AE-ID>",
  "rqi": "<unique-Request-Identifier>",
  "ty": 4,
  "ot": "<devTm>",
  "pc": {
    "m2m:cin": {
      "lbl": ["MNTCNT"],
      "cnf": "irn:exMnt",
      "con": {
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "msgTy": "<String value>",
        "astTy": "<String value>",
        "dgt": "<String value>",
        "extObj": [
          {
            "ty": "<String value>",
            "val": "<String value>"
          },
          {
            "ty": "<String value>",
            "val": "<String value>"
          }
        ]
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
  "fr": "<DEVICE-AE-ID>",
  "rqi": "<unique-Request-Identifier>",
  "ty": 4,
  "ot": "20141003T112032",
  "pc": {
    "m2m:cin": {
      "lbl": ["MNTCNT"],
      "cnf": "irn:exMnt",
      "con": {
        "devID": "0362500001",
        "astID": "0360400001",
        "pstID": "0360100001",
        "vndID": "11",
        "appID": "01",
        "msgTy": "01",
        "astTy": "07",
        "dgt": "26102022075135",
        "extObj": [
          {
            "ty": "01",
            "val": "E1"
          },
          {
            "ty": "02",
            "val": "UP"
          }
        ]
      }
    }
  },
  "rvi": "3"
}
```

## Field Descriptions:

- **op (Operation):** 1 signifies a create operation.
- **to (To):** The target resource, represented by `<container-ResourceId>`.
- **fr (From):** The originator of the request, represented by `<DEVICE-AE-ID>`.
- **rqi (Request Identifier):** A unique request identifier.
- **ty (Resource Type):** 4 represents a content instance resource.
- **ot (Originating Timestamp):** Current timestamp of the device when the request is made.
- **pc (Primitive Content):** Contains the actual request data.
  - **m2m:cin:** Represents the `<contentInstance>` object containing:
    - **lbl:** The labels attached to the `<contentInstance>` resource in the request.
    - **cnf:** Represents the content info attribute of the `<contentInstance>` resource.
    - **con:** The content of the `<contentInstance>` resource:
- **rvi (Release Version Indicator):** Specifies the version of the oneM2M release being used in the request.