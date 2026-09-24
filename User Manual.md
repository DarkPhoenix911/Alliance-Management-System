# Alliance Management System (AMS) — User Manual

**A practical guide for alliance leaders**   **Applies to:** AMS v1.8.1 production candidate and its two-Form installation design   **For installing AMS from scratch:** see [INSTALLATION.md](https://docs.google.com/document/d/1057tjuOWtmb_1OW15SAt_CBD1xLPsX8TH4v6V126Bxc/edit).   **For project background and licensing:** see README.md.  
***About this guide:** This is the “what do I click, what do I enter, and what happens next?” manual. It describes the behavior in the supplied v1.8.1 candidate; the live two-pass installer, a valid incident-to-ban workflow, and the Form-level Player ID check have been exercised; other functions still need ongoing public-beta testing. Some tabs may be hidden to keep your workbook tidy. Don't delete a hidden tab just because you don't use it every day.*

# Contents

1. The big picture  
2. Your first day using AMS  
3. Roster: where active membership begins  
4. Power Tracker: starting values, updates, and the Roster  
5. Furnace levels and state unlocks  
6. Players leaving, returning, and changing names  
7. Incidents and the player-incident search  
8. Ban List: what triggers a ban, what expires, and what doesn't  
9. Member Requests and Member Reports  
10. Player Identity and Player Notes  
11. The behind-the-scenes tabs  
12. When AMS updates things  
13. Everyday examples  
14. Common questions and troubleshooting  
15. Short reference: who controls what?

# 1\. The big picture

Think of AMS as your alliance's organized notebook. Instead of hunting through scattered direct messages or trying to remember who a player used to be, leadership can look things up in one place.  
The **Roster** answers: “Who is with us right now?” The **Power Tracker** answers: “How much has each current member grown?” The **Departure Log** answers: “Who was with us before, and how did that membership end?” The **Incident Log** and **Ban List** answer different questions: “What happened?” and “Is there a current ban to review?” The **Member Reports** tab collects help requests rather than disciplinary cases. **Player Identity** records actual linked accounts; **Player Notes** is for notes a human leader chose to write.  
The most important rule in the entire workbook is this:  
**A player's nine-digit Player ID is their identity. Their name and their row number are not.**  
If a player changes names or AMS sorts the Roster, that player is still the same person for recordkeeping purposes because the ID has not changed. Two accounts with different IDs remain two separate accounts even if leadership believes the same person owns them.  
**AMS keeps the paperwork straight. Leadership decides what the information means and what action to take.** A previous departure, shared alias, reported incident, or linked account is information to review—not proof that someone deserves a ban.

## The map: how the parts work together

New member → ROSTER (valid nine-digit ID \+ leadership commits Status)  
                  │  
                  ├── seeds a missing Power Tracker starting value  
                  ├── provides current member/name/account information  
                  └── refreshes player-identity and advisory information

POWER TRACKER ending values ──→ ROSTER current Power/Furnace

Confirmed Left / Removed / Ban action ──→ DEPARTURE LOG  
                                         └── removes current Roster and PT membership

INCIDENT FORM → original INCIDENT REPORTS response → INCIDENT LOG  
                                                    ├── optional BAN LIST action  
                                                    └── possible current-member removal

MEMBER REQUEST FORM → original MEMBER REQUESTS response → MEMBER REPORTS

PLAYER ID ties relevant history, notes, incidents, bans, and linked-account information together.  
The original Google Form response tabs and uploaded files are kept separate from the tidy leadership views. A normalized report is not a replacement for the original evidence.

# 2\. Your first day using AMS

The installation guide walks through creating a blank spreadsheet, pasting the released source, running setupNewAms(), adding the two File Upload questions, and running setupNewAms() again. If the editor cannot show the confirmation, reload the spreadsheet and click AMS Setup → Confirm uploads and finish installation. Both Forms should use 100 MB per file. You do not manually copy the blueprint or use the development workbook for your alliance's day-to-day information. In the Apps Script Run dropdown, select only setupNewAms for installation. Functions beginning maintenance\_ are for troubleshooting; do not run any unless DarkPhoenix911/the AMS developer directs you to run that exact command. Google's dropdown has no actual categories—the prefix marks them as support-only.  
Once the installer says the workbook is ready:

1. **Start with the Roster information area at the right**, not by filling in random player rows. Set your State ID and your Main Alliance / Academy names. Check the highest Furnace level unlocked in your state. Do not keep the template alliance's example details as if they were yours.  
2. **Check both Forms.** Open the Incident Report Form and Member Request Form created for *your* spreadsheet. Decide which leaders may submit incidents, who receives the member-help link, and whether the optional Discord-ticket wording actually fits your alliance. The generated leader-choice list contains placeholder role labels such as \[R5\] and \[R4\](1); review it before real use.  
3. **Enter one player carefully**, including their real nine-digit ID, name, power, furnace, alliance assignment, account type, rank, and Status. See the next two sections before filling dozens of rows.  
4. **Check Power Tracker.** Confirm it refers to the same Player ID and that its starting figures came over as expected. Don't type a second player record there by hand.  
5. **Use made-up test content first.** A harmless incident and help request, with harmless uploaded files, should appear in the correct tabs. Check that the links open the original raw responses and that the screenshot links are accessible to the intended leaders.  
6. **Limit workbook sharing to leadership.** Hidden tabs are for convenience, not secrecy from someone who already has access to the workbook.

## Personalizing the two Forms with your own pictures

The installer creates working Forms but does not copy photographs or diagrams from the developer's own example Forms, and the AMS developer does not provide pictures. After AMS READY, your alliance may add its own decorative images anywhere in the Incident Form or Member Request Form using Google Forms' image feature. Do not add them during the two-pass installer process, because the installer verifies item positions.  
Only the pictures are optional customization: leave every existing question, section, File Upload item, exact title, question type, choice, required setting, Player ID validation, and temporary-ban branching in place and in order. Decorative Form images do not replace respondents' optional evidence uploads.  
For the Incident Form, we recommend a user-provided screenshot of a player profile with the Copy ID button circled, ideally beside the Player ID field. Your alliance must obtain and supply that screenshot; DarkPhoenix911/AMS does not provide it. The person adding any picture must verify they own it or have permission to use and display it, including any relevant privacy rights. Copyright, privacy, or other rights violations caused by user-chosen images are the user's responsibility, not the developer's, to the extent permitted by applicable law. The developer does not furnish, license, verify, or approve those images.  

**Where the Roster's alliance information lives:** the current layout uses **L3** for State ID, **L4** for Main Alliance, **L5/L6** for Academies, **L7** for Last Updated, **L8** for identity status, and **L9** for highest unlocked Furnace level. The headings sit beside those cells in column K.

# 3\. Roster: where active membership begins

The Roster is the list of **current** members. Player entries start on **row 3**. The main player table occupies **columns A–J**; the alliance-information area to the right is separate and should not be dragged around with member rows.

| Column | What it means | What you normally do |
| :---- | :---- | :---- |
| **A — In-Game Name** | The player's current game name | Enter or update it. |
| **B — Alias (If Any)** | A familiar or previous name | Optional; meaningful manual changes should be preserved. |
| **C — player\_id** | Their exact nine-digit Player ID | Copy it from the game. Check carefully. |
| **D — Alliance Rank** | R5, R4, R3, R2, or R1 | Choose their present rank. |
| **E — Furnace Level** | Current Furnace or Fire Crystal level | Choose an allowed level. |
| **F — Overall Power** | Current power in millions | Enter the number the tracker should start from if applicable. |
| **G — Indicators** | A heads-up that relevant leadership information exists | Review other tabs; don't treat an icon as a verdict. |
| **H — Alliance Assignment** | Main alliance / academy | Choose the right assignment. |
| **I — Farm, Secondary, or Main** | What sort of account this is | Choose Main, Secondary, or Farm. |
| **J — Status** | The membership action | Use deliberately; this is the important “commit” field. |

## Enter a new member in a safe order

Enter the player's name and **ID first**, check the rest of their details, then choose a current-member Status such as **Active** when you are ready to add them. AMS uses Status as the deliberate membership step. Merely typing a name or power on a partially completed row should not be treated as a completed admission.  
The available Status choices are **Active**, **LOA/Vacation**, **Inactive**, **Left**, **Removed**, **NAP Temp Ban**, **NAP Permanent Ban**, **Alliance Temp Ban**, and **Alliance Perm Ban**.  
Active, LOA/Vacation, and Inactive keep a member in the current-membership workflow. **Inactive** also changes a non-R1 member's rank to **R1** when that Status is committed. Left, Removed, and the four ban choices are **end-of-membership actions**; do not choose them just because you want a color change.

## Why an ID warning matters

If a row has a missing, malformed, or duplicate Player ID, AMS displays a warning and stops the unsafe movement of linked information. That is deliberate. It is trying to avoid giving one player's power, notes, or history to somebody else. Fix the actual nine-digit ID; do not make up digits, delete another player's records, or use a similar name as a substitute.  
A temporarily blank ID does **not** mean the player has left. To record a real departure, use the intended Status and review the departure entry. The Roster's **L8** identity summary can help you see whether membership IDs need attention.

## What if rows move?

AMS can sort the Roster after status changes. Don't use “they were on row 47” as a player reference. Match by **Player ID**. The player-information columns **A–J** need to stay together.

# 4\. Power Tracker: starting values, updates, and the Roster

This is the part of AMS that can seem confusing until you see the two directions of travel:  
**The Roster provides the starting point. The Power Tracker becomes the place where you track ongoing growth.**  
The Power Tracker starts its member rows on **row 6**. Its columns are:

| Column | Meaning |
| :---- | :---- |
| **A** | Player Name, carried from the Roster |
| **B** | Player ID, carried from the Roster |
| **C** | Beginning Power |
| **D** | Ending Power |
| **E** | Power Gained — calculated from the figures you enter |
| **F** | Growth % — calculated from the figures you enter |
| **G** | Furnace Starting |
| **H** | Furnace Ending |
| **I** | Last Updated |
| **J** | Notes |

## A. What happens when a new member joins?

Imagine you enter **Player ID 123456789**, Power **100**, and Furnace **30** on the Roster, then set Status to **Active**.  
AMS finds that player **by their ID** in Power Tracker. If they have no tracker row yet, AMS creates or uses an available one and carries over their name and ID.  
It can also copy the Roster's **100** into **Beginning Power** and **30** into **Furnace Starting**. This gives the tracker a starting point without making you type everything twice.  
**The important condition:** for Power, the candidate's starting-value routine fills from the Roster when **both Beginning Power and Ending Power are empty**. For Furnace, it does the same when **both Furnace Starting and Furnace Ending are empty**. If an existing starting figure is already there, it is **not replaced**. If an ending figure is already there, the routine also will not silently invent a new starting figure behind it.  
That last detail matters if you erase a beginning value halfway through tracking. If an ending value still exists, simply changing the Roster is **not** a reliable way to reset the beginning. Set the beginning deliberately in Power Tracker instead.

## B. What if I change the Roster Power later?

After the player has tracker figures, changing Overall Power on the Roster is **not a command to overwrite Beginning Power**. The baseline in Power Tracker belongs to the tracker. This protects the original weekly starting point.  
For ongoing updates, enter **Ending Power in Power Tracker**, not a replacement Beginning Power on the Roster. AMS uses the player ID to send the tracked current value back to the right Roster row.

## C. Which number goes back to the Roster?

When you edit a tracked player's row:

* If **Ending Power** has a value, that is the current power AMS uses for the Roster.  
* If Ending Power is blank but **Beginning Power** exists, AMS may use Beginning Power as the available current value.  
* For Furnace, **Furnace Ending** takes priority over **Furnace Starting** in the same way.

When AMS does its later housekeeping pass, it also matches tracker rows to Roster rows by ID and brings the current tracked values back over. This is why a Furnace value you typed on the Roster may appear to change back: Power Tracker already had a tracked figure for that same player.

## D. An example of an ordinary tracking period

| Where | Beginning | Ending |
| :---- | :---- | :---- |
| **Power Tracker** | 100.0M | 115.0M |
| **Roster's current Power** | — | 115.0M |

Power Gained is **15.0M** and Growth is **15%**. AMS keeps the arithmetic in the tracker; you don't manually calculate those columns.  
**Power entry tip:** enter power in **millions**. If a player has 115 million power, enter 115, **not** 115000000. The display may show 115.0M, but the stored figure is still 115\.

## E. Can I correct a baseline?

Yes. **Beginning Power** and **Furnace Starting** are meant to be editable by leadership after they have been created. Enter the correct starting numbers there. That is different from editing the player's identity: **Power Tracker name and Player ID are controlled by the Roster** and should not be changed in the tracker.  
Do **not** delete someone's Power Tracker row to remove them from the alliance. Use the Roster's actual departure action; AMS then takes care of the active tracker row.

## F. What about a new week?

The supplied candidate has starting and ending fields, but this manual does **not** assume there is an automatic weekly rollover or a universal “reset everyone” button. Decide when your alliance's tracking period begins and ends. Before starting a fresh period, preserve any results you need, then deliberately set the next beginning values and clear the previous ending values according to your agreed process. Don't wipe the old baseline halfway through a period unless correcting it is intentional.

# 5\. Furnace levels and state unlocks

Furnace starts and finishes follow the **same ownership rule** as Power: the Roster can seed a missing initial figure at membership commit, but Power Tracker's existing starting and ending figures are not overwritten just because someone edits the Roster.  
Regular Furnace levels are **1–30**. Fire Crystal levels are **🔥 FC1–🔥 FC10**, but not all FC levels should be available before the state unlocks them.  
Use **Roster L9** to set the highest Furnace level currently unlocked in your state. AMS uses that setting for the Furnace choices on the Roster and **both** Power Tracker Furnace columns. For example, a state unlocked through FC3 should offer regular 1–30 plus FC1, FC2, and FC3, not FC4–FC10.  
Regular 1–30 levels are intended to have an ordinary white/no-special-color background. FC levels have their own escalating warm colors. Color is a visual aid; **it does not decide membership or discipline**.  
If the level you need is missing, check L9 before editing the Config tab or forcing an unsupported value into a cell.

# 6\. Players leaving, returning, and changing names

## Someone leaves voluntarily

Find the **correct Player ID** on the Roster. Choose **Left** in Status. AMS records the departure, including the current Roster power and other available context, then removes that player's **current** Roster and Power Tracker membership rows.  
Their history is not erased. The Departure Log can have more than one departure for the same ID because a player might leave, return, and later leave again.

## Leadership removes someone without banning them

Choose **Removed**. This records a departure/removal. It is **not** the same as a ban, and AMS should not treat every former member as banned.

## Someone changes their game name

Update the name on their current Roster row **without changing the Player ID**. AMS has a private name-history tab that remembers observed names tied to that ID. The Alias field can help leadership recognize an earlier familiar name. A human-chosen alias should not overwrite the fact of which name AMS first observed.

## Someone returns after leaving

Enter the returning player's current details and **same original nine-digit ID** on the Roster. AMS can find their earlier name/departure information and show a heads-up for leadership. It may supply a known prior name as an alias if the Alias field was left empty.  
When leadership commits the new membership, the player should get a **fresh active Power Tracker starting point** from their new Roster details—not continue growing from the first day of an old membership. Their Departure Log history still remains.  
**A return warning is informational.** Review the actual history; an earlier voluntary departure alone isn't misconduct and doesn't create a ban.

# 7\. Incidents and the player-incident search

An **incident** is a specific event or leadership action you want recorded. It is different from someone asking for help.

## The normal way to add an incident

1. Open your alliance's **AMS Incident Report Form**.  
2. Enter who is submitting it, the incident date, the reported player's exact ID, their name, what happened, and the action leadership actually took. The Incident Form now checks that Player ID before submission: `TEST` and IDs with fewer or more than nine digits show a helpful error instead of silently producing an unprocessed report. Existing AMS code still checks the ID as a backup.  
3. Attach evidence if appropriate. A screenshot is not compulsory, but an accurate record matters.  
4. For a temporary-ban action, complete the additional start and end dates. The end cannot be before the start.  
5. Submit. AMS keeps the **original response** on the Incident Reports tab and creates a tidy entry on **Incident Log** with an **INC-...** number.

The Incident Number links to the **exact original response row** in the installed workbook; the report can also hold links to submitted evidence. Keep both kinds of information: the tidy summary for quick leadership review and the original answer/evidence for checking exactly what was submitted.

## What happens after the action is selected?

* **Spoke with Player in DMs / No Formal Action Taken**, **Warning Issued**, or **Final Warning Issued:** an incident is recorded; selecting one of these does not itself make a ban or remove the member.  
* **Player Removed:** the incident is recorded, and AMS attempts to end the matching *current* membership as Removed.  
* **Alliance Temporary/Permanent Ban** or **NAP Temporary/Permanent Ban:** AMS records the incident, adds or updates that ID's Ban List record, and attempts the matching current-member removal.

If the reported ID isn't on the current Roster, the incident can still be retained. Leadership may need to review any unfinished removal action; **do not assume an off-Roster player was removed from a row that never existed**.

## How to find every incident for one player

Open **Incident Log**. The normal incident table is **A–I**. The separate **Player Incident View** controls are at the right in **J–K**.

1. Enter the exact nine-digit Player ID in **K2**.  
2. Check the **View Player Incidents** box at **K4**.  
3. The incident table should show the matching player's entries. Read the original responses and attachments if you need fuller context.  
4. Use the **Clear View** box at **K5** to return to the full incident list.

The search is **by Player ID, not by nickname**. A person who changed names should still be found under the same ID. Do not sort or move the separate J–K control panel as if it were another incident.  
Can I enter an incident without the Form?  
The candidate also has a path that can assign an Incident Number to a sufficiently complete manual Incident Log row. The Form is the normal recommended path because it preserves the original submitted answer and its source link. A manually typed incident does not have a Form response to open unless a real response exists.

8\. Ban List: what triggers a ban, what expires, and what doesn't  
The Ban List is where leaders review the currently recorded ban for an ID. It is not a list of everyone who ever left or everyone who was reported.  
Two scopes; two durations  
Alliance means an alliance-level ban.  
NAP means a NAP/state-level ban recorded by leadership.  
Temporary has a scheduled end date.  
Permanent has no scheduled end date.  
The Ban List holds the ID, current recorded name/aliases, when the ban began, type, duration, scheduled lift date when temporary, justification, who added it, any incident context, and its Status.  
Three ways a ban can enter the system  
From an Incident Form: a leader expressly chooses one of the four ban actions. AMS makes an Incident Log entry and a related Ban List entry. A temporary ban requires the dates on the Form.  
From the Roster: a leader changes the member's Status to one of the four ban choices. AMS creates/updates the Ban List and archives/removes the live membership. Important: for a temporary ban entered this way, the Ban Lift Date is initially blank. Leadership must open the Ban List and fill it in; an incomplete temporary record is flagged and does not count as a valid active ban until corrected.  
Directly in the Ban List: authorized leadership can enter and maintain a ban record there. Fill all required details carefully. A valid active Ban List entry can produce a Roster warning, but adding a Ban List row is not the same instruction as choosing a terminal Status on the Roster or choosing a ban action on the Incident Form. Check the Roster separately when you need to record a confirmed departure.  
What happens when a temporary ban reaches its end date?  
AMS moves a valid Active temporary ban whose date has arrived to Expired \- Review Required. This means: “The scheduled period has ended; leadership needs to decide what happens next.”  
It does NOT mean “ban automatically lifted.” Someone must review and deliberately change/lift it. If leadership wants to end a ban, use the intended human-controlled lift action/status and ensure your alliance's records reflect the decision. A lifted record stays as history rather than disappearing merely because it is no longer active.  
Changing the Ban List Status manually to Ban Lifted records that status change in the local audit trail. The separate selected-row `maintenance\_liftSelectedBan()` support-only action, where used by an authorized administrator in the bound script, also makes a history entry before changing the status. Those paths are not identical—do not promise a manual status change has created the same event as the selected-row action.  
What if someone with a ban tries to join?  
AMS compares the exact Player ID, not a similar-looking name. A valid active ban can create a prominent Roster warning. An invalid Ban List row—such as a temporary ban without a valid date—is flagged for correction and excluded from active-ban enforcement until it is complete.  
An account linked to someone else's banned ID may receive an informational heads-up. That is a reason to look at the records, not an automatic ban on the linked account. Each Player ID has its own incidents and ban status.  
What is the “Ban Context” link?  
Where a ban was tied to an Incident Number, Ban Context can link to that exact incident in Incident Log. From the incident you can open the original Form response. Don't replace these with vague “see Form” notes if the exact link exists.

9\. Member Requests and Member Reports  
These are for “I need help,” “Can leadership look at this?”, or “Something is happening that I want you to know.” They are not automatically incidents or disciplinary cases.  
The AMS Member Request Form is the member-facing way to submit one. A member can leave the “Who are you?” field empty; AMS uses Anonymous in the normalized report when no name was provided. It also accepts optional screenshots via Google Forms if the respondent can sign in to Google.  
Original answers appear on the raw Member Requests tab. AMS places a workable copy on Member Reports, including a report number beginning MR-, submission details, what help is needed, evidence, and fields leadership can use to manage the request. The report number links back to the exact original response row when submitted through the Form.  
How leadership should use the status  
The candidate supports these choices:

| Status | Everyday meaning |
| :---- | :---- |
| **New** | The request came in; nobody has finished dealing with it yet. |
| **In Progress** | Someone is working on it. |
| **Awaiting Follow Up** | More information or a further action is needed. |
| **Resolved** | The request has been addressed. |
| **Closed \- No Action Needed** | Leadership reviewed it and decided no further action is needed. |

When the status is changed to Resolved or Closed \- No Action Needed, AMS writes a closure date in the report's last column. If you move it back to an open status, the closure date is cleared. Other leadership fields, such as assignment and notes, are for actually working the request; don't erase them to make the row look tidy.  
What about Discord tickets?  
The generated Form mentions an optional Discord ticket route. That is only an alternative your alliance may provide. AMS does not read Discord tickets or automatically copy them into Member Reports. If your alliance uses Discord for a request, leadership must decide whether to record the important information in AMS as appropriate.

10\. Player Identity and Player Notes  
These sound similar, but they answer very different questions.  
Player Identity: “Which accounts are actually related?”  
Use Player Identity for known links such as a main account and a secondary/farm account. Give each account its own exact Player ID. AMS can make a blank relationship placeholder when a Roster account is marked Farm or Secondary before you know the related account's ID. Leadership can complete the actual link later.  
A Main account with no known relationship does not need a Player Identity entry merely because it exists on the Roster. An old name also is not proof two different Player IDs are the same person.  
The tab can hold the two IDs, names, known aliases, relationship type, who added it, when, and context. Keep meaningful human-entered relationship context; don't use a guess as a confirmed relationship. Linked accounts are still distinct player records and do not inherit each other's punishments.  
Player Notes: “What did leadership choose to write down?”  
This is for human-written leadership notes attached to a Player ID. To add a note, enter the right ID and write your note in its Leadership Notes field (or the associated cell note where that is the method used). AMS carries the note along when names and sheet order change.  
An alias, ban, incident, return, or account link by itself does not create a Player Notes row. That's on purpose. If nobody wrote a leadership note, don't expect one just because the player has history elsewhere.  
Use the other tabs for the original event. Write a concise human note when extra context is helpful; don't copy every Incident Log entry into Player Notes.

11\. The behind-the-scenes tabs  
Some tabs are normally hidden or exist mainly as original records rather than daily work areas. They are still part of AMS.

| Tab | What it is for | What you should do |
| :---- | :---- | :---- |
| **Intro** | Workbook's starting page and version/status display | Begin here and follow the links/instructions shown in your installed build. |
| **Config** | Some workbook settings, furnace display/configuration, and version information | Normally leave it alone unless a documented setting genuinely needs changing. |
| **AMS Log** | Local audit record of relevant edits/actions | Use it to investigate “what changed?”; it is not sent to the developer. |
| **\_Identity Data** | Names AMS has actually seen for each Player ID, including first-known name | Treat as memory, not a disciplinary list; avoid direct changes. |
| **Player\_id** | Supporting view/export of current player names, IDs, and state | Usually leave it to AMS; don't maintain it as a second Roster. |
| **Incident Reports** | Original Incident Form responses | Keep for accurate original answers and direct navigation from Incident Log. |
| **Member Requests** | Original Member Request Form responses | Keep for accurate original answers and direct navigation from Member Reports. |
| **Departure Log** | History of confirmed membership endings | Review as needed; repeated rows for the same ID can be legitimate separate departures. |

Does “hidden” mean secure?  
No. Keep spreadsheet sharing and Drive file access limited to authorized people. Hiding a tab helps keep the interface clean; it is not a privacy wall.  
What does the version display mean?  
The installed version is shown in Intro/Config. A current version may show CHECK RELEASES because the candidate's remote version source isn't configured. That is not proof that something is broken or that the app secretly sent your workbook anywhere. Check official release notes for updates instead of changing internal version cells yourself.

12\. When AMS updates things  
Some things happen when a leader makes a relevant edit or someone submits a Form. Other housekeeping happens after editing has quieted down.  
AMS uses a delayed whole-workbook reconciliation sometimes called Death Star in development conversations. The production candidate aims for roughly 15 minutes after the last meaningful activity, rather than a permanent full rebuild running every minute. The exact timing may shift if there was another change or AMS needed to retry.  
During that later pass, AMS can check Ban List dates, remember names, straighten out Player Identity/Player Notes, keep current Roster/Power Tracker information matched by Player ID, refresh warnings, and tidy the visible working rows.  
This is not permission to ignore an error for fifteen minutes. A missing ID, an incomplete ban, or a Form that failed to process may need a human correction. Likewise, do not edit the same member's identity in multiple tabs to “help it catch up.”  
A separate daily check reviews temporary-ban dates. Other installed tasks maintain audit information and may check the version display where a valid version source exists.

13\. Everyday examples  
Example 1 — A recruit joins with 84 million power  
Put their correct ID on the Roster. Set Overall Power to 84 and the correct Furnace. Complete the other details, then choose Active. Check the matching ID in Power Tracker: Beginning Power should take 84 if the tracker had no beginning and no ending value. Later, when they reach 90 million, enter 90 in Ending Power. The Roster current power then reflects 90, not 84\. Beginning Power stays 84 for that period.  
Example 2 — You accidentally edited the recruit's Roster power after PT already has an ending  
Power Tracker has Beginning 84, Ending 90\. You put 87 on the Roster. During sync, the Roster can return to 90, because the tracked ending value has priority. If 90 is wrong, correct Ending Power for the right ID in Power Tracker; don't try to overwrite its beginning from the Roster.  
Example 3 — A member leaves and returns with a new name  
Mark their old membership Left. AMS archives the exit and removes their current PT row. Months later enter their same ID and new name on the Roster, with current power and furnace, then commit Status. Review the historical name/return advisory, and check their new PT beginning numbers. You still have the earlier Departure Log entry.  
Example 4 — A leader issues a warning  
Submit the Incident Form with Warning Issued. The incident becomes searchable by ID. It does not become a ban merely because it was recorded, and the player is not automatically removed.  
Example 5 — A temporary NAP ban  
Submit the Incident Form choosing NAP Temporary Ban and entering the start/end dates. Verify the Ban List entry and related incident. When the end date arrives, AMS marks the ban Expired \- Review Required. Leadership reviews and explicitly decides whether to lift it. An expired date is not the same thing as lifting the ban.  
Example 6 — A player asks for help anonymously  
They leave the name blank on the Member Request Form and submit. AMS records Anonymous in Member Reports, not an invented player identity. They may still need to sign in to Google if attaching a file, and their narrative could reveal who they are. Leadership changes the report from New to In Progress, then Resolved when addressed.  
Example 7 — A banned player's farm account appears  
There are two different IDs and a genuine link recorded between them. AMS may flag the relationship for leadership to review. The farm isn't automatically banned just because the linked ID has a ban. Check the underlying records and your alliance's rules before deciding what to do.

14\. Common questions and troubleshooting  
“I entered a new name but the Power Tracker didn't update.”   Check the nine-digit ID and whether Status was committed. Make sure there is no invalid or duplicate-ID warning. Give the normal housekeeping pass time to run. Don't type a new PT identity row as a workaround.  
“Why won't the Roster update my player's Beginning Power?”   Beginning Power belongs to Power Tracker once entered. Roster is only the initial source if both Beginning and Ending Power are empty at the new-member seeding step. Change the beginning figure in Power Tracker if you mean to correct it.  
“Power Tracker changed the Roster's Power back\!”   The tracker has an ending/current value for that ID. Update the correct tracker field rather than fighting the sync.  
“I made a temporary ban but it isn't acting like an active ban.”   Look for an invalid-record warning. A temporary ban needs a valid start date, valid scheduled lift date, scope, duration, Status, and exact ID. A Roster-created temporary ban begins with a blank lift date that leadership must complete.  
“Does Expired \- Review Required mean that player is unbanned?”   No. It means leadership must review. A lift is an explicit decision.  
“Where is the screenshot?”   Open the relevant Incident Log or Member Reports entry and its original response link. Check evidence link permissions. Files are stored by Google Forms/Drive, not moved into a special AMS folder.  
“Why can't I find an incident by the name?”   Use the nine-digit Player ID in Incident Log K2. A name can change; the ID is the consistent key.  
“The Player Notes tab is empty, but this player has three incidents.”   That's expected if nobody wrote a human leadership note. Incidents live in Incident Log; Player Notes is not an automatic dossier.  
“I deleted a Power Tracker row and it came back.”   The Roster still treats that ID as a current member. Use the proper Roster membership action instead of manually deleting tracker identities.  
“Some rows are hidden. Did AMS erase them?”   AMS hides unused working space on managed tabs. Hidden rows are not the same thing as deleting player history. If you suspect a real record disappeared, check the correct history/response tab and the AMS Log before attempting a manual repair.  
“An incident action says it needs attention.”   Check whether that exact ID is currently on the Roster and whether the intended membership action actually completed. Don't submit the same real incident repeatedly just to make the message disappear.  
“I need to report an AMS bug.”   Contact alliancemanagementsystem@gmail.com voluntarily. Describe the symptom and use fictional or redacted examples where possible. AMS does not automatically send error reports to the developer.

15\. Short reference: who controls what?

| Information or decision | Where to handle it |
| :---- | :---- |
| **Who currently belongs to the alliance** | Roster |
| **Real Player ID and current game name** | Roster; AMS remembers observed names separately |
| **Initial Power/Furnace of a new, committed member** | Roster, only while the corresponding PT start and end fields are empty |
| **Ongoing Power/Furnace changes and manual beginning baseline** | Power Tracker |
| **Power gained and growth percentage** | Power Tracker calculated columns |
| **Confirmed departure or removal** | Roster Status, resulting in Departure Log history |
| **What actually happened in an incident** | Incident Form → Incident Log; original answer in Incident Reports |
| **Is there a recorded ban to review/lift?** | Ban List, with leadership's decision |
| **Help needed by a member** | Member Request Form → Member Reports; original answer in Member Requests |
| **Confirmed relationships between separate accounts** | Player Identity |
| **A note leadership personally chose to write** | Player Notes |
| **Names AMS has seen attached to an ID** | \_Identity Data |
| **“Who changed this?” where locally logged** | AMS Log |
| **State/alliance information and max unlocked Furnace** | Roster L3–L9 |

Remember the player. Remember the history. Remember the human. AMS handles the recordkeeping; leadership makes the decisions.
