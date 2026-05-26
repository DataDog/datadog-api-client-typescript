import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetCreateData } from "./SecurityMonitoringDatasetCreateData";

/**
 * Request body for creating a Cloud SIEM dataset.
 */
export class SecurityMonitoringDatasetCreateRequest {
  /**
   * The data wrapper of a dataset create request.
   */
  "data": SecurityMonitoringDatasetCreateData;
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
      type: "SecurityMonitoringDatasetCreateData",
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
