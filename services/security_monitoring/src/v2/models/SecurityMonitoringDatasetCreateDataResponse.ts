import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetType } from "./SecurityMonitoringDatasetType";

/**
 * Data returned after creating a security monitoring dataset.
 */
export class SecurityMonitoringDatasetCreateDataResponse {
  /**
   * The unique identifier of the created dataset.
   */
  "id": string;
  /**
   * Type for security monitoring dataset objects.
   */
  "type": SecurityMonitoringDatasetType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringDatasetType",
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
    return SecurityMonitoringDatasetCreateDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
