import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDependenciesDataRequest } from "./SecurityMonitoringDatasetDependenciesDataRequest";

/**
 * Request to get dataset dependencies.
 */
export class SecurityMonitoringDatasetDependenciesRequest {
  /**
   * Data for dataset dependencies request.
   */
  "data": SecurityMonitoringDatasetDependenciesDataRequest;
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
      type: "SecurityMonitoringDatasetDependenciesDataRequest",
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
    return SecurityMonitoringDatasetDependenciesRequest.attributeTypeMap;
  }

  public constructor() {}
}
