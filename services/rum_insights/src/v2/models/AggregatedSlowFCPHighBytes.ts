import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Aggregated slow first contentful paint with high byte count detection.
 */
export class AggregatedSlowFCPHighBytes {
  /**
   * Average total bytes loaded before first contentful paint.
   */
  "avgBytesBeforeFcpBytes": number;
  /**
   * Average first contentful paint time in milliseconds.
   */
  "avgFirstContentfulPaintMs": number;
  /**
   * Average number of resources loaded before first contentful paint.
   */
  "avgResourceCountBeforeFcp": number;
  /**
   * Unique fingerprint identifying this detection group.
   */
  "fingerprint": string;
  /**
   * Impact score for this detection.
   */
  "impactScore": number;
  /**
   * Platform identifier for the affected views.
   */
  "platform": string;
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
    avgBytesBeforeFcpBytes: {
      baseName: "avg_bytes_before_fcp_bytes",
      type: "number",
      required: true,
      format: "int64",
    },
    avgFirstContentfulPaintMs: {
      baseName: "avg_first_contentful_paint_ms",
      type: "number",
      required: true,
      format: "int64",
    },
    avgResourceCountBeforeFcp: {
      baseName: "avg_resource_count_before_fcp",
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
    platform: {
      baseName: "platform",
      type: "string",
      required: true,
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
    return AggregatedSlowFCPHighBytes.attributeTypeMap;
  }

  public constructor() {}
}
