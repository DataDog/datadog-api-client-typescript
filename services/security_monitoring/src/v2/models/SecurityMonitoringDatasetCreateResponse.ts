import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetCreateDataResponse } from "./SecurityMonitoringDatasetCreateDataResponse";

/**
 * Response after creating a security monitoring dataset.
 */
export class SecurityMonitoringDatasetCreateResponse {
  /**
   * Data returned after creating a security monitoring dataset.
   */
  "data": SecurityMonitoringDatasetCreateDataResponse;
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
      type: "SecurityMonitoringDatasetCreateDataResponse",
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
