import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Navigate between different tabs for your browser test.
 */
export type SyntheticsPlayingTab =
  | typeof MAIN_TAB
  | typeof NEW_TAB
  | typeof TAB_1
  | typeof TAB_2
  | typeof TAB_3
  | UnparsedObject;
export const MAIN_TAB = -1;
export const NEW_TAB = 0;
export const TAB_1 = 1;
export const TAB_2 = 2;
export const TAB_3 = 3;
