import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Meta for the response from the List Custom Costs endpoints.
 */
export class CustomCostListResponseMeta {
  /**
   * Number of Custom Costs files returned by the List Custom Costs endpoint
   */
  "totalFilteredCount"?: number;
  /**
   * Version of Custom Costs file
   */
  "version"?: string;
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
    version: {
      baseName: "version",
      type: "string",
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
    return CustomCostListResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
