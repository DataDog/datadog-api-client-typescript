import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDependenciesRequestAttributes } from "./SecurityMonitoringDatasetDependenciesRequestAttributes";

/**
 * The data wrapper of a dataset dependencies request.
 */
export class SecurityMonitoringDatasetDependenciesRequestData {
  /**
   * The attributes of a dataset dependencies request.
   */
  "attributes": SecurityMonitoringDatasetDependenciesRequestAttributes;
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
      type: "SecurityMonitoringDatasetDependenciesRequestAttributes",
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
    return SecurityMonitoringDatasetDependenciesRequestData.attributeTypeMap;
  }

  public constructor() {}
}
