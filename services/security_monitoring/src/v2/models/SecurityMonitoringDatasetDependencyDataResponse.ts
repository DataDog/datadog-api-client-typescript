import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDependenciesType } from "./SecurityMonitoringDatasetDependenciesType";
import { SecurityMonitoringDatasetDependencyAttributesResponse } from "./SecurityMonitoringDatasetDependencyAttributesResponse";

/**
 * Dependencies for a dataset.
 */
export class SecurityMonitoringDatasetDependencyDataResponse {
  /**
   * Attributes for dataset dependency.
   */
  "attributes": SecurityMonitoringDatasetDependencyAttributesResponse;
  /**
   * The dataset ID.
   */
  "id": string;
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
      type: "SecurityMonitoringDatasetDependencyAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return SecurityMonitoringDatasetDependencyDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
