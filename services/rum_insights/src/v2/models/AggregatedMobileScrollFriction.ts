import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Aggregated mobile scroll friction detection at view level.
 */
export class AggregatedMobileScrollFriction {
  /**
   * Average number of frozen frames during scroll interactions.
   */
  "avgScrollFrozenFrameCount": number;
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
    avgScrollFrozenFrameCount: {
      baseName: "avg_scroll_frozen_frame_count",
      type: "number",
      required: true,
      format: "int32",
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
    return AggregatedMobileScrollFriction.attributeTypeMap;
  }

  public constructor() {}
}
