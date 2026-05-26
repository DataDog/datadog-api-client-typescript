import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetVersionHistoryData } from "./SecurityMonitoringDatasetVersionHistoryData";

/**
 * Response containing the version history of a Cloud SIEM dataset.
 */
export class SecurityMonitoringDatasetVersionHistoryResponse {
  /**
   * The data wrapper of a dataset version history response.
   */
  "data": SecurityMonitoringDatasetVersionHistoryData;
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
      type: "SecurityMonitoringDatasetVersionHistoryData",
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
    return SecurityMonitoringDatasetVersionHistoryResponse.attributeTypeMap;
  }

  public constructor() {}
}
