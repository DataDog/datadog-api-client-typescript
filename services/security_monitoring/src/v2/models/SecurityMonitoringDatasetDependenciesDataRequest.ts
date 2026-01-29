import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDependenciesAttributesRequest } from "./SecurityMonitoringDatasetDependenciesAttributesRequest";
import { SecurityMonitoringDatasetDependenciesType } from "./SecurityMonitoringDatasetDependenciesType";

/**
 * Data for dataset dependencies request.
 */
export class SecurityMonitoringDatasetDependenciesDataRequest {
  /**
   * Attributes for dataset dependencies request.
   */
  "attributes": SecurityMonitoringDatasetDependenciesAttributesRequest;
  /**
   * The type of the response.
   */
  "type": SecurityMonitoringDatasetDependenciesType;
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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringDatasetDependenciesAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringDatasetDependenciesType",
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
    return SecurityMonitoringDatasetDependenciesDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
