# Publish Rule

```
## Payload with Data Types: (Device to Cloud on "RULECNT" container)
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
      "lbl": ["RULECNT"],
      "cnf": "irn:rule",
      "con": {
        "cmdID": "<String value>",
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "ctlTy": "<String value>",
        "astTy": "<String value>",
        "ruleID": "<String value>",
        "valH": "<decimal value>",
        "valL": "<decimal value>",
        "astIDH": "<String value>",
        "actH": "<String value>",
        "astIDL": "<String value>",
        "actL": "<String value>"
      }
    }
  },
  "rvi": "3"
}
```

```
## Publish Rule Payload with Sample Values:
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
      "lbl": ["RULECNT"],
      "cnf": "irn:rule",
      "con": {
        "cmdID": "67676",
        "devID": "0362500001",
        "astID": "0360500001",
        "pstID": "0360200001",
        "vndID": "11",
        "appID": "03",
        "ctlTy": "07",
        "astTy": "05",
        "ruleID": "01",
        "valH": 300,
        "valL": 10,
        "astIDH": "0360100002",
        "actH": "1",
        "astIDL": "0360100003",
        "actL": "0"
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