import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The object containing information about the pages of the list of SLOs.
 */
export class SLOListResponseMetadataPage {
  /**
   * The total number of resources that could be retrieved ignoring the parameters and filters in the request.
   */
  "totalCount"?: number;
  /**
   * The total number of resources that match the parameters and filters in the request. This attribute can be used by a client to determine the total number of pages.
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
    totalCount: {
      baseName: "total_count",
      type: "number",
      format: "int64",
    },
    totalFilteredCount: {
      baseName: "total_filtered_count",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOListResponseMetadataPage.attributeTypeMap;
  }

  public constructor() {}
}
