# Alliance Management System (AMS)

**Institutional memory and practical administration for Whiteout Survival alliance leadership.**  
Alliance leadership has enough to do without hunting through DMs for a player's old name, reconstructing last month's power gains, or wondering whether a report was ever addressed. AMS puts those records in one Google Sheets workbook and uses Google Forms and Google Apps Script to handle repeatable recordkeeping.  
**AMS remembers. Leadership decides.** It records what happened and helps leaders find the relevant history; it does not decide whether a person should be admitted, disciplined, removed, or banned based on an alias, past departure, or linked account.  
***Current status: v1.8.1 public-beta candidate; not a certified v2.0.0 release. A live two-pass Google Sheets/Forms installation succeeded, and one valid Incident Form submission created the expected Incident Log and Ban List records. Pre-submit Player ID validation has also been confirmed on a real Google Form. Other AMS workflows need continued beta testing. AMS has not been Google OAuth-verified.***

# Who AMS is for

AMS is designed for alliance leaders and authorized officers who want a lasting, searchable record without operating their own database or paid server. An installation belongs to the installing alliance's Google account; the alliance decides who can access its workbook and Forms. It is not a separately hosted AMS dashboard, and it does not need a live connection to the developer to operate.

# What it does

| Area | What leadership can do |
| :---- | :---- |
| **Roster** | Maintain player ID, in-game name, alias, rank, furnace, power, alliance assignment, account type, and membership status. |
| **Power Tracker** | Track current members' starting and ending power/furnace and calculated growth while preserving an editable beginning baseline. |
| **Player history** | Retain past departures and observed name changes against the same nine-digit Player ID, including returns under a new name. |
| **Player Identity** | Record meaningful linked/farm/secondary-account relationships without treating links as inherited misconduct. |
| **Player Notes** | Keep leadership-authored notes attached to the player, even when Roster rows move. |
| **Incident Log** | Normalize leadership incident submissions; search incident history by exact Player ID; navigate back to the original response and evidence. |
| **Ban List** | Record NAP/Alliance and temporary/permanent bans, leadership decisions, and expiration that requires review rather than an automatic lift. |
| **Member Reports** | Turn member help requests into a distinct follow-up queue, separate from disciplinary incidents. |
| **AMS Log / automation** | Keep a local activity trail, validate identities, synchronize authoritative records, and reconcile managed sheets after edits. |

A nine-digit **Player ID**, not a name or row number, is the identity key. AMS is intended to stop authoritative propagation when identity conflicts need repair; it is not meant to guess which person a malformed ID represents. Mathematical spreadsheet formulas calculate; Apps Script handles controlled data movement.

## What AMS deliberately does *not* do

AMS does not automatically punish a returning player, re-ban someone because an earlier ban expired, or assume two linked accounts deserve the same action. It does not send alliance records, installation IDs, diagnostics, or usage telemetry to its developer. It does not create a second system for moving or renaming evidence files: Google Forms and Drive store uploads, while AMS retains their response/evidence references. Any optional Discord ticket path is a separate, manually managed workflow—not an AMS Discord integration.

# How it is built

* **Google Sheets** is the alliance's workbook and record interface.  
* **Google Forms** collects incident reports and member help requests. AMS makes two new Forms for the installing account.  
* **Google Apps Script** is the JavaScript automation installed *inside the new workbook's bound script project*.  
* A **publicly viewable, script-free layout blueprint** supplies the initial spreadsheet tabs and formatting. The installer copies sheets from it automatically; users do **not** make a manual copy of the template, and the template's bound development script is not copied.

The installing account needs Google permission to create Sheets/Forms, read the public blueprint, manage its new AMS workbook and generated Forms, and create the script's automated triggers. A regular Google account is enough for the intended basic setup, subject to Google's account and service restrictions and quotas. A paid AMS hosting subscription is not required. The installer also adds a nine-digit check with an understandable error to the Incident Form’s Player ID question; the Member Request Form has no Player ID question.

# Installation at a glance

**Use the .gs source and installation guide from the *same* candidate or release.** Read the full [INSTALLATION.md](https://docs.google.com/document/d/1057tjuOWtmb_1OW15SAt_CBD1xLPsX8TH4v6V126Bxc/edit) before starting; it includes clickable Google authorization steps, permission explanations, the two exact File Upload questions, and troubleshooting.

1. Create a genuinely blank Google spreadsheet under the account that will manage AMS.  
2. Open **Extensions → Apps Script**, replace the default editor code with the complete `AMS_v1.8.1_Production.gs` source, save, and select **`setupNewAms`**.  
3. Click **Run** and, when Google prompts, review and authorize the requested permissions. AMS copies the layout sheets and creates two Forms linked to your new workbook.  
4. Open the two **EDIT** links from the Apps Script **Execution log**. Add one File Upload question to each, using the exact titles, placement, and limits in the guide. Google Apps Script cannot add those upload items automatically.  
5. Run `setupNewAms` again to verify both Forms. If the Apps Script editor cannot show a Yes/No confirmation, reload the AMS spreadsheet and select AMS Setup → Confirm uploads and finish installation. Confirm 100 MB per file on both Forms. AMS then finalizes response tabs and installs triggers.  
6. Submit **fictional test records**, with harmless uploads, and check the resulting incident/member report links before using real alliance data.

Do not run any maintenance\_... option in the Apps Script Run dropdown unless the AMS developer specifically instructs you to do so during troubleshooting. There is no actual category in Google's dropdown; maintenance\_ is the support-only prefix. After successful completion, the installer is designed to be a safe no-op on later runs. **Do not** run separate Form builders, manually copy the blueprint, link developer-owned Forms, or install triggers by hand. If a run stops with an error, follow the guide rather than deleting tabs or resetting installation properties.

# Personalize your generated Forms (optional)

AMS creates two Forms but does not copy pictures from the developer's example Forms or supply an image pack. After AMS READY, you may add your own decorative pictures anywhere in either Form, as long as its questions, sections, File Upload items, titles, order, choices, validation and branching remain unchanged. Do not add decorative images during the two-pass setup; they can change the item positions checked by the installer. These pictures are not respondent-uploaded evidence.  
For the Incident Form, a user-provided player-profile screenshot with the Copy ID button circled is recommended near the Player ID question. The user or alliance must supply this screenshot and all other Form pictures, and verify permission to use and display each image. Copyright, privacy, or other rights violations caused by images the user chooses are the user's responsibility, not the AMS developer's, to the extent permitted by applicable law. The developer does not supply, license, approve, or verify user-selected pictures.

# Access, privacy, and trust

The workbook and Forms are created under the installing account; the alliance controls who receives access. AMS operates with that account's authorization and records data in that account's Google resources. The developer does not receive automatic access to the workbook or uploaded evidence, and the production source has **no developer-facing telemetry or automatic bug-report transmission**. The local **AMS Log** and Google's own platform logs are separate from developer telemetry.  
Google may display broad-sounding permissions for Sheets, Forms, and Drive because Apps Script analyzes the source and requests access for the services it uses. In this candidate, Drive access also supports safe recovery of a newly created Form if installation is interrupted before its ID is saved. Trigger permissions allow scheduled and edit/form-submit processing. Read the consent screen; do not approve unfamiliar access requests simply because a README tells you to. For the candidate's expected categories and where to click, see [Granting access in the installation guide](https://docs.google.com/document/d/1057tjuOWtmb_1OW15SAt_CBD1xLPsX8TH4v6V126Bxc/edit).  
**File Upload questions may require respondents to sign in to Google.** Leaving the member-name question empty is not a guarantee of technical anonymity. Uploaded files are held through the installing account's Google Forms/Drive configuration, and access to a shared workbook or linked files should be restricted to trusted leadership. Hidden sheets are *not* a confidentiality boundary for people who already have access to the workbook.  
The developer's Privacy Policy is included in this repository as privacy-policy.md. Future Google OAuth/Cloud verification is not claimed as completed. Copying source into a user's own spreadsheet-bound Apps Script project does not automatically attach that new project to a developer's Google Cloud OAuth client or grant it the developer's verification status.

# Using AMS responsibly

Start with the Roster and state/alliance metadata, enter validated Player IDs, and use the membership Status field as the operational commit point. Keep Power Tracker starting baselines and human notes intact; review warnings against the actual linked records rather than making disciplinary decisions from an icon. Use the Incident Form for actual incidents and the Member Request Form for help requests. Before sharing either Form with a wider audience, review the form wording and whether your alliance really offers the optional Discord ticket path.  
Alliance leaders remain responsible for their data, account sharing, evidence access, and local expectations around retention. This tool is designed for recordkeeping, not a substitute for alliance policies or Google account security.

# Project roadmap

Future directions, **not included promises for this candidate**, include activity/follow-up tracking, event performance, a weighted contribution leaderboard, and a separate NAP/state-management companion. There is no approved plan to add automatic developer telemetry.

# Support and feedback

Use this repository's Issues section when enabled, or email **alliancemanagementsystem@gmail.com**. Bug reporting is voluntary. Do not post private incident screenshots, real player records, OAuth tokens, or unrestricted workbook links in a public issue. A dedicated optional bug-report Form may be linked here when available.

# License

AMS is source-available under the **[official PolyForm Noncommercial License 1.0.0](LICENSE.md)**. Noncommercial rights are governed by the complete, unmodified license text; commercial rights are reserved. This is **not** a claim of OSI-approved open-source licensing. Confirm that the release repository contains that license at the linked filename before publication.  
Copyright © 2026 **DarkPhoenix911**.

# Unofficial fan project

Alliance Management System is an independent community tool, not affiliated with, sponsored by, or endorsed by Whiteout Survival, its publisher, or Google. Game and platform names belong to their respective owners.
