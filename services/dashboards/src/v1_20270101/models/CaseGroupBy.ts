import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CaseGroupBy {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "field": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    field: {
      baseName: "field",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
