#define MyAppName "LinkDown"
#define MyAppVersion "1.1.1"
#define MyAppPublisher "LinkScape"

[Setup]
; NOTE: The value of AppId uniquely identifies this application. Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{071FA4AD-9CA3-45A4-95D1-C01A7D21C246}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
DefaultDirName={autopf}\LinkScape\{#MyAppName}
DisableDirPage=yes
DefaultGroupName={#MyAppName}
DisableProgramGroupPage=yes
; Uncomment the following line to run in non administrative install mode (install for current user only.)
;PrivilegesRequired=lowest
OutputBaseFilename=linkdown_setup
SetupIconFile=LinkDown.ico
Compression=lzma
SolidCompression=yes
WizardStyle=modern
ArchitecturesInstallIn64BitMode=x64
ChangesEnvironment=true

[Tasks]
Name: modifypath; Description: Add LinkDown to PATH; Flags: checkablealone

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"
Name: "chinesesimplified"; MessagesFile: "ChineseSimplified.isl"

[Code]
const
    ModPathName = 'modifypath';
    ModPathType = 'user';

function ModPathDir(): TArrayOfString;
begin
    setArrayLength(Result, 1)
    Result[0] := ExpandConstant('{app}');
end;
#include "modpath.iss"

[Files]
Source: "LinkDown\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Registry]
Root: HKCU; Subkey: "Software\Mozilla\NativeMessagingHosts\linkdown"; ValueType: String; ValueData: "{app}\firefox.json"; MinVersion: 0.0,6.0;
Root: HKCU; Subkey: "Software\Google\Chrome\NativeMessagingHosts\linkdown"; ValueType: String; ValueData: "{app}\chrome.json"; MinVersion: 0.0,6.0;
