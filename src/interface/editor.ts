type color = string | undefined;

export namespace Editor {
    export interface Contrast {
        "contrastActiveBorder": color;
        "contrastBorder": color;
    }

    export interface Base {
        "focusBorder": color;
        "foreground": color;
        "disabledForeground": color;
        "selection.background": color;
        "descriptionForeground": color;
        "errorForeground": color;
        "icon.foreground": color;
        "widget.shadow": color;
        "sash.hoverBorder": color;
    }

    export interface Window {
        "window.activeBorder": color;
        "window.inactiveBorder": color;
    }

    export interface Text {
        "textBlockQuote.background": color;
        "textBlockQuote.border": color;
        "textCodeBlock.background": color;
        "textLink.activeForeground": color;
        "textLink.foreground": color;
        "textPreformat.foreground": color;
        "textSeparator.foreground": color;
    }

    export interface Actions {
        "toolbar.hoverBackground": color;
        "toolbar.hoverOutline": color;
        "toolbar.activeBackground": color;
    }

    export interface Buttons {
        "button.background": color;
        "button.foreground": color;
        "button.border": color;
        "button.separator": color;
        "button.hoverBackground": color;
        "button.secondaryForeground": color;
        "button.secondaryBackground": color;
        "button.secondaryHoverBackground": color;
    }

    export interface CheckBox {
        "checkbox.background": color;
        "checkbox.border": color;
        "checkbox.foreground": color;
        "checkbox.selectBackground": color;
        "checkbox.selectBorder": color;
    }

    export interface Dropdown {
        "dropdown.background": color;
        "dropdown.border": color;
        "dropdown.foreground": color;
        "dropdown.listBackground": color;
    }

    export interface Input {
        "input.background": color,
        "input.border": color,
        "input.foreground": color,
        "input.placeholderForeground": color,

        "inputOption.activeBackground": color,
        "inputOption.activeBorder": color,
        "inputOption.activeForeground": color,
        "inputOption.hoverBackground": color,

        "inputValidation.errorBackground": color,
        "inputValidation.errorForeground": color,
        "inputValidation.errorBorder": color,

        "inputValidation.infoBackground": color,
        "inputValidation.infoForeground": color,
        "inputValidation.infoBorder": color,

        "inputValidation.warningBackground": color,
        "inputValidation.warningForeground": color,
        "inputValidation.warningBorder": color,
    }

    export interface Scrollbar {
        "scrollbar.shadow": color;
        "scrollbarSlider.background": color;
        "scrollbarSlider.hoverBackground": color;
        "scrollbarSlider.activeBackground": color;
    }

    export interface Badge {
        "badge.background": color;
        "badge.foreground": color;
    }

    export interface ProgressBar {
        "progressBar.background": color;
    }

    export interface List {
        "list.activeSelectionBackground": color;
        "list.activeSelectionForeground": color,
        "list.activeSelectionIconForeground": color,

        "list.dropBackground": color,
        "list.focusBackground": color,
        "list.focusForeground": color,
        "list.focusHighlightForeground": color,
        "list.focusOutline": color,
        "list.focusAndSelectionOutline": color,
        "list.highlightForeground": color,
        "list.hoverBackground": color,
        "list.hoverForeground": color,

        "list.inactiveSelectionBackground": color,
        "list.inactiveSelectionForeground": color,
        "list.inactiveSelectionIconForeground": color,
        "list.inactiveFocusBackground": color,
        "list.inactiveFocusOutline": color,
        "list.invalidItemForeground": color,
        "list.errorForeground": color,
        "list.warningForeground": color,
        "listFilterWidget.background": color,
        "listFilterWidget.outline": color,
        "listFilterWidget.noMatchesOutline": color,
        "listFilterWidget.shadow": color,
        "list.filterMatchBackground": color,
        "list.filterMatchBorder": color,
        "list.deemphasizedForeground": color,
        "tree.indentGuidesStroke": color,
        "tree.tableColumnsBorder": color,
        "tree.tableOddRowsBackground": color,
    }

    export interface ActivityBar {
        "activityBar.background": color;
        "activityBar.dropBorder": color;
        "activityBar.foreground": color;
        "activityBar.inactiveForeground": color;
        "activityBar.border": color;
        "activityBarBadge.background": color;
        "activityBarBadge.foreground": color;
        "activityBar.activeBorder": color;
        "activityBar.activeBackground": color;
        "activityBar.activeFocusBorder": color;
        "activityBarItem.profilesForeground": color;
        "activityBarItem.profilesHoverForeground": color;
        "activityBarItem.profilesBackground": color;
    }

    export interface SideBar {
        "sideBar.background": color;
        "sideBar.foreground": color;
        "sideBar.border": color;
        "sideBar.dropBackground": color;
        "sideBarTitle.foreground": color;
        "sideBarSectionHeader.background": color;
        "sideBarSectionHeader.foreground": color;
        "sideBarSectionHeader.border": color;
    }

    export interface Minimap {
        "minimap.findMatchHighlight": color,
        "minimap.selectionHighlight": color,
        "minimap.errorHighlight": color,
        "minimap.warningHighlight": color,
        "minimap.background": color,
        "minimap.selectionOccurrenceHighlight": color,
        "minimap.foregroundOpacity": color,
        "minimapSlider.background": color,
        "minimapSlider.hoverBackground": color,
        "minimapSlider.activeBackground": color,
        "minimapGutter.addedBackground": color,
        "minimapGutter.modifiedBackground": color,
        "minimapGutter.deletedBackground": color,
    }

    export interface TabGroup {
        "editorGroup.border": color;
        "editorGroup.dropBackground": color;
        "editorGroupHeader.noTabsBackground": color;
        "editorGroupHeader.tabsBackground": color;
        "editorGroupHeader.tabsBorder": color;
        "editorGroupHeader.border": color;
        "editorGroup.emptyBackground": color;
        "editorGroup.focusedEmptyBorder": color;
        "editorGroup.dropIntoPromptForeground": color;
        "editorGroup.dropIntoPromptBackground": color;
        "editorGroup.dropIntoPromptBorder": color;

        "tab.activeBackground": color;
        "tab.unfocusedActiveBackground": color;
        "tab.activeForeground": color;
        "tab.border": color;
        "tab.activeBorder": color;
        "tab.unfocusedActiveBorder": color;
        "tab.activeBorderTop": color;
        "tab.unfocusedActiveBorderTop": color;
        "tab.lastPinnedBorder": color;
        "tab.inactiveBackground": color;
        "tab.unfocusedInactiveBackground": color;
        "tab.inactiveForeground": color;
        "tab.unfocusedActiveForeground": color;
        "tab.unfocusedInactiveForeground": color;
        "tab.hoverBackground": color;
        "tab.unfocusedHoverBackground": color;
        "tab.hoverForeground": color;
        "tab.unfocusedHoverForeground": color;
        "tab.hoverBorder": color;
        "tab.unfocusedHoverBorder": color;
        "tab.activeModifiedBorder": color;
        "tab.inactiveModifiedBorder": color;
        "tab.unfocusedActiveModifiedBorder": color;
        "tab.unfocusedInactiveModifiedBorder": color;
        "editorPane.background": color;
        "sideBySideEditor.horizontalBorder": color;
        "sideBySideEditor.verticalBorder": color;
    }

    export interface Editor {
        "editor.background": color;
        "editor.foreground": color;
        "editorLineNumber.foreground": color;
        "editorLineNumber.activeForeground": color;
        "editorCursor.background": color;
        "editorCursor.foreground": color;

        "editor.selectionBackground": color;
        "editor.selectionForeground": color;
        "editor.inactiveSelectionBackground": color;
        "editor.selectionHighlightBackground": color;
        "editor.selectionHighlightBorder": color;

        "editor.wordHighlightBackground": color;
        "editor.wordHighlightBorder": color;
        "editor.wordHighlightStrongBackground": color;
        "editor.wordHighlightStrongBorder": color;

        "editor.findMatchBackground": color;
        "editor.findMatchHighlightBackground": color;
        "editor.findRangeHighlightBackground": color;
        "editor.findMatchBorder": color;
        "editor.findMatchHighlightBorder": color;
        "editor.findRangeHighlightBorder": color;

        "searchEditor.findMatchBackground": color;
        "searchEditor.findMatchBorder": color;
        "searchEditor.textInputBorder": color;

        "editor.hoverHighlightBackground": color;

        "editor.lineHighlightBackground": color;
        "editor.lineHighlightBorder": color;

        "editorUnicodeHighlight.border": color;
        "editorUnicodeHighlight.background": color;

        "editorLink.activeForeground": color;

        "editor.rangeHighlightBackground": color;
        "editor.rangeHighlightBorder": color;
        "editor.symbolHighlightBackground": color;
        "editor.symbolHighlightBorder": color;
        "editorWhitespace.foreground": color;

        "editorIndentGuide.background": color;
        "editorIndentGuide.activeBackground": color;

        "editorInlayHint.background": color;
        "editorInlayHint.foreground": color;
        "editorInlayHint.typeForeground": color;
        "editorInlayHint.typeBackground": color;
        "editorInlayHint.parameterForeground": color;
        "editorInlayHint.parameterBackground": color;

        "editorRuler.foreground": color;

        "editor.linkedEditingBackground": color;

        "editorCodeLens.foreground": color;

        "editorLightBulb.foreground": color;
        "editorLightBulbAutoFix.foreground": color;

        "editorBracketMatch.background": color;
        "editorBracketMatch.border": color;

        "editorBracketHighlight.foreground1": color;
        "editorBracketHighlight.foreground2": color;
        "editorBracketHighlight.foreground3": color;
        "editorBracketHighlight.foreground4": color;
        "editorBracketHighlight.foreground5": color;
        "editorBracketHighlight.foreground6": color;
        "editorBracketHighlight.unexpectedBracket.foreground": color;

        "editorBracketPairGuide.activeBackground1": color;
        "editorBracketPairGuide.activeBackground2": color;
        "editorBracketPairGuide.activeBackground3": color;
        "editorBracketPairGuide.activeBackground4": color;
        "editorBracketPairGuide.activeBackground5": color;
        "editorBracketPairGuide.activeBackground6": color;

        "editorBracketPairGuide.background1": color;
        "editorBracketPairGuide.background2": color;
        "editorBracketPairGuide.background3": color;
        "editorBracketPairGuide.background4": color;
        "editorBracketPairGuide.background5": color;
        "editorBracketPairGuide.background6": color;

        "editor.foldBackground": color;

        "editorOverviewRuler.background": color;
        "editorOverviewRuler.border": color;
        "editorOverviewRuler.findMatchForeground": color;
        "editorOverviewRuler.rangeHighlightForeground": color;
        "editorOverviewRuler.selectionHighlightForeground": color;
        "editorOverviewRuler.wordHighlightForeground": color;
        "editorOverviewRuler.wordHighlightStrongForeground": color;
        "editorOverviewRuler.modifiedForeground": color;
        "editorOverviewRuler.addedForeground": color;
        "editorOverviewRuler.deletedForeground": color;
        "editorOverviewRuler.errorForeground": color;
        "editorOverviewRuler.warningForeground": color;
        "editorOverviewRuler.infoForeground": color;
        "editorOverviewRuler.bracketMatchForeground": color;

        "editorError.foreground": color;
        "editorError.border": color;
        "editorError.background": color;

        "editorWarning.foreground": color;
        "editorWarning.border": color;
        "editorWarning.background": color;

        "editorInfo.foreground": color;
        "editorInfo.border": color;
        "editorInfo.background": color;

        "editorHint.foreground": color;
        "editorHint.border": color;

        "problemsErrorIcon.foreground": color;
        "problemsWarningIcon.foreground": color;
        "problemsInfoIcon.foreground": color;

        "editorUnnecessaryCode.border": color;
        "editorUnnecessaryCode.opacity": color;

        "editorGutter.background": color;
        "editorGutter.modifiedBackground": color;
        "editorGutter.addedBackground": color;
        "editorGutter.deletedBackground": color;
        "editorGutter.commentRangeForeground": color;
        "editorGutter.foldingControlForeground": color;

        "editorCommentsWidget.resolvedBorder": color;
        "editorCommentsWidget.unresolvedBorder": color;
        "editorCommentsWidget.rangeBackground": color;
        "editorCommentsWidget.rangeBorder": color;
        "editorCommentsWidget.rangeActiveBackground": color;
        "editorCommentsWidget.rangeActiveBorder": color;
    }

    export interface DiffEditor {
        "diffEditor.insertedTextBackground": color;
        "diffEditor.insertedTextBorder": color;
        "diffEditor.removedTextBackground": color;
        "diffEditor.removedTextBorder": color;
        "diffEditor.border": color;
        "diffEditor.diagonalFill": color;
        "diffEditor.insertedLineBackground": color;
        "diffEditor.removedLineBackground": color;
        "diffEditorGutter.insertedLineBackground": color;
        "diffEditorGutter.removedLineBackground": color;
        "diffEditorOverview.insertedForeground": color;
        "diffEditorOverview.removedForeground": color;
    }

    export interface Widgets {
        "editorWidget.foreground": color;
        "editorWidget.background": color;
        "editorWidget.border": color;
        "editorWidget.resizeBorder": color;
        "editorSuggestWidget.background": color;
        "editorSuggestWidget.border": color;
        "editorSuggestWidget.foreground": color;
        "editorSuggestWidget.focusHighlightForeground": color;
        "editorSuggestWidget.highlightForeground": color;
        "editorSuggestWidget.selectedBackground": color;
        "editorSuggestWidget.selectedForeground": color;
        "editorSuggestWidget.selectedIconForeground": color;
        "editorSuggestWidgetStatus.foreground": color;
        "editorHoverWidget.foreground": color;
        "editorHoverWidget.background": color;
        "editorHoverWidget.border": color;
        "editorHoverWidget.highlightForeground": color;
        "editorHoverWidget.statusBarBackground": color;
        "editorGhostText.border": color;
        "editorGhostText.background": color;
        "editorGhostText.foreground": color;

        "editorStickyScroll.background": color;
        "editorStickyScrollHover.background": color;

        "debugExceptionWidget.background": color;
        "debugExceptionWidget.border": color;

        "editorMarkerNavigation.background": color;
        "editorMarkerNavigationError.background": color;
        "editorMarkerNavigationWarning.background": color;
        "editorMarkerNavigationInfo.background": color;
        "editorMarkerNavigationError.headerBackground": color;
        "editorMarkerNavigationWarning.headerBackground": color;
        "editorMarkerNavigationInfo.headerBackground": color;
    }

    export interface PeekView {
        "peekView.border": color;
        "peekViewEditor.background": color;
        "peekViewEditorGutter.background": color;
        "peekViewEditor.matchHighlightBackground": color;
        "peekViewEditor.matchHighlightBorder": color;
        "peekViewResult.background": color;
        "peekViewResult.fileForeground": color;
        "peekViewResult.lineForeground": color;
        "peekViewResult.matchHighlightBackground": color;
        "peekViewResult.selectionBackground": color;
        "peekViewResult.selectionForeground": color;
        "peekViewTitle.background": color;
        "peekViewTitleDescription.foreground": color;
        "peekViewTitleLabel.foreground": color;
    }

    export interface MergeConflict {
        "merge.currentHeaderBackground": color;
        "merge.currentContentBackground": color;
        "merge.incomingHeaderBackground": color;
        "merge.incomingContentBackground": color;
        "merge.border": color;
        "merge.commonContentBackground": color;
        "merge.commonHeaderBackground": color;
        "editorOverviewRuler.currentContentForeground": color;
        "editorOverviewRuler.incomingContentForeground": color;
        "editorOverviewRuler.commonContentForeground": color;
        "mergeEditor.change.background": color;
        "mergeEditor.change.word.background": color;
        "mergeEditor.conflict.unhandledUnfocused.border": color;
        "mergeEditor.conflict.unhandledFocused.border": color;
        "mergeEditor.conflict.handledUnfocused.border": color;
        "mergeEditor.conflict.handledFocused.border": color;
        "mergeEditor.conflict.handled.minimapOverViewRuler": color;
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": color;
        "mergeEditor.conflictingLines.background": color;
        "mergeEditor.changeBase.background": color,
        "mergeEditor.changeBase.word.background": color,
        "mergeEditor.conflict.input1.background": color,
        "mergeEditor.conflict.input2.background": color,
    }

    export interface Panel {
        "panel.background": color;
        "panel.border": color;
        "panel.dropBorder": color;
        "panelTitle.activeBorder": color;
        "panelTitle.activeForeground": color;
        "panelTitle.inactiveForeground": color;
        "panelInput.border": color;
        "panelSection.border": color;
        "panelSection.dropBackground": color;
        "panelSectionHeader.background": color;
        "panelSectionHeader.foreground": color;
        "panelSectionHeader.border": color;
    }

    export interface StatusBar {
        "statusBar.background": color;
        "statusBar.foreground": color;
        "statusBar.border": color;
        "statusBar.debuggingBackground": color;
        "statusBar.debuggingForeground": color;
        "statusBar.debuggingBorder": color;
        "statusBar.noFolderForeground": color;
        "statusBar.noFolderBackground": color;
        "statusBar.noFolderBorder": color;
        "statusBar.offlineBackground": color,
        "statusBar.offlineBorder": color,
        "statusBar.offlineForeground": color,
        "statusBarItem.activeBackground": color;
        "statusBarItem.hoverBackground": color;
        "statusBarItem.prominentForeground": color;
        "statusBarItem.prominentBackground": color;
        "statusBarItem.prominentHoverBackground": color;
        "statusBarItem.remoteBackground": color;
        "statusBarItem.remoteForeground": color;
        "statusBarItem.errorBackground": color;
        "statusBarItem.errorForeground": color;
        "statusBarItem.warningBackground": color;
        "statusBarItem.warningForeground": color;
        "statusBarItem.compactHoverBackground": color;
        "statusBarItem.focusBorder": color;
        "statusBar.focusBorder": color;
    }

    export interface TitleBar {
        "titleBar.activeBackground": color;
        "titleBar.activeForeground": color;
        "titleBar.inactiveBackground": color;
        "titleBar.inactiveForeground": color;
        "titleBar.border": color;
    }

    export interface MenuBar {
        "menubar.selectionForeground": color;
        "menubar.selectionBackground": color;
        "menubar.selectionBorder": color;

        "menu.foreground": color;
        "menu.background": color;

        "menu.selectionForeground": color;
        "menu.selectionBackground": color;
        "menu.selectionBorder": color;
        "menu.separatorBackground": color;
        "menu.border": color;
    }

    export interface CommandCenter {
        "commandCenter.foreground": color;
        "commandCenter.activeForeground": color;
        "commandCenter.activeBackground": color;
        "commandCenter.activeBorder": color;
        "commandCenter.inactiveBorder": color;
        "commandCenter.inactiveForeground": color;
        "commandCenter.background": color;
        "commandCenter.border": color;
    }

    export interface Notifications {
        "notificationCenter.border": color;
        "notificationCenterHeader.foreground": color;
        "notificationCenterHeader.background": color;

        "notificationToast.border": color;
        "notifications.foreground": color;
        "notifications.background": color;
        "notifications.border": color;
        "notificationLink.foreground": color;
        "notificationsErrorIcon.foreground": color;
        "notificationsWarningIcon.foreground": color;
        "notificationsInfoIcon.foreground": color;
    }

    export interface Banner {
        "banner.background": color;
        "banner.foreground": color;
        "banner.iconForeground": color,
    }

    export interface Extensions {
        "extensionButton.prominentForeground": color;
        "extensionButton.prominentBackground": color;
        "extensionButton.prominentHoverBackground": color;
        "extensionButton.background": color;
        "extensionButton.foreground": color;
        "extensionButton.hoverBackground": color;
        "extensionButton.separator": color;
        "extensionBadge.remoteBackground": color;
        "extensionBadge.remoteForeground": color;
        "extensionIcon.starForeground": color;
        "extensionIcon.verifiedForeground": color;
        "extensionIcon.preReleaseForeground": color;
        "extensionIcon.sponsorForeground": color;
    }

    export interface QuickPicker {
        "pickerGroup.border": color;
        "pickerGroup.foreground": color;
        "quickInput.background": color;
        "quickInput.foreground": color;
        "quickInputList.focusBackground": color;
        "quickInputList.focusForeground": color;
        "quickInputList.focusIconForeground": color;
        "quickInputTitle.background": color;
    }

    export interface Keybind {
        "keybindingLabel.background": color;
        "keybindingLabel.foreground": color;
        "keybindingLabel.border": color;
        "keybindingLabel.bottomBorder": color;
        "keybindingTable.headerBackground": color;
        "keybindingTable.rowsBackground": color;
    }

    export interface Terminal {
        "terminal.background": color;
        "terminal.border": color;
        "terminal.foreground": color;
        "terminal.ansiBlack": color;
        "terminal.ansiBlue": color;
        "terminal.ansiBrightBlack": color;
        "terminal.ansiBrightBlue": color;
        "terminal.ansiBrightCyan": color;
        "terminal.ansiBrightGreen": color;
        "terminal.ansiBrightMagenta": color;
        "terminal.ansiBrightRed": color;
        "terminal.ansiBrightWhite": color;
        "terminal.ansiBrightYellow": color;
        "terminal.ansiCyan": color;
        "terminal.ansiGreen": color;
        "terminal.ansiMagenta": color;
        "terminal.ansiRed": color;
        "terminal.ansiWhite": color;
        "terminal.ansiYellow": color;
        "terminal.selectionBackground": color;
        "terminal.inactiveSelectionBackground": color;
        "terminal.selectionForeground": color;
        "terminal.findMatchBackground": color;
        "terminal.findMatchBorder": color;
        "terminal.findMatchHighlightBackground": color;
        "terminal.findMatchHighlightBorder": color;
        "terminalCursor.background": color;
        "terminalCursor.foreground": color;
        "terminal.dropBackground": color;
        "terminal.tab.activeBorder": color;
        "terminalCommandDecoration.defaultBackground": color;
        "terminalCommandDecoration.successBackground": color;
        "terminalCommandDecoration.errorBackground": color;
        "terminalOverviewRuler.cursorForeground": color;
        "terminalOverviewRuler.findMatchForeground": color;
    }

    export interface Debug {
        "debugToolBar.background": color;
        "debugToolBar.border": color;
        "editor.stackFrameHighlightBackground": color;
        "editor.focusedStackFrameHighlightBackground": color;
        "editor.inlineValuesForeground": color;
        "editor.inlineValuesBackground": color;
        "debugView.exceptionLabelForeground": color;
        "debugView.exceptionLabelBackground": color;
        "debugView.stateLabelForeground": color;
        "debugView.stateLabelBackground": color;
        "debugView.valueChangedHighlight": color;
        "debugTokenExpression.name": color;
        "debugTokenExpression.value": color;
        "debugTokenExpression.string": color;
        "debugTokenExpression.boolean": color;
        "debugTokenExpression.number": color;
        "debugTokenExpression.error": color;

    }

    export interface Testing {
        "testing.iconFailed": color;
        "testing.iconErrored": color;
        "testing.iconPassed": color;
        "testing.runAction": color;
        "testing.iconQueued": color;
        "testing.iconUnset": color;
        "testing.iconSkipped": color;
        "testing.peekBorder": color;
        "testing.peekHeaderBackground": color;
        "testing.message.error.decorationForeground": color;
        "testing.message.error.lineBackground": color;
        "testing.message.info.decorationForeground": color;
        "testing.message.info.lineBackground": color,
    }

    export interface WelcomePage {
        "welcomePage.background": color;
        "welcomePage.progress.background": color;
        "welcomePage.progress.foreground": color;
        "welcomePage.tileBackground": color;
        "welcomePage.tileHoverBackground": color;
        "welcomePage.tileBorder": color;
        "walkThrough.embeddedEditorBackground": color;
        "walkthrough.stepTitle.foreground": color;
    }

    export interface SourceControl {
        "scm.providerBorder": color;
    }

    export interface Git {
        "gitDecoration.addedResourceForeground": color;
        "gitDecoration.modifiedResourceForeground": color;
        "gitDecoration.deletedResourceForeground": color;
        "gitDecoration.renamedResourceForeground": color;
        "gitDecoration.stageModifiedResourceForeground": color;
        "gitDecoration.stageDeletedResourceForeground": color;
        "gitDecoration.untrackedResourceForeground": color;
        "gitDecoration.ignoredResourceForeground": color;
        "gitDecoration.conflictingResourceForeground": color;
        "gitDecoration.submoduleResourceForeground": color;
    }

    export interface Settings {
        "settings.headerForeground": color;
        "settings.modifiedItemIndicator": color;
        "settings.dropdownBackground": color;
        "settings.dropdownForeground": color;
        "settings.dropdownBorder": color;
        "settings.dropdownListBorder": color;
        "settings.checkboxBackground": color;
        "settings.checkboxForeground": color;
        "settings.checkboxBorder": color;
        "settings.rowHoverBackground": color;
        "settings.textInputBackground": color;
        "settings.textInputForeground": color;
        "settings.textInputBorder": color;
        "settings.numberInputBackground": color;
        "settings.numberInputForeground": color;
        "settings.numberInputBorder": color;
        "settings.focusedRowBackground": color;
        "settings.focusedRowBorder": color;
        "settings.headerBorder": color;
        "settings.sashBorder": color;
    }

    export interface BreadCrumbs {
        "breadcrumb.foreground": color;
        "breadcrumb.background": color;
        "breadcrumb.focusForeground": color;
        "breadcrumb.activeSelectionForeground": color;
        "breadcrumbPicker.background": color;
    }

    export interface Snippets {
        "editor.snippetTabstopHighlightBackground": color;
        "editor.snippetTabstopHighlightBorder": color;
        "editor.snippetFinalTabstopHighlightBackground": color;
        "editor.snippetFinalTabstopHighlightBorder": color;
    }

    export interface SymbolIcons {
        "symbolIcon.arrayForeground": color;
        "symbolIcon.booleanForeground": color;
        "symbolIcon.classForeground": color;
        "symbolIcon.colorForeground": color;
        "symbolIcon.constantForeground": color;
        "symbolIcon.constructorForeground": color;
        "symbolIcon.enumeratorForeground": color;
        "symbolIcon.enumeratorMemberForeground": color;
        "symbolIcon.eventForeground": color;
        "symbolIcon.fieldForeground": color;
        "symbolIcon.fileForeground": color;
        "symbolIcon.folderForeground": color;
        "symbolIcon.functionForeground": color;
        "symbolIcon.interfaceForeground": color;
        "symbolIcon.keyForeground": color;
        "symbolIcon.keywordForeground": color;
        "symbolIcon.methodForeground": color;
        "symbolIcon.moduleForeground": color;
        "symbolIcon.namespaceForeground": color;
        "symbolIcon.nullForeground": color;
        "symbolIcon.numberForeground": color;
        "symbolIcon.objectForeground": color;
        "symbolIcon.operatorForeground": color;
        "symbolIcon.packageForeground": color;
        "symbolIcon.propertyForeground": color;
        "symbolIcon.referenceForeground": color;
        "symbolIcon.snippetForeground": color;
        "symbolIcon.stringForeground": color;
        "symbolIcon.structForeground": color;
        "symbolIcon.textForeground": color;
        "symbolIcon.typeParameterForeground": color;
        "symbolIcon.unitForeground": color;
        "symbolIcon.variableForeground": color;
    }

    export interface DebugIcons {
        "debugIcon.breakpointForeground": color;
        "debugIcon.breakpointDisabledForeground": color;
        "debugIcon.breakpointUnverifiedForeground": color;
        "debugIcon.breakpointCurrentStackframeForeground": color;
        "debugIcon.breakpointStackframeForeground": color;
        "debugIcon.startForeground": color;
        "debugIcon.pauseForeground": color;
        "debugIcon.stopForeground": color;
        "debugIcon.disconnectForeground": color;
        "debugIcon.restartForeground": color;
        "debugIcon.stepOverForeground": color;
        "debugIcon.stepIntoForeground": color;
        "debugIcon.stepOutForeground": color;
        "debugIcon.continueForeground": color;
        "debugIcon.stepBackForeground": color;
        "debugConsole.infoForeground": color;
        "debugConsole.warningForeground": color;
        "debugConsole.errorForeground": color;
        "debugConsole.sourceForeground": color;
        "debugConsoleInputIcon.foreground": color;
    }

    export interface Notebook {
        "notebook.editorBackground": color;
        "notebook.cellBorderColor": color;
        "notebook.cellHoverBackground": color;
        "notebook.cellInsertionIndicator": color;
        "notebook.cellStatusBarItemHoverBackground": color;
        "notebook.cellToolbarSeparator": color;
        "notebook.cellEditorBackground": color;
        "notebook.focusedCellBackground": color;
        "notebook.focusedCellBorder": color;
        "notebook.focusedEditorBorder": color;
        "notebook.inactiveFocusedCellBorder": color;
        "notebook.inactiveSelectedCellBorder": color;
        "notebook.outputContainerBackgroundColor": color;
        "notebook.outputContainerBorderColor": color;
        "notebook.selectedCellBackground": color;
        "notebook.selectedCellBorder": color;
        "notebook.symbolHighlightBackground": color;
        "notebookScrollbarSlider.background": color;
        "notebookScrollbarSlider.activeBackground": color;
        "notebookScrollbarSlider.hoverBackground": color;
        "notebookStatusErrorIcon.foreground": color;
        "notebookStatusRunningIcon.foreground": color;
        "notebookStatusSuccessIcon.foreground": color;
    }

    export interface Chart {
        "charts.foreground": color;
        "charts.lines": color;
        "charts.red": color;
        "charts.green": color;
        "charts.blue": color;
        "charts.yellow": color;
        "charts.orange": color;
        "charts.purple": color;
    }

    export interface Port {
        "ports.iconRunningProcessForeground": color;
    }

}