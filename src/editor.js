const colors = require("./colors");

// Reference: https://code.visualstudio.com/api/references/theme-color

const contrast = {
    "contrastActiveBorder": colors.hidden,
    "contrastBorder": colors.hidden,
}

const base = {
    "focusBorder": colors.foreground,
    "foreground": colors.text,
    "disabledForeground": colors.text + "77",
    "selection.background": colors.foreground,
    "descriptionForeground": colors.text + "AA",
    "errorForeground": colors.error,
    "icon.foreground": colors.text,
    "widget.shadow": colors.shadow,
    "sash.hoverBorder": colors.foreground,
};

const window = {
    "window.activeBorder": colors.hidden,
    "window.inactiveBorder": colors.hidden,
};

const text = {
    /* "textBlockQuote.background": colors.test, */ //? Unknown
    /* "textBlockQuote.border": colors.test, */     //? Unknown
    /* "textCodeBlock.background": colors.test, */  //? Unknown
    "textLink.activeForeground": colors.foreground,
    "textLink.foreground": colors.foregroundLight,
    /* "textPreformat.foreground": colors.test, */ //* Unset
    /* "textSeparator.foreground": colors.test, */ //? Unknown
};

const actions = {
    "toolbar.hoverBackground": colors.white + "17",
    "toolbar.hoverOutline": colors.hidden,
    "toolbar.activeBackground": colors.white + "33"
};

const button = {
    "button.background": colors.foreground,
    "button.foreground": colors.text,
    "button.border": colors.hidden,
    "button.separator": colors.text,
    "button.hoverBackground": colors.foregroundLight,
    "button.secondaryForeground": colors.text,
    "button.secondaryBackground": colors.backgroundLighter,
    "button.secondaryHoverBackground": colors.white + "33",
};

const checkbox = {
    "checkbox.background": colors.backgroundLighter,
    "checkbox.foreground": colors.text,
    "checkbox.border": colors.hidden
};

const dropdown = {
    "dropdown.background": colors.backgroundLighter,
    "dropdown.listBackground": colors.backgroundLighter,
    "dropdown.border": colors.backgroundLighter,
    "dropdown.foreground": colors.text,
};

const input = {
    "input.background": colors.backgroundLighter,
    "input.border": colors.hidden,
    "input.foreground": colors.text,
    "input.placeholderForeground": colors.text + "77",

    "inputOption.activeBackground": colors.foreground,
    "inputOption.activeBorder": colors.hidden,
    "inputOption.activeForeground": colors.text,
    "inputOption.hoverBackground": colors.foreground + "77",

    "inputValidation.errorBackground": colors.errorBackground,
    "inputValidation.errorForeground": colors.text,
    "inputValidation.errorBorder": colors.error,

    "inputValidation.infoBackground": colors.infoBackground,
    "inputValidation.infoForeground": colors.text,
    "inputValidation.infoBorder": colors.info,

    "inputValidation.warningBackground": colors.warningBackground,
    "inputValidation.warningForeground": colors.text,
    "inputValidation.warningBorder": colors.warning,
};

const scrollbar = {
    "scrollbar.shadow": colors.shadow,
    "scrollbarSlider.activeBackground": colors.foreground + "BB",
    "scrollbarSlider.background": colors.foreground + "77",
    "scrollbarSlider.hoverBackground": colors.foreground + "99",
};

const badge = {
    "badge.foreground": colors.text,
    "badge.background": colors.foreground
};

const progressBar = {
    "progressBar.background": colors.foreground,
};

const list = {
    "list.activeSelectionBackground": colors.foreground,
    "list.activeSelectionForeground": colors.text,
    "list.activeSelectionIconForeground": colors.text,

    "list.dropBackground": colors.backgroundLighter,
    "list.focusBackground": colors.foreground + "77",
    "list.focusForeground": colors.text,
    /* "list.focusHighlightForeground": colors.test, */ //? Unknown
    "list.focusOutline": colors.hidden,
    "list.focusAndSelectionOutline": colors.foreground,
    /* "list.highlightForeground": colors.test, */ //? Unknown
    "list.hoverBackground": colors.background,
    "list.hoverForeground": colors.text,

    "list.inactiveSelectionBackground": colors.foreground + "55",
    "list.inactiveSelectionForeground": colors.text,
    "list.inactiveSelectionIconForeground": colors.text,
    "list.inactiveFocusBackground": colors.background,
    "list.inactiveFocusOutline": colors.hidden,
    /* "list.invalidItemForeground": colors.test, */ //? Unknown
    "list.errorForeground": colors.error,
    "list.warningForeground": colors.warning,
    "listFilterWidget.background": colors.backgroundDark,
    /* "listFilterWidget.outline": colors.test, */ //? Unknown
    /* "listFilterWidget.noMatchesOutline": colors.test, */ //? Unknown
    "listFilterWidget.shadow": colors.shadow,
    /* "list.filterMatchBackground": colors.test, */ //* Unset
    "list.filterMatchBorder": colors.hidden,
    /* "list.deemphasizedForeground": colors.test, */ //? Unknown
    "tree.indentGuidesStroke": colors.text + "33", //? Unknown
    /* "tree.tableColumnsBorder": colors.test, */ //? Unknown
    /* "tree.tableOddRowsBackground": colors.test, */ //? Unknown

};

const activityBar = {
    "activityBar.background": colors.backgroundDark,
    "activityBar.dropBorder": colors.foreground,
    "activityBar.foreground": colors.foregroundLight,
    "activityBar.inactiveForeground": colors.text + "99",
    "activityBar.border": colors.hidden,
    "activityBarBadge.background": colors.foreground,
    "activityBarBadge.foreground": colors.text,
    "activityBar.activeBorder": colors.foreground,
    "activityBar.activeBackground": colors.backgroundLight,
    "activityBar.activeFocusBorder": colors.foreground,
};

const sideBar = {
    "sideBar.background": colors.backgroundLight,
    "sideBar.foreground": colors.text,
    "sideBar.border": colors.hidden,
    /* "sideBar.dropBackground": colors.test, */ //* Unset
    "sideBarTitle.foreground": colors.text,
    "sideBarSectionHeader.background": colors.backgroundLighter,
    "sideBarSectionHeader.foreground": colors.text,
    "sideBarSectionHeader.border": colors.backgroundLight,
};

const miniMap = {
    /* "minimap.findMatchHighlight": colors.test,  *///* Unset
    /* "minimap.selectionHighlight": colors.test, */ //* Unset
    "minimap.errorHighlight": colors.error,
    "minimap.warningHighlight": colors.warning,
    "minimap.background": colors.background,
    /* "minimap.selectionOccurrenceHighlight": colors.test, */ //* Unset
    "minimap.foregroundOpacity": colors.white,
    /* "minimapSlider.background": colors.test, */  //* Unset
    /* "minimapSlider.hoverBackground": colors.test, */  //* Unset
    /* "minimapSlider.activeBackground": colors.test, */  //* Unset
    /* "minimapGutter.addedBackground": colors.test, */  //* Unset
    /* "minimapGutter.modifiedBackground": colors.test, */  //* Unset
    /* "minimapGutter.deletedBackground": colors.test, */  //* Unset
};

const tabGroup = {
    "editorGroup.border": colors.backgroundLighter,
    /* "editorGroup.dropBackground": colors.test, */ //* Unset
    "editorGroupHeader.noTabsBackground": colors.backgroundDark,
    "editorGroupHeader.tabsBackground": colors.backgroundDark,
    "editorGroupHeader.tabsBorder": colors.hidden,
    "editorGroupHeader.border": colors.hidden,
    "editorGroup.emptyBackground": colors.hidden,
    "editorGroup.focusedEmptyBorder": colors.hidden,
    "editorGroup.dropIntoPromptForeground": colors.text,
    "editorGroup.dropIntoPromptBackground": colors.background,
    "editorGroup.dropIntoPromptBorder": colors.backgroundLighter,

    "tab.activeBackground": colors.background,
    "tab.unfocusedActiveBackground": colors.background,
    "tab.activeForeground": colors.text,
    "tab.border": colors.hidden,
    "tab.activeBorder": colors.hidden,
    "tab.unfocusedActiveBorder": colors.hidden,
    "tab.activeBorderTop": colors.foregroundLight,
    "tab.unfocusedActiveBorderTop": colors.foregroundLight + "77",
    "tab.lastPinnedBorder": colors.hidden,
    "tab.inactiveBackground": colors.backgroundDark,
    "tab.unfocusedInactiveBackground": colors.backgroundDark,
    "tab.inactiveForeground": colors.text + "77",
    "tab.unfocusedActiveForeground": colors.text + "77",
    "tab.unfocusedInactiveForeground": colors.text + "44",
    "tab.hoverBackground": colors.background,
    "tab.unfocusedHoverBackground": colors.background,
    /* "tab.hoverForeground": colors.test, */ //* Unset
    /* "tab.unfocusedHoverForeground": colors.test, */ //* Unset
    /* "tab.hoverBorder": colors.test, */ //* Unset
    /* "tab.unfocusedHoverBorder": colors.test, */ //* Unset
    "tab.activeModifiedBorder": colors.foreground,
    "tab.inactiveModifiedBorder": colors.foreground + "77",
    "tab.unfocusedActiveModifiedBorder": colors.foreground + "77",
    "tab.unfocusedInactiveModifiedBorder": colors.foreground + "44",
    "editorPane.background": colors.backgroundLight,
    /* "sideBySideEditor.horizontalBorder": colors.test, */ //? Unknown
    /* "sideBySideEditor.verticalBorder": colors.test, */ //? Unknown
};

const editor = {
    "editor.background": colors.background,
    "editor.foreground": colors.text,
    "editorLineNumber.foreground": colors.text + "77",
    "editorLineNumber.activeForeground": colors.text,
    "editorCursor.background": colors.black,
    "editorCursor.foreground": colors.text + "CC",

    "editor.selectionBackground": colors.foreground + "99",
    /* "editor.selectionForeground": colors.test, */ //* Unset
    "editor.inactiveSelectionBackground": colors.foreground + "77",
    "editor.selectionHighlightBackground": colors.foreground + "66",
    "editor.selectionHighlightBorder": colors.hidden,

    "editor.wordHighlightBackground": colors.foreground + "55",
    "editor.wordHighlightBorder": colors.hidden,
    "editor.wordHighlightStrongBackground": colors.foreground + "33",
    "editor.wordHighlightStrongBorder": colors.hidden,

    /* "editor.findMatchBackground": colors.test, */ //* Unset
    /* "editor.findMatchHighlightBackground": colors.test, */ //* Unset
    "editor.findRangeHighlightBackground": colors.foreground + "66",
    "editor.findMatchBorder": colors.hidden,
    "editor.findMatchHighlightBorder": colors.hidden,
    /* "editor.findRangeHighlightBorder": colors.test, */ //* Unset

    /* "searchEditor.findMatchBackground": colors.test, */ //* Unset
    /* "searchEditor.findMatchBorder": colors.test, */ //* Unset
    "searchEditor.textInputBorder": colors.hidden,

    "editor.hoverHighlightBackground": colors.foreground + "66",

    "editor.lineHighlightBackground": colors.backgroundDark + "99",
    "editor.lineHighlightBorder": colors.hidden,

    "editorUnicodeHighlight.border": colors.warning,
    "editorUnicodeHighlight.background": colors.warningBackground,

    "editorLink.activeForeground": colors.foregroundLight,

    "editor.rangeHighlightBackground": colors.foreground + "66",
    "editor.rangeHighlightBorder": colors.hidden,
   /*  "editor.symbolHighlightBackground": colors.test, */ //* Unset
    "editor.symbolHighlightBorder": colors.hidden,
    "editorWhitespace.foreground": colors.text + "22",

    "editorIndentGuide.background": colors.text + "55",
    "editorIndentGuide.activeBackground": colors.text + "99",

    "editorInlayHint.background": colors.text + "22",
    "editorInlayHint.foreground": colors.text + "99",
    "editorInlayHint.typeForeground": colors.text + "99",
    "editorInlayHint.typeBackground": colors.text + "22",
    "editorInlayHint.parameterForeground": colors.text + "99",
    "editorInlayHint.parameterBackground": colors.text + "22",

    "editorRuler.foreground": colors.backgroundLighter,

    /* "editor.linkedEditingBackground": colors.test, */ //* Unset

    "editorCodeLens.foreground": colors.text + "77",

    /* "editorLightBulb.foreground": colors.test, */ //* Unset
    /* "editorLightBulbAutoFix.foreground": colors.test, */ //* Unset

    "editorBracketMatch.background": colors.hidden,
    "editorBracketMatch.border": colors.text + "77",

    /* "editorBracketHighlight.foreground1": colors.test, */ //* Unset
    /* "editorBracketHighlight.foreground2": colors.test, */ //* Unset
    /* "editorBracketHighlight.foreground3": colors.test, */ //* Unset
    /* "editorBracketHighlight.foreground4": colors.test, */ //* Unset
    /* "editorBracketHighlight.foreground5": colors.test, */ //* Unset
    /* "editorBracketHighlight.foreground6": colors.test, */ //* Unset
    /* "editorBracketHighlight.unexpectedBracket.foreground": colors.test, */ //* Unset

    /* "editorBracketPairGuide.activeBackground1": colors.test, */ //* Unset
    /* "editorBracketPairGuide.activeBackground2": colors.test, */ //* Unset
    /* "editorBracketPairGuide.activeBackground3": colors.test, */ //* Unset
    /* "editorBracketPairGuide.activeBackground4": colors.test, */ //* Unset
    /* "editorBracketPairGuide.activeBackground5": colors.test, */ //* Unset
    /* "editorBracketPairGuide.activeBackground6": colors.test, */ //* Unset

    /* "editorBracketPairGuide.background1": colors.test, */ //* Unset
    /* "editorBracketPairGuide.background2": colors.test, */ //* Unset
    /* "editorBracketPairGuide.background3": colors.test, */ //* Unset
    /* "editorBracketPairGuide.background4": colors.test, */ //* Unset
    /* "editorBracketPairGuide.background5": colors.test, */ //* Unset
    /* "editorBracketPairGuide.background6": colors.test, */ //* Unset

    "editor.foldBackground": colors.foreground + "33",

    "editorOverviewRuler.background": colors.background,
    "editorOverviewRuler.border": colors.backgroundLighter,
    /* "editorOverviewRuler.findMatchForeground": colors.test, */ //* Unset
    /* "editorOverviewRuler.rangeHighlightForeground": colors.test, */ //* Unset
    /* "editorOverviewRuler.selectionHighlightForeground": colors.test, */ //* Unset
    /* "editorOverviewRuler.wordHighlightForeground": colors.test, */ //* Unset
    /* "editorOverviewRuler.wordHighlightStrongForeground": colors.test, */ //* Unset
    /* "editorOverviewRuler.modifiedForeground": colors.test, */ //* Unset
    /* "editorOverviewRuler.addedForeground": colors.test, */ //* Unset
    /* "editorOverviewRuler.deletedForeground": colors.test, */ //* Unset
    "editorOverviewRuler.errorForeground": colors.error, //* Unset
    /* "editorOverviewRuler.warningForeground": colors.test, */ //* Unset
    "editorOverviewRuler.infoForeground": colors.info,
    /* "editorOverviewRuler.bracketMatchForeground": colors.test, */ //* Unset

    "editorError.foreground": colors.error, //* Unset
    /* "editorError.border": colors.test, */ //* Unset
    /* "editorError.background": colors.test, */ //* Unset

    "editorWarning.foreground": colors.warning,
    /* "editorWarning.border": colors.test, */ //* Unset
    /* "editorWarning.background": colors.test, */ //* Unset
    
    "editorInfo.foreground": colors.info, //* Unset
    /* "editorInfo.border": colors.test, */ //* Unset
    /* "editorInfo.background": colors.test, */ //* Unset

    /* "editorHint.foreground": colors.test, */ //* Unset
    /* "editorHint.border": colors.test, */ //* Unset

    "problemsErrorIcon.foreground": colors.error,
    "problemsWarningIcon.foreground": colors.warning,
    "problemsInfoIcon.foreground": colors.info,

    /* "editorUnnecessaryCode.border": colors.text, */ //* Unset
    /* "editorUnnecessaryCode.opacity": colors.white + "FF", */ //* Unset

    "editorGutter.background": colors.background,
    /* "editorGutter.modifiedBackground": colors.test, */ //* Unset
    /* "editorGutter.addedBackground": colors.test, */ //* Unset
    /* "editorGutter.deletedBackground": colors.test, */ //* Unset
    /* "editorGutter.commentRangeForeground": colors.test, */ //* Unset
    "editorGutter.foldingControlForeground": colors.text,

    /* "editorCommentsWidget.resolvedBorder": colors.test, */ //* Unset
    /* "editorCommentsWidget.unresolvedBorder": colors.test, */ //* Unset
    /* "editorCommentsWidget.rangeBackground": colors.test, */ //* Unset
    /* "editorCommentsWidget.rangeBackground": colors.test, */ //* Unset
    /* "editorCommentsWidget.rangeBorder": colors.test, */ //* Unset
    /* "editorCommentsWidget.rangeActiveBackground": colors.test, */ //* Unset
    /* "editorCommentsWidget.rangeActiveBorder": colors.test, */ //* Unset

};

const diffEditor = {
    "diffEditor.insertedTextBackground": colors.addedDiff + "33",
    "diffEditor.insertedTextBorder": colors.hidden,
    "diffEditor.removedTextBackground": colors.removedDiff + "33",
    "diffEditor.removedTextBorder": colors.hidden,
    "diffEditor.border": colors.backgroundLighter,
    "diffEditor.diagonalFill": colors.backgroundLighter,
    "diffEditor.insertedLineBackground": colors.addedDiff + "22",
    "diffEditor.removedLineBackground": colors.removedDiff + "22",
    "diffEditorGutter.insertedLineBackground": colors.addedDiff + "22",
    "diffEditorGutter.removedLineBackground": colors.removedDiff + "22",
    "diffEditorOverview.insertedForeground": colors.addedDiff + "77",
    "diffEditorOverview.removedForeground": colors.removedDiff + "77",
}

const widgets = {
    "editorWidget.foreground": colors.text,
    "editorWidget.background": colors.backgroundDark,
    "editorWidget.border": colors.backgroundLighter,
    "editorWidget.resizeBorder": colors.backgroundLighter,
    "editorSuggestWidget.background": colors.background,
    "editorSuggestWidget.border": colors.backgroundLighter,
    "editorSuggestWidget.foreground": colors.text,
    "editorSuggestWidget.focusHighlightForeground": colors.foregroundLight,
    "editorSuggestWidget.highlightForeground": colors.foregroundLight,
    "editorSuggestWidget.selectedBackground": colors.foreground + "77",
    "editorSuggestWidget.selectedForeground": colors.text,
    "editorSuggestWidget.selectedIconForeground": colors.text,
    /* "editorSuggestWidgetStatus.foreground": colors.test, */ //? Unknown
    "editorHoverWidget.foreground": colors.text,
    "editorHoverWidget.background": colors.background,
    "editorHoverWidget.border": colors.backgroundLighter,
    "editorHoverWidget.highlightForeground": colors.foregroundLight,
    "editorHoverWidget.statusBarBackground": colors.backgroundLighter,
    "editorGhostText.border": colors.hidden,
    "editorGhostText.background": colors.hidden,
    "editorGhostText.foreground": colors.text + "66",

    "editorStickyScroll.background": colors.background,
    "editorStickyScrollHover.background": colors.backgroundLighter,

    "debugExceptionWidget.background": colors.errorBackground,
    "debugExceptionWidget.border": colors.error,

    "editorMarkerNavigation.background": colors.background,
    "editorMarkerNavigationError.background": colors.error,
    "editorMarkerNavigationWarning.background": colors.warning,
    "editorMarkerNavigationInfo.background": colors.info,
    "editorMarkerNavigationError.headerBackground": colors.backgroundDark,
    "editorMarkerNavigationWarning.headerBackground": colors.backgroundDark,
    "editorMarkerNavigationInfo.headerBackground": colors.backgroundDark,

}

const peekView = {
    "peekView.border": colors.info,
    "peekViewEditor.background": colors.infoBackground,
    "peekViewEditorGutter.background": colors.infoBackground,
    /* "peekViewEditor.matchHighlightBackground": colors.test, */ //* Unset
    "peekViewEditor.matchHighlightBorder": colors.hidden,
    "peekViewResult.background": colors.backgroundLight,
    "peekViewResult.fileForeground": colors.text, //* Unset
    "peekViewResult.lineForeground": colors.text + "BB",
    /* "peekViewResult.matchHighlightBackground": colors.test, */ //* Unset
    "peekViewResult.selectionBackground": colors.foreground + "99",
    "peekViewResult.selectionForeground": colors.text,
    "peekViewTitle.background": colors.background,
    "peekViewTitleDescription.foreground": colors.text + "99",
    "peekViewTitleLabel.foreground": colors.text,
}

const mergeConflict = {
    /* "merge.currentHeaderBackground": colors.test, */ //* Unset
    /* "merge.currentContentBackground": colors.test, */ //* Unset
    /* "merge.incomingHeaderBackground": colors.test, */ //* Unset
    /* "merge.incomingContentBackground": colors.test, */ //* Unset
    /* "merge.border": colors.test, */ //* Unset
    /* "merge.commonContentBackground": colors.test, */ //* Unset
    /* "merge.commonHeaderBackground": colors.test, */ //* Unset
    /* "editorOverviewRuler.currentContentForeground": colors.test, */ //* Unset
    /* "editorOverviewRuler.incomingContentForeground": colors.test, */ //* Unset
    /* "editorOverviewRuler.commonContentForeground": colors.test, */ //* Unset
    /* "mergeEditor.change.background": colors.test, */ //* Unset
    /* "mergeEditor.change.word.background": colors.test, */ //* Unset
    /* "mergeEditor.conflict.unhandledUnfocused.border": colors.test, */ //* Unset
    /* "mergeEditor.conflict.unhandledFocused.border": colors.test, */ //* Unset
    /* "mergeEditor.conflict.handledUnfocused.border": colors.test, */ //* Unset
    /* "mergeEditor.conflict.handledFocused.border": colors.test, */ //* Unset
    /* "mergeEditor.conflict.handled.minimapOverViewRuler": colors.test, */ //* Unset
    /* "mergeEditor.conflict.unhandled.minimapOverViewRuler": colors.test, */ //* Unset
    /* "mergeEditor.conflictingLines.background": colors.test, */ //* Unset
}

const panel = {
    "panel.background": colors.backgroundDark,
    "panel.border": colors.hidden,
    "panel.dropBorder": colors.foreground,
    "panelTitle.activeBorder": colors.foreground,
    "panelTitle.activeForeground": colors.text,
    "panelTitle.inactiveForeground": colors.text + "77",
    /* "panelInput.border": colors.test, */ //* Unknown
    "panelSection.border": colors.backgroundLighter,
    /* "panelSection.dropBackground": colors.test, */ //* Unset
    "panelSectionHeader.background": colors.backgroundLight,
    "panelSectionHeader.foreground": colors.text,
    "panelSectionHeader.border": colors.test, //* Unset
};

const statusBar = {
    "statusBar.background": colors.backgroundDark,
    "statusBar.foreground": colors.text,
    "statusBar.border": colors.background,
    "statusBar.debuggingBackground": colors.foreground,
    "statusBar.debuggingForeground": colors.text,
    "statusBar.debuggingBorder": colors.hidden,
    "statusBar.noFolderForeground": colors.text,
    "statusBar.noFolderBackground": colors.backgroundDark,
    "statusBar.noFolderBorder": colors.hidden,
    "statusBarItem.activeBackground": colors.white + "44",
    "statusBarItem.hoverBackground": colors.white + "22",
    /* "statusBarItem.prominentForeground": colors.test, */ //? Unknown
    /* "statusBarItem.prominentBackground": colors.test, */ //? Unknown
    /* "statusBarItem.prominentHoverBackground": colors.test, */ //? Unknown
    "statusBarItem.remoteBackground": colors.foreground,
    "statusBarItem.remoteForeground": colors.text,
    /* "statusBarItem.errorBackground": colors.test, */ //* Unset
    "statusBarItem.errorForeground": colors.text,
    /* "statusBarItem.warningBackground": colors.test, */ //* Unset
    "statusBarItem.warningForeground": colors.text,
    /* "statusBarItem.compactHoverBackground": colors.test, */ //* Unset
    "statusBarItem.focusBorder": colors.text,
    "statusBarItem.settingsProfilesBackground": colors.hidden,
    "statusBarItem.settingsProfilesForeground": colors.text,
    "statusBar.focusBorder": colors.hidden
};

const titleBar = {
    "titleBar.activeBackground": colors.backgroundDark,
    "titleBar.activeForeground": colors.text,
    "titleBar.inactiveBackground": colors.backgroundLight,
    "titleBar.inactiveForeground": colors.text + "77",
    /* "titleBar.border": colors.test, */ //* Unset
};

const menuBar = {
    "menubar.selectionForeground": colors.text,
    "menubar.selectionBackground": colors.backgroundLighter,
    "menubar.selectionBorder": colors.hidden,

    "menu.foreground": colors.text,
    "menu.background": colors.backgroundDark,

    "menu.selectionForeground": colors.text,
    "menu.selectionBackground": colors.foreground,
    "menu.selectionBorder": colors.hidden,
    "menu.separatorBackground": colors.backgroundLighter,
    "menu.border": colors.background,
};

const commandCenter = {
    "commandCenter.foreground": colors.text,
    "commandCenter.activeForeground": colors.text,
    "commandCenter.activeBackground": colors.backgroundLighter,
    /* "commandCenter.background": colors.test, */ //* Unset
    "commandCenter.border": colors.backgroundLighter
}

const notifications = {

    "notificationCenter.border": colors.backgroundLighter,
    "notificationCenterHeader.foreground": colors.text,
    "notificationCenterHeader.background": colors.backgroundLight,

    "notificationToast.border": colors.backgroundLighter,
    "notifications.foreground": colors.text,
    "notifications.background": colors.backgroundDark,
    "notifications.border": colors.backgroundLighter,
    /* "notificationLink.foreground": colors.test, */ //? Unknown
    "notificationsErrorIcon.foreground": colors.error,
    "notificationsWarningIcon.foreground": colors.warning,
    "notificationsInfoIcon.foreground": colors.info,

};

const banner = {
    "banner.background": colors.infoBackground,
    "banner.foreground": colors.text,
    "banner.iconForeground": colors.info,
}

const extensions = {
    "extensionButton.prominentForeground": colors.text,
    "extensionButton.prominentBackground": colors.foreground,
    "extensionButton.prominentHoverBackground": colors.foregroundLight,
    "extensionBadge.remoteBackground": colors.foreground,
    "extensionBadge.remoteForeground": colors.text,
    /* "extensionIcon.starForeground": colors.test, */ //* Unset
    /* "extensionIcon.verifiedForeground": colors.test, */ //* Unset
    /* "extensionIcon.preReleaseForeground": colors.test, */ //* Unset
    /* "extensionIcon.sponsorForeground": colors.test, */ //* Unset
}

const quickPicker = {
    "pickerGroup.border": colors.backgroundLighter,
    "pickerGroup.foreground": colors.foreground,
    "quickInput.background": colors.backgroundDark,
    "quickInput.foreground": colors.text,
    "quickInputList.focusBackground": colors.foreground,
    "quickInputList.focusForeground": colors.text,
    "quickInputList.focusIconForeground": colors.text,
    "quickInputTitle.background": colors.backgroundLighter,
}

const keybind = {
    "keybindingLabel.background": colors.backgroundLight,
    "keybindingLabel.foreground": colors.text,
    "keybindingLabel.border": colors.backgroundLighter,
    "keybindingLabel.bottomBorder": colors.backgroundLighter,
    "keybindingTable.headerBackground": colors.backgroundLighter,
    "keybindingTable.rowsBackground": colors.backgroundLighter,
}

const terminal = {
    "terminal.background": colors.background,
    "terminal.border": colors.backgroundLighter,
    "terminal.foreground": colors.text,
    /* "terminal.ansiBlack": colors.test, */ //* Unset
    /* "terminal.ansiBlue": colors.test, */ //* Unset
    /* "terminal.ansiBrightBlack": colors.test, */ //* Unset
    /* "terminal.ansiBrightBlue": colors.test, */ //* Unset
    /* "terminal.ansiBrightCyan": colors.test, */ //* Unset
    /* "terminal.ansiBrightGreen": colors.test, */ //* Unset
    /* "terminal.ansiBrightMagenta": colors.test, */ //* Unset
    /* "terminal.ansiBrightRed": colors.test, */ //* Unset
    /* "terminal.ansiBrightWhite": colors.test, */ //* Unset
    /* "terminal.ansiBrightYellow": colors.test, */ //* Unset
    /* "terminal.ansiCyan": colors.test, */ //* Unset
    /* "terminal.ansiGreen": colors.test, */ //* Unset
    /* "terminal.ansiMagenta": colors.test, */ //* Unset
    /* "terminal.ansiRed": colors.test, */ //* Unset
    /* "terminal.ansiWhite": colors.test, */ //* Unset
    /* "terminal.ansiYellow": colors.test, */ //* Unset
    "terminal.selectionBackground": colors.foreground + "99",
    /* "terminal.inactiveSelectionBackground": colors.test, */ //* Unset
    /* "terminal.selectionForeground": colors.test, */ //* Unset
    /* "terminal.findMatchBackground": colors.test, */ //* Unset
    /* "terminal.findMatchBorder": colors.test, */ //* Unset
    /* "terminal.findMatchHighlightBackground": colors.test, */ //* Unset
    /* "terminal.findMatchHighlightBorder": colors.test, */ //* Unset
    "terminalCursor.background": colors.black,
    "terminalCursor.foreground": colors.text,
    /* "terminal.dropBackground": colors.test, */ //* Unset
    "terminal.tab.activeBorder": colors.foreground,
    "terminalCommandDecoration.defaultBackground": colors.white + "44",
    "terminalCommandDecoration.successBackground": colors.info,
    "terminalCommandDecoration.errorBackground": colors.error,
    "terminalOverviewRuler.cursorForeground": colors.text,
    /* "terminalOverviewRuler.findMatchForeground": colors.test, */ //* Unset
}

const debug = {
    "debugToolBar.background": colors.backgroundDark,
    /* "debugToolBar.border": colors.test, */ //* Unset
    /* "editor.stackFrameHighlightBackground": colors.test, */ //* Unset
    /* "editor.focusedStackFrameHighlightBackground": colors.test, */ //* Unset
    /* "editor.inlineValuesForeground": colors.test, */ //* Unset
    /* "editor.inlineValuesBackground": colors.test, */ //* Unset
    "debugView.exceptionLabelForeground": colors.text,
    /* "debugView.exceptionLabelBackground": colors.test, */ //* Unset
    "debugView.stateLabelForeground": colors.text,
    /* "debugView.stateLabelBackground": colors.test, */ //* Unset
    "debugView.valueChangedHighlight": colors.info,
    /* "debugTokenExpression.name": colors.test, */ //*Unset
    "debugTokenExpression.value": colors.text + "77",
    /* "debugTokenExpression.string": colors.test, */ //* Unset
    /* "debugTokenExpression.boolean": colors.test, */ //* Unset
    /* "debugTokenExpression.number": colors.test, */ //* Unset
    /* "debugTokenExpression.error": colors.test, */ //* Unset
}

const testing = {
    "testing.iconFailed": colors.error,
    "testing.iconErrored": colors.error,
    "testing.iconPassed": colors.pass,
    "testing.runAction": colors.pass,
    "testing.iconQueued": colors.warning,
    "testing.iconUnset": colors.white + "44",
    "testing.iconSkipped": colors.white + "44",
    /* "testing.peekBorder": colors.test, */ //* Unset
    "testing.peekHeaderBackground": colors.backgroundDark,
    "testing.message.error.decorationForeground": colors.error,
    "testing.message.error.lineBackground": colors.errorBackground,
    "testing.message.info.decorationForeground": colors.info,
    "testing.message.info.lineBackground": colors.infoBackground,
}

const welcomePage = {
    "welcomePage.background": colors.background,
    "welcomePage.progress.background": colors.backgroundLighter,
    "welcomePage.progress.foreground": colors.foreground,
    "welcomePage.tileBackground": colors.backgroundDark,
    "welcomePage.tileHoverBackground": colors.backgroundLight,
    "welcomePage.tileShadow": colors.shadow,
    /* "walkThrough.embeddedEditorBackground": colors.test, */ //? Unknown
}

const sourceControl = {
    /* "scm.providerBorder": colors.test, */ //? Unknown
}

const git = {
    /* "gitDecoration.addedResourceForeground": colors.test, */ //* Unset
    /* "gitDecoration.modifiedResourceForeground": colors.test, */ //* Unset
    /* "gitDecoration.deletedResourceForeground": colors.test, */ //* Unset
    /* "gitDecoration.renamedResourceForeground": colors.test, */ //* Unset
    /* "gitDecoration.stageModifiedResourceForeground": colors.test, */ //* Unset
    /* "gitDecoration.stageDeletedResourceForeground": colors.test, */ //* Unset
    /* "gitDecoration.untrackedResourceForeground": colors.test, */ //* Unset
    /* "gitDecoration.ignoredResourceForeground": colors.test, */ //* Unset
    /* "gitDecoration.conflictingResourceForeground": colors.test, */ //* Unset
    /* "gitDecoration.submoduleResourceForeground": colors.test, */ //* Unset
}

const settings = {
    "settings.headerForeground": colors.text,
    "settings.modifiedItemIndicator": colors.info,
    "settings.dropdownBackground": colors.backgroundLighter,
    "settings.dropdownForeground": colors.text,
    /* "settings.dropdownBorder": colors.test, */ //* Unset
    "settings.dropdownListBorder": colors.backgroundDark,
    "settings.checkboxBackground": colors.backgroundLighter,
    "settings.checkboxForeground": colors.text,
    "settings.checkboxBorder": colors.hidden,
    "settings.rowHoverBackground": colors.backgroundLight,
    "settings.textInputBackground": colors.backgroundLighter,
    "settings.textInputForeground": colors.text,
    "settings.textInputBorder": colors.hidden,
    "settings.numberInputBackground": colors.backgroundLighter,
    "settings.numberInputForeground": colors.text,
    "settings.numberInputBorder": colors.hidden,
    "settings.focusedRowBackground": colors.backgroundDark,
    "settings.focusedRowBorder": colors.hidden,
    "settings.headerBorder": colors.backgroundLighter,
    "settings.sashBorder": colors.backgroundLighter,
}

const breadcrumbs = {
    "breadcrumb.foreground": colors.text + "77",
    "breadcrumb.background": colors.background,
    "breadcrumb.focusForeground": colors.text,
    "breadcrumb.activeSelectionForeground": colors.text,
    "breadcrumbPicker.background": colors.backgroundDark,
}

const snippets = {
    /* "editor.snippetTabstopHighlightBackground": colors.test, */ //? Unknown
    /* "editor.snippetTabstopHighlightBorder": colors.test, */ //? Unknown
    /* "editor.snippetFinalTabstopHighlightBackground": colors.test, */ //? Unknown
    /* "editor.snippetFinalTabstopHighlightBorder": colors.test, */ //? Unknown
}

const interactive = {
    /* "interactive.activeCodeBorder": colors.test, */ //? Unknown
    /* "interactive.inactiveCodeBorder": colors.test, */ //? Unknown
}

const issues = {
    "issues.closed": colors.pass,
    /* "issues.newIssueDecoration": colors.test, */ //? Unknown
    "issues.open": colors.warning,
}

const symbolIcons = {
    /* "symbolIcon.arrayForeground": colors.test, */ //* Unset
    /* "symbolIcon.booleanForeground": colors.test, */ //* Unset
    /* "symbolIcon.classForeground": colors.test, */ //* Unset
    /* "symbolIcon.colorForeground": colors.test, */ //* Unset
    /* "symbolIcon.constantForeground": colors.test, */ //* Unset
    /* "symbolIcon.constructorForeground": colors.test, */ //* Unset
    /* "symbolIcon.enumeratorForeground": colors.test, */ //* Unset
    /* "symbolIcon.enumeratorMemberForeground": colors.test, */ //* Unset
    /* "symbolIcon.eventForeground": colors.test, */ //* Unset
    /* "symbolIcon.fieldForeground": colors.test, */ //* Unset
    /* "symbolIcon.fileForeground": colors.test, */ //* Unset
    /* "symbolIcon.folderForeground": colors.test, */ //* Unset
    /* "symbolIcon.functionForeground": colors.test, */ //* Unset
    /* "symbolIcon.interfaceForeground": colors.test, */ //* Unset
    /* "symbolIcon.keyForeground": colors.test, */ //* Unset
    /* "symbolIcon.keywordForeground": colors.test, */ //* Unset
    /* "symbolIcon.methodForeground": colors.test, */ //* Unset
    /* "symbolIcon.moduleForeground": colors.test, */ //* Unset
    /* "symbolIcon.namespaceForeground": colors.test, */ //* Unset
    /* "symbolIcon.nullForeground": colors.test, */ //* Unset
    /* "symbolIcon.numberForeground": colors.test, */ //* Unset
    /* "symbolIcon.objectForeground": colors.test, */ //* Unset
    /* "symbolIcon.operatorForeground": colors.test, */ //* Unset
    /* "symbolIcon.packageForeground": colors.test, */ //* Unset
    /* "symbolIcon.propertyForeground": colors.test, */ //* Unset
    /* "symbolIcon.referenceForeground": colors.test, */ //* Unset
    /* "symbolIcon.snippetForeground": colors.test, */ //* Unset
    /* "symbolIcon.stringForeground": colors.test, */ //* Unset
    /* "symbolIcon.structForeground": colors.test, */ //* Unset
    /* "symbolIcon.textForeground": colors.test, */ //* Unset
    /* "symbolIcon.typeParameterForeground": colors.test, */ //* Unset
    /* "symbolIcon.unitForeground": colors.test, */ //* Unset
    /* "symbolIcon.variableForeground": colors.test, */ //* Unset
}

const debugIcons = {
    /* "debugIcon.breakpointForeground": colors.test, */ //* Unset
    /* "debugIcon.breakpointDisabledForeground": colors.test, */ //* Unset
    /* "debugIcon.breakpointUnverifiedForeground": colors.test, */ //* Unset
    /* "debugIcon.breakpointCurrentStackframeForeground": colors.test, */ //* Unset
    /* "debugIcon.breakpointStackframeForeground": colors.test, */ //* Unset
    /* "debugIcon.startForeground": colors.test, */ //* Unset
    /* "debugIcon.pauseForeground": colors.test, */ //* Unset
    /* "debugIcon.stopForeground": colors.test, */ //* Unset
    /* "debugIcon.disconnectForeground": colors.test, */ //* Unset
    /* "debugIcon.restartForeground": colors.test, */ //* Unset
    /* "debugIcon.stepOverForeground": colors.test, */ //* Unset
    /* "debugIcon.stepIntoForeground": colors.test, */ //* Unset
    /* "debugIcon.stepOutForeground": colors.test, */ //* Unset
    /* "debugIcon.continueForeground": colors.test, */ //* Unset
    /* "debugIcon.stepBackForeground": colors.test, */ //* Unset
    /* "debugConsole.infoForeground": colors.test, */ //* Unset
    /* "debugConsole.warningForeground": colors.test, */ //* Unset
    /* "debugConsole.errorForeground": colors.test, */ //* Unset
    /* "debugConsole.sourceForeground": colors.test, */ //* Unset
    /* "debugConsoleInputIcon.foreground": colors.test, */ //* Unset

}

const notebook = {
    "notebook.editorBackground": colors.background,
    "notebook.cellBorderColor": colors.backgroundLighter,
    "notebook.cellHoverBackground": colors.backgroundDark,
    "notebook.cellInsertionIndicator": colors.foreground,
    "notebook.cellStatusBarItemHoverBackground": colors.backgroundLighter,
    "notebook.cellToolbarSeparator": colors.backgroundLighter,
    "notebook.cellEditorBackground": colors.backgroundDark,
    "notebook.focusedCellBackground": colors.background,
    "notebook.focusedCellBorder": colors.foreground,
    "notebook.focusedEditorBorder": colors.foreground,
    "notebook.inactiveFocusedCellBorder": colors.foreground + "77",
    /* "notebook.inactiveSelectedCellBorder": colors.test, */ //? Unknown
    "notebook.outputContainerBackgroundColor": colors.background,
    "notebook.outputContainerBorderColor": colors.hidden,
    /* "notebook.selectedCellBackground": colors.test, */ //? Unknown
    /* "notebook.selectedCellBorder": colors.test, */ //? Unknown 
    /* "notebook.symbolHighlightBackground": colors.test, */ //? Unknown
    "notebookScrollbarSlider.background": colors.foreground + "77",
    "notebookScrollbarSlider.activeBackground": colors.foreground + "BB",
    "notebookScrollbarSlider.hoverBackground": colors.foreground + "99",
    "notebookStatusErrorIcon.foreground": colors.error,
    "notebookStatusRunningIcon.foreground": colors.text,
    "notebookStatusSuccessIcon.foreground": colors.pass,
}

const chart = {
    /* "charts.foreground": colors.test, */ //? Unknown
    /* "charts.lines": colors.test, */ //? Unknown
    /* "charts.red": colors.test, */ //? Unknown
    /* "charts.green": colors.test, */ //? Unknown
    /* "charts.blue": colors.test, */ //? Unknown
    /* "charts.yellow": colors.test, */ //? Unknown
    /* "charts.orange": colors.test, */ //? Unknown
    /* "charts.purple": colors.test, */ //? Unknown
}

const ports = {
    /* "ports.iconRunningProcessForeground": colors.test, */ //* Unset
}

module.exports = {
    ...contrast,
    ...base,
    ...window,
    ...text,
    ...actions,
    ...button,
    ...checkbox,
    ...dropdown,
    ...input,
    ...scrollbar,
    ...badge,
    ...progressBar,
    ...list,
    ...activityBar,
    ...sideBar,
    ...miniMap,
    ...tabGroup,
    ...editor,
    ...diffEditor,
    ...widgets,
    ...peekView,
    ...mergeConflict,
    ...panel,
    ...statusBar,
    ...titleBar,
    ...menuBar,
    ...commandCenter,
    ...notifications,
    ...banner,
    ...extensions,
    ...quickPicker,
    ...keybind,
    ...terminal,
    ...debug,
    ...testing,
    ...welcomePage,
    ...sourceControl,
    ...git,
    ...settings,
    ...breadcrumbs,
    ...snippets,
    ...interactive,
    ...issues,
    ...symbolIcons,
    ...debugIcons,
    ...notebook,
    ...chart,
    ...ports
};