import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Partial update for cross-product retention of a hardcoded retention filter.
 * Only fields whose matching flag in `cross_product_sampling_editability` is `true` can be updated.
 */
export class RumHardcodedCrossProductSamplingUpdate {
  /**
   * Controls whether Session Replay cross-product retention is active. Omit to leave unchanged.
   */
  "sessionReplayEnabled"?: boolean;
  /**
   * Percentage (0–100) of retained sessions with an ingested replay whose replay data is kept.
   * Omit to leave unchanged.
   */
  "sessionReplaySampleRate"?: number;
  /**
   * Controls whether Trace cross-product retention is active. Omit to leave unchanged.
   */
  "traceEnabled"?: boolean;
  /**
   * Percentage (0–100) of retained sessions with ingested traces whose traces are indexed.
   * Omit to leave unchanged.
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
    return RumHardcodedCrossProductSamplingUpdate.attributeTypeMap;
  }

  public constructor() {}
}
