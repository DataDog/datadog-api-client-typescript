import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A segment-based audience query.
 */
export class ProductAnalyticsAudienceSegmentSubquery {
  /**
   * Name of this query, referenced in the formula.
   */
  "name": string;
  /**
   * UUID of the segment to filter by.
   */
  "segmentId": string;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    segmentId: {
      baseName: "segment_id",
      type: "string",
      required: true,
      format: "uuid",
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
    return ProductAnalyticsAudienceSegmentSubquery.attributeTypeMap;
  }

  public constructor() {}
}
