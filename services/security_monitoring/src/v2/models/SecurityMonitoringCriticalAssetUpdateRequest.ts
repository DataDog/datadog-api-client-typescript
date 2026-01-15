import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringCriticalAssetUpdateData } from "./SecurityMonitoringCriticalAssetUpdateData";

/**
 * Request object containing the fields to update on the critical asset.
 */
export class SecurityMonitoringCriticalAssetUpdateRequest {
  /**
   * The new critical asset properties; partial updates are supported.
   */
  "data": SecurityMonitoringCriticalAssetUpdateData;
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
      type: "SecurityMonitoringCriticalAssetUpdateData",
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
    return SecurityMonitoringCriticalAssetUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
