import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Step type used in your mobile Synthetic test.
 */
export type SyntheticsMobileStepType =
  | typeof ASSERTELEMENTCONTENT
  | typeof ASSERTSCREENCONTAINS
  | typeof ASSERTSCREENLACKS
  | typeof DOUBLETAP
  | typeof EXTRACTVARIABLE
  | typeof FLICK
  | typeof OPENDEEPLINK
  | typeof PLAYSUBTEST
  | typeof PRESSBACK
  | typeof RESTARTAPPLICATION
  | typeof ROTATE
  | typeof SCROLL
  | typeof SCROLLTOELEMENT
  | typeof TAP
  | typeof TOGGLEWIFI
  | typeof TYPETEXT
  | typeof WAIT
  | UnparsedObject;
export const ASSERTELEMENTCONTENT = "assertElementContent";
export const ASSERTSCREENCONTAINS = "assertScreenContains";
export const ASSERTSCREENLACKS = "assertScreenLacks";
export const DOUBLETAP = "doubleTap";
export const EXTRACTVARIABLE = "extractVariable";
export const FLICK = "flick";
export const OPENDEEPLINK = "openDeeplink";
export const PLAYSUBTEST = "playSubTest";
export const PRESSBACK = "pressBack";
export const RESTARTAPPLICATION = "restartApplication";
export const ROTATE = "rotate";
export const SCROLL = "scroll";
export const SCROLLTOELEMENT = "scrollToElement";
export const TAP = "tap";
export const TOGGLEWIFI = "toggleWiFi";
export const TYPETEXT = "typeText";
export const WAIT = "wait";
