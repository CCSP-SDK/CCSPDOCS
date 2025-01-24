# Containers and Subscription Payloads


## Alert Container  

This payload is used to create an alert container.  

```
## Payload with Sample Values:
```

```json
{
    "op": 1,
    "to": "<DEVICE-AE-ID>",
    "fr": "<DEVICE-AE-ID>",
    "rqi": "<unique-Request-Identifier>",
    "ty": 3,
    "pc": {
        "m2m:cnt": {
            "rn": "ALTCNT"
        }
    },
    "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to (To):</strong> The target resource, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 3 represents a container resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the resource-specific data. 
      <ul>
        <li><strong>m2m:cnt:</strong> Represents the &lt;container&gt; object containing:
          <ul>
            <li><strong>rn:</strong> The resource name of the container, here "ALTCNT".</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version):</strong> Specifies the version of the oneM2M protocol being used, here "3".</li>
  </ul>

</details>  


## Alert Container Subscription  

This payload creates a subscription resource for the alert container. It is used to enable event notifications based on certain conditions, such as thresholds or specific data changes.  

```
## Payload with Sample Values:
```

```json
{
    "op": 1,
    "to": "<container-ResourceId>",
    "fr": "<DEVICE-AE-ID>",
    "rqi": "<unique-Request-Identifier>",
    "ty": 23,
    "pc": {
        "m2m:sub": {
            "rn": "ALTSUB",
            "enc": {
                "net": [3],
                "chty": [4]
            },
            "eeno": true,
            "nu": [
                "<registrarUrl>/oneM2M/req/irn/alt/json"
            ],
            "nct": 1
        }
    },
    "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation for the subscription.</li>
    <li><strong>to:</strong> The target resource for the subscription, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier used for tracking the subscription request.</li>
    <li><strong>ty (Resource Type):</strong> 23 indicates the subscription resource type.</li>
    <li><strong>pc (Payload Content):</strong> Contains the details of the subscription, such as:
      <ul>
        <li><strong>rn:</strong> The name of the subscription, here represented as "ALTSUB".</li>
        <li><strong>enc:</strong> Encoding details for the subscription, including:
          <ul>
            <li><strong>net:</strong> A list of notification types, here [3].</li>
            <li><strong>chty:</strong> A list of content types, here [4].</li>
          </ul>
        </li>
        <li><strong>eeno:</strong> Indicates if event notifications are enabled; set to <code>true</code>.</li>
        <li><strong>nu:</strong> The URL for the notification receiving endpoint, here &lt;registrarUrl&gt;/oneM2M/req/irn/json.</li>
        <li><strong>nct:</strong> The notification condition type, set to <code>1</code>.</li>
      </ul>
    </li>
    <li><strong>rvi:</strong> Specifies the release version of the oneM2M protocol being used, here "3".</li>
  </ul>

</details>  

## Alert Buffer Container  

This payload is used to create an alert buffer container. It represents a resource for managing event-driven notifications in a oneM2M-compliant system.  

```
## Payload with Sample Values:
```

```json
{
    "op": 1,
    "to": "<DEVICE-AE-ID>",
    "fr": "<DEVICE-AE-ID>",
    "rqi": "<unique-Request-Identifier>",
    "ty": 3,
    "pc": {
        "m2m:cnt": {
            "rn": "ALTBUFCNT"
        }
    },
    "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to:</strong> The target resource, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier used for tracking the request.</li>
    <li><strong>ty (Resource Type):</strong> 3 represents a container resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the resource-specific data, such as the container name. Here, a container with the resource name <code>ALTBUFCNT</code> is being created.</li>
    <li><strong>rvi (Release Version):</strong> Specifies the version of the oneM2M protocol being used, here "3".</li>
  </ul>

</details>  



## Alert Buffer Container Subscription  

This payload creates a subscription resource for the alert buffer container. It is used to enable event notifications based on specific conditions or resource changes.  

```
## Payload with Sample Values:
```

```json
{
    "op": 1,
    "to": "<container-ResourceId>",
    "fr": "<DEVICE-AE-ID>",
    "rqi": "<unique-Request-Identifier>",
    "ty": 23,
    "pc": {
        "m2m:sub": {
            "rn": "ALTBUFSUB",
            "enc": {
                "net": [3],
                "chty": [4]
            },
            "eeno": true,
            "nu": [
                "<registrarUrl>/oneM2M/req/irnbuf/alt/json"
            ],
            "nct": 1
        }
    },
    "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation for the subscription.</li>
    <li><strong>to:</strong> The target resource for the subscription, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier for tracking the subscription request.</li>
    <li><strong>ty (Resource Type):</strong> 23 indicates a subscription resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the subscription details:
      <ul>
        <li><strong>rn (Resource Name):</strong> The name of the subscription resource, e.g., <code>ALTBUFSUB</code>.</li>
        <li><strong>enc (Event Notification Criteria):</strong> Contains:
          <ul>
            <li><strong>net (Notification Event Types):</strong> Notification event types. Here, 3 represents updates.</li>
            <li><strong>chty (Child Resource Types):</strong> Child resource types to monitor. Here, 4 represents content instances.</li>
          </ul>
        </li>
        <li><strong>eeno (Event Notification Optimization):</strong> Whether event notification optimization is enabled (true/false).</li>
        <li><strong>nu (Notification URI):</strong> The list of URIs for receiving notifications, e.g., <code>&lt;registrarUrl&gt;/oneM2M/req/irnbuf/alt/json</code>.</li>
        <li><strong>nct (Notification Content Type):</strong> Indicates the type of content to include in the notification. Here, 1 represents resource representation.</li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the oneM2M protocol version used, here "3".</li>
  </ul>

</details>  



## Acknowledgement Container  

```
## Payload with Sample Values:
```

```json
{
    "op": 1,
    "to": "<DEVICE-AE-ID>",
    "fr": "<DEVICE-AE-ID>",
    "rqi": "<unique-Request-Identifier>",
    "ty": 3,
    "pc": {
        "m2m:cnt": {
            "rn": "ACKCNT"
        }
    },
    "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation for the container.</li>
    <li><strong>to:</strong> The target resource, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier for tracking the creation of the container.</li>
    <li><strong>ty (Resource Type):</strong> 3 represents a container resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the container's resource-specific data. In this case, a container with the name <code>ACKCNT</code> is created.</li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the oneM2M protocol version used, here "3".</li>
  </ul>

</details>



## Acknowledgement Container Subscription  

```
## Payload with Sample Values:
```

```json
{
    "op": 1,
    "to": "<container-ResourceId>",
    "fr": "<DEVICE-AE-ID>",
    "rqi": "<unique-Request-Identifier>",
    "ty": 23,
    "pc": {
        "m2m:sub": {
            "rn": "ACKSUB",
            "enc": {
                "net": [3],
                "chty": [4]
            },
            "eeno": true,
            "nu": [
                "<registrarUrl>/oneM2M/req/irn/ack/json"
            ],
            "nct": 1
        }
    },
    "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation for the subscription.</li>
    <li><strong>to:</strong> The target resource for the subscription, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier for tracking the subscription request.</li>
    <li><strong>ty (Resource Type):</strong> 23 indicates a subscription resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the subscription-specific details:
        <ul>
            <li><strong>rn (Resource Name):</strong> The name of the subscription resource (<code>ACKSUB</code>).</li>
            <li><strong>enc (Event Notification Criteria):</strong>
                <ul>
                    <li><strong>net:</strong> Notification event types. Here, 3 represents updates.</li>
                    <li><strong>chty:</strong> Child resource types to monitor. Here, 4 represents content instances.</li>
                </ul>
            </li>
            <li><strong>eeno:</strong> Enable event notification optimization (true/false).</li>
            <li><strong>nu (Notification URI):</strong> A list of URIs to send notifications to (e.g., <code>&lt;registrarUrl&gt;/oneM2M/req/irn/ack/json</code>).</li>
            <li><strong>nct:</strong> Notification content type. Here, 1 indicates resource representation.</li>
        </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M protocol being used, here "3".</li>
  </ul>

</details>


## Acknowledgement Buffer Container  

```
## Payload with Sample Values:
```

```json
{
    "op": 1,
    "to": "<DEVICE-AE-ID>",
    "fr": "<DEVICE-AE-ID>",
    "rqi": "<unique-Request-Identifier>",
    "ty": 3,
    "pc": {
        "m2m:cnt": {
            "rn": "ACKBUFCNT"
        }
    },
    "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to:</strong> The target resource, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 3 represents a container resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the resource-specific data. Here, a container with the resource name <code>ACKBUFCNT</code> is being created.</li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M protocol being used, here "3".</li>
  </ul>

</details>


## Acknowledgement Buffer Container Subscription  

```
## Payload with Sample Values:
```

```json
{
    "op": 1,
    "to": "<container-ResourceId>",
    "fr": "<DEVICE-AE-ID>",
    "rqi": "<unique-Request-Identifier>",
    "ty": 23,
    "pc": {
        "m2m:sub": {
            "rn": "ACKBUFSUB",
            "enc": {
                "net": [3],
                "chty": [4]
            },
            "eeno": true,
            "nu": [
                "<registrarUrl>/oneM2M/req/irnbuf/ack/json"
            ],
            "nct": 1
        }
    },
    "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to:</strong> The target resource for the subscription, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 23 indicates a subscription resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the subscription-specific details:
      <ul>
        <li><strong>rn (Resource Name):</strong> The name of the subscription resource (<code>ACKBUFSUB</code>).</li>
        <li><strong>enc (Event Notification Criteria):</strong>
          <ul>
            <li><strong>net:</strong> Notification event types. Here, 3 represents updates.</li>
            <li><strong>chty:</strong> Child resource types to monitor. Here, 4 represents content instances.</li>
          </ul>
        </li>
        <li><strong>eeno:</strong> Enable event notification optimization (true/false).</li>
        <li><strong>nu (Notification URI):</strong> A list of URIs to send notifications to (e.g., <code>&lt;registrarUrl&gt;/oneM2M/req/irnbuf/ack/json</code>).</li>
        <li><strong>nct:</strong> Notification content type. Here, 1 indicates resource representation.</li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M protocol being used, here "3".</li>
  </ul>

</details>


## Monitoring Container  

```
## Payload with Sample Values:
```

```json
{
    "op": 1,
    "to": "<DEVICE-AE-ID>",
    "fr": "<DEVICE-AE-ID>",
    "rqi": "<unique-Request-Identifier>",
    "ty": 3,
    "pc": {
        "m2m:cnt": {
            "rn": "MNTCNT"
        }
    },
    "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to:</strong> The target resource, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 3 represents a container resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the resource-specific data:
      <ul>
        <li><strong>rn (Resource Name):</strong> The name of the container resource (<code>MNTCNT</code>).</li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M protocol being used, here "3".</li>
  </ul>

</details>


## Monitoring Container Subscription  

This payload creates a subscription resource for the monitoring container. It enables event notifications based on specific conditions.

```
## Payload with Sample Values:
```

```json
{
    "op": 1,
    "to": "<container-ResourceId>",
    "fr": "<DEVICE-AE-ID>",
    "rqi": "<unique-Request-Identifier>",
    "ty": 23,
    "pc": {
        "m2m:sub": {
            "rn": "MNTSUB",
            "enc": {
                "net": [3],
                "chty": [4]
            },
            "eeno": true,
            "nu": [
                "<registrarUrl>/oneM2M/req/irn/json"
            ],
            "nct": 1
        }
    },
    "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to:</strong> The target resource for the subscription, represented by &lt;container-ResourceId&gt;.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by &lt;DEVICE-AE-ID&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 23 indicates a subscription resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the subscription-specific details.</li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M protocol being used, here "3".</li>
  </ul>

</details>



## Monitoring Buffer Container

This payload creates a container resource for the monitoring buffer.

```json
## Payload with Sample Values:
```

```json
{
  "op": 1,
  "to": "<DEVICE-AE-ID>",
  "fr": "<DEVICE-AE-ID>",
  "rqi": "<unique-Request-Identifier>",
  "ty": 3,
  "pc": {
    "m2m:cnt": {
      "rn": "MNTBUFCNT"
    }
  },
  "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to:</strong> The target resource, represented by <code>&lt;DEVICE-AE-ID&gt;</code>.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by <code>&lt;DEVICE-AE-ID&gt;</code>.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 3 represents a container resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the resource-specific data. Here, a container with the resource name <code>MNTBUFCNT</code> is being created.</li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M protocol being used, here "3".</li>
  </ul>

</details>



## Monitoring Buffer Container Subscription

This payload creates a subscription resource for the monitoring buffer container. It enables event notifications based on specific conditions.

```json
## Payload with Sample Values:
```

```json
{
  "op": 1,
  "to": "<container-ResourceId>",
  "fr": "<DEVICE-AE-ID>",
  "rqi": "<unique-Request-Identifier>",
  "ty": 23,
  "pc": {
    "m2m:sub": {
      "rn": "MNTBUFSUB",
      "enc": {
        "net": [3],
        "chty": [4]
      },
      "eeno": true,
      "nu": [
        "<registrarUrl>/oneM2M/req/irnbuf/mnt/json"
      ],
      "nct": 1
    }
  },
  "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to:</strong> The target resource for the subscription, represented by <code>&lt;container-ResourceId&gt;</code>.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by <code>&lt;DEVICE-AE-ID&gt;</code>.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 23 indicates a subscription resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the subscription-specific details.</li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M protocol being used, here "3".</li>
  </ul>

</details>




## Device Connect Container

This payload is used to create a container resource. In oneM2M architecture, containers act as a logical space to store content instances or organize other resources.

```json
## Payload with Sample Values:
```

```json
{
  "op": 1,
  "to": "<DEVICE-AE-ID>",
  "fr": "<DEVICE-AE-ID>",
  "rqi": "<unique-Request-Identifier>",
  "ty": 3,
  "pc": {
    "m2m:cnt": {
      "rn": "DEVTMCNT"
    }
  },
  "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to:</strong> The target resource, represented here by <code>&lt;DEVICE-AE-ID&gt;</code> (the Application Entity ID of the target device).</li>
    <li><strong>fr (From):</strong> The originator of the request, also <code>&lt;DEVICE-AE-ID&gt;</code>.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique ID for tracking the request.</li>
    <li><strong>ty (Resource Type):</strong> 3 represents a container resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the resource-specific data. Here, a container with the resource name (rn) <code>DEVTMCNT</code> is being created.</li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M protocol being used, here "3".</li>
  </ul>

</details>



## Device Connect Container Subscription

This payload is for creating a subscription resource associated with a container. Subscriptions enable event notifications when specific conditions are met (e.g., resource changes).

```json
## Payload with Sample Values:
```

```json
{
  "op": 1,
  "to": "<container-ResourceId>",
  "fr": "<DEVICE-AE-ID>",
  "rqi": "<unique-Request-Identifier>",
  "ty": 23,
  "pc": {
    "m2m:sub": {
      "rn": "DEVTMSUB",
      "enc": {
        "net": [3],
        "chty": [4]
      },
      "eeno": true,
      "nu": [
        "<registrarUrl>/oneM2M/req/irn/conn/json"
      ],
      "nct": 1
    }
  },
  "rvi": "3"
}
```

<details>
  <summary><strong>Field Descriptions:</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 1 signifies a create operation.</li>
    <li><strong>to:</strong> The target resource for the subscription, represented here by <code>&lt;container-ResourceId&gt;</code>.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by <code>&lt;DEVICE-AE-ID&gt;</code>.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique request identifier.</li>
    <li><strong>ty (Resource Type):</strong> 23 indicates a subscription resource.</li>
    <li><strong>pc (Payload Content):</strong> Contains the subscription-specific details:
        <ul>
          <li><strong>rn (Resource Name):</strong> The name of the subscription resource (<code>DEVTMSUB</code>).</li>
          <li><strong>enc (Event Notification Criteria):</strong>
            <ul>
              <li><strong>net:</strong> Notification event types. Here, 3 represents updates.</li>
              <li><strong>chty:</strong> Child resource types to monitor. Here, 4 represents content instances.</li>
            </ul>
          </li>
          <li><strong>eeno:</strong> Enable event notification optimization (true/false).</li>
          <li><strong>nu (Notification URI):</strong> A list of URIs to send notifications to (e.g., <code>&lt;registrarUrl&gt;/oneM2M/req/irn/conn/json</code>).</li>
          <li><strong>nct:</strong> Notification content type. Here, 1 indicates resource representation.</li>
        </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> The protocol release version being used, here "3".</li>
  </ul>

</details>
