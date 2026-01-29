import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetAttributesResponse } from "./SecurityMonitoringDatasetAttributesResponse";
import { SecurityMonitoringDatasetType } from "./SecurityMonitoringDatasetType";

/**
 * A security monitoring dataset.
 */
export class SecurityMonitoringDatasetDataResponse {
  /**
   * Attributes of a security monitoring dataset.
   */
  "attributes": SecurityMonitoringDatasetAttributesResponse;
  /**
   * The unique identifier of the dataset.
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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringDatasetAttributesResponse",
      required: true,
    },
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
    return SecurityMonitoringDatasetDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
