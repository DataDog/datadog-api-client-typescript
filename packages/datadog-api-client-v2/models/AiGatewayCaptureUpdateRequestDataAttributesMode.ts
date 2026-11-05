/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Capture mode for matching traffic.
 */

export type AiGatewayCaptureUpdateRequestDataAttributesMode =
  | typeof METADATA_ONLY
  | typeof FULL_CAPTURE
  | UnparsedObject;
export const METADATA_ONLY = "metadata_only";
export const FULL_CAPTURE = "full_capture";
