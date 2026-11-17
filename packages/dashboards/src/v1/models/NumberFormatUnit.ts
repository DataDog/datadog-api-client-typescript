import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { NumberFormatUnitCanonical } from "./NumberFormatUnitCanonical";
import { NumberFormatUnitCustom } from "./NumberFormatUnitCustom";

/**
 * Number format unit.
 */
export type NumberFormatUnit =
  | NumberFormatUnitCanonical
  | NumberFormatUnitCustom
  | UnparsedObject;
