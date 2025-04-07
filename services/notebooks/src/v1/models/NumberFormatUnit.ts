import { UnparsedObject } from "@datadog/datadog-api-client";

import { NumberFormatUnitCanonical } from "./NumberFormatUnitCanonical";
import { NumberFormatUnitCustom } from "./NumberFormatUnitCustom";

/**
 * Number format unit.
 */
export type NumberFormatUnit =
  | NumberFormatUnitCanonical
  | NumberFormatUnitCustom
  | UnparsedObject;
