import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ListFilteredQueryFiltersItems {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "baseAttribute": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "exclude"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filterAttribute": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    baseAttribute: {
      baseName: "base_attribute",
      type: "string",
      required: true,
    },
    exclude: {
      baseName: "exclude",
      type: "boolean",
    },
    filterAttribute: {
      baseName: "filter_attribute",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListFilteredQueryFiltersItems.attributeTypeMap;
  }

  public constructor() {}
}
