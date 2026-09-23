# Install Alliance Management System (AMS)

## What you need

- A Google account that will own your alliance's private AMS spreadsheet and two Forms.
- The **complete AMS v1.7.0 production `.gs` code** supplied with the release. 
- The release links for the official Incident Form and Member Request Form; each alliance will make its own copy.
- Optionally, the [Tickets Discord bot](https://tickets.bot/). Tickets is not required by AMS.

**You will not be copying the developer's AMS template or its development script.** Start with a new, completely blank Google spreadsheet. The production installer builds the workbook inside it.

## Part A — Create the workbook

1. Sign into the Google account that will own your alliance's AMS. It is recommended to create a brand new google account for your AMS to live.  Something like [alliancename].alliance.wos@gmail.com works great. It's simple and easy to remember.  **Important**: The main administrator should be one to create and "own" this account. It is recommended that it be the person who takes care of most of this stuff in your alliance. The other leaders (R5 and R4's) will need to be added as editors if you want each member of leadership to have access (recommended). They can also create new google accounts if they do not want to use their personal ones. 
2. Create a **new blank Google spreadsheet**. Name it something like `[Alliance Name] — Alliance Management System`. You can call it whatever you want. Leave its default sheet empty.
3. Select **Extensions → Apps Script** in that new spreadsheet. Replace the starter `Code.gs` content with the **complete production AMS code** from the official release, and save.
4. From Apps Script's function dropdown choose **`setupNewAms`** and click **Run**. Grant the requested Google permissions. (screenshots are included to show you how to grant access as it is not straight-forward)
5. Check **Execution log**. This first run creates the AMS tabs with their layout and settings, including the Intro page, Incident Log search panel, and hidden supporting tabs. It also sets the production-version display.
6. If Google interrupts this initial build, run **the same `setupNewAms` function again**. The installer is designed to resume copying missing tabs rather than start over. If a layout-mismatch error appears, do not delete tabs at random; check the execution log first.

**Important:** The production installer reads a public, read-only *sheet-layout blueprint* maintained by the AMS project. It copies each tab into your blank spreadsheet; it does not copy that blueprint's Apps Script or any Forms connected to the blueprint. The released blueprint must be free of real alliance data and of bound development code. No member information is transmitted to AMS's developer.

## Part B — Connect your alliance's two Forms

1. Open the release link for the official **Incident Form** and use Google Forms' **Make a copy** to create a Form owned by your alliance's Google account. Do not submit incidents to the developer's master Form.
2. In **your Incident Form** choose **Responses → Link to Sheets / Select destination → Select existing spreadsheet** (wording varies). Choose your **newly built alliance AMS spreadsheet**. Google creates its own response tab there.
3. Repeat with the official **Member Request Form**. Copy it to your account, and point its responses to that **same** alliance AMS spreadsheet. Google creates a separate second response tab.
4. Don't rename, clear, or delete either of the new Form response tabs. The installer identifies them from their headers and checks that their respective Forms are connected to this workbook. These tabs will be hidden once set-up is complete.

### Optional Discord Tickets route

The Member Request Form includes an alternative to Google screenshot uploads:

> If you are unable or do not want to sign into a Google account to upload screenshots, you can anonymously open a ticket in the Alliance Discord as well. This will only be able to be seen by leadership.

- **Alliance has Tickets:** Keep/adapt this text only if the alliance actually provides a private ticket route. See [Tickets' official website and documentation](https://tickets.bot/) to install and learn the bot. AMS does not configure, host, or integrate with the Tickets bot.
- **Alliance does not have Tickets:** Remove the ticket suggestion from the Member Request Form's description **and** any screenshot-upload help text pointing users to the Discord ticket system. The Google Form still works on its own.

Google may require a Google sign-in to submit files through a Google Forms upload question; leaving the optional name blank does not remove that upload requirement. A Discord ticket is an alternative reporting channel, not a Form response recorded automatically into AMS.

## Part C — Finish installation with the SAME function

1. Return to **your new spreadsheet → Extensions → Apps Script**.
2. Select **`setupNewAms` again** and click **Run**. There is no second setup function.
3. The function verifies the two connected Forms and their response headers, renames the response tabs exactly `Incident Reports` and `Member Requests`, removes only its own verified-empty temporary seed tabs, installs production triggers, and marks the installation complete.
4. Review **Execution log**. If you linked only one Form, the installer does not finish; connect the second and run `setupNewAms` again.


## Part D — Configure and test

1. Open **Roster** and enter your own main alliance and academy names in its metadata fields. 
    These fields are: *State ID*, *Main Alliance*, *Academy 1* (optional), *Academy 2* (optional). You will also need to select the highest furnace level your state has unlocked from the drop down. 
2. Configure any leadership-specific choice lists (for example, the Member Reports assignee list) for **your own** leadership. The public installer intentionally removes the developer's old member-name dropdown choices.
3. Verify the **Incident Log search controls** are visible with at least rows 1–8 shown.
4. Submit one clearly fictional incident to **your Incident Form** and one fictional request to **your Member Request Form**. Check for the corresponding records in Incident Log / Member Reports and expected entries in AMS Log.
5. Only then share the spreadsheet with authorized leadership and share the **Form responder links** with the intended people. Members submitting forms do not need workbook editor access.

**Support and voluntary bug reports:** alliancemanagementsystem@gmail.com. AMS does not include telemetry.

**Official Google Forms Links**

# DO NOT LINK TO THESE FORMS. THESE ARE THE DEVELOPMENT COPIES OF THE FORMS. IF YOU LINK TO THESE FORMS, YOUR LINKS TO YOUR AMS WILL BE DELETED AND YOU MAY LOSE ACCESS TO VIEW THESE FORMS. 
    CLICK ON THE THREE DOTS (TOP RIGHT CORNER ON DESKTOP OR RIGHT HAND SIDE AFTER THE FILE NAME IF VIEWING FROM GOOGLE DRIVE APP) AND SELECT **MAKE A COPY**

- **Incident Form:** `https://docs.google.com/forms/d/1ySZBzvLkHPdolJ2wf4K81H-yHfz3stHu1d4BJjnaz5o/edit`
- **Member Help Request:** `https://docs.google.com/forms/d/1bC3St5VT8vZv6Hd84CNAk88EBDi67PUl9TB4iehWcyM/edit`
