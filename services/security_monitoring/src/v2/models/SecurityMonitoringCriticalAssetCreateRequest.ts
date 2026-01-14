import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringCriticalAssetCreateData } from "./SecurityMonitoringCriticalAssetCreateData";

/**
 * Request object that includes the critical asset that you would like to create.
 */
export class SecurityMonitoringCriticalAssetCreateRequest {
  /**
   * Object for a single critical asset.
   */
  "data": SecurityMonitoringCriticalAssetCreateData;
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
      type: "SecurityMonitoringCriticalAssetCreateData",
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
    return SecurityMonitoringCriticalAssetCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
