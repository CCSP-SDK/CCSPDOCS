# Cloud/IR-NIYANTRAC Notification Payloads


## Connect Time/Sync Ack 

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
                "devID": <String value>,
                "vndID": <String value>,
                "msgTy": <String value>,
                "ctlTy": <String value>,
                "serTm": <String value>
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

<!-- ### Field Descriptions:

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
-->


<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;CRIS-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 4 represents a content instance resource.</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual request data.
      <ul>
        <li><strong>m2m:cin:</strong> Represents the &lt;contentInstance&gt; object containing:
          <ul>
            <li><strong>lbl:</strong> The labels attached to the &lt;contentInstance&gt; resource in the request.</li>
            <li><strong>cnf:</strong> It represents the content info attribute of the &lt;contentInstance&gt; resource.</li>
            <li><strong>con:</strong> The content of the &lt;contentInstance&gt; resource.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>

## Connect Time/Sync Ack Response

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
                "devID": <String value>,
                "vndID": <String value>,
                "msgTy": <String value>,
                "ctlTy": <String value>,
                "dgt": <String value>,
                "ackVal": <String value>
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

<!-- ### Field Descriptions:

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
-->


<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 4 represents a content instance resource.</li>
    <li><strong>msgTy (Message Type):</strong> Message Type (String value).</li>
    <li><strong>ot (Originating Timestamp):</strong> The current Timestamp of the device when the request is made.</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual request data.
      <ul>
        <li><strong>m2m:cin:</strong> Represents the &lt;contentInstance&gt; object containing:
          <ul>
            <li><strong>lbl:</strong> The labels attached to the &lt;contentInstance&gt; resource in the request.</li>
            <li><strong>cnf:</strong> It represents the content info attribute of the &lt;contentInstance&gt; resource.</li>
            <li><strong>con:</strong> The content of the &lt;contentInstance&gt; resource.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>



## Sensor Values Monitoring 

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
      "cnf": "irn:smnt",
      "con": {
        "devID": <String value>,
        "astID": <String value>,
        "pstID": <String value>,
        "vndID": <String value>,
        "appID": <String value>,
        "msgTy": <String value>,
        "astTy": <String value>,
        "dgt": <String value>,
        "senObj": [
          {
            "ty": <String value>,
            "val": <Decimal value>
          },
          {
            "ty": <String value>,
            "val": <Decimal value>
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
      "cnf": "irn:smnt",
      "con": {
        "devID": "0362500001",
        "astID": "0360500001",
        "pstID": "0360200001",
        "vndID": "11",
        "appID": "03",
        "msgTy": "01",
        "astTy": "05",
        "dgt": "26102022075135",
        "senObj": [
          {
            "ty": "01",
            "val": 3.4
          },
          {
            "ty": "02",
            "val": 40.5
          }
        ]
      }
    }
  },
  "rvi": "3"
}
```

<!-- ### Field Descriptions:

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
    - **cnf:** Represents the content info attribute of the `<contentInstance>` resource.
    - **con:** The content of the `<contentInstance>` resource.
- **rvi (Release Version Indicator):** Specifies the version of the oneM2M release being used in the request.
-->

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 4 represents a content instance resource.</li>
    <li><strong>msgTy (Message Type):</strong> Message Type (String value).</li>
    <li><strong>ot (Originating Timestamp):</strong> The current Timestamp of the device when the request is made.</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual request data.
      <ul>
        <li><strong>m2m:cin:</strong> Represents the &lt;contentInstance&gt; object containing:
          <ul>
            <li><strong>lbl:</strong> The labels attached to the &lt;contentInstance&gt; resource in the request.</li>
            <li><strong>cnf:</strong> It represents the content info attribute of the &lt;contentInstance&gt; resource.</li>
            <li><strong>con:</strong> The content of the &lt;contentInstance&gt; resource.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>


## Control Publish-Operation

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
      "cnf": "irn:ctrl",
      "con": {
        "cmdID": <String value>,
        "devID": <String value>,
        "astID": <String value>,
        "pstID": <String value>,
        "vndID": <String value>,
        "appID": <String value>,
        "ctlTy": <String value>,
        "astTy": <String value>,
        "dgt": <String value>,
        "ttl": <String value>,
        "ctlVal": <String value>
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
      "cnf": "irn:ctrl",
      "con": {
        "cmdID": "64575752",
        "devID": "0362500001",
        "astID": "0360800001",
        "pstID": "0360100001",
        "vndID": "11",
        "appID": "03",
        "ctlTy": "01",
        "astTy": "08",
        "dgt": "26102022075135",
        "ttl": "26102022082135",
        "ctlVal": "1"
      }
    }
  },
  "rvi": "3"
}
```

<!-- ### Field Descriptions:

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
-->


<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;CRIS-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 4 represents a content instance resource.</li>
    <li><strong>msgTy (Message Type):</strong> Message Type (String value).</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual request data.
      <ul>
        <li><strong>m2m:cin:</strong> Represents the &lt;contentInstance&gt; object containing:
          <ul>
            <li><strong>lbl:</strong> The labels attached to the &lt;contentInstance&gt; resource in the request.</li>
            <li><strong>cnf:</strong> It represents the content info attribute of the &lt;contentInstance&gt; resource.</li>
            <li><strong>con:</strong> The content of the &lt;contentInstance&gt; resource.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>


## Control Publish Sensor Calibration

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
        "cmdID": <String value>,
        "devID": <String value>,
        "astID": <String value>,
        "pstID": <String value>,
        "vndID": <String value>,
        "appID": <String value>,
        "ctlTy": <String value>,
        "astTy": <String value>,
        "dgt": <String value>,
        "min": <Decimal value>,
        "max": <Decimal value>,
        "unt": <String value>
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

<!-- ### Field Descriptions:

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
-->


<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;CRIS-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 4 represents a content instance resource.</li>
    <li><strong>msgTy (Message Type):</strong> Message Type (String value).</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual request data.
      <ul>
        <li><strong>m2m:cin:</strong> Represents the &lt;contentInstance&gt; object containing:
          <ul>
            <li><strong>lbl:</strong> The labels attached to the &lt;contentInstance&gt; resource in the request.</li>
            <li><strong>cnf:</strong> It represents the content info attribute of the &lt;contentInstance&gt; resource.</li>
            <li><strong>con:</strong> The content of the &lt;contentInstance&gt; resource.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>


## Schedule Publish

```
## Payload with Data Types: (Device to Cloud on "SCHCNT" container)
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
      "lbl": ["SCHCNT"],
      "cnf": "irn:sch",
      "con": {
        "cmdID": <String value>,
        "devID": <String value>,
        "astID": <String value>,
        "pstID": <String value>,
        "vndID": <String value>,
        "appID": <String value>,
        "ctlTy": <String value>,
        "astTy": <String value>,
        "schID": <String value>,
        "sts": <String value>,
        "schtY": <String value>,
        "wkdy": <String value>,
        "dwkdy": <String value>,
        "tmpS": <String value>,
        "tmpE": <String value>
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
      "lbl": ["SCHCNT"],
      "cnf": "irn:sch",
      "con": {
        "cmdID": "4545455",
        "devID": "0362500001",
        "astID": "0360800001",
        "pstID": "0360100001",
        "vndID": "11",
        "appID": "03",
        "ctlTy": "04",
        "astTy": "08",
        "schID": "1",
        "sts": "0",
        "schtY": "2",
        "wkdy": "01111111",
        "dwkdy": "127",
        "tmpS": "26102022005135",
        "tmpE": "26102022075135"
      }
    }
  },
  "rvi": "3"
}
```

<!-- ### Field Descriptions:

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
-->

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;CRIS-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 4 represents a content instance resource.</li>
    <li><strong>msgTy (Message Type):</strong> Message Type (String value).</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual request data.
      <ul>
        <li><strong>m2m:cin:</strong> Represents the &lt;contentInstance&gt; object containing:
          <ul>
            <li><strong>lbl:</strong> The labels attached to the &lt;contentInstance&gt; resource in the request.</li>
            <li><strong>cnf:</strong> It represents the content info attribute of the &lt;contentInstance&gt; resource.</li>
            <li><strong>con:</strong> The content of the &lt;contentInstance&gt; resource.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>


## Reset Schedule

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
        "cmdID": <String value>,
        "devID": <String value>,
        "astID": <String value>,
        "pstID": <String value>,
        "vndID": <String value>,
        "appID": <String value>,
        "ctlTy": <String value>,
        "astTy": <String value>,
        "dgt": <String value>,
        "ctlVal": <String value>
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

<!-- ### Field Descriptions:

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
-->


<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;CRIS-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 4 represents a content instance resource.</li>
    <li><strong>msgTy (Message Type):</strong> Message Type (String value).</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual request data.
      <ul>
        <li><strong>m2m:cin:</strong> Represents the &lt;contentInstance&gt; object containing:
          <ul>
            <li><strong>lbl:</strong> The labels attached to the &lt;contentInstance&gt; resource in the request.</li>
            <li><strong>cnf:</strong> It represents the content info attribute of the &lt;contentInstance&gt; resource.</li>
            <li><strong>con:</strong> The content of the &lt;contentInstance&gt; resource.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>


## Reset Schedule Acknowledgement

```
## Payload with Data Types: (Device to Cloud on "ACKCNT" container)
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
      "cnf": "irn:reSchA",
      "con": {
        "cmdID": <String value>,
        "devID": <String value>,
        "astID": <String value>,
        "pstID": <String value>,
        "vndID": <String value>,
        "appID": <String value>,
        "msgTy": <String value>,
        "astTy": <String value>,
        "ctlTy": <String value>,
        "dgt": <String value>,
        "ackVal": <String value>
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
      "lbl": ["ACKCNT"],
      "cnf": "irn:reSchA",
      "con": {
        "cmdID": "343434",
        "devID": "0362500001",
        "astID": "0360400001",
        "pstID": "0360100001",
        "vndID": "11",
        "appID": "03",
        "msgTy": "03",
        "astTy": "04",
        "ctlTy": "05",
        "dgt": "26102022075135",
        "ackVal": "1"
      }
    }
  },
  "rvi": "3"
}
```

<!-- ### Field Descriptions:

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
    - **cnf:** Represents the content info attribute of the `<contentInstance>` resource.
    - **con:** The content of the `<contentInstance>` resource.
- **rvi (Release Version Indicator):** Specifies the version of the oneM2M release being used in the request.
-->


<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 4 represents a content instance resource.</li>
    <li><strong>msgTy (Message Type):</strong> Message Type (String value).</li>
    <li><strong>ot (Originating Timestamp):</strong> The current Timestamp of the device when the request is made.</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual request data.
      <ul>
        <li><strong>m2m:cin:</strong> Represents the &lt;contentInstance&gt; object containing:
          <ul>
            <li><strong>lbl:</strong> The labels attached to the &lt;contentInstance&gt; resource in the request.</li>
            <li><strong>cnf:</strong> It represents the content info attribute of the &lt;contentInstance&gt; resource.</li>
            <li><strong>con:</strong> The content of the &lt;contentInstance&gt; resource.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>



## Get Existing Schedule List

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
  "msgTy": <String value>,
  "ot": "",
  "pc": {
    "m2m:cin": {
      "lbl": ["CTRLCNT"],
      "cnf": "irn:exSchL",
      "con": {
        "cmdID": <String value>,
        "devID": <String value>,
        "astID": <String value>,
        "pstID": <String value>,
        "vndID": <String value>,
        "appID": <String value>,
        "astTy": <String value>,
        "ctlTy": <String value>,
        "dgt": <String value>,
        "ctVal": <String value>
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
  "msgTy": "04",
  "ot": "",
  "pc": {
    "m2m:cin": {
      "lbl": ["CTRLCNT"],
      "cnf": "irn:exSchL",
      "con": {
        "cmdID": "335343",
        "devID": "0362500001",
        "astID": "0360400001",
        "pstID": "0360100001",
        "vndID": "11",
        "appID": "03",
        "astTy": "04",
        "ctlTy": "06",
        "dgt": "26102022075135",
        "ctVal": "1"
      }
    }
  },
  "rvi": "3"
}
```

<!-- ### Field Descriptions:

- **op (Operation):** 1 signifies a create operation.
- **to (To):** The target resource, represented by `<container-ResourceId>`.
- **fr (From):** The originator of the request, represented by `<CRIS-AE-ID>`.
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
-->

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 4 represents a content instance resource.</li>
    <li><strong>msgTy (Message Type):</strong> Message Type (String value).</li>
    <li><strong>ot (Originating Timestamp):</strong> The current Timestamp of the device when the request is made.</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual request data.
      <ul>
        <li><strong>m2m:cin:</strong> Represents the &lt;contentInstance&gt; object containing:
          <ul>
            <li><strong>lbl:</strong> The labels attached to the &lt;contentInstance&gt; resource in the request.</li>
            <li><strong>cnf:</strong> It represents the content info attribute of the &lt;contentInstance&gt; resource.</li>
            <li><strong>con:</strong> The content of the &lt;contentInstance&gt; resource.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>


## Publish Rule

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
        "cmdID": <String value>,
        "devID": <String value>,
        "astID": <String value>,
        "pstID": <String value>,
        "vndID": <String value>,
        "appID": <String value>,
        "ctlTy": <String value>,
        "astTy": <String value>,
        "ruleID": <String value>,
        "valH": <Decimal value>,
        "valL": <Decimal value>,
        "astIDH": <String value>,
        "actH": <String value>,
        "astIDL": <String value>,
        "actL": <String value>
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
<!-- ### Field Descriptions:

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
-->

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;CRIS-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 4 represents a content instance resource.</li>
    <li><strong>msgTy (Message Type):</strong> Message Type (String value).</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual request data.
      <ul>
        <li><strong>m2m:cin:</strong> Represents the &lt;contentInstance&gt; object containing:
          <ul>
            <li><strong>lbl:</strong> The labels attached to the &lt;contentInstance&gt; resource in the request.</li>
            <li><strong>cnf:</strong> It represents the content info attribute of the &lt;contentInstance&gt; resource.</li>
            <li><strong>con:</strong> The content of the &lt;contentInstance&gt; resource.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>


## Rule Executed Response

```
## Payload with Data Types: (Device to Cloud on "ACKCNT" container)
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
      "cnf": "irn:ruleER",
      "con": {
        "devID": <String value>,
        "astID": <String value>,
        "pstID": <String value>,
        "vndID": <String value>,
        "appID": <String value>,
        "msgTy": <String value>,
        "astTy": <String value>,
        "dgt": <String value>,
        "ruleID": <String value>,
        "astIDA": <String value>,
        "acVal": <Decimal value>,
        "ruOut": <String value>,
        "act": <String value>
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
      "lbl": ["ACKCNT"],
      "cnf": "irn:ruleER",
      "con": {
        "devID": "0362500001",
        "astID": "0360500001",
        "pstID": "0360200001",
        "vndID": "11",
        "appID": "03",
        "msgTy": "07",
        "astTy": "05",
        "dgt": "26102022075135",
        "ruleID": "1",
        "astIDA": "0360100001",
        "acVal": 100,
        "ruOut": "1",
        "act": "1"
      }
    }
  },
  "rvi": "3"
}
```

<!-- ### Field Descriptions:

- **op (Operation):** 1 signifies a create operation.
- **to (To):** The target resource, represented by `<container-ResourceId>`.
- **fr (From):** The originator of the request, represented by `<DEVICE-AE-ID>`.
- **rqi (Request Identifier):** A unique request identifier.
- **ty (Resource Type):** 4 represents a content instance resource.
- **msgTy (Message Type):** Message Type (String value).
- **ot (Originating Timestamp):** The current Timestamp of the device when the request is made.
- **pc (Primitive Content):** Contains the actual request data.
  - **m2m:cin:** Represents the `<contentInstance>` object containing:
    - **lbl:** The labels attached to the `<contentInstance>` resource in the request.
    - **cnf:** Represents the content info attribute of the `<contentInstance>` resource.
    - **con:** The content of the `<contentInstance>` resource.
- **rvi (Release Version Indicator):** Specifies the version of the oneM2M release being used in the request.
-->

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 4 represents a content instance resource.</li>
    <li><strong>msgTy (Message Type):</strong> Message Type (String value).</li>
    <li><strong>ot (Originating Timestamp):</strong> The current Timestamp of the device when the request is made.</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual request data.
      <ul>
        <li><strong>m2m:cin:</strong> Represents the &lt;contentInstance&gt; object containing:
          <ul>
            <li><strong>lbl:</strong> The labels attached to the &lt;contentInstance&gt; resource in the request.</li>
            <li><strong>cnf:</strong> It represents the content info attribute of the &lt;contentInstance&gt; resource.</li>
            <li><strong>con:</strong> The content of the &lt;contentInstance&gt; resource.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>


## Reset Rule

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
      "cnf": "irn:ruleRe",
      "con": {
        "cmdID": <String value>,
        "devID": <String value>,
        "astID": <String value>,
        "pstID": <String value>,
        "vndID": <String value>,
        "appID": <String value>,
        "ctlTy": <String value>,
        "astTy": <String value>,
        "dgt": <String value>,
        "ctlVal": <String value>
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
      "cnf": "irn:ruleRe",
      "con": {
        "cmdID": "64575752",
        "devID": "0362500001",
        "astID": "0360500001",
        "pstID": "0360200001",
        "vndID": "11",
        "appID": "03",
        "ctlTy": "08",
        "astTy": "05",
        "dgt": "26102022075135",
        "ctlVal": "1"
      }
    }
  },
  "rvi": "3"
}
```
<!-- ### Field Descriptions

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
-->

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;CRIS-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 4 represents a content instance resource.</li>
    <li><strong>msgTy (Message Type):</strong> Message Type (String value).</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual request data.
      <ul>
        <li><strong>m2m:cin:</strong> Represents the &lt;contentInstance&gt; object containing:
          <ul>
            <li><strong>lbl:</strong> The labels attached to the &lt;contentInstance&gt; resource in the request.</li>
            <li><strong>cnf:</strong> It represents the content info attribute of the &lt;contentInstance&gt; resource.</li>
            <li><strong>con:</strong> The content of the &lt;contentInstance&gt; resource.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>
