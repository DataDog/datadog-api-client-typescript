import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDependentsAttributes } from "./SecurityMonitoringDatasetDependentsAttributes";
import { SecurityMonitoringDatasetDependentsType } from "./SecurityMonitoringDatasetDependentsType";

/**
 * A single entry describing the dependents of one dataset.
 */
export class SecurityMonitoringDatasetDependentsData {
  /**
   * The attributes of a dataset dependents entry.
   */
  "attributes": SecurityMonitoringDatasetDependentsAttributes;
  /**
   * The UUID of the dataset.
   */
  "id": string;
  /**
   * The type of resource for a dataset dependents entry.
   */
  "type": SecurityMonitoringDatasetDependentsType;
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
      type: "SecurityMonitoringDatasetDependentsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringDatasetDependentsType",
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
    return SecurityMonitoringDatasetDependentsData.attributeTypeMap;
  }

  public constructor() {}
}
