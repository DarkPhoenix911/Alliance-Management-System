/************************************************************
 * ALLIANCE MANAGEMENT SYSTEM — v1.8.1 PRODUCTION CANDIDATE
 *
 * Player ID is identity. Row number is presentation.
 * Formulas calculate. Scripts move data.
 * Automation assists. Leadership decides.
 *
 * See accompanying LICENSE and INSTALLATION.md.
 ************************************************************/

const AMS = {
    version: '1.8.1',
    sheets: {
        roster: 'Roster',
        memberReports: 'Member Reports',
        incidentLog: 'Incident Log',
        rawIncidents: 'Incident Reports',
        rawMemberRequests: 'Member Requests',
        config: 'Config',
        banList: 'Ban List',
        memberHistory: 'Departure Log',
        powerTracker: 'Power Tracker',
        playerIdExport: 'Player_id',
        leadershipNotes: 'Player Notes',
        accountLinks: 'Player Identity',
        identityData: '_Identity Data',
        audit: 'AMS Log',
        intro: 'Intro'
    },
    rows: {
        rosterFirst: 3,
        powerFirst: 6
    },
    furnace: {
        configRange: 'J2:L41',
        configFirstRow: 2,
        configRowCount: 40,
        metadataLabel: 'Highest Furnace Level Unlocked in State',
        metadataCell: 'L9',
        defaultMax: '30',
        normalMax: 30,
        fcMax: 10,
        fallbackFcColors: [
            '#FFF0E6',
            '#FFE2CC',
            '#FFD3B3',
            '#FFC599',
            '#FFB780',
            '#FFA866',
            '#FF9A4D',
            '#FF8C33',
            '#FF7D1A',
            '#FFB000'
        ]
    },
    roster: {
        col: {
            name: 1,
            alias: 2,
            id: 3,
            rank: 4,
            furnace: 5,
            power: 6,
            indicator: 7,
            alliance: 8,
            account: 9,
            status: 10
        },
        headers: [
            'In-Game Name',
            'Alias (If Any)',
            'player_id',
            'Alliance Rank',
            'Furnace Level',
            'Overall Power',
            'Indicators',
            'Alliance Assignment',
            'Farm, Secondary, or Main',
            'Status'
        ],
        ranks: ['R5', 'R4', 'R3', 'R2', 'R1'],
        allianceValues: [],
        accountTypes: ['Main Account', 'Secondary Account', 'Farm Account'],
        statuses: [
            'Active',
            'LOA/Vacation',
            'Inactive',
            'Left',
            'Removed',
            'NAP Temp Ban',
            'NAP Permanent Ban',
            'Alliance Temp Ban',
            'Alliance Perm Ban'
        ],
        terminalStatuses: [
            'Left',
            'Removed',
            'NAP Temp Ban',
            'NAP Permanent Ban',
            'Alliance Temp Ban',
            'Alliance Perm Ban'
        ],
        terminal: [
            'Left',
            'Removed',
            'NAP Temp Ban',
            'NAP Permanent Ban',
            'Alliance Temp Ban',
            'Alliance Perm Ban'
        ]
    },
    ban: {
        headers: [
            'Player ID',
            'In-Game Name',
            'Aliases',
            'Date Ban Began',
            'Ban Type',
            'Permanent or Temp',
            'Ban Lift Date',
            'Justification',
            'Added By / Source',
            'Ban Context',
            'Status'
        ],
        types: ['NAP', 'Alliance'],
        durations: ['Permanent', 'Temporary'],
        duration: ['Permanent', 'Temporary'],
        activeStatus: 'Active',
        active: 'Active',
        reviewStatus: 'Expired - Review Required',
        review: 'Expired - Review Required',
        liftedStatus: 'Ban Lifted',
        statuses: ['Active', 'Expired - Review Required', 'Ban Lifted'],
        selectableStatuses: ['Active', 'Ban Lifted']
    },
    leadershipNotes: {
        headers: [
            'In-Game Name',
            'Player ID',
            'Current Status',
            'Leadership Notes'
        ],
        col: {
            name: 1,
            id: 2,
            status: 3,
            quick: 4
        }
    },
    accountLinks: {
        headers: [
            'Player ID',
            'Player Name',
            'Known Aliases',
            'Linked Player ID',
            'Linked Player Name',
            'Linked Account Type',
            'Added By',
            'Date Added',
            'Context'
        ],
        relationships: ['Main', 'Alt', 'Farm', 'Secondary', 'Other']
    },
    identityData: {
        headers: [
            'Player ID',
            'Known Name',
            'First Seen',
            'Last Seen',
            'First Known',
            'Source',
            'Last Source',
            'Recorded By'
        ]
    },
    memberHistory: {
        headers: [
            'Player Name',
            'Player ID',
            'Departure Date',
            'Departure Reason',
            'Alliance',
            'Account Type',
            'Final Power',
            'Incident History',
            'Notes'
        ]
    },
    notes: {
        headers: [
            'In-Game Name',
            'Player ID',
            'Current Status',
            'Leadership Notes'
        ]
    },
    links: {
        headers: [
            'Player ID',
            'Player Name',
            'Known Aliases',
            'Linked Player ID',
            'Linked Player Name',
            'Linked Account Type',
            'Added By',
            'Date Added',
            'Context'
        ],
        relationships: ['Main', 'Alt', 'Farm', 'Secondary', 'Other']
    },
    history: {
        headers: [
            'Player Name',
            'Player ID',
            'Departure Date',
            'Departure Reason',
            'Alliance',
            'Account Type',
            'Final Power',
            'Incident History',
            'Notes'
        ]
    },
    validation: {
        id: /^\d{9}$/
    },
    visibility: {
        sheets: {
            'Roster': { firstDataRow: 3, keyColumn: 3, blankRows: 1, minVisibleRow: 10, scanWidth: 10 },
            'Power Tracker': { firstDataRow: 6, keyColumn: 2, blankRows: 0, scanWidth: 10 },
            'Incident Log': { firstDataRow: 2, keyColumn: 1, blankRows: 2, minVisibleRow: 8, scanWidth: 9 },
            'Member Reports': { firstDataRow: 2, keyColumn: 1, blankRows: 0, scanWidth: 10 },
            'Departure Log': { firstDataRow: 2, keyColumn: 2, blankRows: 0, scanWidth: 9 },
            'Ban List': { firstDataRow: 2, keyColumn: 1, blankRows: 2, scanWidth: 11 },
            'Player Notes': { firstDataRow: 2, keyColumn: 2, blankRows: 2, scanWidth: 4 },
            'Player Identity': { firstDataRow: 2, keyColumn: 1, blankRows: 0, scanWidth: 9 },
            'Player_id': { firstDataRow: 2, keyColumn: 2, blankRows: 0, scanWidth: 3 }
        }
    },
    aesthetics: {
        accountChipColors: {
            'Main Account': '#C8F5FF',
            'Secondary Account': '#E5DDF5',
            'Farm Account': '#DCE8D5'
        },
        normalFurnaceBackground: '#FFFFFF',
        controlPanelCyan: '#00FFFF',
        unusedAreaGray: '#434343'
    },
    colors: {
        hardStop: '#F4CCCC',
        advisory: '#FFF2CC',
        review: '#D9EAD3',
        boundary: '#434343',
        active: '#D9EAD3',
        loa: '#D9EAF7',
        inactive: '#D9D9D9',
        left: '#D9D9D9',
        removed: '#FCE5CD',
        tempBan: '#FCE5CD',
        permBan: '#F4CCCC'
    },
    audit: {
        sheetName: 'AMS Log',
        headers: [
            'Timestamp',
            'Event Type',
            'User',
            'Sheet',
            'Range / Change',
            'Old Value',
            'New Value',
            'Details'
        ]
    },
    ids: {
        incidentPrefix: 'INC-',
        memberReportPrefix: 'MR-'
    },
    memberReportStatuses: {
        new: 'New',
        inProgress: 'In Progress',
        awaitingFollowUp: 'Awaiting Follow Up',
        resolved: 'Resolved',
        closedNoAction: 'Closed - No Action Needed'
    },
    rosterStatuses: {
        left: 'Left',
        removed: 'Removed',
        banned: 'Alliance Perm Ban'
    },
    rosterValidation: {
        invalidRowColor: '#F4CCCC',
        bannedRowColor: '#FFF2CC',
        validIdPattern: /^\d{9}$/
    },
    rosterCleanup: {
        boundaryColor: '#434343',
        spreadsheetIdPropertyKey: 'AMS_BOUND_SPREADSHEET_ID'
    },
    versionControl: {
        masterSpreadsheetId: 'MASTER_SPREADSHEET_ID'
    },
    setup: {
        spreadsheetIdProperty: 'AMS_BOUND_SPREADSHEET_ID'
    }
};
function onFormSubmit(e) {
    if (!e || !e.range) {
        return;
    }
    const lock = LockService.getDocumentLock();
    lock.waitLock(30000);
    try {
        const n = e.range.getSheet().getName();
        if (n === AMS.sheets.rawIncidents) {
            processIncidentSubmission_(e);
        }
        else if (n === AMS.sheets.rawMemberRequests) {
            processMemberRequest_(e);
        }
    }
    finally {
        lock.releaseLock();
    }
}
function processIncidentSubmission_(e) {
    const ss = getAmsSpreadsheet_();
    const destination = ss.getSheetByName(AMS.sheets.incidentLog);
    if (!destination) {
        throw new Error('Could not find Incident Log sheet.');
    }
    const raw = getSubmittedRow_(e);
    const sourceKey = getSubmissionSourceKey_(e);
    const prior = findSubmissionRecordBySourceKeyDetail_(destination, sourceKey);
    if (prior && prior.complete) {
        markRawSubmissionProcessed_(e, prior.id);
        return;
    }
    const leader = getRequiredFormValue_(raw, ['who is filling out this form', 'which leader', 'leader submitting', 'submitted by', 'leader'], 'incident submitter');
    const date = getRequiredFormValue_(raw, ['date incident occured', 'date incident occurred', 'incident date', 'date occurred'], 'incident date');
    const id = getRequiredFormValue_(raw, ['player id of player being reported', 'player id', 'player_id'], 'Player ID');
    const name = getRequiredFormValue_(raw, ['who are we talking about', 'in-game name', 'player name', 'name or alias'], 'player name');
    const summary = getRequiredFormValue_(raw, ['what happened', 'incident summary', 'incident notes', 'description'], 'incident summary');
    const action = getRequiredFormValue_(raw, ['what action was taken', 'action taken', 'disciplinary action'], 'action taken');
    const evidence = getOptionalFormValue_(raw, ['supporting evidence', 'evidence', 'screenshot', 'attachment']);
    const banStartRaw = getOptionalFormValue_(raw, ['when does the ban start', 'ban start']);
    const banEndRaw = getOptionalFormValue_(raw, ['when is the ban over', 'ban end', 'ban lift']);
    const normalizedId = normalizeId_(id);
    if (!AMS.validation.id.test(normalizedId)) {
        throw new Error('Incident submission rejected: Player ID must be exactly 9 digits.');
    }
    const incidentDate = parseRequiredIncidentDate_(date, 'Incident Date');
    const actionContract = getIncidentActionContract_(action);
    let banStart = '';
    let banEnd = '';
    if (actionContract.isBan) {
        banStart = actionContract.duration === 'Temporary'
            ? parseRequiredIncidentDate_(banStartRaw, 'Ban Start Date')
            : (banStartRaw ? parseRequiredIncidentDate_(banStartRaw, 'Ban Start Date') : incidentDate);
        if (actionContract.duration === 'Temporary') {
            banEnd = parseRequiredIncidentDate_(banEndRaw, 'Ban End Date');
            if (banEnd.getTime() < banStart.getTime()) {
                throw new Error('Incident submission rejected: Ban End Date cannot be before Ban Start Date.');
            }
        }
    }
    const banDetails = actionContract.isBan
        ? actionContract.duration === 'Temporary'
            ? `${actionContract.scope} Temporary | ${fmtDate_(banStart)} - ${fmtDate_(banEnd)}`
            : `${actionContract.scope} Permanent`
        : '';
    let incidentNumber;
    let incidentRow;
    if (prior) {
        incidentNumber = prior.id;
        incidentRow = prior.row;
        destination.getRange(incidentRow, 1, 1, 9).setValues([[
                incidentNumber, name, normalizedId, incidentDate, actionContract.display,
                leader, summary, evidence, banDetails
            ]]);
    }
    else {
        incidentNumber = getNextId_(destination, 1, AMS.ids.incidentPrefix);
        incidentRow = destination.getLastRow() + 1;
        destination.getRange(incidentRow, 1, 1, 9).setValues([[
                incidentNumber, name, normalizedId, incidentDate, actionContract.display,
                leader, summary, evidence, banDetails
            ]]);
        destination.getRange(incidentRow, 1).setNote(`AMS SOURCE KEY: ${sourceKey}\nAMS TRANSACTION: PENDING`);
    }
    setIncidentSourceLink_(destination, incidentRow, sourceKey);
    if (actionContract.isBan) {
        createOrUpdateBanFromIncident_({
            playerId: normalizedId,
            playerName: String(name || '').trim(),
            leader: String(leader || '').trim(),
            incidentNumber: incidentNumber,
            summary: String(summary || '').trim(),
            scope: actionContract.scope,
            duration: actionContract.duration,
            banStart: banStart,
            banEnd: banEnd
        });
    }
    const terminalResult = processTerminalRosterAction_({
        playerId: normalizedId,
        incidentDate: incidentDate,
        actionTaken: actionContract.display,
        canonicalStatus: actionContract.rosterStatus,
        incidentNumber: incidentNumber,
        sourceKey: sourceKey
    });
    ensureAuditLogEntry_('INCIDENT CREATED', AMS.sheets.incidentLog, `Player ID ${normalizedId}`, incidentNumber, `Action: ${actionContract.display}`);
    const noteCell = destination.getRange(incidentRow, 1);
    const existingNote = String(noteCell.getNote() || '');
    const completion = terminalResult && terminalResult.unresolved
        ? 'AMS TRANSACTION COMPLETE: ACTION REQUIRED'
        : 'AMS TRANSACTION COMPLETE';
    noteCell.setNote(existingNote
        .replace(/AMS TRANSACTION: PENDING/g, completion)
        .replace(/AMS TRANSACTION COMPLETE(?:: ACTION REQUIRED)?/g, completion));
    markRawSubmissionProcessed_(e, incidentNumber);
    sortIncidentLog_();
    refreshIncidentNavigationLinks_();
    refreshRosterIndicatorForId_(normalizedId);
    normalizeManagedSheetVisibility_(destination);
    scheduleDeathStarRebuild_();
}
function parseRequiredIncidentDate_(value, label) {
    const parsed = value instanceof Date ? value : new Date(value);
    if (!(parsed instanceof Date) || Number.isNaN(parsed.getTime())) {
        throw new Error(`Incident submission rejected: ${label} is not a valid date.`);
    }
    return parsed;
}
function getIncidentActionContract_(action) {
    const value = String(action || '').trim();
    const normalized = normalizeHeader_(value);
    const contracts = {
        'spoke with player in dms no formal action': {
            display: 'Spoke with Player in DMs / No Formal Action', rosterStatus: '', isBan: false
        },
        'spoke with player in dms no formal action taken': {
            display: 'Spoke with Player in DMs / No Formal Action Taken', rosterStatus: '', isBan: false
        },
        'warning issued': {
            display: 'Warning Issued', rosterStatus: '', isBan: false
        },
        'final warning issued': {
            display: 'Final Warning Issued', rosterStatus: '', isBan: false
        },
        'player removed': {
            display: 'Player Removed', rosterStatus: 'Removed', isBan: false
        },
        'alliance temporary ban': {
            display: 'Alliance Temporary Ban', rosterStatus: 'Alliance Temp Ban',
            isBan: true, scope: 'Alliance', duration: 'Temporary'
        },
        'alliance permanent ban': {
            display: 'Alliance Permanent Ban', rosterStatus: 'Alliance Perm Ban',
            isBan: true, scope: 'Alliance', duration: 'Permanent'
        },
        'nap temporary ban': {
            display: 'NAP Temporary Ban', rosterStatus: 'NAP Temp Ban',
            isBan: true, scope: 'NAP', duration: 'Temporary'
        },
        'nap permanent ban': {
            display: 'NAP Permanent Ban', rosterStatus: 'NAP Permanent Ban',
            isBan: true, scope: 'NAP', duration: 'Permanent'
        }
    };
    const contract = contracts[normalized];
    if (!contract) {
        throw new Error(`Incident submission rejected: unsupported Action Taken value "${value}".`);
    }
    return contract;
}
function createOrUpdateBanFromIncident_(incident) {
    const sheet = getOrCreateSheet_(AMS.sheets.banList, AMS.ban.headers);
    const playerId = normalizeId_(incident.playerId);
    if (!AMS.validation.id.test(playerId)) {
        throw new Error('Cannot create Ban List record without a valid Player ID.');
    }
    const existing = getBanRecordById_(playerId);
    const roster = getAmsSpreadsheet_().getSheetByName(AMS.sheets.roster);
    const member = roster
        ? getValidatedRosterMembers_(roster).find(item => item.id === playerId)
        : null;
    const aliases = member
        ? String(roster.getRange(member.row, AMS.roster.col.alias).getDisplayValue() || '').trim()
        : '';
    const record = [
        playerId,
        String(incident.playerName || (member && member.name) || '').trim(),
        aliases,
        incident.banStart || incident.incidentDate || new Date(),
        incident.scope,
        incident.duration,
        incident.duration === 'Temporary' ? incident.banEnd : '',
        String(incident.summary || '').trim(),
        String(incident.leader || getEffectiveUser_() || 'Incident Form').trim(),
        `Incident ${incident.incidentNumber || ''}`.trim(),
        AMS.ban.activeStatus
    ];
    let targetRow;
    if (existing) {
        targetRow = existing.row;
        const old = sheet.getRange(targetRow, 1, 1, 11).getValues()[0];
        record[2] = mergeAliasValues_(old[2], record[2]);
        sheet.getRange(targetRow, 1, 1, 11).setValues([record]);
    }
    else {
        targetRow = Math.max(sheet.getLastRow() + 1, 2);
        sheet.getRange(targetRow, 1, 1, 11).setValues([record]);
    }
    sortBanList_();
    ensureAuditLogEntry_('BAN CREATED', AMS.sheets.banList, `Player ID ${playerId}`, incident.incidentNumber || '', `${incident.scope} ${incident.duration} ban from Incident Form`);
}
function processMemberRequest_(e) {
    const ss = getAmsSpreadsheet_();
    const d = ss.getSheetByName(AMS.sheets.memberReports);
    if (!d)
        throw new Error('Could not find Member Reports sheet.');
    const raw = getSubmittedRow_(e);
    const sourceKey = getSubmissionSourceKey_(e);
    const prior = findSubmissionRecordBySourceKeyDetail_(d, sourceKey);
    if (prior && prior.complete) {
        setMemberReportSourceLink_(d, prior.row, sourceKey);
        markRawSubmissionProcessed_(e, prior.id);
        return;
    }
    const ts = getOptionalFormValue_(raw, ['timestamp']);
    const by = getOptionalFormValue_(raw, ['who are you', 'submitted by']) || 'Anonymous';
    const req = getRequiredFormValue_(raw, ['what do you need help with', 'request', 'description'], 'member request');
    const ev = getOptionalFormValue_(raw, ['attach any screenshots', 'screenshot', 'evidence']);
    let id;
    let row;
    let isNew = false;
    if (prior) {
        id = prior.id;
        row = prior.row;
    }
    else {
        id = getNextId_(d, 1, AMS.ids.memberReportPrefix);
        row = d.getLastRow() + 1;
        d.getRange(row, 1, 1, 10).setValues([[id, ts, by, req, ev, AMS.memberReportStatuses.new, '', '', '', '']]);
        d.getRange(row, 1).setNote(`AMS SOURCE KEY: ${sourceKey}\nAMS TRANSACTION: PENDING`);
        isNew = true;
    }
    setMemberReportSourceLink_(d, row, sourceKey);
    normalizeManagedSheetVisibility_(d);
    ensureAuditLogEntry_('MEMBER REPORT CREATED', AMS.sheets.memberReports, `Row ${row}`, id, `Submitted by: ${by}`);
    const noteCell = d.getRange(row, 1);
    const existingNote = String(noteCell.getNote() || '');
    noteCell.setNote(existingNote
        .replace(/AMS TRANSACTION: PENDING/g, 'AMS TRANSACTION COMPLETE')
        .replace(/AMS TRANSACTION COMPLETE/g, 'AMS TRANSACTION COMPLETE'));
    markRawSubmissionProcessed_(e, id);
}
function normalizeManagedSheetVisibility_(sheetOrName) {
    const ss = getAmsSpreadsheet_();
    const sheet = typeof sheetOrName === 'string'
        ? ss.getSheetByName(sheetOrName)
        : sheetOrName;
    if (!sheet)
        return;
    const rule = AMS.visibility.sheets[sheet.getName()];
    if (!rule)
        return;
    const firstDataRow = rule.firstDataRow;
    const blankRows = rule.blankRows;
    const scanWidth = Math.min(rule.scanWidth, sheet.getMaxColumns());
    let maxRows = sheet.getMaxRows();
    const scanRowCount = maxRows - firstDataRow + 1;
    let lastOccupiedRow = firstDataRow - 1;
    if (scanRowCount > 0 && scanWidth > 0) {
        const values = sheet
            .getRange(firstDataRow, 1, scanRowCount, scanWidth)
            .getDisplayValues();
        for (let i = values.length - 1; i >= 0; i--) {
            const occupied = values[i].some(value => String(value || '').trim() !== '');
            if (occupied) {
                lastOccupiedRow = firstDataRow + i;
                break;
            }
        }
    }
    const firstBlankReadyRow = lastOccupiedRow >= firstDataRow
        ? lastOccupiedRow + 1
        : firstDataRow;
    const minimumVisibleRow = Math.max(1, firstDataRow - 1);
    const requestedLastVisibleRow = blankRows > 0
        ? firstBlankReadyRow + blankRows - 1
        : lastOccupiedRow;
    const lastVisibleRow = Math.max(minimumVisibleRow, requestedLastVisibleRow, rule.minVisibleRow || 0);
    const isRoster = sheet.getName() === AMS.sheets.roster;
    const boundaryRow = isRoster
        ? lastVisibleRow + 1
        : null;
    const lastRowToShow = boundaryRow || lastVisibleRow;
    if (maxRows < lastRowToShow) {
        const oldMaxRows = maxRows;
        sheet.insertRowsAfter(maxRows, lastRowToShow - maxRows);
        maxRows = sheet.getMaxRows();
        extendAmsAestheticsAfterGrowth_(sheet, oldMaxRows);
    }
    sheet.showRows(1, lastRowToShow);
    if (isRoster) {
        applyRosterBoundaryFormatting_(sheet, firstDataRow, lastVisibleRow, boundaryRow);
    }
    const rowsBelow = maxRows - lastRowToShow;
    if (rowsBelow > 0) {
        sheet.hideRows(lastRowToShow + 1, rowsBelow);
    }
}
function applyRosterBoundaryFormatting_(roster, firstDataRow, lastVisibleRow, boundaryRow) {
    const boundaryColor = String(AMS.rosterCleanup.boundaryColor).toUpperCase();
    const usableRowCount = Math.max(0, lastVisibleRow - firstDataRow + 1);
    if (usableRowCount > 0) {
        const usableRange = roster.getRange(firstDataRow, 1, usableRowCount, 10);
        const backgrounds = usableRange.getBackgrounds();
        let changed = false;
        for (let i = 0; i < backgrounds.length; i++) {
            for (let j = 0; j < backgrounds[i].length; j++) {
                if (String(backgrounds[i][j] || '').toUpperCase() ===
                    boundaryColor) {
                    backgrounds[i][j] = null;
                    changed = true;
                }
            }
        }
        if (changed) {
            usableRange.setBackgrounds(backgrounds);
        }
    }
    if (boundaryRow) {
        roster
            .getRange(boundaryRow, 1, 1, 10)
            .setBackground(AMS.rosterCleanup.boundaryColor);
    }
}
function normalizeAllManagedSheetVisibility_() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    Object.keys(AMS.visibility.sheets).forEach(sheetName => {
        const sheet = ss.getSheetByName(sheetName);
        if (sheet) {
            normalizeManagedSheetVisibility_(sheet);
        }
    });
    console.log('AMS managed-sheet row visibility normalized.');
}
function normalizeManagedSheetVisibilityNow() {
    normalizeAllManagedSheetVisibility_();
}
function getAmsSpreadsheet_() {
    const active = SpreadsheetApp.getActiveSpreadsheet();
    if (active)
        return active;
    const spreadsheetId = PropertiesService
        .getScriptProperties()
        .getProperty(AMS.setup.spreadsheetIdProperty);
    if (!spreadsheetId) {
        throw new Error('AMS could not resolve its bound spreadsheet. Run setupNewAms() from the new spreadsheet first.');
    }
    return SpreadsheetApp.openById(spreadsheetId);
}
function getSheetRowUrl_(sheet, row) {
    if (!sheet || !row)
        return '';
    const ss = getAmsSpreadsheet_();
    return `${ss.getUrl()}#gid=${sheet.getSheetId()}&range=A${row}`;
}
/** A source key identifies one exact raw response row; never infer a Form response from timestamps. */
function getSubmissionRowLink_(sourceKey) {
    const match = String(sourceKey || '').match(/^(\d+):(\d+)$/);
    if (!match || Number(match[2]) < 2) return '';
    const ss = getAmsSpreadsheet_();
    const rawSheet = ss.getSheets().find(sheet => sheet.getSheetId() === Number(match[1]));
    return rawSheet ? getSheetRowUrl_(rawSheet, Number(match[2])) : '';
}
function setIncidentSourceLink_(incidentLog, incidentRow, sourceKey) {
    if (!incidentLog || incidentRow < 2) return;
    const targetUrl = getSubmissionRowLink_(sourceKey);
    if (!targetUrl) return;
    const cell = incidentLog.getRange(incidentRow, 1);
    const number = String(cell.getDisplayValue() || '').trim();
    if (number) cell.setRichTextValue(SpreadsheetApp.newRichTextValue()
        .setText(number).setLinkUrl(targetUrl).build());
}
function setMemberReportSourceLink_(reports, reportRow, sourceKey) {
    if (!reports || reportRow < 2) return;
    const targetUrl = getSubmissionRowLink_(sourceKey);
    if (!targetUrl) return;
    const cell = reports.getRange(reportRow, 1);
    const reportId = String(cell.getDisplayValue() || '').trim();
    if (reportId) cell.setRichTextValue(SpreadsheetApp.newRichTextValue()
        .setText(reportId).setLinkUrl(targetUrl).build());
}
function refreshIncidentNavigationLinks_() {
    const ss = getAmsSpreadsheet_();
    const incidentLog = ss.getSheetByName(AMS.sheets.incidentLog);
    if (!incidentLog)
        return;
    const incidentRows = new Map();
    const lastIncidentRow = incidentLog.getLastRow();
    if (lastIncidentRow >= 2) {
        const numbers = incidentLog.getRange(2, 1, lastIncidentRow - 1, 1).getDisplayValues();
        const notes = incidentLog.getRange(2, 1, lastIncidentRow - 1, 1).getNotes();
        numbers.forEach((record, index) => {
            const incidentNumber = String(record[0] || '').trim();
            if (!incidentNumber)
                return;
            const row = index + 2;
            incidentRows.set(incidentNumber, row);
            const note = String(notes[index][0] || '');
            const match = note.match(/AMS SOURCE KEY:\s*(\d+):(\d+)/);
            if (match) {
                setIncidentSourceLink_(incidentLog, row, `${match[1]}:${match[2]}`);
            }
        });
    }
    const banSheet = ss.getSheetByName(AMS.sheets.banList);
    if (banSheet && banSheet.getLastRow() >= 2) {
        const count = banSheet.getLastRow() - 1;
        const contexts = banSheet.getRange(2, 10, count, 1).getDisplayValues();
        contexts.forEach((record, index) => {
            const text = String(record[0] || '').trim();
            const match = text.match(/\b(INC-\d{4,})\b/i);
            if (!match)
                return;
            const incidentNumber = match[1].toUpperCase();
            const incidentRow = incidentRows.get(incidentNumber);
            if (!incidentRow)
                return;
            banSheet.getRange(index + 2, 10).setRichTextValue(SpreadsheetApp.newRichTextValue()
                .setText(text)
                .setLinkUrl(getSheetRowUrl_(incidentLog, incidentRow))
                .build());
        });
    }
}
function setupIncidentPlayerView_() {
    const sheet = getAmsSpreadsheet_().getSheetByName(AMS.sheets.incidentLog);
    if (!sheet)
        return;
    if (sheet.getMaxColumns() < 11) {
        sheet.insertColumnsAfter(sheet.getMaxColumns(), 11 - sheet.getMaxColumns());
    }
    if (String(sheet.getRange('J1').getDisplayValue() || '').trim() ===
        'Player Incident View')
        return;
    sheet.getRange('J1:K5').clearContent().clearDataValidations().clearNote();
    sheet.getRange('J1:K1').setBackground(AMS.aesthetics.controlPanelCyan);
    sheet.getRange('J1').setValue('Player Incident View')
        .setFontWeight('bold').setHorizontalAlignment('center');
    sheet.getRange('J2').setValue('Player ID').setHorizontalAlignment('center');
    sheet.getRange('K2').setNumberFormat('@');
    sheet.getRange('J3:K3').setBackground(AMS.aesthetics.unusedAreaGray);
    sheet.getRange('J4').setValue('View Player Incidents');
    sheet.getRange('J5').setValue('Clear View');
    sheet.getRange('K4:K5').insertCheckboxes();
    sheet.getRange('K2').setNote('Enter an exact 9-digit Player ID, then check View Player Incidents.');
    if (sheet.getMaxRows() >= 6) {
        sheet.getRange(6, 10, sheet.getMaxRows() - 5, 2)
            .setBackground(AMS.aesthetics.unusedAreaGray);
    }
    sheet.getRange('J7').setValue('Incident Log Search Control Panel')
        .setFontColor('#FFFFFF').setHorizontalAlignment('center');
    sheet.autoResizeColumns(10, 2);
}
function applyPlayerIncidentView_() {
    const sheet = getAmsSpreadsheet_().getSheetByName(AMS.sheets.incidentLog);
    if (!sheet)
        return;
    const playerId = normalizeId_(sheet.getRange('K2').getDisplayValue());
    if (!AMS.validation.id.test(playerId)) {
        sheet.getRange('K2').setNote('INVALID ID — enter exactly 9 digits.');
        SpreadsheetApp.getActive().toast('Enter an exact 9-digit Player ID first.', 'AMS Incident View', 5);
        return;
    }
    sheet.getRange('K2').setNote(`Showing incidents for Player ID ${playerId}.`);
    const lastRow = Math.max(sheet.getLastRow(), 2);
    if (sheet.getFilter())
        sheet.getFilter().remove();
    const filter = sheet.getRange(1, 1, lastRow, 9).createFilter();
    filter.setColumnFilterCriteria(3, SpreadsheetApp.newFilterCriteria().whenTextEqualTo(playerId).build());
    SpreadsheetApp.getActive().toast(`Showing incidents for ${playerId}.`, 'AMS Incident View', 4);
}
function clearPlayerIncidentView_() {
    const sheet = getAmsSpreadsheet_().getSheetByName(AMS.sheets.incidentLog);
    if (!sheet)
        return;
    if (sheet.getFilter())
        sheet.getFilter().remove();
    sheet.getRange('K2').clearContent().setNote('Enter an exact 9-digit Player ID, then check View Player Incidents.');
    sheet.getRange('K4:K5').setValue(false);
    SpreadsheetApp.getActive().toast('Incident Log chronological view restored.', 'AMS Incident View', 4);
}
function handleIncidentViewControlEdit_(e) {
    if (!e || !e.range || e.range.getSheet().getName() !== AMS.sheets.incidentLog)
        return false;
    const a1 = e.range.getA1Notation();
    if (a1 === 'K4' && e.value === 'TRUE') {
        applyPlayerIncidentView_();
        e.range.setValue(false);
        return true;
    }
    if (a1 === 'K5' && e.value === 'TRUE') {
        clearPlayerIncidentView_();
        return true;
    }
    return a1 === 'K2';
}
function refreshIncidentNavigation() {
    setupIncidentPlayerView_();
    refreshIncidentNavigationLinks_();
}
function assignIncidentNumberIfReady_(incidentLog, row) {
    if (!incidentLog || row < 2)
        return false;
    const values = incidentLog.getRange(row, 1, 1, 9).getValues()[0];
    if (String(values[0] || '').trim()) {
        return false;
    }
    const requiredIndexes = [1, 2, 3, 4, 5, 6];
    const ready = requiredIndexes.every(index => String(values[index] ?? '').trim() !== '');
    if (!ready)
        return false;
    const playerId = normalizeId_(values[2]);
    if (!AMS.rosterValidation.validIdPattern.test(playerId)) {
        incidentLog
            .getRange(row, 3)
            .setNote('INVALID ID — Player ID must be exactly 9 digits before an incident number can be assigned.');
        return false;
    }
    incidentLog.getRange(row, 3).setNote(null);
    const incidentNumber = getNextId_(incidentLog, 1, AMS.ids.incidentPrefix);
    incidentLog.getRange(row, 1).setValue(incidentNumber);
    writeAuditLog_('INCIDENT CREATED', AMS.sheets.incidentLog, `Row ${row}`, '', incidentNumber, `Manual entry | Player ID ${playerId}`, '');
    sortIncidentLog_();
    normalizeManagedSheetVisibility_(incidentLog);
    return true;
}
function capturePowerTrackerState_() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const powerTracker = ss.getSheetByName(AMS.sheets.powerTracker);
    if (!powerTracker)
        return null;
    SpreadsheetApp.flush();
    const lastRow = Math.max(powerTracker.getLastRow(), 5);
    const rowCount = Math.max(0, lastRow - 5);
    const stateMap = new Map();
    if (rowCount === 0) {
        return {
            map: stateMap,
            orderedIds: []
        };
    }
    const identity = powerTracker
        .getRange(6, 1, rowCount, 2)
        .getValues();
    const beginningEnding = powerTracker
        .getRange(6, 3, rowCount, 2)
        .getValues();
    const furnaceUpdatedNotes = powerTracker
        .getRange(6, 7, rowCount, 4)
        .getValues();
    const orderedIds = [];
    for (let i = 0; i < rowCount; i++) {
        const playerId = normalizeId_(identity[i][1]);
        if (!playerId || !AMS.rosterValidation.validIdPattern.test(playerId)) {
            continue;
        }
        if (stateMap.has(playerId)) {
            throw new Error(`Power Tracker preservation aborted: duplicate valid Player ID ${playerId} found.`);
        }
        stateMap.set(playerId, {
            beginningEnding: beginningEnding[i],
            furnaceUpdatedNotes: furnaceUpdatedNotes[i]
        });
        orderedIds.push(playerId);
    }
    return {
        map: stateMap,
        orderedIds: orderedIds
    };
}
function restorePowerTrackerState_(state) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const powerTracker = ss.getSheetByName(AMS.sheets.powerTracker);
    const roster = ss.getSheetByName(AMS.sheets.roster);
    if (!powerTracker || !roster)
        return false;
    const validation = validateRosterPlayerIds_(roster);
    if (!validation.valid) {
        console.warn('Power Tracker state restore skipped because Roster identity validation failed.');
        return false;
    }
    const members = getValidatedRosterMembers_(roster);
    const safeState = state && state.map instanceof Map
        ? state
        : { map: new Map(), orderedIds: [] };
    const seenTargets = new Set();
    members.forEach(member => {
        if (seenTargets.has(member.playerId)) {
            throw new Error(`Power Tracker rebuild aborted: duplicate target Player ID ${member.playerId}.`);
        }
        seenTargets.add(member.playerId);
    });
    const currentLastRow = Math.max(powerTracker.getLastRow(), 5);
    const currentRowCount = Math.max(0, currentLastRow - 5);
    const targetRowCount = members.length;
    const writeRowCount = Math.max(currentRowCount, targetRowCount);
    if (writeRowCount === 0) {
        return true;
    }
    const requiredLastRow = 5 + writeRowCount;
    if (powerTracker.getMaxRows() < requiredLastRow) {
        const oldMaxRows = powerTracker.getMaxRows();
        powerTracker.insertRowsAfter(oldMaxRows, requiredLastRow - oldMaxRows);
        extendAmsAestheticsAfterGrowth_(powerTracker, oldMaxRows);
    }
    const identityValues = [];
    const beginningEndingValues = [];
    const furnaceUpdatedNotesValues = [];
    for (let i = 0; i < writeRowCount; i++) {
        if (i < targetRowCount) {
            const member = members[i];
            const saved = safeState.map.get(member.playerId);
            identityValues.push([
                member.name,
                member.playerId
            ]);
            beginningEndingValues.push(saved ? saved.beginningEnding : ['', '']);
            furnaceUpdatedNotesValues.push(saved ? saved.furnaceUpdatedNotes : ['', '', '', '']);
        }
        else {
            identityValues.push(['', '']);
            beginningEndingValues.push(['', '']);
            furnaceUpdatedNotesValues.push(['', '', '', '']);
        }
    }
    powerTracker
        .getRange(6, 1, writeRowCount, 2)
        .setValues(identityValues);
    powerTracker
        .getRange(6, 3, writeRowCount, 2)
        .setValues(beginningEndingValues);
    powerTracker
        .getRange(6, 7, writeRowCount, 4)
        .setValues(furnaceUpdatedNotesValues);
    return true;
}
function getIncidentNumbersForPlayer_(playerId) {
    const ss = getAmsSpreadsheet_();
    const incidentLog = ss.getSheetByName(AMS.sheets.incidentLog);
    if (!incidentLog)
        return '';
    const normalizedPlayerId = normalizeId_(playerId);
    const lastRow = incidentLog.getLastRow();
    if (!normalizedPlayerId || lastRow < 2)
        return '';
    const values = incidentLog
        .getRange(2, 1, lastRow - 1, 3)
        .getValues();
    const incidentNumbers = [];
    const seen = new Set();
    values.forEach(row => {
        const incidentNumber = String(row[0] || '').trim();
        const incidentPlayerId = normalizeId_(row[2]);
        if (incidentPlayerId === normalizedPlayerId &&
            incidentNumber &&
            !seen.has(incidentNumber)) {
            seen.add(incidentNumber);
            incidentNumbers.push(incidentNumber);
        }
    });
    return incidentNumbers.join(', ');
}
function touchRosterUpdated_(roster) {
    if (!roster) {
        roster = getAmsSpreadsheet_().getSheetByName(AMS.sheets.roster);
    }
    if (!roster)
        return;
    roster
        .getRange('L7')
        .setValue(new Date())
        .setNumberFormat('m/d/yyyy h:mm AM/PM');
}
function getLastRosterMemberRow_(roster) {
    const sheetLastRow = Math.max(roster.getLastRow(), 3);
    const ids = roster
        .getRange(3, 3, sheetLastRow - 2, 1)
        .getValues();
    for (let i = ids.length - 1; i >= 0; i--) {
        if (normalizeId_(ids[i][0])) {
            return i + 3;
        }
    }
    return 2;
}
function sortIncidentLog_() {
    const ss = getAmsSpreadsheet_();
    const sheet = ss.getSheetByName(AMS.sheets.incidentLog);
    if (!sheet)
        return;
    const lastRow = sheet.getLastRow();
    if (lastRow <= 2)
        return;
    sheet
        .getRange(2, 1, lastRow - 1, 9)
        .sort([
        { column: 3, ascending: true },
        { column: 4, ascending: true }
    ]);
}
function getNextId_(sheet, column, prefix) {
    if (sheet.getLastRow() < 2) {
        return prefix + '0001';
    }
    const vals = sheet.getRange(2, column, sheet.getLastRow() - 1, 1).getDisplayValues().flat();
    const max = vals.reduce((currentMax, value) => {
        const n = parseInt(String(value).replace(prefix, ''), 10);
        return Number.isFinite(n) ? Math.max(currentMax, n) : currentMax;
    }, 0);
    return prefix + String(max + 1).padStart(4, '0');
}
function getSubmittedRow_(e) {
    const sheet = e.range.getSheet();
    const row = e.range.getRow();
    const lastColumn = sheet.getLastColumn();
    const headers = sheet
        .getRange(1, 1, 1, lastColumn)
        .getDisplayValues()[0];
    const values = sheet
        .getRange(row, 1, 1, lastColumn)
        .getValues()[0];
    return {
        headers: headers,
        values: values
    };
}
function getValueByHeaderPrefix_(raw, prefix) {
    const normalizedPrefix = prefix.toLowerCase();
    const index = raw.headers.findIndex(header => String(header)
        .trim()
        .toLowerCase()
        .startsWith(normalizedPrefix));
    if (index === -1) {
        console.warn(`Could not find Form column beginning with: ${prefix}`);
        return '';
    }
    return raw.values[index];
}
function normalizeId_(value) {
    if (value === null || value === undefined) {
        return '';
    }
    const raw = String(value).trim();
    if (!raw)
        return '';
    const withoutIntegerSuffix = raw.replace(/\.0$/, '');
    if (/^\d+$/.test(withoutIntegerSuffix)) {
        return withoutIntegerSuffix;
    }
    if (/^\d+(?:\.\d+)?[eE][+]?\d+$/.test(raw)) {
        const numeric = Number(raw);
        if (Number.isSafeInteger(numeric) && numeric >= 0) {
            return String(numeric);
        }
    }
    return withoutIntegerSuffix;
}
function getFurnaceRank_(value) {
    if (value === null || value === undefined)
        return null;
    const raw = String(value)
        .trim()
        .replace(/^🔥\s*/u, '')
        .toUpperCase();
    if (!raw)
        return null;
    if (/^\d+$/.test(raw)) {
        const level = Number(raw);
        return level >= 1 && level <= AMS.furnace.normalMax
            ? level
            : null;
    }
    const match = raw.match(/^FC\s*(10|[1-9])$/);
    if (!match)
        return null;
    const fcLevel = Number(match[1]);
    if (fcLevel < 1 || fcLevel > AMS.furnace.fcMax)
        return null;
    return AMS.furnace.normalMax + fcLevel;
}
function normalizeFurnaceValue_(value) {
    const rank = getFurnaceRank_(value);
    if (rank === null)
        return '';
    if (rank <= AMS.furnace.normalMax) {
        return String(rank);
    }
    return `🔥 FC${rank - AMS.furnace.normalMax}`;
}
function getFallbackFurnaceConfig_() {
    const rows = [];
    for (let level = 1; level <= AMS.furnace.normalMax; level++) {
        rows.push({
            display: String(level),
            rank: level,
            background: ''
        });
    }
    for (let fc = 1; fc <= AMS.furnace.fcMax; fc++) {
        rows.push({
            display: `🔥 FC${fc}`,
            rank: AMS.furnace.normalMax + fc,
            background: AMS.furnace.fallbackFcColors[fc - 1] || ''
        });
    }
    return rows;
}
function getFurnaceConfig_() {
    const fallback = getFallbackFurnaceConfig_();
    const byRank = new Map(fallback.map(record => [record.rank, record]));
    const config = getAmsSpreadsheet_().getSheetByName(AMS.sheets.config);
    if (!config ||
        config.getMaxRows() < AMS.furnace.configFirstRow + AMS.furnace.configRowCount - 1 ||
        config.getMaxColumns() < 12) {
        return fallback;
    }
    const values = config
        .getRange(AMS.furnace.configFirstRow, 10, AMS.furnace.configRowCount, 3)
        .getDisplayValues();
    values.forEach(record => {
        const display = normalizeFurnaceValue_(record[0]);
        const rank = getFurnaceRank_(display);
        if (rank === null)
            return;
        const background = String(record[1] || '').trim().toUpperCase();
        const safeBackground = /^#[0-9A-F]{6}$/.test(background)
            ? background
            : byRank.get(rank).background;
        byRank.set(rank, {
            display: display,
            rank: rank,
            background: safeBackground || ''
        });
    });
    return Array.from(byRank.values())
        .sort((a, b) => a.rank - b.rank);
}
function getHighestUnlockedFurnaceRank_(roster) {
    if (!roster)
        return AMS.furnace.normalMax;
    const configured = getRosterMetadataValueByLabel_(roster, AMS.furnace.metadataLabel);
    const rank = getFurnaceRank_(configured);
    return rank === null
        ? AMS.furnace.normalMax
        : Math.min(AMS.furnace.normalMax + AMS.furnace.fcMax, Math.max(AMS.furnace.normalMax, rank));
}
function getAvailableFurnaceLevels_(roster) {
    const maxRank = getHighestUnlockedFurnaceRank_(roster);
    return getFurnaceConfig_()
        .filter(record => record.rank <= maxRank)
        .sort((a, b) => a.rank - b.rank);
}
function buildFurnaceValidationRule_(values) {
    const safeValues = (values || []).filter(Boolean);
    if (!safeValues.length)
        return null;
    return SpreadsheetApp
        .newDataValidation()
        .requireValueInList(safeValues, true)
        .setAllowInvalid(false)
        .build();
}
function applyFurnaceValidations_(roster) {
    const ss = getAmsSpreadsheet_();
    const rosterSheet = roster || ss.getSheetByName(AMS.sheets.roster);
    const pt = ss.getSheetByName(AMS.sheets.powerTracker);
    if (!rosterSheet)
        return;
    const metadataCell = rosterSheet.getRange(AMS.furnace.metadataCell);
    if (!String(metadataCell.getDisplayValue() || '').trim()) {
        metadataCell.setValue(AMS.furnace.defaultMax);
    }
    const allLevels = getFurnaceConfig_();
    const metadataOptions = allLevels
        .filter(record => record.rank >= AMS.furnace.normalMax)
        .map(record => record.display);
    const metadataRule = buildFurnaceValidationRule_(metadataOptions);
    if (metadataRule && !rosterStaticDropdownMatches_(metadataCell.getDataValidation(), metadataOptions)) {
        metadataCell.setDataValidation(metadataRule);
    }
    const available = getAvailableFurnaceLevels_(rosterSheet)
        .map(record => record.display);
    const furnaceRule = buildFurnaceValidationRule_(available);
    if (!furnaceRule)
        return;
    applyRosterStaticDropdownIfNeeded_(rosterSheet, AMS.roster.col.furnace, available, furnaceRule, AMS.rows.rosterFirst);
    if (pt) {
        applyRosterStaticDropdownIfNeeded_(pt, 7, available, furnaceRule, AMS.rows.powerFirst);
        applyRosterStaticDropdownIfNeeded_(pt, 8, available, furnaceRule, AMS.rows.powerFirst);
    }
}
function normalizeEditedFurnaceCells_(sheet, firstRow, lastRow, firstColumn, lastColumn) {
    if (!sheet)
        return;
    const rowStart = Math.max(1, Number(firstRow) || 1);
    const rowEnd = Math.max(rowStart, Number(lastRow) || rowStart);
    const colStart = Math.max(1, Number(firstColumn) || 1);
    const colEnd = Math.max(colStart, Number(lastColumn) || colStart);
    const range = sheet.getRange(rowStart, colStart, rowEnd - rowStart + 1, colEnd - colStart + 1);
    const values = range.getValues();
    let changed = false;
    for (let r = 0; r < values.length; r++) {
        for (let c = 0; c < values[r].length; c++) {
            const current = values[r][c];
            if (current === '' || current === null)
                continue;
            const canonical = normalizeFurnaceValue_(current);
            if (!canonical)
                continue;
            if (String(current).trim() !== canonical) {
                values[r][c] = canonical;
                changed = true;
            }
        }
    }
    if (changed) {
        range.setValues(values);
    }
}
function applyRosterFurnacePresentationForRows_(roster, firstRow, lastRow) {
    return;
}
function refreshRosterFurnacePresentation_() {
    return;
}
function refreshFurnaceConfiguration() {
    const roster = getAmsSpreadsheet_().getSheetByName(AMS.sheets.roster);
    if (!roster)
        return;
    applyFurnaceValidations_(roster);
    refreshRosterFurnacePresentation_();
}
function refreshRosterMetadataControls() {
    const ss = getAmsSpreadsheet_();
    const roster = ss.getSheetByName(AMS.sheets.roster);
    if (!roster)
        throw new Error('Roster sheet not found.');
    const label = String(roster.getRange('K9').getDisplayValue() || '').trim();
    const selected = String(roster.getRange(AMS.furnace.metadataCell).getDisplayValue() || '').trim();
    if (label !== AMS.furnace.metadataLabel) {
        throw new Error('Metadata layout mismatch: K9 must be "' + AMS.furnace.metadataLabel + '". No changes made.');
    }
    if (getFurnaceRank_(selected) === null) {
        throw new Error('Invalid furnace state maximum in ' + AMS.furnace.metadataCell + ': "' + selected + '". No changes made.');
    }
    applyRosterValidations_(roster);
    const validation = validateRosterPlayerIds_(roster);
    writeRosterValidationMetadata_(roster, validation.errorType, validation.details);
    const available = getAvailableFurnaceLevels_(roster).map(record => record.display);
    const message = 'Roster metadata refreshed: maximum ' + selected +
        '; available furnace levels: ' + available.length +
        '; identity: ' + (validation.valid ? 'IDENTITY OK' : validation.errorType);
    console.log(message);
    ss.toast(message, 'AMS Roster Metadata', 8);
}
function setupAuditLog_() {
    const ss = getAmsSpreadsheet_();
    let sheet = ss.getSheetByName(AMS.audit.sheetName);
    if (!sheet) {
        sheet = ss.insertSheet(AMS.audit.sheetName);
    }
    sheet
        .getRange(1, 1, 1, AMS.audit.headers.length)
        .setValues([AMS.audit.headers]);
    sheet.setFrozenRows(1);
    const protections = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET);
    const protection = protections.length > 0
        ? protections[0]
        : sheet.protect();
    protection.setDescription('AMS owner-only audit log');
    protection.setWarningOnly(false);
    const editors = protection.getEditors();
    if (editors.length > 0) {
        protection.removeEditors(editors);
    }
    if (protection.canDomainEdit()) {
        protection.setDomainEdit(false);
    }
    scheduleManagedSheetHide_();
    return sheet;
}
function getAuditLogSheet_() {
    const ss = getAmsSpreadsheet_();
    let sheet = ss.getSheetByName(AMS.audit.sheetName);
    if (!sheet) {
        sheet = setupAuditLog_();
        return sheet;
    }
    if (!sheet.isSheetHidden()) {
        scheduleManagedSheetHide_();
    }
    return sheet;
}
function scheduleManagedSheetHide_() {
    const handler = 'hideManagedSheetsDelayed_';
    ScriptApp.getProjectTriggers()
        .filter(trigger => trigger.getHandlerFunction() === handler)
        .forEach(trigger => ScriptApp.deleteTrigger(trigger));
    ScriptApp.newTrigger(handler)
        .timeBased()
        .after(120000)
        .create();
}
function hideManagedSheetsDelayed_() {
    const ss = getAmsSpreadsheet_();
    const managedSheets = [
        AMS.audit.sheetName,
        AMS.sheets.config,
        AMS.sheets.rawIncidents,
        AMS.sheets.rawMemberRequests,
        AMS.sheets.identityData
    ];
    const activeSheet = ss.getActiveSheet();
    const activeName = activeSheet ? activeSheet.getName() : '';
    managedSheets.forEach(sheetName => {
        const sheet = ss.getSheetByName(sheetName);
        if (!sheet)
            return;
        if (sheetName === activeName)
            return;
        if (!sheet.isSheetHidden()) {
            sheet.hideSheet();
        }
    });
    ScriptApp.getProjectTriggers()
        .filter(trigger => trigger.getHandlerFunction() === 'hideManagedSheetsDelayed_')
        .forEach(trigger => ScriptApp.deleteTrigger(trigger));
}
function writeAuditLog_(eventType, sheetName, rangeOrChange, oldValue, newValue, details, userEmail) {
    const logSheet = getAuditLogSheet_();
    logSheet.appendRow([
        new Date(),
        eventType || '',
        userEmail || '',
        sheetName || '',
        rangeOrChange || '',
        oldValue ?? '',
        newValue ?? '',
        details || ''
    ]);
}
function ensureAuditLogEntry_(eventType, sheetName, rangeOrChange, newValue, details) {
    const logSheet = getAuditLogSheet_();
    if (logSheet.getLastRow() >= 2) {
        const rows = logSheet.getRange(2, 1, logSheet.getLastRow() - 1, AMS.audit.headers.length).getDisplayValues();
        const exists = rows.some(row => String(row[1] || '') === String(eventType || '') &&
            String(row[3] || '') === String(sheetName || '') &&
            String(row[4] || '') === String(rangeOrChange || '') &&
            String(row[6] || '') === String(newValue || ''));
        if (exists)
            return false;
    }
    writeAuditLog_(eventType, sheetName, rangeOrChange, '', newValue, details, '');
    return true;
}
function auditOnEdit_(e) {
    if (!e || !e.range)
        return;
    const sheet = e.range.getSheet();
    if (sheet.getName() === AMS.audit.sheetName)
        return;
    const userEmail = e.user && typeof e.user.getEmail === 'function'
        ? e.user.getEmail()
        : '';
    const oldValue = Object.prototype.hasOwnProperty.call(e, 'oldValue')
        ? e.oldValue
        : '';
    const newValue = Object.prototype.hasOwnProperty.call(e, 'value')
        ? e.value
        : '';
    writeAuditLog_('EDIT', sheet.getName(), e.range.getA1Notation(), oldValue, newValue, `${e.range.getNumRows()}x${e.range.getNumColumns()} range edit`, userEmail);
}
function auditOnChange_(e) {
    if (!e)
        return;
    if (e.changeType === 'EDIT')
        return;
    const userEmail = e.user && typeof e.user.getEmail === 'function'
        ? e.user.getEmail()
        : '';
    writeAuditLog_('CHANGE', 'Workbook', e.changeType || 'UNKNOWN', '', '', 'Spreadsheet structural change; affected sheet is not reliably exposed by the onChange event.', userEmail);
    scheduleDeathStarRebuild_();
}
function refreshVersionControl_() {
    const ss = getAmsSpreadsheet_();
    const config = ss.getSheetByName(AMS.sheets.config);
    const intro = ss.getSheetByName('Intro');
    if (!config)
        return false;
    const installedVersion = String(config.getRange('H2').getDisplayValue() || '').trim();
    const buildType = String(config.getRange('H5').getDisplayValue() || '').trim();
    let latestVersion = '';
    let versionStatus = '';
    if (buildType.toLowerCase() === 'master build') {
        latestVersion = installedVersion;
        versionStatus = 'MASTER BUILD';
    }
    else {
        const masterId = String(AMS.versionControl.masterSpreadsheetId || '').trim();
        if (!masterId || masterId === 'MASTER_SPREADSHEET_ID') {
            versionStatus = 'CHECK RELEASES';
        }
        else {
            try {
                const master = SpreadsheetApp.openById(masterId);
                const masterConfig = master.getSheetByName(AMS.sheets.config);
                if (!masterConfig) {
                    throw new Error('Master Config sheet was not found.');
                }
                latestVersion = String(masterConfig.getRange('H2').getDisplayValue() || '').trim();
                if (!latestVersion) {
                    versionStatus = 'UNABLE TO CHECK';
                }
                else if (latestVersion === installedVersion) {
                    versionStatus = 'UP TO DATE';
                }
                else {
                    versionStatus = '⚠ UPDATE AVAILABLE';
                }
            }
            catch (error) {
                latestVersion = '';
                versionStatus = 'UNABLE TO CHECK';
                console.warn(`AMS version check failed: ${error.message}`);
            }
        }
    }
    config.getRange('H3').setValue(latestVersion);
    config.getRange('H4').setValue(versionStatus);
    if (intro) {
        intro.getRange('A38').setValue(installedVersion ? `v${installedVersion}` : '');
        intro.getRange('D38').setValue(latestVersion ? `v${latestVersion}` : '');
        intro.getRange('G38').setValue(versionStatus);
    }
    return true;
}
function installVersionCheckTrigger_() {
    ScriptApp.getProjectTriggers().forEach(trigger => {
        if (trigger.getHandlerFunction() === 'refreshVersionControl_') {
            ScriptApp.deleteTrigger(trigger);
        }
    });
    ScriptApp
        .newTrigger('refreshVersionControl_')
        .timeBased()
        .everyHours(6)
        .create();
    console.log('AMS version-check trigger installed successfully.');
}
function installAuditTriggers_() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    setupAuditLog_();
    ScriptApp.getProjectTriggers().forEach(trigger => {
        const handler = trigger.getHandlerFunction();
        if (handler === 'auditOnEdit_' ||
            handler === 'auditOnChange_') {
            ScriptApp.deleteTrigger(trigger);
        }
    });
    ScriptApp
        .newTrigger('auditOnEdit_')
        .forSpreadsheet(ss)
        .onEdit()
        .create();
    ScriptApp
        .newTrigger('auditOnChange_')
        .forSpreadsheet(ss)
        .onChange()
        .create();
    console.log('AMS audit triggers installed successfully.');
}
function refreshAms() {
    refreshBanExpirations_();
    refreshLeadershipNotes_();
    syncValidatedRosterDownstream_();
    refreshRosterFurnacePresentation_();
    sortBanList_();
    normalizeAllManagedSheetVisibility_();
}
function liftSelectedBan() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    if (!sheet || sheet.getName() !== AMS.sheets.banList) {
        throw new Error('Select a Ban List row first.');
    }
    const row = sheet.getActiveRange().getRow();
    if (row < 2) {
        throw new Error('Select a Ban List record, not the header row.');
    }
    liftBanRow_(sheet, row);
}
function handleAmsEdit_(e) {
    if (!e || !e.range) {
        return;
    }
    const perfTotalStart = Date.now();
    const sheet = e.range.getSheet();
    const name = sheet.getName();
    let lockWaitMs = 30000;
    if (name === AMS.sheets.roster) {
        const firstCol = e.range.getColumn();
        const lastCol = e.range.getLastColumn();
        const touchesColumn = column => firstCol <= column && lastCol >= column;
        const metadataFirstRow = e.range.getRow();
        const metadataLastRow = e.range.getLastRow();
        const touchesRosterMetadata = firstCol <= 12 &&
            lastCol >= 12 &&
            ((metadataFirstRow <= 6 && metadataLastRow >= 4) ||
                (metadataFirstRow <= 9 && metadataLastRow >= 9));
        const criticalRosterEdit = touchesColumn(AMS.roster.col.id) ||
            touchesColumn(AMS.roster.col.rank) ||
            touchesColumn(AMS.roster.col.account) ||
            touchesColumn(AMS.roster.col.status) ||
            touchesRosterMetadata;
        if (!criticalRosterEdit) {
            lockWaitMs = 250;
        }
    }
    const lock = LockService.getDocumentLock();
    const perfLockStart = Date.now();
    if (!lock.tryLock(lockWaitMs)) {
        const lockWait = Date.now() - perfLockStart;
        console.log(`PERF LOCK FAILED/YIELDED | ` +
            `${name}!${e.range.getA1Notation()} | ` +
            `waited ${lockWait} ms | ` +
            `limit ${lockWaitMs} ms`);
        return;
    }
    const perfLockAcquired = Date.now();
    const actualLockWait = perfLockAcquired - perfLockStart;
    console.log(`PERF LOCK ACQUIRED | ` +
        `${name}!${e.range.getA1Notation()} | ` +
        `wait ${actualLockWait} ms`);
    try {
        if (name === AMS.sheets.roster) {
            return handleRosterEdit_(e);
        }
        if (name === AMS.sheets.powerTracker) {
            return handlePowerTrackerEdit_(e);
        }
        if (name === AMS.sheets.config) {
            const firstRow = e.range.getRow();
            const lastRow = e.range.getLastRow();
            const firstCol = e.range.getColumn();
            const lastCol = e.range.getLastColumn();
            const touchesFurnaceConfig = firstRow <= 41 &&
                lastRow >= 1 &&
                firstCol <= 12 &&
                lastCol >= 10;
            if (touchesFurnaceConfig) {
                refreshFurnaceConfiguration();
            }
            return;
        }
        if (name === AMS.sheets.banList) {
            return handleBanListEdit_(e);
        }
        if (name === AMS.sheets.accountLinks) {
            const firstRow = Math.max(2, e.range.getRow());
            const lastRow = Math.max(firstRow, e.range.getLastRow());
            const ids = [];
            if (lastRow >= 2) {
                sheet
                    .getRange(firstRow, 1, lastRow - firstRow + 1, 4)
                    .getValues()
                    .forEach(record => {
                    ids.push(record[0], record[3]);
                });
            }
            validateAccountLinks_(sheet);
            refreshPlayerIdentity_();
            normalizeManagedSheetVisibility_(sheet);
            refreshRosterIndicatorsForIds_(ids);
            scheduleDeathStarRebuild_();
            return;
        }
        if (name === AMS.sheets.leadershipNotes) {
            const firstRow = Math.max(2, e.range.getRow());
            const lastRow = Math.max(firstRow, e.range.getLastRow());
            const ids = [];
            if (lastRow >= 2) {
                sheet
                    .getRange(firstRow, AMS.leadershipNotes.col.id, lastRow - firstRow + 1, 1)
                    .getValues()
                    .forEach(record => ids.push(record[0]));
            }
            refreshRosterIndicatorsForIds_(ids);
            scheduleDeathStarRebuild_();
            return;
        }
        if (name === AMS.sheets.memberReports) {
            return handleMemberReportsEdit_(e);
        }
        if (name === AMS.sheets.incidentLog) {
            if (handleIncidentViewControlEdit_(e)) {
                return;
            }
            const firstRow = Math.max(2, e.range.getRow());
            const lastRow = Math.max(firstRow, e.range.getLastRow());
            const ids = [];
            for (let row = firstRow; row <= lastRow; row++) {
                assignIncidentNumberIfReady_(sheet, row);
                ids.push(sheet.getRange(row, 3).getValue());
            }
            refreshRosterIndicatorsForIds_(ids);
            scheduleDeathStarRebuild_();
            return;
        }
    }
    finally {
        const perfEnd = Date.now();
        console.log(`PERF WORK AFTER LOCK | ` +
            `${name}!${e.range.getA1Notation()} | ` +
            `${perfEnd - perfLockAcquired} ms`);
        console.log(`PERF TOTAL | ` +
            `${name}!${e.range.getA1Notation()} | ` +
            `${perfEnd - perfTotalStart} ms`);
        lock.releaseLock();
    }
}
function clearHumanDeletedRosterPresentation_(roster, row, firstCol, lastCol) {
    if (!roster || row < AMS.rows.rosterFirst) return false;
    const startCol = Math.max(1, Number(firstCol) || 1);
    const endCol = Math.min(10, Math.max(startCol, Number(lastCol) || startCol));
    const editedRange = roster.getRange(row, startCol, 1, endCol - startCol + 1);
    const editedValues = editedRange.getDisplayValues()[0];
    const editedNotes = editedRange.getNotes()[0];
    // Only AMS-owned validation text is removed from an edited blank cell.
    // Clearing a Player ID never authorizes loss of human-authored row notes.
    let changed = false;
    editedValues.forEach((value, index) => {
        if (String(value || '').trim() || !editedNotes[index]) return;
        const cleaned = stripAmsRosterValidationNote_(editedNotes[index]);
        if (cleaned !== editedNotes[index]) {
            editedNotes[index] = cleaned;
            changed = true;
        }
    });
    if (changed) editedRange.setNotes([editedNotes]);
    const rowRange = roster.getRange(row, 1, 1, 10);
    const values = rowRange.getValues()[0];
    const hasUserData = values.some((value, index) =>
        index !== AMS.roster.col.id - 1 &&
        index !== AMS.roster.col.indicator - 1 &&
        String(value ?? '').trim() !== '');
    // A fully erased entry row may shed old AMS presentation. A row with any
    // membership data and a missing ID must retain its hard-stop warning.
    if (!hasUserData && !normalizeId_(values[AMS.roster.col.id - 1])) {
        const backgrounds = rowRange.getBackgrounds()[0];
        const warningColors = new Set([AMS.colors.hardStop, AMS.colors.advisory]
            .map(color => String(color || '').toUpperCase()));
        let backgroundsChanged = false;
        backgrounds.forEach((background, index) => {
            if (warningColors.has(String(background || '').toUpperCase())) {
                backgrounds[index] = null;
                backgroundsChanged = true;
            }
        });
        if (backgroundsChanged) rowRange.setBackgrounds([backgrounds]);
    }
    return changed;
}
function handleRosterEdit_(e) {
    const roster = e.range.getSheet();
    if (e.range.getColumn() <= 12 && e.range.getLastColumn() >= 12) {
        const metadataFirstRow = e.range.getRow();
        const metadataLastRow = e.range.getLastRow();
        const touchesAllianceMetadata = metadataFirstRow <= 6 && metadataLastRow >= 4;
        const touchesFurnaceMetadata = metadataFirstRow <= 9 && metadataLastRow >= 9;
        if (touchesAllianceMetadata || touchesFurnaceMetadata) {
            applyRosterValidations_(roster);
            refreshRosterFurnacePresentation_();
            touchRosterUpdated_(roster);
            return;
        }
    }
    const firstRow = Math.max(AMS.rows.rosterFirst, e.range.getRow());
    const lastRow = e.range.getLastRow();
    const firstCol = e.range.getColumn();
    const lastCol = e.range.getLastColumn();
    if (lastRow < AMS.rows.rosterFirst || firstCol > 10)
        return;
    const touchesId = firstCol <= AMS.roster.col.id &&
        lastCol >= AMS.roster.col.id;
    const touchesRank = firstCol <= AMS.roster.col.rank &&
        lastCol >= AMS.roster.col.rank;
    const touchesFurnace = firstCol <= AMS.roster.col.furnace &&
        lastCol >= AMS.roster.col.furnace;
    const touchesAccount = firstCol <= AMS.roster.col.account &&
        lastCol >= AMS.roster.col.account;
    const touchesStatus = firstCol <= AMS.roster.col.status &&
        lastCol >= AMS.roster.col.status;
    touchRosterUpdated_(roster);
    for (let row = firstRow; row <= lastRow; row++) {
        clearHumanDeletedRosterPresentation_(roster, row, firstCol, lastCol);
    }
    if (touchesFurnace) {
        normalizeEditedFurnaceCells_(roster, firstRow, lastRow, AMS.roster.col.furnace, AMS.roster.col.furnace);
        applyRosterFurnacePresentationForRows_(roster, firstRow, lastRow);
    }
    if (touchesId) {
        const validation = validateEditedRosterIds_(roster, firstRow, lastRow);
        if (!validation.valid) {
            normalizeManagedSheetVisibility_(roster);
            scheduleDeathStarRebuild_();
            return;
        }
    }
    const rows = [];
    for (let row = firstRow; row <= lastRow; row++) {
        rows.push(row);
    }
    if (touchesId) {
        const ids = [];
        rows.forEach(row => {
            restoreReturningMemberFromHistory_(roster, row);
            resolveBanIdentityMatch_(roster, row);
            applyRosterBanAdvisory_(roster, row, true);
            applyLinkedAccountAdvisory_(roster, row, true);
            ids.push(roster.getRange(row, AMS.roster.col.id).getValue());
        });
        refreshRosterIndicatorsForIds_(ids);
        normalizeManagedSheetVisibility_(roster);
        scheduleDeathStarRebuild_();
        return;
    }
    if (touchesAccount) {
        const ids = [];
        rows.forEach(row => {
            ensureAccountLinkPlaceholder_(roster, row);
            ids.push(roster.getRange(row, AMS.roster.col.id).getValue());
        });
        refreshRosterIndicatorsForIds_(ids);
        normalizeManagedSheetVisibility_(roster);
        scheduleDeathStarRebuild_();
        return;
    }
    if (touchesRank) {
        const rowValues = roster
            .getRange(firstRow, 1, rows.length, 10)
            .getValues();
        const statusValues = rowValues.map(record => [
            record[AMS.roster.col.status - 1]
        ]);
        let statusChanged = false;
        rowValues.forEach((record, index) => {
            const rank = String(record[AMS.roster.col.rank - 1] || '');
            const currentStatus = record[AMS.roster.col.status - 1];
            const playerId = normalizeId_(record[AMS.roster.col.id - 1]);
            if (rank === 'R1' &&
                !currentStatus &&
                AMS.validation.id.test(playerId)) {
                statusValues[index][0] = 'Inactive';
                statusChanged = true;
            }
        });
        if (statusChanged) {
            roster
                .getRange(firstRow, AMS.roster.col.status, rows.length, 1)
                .setValues(statusValues);
        }
        sortRosterByStatus_();
        normalizeManagedSheetVisibility_(roster);
        scheduleDeathStarRebuild_();
        return;
    }
    if (touchesStatus) {
        const commitValues = roster
            .getRange(firstRow, 1, rows.length, 10)
            .getValues();
        const commits = commitValues
            .map((record, index) => ({
            row: firstRow + index,
            id: normalizeId_(record[AMS.roster.col.id - 1]),
            status: String(record[AMS.roster.col.status - 1] || '')
        }))
            .filter(item => item.status !== '');
        const missingIdentity = commits.filter(item => !AMS.validation.id.test(item.id));
        if (missingIdentity.length) {
            missingIdentity.forEach(item => hardStopRow_(roster, item.row, 'A valid 9-digit Player ID is required before Status can be committed.'));
            return;
        }
        if (commits.length === 1) {
            commitRosterStatus_(roster, commits[0].row, commits[0].status);
            return;
        }
        for (const item of commits) {
            const currentRow = findRosterRowById_(roster, item.id);
            if (currentRow) {
                commitRosterStatus_(roster, currentRow, item.status);
            }
        }
        return;
    }
    normalizeManagedSheetVisibility_(roster);
    scheduleDeathStarRebuild_();
}
function stampPowerTrackerLastUpdated_(pt, row) {
    if (!pt || row < AMS.rows.powerFirst)
        return;
    pt
        .getRange(row, 9)
        .setValue(new Date())
        .setNumberFormat('mmmm d, yyyy');
}
function commitRosterStatus_(roster, row, status) {
    const id = normalizeId_(roster.getRange(row, AMS.roster.col.id).getValue());
    if (!id || !AMS.validation.id.test(id)) {
        return hardStopRow_(roster, row, 'A valid 9-digit Player ID is required before Status can be committed.');
    }
    if (status === 'Inactive' &&
        String(roster.getRange(row, AMS.roster.col.rank).getValue()) !== 'R1') {
        roster
            .getRange(row, AMS.roster.col.rank)
            .setValue('R1');
    }
    if (isBanCommand_(status)) {
        createBanFromRoster_(roster, row, status);
        archiveAndRemoveRosterMember_(roster, row, status, { source: 'Roster Status' });
        scheduleDeathStarRebuild_();
        return;
    }
    if (status === 'Left' || status === 'Removed') {
        archiveAndRemoveRosterMember_(roster, row, status, { source: 'Roster Status' });
        scheduleDeathStarRebuild_();
        return;
    }
    seedPowerTrackerFromRoster_(roster, row);
    sortRosterByStatus_();
    const currentRow = findRosterRowById_(roster, id) || row;
    refreshRosterIndicatorForId_(id);
    normalizeManagedSheetVisibility_(roster);
    writeAuditLog_('ROSTER COMMIT', AMS.sheets.roster, `Player ID ${id}`, '', status, 'Status committed by leadership', '');
    scheduleDeathStarRebuild_();
}
function validateEditedRosterIds_(roster, firstRow, lastRow) {
    const rosterFirst = AMS.rows.rosterFirst;
    const idColumn = AMS.roster.col.id;
    const lastRosterRow = Math.max(roster.getLastRow(), rosterFirst);
    const idValues = roster
        .getRange(rosterFirst, idColumn, lastRosterRow - rosterFirst + 1, 1)
        .getValues();
    const idRows = new Map();
    idValues.forEach((record, index) => {
        const id = normalizeId_(record[0]);
        if (!id)
            return;
        if (!idRows.has(id)) {
            idRows.set(id, []);
        }
        idRows.get(id).push(rosterFirst + index);
    });
    const editedValues = roster
        .getRange(firstRow, 1, lastRow - firstRow + 1, 10)
        .getValues();
    let valid = true;
    editedValues.forEach((record, index) => {
        const row = firstRow + index;
        clearRosterRowValidationState_(roster, row);
        const hasAnyData = record.some(value => String(value || '').trim() !== '');
        if (!hasAnyData) {
            return;
        }
        const playerId = normalizeId_(record[idColumn - 1]);
        if (!playerId) {
            hardStopRosterRow_(roster, row, `MISSING ID — Roster row ${row} has data but no Player ID.`);
            valid = false;
            return;
        }
        if (!AMS.rosterValidation.validIdPattern.test(playerId)) {
            hardStopRosterRow_(roster, row, 'INVALID ID — Player ID must be exactly 9 digits.');
            valid = false;
            return;
        }
        const matchingRows = idRows.get(playerId) || [];
        if (matchingRows.length > 1) {
            const message = `DUPLICATE ID — Player ID appears on Roster rows ` +
                `${matchingRows.join(', ')}.`;
            matchingRows.forEach(matchRow => {
                hardStopRosterRow_(roster, matchRow, message);
            });
            valid = false;
        }
    });
    return {
        valid: valid
    };
}
function clearRosterRowValidationState_(roster, row) {
    const rowRange = roster.getRange(row, 1, 1, 10);
    const backgrounds = rowRange.getBackgrounds();
    let changed = false;
    for (let col = 0; col < backgrounds[0].length; col++) {
        if (String(backgrounds[0][col] || '').toUpperCase() ===
            String(AMS.colors.hardStop || '').toUpperCase()) {
            backgrounds[0][col] = null;
            changed = true;
        }
    }
    if (changed) {
        rowRange.setBackgrounds(backgrounds);
    }
    const idCell = roster.getRange(row, AMS.roster.col.id);
    const note = String(idCell.getNote() || '');
    const cleaned = stripAmsRosterValidationNote_(note);
    if (cleaned !== note) idCell.setNote(cleaned);
}
function validateRosterPlayerIds_(roster) {
    const lastRow = Math.max(roster.getLastRow(), AMS.rows.rosterFirst);
    const rowCount = lastRow - AMS.rows.rosterFirst + 1;
    const values = roster
        .getRange(AMS.rows.rosterFirst, 1, rowCount, 10)
        .getValues();
    const idRows = new Map();
    const invalidRows = [];
    const invalidReasons = new Map();
    values.forEach((record, index) => {
        const row = AMS.rows.rosterFirst + index;
        const hasAnyData = record.some(value => String(value || '').trim() !== '');
        const playerId = normalizeId_(record[AMS.roster.col.id - 1]);
        if (!hasAnyData)
            return;
        if (!playerId) {
            invalidRows.push(row);
            invalidReasons.set(row, `MISSING ID — Roster row ${row} has data but no Player ID.`);
            return;
        }
        if (!AMS.rosterValidation.validIdPattern.test(playerId)) {
            invalidRows.push(row);
            invalidReasons.set(row, 'INVALID ID — Player ID must be exactly 9 digits.');
            return;
        }
        if (!idRows.has(playerId)) {
            idRows.set(playerId, []);
        }
        idRows.get(playerId).push(row);
    });
    idRows.forEach(rows => {
        if (rows.length <= 1)
            return;
        rows.forEach(row => {
            if (!invalidRows.includes(row)) {
                invalidRows.push(row);
            }
            invalidReasons.set(row, `DUPLICATE ID — Player ID appears on Roster rows ${rows.join(', ')}.`);
        });
    });
    clearStaleRosterValidationState_(roster, lastRow);
    invalidRows.forEach(row => {
        const reason = invalidReasons.get(row) || 'Unsafe Player ID state.';
        hardStopRosterRow_(roster, row, reason);
    });
    let errorType = '';
    let details = '';
    if (invalidRows.length) {
        const duplicateExists = Array.from(invalidReasons.values())
            .some(reason => reason.startsWith('DUPLICATE ID'));
        errorType = duplicateExists ? 'DUPLICATE ID' : 'INVALID ID';
        details = Array.from(invalidReasons.values()).join(' | ');
    }
    return {
        valid: invalidRows.length === 0,
        invalidRows: invalidRows,
        errorType: errorType,
        details: details
    };
}
function stripAmsRosterValidationNote_(value) {
    const note = String(value || '');
    const marker = '\n\n--- AMS VALIDATION ---\n';
    const at = note.indexOf(marker);
    if (at >= 0) return note.slice(0, at).trim();
    if (/^(?:MISSING ID|INVALID ID|DUPLICATE ID|AMS HARD STOP)(?:\b|\s|—)/.test(note)) return '';
    return note;
}
function setAmsRosterValidationNote_(cell, message) {
    let human = stripAmsRosterValidationNote_(cell.getNote());
    const warningAt = human.indexOf('\n\n--- AMS WARNING ---\n');
    if (warningAt >= 0) human = human.slice(0, warningAt).trim();
    if (/^(?:BAN LIST IDENTITY MATCH|RETURNING MEMBER IDENTITY MATCH|ACTIVE BAN WARNING|NAP BAN|ALLIANCE BAN)/.test(human))
        human = '';
    cell.setNote(human ? `${human}\n\n--- AMS VALIDATION ---\n${message}` : message);
}
function hardStopRosterRow_(roster, row, message) {
    roster.getRange(row, 1, 1, 10).setBackground(AMS.colors.hardStop);
    setAmsRosterValidationNote_(roster.getRange(row, AMS.roster.col.id), message);
    roster.getRange(row, AMS.roster.col.indicator).clearContent();
}
function clearStaleRosterValidationState_(roster, lastRow) {
    if (lastRow < AMS.rows.rosterFirst)
        return;
    const count = lastRow - AMS.rows.rosterFirst + 1;
    const range = roster.getRange(AMS.rows.rosterFirst, 1, count, 10);
    const backgrounds = range.getBackgrounds();
    const idRange = roster.getRange(AMS.rows.rosterFirst, AMS.roster.col.id, count, 1);
    const ids = idRange.getValues();
    const notes = idRange.getNotes();
    let backgroundChanged = false;
    let notesChanged = false;
    for (let i = 0; i < backgrounds.length; i++) {
        const playerId = normalizeId_(ids[i][0]);
        const validId = AMS.rosterValidation.validIdPattern.test(playerId);
        if (validId) {
            for (let j = 0; j < backgrounds[i].length; j++) {
                if (String(backgrounds[i][j] || '').toUpperCase() === AMS.colors.hardStop.toUpperCase()) {
                    backgrounds[i][j] = null;
                    backgroundChanged = true;
                }
            }
        }
        const note = String(notes[i][0] || '');
        const cleaned = stripAmsRosterValidationNote_(note);
        if ((validId || !playerId) && cleaned !== note) {
            notes[i][0] = cleaned;
            notesChanged = true;
        }
    }
    if (backgroundChanged)
        range.setBackgrounds(backgrounds);
    if (notesChanged)
        idRange.setNotes(notes);
}
function writeRosterValidationMetadata_(roster, errorType, details) {
    const metadataCell = roster.getRange('L8');
    if (!errorType) {
        metadataCell
            .setValue('IDENTITY OK')
            .setBackground(AMS.colors.active)
            .clearNote();
        return;
    }
    metadataCell
        .setValue(errorType)
        .setBackground(AMS.colors.hardStop)
        .setNote(details || 'Roster contains an unsafe Player ID state.');
}
function getValidatedRosterMembers_(roster) {
    const validation = validateRosterPlayerIds_(roster);
    const invalid = new Set(validation.invalidRows);
    const lastRow = getLastRosterMemberRow_(roster);
    if (lastRow < AMS.rows.rosterFirst)
        return [];
    const values = roster
        .getRange(AMS.rows.rosterFirst, 1, lastRow - AMS.rows.rosterFirst + 1, 10)
        .getValues();
    const members = [];
    values.forEach((record, index) => {
        const row = AMS.rows.rosterFirst + index;
        const id = normalizeId_(record[AMS.roster.col.id - 1]);
        const status = String(record[AMS.roster.col.status - 1] || '').trim();
        // A valid ID is not a membership commit; PT/export observe only committed,
        // non-terminal members. Invalid ID quarantine is handled by validation.
        if (!AMS.validation.id.test(id) || invalid.has(row) || !status ||
            AMS.roster.terminalStatuses.includes(status))
            return;
        members.push({
            row: row,
            id: id,
            name: String(record[AMS.roster.col.name - 1] || '').trim(),
            alias: String(record[AMS.roster.col.alias - 1] || '').trim(),
            rank: String(record[AMS.roster.col.rank - 1] || '').trim(),
            furnace: record[AMS.roster.col.furnace - 1],
            power: record[AMS.roster.col.power - 1],
            alliance: String(record[AMS.roster.col.alliance - 1] || '').trim(),
            account: String(record[AMS.roster.col.account - 1] || '').trim(),
            status: String(record[AMS.roster.col.status - 1] || '').trim(),
            record: record
        });
    });
    return members;
}
function clearAmsIdentityWarningNote_(cell) {
    if (!cell)
        return;
    const note = String(cell.getNote() || '');
    if (!note)
        return;
    const standalonePrefixes = [
        'BAN LIST IDENTITY MATCH',
        'RETURNING MEMBER IDENTITY MATCH',
        'ACTIVE BAN WARNING',
        'NAP BAN',
        'ALLIANCE BAN'
    ];
    if (standalonePrefixes.some(prefix => note.startsWith(prefix))) {
        cell.clearNote();
        return;
    }
    const marker = '\n\n--- AMS WARNING ---\n';
    const markerIndex = note.indexOf(marker);
    if (markerIndex >= 0) {
        cell.setNote(note.slice(0, markerIndex).trim());
    }
}
function setAmsIdentityWarningNote_(cell, warningText) {
    if (!cell)
        return;
    clearAmsIdentityWarningNote_(cell);
    const existing = String(cell.getNote() || '').trim();
    const warning = String(warningText || '').trim();
    if (!warning)
        return;
    cell.setNote(existing
        ? `${existing}\n\n--- AMS WARNING ---\n${warning}`
        : warning);
}
function resolveBanIdentityMatch_(roster, row) {
    const banSheet = getAmsSpreadsheet_()
        .getSheetByName(AMS.sheets.banList);
    if (!banSheet || banSheet.getLastRow() < 2)
        return false;
    const playerId = normalizeId_(roster.getRange(row, AMS.roster.col.id).getValue());
    if (!playerId) {
        clearOwnedBanIdentityNote_(roster, row);
        return false;
    }
    const match = getActiveBanRecordById_(playerId);
    if (!match) {
        clearOwnedBanIdentityNote_(roster, row);
        return false;
    }
    const nameCell = roster.getRange(row, AMS.roster.col.name);
    const aliasCell = roster.getRange(row, AMS.roster.col.alias);
    const enteredName = String(nameCell.getDisplayValue() || '').trim();
    const canonicalName = String(match.name || '').trim();
    if (enteredName &&
        canonicalName &&
        enteredName.toLowerCase() !== canonicalName.toLowerCase()) {
        const mergedAliases = mergeAliasValues_(aliasCell.getDisplayValue(), enteredName, match.aliases);
        nameCell.setValue(canonicalName);
        aliasCell.setValue(mergedAliases);
        setAmsIdentityWarningNote_(nameCell, [
            'BAN LIST IDENTITY MATCH',
            `Entered name: ${enteredName}`,
            `Ban List name: ${canonicalName}`,
            'AMS matched the immutable Player ID and restored the known identity.'
        ].join('\n'));
        mergeAliasIntoBanRecord_(match.row, enteredName);
        persistDiscoveredAliasToHistory_(playerId, enteredName);
        appendLeadershipIdentityNote_(playerId, enteredName);
        writeAuditLog_('BAN IDENTITY MATCH', AMS.sheets.roster, `Row ${row}`, enteredName, canonicalName, `Player ID ${playerId}; attempted identity preserved as alias.`, '');
    }
    return true;
}
function clearOwnedBanIdentityNote_(roster, row) {
    const cell = roster.getRange(row, AMS.roster.col.name);
    const note = String(cell.getNote() || '');
    if (!note)
        return;
    if (note.startsWith('BAN LIST IDENTITY MATCH')) {
        cell.clearNote();
        return;
    }
    const marker = '\n\n--- AMS WARNING ---\n';
    const markerIndex = note.indexOf(marker);
    if (markerIndex < 0)
        return;
    const warning = note.slice(markerIndex + marker.length);
    if (warning.startsWith('BAN LIST IDENTITY MATCH')) {
        cell.setNote(note.slice(0, markerIndex).trim());
    }
}
function mergeAliasValues_() {
    const seen = new Set();
    const output = [];
    Array.from(arguments).forEach(value => {
        String(value || '')
            .split(',')
            .map(item => item.trim())
            .filter(Boolean)
            .forEach(item => {
            const key = item.toLowerCase();
            if (!seen.has(key)) {
                seen.add(key);
                output.push(item);
            }
        });
    });
    return output.join(', ');
}
function isBanCommand_(status) {
    return [
        'NAP Temp Ban',
        'NAP Permanent Ban',
        'Alliance Temp Ban',
        'Alliance Perm Ban'
    ].includes(String(status || '').trim());
}
function parseBanCommand_(status) {
    const value = String(status || '').trim();
    const type = value.startsWith('NAP') ? 'NAP' : 'Alliance';
    const duration = value.includes('Temp') ? 'Temporary' : 'Permanent';
    return {
        type: type,
        duration: duration
    };
}
function createBanFromRoster_(roster, row, command) {
    const parsed = parseBanCommand_(command);
    const playerId = normalizeId_(roster.getRange(row, AMS.roster.col.id).getValue());
    if (!playerId) {
        throw new Error('Cannot create Ban List record without a valid Player ID.');
    }
    const sheet = getOrCreateSheet_(AMS.sheets.banList, AMS.ban.headers);
    const values = roster.getRange(row, 1, 1, 10).getValues()[0];
    const existing = getBanRecordById_(playerId);
    const now = new Date();
    const record = [
        playerId,
        String(values[AMS.roster.col.name - 1] || '').trim(),
        String(values[AMS.roster.col.alias - 1] || '').trim(),
        now,
        parsed.type,
        parsed.duration,
        '',
        getIncidentNumbersForPlayer_(playerId),
        getEffectiveUser_(),
        '',
        AMS.ban.activeStatus
    ];
    let targetRow;
    if (existing) {
        targetRow = existing.row;
        const old = sheet.getRange(targetRow, 1, 1, 11).getValues()[0];
        record[2] = mergeAliasValues_(old[2], record[2]);
        if (String(old[10] || '').trim() === AMS.ban.activeStatus && old[3]) {
            record[3] = old[3];
        }
        record[7] = record[7] || old[7];
        record[9] = old[9] || '';
        sheet.getRange(targetRow, 1, 1, 11).setValues([record]);
    }
    else {
        targetRow = Math.max(sheet.getLastRow() + 1, 2);
        sheet.getRange(targetRow, 1, 1, 11).setValues([record]);
    }
    if (parsed.duration === 'Temporary') {
        sheet
            .getRange(targetRow, 7)
            .setNote('Temporary ban — leadership must enter the Ban Lift Date.');
    }
    sortBanList_();
    writeAuditLog_('BAN CREATED', AMS.sheets.banList, `Player ID ${playerId}`, '', command, `${parsed.type} ${parsed.duration} ban created from Roster Status.`, '');
}
function getBanRecordById_(playerId) {
    const sheet = getAmsSpreadsheet_()
        .getSheetByName(AMS.sheets.banList);
    if (!sheet || sheet.getLastRow() < 2)
        return null;
    const normalized = normalizeId_(playerId);
    if (!normalized)
        return null;
    const values = sheet
        .getRange(2, 1, sheet.getLastRow() - 1, 11)
        .getValues();
    for (let i = 0; i < values.length; i++) {
        if (normalizeId_(values[i][0]) === normalized) {
            return {
                row: i + 2,
                id: normalized,
                name: String(values[i][1] || '').trim(),
                aliases: String(values[i][2] || '').trim(),
                began: values[i][3],
                type: String(values[i][4] || '').trim(),
                duration: String(values[i][5] || '').trim(),
                liftDate: values[i][6],
                incident: String(values[i][7] || '').trim(),
                source: String(values[i][8] || '').trim(),
                reason: String(values[i][9] || '').trim(),
                status: String(values[i][10] || '').trim()
            };
        }
    }
    return null;
}
function isOperationalBanRecordValid_(record) {
    if (!record || !AMS.validation.id.test(normalizeId_(record.id)))
        return false;
    if (!AMS.ban.types.includes(record.type))
        return false;
    if (!AMS.ban.durations.includes(record.duration))
        return false;
    if (!AMS.ban.statuses.includes(record.status))
        return false;
    const began = record.began instanceof Date ? record.began : new Date(record.began);
    if (Number.isNaN(began.getTime()))
        return false;
    if (record.duration === 'Temporary') {
        const lift = record.liftDate instanceof Date ? record.liftDate : new Date(record.liftDate);
        if (Number.isNaN(lift.getTime()))
            return false;
    }
    return true;
}
function getActiveBanRecordById_(playerId) {
    const record = getBanRecordById_(playerId);
    if (!record || !isOperationalBanRecordValid_(record))
        return null;
    if (record.status !== AMS.ban.activeStatus)
        return null;
    return record;
}
function mergeAliasIntoBanRecord_(row, alias) {
    const sheet = getAmsSpreadsheet_()
        .getSheetByName(AMS.sheets.banList);
    if (!sheet || row < 2 || !alias)
        return;
    const cell = sheet.getRange(row, 3);
    const merged = mergeAliasValues_(cell.getDisplayValue(), alias);
    cell.setValue(merged);
}
function applyRosterBanAdvisory_(roster, row, interactive) {
    const playerId = normalizeId_(roster.getRange(row, AMS.roster.col.id).getValue());
    if (!playerId)
        return false;
    const ban = getActiveBanRecordById_(playerId);
    if (!ban)
        return false;
    roster
        .getRange(row, 1, 1, 10)
        .setBackground(AMS.colors.hardStop);
    const idCell = roster.getRange(row, AMS.roster.col.id);
    const warning = ban.type === 'NAP'
        ? [
            'NAP BAN',
            `${ban.duration} NAP ban is currently active for this Player ID.`,
            'State/NAP restriction: leadership must review Ban List / Player Notes before membership is allowed.'
        ].join('\n')
        : [
            'ALLIANCE BAN',
            `${ban.duration} Alliance ban is currently active for this Player ID.`,
            'Alliance restriction: leadership must review Ban List / Player Notes before membership is allowed.'
        ].join('\n');
    setAmsIdentityWarningNote_(idCell, warning);
    if (interactive) {
        SpreadsheetApp
            .getActiveSpreadsheet()
            .toast(`Active ${ban.type} ${ban.duration} ban found for Player ID ${playerId}.`, 'AMS BAN WARNING', 8);
    }
    return true;
}
function applyLinkedAccountAdvisory_(roster, row, interactive) {
    const playerId = normalizeId_(roster.getRange(row, AMS.roster.col.id).getValue());
    if (!playerId)
        return false;
    const linkedIds = getLinkedPlayerIds_(playerId);
    const bannedLinks = linkedIds.filter(id => getActiveBanRecordById_(id));
    if (!bannedLinks.length)
        return false;
    roster
        .getRange(row, 1, 1, 10)
        .setBackground(AMS.colors.advisory);
    if (interactive) {
        SpreadsheetApp
            .getActiveSpreadsheet()
            .toast(`Linked account warning: ${bannedLinks.join(', ')} has an active ban.`, 'AMS Advisory', 6);
    }
    return true;
}
function clearRosterAdvisoryPresentation_(roster, row) {
    const range = roster.getRange(row, 1, 1, 10);
    const backgrounds = range.getBackgrounds()[0];
    let changed = false;
    for (let i = 0; i < backgrounds.length; i++) {
        if (String(backgrounds[i] || '').toUpperCase() ===
            AMS.colors.advisory.toUpperCase()) {
            backgrounds[i] = null;
            changed = true;
        }
    }
    if (changed) {
        range.setBackgrounds([backgrounds]);
    }
    const idCell = roster.getRange(row, AMS.roster.col.id);
    const note = String(idCell.getNote() || '');
    if (note.startsWith('ACTIVE BAN WARNING')) {
        idCell.clearNote();
    }
}
function validateBanList_(sheet) {
    if (!sheet || sheet.getLastRow() < 2)
        return true;
    const count = sheet.getLastRow() - 1;
    const range = sheet.getRange(2, 1, count, 11);
    const values = range.getValues();
    const idCounts = new Map();
    values.forEach(row => {
        const id = normalizeId_(row[0]);
        if (id)
            idCounts.set(id, (idCounts.get(id) || 0) + 1);
    });
    let valid = true;
    values.forEach((row, index) => {
        const rowNumber = index + 2;
        const id = normalizeId_(row[0]);
        const type = String(row[4] || '').trim();
        const duration = String(row[5] || '').trim();
        const status = String(row[10] || '').trim();
        const began = row[3] instanceof Date ? row[3] : new Date(row[3]);
        const lift = row[6] instanceof Date ? row[6] : new Date(row[6]);
        const errors = [];
        if (!AMS.validation.id.test(id))
            errors.push('Player ID must be exactly 9 digits');
        if (id && idCounts.get(id) > 1)
            errors.push('duplicate current Ban List Player ID');
        if (!AMS.ban.types.includes(type))
            errors.push('Ban Type must be NAP or Alliance');
        if (!AMS.ban.durations.includes(duration))
            errors.push('duration must be Permanent or Temporary');
        if (!AMS.ban.statuses.includes(status))
            errors.push('Ban Status must be Active, Expired - Review Required, or Ban Lifted');
        if (Number.isNaN(began.getTime()))
            errors.push('Date Ban Began is invalid');
        if (duration === 'Temporary' && Number.isNaN(lift.getTime()))
            errors.push('Temporary ban requires a valid Ban Lift Date');
        if (duration === 'Permanent' && String(row[6] || '').trim() !== '')
            errors.push('Permanent ban must not have a Ban Lift Date');
        const rowRange = sheet.getRange(rowNumber, 1, 1, 11);
        const idCell = sheet.getRange(rowNumber, 1);
        const oldNote = String(idCell.getNote() || '');
        if (errors.length) {
            valid = false;
            rowRange.setBackground(AMS.colors.hardStop);
            idCell.setNote(`INVALID BAN RECORD — ${errors.join('; ')}. This row is excluded from active-ban enforcement until corrected.`);
        }
        else {
            if (oldNote.startsWith('INVALID BAN RECORD'))
                idCell.clearNote();
            const backgrounds = rowRange.getBackgrounds()[0].map(color => String(color || '').toUpperCase() === AMS.colors.hardStop.toUpperCase() ? null : color);
            rowRange.setBackgrounds([backgrounds]);
        }
    });
    return valid;
}
function handleBanListEdit_(e) {
    if (!e || !e.range)
        return;
    const sheet = e.range.getSheet();
    if (e.range.getRow() < 2)
        return;
    const firstRow = Math.max(2, e.range.getRow());
    const lastRow = Math.max(firstRow, e.range.getLastRow());
    const ids = sheet
        .getRange(firstRow, 1, lastRow - firstRow + 1, 1)
        .getValues()
        .map(record => record[0]);
    if (e.range.getColumn() === 11 &&
        e.range.getNumRows() === 1 &&
        e.range.getNumColumns() === 1 &&
        String(e.value || '').trim() === AMS.ban.liftedStatus &&
        String(e.oldValue || '').trim() !== AMS.ban.liftedStatus) {
        const playerId = normalizeId_(sheet.getRange(e.range.getRow(), 1).getValue());
        writeAuditLog_('BAN LIFTED', AMS.sheets.banList, `Player ID ${playerId}`, String(e.oldValue || ''), AMS.ban.liftedStatus, 'Human override from Ban List Status', '');
    }
    validateBanList_(sheet);
    refreshBanExpirationsUnlocked_();
    sortBanList_();
    refreshRosterIndicatorsForIds_(ids);
    normalizeManagedSheetVisibility_(sheet);
    scheduleDeathStarRebuild_();
}
function refreshBanExpirations_() {
    const lock = LockService.getDocumentLock();
    if (!lock.tryLock(30000)) {
        console.warn('Ban expiration refresh skipped because another document operation is active.');
        return;
    }
    try {
        refreshBanExpirationsUnlocked_();
    }
    finally {
        lock.releaseLock();
    }
}
function liftBanRow_(banSheet, row) {
    const record = banSheet
        .getRange(row, 1, 1, 11)
        .getValues()[0];
    const id = normalizeId_(record[0]);
    if (!id) {
        throw new Error('Selected row has no Player ID.');
    }
    const idCell = banSheet.getRange(row, 1);
    const existingCellNote = String(idCell.getNote() || '');
    let txMatch = existingCellNote.match(/AMS LIFT TX: ([^\n]+)/);
    const transactionKey = txMatch
        ? txMatch[1].trim()
        : `BANLIFT:${Utilities.getUuid()}`;
    if (!txMatch) {
        idCell.setNote([
            existingCellNote,
            `AMS LIFT TX: ${transactionKey}`
        ]
            .filter(Boolean)
            .join('\n'));
    }
    const now = new Date();
    const note = [
        `${record[4]} ${record[5]} ban began ${fmtDate_(record[3])}.`,
        `Scheduled lift: ${record[6] ? fmtDate_(record[6]) : 'N/A'}.`,
        `Ban lifted by ${getUser_()} on ${fmtDate_(now)}.`,
        record[7]
            ? `Related incident(s): ${record[7]}.`
            : ''
    ]
        .filter(Boolean)
        .join(' ');
    const created = ensureHistoryEvent_(id, record[1], `Ban Lifted - ${fmtDate_(now)}`, note, record[7], transactionKey);
    if (created) {
        appendLeadershipEventNote_(id, `Ban Lifted - ${fmtDate_(now)}`, note);
        writeAuditLog_('BAN LIFTED', AMS.sheets.banList, `Player ID ${id}`, `${record[4]} ${record[5]}`, AMS.ban.liftedStatus, note, '');
    }
    banSheet.getRange(row, 11).setValue(AMS.ban.liftedStatus);
    applyBanValidations_(banSheet);
    sortBanList_();
    refreshRosterIndicatorForId_(id);
    normalizeManagedSheetVisibility_(banSheet);
    scheduleDeathStarRebuild_();
}
function sortBanList_() {
    const b = getAmsSpreadsheet_().getSheetByName(AMS.sheets.banList);
    if (!b || b.getLastRow() < 2) {
        return;
    }
    const count = b.getLastRow() - 1;
    const rg = b.getRange(2, 1, count, 11);
    const values = rg.getValues();
    const notes = rg.getNotes();
    const contextLinks = b.getRange(2, 10, count, 1).getRichTextValues();
    const score = r => {
        if (String(r[10]) === AMS.ban.liftedStatus) {
            return 50;
        }
        const dur = String(r[5]);
        const type = String(r[4]);
        if (dur === 'Permanent' && type === 'NAP') {
            return 10;
        }
        if (dur === 'Permanent') {
            return 20;
        }
        if (dur === 'Temporary' && type === 'NAP') {
            return 30;
        }
        return 40;
    };
    const records = values.map((v, i) => ({ v, n: notes[i], link: contextLinks[i][0] }));
    records.sort((a, z) => score(a.v) - score(z.v) || (new Date(z.v[3] || 0) - new Date(a.v[3] || 0)));
    rg.setValues(records.map(x => x.v));
    rg.setNotes(records.map(x => x.n));
    // setValues() drops rich-text links. Restore the original incident link on
    // the SAME record after ordering, rather than assuming its old row number.
    const contextRange = b.getRange(2, 10, count, 1);
    records.forEach((record, index) => {
        if (record.link && record.link.getLinkUrl() &&
            record.link.getText() === String(record.v[9] ?? '')) {
            contextRange.getCell(index + 1, 1).setRichTextValue(record.link);
        }
    });
    validateBanList_(b);
}
function getLinkedPlayerIds_(playerId) {
    const sheet = getAmsSpreadsheet_().getSheetByName(AMS.sheets.accountLinks);
    if (!sheet || sheet.getLastRow() < 2)
        return [];
    const normalized = normalizeId_(playerId);
    if (!normalized)
        return [];
    const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, 6).getValues();
    const linked = new Set();
    values.forEach(record => {
        const left = normalizeId_(record[0]);
        const right = normalizeId_(record[3]);
        if (left === normalized && right)
            linked.add(right);
        if (right === normalized && left)
            linked.add(left);
    });
    return Array.from(linked);
}
const AMS_CONTEXT_INDICATOR_NOTE = 'Leadership context exists for this Player ID. Review Ban List, Incident Log, Departure Log, Player Identity and Player Notes as applicable.';
function playerHasLeadershipContext_(playerId, contextIds) {
    const id = normalizeId_(playerId);
    return AMS.validation.id.test(id) &&
        (contextIds || getLeadershipContextPlayerIds_()).has(id);
}
function refreshRosterIndicatorForId_(playerId, contextIds) {
    const id = normalizeId_(playerId);
    if (!AMS.validation.id.test(id)) return false;
    const roster = getAmsSpreadsheet_().getSheetByName(AMS.sheets.roster);
    if (!roster) return false;
    const row = findRosterRowById_(roster, id);
    if (!row) return false;
    const cell = roster.getRange(row, AMS.roster.col.indicator);
    if (playerHasLeadershipContext_(id, contextIds)) {
        cell.setValue('⚠').setNote(AMS_CONTEXT_INDICATOR_NOTE);
    } else {
        cell.clearContent().clearNote();
    }
    return true;
}
function refreshRosterIndicatorsForIds_(ids) {
    const seen = new Set();
    const contextIds = getLeadershipContextPlayerIds_();
    (ids || []).forEach(value => {
        const id = normalizeId_(value);
        if (!AMS.validation.id.test(id) || seen.has(id)) return;
        seen.add(id);
        refreshRosterIndicatorForId_(id, contextIds);
    });
}
function findFirstEmptyPowerTrackerRow_(pt) {
    if (!pt)
        return null;
    const firstRow = AMS.rows.powerFirst;
    const lastRow = Math.max(pt.getMaxRows(), firstRow);
    const rowCount = lastRow - firstRow + 1;
    const values = pt
        .getRange(firstRow, 1, rowCount, 10)
        .getValues();
    const payloadIndexes = [
        0, 1, 2, 3,
        6, 7, 8, 9
    ];
    for (let i = 0; i < values.length; i++) {
        const empty = payloadIndexes.every(index => String(values[i][index] ?? '').trim() === '');
        if (empty) {
            return firstRow + i;
        }
    }
    return null;
}
function syncPowerTrackerRowsToRoster_(pt, firstRow, lastRow) {
    const roster = getAmsSpreadsheet_()
        .getSheetByName(AMS.sheets.roster);
    if (!pt || !roster)
        return;
    const start = Math.max(AMS.rows.powerFirst, Number(firstRow) || AMS.rows.powerFirst);
    const end = Math.max(start, Number(lastRow) || start);
    const values = pt
        .getRange(start, 1, end - start + 1, 10)
        .getValues();
    let changed = false;
    const furnaceRowsChanged = [];
    values.forEach(record => {
        const id = normalizeId_(record[1]);
        if (!AMS.validation.id.test(id)) {
            return;
        }
        const rosterRow = findRosterRowById_(roster, id);
        if (!rosterRow) {
            return;
        }
        const power = record[3] !== ''
            ? record[3]
            : record[2];
        const furnaceRaw = record[7] !== ''
            ? record[7]
            : record[6];
        const furnace = normalizeFurnaceValue_(furnaceRaw) || furnaceRaw;
        if (furnace !== '') {
            roster
                .getRange(rosterRow, AMS.roster.col.furnace)
                .setValue(furnace);
            furnaceRowsChanged.push(rosterRow);
            changed = true;
        }
        if (power !== '') {
            roster
                .getRange(rosterRow, AMS.roster.col.power)
                .setValue(power);
            changed = true;
        }
    });
    if (furnaceRowsChanged.length) {
        const firstChangedRow = Math.min(...furnaceRowsChanged);
        const lastChangedRow = Math.max(...furnaceRowsChanged);
        applyRosterFurnacePresentationForRows_(roster, firstChangedRow, lastChangedRow);
    }
    if (changed) {
        touchRosterUpdated_(roster);
    }
}
function refreshRosterIndicators_() {
    const ss = getAmsSpreadsheet_();
    const roster = ss.getSheetByName(AMS.sheets.roster);
    if (!roster)
        return;
    const members = getValidatedRosterMembers_(roster);
    const firstRow = AMS.rows.rosterFirst;
    const lastRow = Math.max(firstRow, getLastRosterMemberRow_(roster));
    const rowCount = lastRow - firstRow + 1;
    const leadershipIds = getLeadershipContextPlayerIds_();
    const memberByRow = new Map(members.map(member => [member.row, member]));
    const range = roster.getRange(firstRow, AMS.roster.col.indicator, rowCount, 1);
    const values = range.getValues();
    const notes = range.getNotes();
    let changed = false;
    for (let i = 0; i < rowCount; i++) {
        const member = memberByRow.get(firstRow + i);
        const hasContext = member && leadershipIds.has(member.id);
        const nextValue = hasContext ? '⚠' : '';
        const nextNote = hasContext ? AMS_CONTEXT_INDICATOR_NOTE : '';
        if (values[i][0] !== nextValue) {
            values[i][0] = nextValue;
            changed = true;
        }
        if (String(notes[i][0] || '') !== nextNote) {
            notes[i][0] = nextNote;
            changed = true;
        }
    }
    if (changed) {
        range.setValues(values);
        range.setNotes(notes);
    }
}
function getLeadershipContextPlayerIds_() {
    const ss = getAmsSpreadsheet_();
    const ids = new Set();
    const add = value => {
        const id = normalizeId_(value);
        if (AMS.validation.id.test(id)) ids.add(id);
    };
    const notes = ss.getSheetByName(AMS.sheets.leadershipNotes);
    if (notes && notes.getLastRow() >= 2) {
        const count = notes.getLastRow() - 1;
        const values = notes.getRange(2, 1, count, 4).getValues();
        const cellNotes = notes.getRange(2, 4, count, 1).getNotes();
        values.forEach((record, index) => {
            if (String(record[3] || '').trim() || String(cellNotes[index][0] || '').trim())
                add(record[1]);
        });
    }
    const bans = ss.getSheetByName(AMS.sheets.banList);
    if (bans && bans.getLastRow() >= 2)
        bans.getRange(2, 1, bans.getLastRow() - 1, 11).getValues().forEach(record => {
            if (String(record[10] || '').trim() === AMS.ban.activeStatus) add(record[0]);
        });
    const incidents = ss.getSheetByName(AMS.sheets.incidentLog);
    if (incidents && incidents.getLastRow() >= 2)
        incidents.getRange(2, 1, incidents.getLastRow() - 1, 3).getValues().forEach(record => {
            if (String(record[0] || '').trim()) add(record[2]);
        });
    const departures = ss.getSheetByName(AMS.sheets.memberHistory);
    if (departures && departures.getLastRow() >= 2)
        departures.getRange(2, 2, departures.getLastRow() - 1, 1).getValues()
            .forEach(record => add(record[0]));
    const links = ss.getSheetByName(AMS.sheets.accountLinks);
    if (links && links.getLastRow() >= 2)
        links.getRange(2, 1, links.getLastRow() - 1, 4).getValues().forEach(record => {
            const left = normalizeId_(record[0]);
            const right = normalizeId_(record[3]);
            if (AMS.validation.id.test(left) && AMS.validation.id.test(right) && left !== right) {
                add(left);
                add(right);
            }
        });
    return ids;
}
function refreshLeadershipNotes_(identityContext) {
    const ss = getAmsSpreadsheet_();
    const sheet = getOrCreateSheet_(AMS.sheets.leadershipNotes, AMS.leadershipNotes.headers);
    const roster = ss.getSheetByName(AMS.sheets.roster);
    const manual = new Map();
    if (sheet.getLastRow() >= 2) {
        const count = sheet.getLastRow() - 1;
        const values = sheet.getRange(2, 1, count, 4).getValues();
        const cellNotes = sheet.getRange(2, 4, count, 1).getNotes();
        values.forEach((record, index) => {
            const id = normalizeId_(record[1]);
            if (!AMS.validation.id.test(id))
                return;
            const value = String(record[3] || '');
            const note = String(cellNotes[index][0] || '');
            if (value || note)
                manual.set(id, { value, note });
        });
    }
    const live = new Map();
    if (roster)
        getValidatedRosterMembers_(roster).forEach(member => live.set(member.id, member));
    const ids = new Set(manual.keys());
    const rows = Array.from(ids).map(id => {
        const member = live.get(id);
        const saved = manual.get(id) || { value: '', note: '' };
        const name = member
            ? member.name
            : (identityContext
                ? getLatestKnownIdentityNameFromContext_(identityContext, id)
                : getLatestKnownIdentityName_(id));
        return {
            values: [name || '', id, member ? member.status : '', saved.value],
            note: saved.note
        };
    }).sort((a, b) => String(a.values[0] || '').localeCompare(String(b.values[0] || '')));
    sheet.getRange(1, 1, 1, 4).setValues([AMS.leadershipNotes.headers]).setFontWeight('bold');
    const oldRows = Math.max(0, sheet.getLastRow() - 1);
    const clearRows = Math.max(oldRows, rows.length);
    if (clearRows > 0) {
        sheet.getRange(2, 1, clearRows, 4).clearContent();
        sheet.getRange(2, 4, clearRows, 1).clearNote();
    }
    if (rows.length) {
        sheet.getRange(2, 1, rows.length, 4).setValues(rows.map(record => record.values));
        sheet.getRange(2, 4, rows.length, 1).setNotes(rows.map(record => [record.note]));
    }
    sheet.setFrozenRows(1);
    normalizeManagedSheetVisibility_(sheet);
}
function buildLeadershipPlayerIndex_(existingContext) {
    const players = new Map();
    const roster = getAmsSpreadsheet_().getSheetByName(AMS.sheets.roster);
    if (!roster)
        return players;
    getValidatedRosterMembers_(roster).forEach(member => {
        players.set(member.id, {
            id: member.id,
            name: member.name || '',
            aliases: getKnownAliasesForId_(member.id),
            links: getLinkedPlayerIds_(member.id),
            incidents: [],
            status: member.status || ''
        });
    });
    return players;
}
function setIncidentLinks_(cell, incidentText) {
    const incidents = String(incidentText || '')
        .split(',')
        .map(value => value.trim())
        .filter(Boolean);
    if (!incidents.length) {
        cell.clearContent();
        return;
    }
    const ss = getAmsSpreadsheet_();
    const incidentSheet = ss.getSheetByName(AMS.sheets.incidentLog);
    const display = incidents.join(', ');
    const rich = SpreadsheetApp.newRichTextValue().setText(display);
    let cursor = 0;
    incidents.forEach(incident => {
        const start = display.indexOf(incident, cursor);
        const end = start + incident.length;
        const row = findIncidentRow_(incidentSheet, incident);
        if (row) {
            const url = `${ss.getUrl()}#gid=${incidentSheet.getSheetId()}&range=A${row}`;
            rich.setLinkUrl(start, end, url);
        }
        cursor = end;
    });
    cell.setRichTextValue(rich.build());
}
function findIncidentRow_(sheet, incidentNumber) {
    if (!sheet || sheet.getLastRow() < 2)
        return null;
    const values = sheet
        .getRange(2, 1, sheet.getLastRow() - 1, 1)
        .getDisplayValues();
    for (let i = 0; i < values.length; i++) {
        if (String(values[i][0] || '').trim() === incidentNumber) {
            return i + 2;
        }
    }
    return null;
}
function appendLeadershipIdentityNote_(playerId, alias) {
    recordIdentityObservation_(playerId, alias, 'AMS Identity Match');
}
function appendLeadershipEventNote_(playerId, event, note) {
    return false;
}
function persistDiscoveredAliasToHistory_(playerId, alias) {
    return recordIdentityObservation_(playerId, alias, 'AMS Identity Match');
}
function ensureIdentityDataSheet_() {
    const ss = getAmsSpreadsheet_();
    let sheet = ss.getSheetByName(AMS.sheets.identityData);
    if (!sheet)
        sheet = ss.insertSheet(AMS.sheets.identityData);
    ensureSheetSize_(sheet, 50, 8);
    sheet.getRange(1, 1, 1, 8).setValues([AMS.identityData.headers]).setFontWeight('bold');
    if (!sheet.isSheetHidden())
        sheet.hideSheet();
    return sheet;
}
function buildIdentityContext_(sheet) {
    const identitySheet = sheet || ensureIdentityDataSheet_();
    const lastRow = identitySheet.getLastRow();
    const records = lastRow >= 2
        ? identitySheet.getRange(2, 1, lastRow - 1, 8).getValues()
        : [];
    const byId = new Map();
    records.forEach(record => {
        const id = normalizeId_(record[0]);
        if (!AMS.validation.id.test(id))
            return;
        if (!byId.has(id))
            byId.set(id, []);
        byId.get(id).push(record);
    });
    return {
        sheet: identitySheet,
        records: records,
        byId: byId,
        originalRowCount: records.length,
        dirty: false,
        effectiveUser: null,
        rosterMembers: null,
        rosterById: null
    };
}
function getIdentityContextUser_(context) {
    if (!context.effectiveUser) {
        context.effectiveUser = getEffectiveUser_();
    }
    return context.effectiveUser;
}
function observeIdentityInContext_(context, playerId, name, source, observedAt) {
    const id = normalizeId_(playerId);
    const knownName = String(name || '').trim();
    if (!context || !AMS.validation.id.test(id) || !knownName)
        return false;
    const now = observedAt instanceof Date ? observedAt : new Date();
    const src = String(source || 'AMS').trim();
    const records = context.byId.get(id) || [];
    const nameKey = knownName.toLowerCase();
    let firstKnownExists = false;
    let match = null;
    records.forEach(record => {
        if (record[4] === true || String(record[4]).toUpperCase() === 'TRUE') {
            firstKnownExists = true;
        }
        if (String(record[1] || '').trim().toLowerCase() === nameKey) {
            match = record;
        }
    });
    if (match) {
        match[3] = now;
        match[6] = src;
        if (!match[7])
            match[7] = getIdentityContextUser_(context);
    }
    else {
        const record = [
            id,
            knownName,
            now,
            now,
            !firstKnownExists,
            src,
            src,
            getIdentityContextUser_(context)
        ];
        context.records.push(record);
        records.push(record);
        context.byId.set(id, records);
    }
    context.dirty = true;
    return true;
}
function flushIdentityContext_(context) {
    if (!context || !context.dirty)
        return false;
    const writeRowCount = Math.max(context.originalRowCount, context.records.length);
    if (writeRowCount > 0) {
        ensureSheetSize_(context.sheet, writeRowCount + 1, 8);
        const output = [];
        for (let i = 0; i < writeRowCount; i++) {
            output.push(i < context.records.length
                ? context.records[i]
                : ['', '', '', '', '', '', '', '']);
        }
        context.sheet.getRange(2, 1, writeRowCount, 8).setValues(output);
    }
    context.originalRowCount = context.records.length;
    context.dirty = false;
    return true;
}
function getIdentityRecordsFromContext_(context, playerId) {
    const id = normalizeId_(playerId);
    if (!context || !AMS.validation.id.test(id))
        return [];
    return (context.byId.get(id) || []).slice();
}
function getLatestKnownIdentityNameFromContext_(context, playerId) {
    const records = getIdentityRecordsFromContext_(context, playerId);
    if (!records.length)
        return '';
    records.sort((a, b) => new Date(a[3] || a[2] || 0) - new Date(b[3] || b[2] || 0));
    return String(records[records.length - 1][1] || '').trim();
}
function getFirstKnownIdentityNameFromContext_(context, playerId) {
    const records = getIdentityRecordsFromContext_(context, playerId);
    const first = records.find(record => record[4] === true || String(record[4]).toUpperCase() === 'TRUE');
    return String((first || records[0] || [])[1] || '').trim();
}
function getKnownAliasesFromContext_(context, playerId, currentName) {
    const current = String(currentName || '').trim().toLowerCase();
    const names = getIdentityRecordsFromContext_(context, playerId)
        .sort((a, b) => new Date(b[3] || b[2] || 0) - new Date(a[3] || a[2] || 0))
        .map(record => String(record[1] || '').trim())
        .filter(Boolean);
    const seen = new Set();
    return names.filter(name => {
        const key = name.toLowerCase();
        if (key === current || seen.has(key))
            return false;
        seen.add(key);
        return true;
    });
}
function recordIdentityObservation_(playerId, name, source) {
    const id = normalizeId_(playerId);
    const knownName = String(name || '').trim();
    if (!AMS.validation.id.test(id) || !knownName)
        return false;
    const context = buildIdentityContext_();
    const changed = observeIdentityInContext_(context, id, knownName, source);
    if (changed)
        flushIdentityContext_(context);
    return changed;
}
function getIdentityRecordsForId_(playerId) {
    return getIdentityRecordsFromContext_(buildIdentityContext_(), playerId);
}
function getLatestKnownIdentityName_(playerId) {
    return getLatestKnownIdentityNameFromContext_(buildIdentityContext_(), playerId);
}
function getFirstKnownIdentityName_(playerId) {
    return getFirstKnownIdentityNameFromContext_(buildIdentityContext_(), playerId);
}
function getKnownAliasesForId_(playerId, currentName) {
    return getKnownAliasesFromContext_(buildIdentityContext_(), playerId, currentName);
}
function observeCurrentIdentitySources_(existingContext) {
    const ss = getAmsSpreadsheet_();
    const context = existingContext || buildIdentityContext_();
    const observedAt = new Date();
    const roster = ss.getSheetByName(AMS.sheets.roster);
    if (roster) {
        const members = getValidatedRosterMembers_(roster);
        const rosterById = new Map();
        const aliasValues = [];
        let aliasChanged = false;
        members.forEach(member => {
            rosterById.set(member.id, member);
            observeIdentityInContext_(context, member.id, member.name, 'Roster', observedAt);
        });
        members.forEach(member => {
            const firstKnown = getFirstKnownIdentityNameFromContext_(context, member.id);
            let alias = member.alias;
            if (!alias &&
                firstKnown &&
                member.name &&
                firstKnown.toLowerCase() !== String(member.name).toLowerCase()) {
                alias = firstKnown;
                aliasChanged = true;
            }
            aliasValues.push([alias || '']);
        });
        if (aliasChanged && members.length) {
            const firstRow = members[0].row;
            const lastRow = members[members.length - 1].row;
            const rowCount = lastRow - firstRow + 1;
            const currentAliases = roster
                .getRange(firstRow, AMS.roster.col.alias, rowCount, 1)
                .getValues();
            members.forEach((member, index) => {
                currentAliases[member.row - firstRow][0] = aliasValues[index][0];
            });
            roster
                .getRange(firstRow, AMS.roster.col.alias, rowCount, 1)
                .setValues(currentAliases);
        }
        context.rosterMembers = members;
        context.rosterById = rosterById;
    }
    else {
        context.rosterMembers = [];
        context.rosterById = new Map();
    }
    const history = ss.getSheetByName(AMS.sheets.memberHistory);
    if (history && history.getLastRow() >= 2) {
        const historyValues = history
            .getRange(2, 1, history.getLastRow() - 1, 2)
            .getValues();
        historyValues.forEach(record => observeIdentityInContext_(context, record[1], record[0], 'Departure Log', observedAt));
    }
    const bans = ss.getSheetByName(AMS.sheets.banList);
    if (bans && bans.getLastRow() >= 2) {
        const banValues = bans
            .getRange(2, 1, bans.getLastRow() - 1, 2)
            .getValues();
        banValues.forEach(record => observeIdentityInContext_(context, record[0], record[1], 'Ban List', observedAt));
    }
    flushIdentityContext_(context);
    return context;
}
function refreshPlayerIdentity_() {
    const ss = getAmsSpreadsheet_();
    const sheet = ss.getSheetByName(AMS.sheets.accountLinks);
    if (!sheet)
        return null;
    const context = observeCurrentIdentitySources_(buildIdentityContext_());
    const existingRowCount = Math.max(0, sheet.getLastRow() - 1);
    const existing = existingRowCount
        ? sheet.getRange(2, 1, existingRowCount, 9).getValues()
        : [];
    const existingNotes = existingRowCount
        ? sheet.getRange(2, 1, existingRowCount, 1).getNotes()
        : [];
    const manualRows = existing.filter(record => AMS.validation.id.test(normalizeId_(record[0])) &&
        AMS.validation.id.test(normalizeId_(record[3])));
    const placeholderById = new Map();
    existing.forEach(record => {
        const id = normalizeId_(record[0]);
        const linkedId = normalizeId_(record[3]);
        const type = String(record[5] || '').trim();
        if (AMS.validation.id.test(id) &&
            !linkedId &&
            ['Farm', 'Secondary'].includes(type) &&
            !placeholderById.has(id)) {
            placeholderById.set(id, record);
        }
    });
    const humanNoteByKey = new Map();
    existing.forEach((record, index) => {
        const note = String((existingNotes[index] && existingNotes[index][0]) || '');
        if (!note || isAmsPlayerIdentityNote_(note))
            return;
        const key = playerIdentityRecordKey_(record[0], record[3]);
        if (key && !humanNoteByKey.has(key))
            humanNoteByKey.set(key, note);
    });
    const rosterById = context.rosterById || new Map();
    const representedIds = new Set();
    const rows = [];
    const rowNotes = [];
    manualRows.forEach(record => {
        const id = normalizeId_(record[0]);
        const linkedId = normalizeId_(record[3]);
        representedIds.add(id);
        representedIds.add(linkedId);
        const member = rosterById.get(id);
        const currentName = member && member.name
            ? member.name
            : getLatestKnownIdentityNameFromContext_(context, id);
        const aliases = getKnownAliasesFromContext_(context, id, currentName).join(', ');
        const outputRecord = [
            id,
            currentName,
            aliases,
            linkedId,
            getLatestKnownIdentityNameFromContext_(context, linkedId) || String(record[4] || '').trim(),
            String(record[5] || '').trim(),
            String(record[6] || '').trim(),
            record[7] || '',
            String(record[8] || '').trim()
        ];
        rows.push(outputRecord);
        rowNotes.push([humanNoteByKey.get(playerIdentityRecordKey_(id, linkedId)) || '']);
    });
    (context.rosterMembers || []).forEach(member => {
        if (!['Farm Account', 'Secondary Account'].includes(member.account))
            return;
        if (representedIds.has(member.id))
            return;
        const preserved = placeholderById.get(member.id);
        const linkedType = member.account === 'Farm Account' ? 'Farm' : 'Secondary';
        const currentName = member.name || getLatestKnownIdentityNameFromContext_(context, member.id);
        const aliases = getKnownAliasesFromContext_(context, member.id, currentName).join(', ');
        const outputRecord = [
            member.id,
            currentName,
            aliases,
            '',
            '',
            linkedType,
            preserved ? String(preserved[6] || '').trim() : getEffectiveUser_(),
            preserved && preserved[7] ? preserved[7] : new Date(),
            preserved && String(preserved[8] || '').trim()
                ? String(preserved[8] || '').trim()
                : `AMS placeholder created from Roster Account Type: ${member.account}.`
        ];
        rows.push(outputRecord);
        rowNotes.push([buildAccountLinkPlaceholderNote_(member.account)]);
        representedIds.add(member.id);
    });
    rows.sort((a, b) => {
        const left = normalizeId_(a[0]).localeCompare(normalizeId_(b[0]));
        if (left)
            return left;
        return normalizeId_(a[3]).localeCompare(normalizeId_(b[3]));
    });
    const finalNotes = rows.map(record => {
        const id = normalizeId_(record[0]);
        const linkedId = normalizeId_(record[3]);
        const type = String(record[5] || '').trim();
        if (!linkedId && ['Farm', 'Secondary'].includes(type)) {
            return [buildAccountLinkPlaceholderNote_(type === 'Farm' ? 'Farm Account' : 'Secondary Account')];
        }
        return [humanNoteByKey.get(playerIdentityRecordKey_(id, linkedId)) || ''];
    });
    sheet.getRange(1, 1, 1, 9).setValues([AMS.accountLinks.headers]).setFontWeight('bold');
    const writeRows = Math.max(existingRowCount, rows.length);
    if (writeRows > 0) {
        ensureSheetSize_(sheet, writeRows + 1, 9);
        const output = [];
        const notesOutput = [];
        for (let i = 0; i < writeRows; i++) {
            output.push(i < rows.length ? rows[i] : ['', '', '', '', '', '', '', '', '']);
            notesOutput.push(i < finalNotes.length ? finalNotes[i] : ['']);
        }
        sheet.getRange(2, 1, writeRows, 9).setValues(output);
        sheet.getRange(2, 1, writeRows, 1).setNotes(notesOutput);
    }
    validateAccountLinks_(sheet);
    normalizeManagedSheetVisibility_(sheet);
    return context;
}
function playerIdentityRecordKey_(playerId, linkedPlayerId) {
    const left = normalizeId_(playerId);
    if (!left)
        return '';
    return `${left}|${normalizeId_(linkedPlayerId)}`;
}
function isAmsPlayerIdentityNote_(note) {
    const text = String(note || '').trim();
    return text.startsWith('AMS ACCOUNT LINK PLACEHOLDER') ||
        text.startsWith('AMS PLAYER IDENTITY ERROR');
}
function buildAccountLinkPlaceholderNote_(accountType) {
    return [
        'AMS ACCOUNT LINK PLACEHOLDER',
        `Roster Account Type: ${accountType}`,
        'Add the related Player ID and relationship when known.'
    ].join('\n');
}
function restoreReturningMemberFromHistory_(roster, row) {
    const ss = getAmsSpreadsheet_();
    const history = ss.getSheetByName(AMS.sheets.memberHistory);
    const playerId = normalizeId_(roster.getRange(row, AMS.roster.col.id).getValue());
    if (!AMS.validation.id.test(playerId))
        return false;
    const nameCell = roster.getRange(row, AMS.roster.col.name);
    const aliasCell = roster.getRange(row, AMS.roster.col.alias);
    const accountCell = roster.getRange(row, AMS.roster.col.account);
    const currentName = String(nameCell.getDisplayValue() || '').trim();
    if (currentName)
        recordIdentityObservation_(playerId, currentName, 'Roster');
    let newest = null;
    if (history && history.getLastRow() >= 2) {
        const matches = history.getRange(2, 1, history.getLastRow() - 1, 9).getValues()
            .filter(record => normalizeId_(record[1]) === playerId);
        if (matches.length)
            newest = matches[matches.length - 1];
    }
    const latestKnown = getLatestKnownIdentityName_(playerId) || (newest ? String(newest[0] || '').trim() : '');
    const firstKnown = getFirstKnownIdentityName_(playerId);
    if (!currentName && latestKnown)
        nameCell.setValue(latestKnown);
    const effectiveCurrent = String(nameCell.getDisplayValue() || latestKnown || '').trim();
    if (!String(aliasCell.getDisplayValue() || '').trim() && firstKnown && firstKnown.toLowerCase() !== effectiveCurrent.toLowerCase()) {
        aliasCell.setValue(firstKnown);
    }
    const aliases = getKnownAliasesForId_(playerId, effectiveCurrent);
    const hasHistory = !!newest || aliases.length > 0;
    if (!hasHistory)
        return false;
    roster.getRange(row, 1, 1, 10).setBackground(AMS.colors.advisory);
    setAmsIdentityWarningNote_(nameCell, [
        'RETURNING MEMBER IDENTITY MATCH',
        `Player ID ${playerId} has prior AMS identity/history.`,
        aliases.length ? `Known prior name(s): ${aliases.join(', ')}` : 'Prior departure/history record found.',
        'Current Roster name was preserved; review identity context if needed.'
    ].join('\n'));
    if (!String(accountCell.getDisplayValue() || '').trim() && newest && newest[5])
        accountCell.setValue(newest[5]);
    return true;
}
function ensureAccountLinkPlaceholder_(roster, row) {
    const playerId = normalizeId_(roster.getRange(row, AMS.roster.col.id).getValue());
    const accountType = String(roster.getRange(row, AMS.roster.col.account).getValue() || '').trim();
    if (!AMS.validation.id.test(playerId))
        return false;
    if (!['Secondary Account', 'Farm Account'].includes(accountType))
        return false;
    const sheet = getAmsSpreadsheet_().getSheetByName(AMS.sheets.accountLinks);
    if (!sheet)
        return false;
    if (sheet.getLastRow() >= 2) {
        const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, 4).getValues();
        if (values.some(record => normalizeId_(record[0]) === playerId || normalizeId_(record[3]) === playerId))
            return false;
    }
    const name = String(roster.getRange(row, AMS.roster.col.name).getDisplayValue() || '').trim();
    if (name)
        recordIdentityObservation_(playerId, name, 'Roster');
    const nextRow = Math.max(sheet.getLastRow() + 1, 2);
    const linkedType = accountType === 'Farm Account' ? 'Farm' : 'Secondary';
    sheet.getRange(nextRow, 1, 1, 9).setValues([[
            playerId, name, getKnownAliasesForId_(playerId, name).join(', '), '', '', linkedType,
            getEffectiveUser_(), new Date(), `AMS placeholder created from Roster Account Type: ${accountType}.`
        ]]);
    sheet.getRange(nextRow, 1).setNote(buildAccountLinkPlaceholderNote_(accountType));
    validateAccountLinks_(sheet);
    normalizeManagedSheetVisibility_(sheet);
    return true;
}
function seedPowerTrackerFromRoster_(roster, row) {
    const ss = getAmsSpreadsheet_();
    const pt = ss.getSheetByName(AMS.sheets.powerTracker);
    if (!pt)
        return;
    const playerId = normalizeId_(roster
        .getRange(row, AMS.roster.col.id)
        .getValue());
    if (!playerId)
        return;
    const playerName = String(roster
        .getRange(row, AMS.roster.col.name)
        .getValue() || '').trim();
    let ptRow = findPowerTrackerRowById_(pt, playerId);
    if (!ptRow) {
        ptRow = findFirstEmptyPowerTrackerRow_(pt);
        if (!ptRow) {
            const oldMaxRows = pt.getMaxRows();
            pt.insertRowsAfter(oldMaxRows, 1);
            extendAmsAestheticsAfterGrowth_(pt, oldMaxRows);
            ptRow = oldMaxRows + 1;
            if (ptRow > AMS.rows.powerFirst) {
                const formulas = pt
                    .getRange(ptRow - 1, 5, 1, 2)
                    .getFormulasR1C1();
                if (formulas[0].some(formula => String(formula || '').trim() !== '')) {
                    pt
                        .getRange(ptRow, 5, 1, 2)
                        .setFormulasR1C1(formulas);
                }
            }
        }
        pt
            .getRange(ptRow, 1, 1, 2)
            .setValues([[
                playerName,
                playerId
            ]]);
    }
    else {
        pt
            .getRange(ptRow, 1, 1, 2)
            .setValues([[
                playerName,
                playerId
            ]]);
    }
    const rosterPower = roster
        .getRange(row, AMS.roster.col.power)
        .getValue();
    const rosterFurnaceRaw = roster
        .getRange(row, AMS.roster.col.furnace)
        .getValue();
    const rosterFurnace = normalizeFurnaceValue_(rosterFurnaceRaw) || rosterFurnaceRaw;
    const beginningPower = pt.getRange(ptRow, 3);
    const endingPower = pt.getRange(ptRow, 4);
    const furnaceStarting = pt.getRange(ptRow, 7);
    const furnaceEnding = pt.getRange(ptRow, 8);
    let seededWeeklyData = false;
    if (!beginningPower.getValue() &&
        !endingPower.getValue() &&
        rosterPower !== '') {
        beginningPower.setValue(rosterPower);
        seededWeeklyData = true;
        writeAuditLog_('PT SEED', AMS.sheets.powerTracker, `Player ID ${playerId}`, '', rosterPower, 'Beginning Power seeded from committed Roster record.', '');
    }
    if (!furnaceStarting.getValue() &&
        !furnaceEnding.getValue() &&
        rosterFurnace !== '') {
        furnaceStarting.setValue(rosterFurnace);
        seededWeeklyData = true;
        writeAuditLog_('PT SEED', AMS.sheets.powerTracker, `Player ID ${playerId}`, '', rosterFurnace, 'Furnace Starting seeded from committed Roster record.', '');
    }
    if (seededWeeklyData) {
        stampPowerTrackerLastUpdated_(pt, ptRow);
    }
    normalizeManagedSheetVisibility_(pt);
}
function findPowerTrackerRowById_(pt, playerId) {
    if (!pt || pt.getLastRow() < AMS.rows.powerFirst)
        return null;
    const values = pt
        .getRange(AMS.rows.powerFirst, 2, pt.getLastRow() - AMS.rows.powerFirst + 1, 1)
        .getValues();
    for (let i = 0; i < values.length; i++) {
        if (normalizeId_(values[i][0]) === playerId) {
            return AMS.rows.powerFirst + i;
        }
    }
    return null;
}
function getActiveOperationalBanIds_() {
    const ss = getAmsSpreadsheet_();
    const bans = ss.getSheetByName(AMS.sheets.banList);
    const ids = new Set();
    if (!bans || bans.getLastRow() < 2) {
        return ids;
    }
    bans
        .getRange(2, 1, bans.getLastRow() - 1, 11)
        .getValues()
        .forEach(record => {
        const candidate = {
            id: normalizeId_(record[0]),
            name: String(record[1] || '').trim(),
            aliases: String(record[2] || '').trim(),
            began: record[3],
            type: String(record[4] || '').trim(),
            duration: String(record[5] || '').trim(),
            liftDate: record[6],
            incident: String(record[7] || '').trim(),
            source: String(record[8] || '').trim(),
            reason: String(record[9] || '').trim(),
            status: String(record[10] || '').trim()
        };
        if (candidate.status === AMS.ban.activeStatus &&
            isOperationalBanRecordValid_(candidate)) {
            ids.add(candidate.id);
        }
    });
    return ids;
}
function removeActiveBannedPowerTrackerMembers_() {
    const ss = getAmsSpreadsheet_();
    const pt = ss.getSheetByName(AMS.sheets.powerTracker);
    if (!pt)
        return 0;
    const activeBannedIds = getActiveOperationalBanIds_();
    if (!activeBannedIds.size)
        return 0;
    let removed = 0;
    const lastRow = pt.getLastRow();
    if (lastRow < AMS.rows.powerFirst)
        return 0;
    const ids = pt
        .getRange(AMS.rows.powerFirst, 2, lastRow - AMS.rows.powerFirst + 1, 1)
        .getValues();
    for (let index = ids.length - 1; index >= 0; index--) {
        const id = normalizeId_(ids[index][0]);
        if (id && activeBannedIds.has(id)) {
            pt.deleteRow(AMS.rows.powerFirst + index);
            removed++;
        }
    }
    return removed;
}
function syncRosterToPowerTrackerIdentity_() {
    const ss = getAmsSpreadsheet_();
    const roster = ss.getSheetByName(AMS.sheets.roster);
    const pt = ss.getSheetByName(AMS.sheets.powerTracker);
    if (!roster || !pt)
        return false;
    const validation = validateRosterPlayerIds_(roster);
    if (!validation.valid)
        return false;
    const members = getValidatedRosterMembers_(roster);
    const activeBannedIds = getActiveOperationalBanIds_();
    const stateById = new Map();
    const staleRows = [];
    const quarantinedRows = [];
    if (pt.getLastRow() >= AMS.rows.powerFirst) {
        pt.getRange(AMS.rows.powerFirst, 1, pt.getLastRow() - AMS.rows.powerFirst + 1, 10)
            .getValues()
            .forEach((record, index) => {
            const id = normalizeId_(record[1]);
            const preserved = [
                record[0], record[1],
                record[2], record[3], '', '',
                record[6], record[7], record[8], record[9]
            ];
            if (AMS.validation.id.test(id) && !stateById.has(id)) {
                stateById.set(id, {
                    name: record[0], id,
                    c: record[2], d: record[3],
                    g: record[6], h: record[7], i: record[8], j: record[9],
                    originalOrder: index
                });
            }
            else if (!AMS.validation.id.test(id) || stateById.has(id)) {
                const hasData = preserved.some(value => String(value ?? '').trim() !== '');
                if (hasData) {
                    quarantinedRows.push({
                        values: preserved,
                        reason: AMS.validation.id.test(id)
                            ? `Duplicate Player ID ${id}`
                            : 'Missing or malformed Player ID'
                    });
                }
            }
        });
    }
    const liveIds = new Set(members.map(member => member.id));
    const liveRows = members
        .filter(member => !activeBannedIds.has(member.id))
        .map(member => {
        const old = stateById.get(member.id) || {};
        return [
            member.name, member.id,
            old.c === undefined ? '' : old.c,
            old.d === undefined ? '' : old.d,
            '', '',
            old.g === undefined ? '' : old.g,
            old.h === undefined ? '' : old.h,
            old.i === undefined ? '' : old.i,
            old.j === undefined ? '' : old.j
        ];
    });
    stateById.forEach((old, id) => {
        if (!liveIds.has(id) && !activeBannedIds.has(id)) {
            staleRows.push([
                old.name || '', id,
                old.c === undefined ? '' : old.c,
                old.d === undefined ? '' : old.d,
                '', '',
                old.g === undefined ? '' : old.g,
                old.h === undefined ? '' : old.h,
                old.i === undefined ? '' : old.i,
                old.j === undefined ? '' : old.j
            ]);
        }
    });
    const rows = liveRows
        .concat(staleRows)
        .concat(quarantinedRows.map(row => row.values));
    const existingRows = Math.max(pt.getLastRow() - AMS.rows.powerFirst + 1, 0);
    const neededRows = Math.max(existingRows, rows.length);
    if (neededRows > 0) {
        pt.getRange(AMS.rows.powerFirst, 1, neededRows, 4).clearContent();
        pt.getRange(AMS.rows.powerFirst, 7, neededRows, 4).clearContent();
    }
    if (rows.length) {
        pt.getRange(AMS.rows.powerFirst, 1, rows.length, 4)
            .setValues(rows.map(record => record.slice(0, 4)));
        pt.getRange(AMS.rows.powerFirst, 7, rows.length, 4)
            .setValues(rows.map(record => record.slice(6, 10)));
        quarantinedRows.forEach((row, index) => {
            const targetRow = AMS.rows.powerFirst + liveRows.length + staleRows.length + index;
            pt.getRange(targetRow, 2).setNote(`AMS QUARANTINE — ${row.reason}. Correct the identity before reuse.`);
        });
    }
    return true;
}
function syncPowerTrackerToRoster_() {
    const ss = getAmsSpreadsheet_();
    const roster = ss.getSheetByName(AMS.sheets.roster);
    const pt = ss.getSheetByName(AMS.sheets.powerTracker);
    if (!roster || !pt)
        return;
    const members = getValidatedRosterMembers_(roster);
    if (!members.length)
        return;
    const ptMap = new Map();
    if (pt.getLastRow() >= AMS.rows.powerFirst) {
        pt.getRange(AMS.rows.powerFirst, 1, pt.getLastRow() - AMS.rows.powerFirst + 1, 10)
            .getValues()
            .forEach(record => {
            const id = normalizeId_(record[1]);
            if (!id || ptMap.has(id))
                return;
            const endingPower = record[3];
            const beginningPower = record[2];
            const furnaceEnding = record[7];
            const furnaceStarting = record[6];
            const furnaceRaw = furnaceEnding !== '' ? furnaceEnding : furnaceStarting;
            ptMap.set(id, {
                power: endingPower !== '' ? endingPower : beginningPower,
                furnace: normalizeFurnaceValue_(furnaceRaw) || furnaceRaw
            });
        });
    }
    const firstRow = AMS.rows.rosterFirst;
    const lastRow = Math.max(firstRow, getLastRosterMemberRow_(roster));
    const rowCount = lastRow - firstRow + 1;
    const furnaceRange = roster.getRange(firstRow, AMS.roster.col.furnace, rowCount, 1);
    const powerRange = roster.getRange(firstRow, AMS.roster.col.power, rowCount, 1);
    const furnaces = furnaceRange.getValues();
    const powers = powerRange.getValues();
    let furnaceChanged = false;
    let powerChanged = false;
    members.forEach(member => {
        const tracked = ptMap.get(member.id);
        if (!tracked)
            return;
        const index = member.row - firstRow;
        if (tracked.furnace !== '' && furnaces[index][0] !== tracked.furnace) {
            furnaces[index][0] = tracked.furnace;
            furnaceChanged = true;
        }
        if (tracked.power !== '' && powers[index][0] !== tracked.power) {
            powers[index][0] = tracked.power;
            powerChanged = true;
        }
    });
    if (furnaceChanged)
        furnaceRange.setValues(furnaces);
    if (powerChanged)
        powerRange.setValues(powers);
}
function syncPlayerIdExport_() {
    const ss = getAmsSpreadsheet_();
    const roster = ss.getSheetByName(AMS.sheets.roster);
    const exportSheet = ss.getSheetByName(AMS.sheets.playerIdExport);
    if (!roster || !exportSheet)
        return;
    const stateId = roster.getRange('L3').getDisplayValue();
    const members = getValidatedRosterMembers_(roster);
    const rows = members.map(member => [
        member.name,
        member.id,
        stateId
    ]);
    const clearRows = Math.max(0, exportSheet.getLastRow() - 1, rows.length);
    if (clearRows > 0)
        exportSheet.getRange(2, 1, clearRows, 3).clearContent();
    if (rows.length) {
        exportSheet.getRange(2, 1, rows.length, 3).setValues(rows);
    }
}
function syncValidatedRosterDownstream_() {
    const r = getAmsSpreadsheet_().getSheetByName(AMS.sheets.roster);
    if (!r) {
        return false;
    }
    const v = validateRosterPlayerIds_(r);
    if (!v.valid) {
        writeRosterValidationMetadata_(r, v.errorType, v.details);
        quarantineInvalidRosterRows_(r, v.invalidRows);
        return false;
    }
    writeRosterValidationMetadata_(r, '', '');
    if (!syncRosterToPowerTrackerIdentity_()) {
        return false;
    }
    syncPowerTrackerToRoster_();
    syncPlayerIdExport_();
    refreshRosterIndicators_();
    return true;
}
function rejectPowerTrackerIdentityEdit_(e) {
    const pt = e.range.getSheet();
    if (e.range.getNumRows() === 1 &&
        e.range.getNumColumns() === 1 &&
        Object.prototype.hasOwnProperty.call(e, 'oldValue')) {
        e.range.setValue(e.oldValue == null
            ? ''
            : e.oldValue);
        return;
    }
    if (!syncRosterToPowerTrackerIdentity_()) {
        throw new Error('Power Tracker identity edit could not be safely repaired because Roster identity validation failed.');
    }
}
function applyPowerTrackerFurnacePresentation_(pt, firstRow, lastRow) {
    return;
}
function handlePowerTrackerEdit_(e) {
    const sheet = e.range.getSheet();
    const row = e.range.getRow();
    const firstColumn = e.range.getColumn();
    const lastColumn = firstColumn + e.range.getNumColumns() - 1;
    if (row < AMS.rows.powerFirst)
        return;
    const firstRow = Math.max(AMS.rows.powerFirst, e.range.getRow());
    const lastRow = e.range.getLastRow();
    const touchesIdentity = firstColumn <= 2 &&
        lastColumn >= 1;
    if (touchesIdentity) {
        rejectPowerTrackerIdentityEdit_(e);
        const restoredRange = e.range;
        restoredRange.setNote([
            'AMS RESTORED THIS DATA',
            'Power Tracker identity is controlled by the Roster.',
            'This player still exists on the Roster, so AMS restored the Power Tracker identity.',
            'To permanently remove this player, delete the player from the Roster instead.'
        ].join('\n'));
        getAmsSpreadsheet_().toast('Power Tracker restored this player because they still exist on the Roster. Delete them from Roster to remove them permanently.', 'AMS — Roster Is Authoritative', 8);
        writeAuditLog_('PT IDENTITY EDIT REJECTED', AMS.sheets.powerTracker, e.range.getA1Notation(), '', '', 'Power Tracker A:B are script-owned; trusted Roster identity was restored without remapping weekly data.', '');
        scheduleDeathStarRebuild_();
        return;
    }
    const touchesFurnace = firstColumn <= 8 &&
        lastColumn >= 7;
    if (touchesFurnace) {
        normalizeEditedFurnaceCells_(sheet, firstRow, lastRow, Math.max(firstColumn, 7), Math.min(lastColumn, 8));
    }
    const touchesWeeklyData = (firstColumn <= 4 &&
        lastColumn >= 3) ||
        (firstColumn <= 8 &&
            lastColumn >= 7);
    if (touchesWeeklyData) {
        const ids = sheet
            .getRange(firstRow, 2, lastRow - firstRow + 1, 1)
            .getValues();
        const today = new Date();
        ids.forEach((record, index) => {
            const playerId = normalizeId_(record[0]);
            if (!AMS.validation.id.test(playerId)) {
                return;
            }
            sheet
                .getRange(firstRow + index, 9)
                .setValue(today)
                .setNumberFormat('mmmm d, yyyy');
        });
    }
    syncPowerTrackerRowsToRoster_(sheet, firstRow, lastRow);
    if (touchesFurnace) {
        applyPowerTrackerFurnacePresentation_(sheet, firstRow, lastRow);
    }
    scheduleDeathStarRebuild_();
}
function processTerminalRosterAction_(incident) {
    const ss = getAmsSpreadsheet_();
    const roster = ss.getSheetByName(AMS.sheets.roster);
    if (!roster)
        return { completed: true, unresolved: false };
    const playerId = normalizeId_(incident.playerId);
    if (!playerId)
        return { completed: true, unresolved: false };
    const status = String(incident.canonicalStatus || '').trim();
    if (!status)
        return { completed: true, unresolved: false };
    if (!AMS.roster.terminal.includes(status)) {
        throw new Error(`Incident terminal action rejected: unsupported canonical Roster status "${status}".`);
    }
    const transactionKey = incident.sourceKey
        ? `INCIDENT:${incident.sourceKey}`
        : `INCIDENT:${incident.incidentNumber || ''}`;
    const member = getValidatedRosterMembers_(roster).find(item => item.id === playerId);
    if (!member && historyTransactionExists_(playerId, transactionKey)) {
        removePowerTrackerMemberById_(playerId);
        scheduleDeathStarRebuild_();
        return { completed: true, unresolved: false, resumed: true };
    }
    if (!member) {
        const message = `Player ID ${playerId} is not present on the current Roster. Leadership must review the incident before AMS can complete the ${status} action.`;
        console.warn(message);
        writeAuditLog_('INCIDENT ACTION REQUIRED', AMS.sheets.incidentLog, `Player ID ${playerId}`, '', incident.incidentNumber || '', message, '');
        return { completed: false, unresolved: true, message: message };
    }
    roster.getRange(member.row, AMS.roster.col.status).setValue(status);
    archiveAndRemoveRosterMember_(roster, member.row, status, {
        source: 'Incident Log',
        incidentNumber: incident.incidentNumber || '',
        departureDate: incident.incidentDate || new Date(),
        transactionKey: transactionKey
    });
    scheduleDeathStarRebuild_();
    return { completed: true, unresolved: false };
}
function getAmsMetadataValue_(range, key) {
    const match = range
        .getDeveloperMetadata()
        .find(meta => meta.getKey() === key);
    return match
        ? String(match.getValue() || '').trim()
        : '';
}
function addAmsMetadata_(range, key, value) {
    if (!range || !key || !value)
        return;
    range.addDeveloperMetadata(key, String(value), SpreadsheetApp.DeveloperMetadataVisibility.PROJECT);
}
function getHistoryTransactionMetadataValue_(playerId, transactionKey) {
    return [
        normalizeId_(playerId),
        String(transactionKey || '').trim()
    ].join('|');
}
function archiveAndRemoveRosterMember_(roster, row, terminalStatus, details) {
    const ss = getAmsSpreadsheet_();
    const history = ss.getSheetByName(AMS.sheets.memberHistory);
    if (!history) {
        throw new Error('Could not find Departure Log sheet. ' +
            'Roster row was NOT deleted.');
    }
    const values = roster
        .getRange(row, 1, 1, 10)
        .getValues()[0];
    const playerId = normalizeId_(values[AMS.roster.col.id - 1]);
    if (!playerId ||
        !AMS.rosterValidation.validIdPattern.test(playerId)) {
        throw new Error(`Cannot archive Roster row ${row}: invalid Player ID.`);
    }
    const playerName = String(values[AMS.roster.col.name - 1] || '').trim();
    const alias = String(values[AMS.roster.col.alias - 1] || '').trim();
    const alliance = String(values[AMS.roster.col.alliance - 1] || '').trim();
    const accountType = String(values[AMS.roster.col.account - 1] || '').trim();
    const finalPower = values[AMS.roster.col.power - 1];
    const incidentHistory = getIncidentNumbersForPlayer_(playerId);
    recordIdentityObservation_(playerId, playerName, 'Roster Departure');
    const departureDate = details && details.departureDate
        ? details.departureDate
        : new Date();
    let event = terminalStatus;
    if (terminalStatus === 'Removed') {
        event = 'Kicked';
    }
    if (terminalStatus === 'Left') {
        event = 'Left';
    }
    if (isBanCommand_(terminalStatus)) {
        event = 'Banned';
    }
    let transactionKey = details && details.transactionKey
        ? String(details.transactionKey).trim()
        : '';
    if (!transactionKey) {
        const rosterRow = roster.getRange(`${row}:${row}`);
        transactionKey =
            getAmsMetadataValue_(rosterRow, 'AMS_ARCHIVE_TX');
        if (!transactionKey) {
            transactionKey =
                `ROSTER:${Utilities.getUuid()}`;
            addAmsMetadata_(rosterRow, 'AMS_ARCHIVE_TX', transactionKey);
        }
    }
    const alreadyArchived = historyTransactionExists_(playerId, transactionKey);
    if (!alreadyArchived) {
        const nextRow = history.getLastRow() + 1;
        const historyNote = details && details.note
            ? String(details.note).trim()
            : '';
        history
            .getRange(nextRow, 1, 1, 9)
            .setValues([[
                playerName,
                playerId,
                departureDate,
                event,
                alliance,
                accountType,
                finalPower,
                incidentHistory,
                historyNote
            ]]);
        addAmsMetadata_(history.getRange(`${nextRow}:${nextRow}`), 'AMS_HISTORY_TX', getHistoryTransactionMetadataValue_(playerId, transactionKey));
    }
    if (!alreadyArchived) {
        writeAuditLog_('ROSTER DEPARTURE', AMS.sheets.roster, `Player ID ${playerId}`, '', terminalStatus, `Player ${playerName} | ID ${playerId} | ` +
            `Power on Departure: ${finalPower} | ` +
            `Archived before live removal. Source: ` +
            `${(details && details.source) || 'Roster'}`, '');
    }
    roster.deleteRow(row);
    removePowerTrackerMemberById_(playerId);
    touchRosterUpdated_(roster);
    normalizeManagedSheetVisibility_(history);
    normalizeManagedSheetVisibility_(roster);
}
function historyTransactionExists_(playerId, transactionKey) {
    if (!transactionKey) {
        return false;
    }
    const history = getAmsSpreadsheet_()
        .getSheetByName(AMS.sheets.memberHistory);
    if (!history) {
        return false;
    }
    const metadataValue = getHistoryTransactionMetadataValue_(playerId, transactionKey);
    return history
        .createDeveloperMetadataFinder()
        .withKey('AMS_HISTORY_TX')
        .withValue(metadataValue)
        .find()
        .length > 0;
}
function ensureHistoryEvent_(playerId, playerName, event, note, incident, transactionKey) {
    if (!transactionKey) {
        throw new Error('Departure Log transaction key is required.');
    }
    if (historyTransactionExists_(playerId, transactionKey)) {
        return false;
    }
    appendHistoryEvent_(playerId, playerName, event, note, incident, transactionKey);
    if (!historyTransactionExists_(playerId, transactionKey)) {
        throw new Error(`Departure Log could not confirm transaction ` +
            `${transactionKey} for Player ID ${playerId}. ` +
            `AMS stopped before destructive cleanup.`);
    }
    return true;
}
function appendHistoryEvent_(playerId, playerName, event, note, incident, transactionKey) {
    const history = getAmsSpreadsheet_()
        .getSheetByName(AMS.sheets.memberHistory);
    if (!history)
        return;
    const row = Math.max(history.getLastRow() + 1, 2);
    history
        .getRange(row, 1, 1, 9)
        .setValues([[
            playerName || '',
            playerId,
            new Date(),
            event || '',
            '',
            '',
            '',
            incident || '',
            note || ''
        ]]);
    if (transactionKey) {
        addAmsMetadata_(history.getRange(`${row}:${row}`), 'AMS_HISTORY_TX', getHistoryTransactionMetadataValue_(playerId, transactionKey));
    }
    if (note) {
        history
            .getRange(row, 4)
            .setNote(note);
    }
}
function sortRosterByStatus_() {
    const roster = getAmsSpreadsheet_()
        .getSheetByName(AMS.sheets.roster);
    if (!roster)
        return;
    const lastRow = getLastRosterMemberRow_(roster);
    if (lastRow < AMS.rows.rosterFirst)
        return;
    const rowCount = lastRow - AMS.rows.rosterFirst + 1;
    const range = roster.getRange(AMS.rows.rosterFirst, 1, rowCount, 10);
    const values = range.getValues();
    const notes = range.getNotes();
    const backgrounds = range.getBackgrounds();
    const statusOrder = new Map([
        ['Active', 10],
        ['LOA/Vacation', 20],
        ['Inactive', 30],
        ['', 40]
    ]);
    const records = values.map((record, index) => ({
        values: record,
        notes: notes[index],
        backgrounds: backgrounds[index]
    }));
    records.sort((a, b) => {
        const statusA = String(a.values[AMS.roster.col.status - 1] || '').trim();
        const statusB = String(b.values[AMS.roster.col.status - 1] || '').trim();
        const orderA = statusOrder.has(statusA)
            ? statusOrder.get(statusA)
            : 50;
        const orderB = statusOrder.has(statusB)
            ? statusOrder.get(statusB)
            : 50;
        if (orderA !== orderB) {
            return orderA - orderB;
        }
        const rankA = rankSortValue_(a.values[AMS.roster.col.rank - 1]);
        const rankB = rankSortValue_(b.values[AMS.roster.col.rank - 1]);
        if (rankA !== rankB) {
            return rankA - rankB;
        }
        return String(a.values[AMS.roster.col.name - 1] || '').localeCompare(String(b.values[AMS.roster.col.name - 1] || ''));
    });
    range.setValues(records.map(record => record.values));
    range.setNotes(records.map(record => record.notes));
    range.setBackgrounds(records.map(record => record.backgrounds));
    touchRosterUpdated_(roster);
}
function rankSortValue_(rank) {
    const value = String(rank || '').trim().toUpperCase();
    const order = {
        R5: 10,
        R4: 20,
        R3: 30,
        R2: 40,
        R1: 50
    };
    return order[value] || 99;
}
function getRosterMetadataValueByLabel_(roster, label) {
    if (!roster || !label)
        return '';
    const values = roster.getRange('K1:L12').getDisplayValues();
    const wanted = String(label).trim().toLowerCase();
    for (let i = 0; i < values.length; i++) {
        const current = String(values[i][0] || '').trim().toLowerCase();
        if (current === wanted) {
            return values[i][1] || '';
        }
    }
    return '';
}
function getRosterAllianceOptions_(roster) {
    if (!roster)
        return [];
    return roster
        .getRange('L4:L6')
        .getDisplayValues()
        .flat()
        .map(value => String(value || '').trim())
        .filter((value, index, array) => value &&
        value.toLowerCase() !== 'academy' &&
        array.findIndex(v => v.toLowerCase() === value.toLowerCase()) === index);
}
function getSourceValidationTemplate_(source, sourceMap, key) {
    if (!source || !sourceMap)
        return null;
    const index = sourceMap[key];
    if (index === undefined || index < 0)
        return null;
    const maxRows = Math.min(source.getMaxRows(), 25);
    for (let row = AMS.rows.rosterFirst; row <= maxRows; row++) {
        const rule = source.getRange(row, index + 1).getDataValidation();
        if (rule)
            return rule;
    }
    return null;
}
function buildValidationFromTemplateOrList_(template, values) {
    const safeValues = (values || []).filter(Boolean);
    if (!safeValues.length)
        return null;
    if (template) {
        try {
            return template
                .copy()
                .withCriteria(SpreadsheetApp.DataValidationCriteria.VALUE_IN_LIST, [safeValues, true])
                .setAllowInvalid(false)
                .build();
        }
        catch (_) {
        }
    }
    return SpreadsheetApp
        .newDataValidation()
        .requireValueInList(safeValues, true)
        .setAllowInvalid(false)
        .build();
}
function rosterStaticDropdownMatches_(rule, allowedValues) {
    if (!rule ||
        rule.getCriteriaType() !== SpreadsheetApp.DataValidationCriteria.VALUE_IN_LIST ||
        rule.getAllowInvalid())
        return false;
    const criteria = rule.getCriteriaValues();
    const currentValues = criteria && criteria[0];
    if (!Array.isArray(currentValues) || criteria[1] !== true ||
        currentValues.length !== allowedValues.length)
        return false;
    return currentValues.every((value, index) => String(value) === String(allowedValues[index]));
}
function applyRosterStaticDropdownIfNeeded_(sheet, column, allowedValues, desiredRule, firstRowOverride) {
    if (!sheet || !desiredRule)
        return;
    const firstRow = firstRowOverride || AMS.rows.rosterFirst;
    const rowCount = sheet.getMaxRows() - firstRow + 1;
    if (rowCount <= 0)
        return;
    const existing = sheet.getRange(firstRow, column, rowCount, 1)
        .getDataValidations();
    let start = -1;
    for (let index = 0; index <= rowCount; index++) {
        const needsRepair = index < rowCount &&
            !rosterStaticDropdownMatches_(existing[index][0], allowedValues);
        if (needsRepair && start < 0)
            start = index;
        if (!needsRepair && start >= 0) {
            sheet.getRange(firstRow + start, column, index - start, 1)
                .setDataValidation(desiredRule);
            start = -1;
        }
    }
}
function applyRosterValidations_(sheet, sourceTemplate, sourceMap) {
    if (!sheet)
        return;
    const source = sourceTemplate || null;
    const map = sourceMap || {};
    const rankTemplate = getSourceValidationTemplate_(source, map, 'rank');
    const allianceTemplate = getSourceValidationTemplate_(source, map, 'alliance');
    const accountTemplate = getSourceValidationTemplate_(source, map, 'account');
    const statusTemplate = getSourceValidationTemplate_(source, map, 'status');
    const rankRule = buildValidationFromTemplateOrList_(rankTemplate, AMS.roster.ranks);
    const allianceOptions = getRosterAllianceOptions_(sheet);
    const allianceRule = buildValidationFromTemplateOrList_(allianceTemplate, allianceOptions);
    const accountRule = buildValidationFromTemplateOrList_(accountTemplate, AMS.roster.accountTypes);
    const statusRule = buildValidationFromTemplateOrList_(statusTemplate, AMS.roster.statuses);
    if (rankRule) {
        applyRosterStaticDropdownIfNeeded_(sheet, AMS.roster.col.rank, AMS.roster.ranks, rankRule);
    }
    if (allianceRule) {
        applyRosterStaticDropdownIfNeeded_(sheet, AMS.roster.col.alliance, allianceOptions, allianceRule);
    }
    else {
        sheet.getRange('H3:H').clearDataValidations();
    }
    applyRosterStaticDropdownIfNeeded_(sheet, AMS.roster.col.account, AMS.roster.accountTypes, accountRule);
    applyRosterStaticDropdownIfNeeded_(sheet, AMS.roster.col.status, AMS.roster.statuses, statusRule);
    applyFurnaceValidations_(sheet);
}
function isAmsFurnaceRule_(rule, sheet, firstRow, columns) {
    const ranges = rule.getRanges();
    if (!ranges.length || !ranges.every(range => range.getSheet().getSheetId() === sheet.getSheetId() &&
        columns.includes(range.getColumn()) &&
        range.getNumColumns() === 1 &&
        range.getRow() >= firstRow))
        return false;
    const condition = rule.getBooleanCondition();
    if (!condition)
        return false;
    const type = condition.getCriteriaType();
    const args = condition.getCriteriaValues();
    const value = String(args && args[0] || '').trim();
    return (type === SpreadsheetApp.BooleanCriteria.TEXT_EQ &&
        (/^(?:[1-9]|[12]\d|30)$/.test(value) || /^🔥 FC(?:10|[1-9])$/.test(value))) || (type === SpreadsheetApp.BooleanCriteria.NUMBER_GREATER_THAN_EQ &&
        value === '1' && !condition.getBackgroundObject() && !condition.getFontColorObject());
}
function applyAmsFurnaceConditionalFormatting_(sheet, firstRow, columns) {
    if (!sheet || !columns || !columns.length)
        return;
    const lastRow = sheet.getMaxRows();
    if (lastRow < firstRow)
        return;
    const config = getFurnaceConfig_();
    const levels = config.filter(record => record.rank > AMS.furnace.normalMax &&
        record.rank <= AMS.furnace.normalMax + AMS.furnace.fcMax);
    const prior = sheet.getConditionalFormatRules();
    const retained = prior.filter(rule => !isAmsFurnaceRule_(rule, sheet, firstRow, columns));
    const newRules = [];
    levels.forEach(level => {
        const color = String(level.background || '').trim() ||
            AMS.furnace.fallbackFcColors[level.rank - AMS.furnace.normalMax - 1];
        if (!color)
            return;
        const ranges = columns.map(column => sheet.getRange(firstRow, column, lastRow - firstRow + 1, 1));
        newRules.push(SpreadsheetApp.newConditionalFormatRule()
            .whenTextEqualTo(level.display)
            .setBackground(color)
            .setRanges(ranges)
            .build());
    });
    sheet.setConditionalFormatRules(retained.concat(newRules));
}
function applyRosterStatusFormatting_(sheet) {
    if (!sheet)
        return;
    const firstRow = AMS.rows.rosterFirst;
    const range = sheet.getRange(firstRow, AMS.roster.col.status, sheet.getMaxRows() - firstRow + 1, 1);
    const knownStatuses = new Set(AMS.roster.statuses);
    const rules = sheet.getConditionalFormatRules().filter(rule => {
        const condition = rule.getBooleanCondition();
        if (!condition || condition.getCriteriaType() !==
            SpreadsheetApp.BooleanCriteria.TEXT_EQ)
            return true;
        const value = String(condition.getCriteriaValues()[0] || '');
        if (!knownStatuses.has(value))
            return true;
        const ranges = rule.getRanges();
        return !ranges.length || !ranges.every(item => item.getSheet().getSheetId() === sheet.getSheetId() &&
            item.getColumn() === AMS.roster.col.status &&
            item.getNumColumns() === 1 &&
            item.getRow() >= firstRow);
    });
    const palette = {
        'Active': AMS.colors.active,
        'LOA/Vacation': AMS.colors.loa,
        'Inactive': AMS.colors.inactive,
        'Left': AMS.colors.left,
        'Removed': AMS.colors.removed,
        'NAP Temp Ban': AMS.colors.tempBan,
        'Alliance Temp Ban': AMS.colors.tempBan,
        'NAP Permanent Ban': AMS.colors.permBan,
        'Alliance Perm Ban': AMS.colors.permBan
    };
    AMS.roster.statuses.forEach(status => {
        if (!palette[status])
            return;
        rules.push(SpreadsheetApp.newConditionalFormatRule()
            .whenTextEqualTo(status)
            .setBackground(palette[status])
            .setRanges([range])
            .build());
    });
    sheet.setConditionalFormatRules(rules);
}
function extendAmsAestheticsAfterGrowth_(sheet, oldMaxRows) {
    if (!sheet || sheet.getMaxRows() <= oldMaxRows)
        return;
    const name = sheet.getName();
    if (name === AMS.sheets.roster) {
        applyRosterStatusFormatting_(sheet);
        applyAmsFurnaceConditionalFormatting_(sheet, AMS.rows.rosterFirst, [AMS.roster.col.furnace]);
    }
    else if (name === AMS.sheets.powerTracker) {
        applyAmsFurnaceConditionalFormatting_(sheet, AMS.rows.powerFirst, [7, 8]);
    }
    else if (name === AMS.sheets.incidentLog && sheet.getMaxColumns() >= 11) {
        sheet.getRange(oldMaxRows + 1, 10, sheet.getMaxRows() - oldMaxRows, 2)
            .setBackground(AMS.aesthetics.unusedAreaGray);
    }
}
function finishRosterMetadataHeader_(roster) {
    if (!roster)
        return;
    const label = String(roster.getRange('K3').getDisplayValue() || '').trim();
    const furnace = String(roster.getRange('K9').getDisplayValue() || '').trim();
    if (label !== 'State ID' || furnace !== AMS.furnace.metadataLabel)
        return;
    const oldTitle = String(roster.getRange('K1').getDisplayValue() || '').trim();
    const newTitle = String(roster.getRange('K2').getDisplayValue() || '').trim();
    if (oldTitle !== 'Roster Metadata' || newTitle)
        return;
    const oldRange = roster.getRange('K1:L1');
    const header = roster.getRange('K2:L2');
    if (oldRange.isPartOfMerge())
        oldRange.breakApart();
    if (header.isPartOfMerge())
        header.breakApart();
    oldRange.clearContent().setBackground(AMS.aesthetics.unusedAreaGray);
    header.merge().setValue('Roster Metadata').setBackground('#FFFFFF')
        .setFontWeight('bold')
        .setHorizontalAlignment('center').setVerticalAlignment('middle');
}
function installAmsAesthetics_(ss) {
    const spreadsheet = ss || getAmsSpreadsheet_();
    const roster = spreadsheet.getSheetByName(AMS.sheets.roster);
    const tracker = spreadsheet.getSheetByName(AMS.sheets.powerTracker);
    if (!roster || !tracker)
        throw new Error('Roster and Power Tracker are required for AMS aesthetics.');
    finishRosterMetadataHeader_(roster);
    applyRosterStatusFormatting_(roster);
    applyAmsFurnaceConditionalFormatting_(roster, AMS.rows.rosterFirst, [AMS.roster.col.furnace]);
    applyAmsFurnaceConditionalFormatting_(tracker, AMS.rows.powerFirst, [7, 8]);
}
function refreshAmsAesthetics() {
    const ss = getAmsSpreadsheet_();
    installAmsAesthetics_(ss);
    ss.toast('AMS default presentation refreshed. Chip styles/colors remain manual.', 'AMS Aesthetics', 7);
}
function applyBanValidations_(sheet) {
    if (!sheet)
        return;
    const typeRule = SpreadsheetApp
        .newDataValidation()
        .requireValueInList(AMS.ban.types, true)
        .setAllowInvalid(false)
        .build();
    const durationRule = SpreadsheetApp
        .newDataValidation()
        .requireValueInList(AMS.ban.durations, true)
        .setAllowInvalid(false)
        .build();
    const statusRule = SpreadsheetApp
        .newDataValidation()
        .requireValueInList(AMS.ban.selectableStatuses, true)
        .setAllowInvalid(true)
        .build();
    sheet.getRange('E2:E').setDataValidation(typeRule);
    sheet.getRange('F2:F').setDataValidation(durationRule);
    sheet.getRange('K2:K').setDataValidation(statusRule);
}
function validateAccountLinks_(sheet) {
    if (!sheet || sheet.getLastRow() < 2)
        return true;
    const rowCount = sheet.getLastRow() - 1;
    const range = sheet.getRange(2, 1, rowCount, 9);
    const values = range.getValues();
    const notes = sheet.getRange(2, 1, rowCount, 1).getNotes();
    const backgrounds = range.getBackgrounds();
    const seenPairs = new Map();
    let valid = true;
    let notesChanged = false;
    let backgroundsChanged = false;
    values.forEach((record, index) => {
        const row = index + 2;
        const left = normalizeId_(record[0]);
        const right = normalizeId_(record[3]);
        const type = String(record[5] || '').trim();
        const errors = [];
        if (left && !AMS.validation.id.test(left))
            errors.push('Player ID must be exactly 9 digits.');
        if (right && !AMS.validation.id.test(right))
            errors.push('Linked Player ID must be exactly 9 digits.');
        if (left && right && left === right)
            errors.push('A Player ID cannot link to itself.');
        if (type && !AMS.accountLinks.relationships.includes(type))
            errors.push('Linked Account Type is not recognized.');
        if (left &&
            right &&
            AMS.validation.id.test(left) &&
            AMS.validation.id.test(right) &&
            left !== right) {
            const pair = [left, right].sort().join('|');
            if (seenPairs.has(pair))
                errors.push(`Duplicate account link with row ${seenPairs.get(pair)}.`);
            else
                seenPairs.set(pair, row);
        }
        const currentNote = String(notes[index][0] || '');
        if (errors.length) {
            valid = false;
            const nextNote = `AMS PLAYER IDENTITY ERROR — ${errors.join(' ')}`;
            if (currentNote !== nextNote) {
                notes[index][0] = nextNote;
                notesChanged = true;
            }
            for (let c = 0; c < 9; c++) {
                if (String(backgrounds[index][c] || '').toUpperCase() !== String(AMS.colors.hardStop).toUpperCase()) {
                    backgrounds[index][c] = AMS.colors.hardStop;
                    backgroundsChanged = true;
                }
            }
        }
        else if (currentNote.startsWith('AMS PLAYER IDENTITY ERROR')) {
            notes[index][0] = '';
            notesChanged = true;
            for (let c = 0; c < 9; c++) {
                if (backgrounds[index][c]) {
                    backgrounds[index][c] = null;
                    backgroundsChanged = true;
                }
            }
        }
    });
    if (notesChanged) {
        sheet.getRange(2, 1, rowCount, 1).setNotes(notes);
    }
    if (backgroundsChanged) {
        range.setBackgrounds(backgrounds);
    }
    return valid;
}
function getOrCreateSheet_(sheetName, headers) {
    const ss = getAmsSpreadsheet_();
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
        sheet = ss.insertSheet(sheetName);
    }
    if (headers &&
        headers.length &&
        (!sheet.getLastRow() || !String(sheet.getRange('A1').getValue()).trim())) {
        ensureSheetSize_(sheet, 25, headers.length);
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    return sheet;
}
function ensureSheetSize_(sheet, rows, columns) {
    if (sheet.getMaxRows() < rows) {
        sheet.insertRowsAfter(sheet.getMaxRows(), rows - sheet.getMaxRows());
    }
    if (sheet.getMaxColumns() < columns) {
        sheet.insertColumnsAfter(sheet.getMaxColumns(), columns - sheet.getMaxColumns());
    }
}
function findPlayerRowById_(sheet, idColumn, playerId) {
    if (!sheet || sheet.getLastRow() < 2)
        return null;
    const normalized = normalizeId_(playerId);
    if (!normalized)
        return null;
    const values = sheet
        .getRange(2, idColumn, sheet.getLastRow() - 1, 1)
        .getValues();
    for (let i = 0; i < values.length; i++) {
        if (normalizeId_(values[i][0]) === normalized) {
            return i + 2;
        }
    }
    return null;
}
function getEffectiveUser_() {
    try {
        return Session.getActiveUser().getEmail() || 'Leadership';
    }
    catch (error) {
        return 'Leadership';
    }
}
function formatAmsDate_(value) {
    if (!(value instanceof Date) || isNaN(value.getTime())) {
        return String(value || '').trim();
    }
    return Utilities.formatDate(value, Session.getScriptTimeZone() || 'America/New_York', 'MM/dd/yyyy');
}
function installBanExpirationTrigger_() {
    const functionName = 'refreshBanExpirations_';
    ScriptApp.getProjectTriggers().forEach(trigger => {
        if (trigger.getHandlerFunction() === functionName) {
            ScriptApp.deleteTrigger(trigger);
        }
    });
    ScriptApp
        .newTrigger(functionName)
        .timeBased()
        .everyDays(1)
        .atHour(4)
        .create();
}
function installTriggers() {
    const lock = LockService.getDocumentLock();
    lock.waitLock(30000);
    try {
        const ss = getAmsSpreadsheet_();
        installTriggersUnlocked_(ss);
    }
    finally {
        lock.releaseLock();
    }
}
function scheduleDeathStarRebuild_() {
    const props = PropertiesService.getScriptProperties();
    const dueProperty = 'AMS_DEATHSTAR_REBUILD_DUE';
    const legacyArmedProperty = 'AMS_DEATHSTAR_TRIGGER_ARMED';
    const delayMs = 15 * 60 * 1000;
    props.setProperty(dueProperty, String(Date.now() + delayMs));
    props.deleteProperty(legacyArmedProperty);
    armDeathStarTrigger_(delayMs);
    console.log(`Death Star rebuild armed for ${Math.round(delayMs / 60000)} minutes after AMS becomes idle.`);
}
function clearDeathStarTriggers_() {
    ScriptApp
        .getProjectTriggers()
        .filter(trigger => trigger.getHandlerFunction() === 'rebuildDeathStar_')
        .forEach(trigger => ScriptApp.deleteTrigger(trigger));
}
function armDeathStarTrigger_(delayMs) {
    const delay = Math.max(1000, Number(delayMs) || 1000);
    clearDeathStarTriggers_();
    return ScriptApp
        .newTrigger('rebuildDeathStar_')
        .timeBased()
        .after(delay)
        .create();
}
function rebuildDeathStar_() {
    const props = PropertiesService.getScriptProperties();
    const dueProperty = 'AMS_DEATHSTAR_REBUILD_DUE';
    const legacyArmedProperty = 'AMS_DEATHSTAR_TRIGGER_ARMED';
    props.deleteProperty(legacyArmedProperty);
    const due = Number(props.getProperty(dueProperty) || 0);
    const now = Date.now();
    if (due && now < due) {
        const remaining = Math.max(1000, due - now);
        armDeathStarTrigger_(remaining);
        console.log(`Death Star rebuild deferred for another ${Math.ceil(remaining / 1000)} seconds because AMS is still active.`);
        return;
    }
    const lock = LockService.getDocumentLock();
    if (!lock.tryLock(30000)) {
        armDeathStarTrigger_(60 * 1000);
        console.log('Death Star rebuild postponed for 60 seconds because another AMS operation is active.');
        return;
    }
    try {
        const latestDue = Number(props.getProperty(dueProperty) || 0);
        if (latestDue && Date.now() < latestDue) {
            const remaining = Math.max(1000, latestDue - Date.now());
            armDeathStarTrigger_(remaining);
            console.log('Death Star rebuild stood down because a newer edit reset the idle timer.');
            return;
        }
        console.log('Death Star reconstruction initiated.');
        refreshAms_();
        props.deleteProperty(dueProperty);
        props.deleteProperty(legacyArmedProperty);
        clearDeathStarTriggers_();
        console.log('Death Star fully operational.');
    }
    catch (error) {
        armDeathStarTrigger_(60 * 1000);
        console.error(`Death Star reconstruction failed: ${error.message}`);
        throw error;
    }
    finally {
        lock.releaseLock();
    }
}
function rebuildRosterIdentityPresentation_() {
    const ss = getAmsSpreadsheet_();
    const roster = ss.getSheetByName(AMS.sheets.roster);
    if (!roster)
        return;
    const firstRow = AMS.rows.rosterFirst;
    const lastRow = Math.max(firstRow, roster.getMaxRows());
    const rowCount = lastRow - firstRow + 1;
    const range = roster.getRange(firstRow, 1, rowCount, 10);
    // Validate before presentation cleanup; quarantine rows must retain the
    // warnings validated here, not be repainted as healthy by Death Star.
    const invalidRows = new Set(validateRosterPlayerIds_(roster).invalidRows);
    const values = range.getValues();
    const backgrounds = range.getBackgrounds();
    const nameRange = roster.getRange(firstRow, AMS.roster.col.name, rowCount, 1);
    const idRange = roster.getRange(firstRow, AMS.roster.col.id, rowCount, 1);
    const nameNotes = nameRange.getNotes();
    const idNotes = idRange.getNotes();
    const warningColors = new Set([
        String(AMS.colors.hardStop || '').toUpperCase(),
        String(AMS.colors.advisory || '').toUpperCase()
    ]);
    const stripAmsWarning = note => {
        note = String(note || '');
        if (!note)
            return '';
        const prefixes = ['BAN LIST IDENTITY MATCH', 'RETURNING MEMBER IDENTITY MATCH', 'ACTIVE BAN WARNING', 'NAP BAN', 'ALLIANCE BAN'];
        if (prefixes.some(prefix => note.startsWith(prefix)))
            return '';
        const marker = '\n\n--- AMS WARNING ---\n';
        const markerIndex = note.indexOf(marker);
        return markerIndex >= 0 ? note.slice(0, markerIndex).trim() : note;
    };
    let backgroundsChanged = false;
    let nameNotesChanged = false;
    let idNotesChanged = false;
    for (let i = 0; i < rowCount; i++) {
        if (invalidRows.has(firstRow + i)) continue;
        for (let c = 0; c < 10; c++) {
            if (warningColors.has(String(backgrounds[i][c] || '').toUpperCase())) {
                backgrounds[i][c] = null;
                backgroundsChanged = true;
            }
        }
        const cleanedName = stripAmsWarning(nameNotes[i][0]);
        if (cleanedName !== String(nameNotes[i][0] || '')) {
            nameNotes[i][0] = cleanedName;
            nameNotesChanged = true;
        }
        let cleanedId = stripAmsWarning(idNotes[i][0]);
        if (cleanedId.startsWith('MISSING ID') ||
            cleanedId.startsWith('INVALID ID') ||
            cleanedId.startsWith('DUPLICATE ID') ||
            cleanedId.startsWith('AMS HARD STOP'))
            cleanedId = '';
        if (cleanedId !== String(idNotes[i][0] || '')) {
            idNotes[i][0] = cleanedId;
            idNotesChanged = true;
        }
    }
    const activeBans = new Map();
    const bans = ss.getSheetByName(AMS.sheets.banList);
    if (bans && bans.getLastRow() >= 2) {
        bans.getRange(2, 1, bans.getLastRow() - 1, 11).getValues().forEach(record => {
            const candidate = {
                id: normalizeId_(record[0]), name: String(record[1] || '').trim(), aliases: String(record[2] || '').trim(),
                began: record[3], type: String(record[4] || '').trim(), duration: String(record[5] || '').trim(),
                liftDate: record[6], incident: String(record[7] || '').trim(), source: String(record[8] || '').trim(),
                reason: String(record[9] || '').trim(), status: String(record[10] || '').trim()
            };
            if (candidate.type === 'NAP' &&
                candidate.status === AMS.ban.activeStatus &&
                isOperationalBanRecordValid_(candidate) &&
                !activeBans.has(candidate.id)) {
                activeBans.set(candidate.id, candidate);
            }
        });
    }
    for (let i = 0; i < rowCount; i++) {
        if (invalidRows.has(firstRow + i)) continue;
        const playerId = normalizeId_(values[i][AMS.roster.col.id - 1]);
        if (!AMS.validation.id.test(playerId))
            continue;
        const ban = activeBans.get(playerId);
        if (!ban)
            continue;
        for (let c = 0; c < 10; c++)
            backgrounds[i][c] = AMS.colors.hardStop;
        backgroundsChanged = true;
        const warning = ban.type === 'NAP'
            ? ['NAP BAN', `${ban.duration} NAP ban is currently active for this Player ID.`, 'State/NAP restriction: leadership must review Ban List / Player Notes before membership is allowed.'].join('\n')
            : ['ALLIANCE BAN', `${ban.duration} Alliance ban is currently active for this Player ID.`, 'Alliance restriction: leadership must review Ban List / Player Notes before membership is allowed.'].join('\n');
        if (String(idNotes[i][0] || '') !== warning) {
            idNotes[i][0] = warning;
            idNotesChanged = true;
        }
    }
    if (backgroundsChanged)
        range.setBackgrounds(backgrounds);
    if (nameNotesChanged)
        nameRange.setNotes(nameNotes);
    if (idNotesChanged)
        idRange.setNotes(idNotes);
    refreshRosterFurnacePresentation_();
}
function refreshAms_() {
    refreshBanExpirationsUnlocked_();
    setupIncidentPlayerView_();
    const identityContext = refreshPlayerIdentity_();
    refreshLeadershipNotes_(identityContext);
    syncValidatedRosterDownstream_();
    rebuildRosterIdentityPresentation_();
    normalizeManagedSheetVisibility_(AMS.sheets.roster);
    normalizeManagedSheetVisibility_(AMS.sheets.banList);
}
function hardStopRow_(roster, row, message) {
    roster.getRange(row, 1, 1, 10).setBackground(AMS.colors.hardStop);
    setAmsRosterValidationNote_(roster.getRange(row, 3), 'AMS HARD STOP\n' + message);
    writeRosterValidationMetadata_(roster, 'HARD STOP', message);
    getAmsSpreadsheet_().toast(message, 'AMS HARD STOP', 8);
}
function quarantineInvalidRosterRows_(roster, rows) {
    rows.forEach(row => {
        roster.getRange(row, 1, 1, 10).setBackground(AMS.colors.hardStop);
        roster.getRange(row, 7).clearContent();
    });
}
function getLastRosterEntryRow_(roster) {
    const firstRow = AMS.rows.rosterFirst;
    const maxRows = roster.getMaxRows();
    if (maxRows < firstRow)
        return firstRow;
    const values = roster
        .getRange(firstRow, 1, maxRows - firstRow + 1, 10)
        .getDisplayValues();
    for (let i = values.length - 1; i >= 0; i--) {
        if (values[i].some(value => String(value || '').trim() !== '')) {
            return firstRow + i;
        }
    }
    return firstRow;
}
function clearStaleRosterValidation_(roster, lastRow) {
    const firstRow = AMS.rows.rosterFirst;
    const last = Math.max(firstRow, Number(lastRow) || firstRow);
    const rowCount = last - firstRow + 1;
    const rg = roster.getRange(firstRow, 1, rowCount, 10);
    const backgrounds = rg.getBackgrounds();
    backgrounds.forEach(row => row.forEach((background, index) => {
        if (String(background).toUpperCase() === AMS.colors.hardStop.toUpperCase()) {
            row[index] = null;
        }
    }));
    rg.setBackgrounds(backgrounds);
    const noteRange = roster.getRange(firstRow, AMS.roster.col.id, rowCount, 1);
    const notes = noteRange.getNotes();
    notes.forEach(row => {
        if (/^AMS HARD STOP/i.test(row[0] || ''))
            row[0] = '';
    });
    noteRange.setNotes(notes);
}
function findActiveBanRow_(banSheet, id) {
    if (!banSheet || banSheet.getLastRow() < 2)
        return 0;
    const data = banSheet.getRange(2, 1, banSheet.getLastRow() - 1, 11).getValues();
    for (let i = 0; i < data.length; i++) {
        if (normalizeId_(data[i][0]) === id &&
            String(data[i][10]) === AMS.ban.active) {
            return i + 2;
        }
    }
    return 0;
}
function refreshBanExpirationsUnlocked_() {
    const ss = getAmsSpreadsheet_();
    const b = ss.getSheetByName(AMS.sheets.banList);
    if (!b || b.getLastRow() < 2)
        return;
    const rowCount = b.getLastRow() - 1;
    const range = b.getRange(2, 1, rowCount, 11);
    const data = range.getValues();
    const liftRange = b.getRange(2, 7, rowCount, 1);
    const liftNotes = liftRange.getNotes();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let changed = false;
    const auditEvents = [];
    data.forEach((record, index) => {
        const duration = String(record[5]);
        const lift = record[6];
        const status = String(record[10]);
        if (duration !== 'Temporary' || !(lift instanceof Date) || status !== AMS.ban.active)
            return;
        const x = new Date(lift);
        x.setHours(0, 0, 0, 0);
        if (today < x)
            return;
        data[index][10] = AMS.ban.reviewStatus;
        liftNotes[index][0] = 'BAN PERIOD ELAPSED — LEADERSHIP REVIEW REQUIRED. AMS has not lifted this ban.';
        changed = true;
        auditEvents.push(record[0]);
    });
    if (changed) {
        range.setValues(data);
        liftRange.setNotes(liftNotes);
        auditEvents.forEach(id => writeAuditLog_('BAN REVIEW DUE', AMS.sheets.banList, `Player ID ${id}`, 'Active', AMS.ban.reviewStatus, 'Lift date reached', ''));
    }
    sortBanList_();
}
function findPowerRow_(pt, id) {
    if (pt.getLastRow() < AMS.rows.powerFirst) {
        return 0;
    }
    const v = pt.getRange(AMS.rows.powerFirst, 2, pt.getLastRow() - AMS.rows.powerFirst + 1, 1).getValues();
    for (let i = 0; i < v.length; i++) {
        if (normalizeId_(v[i][0]) === id) {
            return i + AMS.rows.powerFirst;
        }
    }
    return 0;
}
function removePowerTrackerMemberById_(id) {
    const pt = getAmsSpreadsheet_().getSheetByName(AMS.sheets.powerTracker);
    if (!pt) {
        return;
    }
    const row = findPowerRow_(pt, id);
    if (row) {
        pt.deleteRow(row);
    }
}
function handleMemberReportsEdit_(e) {
    const r = e.range.getRow();
    const c = e.range.getColumn();
    if (r < 2 || c !== 6) {
        return;
    }
    const s = e.range.getSheet();
    const v = String(e.value || '');
    if ([AMS.memberReportStatuses.resolved, AMS.memberReportStatuses.closedNoAction].includes(v)) {
        s.getRange(r, 10).setValue(new Date());
    }
    else {
        s.getRange(r, 10).clearContent();
    }
    normalizeManagedSheetVisibility_(s);
}
function findRosterRowById_(roster, id) {
    if (!AMS.validation.id.test(normalizeId_(id))) {
        return 0;
    }
    const last = getLastRosterMemberRow_(roster);
    if (last < 3) {
        return 0;
    }
    const vals = roster.getRange(3, 3, last - 2, 1).getValues();
    for (let i = 0; i < vals.length; i++) {
        if (normalizeId_(vals[i][0]) === normalizeId_(id)) {
            return i + 3;
        }
    }
    return 0;
}
function normalizeHeader_(v) {
    return String(v || '')
        .toLowerCase()
        .replace(/[_-]+/g, ' ')
        .replace(/[^a-z0-9 ]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}
function findFormHeaderIndex_(raw, candidates) {
    const headers = raw.headers.map(normalizeHeader_);
    const cands = candidates.map(normalizeHeader_);
    for (const c of cands) {
        let i = headers.findIndex(h => h === c);
        if (i >= 0) {
            return i;
        }
    }
    for (const c of cands) {
        let i = headers.findIndex(h => h.startsWith(c));
        if (i >= 0) {
            return i;
        }
    }
    for (const c of cands) {
        let i = headers.findIndex(h => h.includes(c));
        if (i >= 0) {
            return i;
        }
    }
    return -1;
}
function getOptionalFormValue_(raw, candidates) {
    const i = findFormHeaderIndex_(raw, candidates);
    return i >= 0 ? raw.values[i] : '';
}
function getRequiredFormValue_(raw, candidates, label) {
    const i = findFormHeaderIndex_(raw, candidates);
    if (i < 0) {
        throw new Error(`Form mapping failed: could not resolve header for ${label}. Current headers: ${raw.headers.join(' | ')}`);
    }
    return raw.values[i];
}
function getSubmissionSourceKey_(e) {
    return `${e.range.getSheet().getSheetId()}:${e.range.getRow()}`;
}
function findSubmissionRecordBySourceKeyDetail_(destination, key) {
    if (destination.getLastRow() < 2)
        return null;
    const range = destination.getRange(2, 1, destination.getLastRow() - 1, 1);
    const notes = range.getNotes();
    const values = range.getDisplayValues();
    for (let i = 0; i < notes.length; i++) {
        const note = String(notes[i][0] || '');
        if (note.includes(`AMS SOURCE KEY: ${key}`)) {
            return {
                row: i + 2,
                id: values[i][0],
                complete: /AMS TRANSACTION COMPLETE/.test(note)
            };
        }
    }
    return null;
}
function findSubmissionRecordBySourceKey_(destination, key) {
    const record = findSubmissionRecordBySourceKeyDetail_(destination, key);
    return record && record.complete ? record.id : '';
}
function markRawSubmissionProcessed_(e, id) {
    const cell = e.range.getSheet().getRange(e.range.getRow(), 1);
    const existing = String(cell.getNote() || '');
    const marker = `AMS PROCESSED: ${id}`;
    if (!existing.includes(marker)) {
        cell.setNote(existing ? existing + '\n' + marker : marker);
    }
}
function fmtDate_(v) {
    if (!(v instanceof Date)) {
        return String(v || '');
    }
    return Utilities.formatDate(v, Session.getScriptTimeZone() || 'America/New_York', 'MM/dd/yyyy');
}
function getUser_() {
    try {
        return Session.getActiveUser().getEmail() || 'Leadership';
    }
    catch (e) {
        return 'Leadership';
    }
}
function installTriggersUnlocked_(ss) {
    PropertiesService.getScriptProperties().setProperty(AMS.setup.spreadsheetIdProperty, ss.getId());
    const names = new Set([
        'onFormSubmit',
        'handleAmsEdit_',
        'auditOnEdit_',
        'auditOnChange_',
        'refreshBanExpirations_',
        'refreshVersionControl_'
    ]);
    const retiredNames = new Set([
        'cleanupAbandonedRosterRows_',
        'onEdit'
    ]);
    ScriptApp.getProjectTriggers().forEach(trigger => {
        const handler = trigger.getHandlerFunction();
        if (names.has(handler) || retiredNames.has(handler)) {
            ScriptApp.deleteTrigger(trigger);
        }
    });
    ScriptApp.newTrigger('onFormSubmit')
        .forSpreadsheet(ss)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('handleAmsEdit_')
        .forSpreadsheet(ss)
        .onEdit()
        .create();
    ScriptApp.newTrigger('auditOnEdit_')
        .forSpreadsheet(ss)
        .onEdit()
        .create();
    ScriptApp.newTrigger('auditOnChange_')
        .forSpreadsheet(ss)
        .onChange()
        .create();
    ScriptApp.newTrigger('refreshVersionControl_')
        .timeBased()
        .everyHours(6)
        .create();
    ScriptApp.newTrigger('refreshBanExpirations_')
        .timeBased()
        .everyDays(1)
        .atHour(4)
        .create();
}
/**
 * PUBLIC INSTALLATION: run setupNewAms() in a new, blank Google Sheet.
 * Copy only tab layout/formulas from the owner's template; spreadsheet-bound
 * development Apps Script is NOT copied by Sheet.copyTo(). Publisher must grant
 * intended installers Viewer access to this template before public release.
 */
const AMS_NEW_INSTALL = Object.freeze({
    blueprintId: '15RZt_H1vEuiM9KBipTIEMhuAHK-Xla2m_mtFrc5D__E',
    phaseProperty: 'AMS_NEW_INSTALL_PHASE',
    sourceProperty: 'AMS_NEW_INSTALL_SOURCE_ID',
    phases: Object.freeze({ building: 'BUILDING', forms: 'AWAITING_FORMS', complete: 'COMPLETE' }),
    incidentSeedName: '_AMS Seed Incident Reports',
    memberSeedName: '_AMS Seed Member Requests',
    tabs: Object.freeze([
        'Intro', 'Roster', 'Power Tracker', 'Member Reports', 'Incident Log',
        'Ban List', 'Departure Log', 'Player Notes', 'Player Identity',
        'Config', 'AMS Log', 'Player_id', 'Incident Reports',
        'Member Requests', '_Identity Data'
    ])
});
function amsNewAssertEmptySeed_(sheet) {
    if (!sheet)
        return;
    if (sheet.getLastRow() > 1) {
        throw new Error(`${sheet.getName()} has responses; AMS will not overwrite or delete them.`);
    }
    if (sheet.getFormUrl()) {
        throw new Error(`${sheet.getName()} is linked to a Form; AMS will not replace it.`);
    }
}
// Question text and choices verified against the two source Forms on 2026-09-23.
// File Upload settings are not exposed by FormApp; see INSTALLATION.md.
const AMS_NEW_FORMS = Object.freeze({
    incident: {
        title: 'AMS Incident Report Form',
        description: 'This form is used by alliance leadership to document incidents involving a player. Complete the information below based on what occurred. AMS will handle the appropriate recordkeeping from the submitted information.',
        uploadTitle: 'Supporting Evidence (Upload any screenshots or other evidence related to this incident)',
        uploadIndex: 5,
        uploadLimit: '10 files, 10 MB per file',
        items: [
            ['LIST', 'Who is filling out this form?', true, ['[R5]', '[R4](1)', '[R4](2)', '[R4](3)', '[R4](4)', '[R4](5)', '[R4](6)']],
            ['DATE', 'Date Incident Occured', true],
            ['TEXT', 'Player ID of player being reported (copy the player ID by tapping the button in game as shown)', true],
            ['TEXT', 'Who are we talking about? (AKA: Who fucked up?)', true],
            ['PARAGRAPH_TEXT', 'What happened? Give a brief summary of the incident. Supporting screenshots can be uploaded at the end.', true],
            ['MULTIPLE_CHOICE', 'What action was taken?', true, [
                'Spoke with Player in DMs / No Formal Action Taken', 'Warning Issued',
                'Final Warning Issued', 'Player Removed', 'Alliance Temporary Ban',
                'Alliance Permanent Ban', 'NAP Temporary Ban', 'NAP Permanent Ban'
            ]],
            ['PAGE_BREAK', 'Temporary Ban Details', false],
            ['DATE', 'When does the ban start?', true],
            ['DATE', 'When is the ban over?', true]
        ]
    },
    member: {
        title: 'AMS Member Request Form',
        description: "Please submit this form whenever you need help with something or simply want to make leadership aware of something going on. This will help us create a permanent help inbox that doesn't get overlooked or lost in an ocean of DMs.",
        uploadTitle: 'Attach any screenshots here (optional).  Note: This form can only accept up to 10 screenshots.  If you have more or are unable to attach them all, please open a ticket in the discord (see above)',
        uploadIndex: 3,
        uploadLimit: '10 files, 100 MB per file',
        items: [
            ['TEXT', 'Who are you? (You can leave this blank if you want to be anonymous)', false],
            ['PARAGRAPH_TEXT', 'What do you need help with? Or alternatively, what is going on?', true],
            ['SECTION_HEADER', 'Alternative help route', false]
        ]
    }
});
function amsNewFormKey_(type, suffix) {
    return `AMS_NEW_FORM_${type.toUpperCase()}_${suffix}`;
}
function amsNewTypedItem_(item, type) {
    const casts = { TEXT: 'asTextItem', PARAGRAPH_TEXT: 'asParagraphTextItem',
        LIST: 'asListItem', DATE: 'asDateItem', MULTIPLE_CHOICE: 'asMultipleChoiceItem',
        PAGE_BREAK: 'asPageBreakItem', SECTION_HEADER: 'asSectionHeaderItem' };
    return item[casts[type]]();
}
function amsNewEnsureForm_(ss, props, type) {
    const schema = AMS_NEW_FORMS[type];
    const key = amsNewFormKey_(type, 'ID');
    let id = props.getProperty(key);
    const titleKey = amsNewFormKey_(type, 'CREATION_TITLE');
    let form;
    if (id === 'CREATING') {
        // The creation intent/title is persisted BEFORE FormApp.create().
        // Recover only a unique exact title, never adopt a lookalike Form.
        const pendingTitle = props.getProperty(titleKey);
        if (!pendingTitle) throw new Error(`${schema.title}: missing recovery title; setup stopped to avoid duplicate Forms.`);
        const files = DriveApp.getFilesByName(pendingTitle);
        const matches = [];
        while (files.hasNext()) {
            const file = files.next();
            if (file.getMimeType() === MimeType.GOOGLE_FORMS) matches.push(file.getId());
        }
        if (matches.length !== 1) throw new Error(`${schema.title}: found ${matches.length} exact recovery Forms. ` +
            'Setup stopped safely; do not reset properties or create a replacement Form.');
        form = FormApp.openById(matches[0]);
        id = form.getId();
        props.setProperty(key, id);
    }
    if (!id) {
        // Unique durable title permits safe recovery if interrupted between
        // creating the Form and persisting its ID. The title is replaced only
        // AFTER saving the ID.
        const creationTitle = `${schema.title} — AMS ${Utilities.getUuid()}`;
        props.setProperty(titleKey, creationTitle);
        props.setProperty(key, 'CREATING');
        form = FormApp.create(creationTitle, false);
        id = form.getId();
        props.setProperty(key, id);
    } else if (!form) {
        // Deleted/inaccessible stored Form IDs must never trigger replacements.
        form = FormApp.openById(id);
    }
    form.setTitle(`${schema.title} — ${ss.getName()}`);
    console.log(`${schema.title} — EDIT: ${form.getEditUrl()}`);
    if (props.getProperty(amsNewFormKey_(type, 'READY')) === 'true')
        return form;
    if (form.getResponses().length)
        throw new Error(`${schema.title} already has responses. Setup will not rebuild its questions.`);
    if (form.supportsAdvancedResponderPermissions()) form.setPublished(false);
    form.setAcceptingResponses(false);
    form.setDescription(schema.description).setCollectEmail(false)
        .setAllowResponseEdits(false).setLimitOneResponsePerUser(false)
        .setIsQuiz(false).setShuffleQuestions(false).setProgressBar(false)
        .setPublishingSummary(false).setShowLinkToRespondAgain(true);
    const add = { TEXT: 'addTextItem', PARAGRAPH_TEXT: 'addParagraphTextItem',
        LIST: 'addListItem', DATE: 'addDateItem', MULTIPLE_CHOICE: 'addMultipleChoiceItem',
        PAGE_BREAK: 'addPageBreakItem', SECTION_HEADER: 'addSectionHeaderItem' };
    let items = form.getItems();
    if (items.length > schema.items.length)
        throw new Error(`${schema.title}: finish the initial setup run before adding questions.`);
    // Resume an interrupted append in place. Never clear a Form or delete an item.
    schema.items.forEach((spec, i) => {
        const [kind, title, required, choices] = spec;
        let item = items[i];
        if (item && (String(item.getType()) !== kind ||
            (item.getTitle() && item.getTitle() !== title)))
            throw new Error(`${schema.title}: unexpected question ${i + 1}; nothing will be replaced.`);
        item = item ? amsNewTypedItem_(item, kind) : form[add[kind]]();
        item.setTitle(title);
        if (kind !== 'PAGE_BREAK' && kind !== 'SECTION_HEADER') item.setRequired(required);
        if (kind === 'DATE') item.setIncludesYear(true);
        if (kind === 'LIST') item.setChoiceValues(choices);
        if (kind === 'PAGE_BREAK') item.setHelpText('If either Temporary Alliance Ban or Temporary NAP Ban was selected above, please give additional data so AMS can track it.');
        if (kind === 'SECTION_HEADER') item.setHelpText('If your alliance provides a private Discord ticket channel, you may use it instead of uploading screenshots here. Ask leadership for the correct link. Discord tickets are not automatically recorded in AMS.');
    });
    items = form.getItems();
    if (type === 'incident') {
        const action = items[5].asMultipleChoiceItem();
        const page = items[6].asPageBreakItem();
        action.setChoices(schema.items[5][3].map(value => action.createChoice(value,
            value === 'Alliance Temporary Ban' || value === 'NAP Temporary Ban'
                ? page : FormApp.PageNavigationType.SUBMIT)));
    }
    const destination = form.getDestinationId();
    if (destination && destination !== ss.getId())
        throw new Error(`${schema.title} is linked to another workbook; AMS will not change that destination.`);
    if (!destination) form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
    props.setProperty(amsNewFormKey_(type, 'READY'), 'true');
    return form;
}
function amsNewEnsureForms_(ss, props) {
    // Do not adopt copied Forms or create additional Forms in an existing copied-Form setup.
    const knownIds = ['incident', 'member'].map(type => props.getProperty(amsNewFormKey_(type, 'ID')));
    ss.getSheets().forEach(sheet => {
        const url = sheet.getFormUrl();
        if (url && !knownIds.includes(FormApp.openByUrl(url).getId()))
            throw new Error('An unrecognized Form is already linked to this workbook. Setup stopped without creating Forms. Contact support to preserve this installation.');
    });
    return { incident: amsNewEnsureForm_(ss, props, 'incident'),
        member: amsNewEnsureForm_(ss, props, 'member') };
}
function amsNewVerifyForm_(ss, form, type) {
    const schema = AMS_NEW_FORMS[type];
    const fail = message => { throw new Error(`${schema.title}: ${message} Edit: ${form.getEditUrl()}`); };
    if (form.getDestinationType() !== FormApp.DestinationType.SPREADSHEET || form.getDestinationId() !== ss.getId())
        fail('response destination must be THIS AMS spreadsheet.');
    if (form.collectsEmail() || form.hasLimitOneResponsePerUser() || form.canEditResponse() ||
        form.getShuffleQuestions() || form.isQuiz() || form.isPublishingSummary())
        fail('keep email collection, one-response limit, response editing, shuffled questions, quiz mode and results summary OFF.');
    if (form.getResponses().length) fail('responses were submitted before setup completed. Setup stopped to preserve them; contact support before continuing.');
    const items = form.getItems();
    const uploads = items.filter(item => String(item.getType()) === 'FILE_UPLOAD');
    if (uploads.length !== 1) fail(`add exactly one File Upload question titled "${schema.uploadTitle}"; found ${uploads.length}.`);
    const upload = uploads[0];
    if (normalizeHeader_(upload.getTitle()) !== normalizeHeader_(schema.uploadTitle)) fail('the File Upload question title does not match INSTALLATION.md.');
    if (upload.getIndex() !== schema.uploadIndex) fail(type === 'incident'
        ? 'place Supporting Evidence immediately BEFORE "What action was taken?", in the first section.'
        : 'place the screenshot File Upload question at the END, after Alternative help route.');
    const normal = items.filter(item => item.getId() !== upload.getId());
    if (normal.length !== schema.items.length) fail('unexpected or missing questions/sections; preserve the generated structure.');
    schema.items.forEach(([kind, title, required, choices], i) => {
        const item = normal[i];
        if (String(item.getType()) !== kind || normalizeHeader_(item.getTitle()) !== normalizeHeader_(title))
            fail(`question/section ${i + 1} must be ${kind}: "${title}".`);
        const typed = amsNewTypedItem_(item, kind);
        if (kind !== 'PAGE_BREAK' && kind !== 'SECTION_HEADER' && typed.isRequired() !== required)
            fail(`"${title}" must be ${required ? 'required' : 'optional'}.`);
        if (kind === 'DATE' && !typed.includesYear()) fail(`"${title}" must include the year.`);
        if (choices && JSON.stringify(typed.getChoices().map(c => c.getValue())) !== JSON.stringify(choices))
            fail(`restore the generated choices for "${title}" before finishing setup.`);
    });
    if (type === 'incident') {
        const page = normal[6];
        normal[5].asMultipleChoiceItem().getChoices().forEach(choice => {
            const temporary = ['Alliance Temporary Ban', 'NAP Temporary Ban'].includes(choice.getValue());
            if (temporary) {
                const target = choice.getGotoPage();
                if (!target || target.getId() !== page.getId()) fail('temporary ban choices must go to Temporary Ban Details.');
            } else if (choice.getPageNavigationType() !== FormApp.PageNavigationType.SUBMIT)
                fail('non-temporary-ban choices must submit the form.');
        });
    }
    // FormApp exposes FILE_UPLOAD identity/type but no required/size/count getters.
    // Never treat a matching spreadsheet header as proof of an actual upload item.
    const expected = schema.items.filter(spec => !['PAGE_BREAK', 'SECTION_HEADER'].includes(spec[0]))
        .map(spec => normalizeHeader_(spec[1]));
    expected.push(normalizeHeader_(schema.uploadTitle));
    const sheets = ss.getSheets().filter(sheet => {
        const url = sheet.getFormUrl();
        return url && FormApp.openByUrl(url).getId() === form.getId();
    });
    if (sheets.length !== 1) fail(`expected one linked response sheet; found ${sheets.length}. Wait briefly and rerun setupNewAms().`);
    const sheet = sheets[0];
    if (sheet.getLastRow() > 1) fail('the response sheet already contains records; setup stopped to preserve them.');
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0].map(normalizeHeader_);
    if (headers[0] !== 'timestamp' || headers.filter(h => h === 'timestamp').length !== 1) fail('the response sheet must start with one Timestamp column.');
    expected.forEach(header => {
        if (headers.filter(h => h === header).length !== 1) fail(`response header missing or duplicated: "${header}". Wait for Google to update the response sheet, then rerun setupNewAms().`);
    });
    const allowed = ['timestamp', ...expected];
    if (headers.some(h => h && !allowed.includes(h))) fail('unexpected response headers; do not reuse a response sheet from a different Form.');
    return [{ sheet, formUrl: form.getEditUrl(), form }];
}
function amsNewFindLinkedForms_(ss, props) {
    const forms = {};
    ['incident', 'member'].forEach(type => {
        const id = props.getProperty(amsNewFormKey_(type, 'ID'));
        if (!id || id === 'CREATING') throw new Error(`The generated ${type} Form ID is unavailable. Run setupNewAms() again; do not create a replacement Form.`);
        forms[type] = amsNewVerifyForm_(ss, FormApp.openById(id), type);
    });
    if (forms.incident[0].form.getId() === forms.member[0].form.getId())
        throw new Error('The two generated Forms must have different IDs.');
    return forms;
}
function amsNewExplainUploads_(ss, forms) {
    console.log('AMS setup: checking File Upload questions before production finalization.');
    ['incident', 'member'].forEach(type => {
        const schema = AMS_NEW_FORMS[type];
        console.log(`${schema.title}: ${forms[type].getEditUrl()}\nAdd File Upload: ${schema.uploadTitle}\nRequired OFF; specific file types OFF; ${schema.uploadLimit}. See INSTALLATION.md for placement and total upload limit.`);
    });
    console.log('After adding both upload questions, run setupNewAms() again.');
    ss.toast('Open Execution log for your two Form edit links. Add the upload questions, then run setupNewAms again.', 'AMS SETUP — WAITING FOR UPLOADS', 20);
}
function amsNewValidateCore_(ss) {
    const expected = [
        ['Roster', 'A1', 'In-Game Name'],
        ['Power Tracker', 'B4', 'Player ID'],
        ['Incident Log', 'A1', 'Incident Number'],
        ['Incident Log', 'J1', 'Player Incident View'],
        ['Ban List', 'A1', 'Player ID'],
        ['Member Reports', 'A1', 'Report ID']
    ];
    expected.forEach(([name, address, label]) => {
        const sheet = ss.getSheetByName(name);
        if (!sheet || String(sheet.getRange(address).getDisplayValue()).trim() !== label) {
            throw new Error(`AMS layout mismatch at ${name}!${address}. No user records changed.`);
        }
    });
}
function amsNewBuildSheets_(ss, props) {
    const templateId = AMS_NEW_INSTALL.blueprintId;
    if (!templateId || templateId.startsWith('REPLACE_WITH_')) {
        throw new Error('AMS release is missing its approved Google Sheets blueprint ID.');
    }
    if (templateId === ss.getId())
        throw new Error('Do not install AMS into its blueprint.');
    const phase = props.getProperty(AMS_NEW_INSTALL.phaseProperty);
    if (!phase) {
        const initial = ss.getSheets();
        if (initial.length !== 1 || initial[0].getLastRow() !== 0 ||
            initial[0].getLastColumn() !== 0 || initial[0].getFormUrl()) {
            throw new Error('Run setupNewAms() only in a NEW, EMPTY Google Spreadsheet.');
        }
    }
    else if (phase !== AMS_NEW_INSTALL.phases.building) {
        throw new Error(`Unexpected install phase: ${phase}.`);
    }
    const blueprint = SpreadsheetApp.openById(templateId);
    AMS_NEW_INSTALL.tabs.forEach(name => {
        if (!blueprint.getSheetByName(name)) {
            throw new Error(`AMS release blueprint is missing ${name}.`);
        }
    });
    props.setProperty(AMS_NEW_INSTALL.sourceProperty, templateId);
    props.setProperty(AMS_NEW_INSTALL.phaseProperty, AMS_NEW_INSTALL.phases.building);
    AMS_NEW_INSTALL.tabs.forEach(name => {
        if (ss.getSheetByName(name))
            return;
        const pending = ss.getSheets().filter(sh => sh.getName() === `Copy of ${name}`);
        if (pending.length === 1) {
            pending[0].setName(name);
            if (pending[0].isSheetHidden())
                pending[0].showSheet();
            return;
        }
        if (name === AMS.sheets.rawIncidents &&
            ss.getSheetByName(AMS_NEW_INSTALL.incidentSeedName))
            return;
        if (name === AMS.sheets.rawMemberRequests &&
            ss.getSheetByName(AMS_NEW_INSTALL.memberSeedName))
            return;
        const clone = blueprint.getSheetByName(name).copyTo(ss);
        clone.setName(name);
        if (clone.isSheetHidden())
            clone.showSheet();
        console.log(`AMS created ${name}`);
    });
    amsNewValidateCore_(ss);
    const seeds = [
        [AMS.sheets.rawIncidents, AMS_NEW_INSTALL.incidentSeedName],
        [AMS.sheets.rawMemberRequests, AMS_NEW_INSTALL.memberSeedName]
    ];
    seeds.forEach(([name, seedName]) => {
        const existing = ss.getSheetByName(name);
        const parked = ss.getSheetByName(seedName);
        if (existing && parked)
            throw new Error(`Conflicting seed sheets: ${name} and ${seedName}.`);
        amsNewAssertEmptySeed_(existing || parked);
    });
    seeds.forEach(([name, seedName]) => {
        const sheet = ss.getSheetByName(name);
        if (sheet)
            sheet.setName(seedName);
    });
    const config = ss.getSheetByName(AMS.sheets.config);
    config.getRange('H2').setValue(AMS.version);
    config.getRange('H5').setValue('Community Build');
    const intro = ss.getSheetByName(AMS.sheets.intro);
    intro.getRange('A38').setValue(`v${AMS.version}`);
    intro.getRange('G38').setValue('CHECK RELEASES');
    intro.getRange('D38').clearContent();
    config.getRange('H3:H4').clearContent();
    config.getRange('H4').setValue('CHECK RELEASES');
    applyRosterValidations_(ss.getSheetByName(AMS.sheets.roster));
    // The approved 1.6.1 layout has its metadata title at K1. Migrate that
    // presentation only; preserve the alliance-owned metadata cells in L3:L9.
    installAmsAesthetics_(ss);
    const reports = ss.getSheetByName(AMS.sheets.memberReports);
    reports.getRange(2, 7, reports.getMaxRows() - 1, 1)
        .clearDataValidations();
    setupIncidentPlayerView_();
    normalizeAllManagedSheetVisibility_();
    const introSheet = ss.getSheetByName('Intro');
    const starter = ss.getSheets().find(sheet => !AMS_NEW_INSTALL.tabs.includes(sheet.getName()) &&
        ![AMS_NEW_INSTALL.incidentSeedName,
            AMS_NEW_INSTALL.memberSeedName].includes(sheet.getName()));
    if (starter && starter.getLastRow() === 0 && starter.getLastColumn() === 0 &&
        !starter.getFormUrl())
        ss.deleteSheet(starter);
    AMS_NEW_INSTALL.tabs.forEach((name, index) => {
        const sheet = ss.getSheetByName(name) || ss.getSheetByName(name === AMS.sheets.rawIncidents ? AMS_NEW_INSTALL.incidentSeedName :
            name === AMS.sheets.rawMemberRequests ? AMS_NEW_INSTALL.memberSeedName : name);
        ss.setActiveSheet(sheet);
        ss.moveActiveSheet(index + 1);
    });
    const hidden = ['Config', 'AMS Log', 'Player_id', '_Identity Data',
        AMS_NEW_INSTALL.incidentSeedName, AMS_NEW_INSTALL.memberSeedName];
    hidden.forEach(name => { const sh = ss.getSheetByName(name); if (sh && !sh.isSheetHidden())
        sh.hideSheet(); });
    ss.setActiveSheet(introSheet);
    PropertiesService.getScriptProperties().setProperty(AMS.setup.spreadsheetIdProperty, ss.getId());
    props.setProperty(AMS.setup.spreadsheetIdProperty, ss.getId());
    props.setProperty(AMS_NEW_INSTALL.phaseProperty, AMS_NEW_INSTALL.phases.forms);
    console.log('AMS workbook created. Preparing your two Forms.');
}
function amsNewFinishForms_(ss, props) {
    amsNewValidateCore_(ss);
    const forms = amsNewFindLinkedForms_(ss, props);
    const pairs = [
        [forms.incident[0].sheet, AMS.sheets.rawIncidents,
            AMS_NEW_INSTALL.incidentSeedName],
        [forms.member[0].sheet, AMS.sheets.rawMemberRequests,
            AMS_NEW_INSTALL.memberSeedName]
    ];
    pairs.forEach(([linked, canonical, seedName]) => {
        const existing = ss.getSheetByName(canonical);
        if (existing && existing.getSheetId() !== linked.getSheetId()) {
            throw new Error(`${canonical} is occupied by another tab. No changes made.`);
        }
        const seed = ss.getSheetByName(seedName);
        if (seed)
            amsNewAssertEmptySeed_(seed);
    });
    pairs.forEach(([linked, canonical]) => {
        if (linked.getName() !== canonical)
            linked.setName(canonical);
        if (!linked.isSheetHidden())
            linked.hideSheet();
    });
    pairs.forEach(([, , seedName]) => {
        const seed = ss.getSheetByName(seedName);
        if (seed)
            ss.deleteSheet(seed);
    });
    setupAuditLog_();
    normalizeAllManagedSheetVisibility_();
    const priorTriggerIds = new Set(ScriptApp.getProjectTriggers().map(t => t.getUniqueId()));
    try {
        installTriggersUnlocked_(ss);
        refreshVersionControl_();
        ['incident', 'member'].forEach(type => {
            const form = forms[type][0].form;
            if (form.supportsAdvancedResponderPermissions()) form.setPublished(true);
            form.setAcceptingResponses(true);
            console.log(`${AMS_NEW_FORMS[type].title} — RESPOND: ${form.getPublishedUrl()}`);
        });
        props.setProperty(AMS_NEW_INSTALL.phaseProperty, AMS_NEW_INSTALL.phases.complete);
    } catch (error) {
        // Best-effort rollback of this attempt; retain all Forms, sheets and records.
        ['incident', 'member'].forEach(type => {
            try { forms[type][0].form.setAcceptingResponses(false); } catch (closeError) { console.error(String(closeError)); }
        });
        ScriptApp.getProjectTriggers().forEach(trigger => {
            if (!priorTriggerIds.has(trigger.getUniqueId())) ScriptApp.deleteTrigger(trigger);
        });
        throw error;
    }
    ss.toast('AMS installed. Submit one fictional incident and one member request to verify.', 'AMS READY', 10);
    console.log('AMS installed; both Forms linked; production triggers active.');
}
function setupNewAms() {
    const lock = LockService.getDocumentLock();
    if (!lock) throw new Error('Run setupNewAms from the spreadsheet-bound Apps Script.');
    let verifiedUploadIds;
    let ss;
    let props;
    lock.waitLock(30000);
    try {
        ss = SpreadsheetApp.getActiveSpreadsheet();
        if (!ss) throw new Error('Open your NEW BLANK spreadsheet → Extensions → Apps Script.');
        props = PropertiesService.getDocumentProperties();
        const phase = props.getProperty(AMS_NEW_INSTALL.phaseProperty);
        if (phase === AMS_NEW_INSTALL.phases.complete) {
            console.log('AMS is already installed. Existing alliance data and triggers were not changed.');
            return;
        }
        if (phase !== AMS_NEW_INSTALL.phases.forms) {
            amsNewBuildSheets_(ss, props);
            amsNewExplainUploads_(ss, amsNewEnsureForms_(ss, props));
            return;
        }
        const forms = amsNewEnsureForms_(ss, props);
        amsNewExplainUploads_(ss, forms);
        amsNewFindLinkedForms_(ss, props);
        verifiedUploadIds = ['incident', 'member'].map(type =>
            forms[type].getId() + ':' + forms[type].getItems()
                .find(item => String(item.getType()) === 'FILE_UPLOAD').getId()).join('|');
    } finally {
        lock.releaseLock();
    }
    // UI alerts suspend execution and do not retain locks. Confirm outside the lock,
    // then reacquire and revalidate everything before making finalization changes.
    const ui = SpreadsheetApp.getUi();
    const answer = ui.alert('AMS — confirm manual upload settings',
        'AMS verified the two File Upload items, question structure and spreadsheet links. ' +
        'Google FormApp cannot read the upload limits or Required toggle. Confirm that you checked BOTH Forms:\n\n' +
        'Incident: Required OFF; specific file types OFF; 10 files; 10 MB per file.\n' +
        'Member Request: Required OFF; specific file types OFF; 10 files; 100 MB per file.\n' +
        'Both: total upload limit 100 GB (subject to available Google storage).\n\n' +
        'Select Yes only after checking these settings. No leaves setup waiting without installing triggers.',
        ui.ButtonSet.YES_NO);
    if (answer !== ui.Button.YES) {
        console.log('Setup is waiting. Check the upload settings, then run setupNewAms() again.');
        return;
    }
    lock.waitLock(30000);
    try {
        if (props.getProperty(AMS_NEW_INSTALL.phaseProperty) === AMS_NEW_INSTALL.phases.complete) return;
        if (props.getProperty(AMS_NEW_INSTALL.phaseProperty) !== AMS_NEW_INSTALL.phases.forms)
            throw new Error('Setup state changed during confirmation. Run setupNewAms() again.');
        const forms = amsNewFindLinkedForms_(ss, props);
        const currentUploadIds = ['incident', 'member'].map(type => {
            const form = forms[type][0].form;
            return form.getId() + ':' + form.getItems()
                .find(item => String(item.getType()) === 'FILE_UPLOAD').getId();
        }).join('|');
        if (currentUploadIds !== verifiedUploadIds)
            throw new Error('A Form or upload question changed during confirmation. Run setupNewAms() again.');
        amsNewFinishForms_(ss, props);
    } finally {
        lock.releaseLock();
    }
}
