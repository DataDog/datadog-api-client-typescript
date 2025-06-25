import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPUsageCostConfig } from "./GCPUsageCostConfig";

/**
 * Response of GCP Usage Cost config.
 */
export class GCPUsageCostConfigResponse {
  /**
   * GCP Usage Cost config.
   */
  "data"?: GCPUsageCostConfig;
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
      type: "GCPUsageCostConfig",
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
    return GCPUsageCostConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
