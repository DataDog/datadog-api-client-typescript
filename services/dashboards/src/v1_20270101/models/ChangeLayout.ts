import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ChangeLayout = typeof ONE_COL | typeof TWO_COL | UnparsedObject;
export const ONE_COL = "one_col";
export const TWO_COL = "two_col";
