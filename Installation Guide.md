# Install Alliance Management System (AMS)

**v1.8.1 public-beta candidate — clean-install and upgrade guide. A live two-pass installation and one incident-to-ban workflow succeeded. This is not a certified v2.0.0 release or a claim of Google OAuth verification.** Follow this guide with the matching complete `AMS_v1.8.1_Production.gs` source. Google may vary the wording of buttons and consent prompts by account, browser, and authorization mode. If you would rather download the code and copy/paste, there is an optional .txt file included that is exactly the same.

**AMS has one public installer function: `setupNewAms()`. Run it to build the workbook and Forms, add the two File Upload questions, and run it again to verify. If the editor cannot show the Yes/No confirmation, reload the spreadsheet and use AMS Setup → Confirm uploads and finish installation. You never manually copy the blueprint.**

# Before you start

* Sign in to the Google account that should manage your alliance's AMS. Use an account you can retain access to, not a temporary borrowed account. It is highly recommended to create a brand new google account for each AMS you plan to install (for each alliance you plan to manage) so that each AMS has a dedicated home and owner account.  
* Create a truly **new, empty Google spreadsheet** in that account. The script is not intended to overwrite your current alliance workbook, reuse an already configured Form, or install into the original development template.  
* Have the **complete** .gs source from this same candidate/release. Do not combine code and instructions from different versions or paste only portions of the file.  
* Be able to create/edit Google Sheets and Forms and authorize Apps Script. School/organization administrators may restrict some of these services or external scripts.  
* The installer automatically reads AMS's publicly viewable, script-free **layout blueprint**, then copies its individual tabs into your new spreadsheet. Its bound development Apps Script project is **not copied**. If Google reports that the blueprint cannot be opened, stop and report the error; do not request Editor access or create a substitute template.  
* Allow for Google Drive storage for uploaded screenshots. Forms with File Upload items may require respondents to sign into Google. File Upload on Forms located in shared drives may be unsupported; use a suitable account-owned Form location.

# Step 1 — Create the new, bound Apps Script project

1. Open your **new blank spreadsheet**.  
2. Click **Extensions → Apps Script**. Google opens an Apps Script editor attached to **that** spreadsheet.  
3. Optionally rename the script project to something recognizable, such as AMS — \[Your Alliance\].  
4. Open the default **Code.gs**, delete its starter function, and paste the **entire** production .gs source into the editor. (You may keep the editor filename Code.gs; .gs refers to the source format.)  
5. Click **Save** (disk icon or **Ctrl+S/Cmd+S**).  
6. In the function dropdown near the top, choose **`setupNewAms`**. There must be no parentheses in the dropdown label. Do not select maintenance\_... commands or helper functions ending in \_. The Form submission handler runs automatically; it is not a setup step.  
7. Click **Run** (▶).

## Grant Google access on the first run

The following explains the expected *Google* authorization flow; AMS does **not** have its own password screen. Consent is required so your newly created script can use Google services on your behalf.

1. On **Authorization required**, click **Review permissions** (or the equivalent review/authorize button).  
2. Choose the **Google account that owns or is authorized to manage the new AMS workbook**. If it is the wrong account, go back and switch accounts before approving.  
3. Read the project name and permissions. The label might be your newly named Apps Script project rather than a separately branded “AMS” application. Google can show consent in one combined screen or allow individual permission choices.  
4. If Google displays **“Google hasn't verified this app” / “This app isn't verified”** while you are testing this known source, compare the name/account and make sure you trust the code and its publisher. If you deliberately choose to proceed, Google may offer **Advanced → Go to \[project name\] (unsafe)**, followed by the permission screen. The word **unsafe** is Google's warning, not a step to click unconditionally. If there is no continue option, a Workspace administrator blocks it, or the app is explicitly blocked, **stop**; do not attempt to bypass the restriction.  
5. On Google's consent screen, review the requested categories below. If Google displays selectable checkboxes, enable the categories AMS actually needs to perform the requested installation and automation; then choose **Continue** or **Allow** as shown. Do not click through unexpected permissions without checking them against this guide and the source.  
6. Return to **Apps Script → Executions** or the **Execution log**. If the initial run did not automatically resume after authorization, select setupNewAms and click **Run** again. That repeat is to finish the *first phase*, not permission to skip the later File Upload step.

| Permission you may see | Why this candidate needs it |
| :---- | :---- |
| **Google Sheets / spreadsheets (sometimes phrased broadly as viewing or managing spreadsheets)** | Read the public layout blueprint; copy its tabs into your new workbook; read, format, validate, sort, and reconcile AMS records. The script has APIs capable of accessing other spreadsheets, so do not describe this as “current spreadsheet only.” |
| **Google Forms / forms** | Create your Incident and Member Request Forms, configure supported questions, link responses to your AMS workbook, validate the manual upload items, and process their submissions. |
| **Google Drive / files** | In this candidate, find an exact, uniquely named Form if setup is interrupted after creation but before saving its ID. Google's wording may be wider than that specific recovery use. Forms also use Google Drive to store uploaded files. AMS does not move or reorganize evidence files. |
| **Apps Script triggers / run when you are not present** | Set up edit, change, form-submission, ban-review, version-status, and one-shot delayed reconciliation tasks. Installable triggers execute under the account that creates them. |
| **Basic account identity, if requested** | Attribute operational/audit actions where Google makes that identity available. AMS does not automatically send that information to its developer. |

**Actual permission wording and OAuth scopes are determined by the installed source and Apps Script project configuration.** The v1.8.1 .gs is supplied without a verified final appsscript.json manifest or accepted Google OAuth configuration. Google scans the full script and may request broad scopes; this table explains expected service categories, not a promise of exact consent-screen strings or a pre-approved scope list. This code does not require you to give the AMS developer access to your Drive or share your workbook with them.  
**If you see access to send/read Gmail, request payment, an unfamiliar redirect outside Google, or a requirement to share private files with the developer, stop and check the exact installed source/release.** Do not grant access merely to get past a warning. Google authorization does not involve giving your password to AMS.

# Apps Script function dropdown: Installation vs. Maintenance

Google's Apps Script Run dropdown is a flat list, without real categories. AMS labels its support-only commands with a maintenance\_ prefix so they are easy to recognize. That prefix is a warning, not a technical lock or separate access permission.  
During installation, select only setupNewAms and run it twice as instructed. Do not run any maintenance\_... command unless the AMS developer specifically directs you to run that exact command while troubleshooting. In particular, maintenance\_liftSelectedBan can change a ban record based on the currently selected row, and maintenance\_installTriggers can change the project's automation.  
Maintenance functions do not replace either installation phase or the File Upload checks. The automatic Form submission handler is run by an installed trigger when a Form response arrives; it is not a manual setup step. If you encounter an error, email alliancemanagementsystem@gmail.com with the error message and execution stage before attempting maintenance commands.

# Step 2 — Let the first setup phase finish

The first successful setupNewAms() run should:

1. Copy the approved blueprint's sheet layouts into your new workbook (not its attached script).  
2. Set up the AMS tab layout, formatting, validation, and empty-state presentation.  
3. Create **AMS Incident Report Form — \[your spreadsheet name\]** and **AMS Member Request Form — \[your spreadsheet name\]** under the account running setup.  
4. Link both Forms' response destinations to your **new** AMS spreadsheet.  
5. Log the **EDIT** addresses for both Forms and report that setup is waiting for manual uploads.

In Apps Script, expand **Execution log** below the editor after the run. Find the lines ending in — EDIT:. Open each **edit** link in a new browser tab. If the log is hidden or has disappeared, look at **Executions** for the relevant run. Keep your spreadsheet and script editor available.  
**Do not submit real or test Form responses yet.** Do not copy a developer Form, manually create new response tabs, or start the second phase until both upload questions are in place.

# Step 3 — Add the two File Upload questions yourself

Google's supported Apps Script Forms builder cannot create File Upload questions, so AMS generated the other questions for you and deliberately stopped here. The exact titles and positions below matter because setupNewAms() checks them.  
For **each** newly generated Form:

1. Open its **EDIT** link, not the respondent/published link.  
2. Click **Add question** (\+) on the right-side toolbar.  
3. Open the new question's type dropdown (often starts as **Multiple choice**) and choose **File upload**.  
4. If Google shows **“Let respondents upload files to Drive”**, read it and click **Continue** if you want uploads enabled on this account.  
5. Paste the **exact title** below and drag the question into the prescribed position using the question's drag handle.  
6. Set **Required OFF**, **Allow only specific file types OFF**, and the file count/size below.  
7. Where offered, set **maximum total size for all uploaded files** to **100 GB**, subject to your account's Drive storage. This is a Form-level setting, separate from the per-file limit.

## Incident Report Form

**Exact question title:**  
Supporting Evidence (Upload any screenshots or other evidence related to this incident)  
Put it in the **first section**, immediately **after** What happened? Give a brief summary of the incident. Supporting screenshots can be uploaded at the end. and **before** What action was taken?. In the code this is zero-based item index **5**; you do not need to count zero-based indexes in Google's interface.

* **Required:** OFF  
* **Maximum number of files:** 10  
* **Maximum file size: 100 MB per file**  
* **Allow only specific file types:** OFF

Keep Temporary Ban Details as the later section. Do not alter the generated action choices or their branching rules.

## Member Request Form

**Exact question title** (there are **two spaces** after the first period and **two spaces** after the second):  
Attach any screenshots here (optional).  Note: This form can only accept up to 10 screenshots.  If you have more or are unable to attach them all, please open a ticket in the discord (see above)  
Put it **at the very end**, immediately **after** the Alternative help route section header. In the code this is zero-based item index **3**.

* **Required:** OFF  
* **Maximum number of files:** 10  
* **Maximum file size:** 100 MB **per file**  
* **Allow only specific file types:** OFF

**Optional Discord wording:** The generated member Form refers to a Discord ticket route, but tickets are *not* automatically entered into AMS. If your alliance does not have that route, ask the AMS publisher about a supported wording variant **before modifying the exact upload question title**; this candidate's validator expects the title above. Do not invent a Discord integration or promise that the Form automatically creates a ticket.  
**Privacy note:** Even if someone leaves the Form's “Who are you?” field blank, Google's File Upload feature can require the respondent to sign into a Google account. Do not promise fully anonymous evidence submissions.

# Step 4 — Verify Forms and confirm from the spreadsheet

1. Return to the **same** Apps Script project attached to the **same new workbook**.  
2. Select **`setupNewAms`** in the function dropdown again, then click **Run**.  
3. AMS should verify the saved Form IDs, that the installer can open the Forms, their destinations, one actual File Upload item per Form, exact upload titles/positions, supported question structure, and response-sheet headers. It cannot programmatically inspect every File Upload limit/toggle through the supported FormApp API.  
4. A dialog titled AMS — confirm manual upload settings should appear if Google has an open spreadsheet UI. Otherwise, reload the spreadsheet and click AMS Setup → Confirm uploads and finish installation. Both Forms should use 100 MB per file. Reopen the Forms and check each limit if needed. Select **Yes** *only* if they match the guide; **No** leaves setup waiting and can be retried safely.  
5. AMS should rename the linked raw response tabs **Incident Reports** and **Member Requests**, remove only confirmed-empty installer-owned seed tabs, install its operational/audit/Form/scheduled triggers, and allow responses. The **Execution log** should show the final published **RESPOND** addresses.

If the script asks for extra Google authorization because the saved source or manifest has changed, review it using the same care as in Step 1\. A completed installation is designed not to create a second pair of Forms or duplicate triggers on another setupNewAms() call.

# Optional — Personalize your Forms with your own pictures

After the AMS READY message, you may add decorative pictures anywhere in either generated Form to personalize its appearance or help respondents. AMS does not transfer example pictures from the developer's Forms, and the developer does not provide an image pack. Each alliance must supply its own pictures. Add pictures using Google Forms' image feature, not by creating new questions or changing any existing question's answer type.  
Keep the underlying Form structure unchanged: do not add, delete, rename, reorder, or alter the required questions, sections, File Upload items, choices, validation, or branching. Add decorative pictures only after installation is complete; adding them during the two-pass setup can change item positions and make verification fail. Pictures used to decorate the Form are different from files that respondents upload as evidence.  
Recommended for the Incident Report Form: add your own screenshot of a Whiteout Survival player profile with the Copy ID button circled, ideally near the Player ID question. It is an optional visual guide to help respondents copy the exact nine-digit ID. The screenshot must be supplied by the installing user or alliance; it is not supplied by the AMS developer.  
The person adding each picture must verify they own it or have permission to use and display it, including any necessary permission for identifiable people or private content. Any copyright, privacy, or other rights violation arising from a picture the user chooses is that user's responsibility, not the AMS developer's, to the extent permitted by applicable law. The developer does not furnish, license, verify, or approve user-selected images.

# Step 5 — Verify with harmless sample records

**Do this before using real alliance records. The Incident Form should display a custom error for `TEST` or an ID that is not exactly nine digits, and refuse that submission; then test with a fictional nine-digit ID. Leave the internal AMS Player ID safeguard in place.** Create a valid fictional nine-digit Player ID and use test content only:

* Submit a sample Incident Form, including an innocuous image upload, and confirm the new Incident Log record, exact raw-response row link, and evidence access.  
* Submit a sample Member Request Form with a harmless image and confirm it appears in Member Reports, not the Incident Log, with an original-response link.  
* Enter a Player ID into the Incident Log **J:K** search controls, then test incident sorting without moving those controls.  
* Verify the Ban List Incident INC-xxxx link after reconciliation; check that no warning erases a genuine leadership note.  
* Test blank, malformed, and duplicate IDs; a committed new member and Power Tracker baseline; a returning player; and a legitimate departure in a **test** workbook only.  
* Check that a repeat setupNewAms() does not recreate Forms or triggers.

A syntax check or mocked JavaScript test cannot replace these real Google Apps Script tests. **Do not label AMS v2.0.0 or publish a release tag merely because the second installer run succeeded; also run the affected functional regressions.**

# If setup stops or something looks wrong

| Situation | What to do |
| :---- | :---- |
| **“Authorization required” reappears** | Read the requested permissions and choose the intended account. A changed source or explicit manifest can trigger a new prompt. |
| **“This app isn't verified”** | Verify the script's origin and permissions. Only proceed through an available Advanced choice if you independently trust this code and accept the warning. A blocked app or admin restriction requires an authorized resolution, not a bypass. |
| **Blueprint cannot be opened** | Check you are signed into the intended account and report the exact error. The publisher must maintain Viewer access; you do not need to make a copy or request Editor rights. |
| **No Form edit URLs** | Inspect the execution log/errors. Do not create Forms manually or erase setup properties. |
| **Interrupted Form creation** | Run the same setupNewAms() again. It attempts unique-title recovery. If recovery is ambiguous or impossible, stop and seek help instead of generating duplicates. |
| **Upload question verification fails** | Compare the exact titles, number of upload questions, first-section/end placement, and other generated questions. Google may need a short interval to update response headers before another run. |
| **Form unexpectedly has responses before completion** | Stop rather than deleting or renaming sheets or submissions. Get help preserving the records. |
| **Script requests unexpected access** | Do not approve it until you can reconcile the consent screen with the actual source and script project/manifest. |

# Privacy and account management

AMS stores the alliance's records in its new Google spreadsheet and generated Forms. Google Forms/Drive hold upload files under the installing account's settings. AMS has a **local** operational audit log; it does **not** automatically transmit developer telemetry, installation identifiers, player histories, incident data, or raw error reports to the AMS developer. Your alliance remains responsible for who may view the workbook, Forms, and Drive uploads. Hidden Sheets are not a privacy boundary against people with workbook access.  
For a future formal Google Cloud/OAuth deployment, the publisher will need matching scopes, application disclosures, and an actual privacy policy. Installing this standalone .gs in a new bound script project **does not automatically make that project part of the publisher's Google Cloud OAuth client or inherit its verification**. This candidate's authorization steps describe the script-as-installed model, not a promised future marketplace/centralized distribution flow.  
If you stop using AMS, removing the script's authorized access or triggers prevents further automation but **does not automatically erase your existing workbook, Form responses, or Google Drive uploads**. Make retention/deletion decisions directly in the Google resources you control. To review/revoke a script's granted access, open your **Google Account → Security → Your connections to third-party apps & services → See all connections**, choose the relevant script/app, then follow Google's removal controls. Google may change these labels.  
Questions, bugs, or access problems? Send me an email at [**alliancemanagementsystem@gmail.com**](mailto:alliancemanagementsystem@gmail.com) or contact me on discord (@darkphoenix911)  Please do not send unrestricted workbook links or private player screenshots unless you intentionally choose to share that information.
