# Connect Time/Sync

```
## Payload with Data Types: (Device to Cloud on “DEVTMCNT” container)
```

```json
{
    "op": 1,
    "to": "<container-ResourceId>",
    "fr": "<DEVICE-AE-ID>",
    "rqi": "<unique-Request-Identifier>",
    "ty": 4,
    "msgTy": "<String value>",
    "ot": "",
    "pc": {
        "m2m:cin": {
            "lbl": ["DEVTMCNT"],
            "cnf": "irn:tsyn",
            "con": {
                "devID": "<String value>",
                "vndID": "<String value>",
                "msgTy": "<String value>",
                "imei": "<String value>",
                "cidFg": "<String value>",
                "cid": "<String value>",
                "fwVer": "<String value>",
                "lat": "<decimal value>",
                "lng": "<decimal value>"
            }
        }
    },
    "rvi": "3"
}
```

```
## Connect Time/Sync Payload with Sample Values:
```

```json
{
    "op": 1,
    "to": "<container-ResourceId>",
    "fr": "<DEVICE-AE-ID>",
    "rqi": "<unique-Request-Identifier>",
    "ty": 4,
    "msgTy": "04",
    "ot": "",
    "pc": {
        "m2m:cin": {
            "lbl": ["DEVTMCNT"],
            "cnf": "irn:tsyn",
            "con": {
                "devID": "0362500001",
                "vndID": "11",
                "msgTy": "04",
                "imei": "490154203237518",
                "cidFg": "S",
                "cid": "8991101200003204514",
                "fwVer": "1.0.3",
                "lat": 35.929673,
                "lng": 78.948237
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