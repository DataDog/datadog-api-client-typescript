import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventPatternGroupBy {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "facet": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventPatternGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
