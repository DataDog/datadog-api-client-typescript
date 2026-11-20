import { UnparsedObject } from "@datadog/datadog-api-client";

import { NumberReferenceTableColumn } from "./NumberReferenceTableColumn";
import { StringReferenceTableColumn } from "./StringReferenceTableColumn";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ReferenceTableColumn =
  | StringReferenceTableColumn
  | NumberReferenceTableColumn
  | UnparsedObject;
