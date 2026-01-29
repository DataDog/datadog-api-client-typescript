import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDataResponse } from "./SecurityMonitoringDatasetDataResponse";

/**
 * Response containing the history of a security monitoring dataset.
 */
export class SecurityMonitoringDatasetsHistoryResponse {
  /**
   * Array of dataset versions ordered by version descending.
   */
  "data": Array<SecurityMonitoringDatasetDataResponse>;
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
      type: "Array<SecurityMonitoringDatasetDataResponse>",
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
    return SecurityMonitoringDatasetsHistoryResponse.attributeTypeMap;
  }

  public constructor() {}
}
