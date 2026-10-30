/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIGuardConfidenceThreshold } from "./AIGuardConfidenceThreshold";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
