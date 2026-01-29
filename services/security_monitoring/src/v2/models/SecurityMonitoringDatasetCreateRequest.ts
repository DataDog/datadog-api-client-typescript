import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetCreateDataRequest } from "./SecurityMonitoringDatasetCreateDataRequest";

/**
 * Request to create a security monitoring dataset.
 */
export class SecurityMonitoringDatasetCreateRequest {
  /**
   * Data for creating a security monitoring dataset.
   */
  "data": SecurityMonitoringDatasetCreateDataRequest;
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
      type: "SecurityMonitoringDatasetCreateDataRequest",
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
    return SecurityMonitoringDatasetCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
