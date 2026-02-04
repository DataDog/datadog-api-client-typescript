import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSKU } from "./SecurityMonitoringSKU";

/**
 * Metadata for content pack states
 */
export class SecurityMonitoringContentPackStateMeta {
  /**
   * Whether the cloud SIEM index configuration is incorrect at the organization level
   */
  "cloudSiemIndexIncorrect": boolean;
  /**
   * The SIEM pricing model (SKU) for the organization
   */
  "sku": SecurityMonitoringSKU;
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
    cloudSiemIndexIncorrect: {
      baseName: "cloud_siem_index_incorrect",
      type: "boolean",
      required: true,
    },
    sku: {
      baseName: "sku",
      type: "SecurityMonitoringSKU",
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
    return SecurityMonitoringContentPackStateMeta.attributeTypeMap;
  }

  public constructor() {}
}
