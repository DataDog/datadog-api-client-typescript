import { UnparsedObject } from "@datadog/datadog-api-client";

import { AIGuardConfidenceThreshold } from "./AIGuardConfidenceThreshold";

/**
 * Request-only confidence threshold override. A number sets the threshold
 * for every threat category; an object supplies a global threshold and
 * optional per-category overrides. Omit this field to use the stored
 * sensitivity policy. This field is not returned in evaluation responses.
 */
export type AIGuardConfidenceThresholdOverride =
  | number
  | AIGuardConfidenceThreshold
  | UnparsedObject;
