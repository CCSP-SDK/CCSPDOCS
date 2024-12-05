# Irniyantrac Control Notifications

## Connect Time/Sync 

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


## Monitoring

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

<!-- ### Field Descriptions:

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


## External Device Monitoring

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

<!-- ### Field Descriptions:

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
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "msgTy": "<String value>",
        "astTy": "<String value>",
        "dgt": "<String value>",
        "senObj": [
          {
            "ty": "<String value>",
            "val": "<Decimal value>"
          },
          {
            "ty": "<String value>",
            "val": "<Decimal value>"
          }
        ]
      }
    }
  },
  "rvi": "3"
}
```

```
## Sensor Values Monitoring Response with Sample Values:
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

## Alerts 

```
## Payload with Data Types: (Device to Cloud on "ALTCNT" container)
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
      "lbl": ["ALTCNT"],
      "cnf": "irn:alert",
      "con": {
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "msgTy": "<String value>",
        "astTy": "<String value>",
        "altTy": "<String value>",
        "dgt": "<String value>",
        "altVal": "<String value>"
      }
    }
  },
  "rvi": "3"
}
```

```
## Alerts Payload Response with Sample Values:
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
      "lbl": ["ALTCNT"],
      "cnf": "irn:alert",
      "con": {
        "devID": "0362500001",
        "astID": "0360400001",
        "pstID": "0360100001",
        "vndID": "11",
        "appID": "03",
        "msgTy": "02",
        "astTy": "04",
        "altTy": "01",
        "dgt": "26102022075135",
        "altVal": "1"
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
        "cmdID": "<String value>",
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "ctlTy": "<String value>",
        "astTy": "<String value>",
        "dgt": "<String value>",
        "ttl": "<String value>",
        "ctlVal": "<String value>"
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

## Control Subscribe Ack

```
## Payload with Data Types: (Device to Cloud on “ACKCNT” container)
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
      "cnf": "irn:ctrlA",
      "con": {
        "cmdID": "<String value>",
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "msgTy": "<String value>",
        "astTy": "<String value>",
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
      "cnf": "irn:ctrlA",
      "con": {
        "cmdID": "64575752",
        "devID": "0362500001",
        "astID": "0360800001",
        "pstID": "0360100001",
        "vndID": "11",
        "appID": "03",
        "msgTy": "03",
        "astTy": "08",
        "ctlTy": "01",
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
- **ot (Originating Timestamp):** Current timestamp of the device when the request is made.
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
        "cmdID": "<String value>",
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "ctlTy": "<String value>",
        "astTy": "<String value>",
        "schID": "<String value>",
        "sts": "<String value>",
        "schtY": "<String value>",
        "wkdy": "<String value>",
        "dwkdy": "<String value>",
        "tmpS": "<String value>",
        "tmpE": "<String value>"
      }
    }
  },
  "rvi": "3"
}
```

```
## Schedule Publish Response with Sample Values:
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

## Schedule Publish Response

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
      "cnf": "irn:schR",
      "con": {
        "cmdID": "<String value>",
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "msgTy": "<String value>",
        "astTy": "<String value>",
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
## Schedule Publish Response with Sample Values:
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
      "cnf": "irn:schR",
      "con": {
        "cmdID": "4545455",
        "devID": "0362500001",
        "astID": "0360400001",
        "pstID": "0360100001",
        "vndID": "11",
        "appID": "03",
        "msgTy": "03",
        "astTy": "04",
        "ctlTy": "04",
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


## Schedule Executed

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
      "cnf": "irn:schEx",
      "con": {
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "msgTy": "<String value>",
        "astTy": "<String value>",
        "dgt": "<String value>",
        "schID": "<String value>",
        "schTy": "<String value>",
        "sts": "<String value>"
      }
    }
  },
  "rvi": "3"
}
```

```
## Schedule Executed Response with Sample Values:
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
      "cnf": "irn:schEx",
      "con": {
        "devID": "0362500001",
        "astID": "0360400001",
        "pstID": "0360100001",
        "vndID": "11",
        "appID": "03",
        "msgTy": "05",
        "astTy": "04",
        "dgt": "26102022075135",
        "schID": "1",
        "schTy": "2",
        "sts": "1"
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
        "cmdID": "<String value>",
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "msgTy": "<String value>",
        "astTy": "<String value>",
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
## Reset Schedule Acknowledgement Payload with Sample Values:
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
  "msgTy": "<String value>",
  "ot": "",
  "pc": {
    "m2m:cin": {
      "lbl": ["CTRLCNT"],
      "cnf": "irn:exSchL",
      "con": {
        "cmdID": "<String value>",
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "astTy": "<String value>",
        "ctlTy": "<String value>",
        "dgt": "<String value>",
        "ctVal": "<String value>"
      }
    }
  },
  "rvi": "3"
}
```

```
## Get Existing Schedule List Payload with Sample Values:
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



## Get Existing Schedule List Response

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
      "cnf": "irn:exSchA",
      "con": {
        "cmdID": "<String value>",
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "msgTy": "<String value>",
        "astTy": "<String value>",
        "ctlTy": "<String value>",
        "dgt": "<String value>",
        "schNo": "<String value>",
        "schId": "<String value>"
      }
    }
  },
  "rvi": "3"
}
```

```
## Get Existing Schedule List Response Payload with Sample Values:
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
      "cnf": "irn:exSchA",
      "con": {
        "cmdID": "335343",
        "devID": "0362500001",
        "astID": "0360400001",
        "pstID": "0360100001",
        "vndID": "11",
        "appID": "03",
        "msgTy": "06",
        "astTy": "04",
        "ctlTy": "06",
        "dgt": "26102022075135",
        "schNo": "3",
        "schId": "1~2~3"
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
        "devID": "<String value>",
        "astID": "<String value>",
        "pstID": "<String value>",
        "vndID": "<String value>",
        "appID": "<String value>",
        "msgTy": "<String value>",
        "astTy": "<String value>",
        "dgt": "<String value>",
        "ruleID": "<String value>",
        "astIDA": "<String value>",
        "acVal": "<decimal value>",
        "ruOut": "<String value>",
        "act": "<String value>"
      }
    }
  },
  "rvi": "3"
}
```

```
## Rule Executed Response with Sample Values:
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
## Reset Rule Payload with Sample Values:
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
