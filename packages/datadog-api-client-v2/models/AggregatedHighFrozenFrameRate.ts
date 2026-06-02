/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Aggregated high frozen frame rate detection at view level.
 */
export class AggregatedHighFrozenFrameRate {
  /**
   * Average frozen frame rate as a fraction of total frames.
   */
  "avgFrozenFrameRate": number;
  /**
   * Average segment duration in nanoseconds.
   */
  "avgSegmentDuration": number;
  /**
   * Average total frozen duration in nanoseconds.
   */
  "avgTotalFrozenDuration": number;
  /**
   * Unique fingerprint identifying this detection group.
   */
  "fingerprint": string;
  /**
   * Impact score for this detection.
   */
  "impactScore": number;
  /**
   * Number of sampled views where this detection occurred.
   */
  "viewOccurrences": number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    avgFrozenFrameRate: {
      baseName: "avg_frozen_frame_rate",
      type: "number",
      required: true,
      format: "double",
    },
    avgSegmentDuration: {
      baseName: "avg_segment_duration",
      type: "number",
      required: true,
      format: "int64",
    },
    avgTotalFrozenDuration: {
      baseName: "avg_total_frozen_duration",
      type: "number",
      required: true,
      format: "int64",
    },
    fingerprint: {
      baseName: "fingerprint",
      type: "string",
      required: true,
    },
    impactScore: {
      baseName: "impact_score",
      type: "number",
      required: true,
      format: "double",
    },
    viewOccurrences: {
      baseName: "view_occurrences",
      type: "number",
      required: true,
      format: "int32",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AggregatedHighFrozenFrameRate.attributeTypeMap;
  }

  public constructor() {}
}
