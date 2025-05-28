# Vendor Configuration and Onboarding Process for IR-NIYANTRAC

---

## OneM2M-AppId Registration

The vendor will register the App-ID in the OneM2M App-ID Registry as `Ra1.<vendor_domain>.irn`. For more details, visit the <a href="https://www.onem2m.org/using-onem2m/apps-ids-registration" target="_blank">OneM2M App-ID Registry</a>.

For detailed steps on how to register the App-ID, please refer to the [OneM2M-AppId Registration page](../oneM2MAppIdRegistration/index.md).

---

## Vendor Configuration

The vendor on receipt of **Letter of Acceptance (LoA)** from the respective railways shall have to contact the **SSE (Station Engineer)** for its vendor configuration. The vendor shall provide all the details as specified in **Clause 18.2** of the published [IR-NIYANTRAC Message Format document](https://drive.google.com/file/d/1AlJyqVTAuHws3nKtmze3yb9llTVZrAXd/view?pli=1){:target="_blank"}.

---

## SSE Responsibilities

The SSE will be configuring the vendor details on the IR-NIYANTRAC portal. Additionally, the SSE shall configure the **Intelligent Field Devices (IFDs)** and their associated assets for the vendor.

Once the IFDs and their assets are configured, the SSE shall email the configuration file for the configured IFD to its vendor.

---

## Onboarding Devices

The vendors have to proceed with onboarding of their devices on the **production setup** ([https://ccspweb.railsaver.gov.in](https://ccspweb.railsaver.gov.in){:target="_blank"}), after they have completed their testing of the firmware for the IFD on the **test infrastructure** ([https://coi.cdot.in](https://coi.cdot.in){:target="_blank"}).

---

## C-DOT Test Infrastructure

**C-DOT** provides a test infrastructure for testing IR-NIYANTRAC messages under its **COI initiative** ([https://coi.cdot.in](https://coi.cdot.in){:target="_blank"}).

### Pre-Testing Requirements

For enabling testing on the C-DOT infrastructure, **C-DOT requires an email** from the CRIS IR-NIYANTRAC team. This email includes:

???+ info "note"
    - All the Vendor details as per the **clause 18.2** of the published [IR-NIYANTRAC Message Format document](https://drive.google.com/file/d/1AlJyqVTAuHws3nKtmze3yb9llTVZrAXd/view?pli=1){:target="_blank"}.
    - Confirmation that the vendor is valid and holds an **LoA** for the specified area.

### Vendor Configuration on COI

Once the email is received from CRIS by C-DOT:

1. The vendor will be configured on the **COI infrastructure**.
2. CRIS will configure the IFD details on the COI for the vendor.
3. The CRIS team will then email the IFD configuration details to the vendor for their testing.

### Post-Configuration Steps

After receiving the configuration details, at a high level, the following steps shall be performed (for detailed flow and understanding, refer to the [IR-NIYANTRAC Message Format document](https://drive.google.com/file/d/1AlJyqVTAuHws3nKtmze3yb9llTVZrAXd/view?pli=1){:target="_blank"}):

1. The vendor shall first **generate a SSL certificate** for the IFD as specified in **Clause 16** of the [IR-NIYANTRAC Message Format document](https://drive.google.com/file/d/1AlJyqVTAuHws3nKtmze3yb9llTVZrAXd/view?pli=1){:target="_blank"}.
2. The vendor’s IFD shall then **create the containers and associated subscriptions** as per **Clause 8** of the [IR-NIYANTRAC Message Format document](https://drive.google.com/file/d/1AlJyqVTAuHws3nKtmze3yb9llTVZrAXd/view?pli=1){:target="_blank"}.
3. Once the containers and subscriptions data have been created successfully, the vendor’s IFD can then **send field data** for various use cases, such as lifts, water pumps, etc., from the IFD as outlined in **Clause 10** of the[IR-NIYANTRAC Message Format document](https://drive.google.com/file/d/1AlJyqVTAuHws3nKtmze3yb9llTVZrAXd/view?pli=1){:target="_blank"}.

---

## Onboarding of Devices on Production Setup

After successful completion of testing on the C-DOT test infrastructure, the vendor can proceed to **onboard their devices on the production setup**.  
This process follows a similar approach to the test configuration:

- The vendor must ensure all post-configuration steps (SSL generation, container/subscription creation, data transmission) are repeated on the **production environment**.
- Any production-specific access or setup details shall be coordinated with the CRIS IR-NIYANTRAC team, as per their instructions.