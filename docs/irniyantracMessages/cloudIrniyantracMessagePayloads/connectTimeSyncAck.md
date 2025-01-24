# Connect Time/Sync Ack

```
## Payload with Data Types: (Created by CRIS, received as notification by device)
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
            "lbl": ["TMSYNCNT"],
            "cnf": "irn:tsynA",
            "con": {
                "devID": "<String value>",
                "vndID": "<String value>",
                "msgTy": "<String value>",
                "ctlTy": "<String value>",
                "serTm": "<String value>"
            }
        }
    },
    "rvi": "3"
}
```

```
## Connect Time/Sync Ack Payload with Sample Values:
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
            "lbl": ["TMSYNCNT"],
            "cnf": "irn:tsynA",
            "con": {
                "devID": "0362500001",
                "vndID": "11",
                "msgTy": "04",
                "ctlTy": "03",
                "serTm": "261020220751354"
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
    - **cnf:** It represents the content info attribute of the `<contentInstance>` resource.
    - **con:** The content of the `<contentInstance>` resource.
- **rvi (Release Version Indicator):** Specifies the version of the oneM2M release being used in the request.