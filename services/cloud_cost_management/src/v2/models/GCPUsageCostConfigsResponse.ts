import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPUsageCostConfig } from "./GCPUsageCostConfig";

/**
 * List of GCP Usage Cost configs.
 */
export class GCPUsageCostConfigsResponse {
  /**
   * A GCP Usage Cost config.
   */
  "data"?: Array<GCPUsageCostConfig>;
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
    data: {
      baseName: "data",
      type: "Array<GCPUsageCostConfig>",
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
    return GCPUsageCostConfigsResponse.attributeTypeMap;
  }

  public constructor() {}
}
