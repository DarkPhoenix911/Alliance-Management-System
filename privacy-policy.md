# AMS Privacy Policy

**Effective date:** September 23, 2026 **Developer:** DarkPhoenix911 **Privacy contact: alliancemanagementsystem@gmail.com | Discord: darkphoenix911** **Official website:** In development; no official AMS website is operating yet.

# 1\. Scope and responsibility

Alliance Management System (AMS) is independently developed software that helps Whiteout Survival alliance leadership organize information using Google Sheets, Google Forms, and Google Apps Script. This policy covers the official, unmodified software distributed by the developer, the official AMS website once published, and information we receive when someone contacts us about support, feedback, or licensing. In this policy, **“we”** means the developer identified above.  
An alliance's installation runs in Google resources controlled by the account used to install it and the people that account authorizes. We do not operate a central database containing alliances' AMS records. An installation owner and its administrators decide what alliance information to enter, who may access it, and how long to keep it. They are responsible for giving their members appropriate notices and responding to requests concerning those alliance records. Installing AMS does **not** automatically give the AMS developer access to an alliance's workbook, Forms, or uploaded evidence.  
User-added Form pictures. The developer does not supply or transfer decorative images from example Forms into an alliance's Forms. The installing user or alliance may add its own pictures after AMS is installed, without changing the required Form structure. The person selecting or adding a picture must verify ownership or permission to use and display it and consider any personal or private information shown. Any copyright, privacy, or other rights violation caused by a user-selected picture is that user's responsibility, not the AMS developer's, to the extent permitted by applicable law. We do not furnish, license, review, or approve such pictures. This is separate from evidence files that Form respondents choose to upload.  
This notice does not replace Google's or GitHub's own privacy policies. Modified or separately operated versions of AMS may behave differently; their operators must describe any additional practices and must not represent this policy as covering changes we do not operate.

# 2\. Information AMS handles within an alliance installation

Depending on what leadership and Form respondents enter, AMS may handle:

* **Member and game information:** in-game names, aliases, nine-digit player IDs, ranks, alliance assignments, membership and account status, furnace levels, power figures, and other game-related information.  
* **Leadership records:** incidents, actions taken, ban records, departures, linked accounts, manually entered leadership notes, and help requests.  
* **Original responses and evidence:** submitted Form answers, links to original response rows, links to screenshots and other optional attachments. Google Forms and Drive, rather than an AMS-run upload server, store uploaded files in the installing account's Google environment.  
* **Local history and audit records:** past known names, membership events, timestamps, affected sheet locations, changes, and editor email addresses when Google makes them available. Google may not disclose an editor's identity for every action.  
* **Local operating details:** workbook and Form references, installation progress, unique transaction identifiers used to avoid duplicate actions, and the timing of scheduled work. These support operation of that installation and are not developer tracking IDs.

Player IDs, aliases, screenshots, and narratives may identify real people or disclose private conversations, even if no legal name is entered. Administrators and respondents should share only what is needed for alliance administration and should avoid passwords, identity documents, payment details, unrelated personal information, or unnecessary sensitive information.  
**“Anonymous” has limits.** Leaving the Member Request name field empty means AMS does not fill in a sender name on the normalized report; it does not guarantee that text, files, filenames, or other context cannot reveal the respondent. Google's File Upload questions require Google-account sign-in to submit a file. The installation owner should explain its actual Form settings and privacy expectations to members.

# 3\. How AMS uses Google permissions

AMS uses the permissions the installing account grants to perform its visible functions:

| Google access | What AMS uses it for |
| :---- | :---- |
| **Sheets** | Read the public, developer-maintained layout blueprint during installation; build and maintain the installing alliance's separate spreadsheet; check player IDs; move relevant records between tabs; and maintain local history and audit information. |
| **Forms** | Create an Incident Report Form and Member Request Form for the installing alliance; connect them to that alliance's spreadsheet; check their setup; and process submitted answers. |
| **Drive** | Find the installation's own newly created Form if setup stops between Form creation and saving its reference. Google's Forms/Drive services also manage normal file-upload storage. AMS does not add an evidence-file organizer or move uploaded screenshots into a developer folder. |
| **Apps Script and scheduled tasks** | Install and run the work that responds to spreadsheet edits and Form submissions, checks ban dates, and reconciles related records after a quiet period. |
| **Account identity, when available** | Attribute local operating/audit events to an editor; if Google does not provide an email address, AMS may use a generic leadership label. |

**The blueprint is a source of spreadsheet layout, not a request for anyone to share their alliance records.** Users do not manually copy the blueprint or give the blueprint owner access to their new workbook. The development script attached to the blueprint is not copied with individual sheets; users install the complete production source in their own new spreadsheet.  
Google's consent screen may describe permissions more broadly than one spreadsheet, Form, or folder. Users should read the actual requested permissions and authorize only software they trust. AMS never needs anyone to send the developer their Google password.  
The source contains a version-check routine that, **if a valid public version-source spreadsheet is configured**, reads version information and updates the local workbook's version display. The v1.8.1 candidate contains an unconfigured placeholder for that version source; a functioning centralized version-check service should not be assumed. The routine is not a route for uploading alliance records.  
A separate Google Cloud/OAuth application, if created and verified later, must be described according to the **actual released distribution method and scopes**. Installing source into one's own spreadsheet-bound Apps Script project does not automatically inherit the verification of a developer-owned OAuth client.

# 4\. No automatic developer telemetry or reporting

**Official AMS does not automatically transmit alliance records, installation identifiers, usage statistics, diagnostic events, error reports, or operational logs to the developer.** There is no approved opt-in heartbeat, anonymous telemetry channel, installation UUID reporting, or developer-facing diagnostic endpoint.  
AMS does maintain an **AMS Log** and other records inside the installing alliance's Google workbook, along with operating information used by its own script. Those are part of running the alliance's installation, not information automatically sent to us. Google's separate service, access, and security logging is governed by Google's policies and should not be confused with AMS developer telemetry.  
Users may choose to send a support email, voluntary bug report, feature suggestion, or licensing inquiry. Such messages are covered by Section 5, rather than by an automatic reporting system. Google authorization or acceptance of the software license does **not** send a support request or authorize the developer to read the alliance's workbook.

# 5\. Information you choose to send to us

If you contact us, we receive the email address or other contact details you provide and the content of your message, including any attachments or links you decide to share. We use them to respond, investigate the reported problem, or discuss a requested license. Please use a small, sanitized example rather than sending an entire workbook or unredacted incident reports.  
We access a particular alliance workbook, Form, or other private file for support only when an authorized person deliberately grants access, or where a specific lawful exception applies. Sharing a file can reveal more than the issue being discussed; provide the least access needed and revoke it when help is finished.  
Commercial licensing and payment processing are not currently offered. Commercial rights to AMS remain reserved under its license. If a commercial licensing service is offered later, we will update this policy before collecting licensing or payment information. A commercial license would not give us routine access to a customer's alliance records.  
You can contact the developer through the official Gmail address, alliancemanagementsystem@gmail.com, or via Discord at darkphoenix911. Correspondence sent by email is processed through Google/Gmail; messages sent through Discord are processed by Discord under its own policies and may remain in your account or conversation history independently of copies we control. We do not currently operate a commercial payment service. If new developer-side support, storage, or payment providers are added, this notice will be updated to identify their role.

# 6\. Official website and outside services

If the official AMS policy and project website is hosted through **GitHub Pages**, GitHub states that it logs and stores visitor IP addresses for security even when visitors are not signed in. See [GitHub Pages data collection](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection) and the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).  
**The official AMS website is still in development. The developer has not deployed additional website analytics, advertising, embedded media, or website tracking through an official AMS site. Once a website launches, this policy will be updated to describe the services and tracking, if any, actually used. Google, GitHub, and Discord may independently process service and security information under their own policies.**  
Google processes data in Google services under its [Privacy Policy](https://policies.google.com/privacy). Other destinations linked from an incident or support request may have their own rules. Public GitHub Issues, discussions, and comments are public or potentially widely visible: do not post private alliance records there.

# 7\. Sharing and limits on use

An installation owner's Google sharing settings determine who can access its workbook, Forms, and uploaded files. Leadership should restrict access to people who need it. **Hiding or protecting a sheet is not the same as preventing a person with workbook access from reading its contents.** Evidence files may have sharing settings different from the workbook containing their links.  
We do not sell or rent alliance records or Google user data. We do not use such information for advertising, data brokerage, credit decisions, unrelated surveillance, or general-purpose AI-model training. Commercial software licensing concerns permission to use the software, not permission to sell members' records.  
Where we receive information directly, we use and share it only as reasonably needed to provide the support or licensing activity requested, with disclosed providers, for legitimate security needs, or as applicable law requires. This policy is intended to describe our handling of Google API data in line with the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including applicable Limited Use requirements, and the [Google Workspace API user-data requirements](https://developers.google.com/workspace/workspace-api-user-data-developer-policy). That statement is **not** a claim that Google has reviewed, approved, or verified the current public-beta candidate.

# 8\. Keeping and deleting information

**Records in an alliance installation.** Its owner controls retention of the workbook, Forms, uploads, audit log, history, and backups. A player leaving the active Roster can retain a Departure Log and name history. Deleting a row from a linked spreadsheet does not necessarily delete the original Google Form response or uploaded file. Direct a request about alliance-held records to that installation's leadership, which should check all relevant copies and applicable obligations.  
**Developer-held support correspondence and voluntary bug reports. We retain support emails, Discord support correspondence, and voluntarily submitted bug-report details for up to 12 months after the request or bug report is closed. If no closure date was recorded, the 12-month period begins with the last substantive correspondence. Records may be kept longer only where a specific legal obligation or necessary security or dispute hold applies, and only for as long as that reason applies.**  
**Developer-held commercial-license records. AMS does not currently issue commercial licenses or process commercial-license payments, so there is no active commercial licensing record-retention program. We will publish the applicable terms and retention practices before offering such a service.**  
**Developer-held backups and saved bug-report copies, if any. We remove copies and backups of a bug report that we directly maintain no later than 12 months after the bug report is closed, except where a specific legal obligation or necessary security or dispute hold applies. Deleting developer-controlled copies does not necessarily erase backups that Google, Discord, or another service provider manages under its own retention practices. We do not operate a developer-side AMS telemetry archive.**  
Deleting or disabling the Apps Script project stops or changes future automation; it does **not** automatically erase the workbook, submitted Google Forms responses, evidence in Drive, copies, or backups. The installation owner should review these resources separately.

# 9\. Choices, corrections, and requests

An authorized owner can manage collaborator access, disable the script's triggers, revoke the relevant Google authorization, and choose whether to retain or delete the alliance's Google resources. Which options are available depends on the account and Google's current interface.  
For information **we actually hold**, contact **alliancemanagementsystem@gmail.com** to request access, correction, deletion, or other rights that apply in your location. We may need limited information to verify a request, but please do not send passwords or unnecessary identity documents. We cannot directly change independently controlled alliance records without appropriate authorization. Rights, legal grounds, and regulator complaint routes depend on applicable law; this policy does not waive them.

# 10\. Security and younger users

We use safeguards appropriate to information we actually hold. Installation owners are responsible for their own Google sharing controls, account security, recovery arrangements, and backups. No service or software can guarantee absolute security. Report suspected official AMS security issues privately to **alliancemanagementsystem@gmail.com**, not through an Issue containing exploitable details or private records.  
AMS is intended for alliance administration, not as a service directed to children under 13\. We do not knowingly seek children's personal information through developer support channels. If someone believes a child sent personal information directly to us, contact us for review. Each independently operated alliance is responsible for how it handles information about younger members in its installation and for complying with applicable protections.

# 11\. Changes and contact

We will publish meaningful changes to this policy with an updated effective date. Updating a web page alone does not authorize a new, undisclosed use of Google information. Before materially changing the official software's use of Google data, we will give any notice and obtain any consent required by applicable rules.  
**Contact: DarkPhoenix911 — alliancemanagementsystem@gmail.com; Discord: darkphoenix911** **Official policy location:** This policy, as published with the official AMS project. A permanent official website permalink will be added after the website launches.
