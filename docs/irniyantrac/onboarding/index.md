# Vendor Configuration and Onboarding Process for IR-NIYANTRAC

---

## Vendor Configuration

The vendor on receipt of **Letter of Acceptance (LoA)** from the respective railways shall have to contact the **SSE (Station Engineer)** for its vendor configuration. The vendor shall provide all the details as specified in **Clause 18** of the published [IR-NIYANTRAC Message Format document](https://drive.google.com/file/d/1AlJyqVTAuHws3nKtmze3yb9llTVZrAXd/view?pli=1){:target="_blank"}.

---

## SSE Responsibilities

The SSE will be configuring the vendor details on the IR-NIYANTRAC portal. Additionally, the SSE shall configure the **Intelligent Field Devices (IFDs)** and their associated assets for the vendor.

Once the IFDs and their assets are configured, the SSE shall email the configuration file for the configured IFD to its vendor.

---

## Onboarding Devices

The vendors have to proceed with onboarding of their devices on the **production setup** ([ccsp.railsaver.gov.in](https://niyantrac.railsaver.gov.in/IRNIYANTRAC/){:target="_blank"}), after they have completed their testing of the firmware for the IFD on the **test infrastructure** ([https://coi.cdot.in](https://coi.cdot.in){:target="_blank"}).

---

## C-DOT Test Infrastructure

**C-DOT** provides a test infrastructure for testing IR-NIYANTRAC messages under its **COI initiative** ([https://coi.cdot.in](https://coi.cdot.in){:target="_blank"}).

For enabling testing on the C-DOT infrastructure, **C-DOT requires an email** from the CRIS IR-NIYANTRAC team. This email includes:
- Vendor details.
- Confirmation that the vendor is valid and holds an LoA for the specified area.

Once the email is received from CRIS by C-DOT:
1. The vendor will be configured on the **COI infrastructure**.
2. CRIS will configure the IFD details on the COI for the vendor.
3. The CRIS team will then email the IFD configuration details to the vendor for their testing.

---

## Post-Testing Steps

After receiving the configuration details, at a high level, the following steps shall be performed (for detailed flow and understanding, refer to the [IR-NIYANTRAC Message Format document](https://drive.google.com/file/d/1AlJyqVTAuHws3nKtmze3yb9llTVZrAXd/view?pli=1){:target="_blank"}):

1. The vendor shall then **generate a certificate** for the IFD as specified in **Clause 16** of the IR-NIYANTRAC Message Format document.
2. The vendor’s IFD shall then **create the containers and associated subscriptions** as per **Clause 8** of the IR-NIYANTRAC Message Format document.
3. Once the containers and subscriptions data have been created successfully, the vendor’s IFD can then **send field data** for various use cases, such as lifts, water pumps, etc., from the IFD as outlined in **Clause 10**.
