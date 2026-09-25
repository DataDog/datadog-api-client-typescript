import { UnparsedObject } from "@datadog/datadog-api-client";

import { GeneralInvestigationAttributesWithoutTimeBounds } from "./GeneralInvestigationAttributesWithoutTimeBounds";
import { GeneralInvestigationAttributesWithTimeBounds } from "./GeneralInvestigationAttributesWithTimeBounds";

/**
 * Attributes for a general investigation, not tied to a specific monitor alert.
 */
export type GeneralInvestigationAttributes =
  | GeneralInvestigationAttributesWithoutTimeBounds
  | GeneralInvestigationAttributesWithTimeBounds
  | UnparsedObject;
