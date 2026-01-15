import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringCriticalAssetCreateAttributes } from "./SecurityMonitoringCriticalAssetCreateAttributes";
import { SecurityMonitoringCriticalAssetType } from "./SecurityMonitoringCriticalAssetType";

/**
 * Object for a single critical asset.
 */
export class SecurityMonitoringCriticalAssetCreateData {
  /**
   * Object containing the attributes of the critical asset to be created.
   */
  "attributes": SecurityMonitoringCriticalAssetCreateAttributes;
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
      type: "SecurityMonitoringCriticalAssetCreateAttributes",
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
    return SecurityMonitoringCriticalAssetCreateData.attributeTypeMap;
  }

  public constructor() {}
}
