import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDependentsData } from "./SecurityMonitoringDatasetDependentsData";

/**
 * Response listing the dependents of each requested dataset.
 */
export class SecurityMonitoringDatasetDependenciesResponse {
  /**
   * The list of dataset dependents entries.
   */
  "data": Array<SecurityMonitoringDatasetDependentsData>;
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
      type: "Array<SecurityMonitoringDatasetDependentsData>",
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
    return SecurityMonitoringDatasetDependenciesResponse.attributeTypeMap;
  }

  public constructor() {}
}
