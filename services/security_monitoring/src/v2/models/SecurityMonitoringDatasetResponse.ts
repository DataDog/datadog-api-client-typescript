import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetData } from "./SecurityMonitoringDatasetData";

/**
 * Response containing a single Cloud SIEM dataset.
 */
export class SecurityMonitoringDatasetResponse {
  /**
   * The data wrapper of a dataset response.
   */
  "data": SecurityMonitoringDatasetData;
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
      type: "SecurityMonitoringDatasetData",
      required: true,
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
    return SecurityMonitoringDatasetResponse.attributeTypeMap;
  }

  public constructor() {}
}
