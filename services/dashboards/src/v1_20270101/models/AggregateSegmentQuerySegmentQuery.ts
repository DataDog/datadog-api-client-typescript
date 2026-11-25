import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class AggregateSegmentQuerySegmentQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "id": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AggregateSegmentQuerySegmentQuery.attributeTypeMap;
  }

  public constructor() {}
}
