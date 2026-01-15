import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringCriticalAssetType } from "./SecurityMonitoringCriticalAssetType";
import { SecurityMonitoringCriticalAssetUpdateAttributes } from "./SecurityMonitoringCriticalAssetUpdateAttributes";

/**
 * The new critical asset properties; partial updates are supported.
 */
export class SecurityMonitoringCriticalAssetUpdateData {
  /**
   * The critical asset properties to be updated.
   */
  "attributes": SecurityMonitoringCriticalAssetUpdateAttributes;
  /**
   * The type of the resource. The value should always be `critical_assets`.
   */
  "type": SecurityMonitoringCriticalAssetType;
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
      type: "SecurityMonitoringCriticalAssetUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringCriticalAssetType",
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
    return SecurityMonitoringCriticalAssetUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
