import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetCreateAttributesRequest } from "./SecurityMonitoringDatasetCreateAttributesRequest";
import { SecurityMonitoringDatasetType } from "./SecurityMonitoringDatasetType";

/**
 * Data for creating a security monitoring dataset.
 */
export class SecurityMonitoringDatasetCreateDataRequest {
  /**
   * Attributes for creating a security monitoring dataset.
   */
  "attributes": SecurityMonitoringDatasetCreateAttributesRequest;
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
      type: "SecurityMonitoringDatasetCreateAttributesRequest",
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
    return SecurityMonitoringDatasetCreateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
