import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination object.
 */
export class ListDevicesResponseMetadataPage {
  /**
   * Total count of devices matched by the filter.
   */
  "totalFilteredCount"?: number;
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
    totalFilteredCount: {
      baseName: "total_filtered_count",
      type: "number",
      format: "int64",
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
    return ListDevicesResponseMetadataPage.attributeTypeMap;
  }

  public constructor() {}
}
