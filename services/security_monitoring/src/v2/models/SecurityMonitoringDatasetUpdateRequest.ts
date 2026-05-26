import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetUpdateData } from "./SecurityMonitoringDatasetUpdateData";

/**
 * Request body for updating a Cloud SIEM dataset.
 */
export class SecurityMonitoringDatasetUpdateRequest {
  /**
   * The data wrapper of a dataset update request.
   */
  "data": SecurityMonitoringDatasetUpdateData;
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
      type: "SecurityMonitoringDatasetUpdateData",
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
