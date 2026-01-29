import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetUpdateDataRequest } from "./SecurityMonitoringDatasetUpdateDataRequest";

/**
 * Request to update a security monitoring dataset.
 */
export class SecurityMonitoringDatasetUpdateRequest {
  /**
   * Data for updating a security monitoring dataset.
   */
  "data": SecurityMonitoringDatasetUpdateDataRequest;
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
      type: "SecurityMonitoringDatasetUpdateDataRequest",
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
    return SecurityMonitoringDatasetUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
