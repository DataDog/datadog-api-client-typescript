import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringCriticalAssetAttributes } from "./SecurityMonitoringCriticalAssetAttributes";
import { SecurityMonitoringCriticalAssetType } from "./SecurityMonitoringCriticalAssetType";

/**
 * The critical asset's properties.
 */
export class SecurityMonitoringCriticalAsset {
  /**
   * The attributes of the critical asset.
   */
  "attributes"?: SecurityMonitoringCriticalAssetAttributes;
  /**
   * The ID of the critical asset.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `critical_assets`.
   */
  "type"?: SecurityMonitoringCriticalAssetType;
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
      type: "SecurityMonitoringCriticalAssetAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringCriticalAssetType",
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
    return SecurityMonitoringCriticalAsset.attributeTypeMap;
  }

  public constructor() {}
}
