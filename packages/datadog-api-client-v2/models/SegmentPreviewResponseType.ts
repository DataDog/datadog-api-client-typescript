/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Segment preview response resource type.
 */

export type SegmentPreviewResponseType =
  | typeof UNIFIED_SEGMENT_PREVIEW_RESPONSE
  | UnparsedObject;
export const UNIFIED_SEGMENT_PREVIEW_RESPONSE =
  "unified_segment_preview_response";
