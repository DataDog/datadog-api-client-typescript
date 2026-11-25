import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only request-body discriminator for the dashboard schema-versioning proof of concept.
 */
export type Dashboard20270101SchemaVersion =
  | typeof VERSION_2027_01_01
  | UnparsedObject;
export const VERSION_2027_01_01 = "2027-01-01";
