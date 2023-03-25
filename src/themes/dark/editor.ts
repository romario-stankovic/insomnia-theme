import { colors } from "./colors";

import { Editor } from "../../interface/editor";

// Reference: https://code.visualstudio.com/api/references/theme-color

const contrast : Editor.Contrast = {
    "contrastActiveBorder": colors.hidden,
    "contrastBorder": colors.hidden,
}

const base : Editor.Base = {
    "focusBorder": colors.foreground,
    "foreground": colors.text,
    "disabledForeground": colors.text + "77",
    "selection.background": colors.foreground,
    "descriptionForeground": colors.text + "AA",
    "errorForeground": colors.error,
    "icon.foreground": colors.text,
    "widget.shadow": colors.shadow,
    "widget.border": colors.unset,
    "sash.hoverBorder": colors.foreground,
};

const window : Editor.Window = {
    "window.activeBorder": colors.hidden,
    "window.inactiveBorder": colors.hidden,
};

const text : Editor.Text = {
    "textBlockQuote.background": colors.unset, //? Unknown
    "textBlockQuote.border": colors.unset,     //? Unknown
    "textCodeBlock.background": colors.unset,  //? Unknown
    "textLink.activeForeground": colors.foregroundLighter,
    "textLink.foreground": colors.foregroundLight,
    "textPreformat.foreground": colors.unset, //* Unset
    "textSeparator.foreground": colors.unset, //? Unknown
};

const actions : Editor.Actions = {
    "toolbar.hoverBackground": colors.white + "17",
    "toolbar.hoverOutline": colors.hidden,
    "toolbar.activeBackground": colors.white + "33"
};

const button : Editor.Buttons = {
    "button.background": colors.foreground,
    "button.foreground": colors.text,
    "button.border": colors.hidden,
    "button.separator": colors.text,
    "button.hoverBackground": colors.foregroundLight,
    "button.secondaryForeground": colors.text,
    "button.secondaryBackground": colors.backgroundLighter,
    "button.secondaryHoverBackground": colors.white + "33",
};

const checkbox : Editor.CheckBox = {
    "checkbox.background": colors.backgroundLighter,
    "checkbox.foreground": colors.text,
    "checkbox.border": colors.hidden,
    "checkbox.selectBackground": colors.unset, //* Unset
    "checkbox.selectBorder": colors.unset, //* Unset
};

const dropdown : Editor.Dropdown = {
    "dropdown.background": colors.backgroundLighter,
    "dropdown.listBackground": colors.backgroundLighter,
    "dropdown.border": colors.backgroundLighter,
    "dropdown.foreground": colors.text,
};

const input : Editor.Input = {
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

const scrollbar : Editor.Scrollbar = {
    "scrollbar.shadow": colors.shadow,
    "scrollbarSlider.activeBackground": colors.foreground + "BB",
    "scrollbarSlider.background": colors.foreground + "77",
    "scrollbarSlider.hoverBackground": colors.foreground + "99",
};

const badge : Editor.Badge = {
    "badge.foreground": colors.text,
    "badge.background": colors.foreground
};

const progressBar : Editor.ProgressBar = {
    "progressBar.background": colors.foreground,
};

const list : Editor.List = {
    "list.activeSelectionBackground": colors.foreground + "AA",
    "list.activeSelectionForeground": colors.text,
    "list.activeSelectionIconForeground": colors.text,

    "list.dropBackground": colors.backgroundLighter,
    "list.focusBackground": colors.foreground + "77",
    "list.focusForeground": colors.text,
    "list.focusHighlightForeground": colors.unset, //? Unknown
    "list.focusOutline": colors.hidden,
    "list.focusAndSelectionOutline": colors.foreground,
    "list.highlightForeground": colors.unset, //? Unknown
    "list.hoverBackground": colors.background,
    "list.hoverForeground": colors.text,

    "list.inactiveSelectionBackground": colors.foreground + "55",
    "list.inactiveSelectionForeground": colors.text,
    "list.inactiveSelectionIconForeground": colors.unset, //* Unset
    "list.inactiveFocusBackground": colors.background,
    "list.inactiveFocusOutline": colors.hidden,
    "list.invalidItemForeground": colors.unset, //? Unknown
    "list.errorForeground": colors.error,
    "list.warningForeground": colors.warning,
    "listFilterWidget.background": colors.backgroundDark,
    "listFilterWidget.outline": colors.unset, //? Unknown
    "listFilterWidget.noMatchesOutline": colors.unset, //? Unknown
    "listFilterWidget.shadow": colors.shadow,
    "list.filterMatchBackground": colors.unset, //* Unset
    "list.filterMatchBorder": colors.hidden,
    "list.deemphasizedForeground": colors.unset, //? Unknown
    "tree.indentGuidesStroke": colors.text + "44",
    "tree.inactiveIndentGuidesStroke": colors.text + "11",
    "tree.tableColumnsBorder": colors.unset, //? Unknown
    "tree.tableOddRowsBackground": colors.unset, //? Unknown

};

const activityBar : Editor.ActivityBar = {
    "activityBar.background": colors.backgroundDark,
    "activityBar.dropBorder": colors.foreground + "66", //* Unset
    "activityBar.foreground": colors.text,
    "activityBar.inactiveForeground": colors.text + "99",
    "activityBar.border": colors.hidden,
    "activityBarBadge.background": colors.foreground,
    "activityBarBadge.foreground": colors.text,
    "activityBar.activeBorder": colors.foreground,
    "activityBar.activeBackground": colors.backgroundLight,
    "activityBar.activeFocusBorder": colors.foreground,
};

const profiles : Editor.Profiles = {
    "profileBadge.background": colors.backgroundLighter,
    "profileBadge.foreground": colors.text,
}

const sideBar : Editor.SideBar = {
    "sideBar.background": colors.backgroundLight,
    "sideBar.foreground": colors.text,
    "sideBar.border": colors.hidden,
    "sideBar.dropBackground": colors.unset, //* Unset
    "sideBarTitle.foreground": colors.text,
    "sideBarSectionHeader.background": colors.backgroundLighter,
    "sideBarSectionHeader.foreground": colors.text,
    "sideBarSectionHeader.border": colors.backgroundLight,
};

const miniMap : Editor.Minimap = {
    "minimap.findMatchHighlight": colors.unset, //* Unset
    "minimap.selectionHighlight": colors.unset, //* Unset
    "minimap.errorHighlight": colors.error,
    "minimap.warningHighlight": colors.warning,
    "minimap.background": colors.background,
    "minimap.selectionOccurrenceHighlight": colors.unset, //* Unset
    "minimap.foregroundOpacity": colors.white,
    "minimapSlider.background": colors.unset,  //* Unset
    "minimapSlider.hoverBackground": colors.unset,  //* Unset
    "minimapSlider.activeBackground": colors.unset,  //* Unset
    "minimapGutter.addedBackground": colors.unset,  //* Unset
    "minimapGutter.modifiedBackground": colors.unset,  //* Unset
    "minimapGutter.deletedBackground": colors.unset,  //* Unset
};

const tabGroup : Editor.TabGroup = {
    "editorGroup.border": colors.backgroundLighter,
    "editorGroup.dropBackground": colors.unset, //* Unset
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
    "tab.hoverForeground": colors.unset, //* Unset
    "tab.unfocusedHoverForeground": colors.unset, //* Unset
    "tab.hoverBorder": colors.unset, //* Unset
    "tab.unfocusedHoverBorder": colors.unset, //* Unset
    "tab.activeModifiedBorder": colors.foreground,
    "tab.inactiveModifiedBorder": colors.foreground + "77",
    "tab.unfocusedActiveModifiedBorder": colors.foreground + "77",
    "tab.unfocusedInactiveModifiedBorder": colors.foreground + "44",
    "editorPane.background": colors.backgroundLight,
    "sideBySideEditor.horizontalBorder": colors.unset, //? Unknown
    "sideBySideEditor.verticalBorder": colors.unset, //? Unknown
};

const editor : Editor.Editor = {
    "editor.background": colors.background,
    "editor.foreground": colors.text,
    "editorLineNumber.foreground": colors.text + "77",
    "editorLineNumber.activeForeground": colors.text,
    "editorLineNumber.dimmedForeground": colors.text + "22",
    "editorCursor.background": colors.black,
    "editorCursor.foreground": colors.text + "CC",

    "editor.selectionBackground": colors.foreground + "99",
    "editor.selectionForeground": colors.unset, //* Unset
    "editor.inactiveSelectionBackground": colors.foreground + "77",
    "editor.selectionHighlightBackground": colors.foreground + "66",
    "editor.selectionHighlightBorder": colors.hidden,

    "editor.wordHighlightBackground": colors.foreground + "55",
    "editor.wordHighlightBorder": colors.hidden,
    "editor.wordHighlightStrongBackground": colors.foreground + "33",
    "editor.wordHighlightStrongBorder": colors.hidden,
    "editor.wordHighlightTextBackground": colors.unset, //* Unset
    "editor.wordHighlightTextBorder": colors.unset, //* Unset

    "editor.findMatchBackground": colors.unset, //* Unset
    "editor.findMatchHighlightBackground": colors.unset, //* Unset
    "editor.findRangeHighlightBackground": colors.foreground + "66",
    "editor.findMatchBorder": colors.hidden,
    "editor.findMatchHighlightBorder": colors.hidden,
    "editor.findRangeHighlightBorder": colors.unset, //* Unset

    "searchEditor.findMatchBackground": colors.unset, //* Unset
    "searchEditor.findMatchBorder": colors.unset, //* Unset
    "searchEditor.textInputBorder": colors.hidden,

    "editor.hoverHighlightBackground": colors.foreground + "66",

    "editor.lineHighlightBackground": colors.backgroundDark + "99",
    "editor.lineHighlightBorder": colors.hidden,

    "editorUnicodeHighlight.border": colors.warning,
    "editorUnicodeHighlight.background": colors.warningBackground,

    "editorLink.activeForeground": colors.foregroundLighter,

    "editor.rangeHighlightBackground": colors.foreground + "66",
    "editor.rangeHighlightBorder": colors.hidden,
    "editor.symbolHighlightBackground": colors.unset, //* Unset
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

    "editor.linkedEditingBackground": colors.unset, //* Unset

    "editorCodeLens.foreground": colors.text + "77",

    "editorLightBulb.foreground": colors.unset, //* Unset
    "editorLightBulbAutoFix.foreground": colors.unset, //* Unset

    "editorBracketMatch.background": colors.hidden,
    "editorBracketMatch.border": colors.text + "77",

    "editorBracketHighlight.foreground1": colors.unset, //* Unset
    "editorBracketHighlight.foreground2": colors.unset, //* Unset
    "editorBracketHighlight.foreground3": colors.unset, //* Unset
    "editorBracketHighlight.foreground4": colors.unset, //* Unset
    "editorBracketHighlight.foreground5": colors.unset, //* Unset
    "editorBracketHighlight.foreground6": colors.unset, //* Unset
    "editorBracketHighlight.unexpectedBracket.foreground": colors.unset, //* Unset

    "editorBracketPairGuide.activeBackground1": colors.unset, //* Unset
    "editorBracketPairGuide.activeBackground2": colors.unset, //* Unset
    "editorBracketPairGuide.activeBackground3": colors.unset, //* Unset
    "editorBracketPairGuide.activeBackground4": colors.unset, //* Unset
    "editorBracketPairGuide.activeBackground5": colors.unset, //* Unset
    "editorBracketPairGuide.activeBackground6": colors.unset, //* Unset

    "editorBracketPairGuide.background1": colors.unset, //* Unset
    "editorBracketPairGuide.background2": colors.unset, //* Unset
    "editorBracketPairGuide.background3": colors.unset, //* Unset
    "editorBracketPairGuide.background4": colors.unset, //* Unset
    "editorBracketPairGuide.background5": colors.unset, //* Unset
    "editorBracketPairGuide.background6": colors.unset, //* Unset

    "editor.foldBackground": colors.foreground + "33",

    "editorOverviewRuler.background": colors.background,
    "editorOverviewRuler.border": colors.backgroundLighter,
    "editorOverviewRuler.findMatchForeground": colors.unset, //* Unset
    "editorOverviewRuler.rangeHighlightForeground": colors.unset, //* Unset
    "editorOverviewRuler.selectionHighlightForeground": colors.unset, //* Unset
    "editorOverviewRuler.wordHighlightForeground": colors.unset, //* Unset
    "editorOverviewRuler.wordHighlightStrongForeground": colors.unset, //* Unset
    "editorOverviewRuler.wordHighlightTextForeground": colors.unset, //* Unset
    "editorOverviewRuler.modifiedForeground": colors.unset, //* Unset
    "editorOverviewRuler.addedForeground": colors.unset, //* Unset
    "editorOverviewRuler.deletedForeground": colors.unset, //* Unset
    "editorOverviewRuler.errorForeground": colors.error,
    "editorOverviewRuler.warningForeground": colors.unset, //* Unset
    "editorOverviewRuler.infoForeground": colors.info,
    "editorOverviewRuler.bracketMatchForeground": colors.unset, //* Unset

    "editorError.foreground": colors.error,
    "editorError.border": colors.unset, //* Unset
    "editorError.background": colors.unset, //* Unset

    "editorWarning.foreground": colors.warning,
    "editorWarning.border": colors.unset, //* Unset
    "editorWarning.background": colors.unset, //* Unset
    
    "editorInfo.foreground": colors.info,
    "editorInfo.border": colors.unset, //* Unset
    "editorInfo.background": colors.unset, //* Unset

    "editorHint.foreground": colors.unset, //* Unset
    "editorHint.border": colors.unset, //* Unset

    "problemsErrorIcon.foreground": colors.error,
    "problemsWarningIcon.foreground": colors.warning,
    "problemsInfoIcon.foreground": colors.info,

    "editorUnnecessaryCode.border": colors.text, //* Unset
    "editorUnnecessaryCode.opacity": colors.white + "FF", //* Unset

    "editorGutter.background": colors.background,
    "editorGutter.modifiedBackground": colors.unset, //* Unset
    "editorGutter.addedBackground": colors.unset, //* Unset
    "editorGutter.deletedBackground": colors.unset, //* Unset
    "editorGutter.commentRangeForeground": colors.unset, //* Unset
    "editorGutter.commentGlyphForground": colors.unset, //* Unset
    "editorGutter.foldingControlForeground": colors.text,
 
    "editorCommentsWidget.resolvedBorder": colors.unset, //* Unset
    "editorCommentsWidget.unresolvedBorder": colors.unset, //* Unset
    "editorCommentsWidget.rangeBackground": colors.unset, //* Unset
    "editorCommentsWidget.rangeBorder": colors.unset, //* Unset
    "editorCommentsWidget.rangeActiveBackground": colors.unset, //* Unset
    "editorCommentsWidget.rangeActiveBorder": colors.unset, //* Unset

};

const diffEditor : Editor.DiffEditor = {
    "diffEditor.insertedTextBackground": colors.addedDiff + "11",
    "diffEditor.insertedTextBorder": colors.hidden, //* Unset
    "diffEditor.removedTextBackground": colors.removedDiff + "11",
    "diffEditor.removedTextBorder": colors.hidden, //* Unset
    "diffEditor.border": colors.backgroundLighter,
    "diffEditor.diagonalFill": colors.backgroundLighter,
    "diffEditor.insertedLineBackground": colors.addedDiff + "11",
    "diffEditor.removedLineBackground": colors.removedDiff + "11",
    "diffEditorGutter.insertedLineBackground": colors.addedDiff + "33",
    "diffEditorGutter.removedLineBackground": colors.removedDiff + "33",
    "diffEditorOverview.insertedForeground": colors.addedDiff + "77",
    "diffEditorOverview.removedForeground": colors.removedDiff + "77",
}

const widgets : Editor.Widgets = {
    "editorWidget.foreground": colors.text,
    "editorWidget.background": colors.backgroundDark,
    "editorWidget.border": colors.backgroundLighter,
    "editorWidget.resizeBorder": colors.backgroundLighter,
    "editorSuggestWidget.background": colors.background,
    "editorSuggestWidget.border": colors.backgroundLighter,
    "editorSuggestWidget.foreground": colors.text,
    "editorSuggestWidget.focusHighlightForeground": colors.foregroundLighter,
    "editorSuggestWidget.highlightForeground": colors.foregroundLighter,
    "editorSuggestWidget.selectedBackground": colors.foreground + "77",
    "editorSuggestWidget.selectedForeground": colors.text,
    "editorSuggestWidget.selectedIconForeground": colors.text,
    "editorSuggestWidgetStatus.foreground": colors.unset, //? Unknown
    "editorHoverWidget.foreground": colors.text,
    "editorHoverWidget.background": colors.background,
    "editorHoverWidget.border": colors.backgroundLighter,
    "editorHoverWidget.highlightForeground": colors.foregroundLighter,
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

const peekView : Editor.PeekView = {
    "peekView.border": colors.info,
    "peekViewEditor.background": colors.infoBackground,
    "peekViewEditorGutter.background": colors.infoBackground,
    "peekViewEditor.matchHighlightBackground": colors.unset, //* Unset
    "peekViewEditor.matchHighlightBorder": colors.hidden,
    "peekViewEditorStickyScroll.background": colors.unset, //* Unset
    "peekViewResult.background": colors.backgroundLight,
    "peekViewResult.fileForeground": colors.text,
    "peekViewResult.lineForeground": colors.text + "BB",
    "peekViewResult.matchHighlightBackground": colors.unset, //* Unset
    "peekViewResult.selectionBackground": colors.foreground + "99",
    "peekViewResult.selectionForeground": colors.text,
    "peekViewTitle.background": colors.background,
    "peekViewTitleDescription.foreground": colors.text + "99",
    "peekViewTitleLabel.foreground": colors.text,
}

const mergeConflict : Editor.MergeConflict = {
    "merge.currentHeaderBackground": colors.unset, //* Unset
    "merge.currentContentBackground": colors.unset, //* Unset
    "merge.incomingHeaderBackground": colors.unset, //* Unset
    "merge.incomingContentBackground": colors.unset, //* Unset
    "merge.border": colors.unset, //* Unset
    "merge.commonContentBackground": colors.unset, //* Unset
    "merge.commonHeaderBackground": colors.unset, //* Unset
    "editorOverviewRuler.currentContentForeground": colors.unset, //* Unset
    "editorOverviewRuler.incomingContentForeground": colors.unset, //* Unset
    "editorOverviewRuler.commonContentForeground": colors.unset, //* Unset
    "mergeEditor.change.background": colors.unset, //* Unset
    "mergeEditor.change.word.background": colors.unset, //* Unset
    "mergeEditor.conflict.unhandledUnfocused.border": colors.unset, //* Unset
    "mergeEditor.conflict.unhandledFocused.border": colors.unset, //* Unset
    "mergeEditor.conflict.handledUnfocused.border": colors.unset, //* Unset
    "mergeEditor.conflict.handledFocused.border": colors.unset, //* Unset
    "mergeEditor.conflict.handled.minimapOverViewRuler": colors.unset, //* Unset
    "mergeEditor.conflict.unhandled.minimapOverViewRuler": colors.unset, //* Unset
    "mergeEditor.conflictingLines.background": colors.unset, //* Unset
    "mergeEditor.changeBase.background": colors.unset, //* Unset
    "mergeEditor.changeBase.word.background": colors.unset, //* Unset
    "mergeEditor.conflict.input1.background": colors.unset, //* Unset
    "mergeEditor.conflict.input2.background": colors.unset, //* Unset
}

const panel : Editor.Panel = {
    "panel.background": colors.backgroundDark,
    "panel.border": colors.hidden,
    "panel.dropBorder": colors.foreground,
    "panelTitle.activeBorder": colors.foreground,
    "panelTitle.activeForeground": colors.text,
    "panelTitle.inactiveForeground": colors.text + "77",
    "panelInput.border": colors.unset, //? Unknown
    "panelSection.border": colors.backgroundLighter,
    "panelSection.dropBackground": colors.unset, //* Unset
    "panelSectionHeader.background": colors.backgroundLight,
    "panelSectionHeader.foreground": colors.text,
    "panelSectionHeader.border": colors.unset, //? Unknown
};

const statusBar : Editor.StatusBar = {
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
    "statusBarItem.prominentForeground": colors.unset, //? Unknown
    "statusBarItem.prominentBackground": colors.unset, //? Unknown
    "statusBarItem.prominentHoverBackground": colors.unset, //? Unknown
    "statusBarItem.remoteBackground": colors.foreground,
    "statusBarItem.remoteForeground": colors.text,
    "statusBarItem.errorBackground": colors.unset, //* Unset
    "statusBarItem.errorForeground": colors.text,
    "statusBarItem.warningBackground": colors.unset, //* Unset
    "statusBarItem.warningForeground": colors.text,
    "statusBarItem.compactHoverBackground": colors.unset, //* Unset
    "statusBarItem.focusBorder": colors.text,
    "statusBar.focusBorder": colors.hidden
};

const titleBar : Editor.TitleBar = {
    "titleBar.activeBackground": colors.backgroundDark,
    "titleBar.activeForeground": colors.text,
    "titleBar.inactiveBackground": colors.backgroundLight,
    "titleBar.inactiveForeground": colors.text + "77",
    "titleBar.border": colors.unset, //* Unset
};

const menuBar : Editor.MenuBar = {
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

const commandCenter : Editor.CommandCenter = {
    "commandCenter.foreground": colors.text,
    "commandCenter.activeForeground": colors.text,
    "commandCenter.activeBackground": colors.backgroundLighter,
    "commandCenter.background": colors.unset, //* Unset
    "commandCenter.border": colors.backgroundLighter,
    "commandCenter.activeBorder": colors.backgroundLighter,
    "commandCenter.inactiveBorder": colors.backgroundLight,
    "commandCenter.inactiveForeground": colors.unset,
}

const notifications : Editor.Notifications = {

    "notificationCenter.border": colors.backgroundLighter,
    "notificationCenterHeader.foreground": colors.text,
    "notificationCenterHeader.background": colors.backgroundLight,

    "notificationToast.border": colors.backgroundLighter,
    "notifications.foreground": colors.text,
    "notifications.background": colors.backgroundDark,
    "notifications.border": colors.backgroundLighter,
    "notificationLink.foreground": colors.unset, //? Unknown
    "notificationsErrorIcon.foreground": colors.error,
    "notificationsWarningIcon.foreground": colors.warning,
    "notificationsInfoIcon.foreground": colors.info,

};

const banner = {
    "banner.background": colors.infoBackground,
    "banner.foreground": colors.text,
    "banner.iconForeground": colors.info,
}

const extensions : Editor.Extensions= {
    "extensionButton.prominentForeground": colors.text,
    "extensionButton.prominentBackground": colors.foreground,
    "extensionButton.prominentHoverBackground": colors.foregroundLight,
    "extensionButton.background": colors.foreground,
    "extensionButton.hoverBackground": colors.foregroundLight,
    "extensionButton.foreground": colors.text,
    "extensionButton.separator": colors.text,
    "extensionBadge.remoteBackground": colors.foreground,
    "extensionBadge.remoteForeground": colors.text,
    "extensionIcon.starForeground": colors.unset, //* Unset
    "extensionIcon.verifiedForeground": colors.unset, //* Unset
    "extensionIcon.preReleaseForeground": colors.unset, //* Unset
    "extensionIcon.sponsorForeground": colors.unset, //* Unset
}

const quickPicker : Editor.QuickPicker = {
    "pickerGroup.border": colors.backgroundLighter,
    "pickerGroup.foreground": colors.foreground,
    "quickInput.background": colors.backgroundDark,
    "quickInput.foreground": colors.text,
    "quickInputList.focusBackground": colors.foreground,
    "quickInputList.focusForeground": colors.text,
    "quickInputList.focusIconForeground": colors.text,
    "quickInputTitle.background": colors.backgroundLighter,
}

const keybind : Editor.Keybind = {
    "keybindingLabel.background": colors.backgroundLight,
    "keybindingLabel.foreground": colors.text,
    "keybindingLabel.border": colors.backgroundLighter,
    "keybindingLabel.bottomBorder": colors.backgroundLighter,
    "keybindingTable.headerBackground": colors.backgroundLighter,
    "keybindingTable.rowsBackground": colors.backgroundLighter,
}

const terminal : Editor.Terminal = {
    "terminal.background": colors.background,
    "terminal.border": colors.backgroundLighter,
    "terminal.foreground": colors.text,
    "terminal.ansiBlack": colors.unset, //* Unset
    "terminal.ansiBlue": colors.unset, //* Unset
    "terminal.ansiBrightBlack": colors.unset, //* Unset
    "terminal.ansiBrightBlue": colors.unset, //* Unset
    "terminal.ansiBrightCyan": colors.unset, //* Unset
    "terminal.ansiBrightGreen": colors.unset, //* Unset
    "terminal.ansiBrightMagenta": colors.unset, //* Unset
    "terminal.ansiBrightRed": colors.unset, //* Unset
    "terminal.ansiBrightWhite": colors.unset, //* Unset
    "terminal.ansiBrightYellow": colors.unset, //* Unset
    "terminal.ansiCyan": colors.unset, //* Unset
    "terminal.ansiGreen": colors.unset, //* Unset
    "terminal.ansiMagenta": colors.unset, //* Unset
    "terminal.ansiRed": colors.unset, //* Unset
    "terminal.ansiWhite": colors.unset, //* Unset
    "terminal.ansiYellow": colors.unset, //* Unset
    "terminal.selectionBackground": colors.foreground + "99",
    "terminal.inactiveSelectionBackground": colors.unset, //* Unset
    "terminal.selectionForeground": colors.unset, //* Unset
    "terminal.findMatchBackground": colors.unset, //* Unset
    "terminal.findMatchBorder": colors.unset, //* Unset
    "terminal.findMatchHighlightBackground": colors.unset, //* Unset
    "terminal.findMatchHighlightBorder": colors.unset, //* Unset
    "terminalCursor.background": colors.black,
    "terminalCursor.foreground": colors.text,
    "terminal.dropBackground": colors.unset, //* Unset
    "terminal.tab.activeBorder": colors.foreground,
    "terminalCommandDecoration.defaultBackground": colors.white + "44",
    "terminalCommandDecoration.successBackground": colors.info,
    "terminalCommandDecoration.errorBackground": colors.error,
    "terminalOverviewRuler.cursorForeground": colors.text,
    "terminalOverviewRuler.findMatchForeground": colors.unset, //* Unset
}

const debug : Editor.Debug = {
    "debugToolBar.background": colors.backgroundDark,
    "debugToolBar.border": colors.unset, //* Unset
    "editor.stackFrameHighlightBackground": colors.unset, //* Unset
    "editor.focusedStackFrameHighlightBackground": colors.unset, //* Unset
    "editor.inlineValuesForeground": colors.unset, //* Unset
    "editor.inlineValuesBackground": colors.unset, //* Unset
    "debugView.exceptionLabelForeground": colors.text,
    "debugView.exceptionLabelBackground": colors.unset, //* Unset
    "debugView.stateLabelForeground": colors.text,
    "debugView.stateLabelBackground": colors.unset, //* Unset
    "debugView.valueChangedHighlight": colors.info,
    "debugTokenExpression.name": colors.unset, //*Unset
    "debugTokenExpression.value": colors.text + "77",
    "debugTokenExpression.string": colors.unset, //* Unset
    "debugTokenExpression.boolean": colors.unset, //* Unset
    "debugTokenExpression.number": colors.unset, //* Unset
    "debugTokenExpression.error": colors.unset, //* Unset
}

const testing : Editor.Testing = {
    "testing.iconFailed": colors.error,
    "testing.iconErrored": colors.error,
    "testing.iconPassed": colors.pass,
    "testing.runAction": colors.pass,
    "testing.iconQueued": colors.warning,
    "testing.iconUnset": colors.white + "44",
    "testing.iconSkipped": colors.white + "44",
    "testing.peekBorder": colors.unset, //* Unset
    "testing.peekHeaderBackground": colors.backgroundDark,
    "testing.message.error.decorationForeground": colors.error,
    "testing.message.error.lineBackground": colors.errorBackground,
    "testing.message.info.decorationForeground": colors.info,
    "testing.message.info.lineBackground": colors.infoBackground,
}

const welcomePage : Editor.WelcomePage = {
    "welcomePage.background": colors.background,
    "welcomePage.progress.background": colors.backgroundLighter,
    "welcomePage.progress.foreground": colors.foreground,
    "welcomePage.tileBackground": colors.backgroundDark,
    "welcomePage.tileHoverBackground": colors.backgroundLight,
    "welcomePage.tileBorder": colors.foreground,
    "walkThrough.embeddedEditorBackground": colors.unset, //? Unknown
    "walkthrough.stepTitle.foreground": colors.text,
    "welcomeOverlay.background": colors.unset,
}

const sourceControl : Editor.SourceControl = {
    "scm.providerBorder": colors.unset, //? Unknown
}

const git : Editor.Git = {
    "gitDecoration.addedResourceForeground": colors.unset, //* Unset
    "gitDecoration.modifiedResourceForeground": colors.unset, //* Unset
    "gitDecoration.deletedResourceForeground": colors.unset, //* Unset
    "gitDecoration.renamedResourceForeground": colors.unset, //* Unset
    "gitDecoration.stageModifiedResourceForeground": colors.unset, //* Unset
    "gitDecoration.stageDeletedResourceForeground": colors.unset, //* Unset
    "gitDecoration.untrackedResourceForeground": colors.unset, //* Unset
    "gitDecoration.ignoredResourceForeground": colors.unset, //* Unset
    "gitDecoration.conflictingResourceForeground": colors.unset, //* Unset
    "gitDecoration.submoduleResourceForeground": colors.unset, //* Unset
}

const settings : Editor.Settings = {
    "settings.headerForeground": colors.text,
    "settings.modifiedItemIndicator": colors.info,
    "settings.dropdownBackground": colors.backgroundLighter,
    "settings.dropdownForeground": colors.text,
    "settings.dropdownBorder": colors.unset, //* Unset
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
    "settings.settingsHeaderHoverForeground": colors.unset
}

const breadcrumbs : Editor.BreadCrumbs = {
    "breadcrumb.foreground": colors.text + "77",
    "breadcrumb.background": colors.background,
    "breadcrumb.focusForeground": colors.text,
    "breadcrumb.activeSelectionForeground": colors.text,
    "breadcrumbPicker.background": colors.backgroundDark,
}

const snippets : Editor.Snippets = {
    "editor.snippetTabstopHighlightBackground": colors.unset, //? Unknown
    "editor.snippetTabstopHighlightBorder": colors.unset, //? Unknown
    "editor.snippetFinalTabstopHighlightBackground": colors.unset, //? Unknown
    "editor.snippetFinalTabstopHighlightBorder": colors.unset, //? Unknown
}

const symbolIcons : Editor.SymbolIcons = {
    "symbolIcon.arrayForeground": colors.unset, //* Unset
    "symbolIcon.booleanForeground": colors.unset, //* Unset
    "symbolIcon.classForeground": colors.unset, //* Unset
    "symbolIcon.colorForeground": colors.unset, //* Unset
    "symbolIcon.constantForeground": colors.unset, //* Unset
    "symbolIcon.constructorForeground": colors.unset, //* Unset
    "symbolIcon.enumeratorForeground": colors.unset, //* Unset
    "symbolIcon.enumeratorMemberForeground": colors.unset, //* Unset
    "symbolIcon.eventForeground": colors.unset, //* Unset
    "symbolIcon.fieldForeground": colors.unset, //* Unset
    "symbolIcon.fileForeground": colors.unset, //* Unset
    "symbolIcon.folderForeground": colors.unset, //* Unset
    "symbolIcon.functionForeground": colors.unset, //* Unset
    "symbolIcon.interfaceForeground": colors.unset, //* Unset
    "symbolIcon.keyForeground": colors.unset, //* Unset
    "symbolIcon.keywordForeground": colors.unset, //* Unset
    "symbolIcon.methodForeground": colors.unset, //* Unset
    "symbolIcon.moduleForeground": colors.unset, //* Unset
    "symbolIcon.namespaceForeground": colors.unset, //* Unset
    "symbolIcon.nullForeground": colors.unset, //* Unset
    "symbolIcon.numberForeground": colors.unset, //* Unset
    "symbolIcon.objectForeground": colors.unset, //* Unset
    "symbolIcon.operatorForeground": colors.unset, //* Unset
    "symbolIcon.packageForeground": colors.unset, //* Unset
    "symbolIcon.propertyForeground": colors.unset, //* Unset
    "symbolIcon.referenceForeground": colors.unset, //* Unset
    "symbolIcon.snippetForeground": colors.unset, //* Unset
    "symbolIcon.stringForeground": colors.unset, //* Unset
    "symbolIcon.structForeground": colors.unset, //* Unset
    "symbolIcon.textForeground": colors.unset, //* Unset
    "symbolIcon.typeParameterForeground": colors.unset, //* Unset
    "symbolIcon.unitForeground": colors.unset, //* Unset
    "symbolIcon.variableForeground": colors.unset, //* Unset
}

const debugIcons : Editor.DebugIcons = {
    "debugIcon.breakpointForeground": colors.unset, //* Unset
    "debugIcon.breakpointDisabledForeground": colors.unset, //* Unset
    "debugIcon.breakpointUnverifiedForeground": colors.unset, //* Unset
    "debugIcon.breakpointCurrentStackframeForeground": colors.unset, //* Unset
    "debugIcon.breakpointStackframeForeground": colors.unset, //* Unset
    "debugIcon.startForeground": colors.unset, //* Unset
    "debugIcon.pauseForeground": colors.unset, //* Unset
    "debugIcon.stopForeground": colors.unset, //* Unset
    "debugIcon.disconnectForeground": colors.unset, //* Unset
    "debugIcon.restartForeground": colors.unset, //* Unset
    "debugIcon.stepOverForeground": colors.unset, //* Unset
    "debugIcon.stepIntoForeground": colors.unset, //* Unset
    "debugIcon.stepOutForeground": colors.unset, //* Unset
    "debugIcon.continueForeground": colors.unset, //* Unset
    "debugIcon.stepBackForeground": colors.unset, //* Unset
    "debugConsole.infoForeground": colors.unset, //* Unset
    "debugConsole.warningForeground": colors.unset, //* Unset
    "debugConsole.errorForeground": colors.unset, //* Unset
    "debugConsole.sourceForeground": colors.unset, //* Unset
    "debugConsoleInputIcon.foreground": colors.unset, //* Unset

}

const notebook : Editor.Notebook = {
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
    "notebook.inactiveSelectedCellBorder": colors.unset, //? Unknown
    "notebook.outputContainerBackgroundColor": colors.background,
    "notebook.outputContainerBorderColor": colors.hidden,
    "notebook.selectedCellBackground": colors.unset, //? Unknown
    "notebook.selectedCellBorder": colors.unset, //? Unknown 
    "notebook.symbolHighlightBackground": colors.unset, //? Unknown
    "notebookScrollbarSlider.background": colors.foreground + "77",
    "notebookScrollbarSlider.activeBackground": colors.foreground + "BB",
    "notebookScrollbarSlider.hoverBackground": colors.foreground + "99",
    "notebookStatusErrorIcon.foreground": colors.error,
    "notebookStatusRunningIcon.foreground": colors.text,
    "notebookStatusSuccessIcon.foreground": colors.pass,
    "notebookEditorOverviewRuler.runningCellForeground": colors.unset, //? Unknown
}

const chart : Editor.Chart = {
    "charts.foreground": colors.unset, //? Unknown
    "charts.lines": colors.unset, //? Unknown
    "charts.red": colors.unset, //? Unknown
    "charts.green": colors.unset, //? Unknown
    "charts.blue": colors.unset, //? Unknown
    "charts.yellow": colors.unset, //? Unknown
    "charts.orange": colors.unset, //? Unknown
    "charts.purple": colors.unset, //? Unknown
}

const ports : Editor.Port = {
    "ports.iconRunningProcessForeground": colors.unset, //* Unset
}

export const color = {
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
    ...profiles,
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
    ...symbolIcons,
    ...debugIcons,
    ...notebook,
    ...chart,
    ...ports
}