import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SplitVectorTagFilter {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tagKey": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tagValues": Array<string>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tagKey: {
      baseName: "tag_key",
      type: "string",
      required: true,
    },
    tagValues: {
      baseName: "tag_values",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SplitVectorTagFilter.attributeTypeMap;
  }

  public constructor() {}
}
