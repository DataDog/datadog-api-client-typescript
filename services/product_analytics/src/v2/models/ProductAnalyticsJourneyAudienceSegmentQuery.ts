import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A named sub-query selecting a saved segment.
 */
export class ProductAnalyticsJourneyAudienceSegmentQuery {
  /**
   * Unique name for this sub-query, referenced from `formula`.
   */
  "name": string;
  /**
   * Identifier of the saved segment.
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
    return ProductAnalyticsJourneyAudienceSegmentQuery.attributeTypeMap;
  }

  public constructor() {}
}
