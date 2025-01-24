# Cloud/IR-NIYANTRAC Notification Payloads

## Notification Payload

```
## (Sample Notify Message) (Flows from CCSP to Device)
```

```json
{
  "op": 5,
  "to": "<registrarURL>/oneM2M/req/<registrarCseId>/<Device-AE-ID>/json",
  "fr": "/<registrarCseId>",
  "rqi": "<unique-Request-Identifier>",
  "ty": 4,
  "pc": {
    "m2m:sgn": {
      "nev": {
        "rep": {
          "m2m:cin": {
            "ty": 4,
            "ri": "D80802",
            "pi": "R2511",
            "ct": "20230624T142248",
            "lt": "20230624T142248",
            "lbl": ["TMSYNCNT"],
            "cnf": "irn:tsynA",
            "rn": "cin82461",
            "et": "20230722T171046",
            "st": 2,
            "cr": "SP11001",
            "cs": 848,
            "con": {
              "devID": "0362200001",
              "vndID": "11",
              "msgTy": "04",
              "ctlTy": "03",
              "serTm": "261020220751354"
            }
          }
        },
        "net": 3
      },
      "sur": "/CSE001/R2524",
      "cr": "Sdev2"
    }
  },
  "rvi": "3"
}
```

<!-- ### Field Descriptions:

- **op (Operation):** 5 signifies a notify operation.
- **to (To):** The target resource, represented by `<registrarURL>/oneM2M/req/<registrarCseId>/<Device-AE-ID>/json`.
- **fr (From):** The originator of the request, represented by `/<registrarCseId>`.
- **rqi (Request Identifier):** A unique identifier for the request.
- **ty (Resource Type):** 4 indicates the resource is a content instance.
- **pc (Primitive Content):** Contains the actual notification data.
  - **m2m:sgn:** Represents the single notification object containing:
    - **sur:** Represents the subscription reference of the notification.
    - **cr:** Represents the creator of the notification.
- **rvi (Release Version Indicator):** Specifies the version of the oneM2M release being used in the request.
-->


<details>
  <summary><strong>Field Descriptions</strong></summary>

  <ul>
    <li><strong>op (Operation):</strong> 5 signifies a notify operation.</li>
    <li><strong>to (To):</strong> The target resource's represented by &lt;registrarURL&gt;/oneM2M/req/&lt;registrarCseId&gt;/&lt;Device-AE-ID&gt;/json.</li>
    <li><strong>fr (From):</strong> The originator of the request, represented by /&lt;registrarCseId&gt;.</li>
    <li><strong>rqi (Request Identifier):</strong> A unique identifier for the request.</li>
    <li><strong>ty (Resource Type):</strong> 4 indicates the resource is a content instance.</li>
    <li><strong>pc (Primitive Content):</strong> Contains the actual notification data.
      <ul>
        <li><strong>m2m:sgn:</strong> Represents the single notification object containing:</li>
          <ul>
            <li><strong>sur:</strong> It represents subscriptionReference of the notification.</li>
            <li><strong>cr:</strong> It represents Creator of the notification.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>rvi (Release Version Indicator):</strong> Specifies the version of the oneM2M release being used in the request.</li>
  </ul>

</details>


## Firmware and Configuration Update Procedure

### Firmware Update Procedure

[![Firmware Update Procedure]][Firmware Update Procedure]  
[Firmware Update Procedure]: ../../images/firmware_update_procedure.png

The firmware update process involves several sequential steps:  

1. **Firmware Image Upload and Update Request:**  
   The firmware image is uploaded, and a firmware update request is sent to the device.

2. **Notification for Firmware Update:**  
   The device receives a notification containing the firmware URL and version details. A sample notification message is shown below:

   ```json
   {
     "op": 5,
     "to": "mqtts://ccsp.m2m.cdot.in/oneM2M/req/CSE001/S0/json",
     "fr": "/CSE001",
     "rqi": "d8d6853f-9ac9-4b55-9c65-b782e450544b",
     "pc": {
       "m2m:sgn": {
         "nev": {
           "rep": {
             "mad:updFe": {
               "ty": 28,
               "ri": "R144297",
               "pi": "<dmFirmware-Resource-ID>",
               "ct": "20230816T095204",
               "lt": "20230816T095204",
               "rn": "updFe196013",
               "et": "20230820T103912",
               "st": 0,
               "cr": "<>",
               "cnd": "org.onem2m.management.action.updateFirmware",
               "cs": 416,
               "fweCm": "34fdfdfdd",
               "versn": "2.0",
               "url": "http://download.com/Beta-Release/2.0"
             }
           },
           "net": 3
         },
         "sur": "/CSE001/R144295",
         "cr": "S0"
       }
     },
     "rvi": "3"
   }
   ```

3. **Firmware Checksum Validation:**  
   Validate the checksum provided in the firmware notification to ensure the integrity of the downloaded firmware.

4. **Firmware Update Process:**  
   The device downloads the firmware from the provided URL and attempts the update. In case of a failure, the device will roll back to the previous version.

5. **Firmware Update Result Submission:**  
   The device sends an update result to the CCSP. Below is an example of the `updateFirmware` message sent by the device:

   ```json
   {
     "op": 3,
     "to": "<updateFirmware-Resource-ID>",
     "fr": "<Device-AE-ID>",
     "rqi": "<unique-Request-Identifier>",
     "pc": {
       "mad:updFe": {
         "resut": true
       }
     },
     "rvi": "3"
   }
   ```

6. **Notifications and Time Synchronization:**  
   After a successful firmware update, the device sends a Time Sync CI message, followed by various notifications for synchronization with CRIS and CCSP. The device adjusts its time based on the Time Sync Ack Notify message.


### Configuration Details Update Procedure

When the configuration file is updated, the process unfolds as follows:  

1. **Configuration Update Notification:**  
   The device receives a notification message for the updated configuration file, as shown below:

   ```json
   {
     "op": 5,
     "to": "mqtts://ccsp.m2m.cdot.in/oneM2M/req/CSE001/SIRNxyz/json",
     "fr": "/CSE001",
     "rqi": "d8d6853f-9ac9-4b55-9c65-b782e450544b",
     "pc": {
       "m2m:sgn": {
         "nev": {
           "rep": {
             "mad:updae": {
               "ty": 28,
               "ri": "<update-Resource-ID>",
               "pi": "<dmPackage-Resource-ID>",
               "ct": "20230816T093524",
               "lt": "20230816T093524",
               "rn": "dmPck196002",
               "et": "20230820T103912",
               "url": "http://download.com/configFile/2.0",
               "versn": "2.0",
               "cnd": "org.onem2m.management.action.update",
               "acpi": ["R021", "<ACP-ID>"]
             }
           },
           "net": 3
         },
         "sur": "/CSE001/R144295",
         "cr": "S0"
       }
     },
     "rvi": "3"
   }
   ```

2. **Processing the Configuration Update:**  
   The device downloads the updated configuration file from the URL provided in the notification.

3. **Updating Version and URL Details:**  
   The device updates the configuration version and submits the result to the CCSP. Below is an example of the message sent by the device:

   ```json
   {
     "op": 3,
     "to": "<dmPackage-Resource-ID>",
     "fr": "<Device-AE-ID>",
     "rqi": "<unique-Request-Identifier>",
     "pc": {
       "mad:dmPae": {
         "versn": "2.0"
       }
     },
     "rvi": "3"
   }
   ```

## Key Notes

??? tip "Key Recommendations for Firmware and Configuration Updates"
    - **Validate Checksums:** Always ensure the checksum provided in the firmware notification matches the checksum of the downloaded firmware to guarantee integrity.
    - **Implement Rollback Mechanisms:** Have a robust rollback mechanism in place to handle firmware update failures and restore the previous stable version.
    - **Ensure Time Synchronization:** After updates, ensure the device synchronizes its time using the Time Sync Ack Notify message to maintain accurate time.
