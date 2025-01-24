# Connect Time/Sync Ack Response

```
## Payload with Data Types:
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
            "lbl": ["ACKCNT"],
            "cnf": "irn:tsynR",
            "con": {
                "devID": "<String value>",
                "vndID": "<String value>",
                "msgTy": "<String value>",
                "ctlTy": "<String value>",
                "dgt": "<String value>",
                "ackVal": "<String value>"
            }
        }
    },
    "rvi": "3"
}
```

```
## Connect Time/Sync Ack Response Payload with Sample Values:
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
            "lbl": ["ACKCNT"],
            "cnf": "irn:tsynR",
            "con": {
                "devID": "0362500001",
                "vndID": "11",
                "msgTy": "08",
                "ctlTy": "03",
                "dgt": "26102022075135",
                "ackVal": "1"
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
- **msgTy (Message Type):** Message Type (String value).
- **ot (Originating Timestamp):** Current Timestamp of the device when the request is made.
- **pc (Primitive Content):** Contains the actual request data.
  - **m2m:cin:** Represents the `<contentInstance>` object containing:
    - **lbl:** The labels attached to the `<contentInstance>` resource in the request.
    - **cnf:** It represents the content info attribute of the `<contentInstance>` resource.
    - **con:** The content of the `<contentInstance>` resource.
- **rvi (Release Version Indicator):** Specifies the version of the oneM2M release being used in the request.