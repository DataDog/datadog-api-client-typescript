import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetCreateResponseData } from "./SecurityMonitoringDatasetCreateResponseData";

/**
 * Response returned after creating a dataset.
 */
export class SecurityMonitoringDatasetCreateResponse {
  /**
   * The data wrapper of a dataset create response.
   */
  "data": SecurityMonitoringDatasetCreateResponseData;
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
      type: "SecurityMonitoringDatasetCreateResponseData",
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
    return SecurityMonitoringDatasetCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
