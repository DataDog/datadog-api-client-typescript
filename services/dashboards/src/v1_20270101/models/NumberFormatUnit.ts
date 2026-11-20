import { UnparsedObject } from "@datadog/datadog-api-client";

import { NumberFormatUnitCanonical } from "./NumberFormatUnitCanonical";
import { NumberFormatUnitCustom } from "./NumberFormatUnitCustom";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type NumberFormatUnit =
  | NumberFormatUnitCanonical
  | NumberFormatUnitCustom
  | UnparsedObject;
