import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The access role of the user. Options are **st** (standard user), **adm** (admin user), or **ro** (read-only user).
 */
export type AccessRole =
  | typeof STANDARD
  | typeof ADMIN
  | typeof READ_ONLY
  | typeof ERROR
  | UnparsedObject;
export const STANDARD = "st";
export const ADMIN = "adm";
export const READ_ONLY = "ro";
export const ERROR = "ERROR";
