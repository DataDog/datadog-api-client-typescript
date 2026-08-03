import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination details for the v2 list of deployments.
 */
export class FleetDeploymentsV2Page {
  /**
   * Total number of deployments available across all pages.
   */
  "totalCount"?: number;
  /**
   * Total number of deployments matching the current filter query.
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FleetDeploymentsV2Page.attributeTypeMap;
  }

  public constructor() {}
}
