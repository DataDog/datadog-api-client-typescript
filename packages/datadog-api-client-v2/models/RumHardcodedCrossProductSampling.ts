/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cross-product retention settings for a hardcoded retention filter.
 */
export class RumHardcodedCrossProductSampling {
  /**
   * Indicates whether Session Replay cross-product retention is active.
   */
  "sessionReplayEnabled"?: boolean;
  /**
   * Percentage (0–100) of retained sessions with an ingested replay whose replay data is kept.
   */
  "sessionReplaySampleRate"?: number;
  /**
   * Indicates whether Trace cross-product retention is active.
   */
  "traceEnabled"?: boolean;
  /**
   * Percentage (0–100) of retained sessions with ingested traces whose traces are indexed.
   */
  "traceSampleRate"?: number;

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
    sessionReplayEnabled: {
      baseName: "session_replay_enabled",
      type: "boolean",
    },
    sessionReplaySampleRate: {
      baseName: "session_replay_sample_rate",
      type: "number",
      format: "double",
    },
    traceEnabled: {
      baseName: "trace_enabled",
      type: "boolean",
    },
    traceSampleRate: {
      baseName: "trace_sample_rate",
      type: "number",
      format: "double",
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
    return RumHardcodedCrossProductSampling.attributeTypeMap;
  }

  public constructor() {}
}
