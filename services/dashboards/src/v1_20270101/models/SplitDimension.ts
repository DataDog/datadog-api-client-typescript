import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SplitDimension {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "oneGraphPer": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    oneGraphPer: {
      baseName: "one_graph_per",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SplitDimension.attributeTypeMap;
  }

  public constructor() {}
}
