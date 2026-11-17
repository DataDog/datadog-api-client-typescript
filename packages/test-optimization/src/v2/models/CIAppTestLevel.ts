import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Test run level.
 */
export type CIAppTestLevel =
  | typeof SESSION
  | typeof MODULE
  | typeof SUITE
  | typeof TEST
  | UnparsedObject;
export const SESSION = "session";
export const MODULE = "module";
export const SUITE = "suite";
export const TEST = "test";
