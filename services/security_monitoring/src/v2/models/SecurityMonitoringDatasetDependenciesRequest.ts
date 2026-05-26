import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDependenciesRequestData } from "./SecurityMonitoringDatasetDependenciesRequestData";

/**
 * Request body for retrieving dependencies of a batch of datasets.
 */
export class SecurityMonitoringDatasetDependenciesRequest {
  /**
   * The data wrapper of a dataset dependencies request.
   */
  "data": SecurityMonitoringDatasetDependenciesRequestData;
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
      type: "SecurityMonitoringDatasetDependenciesRequestData",
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
