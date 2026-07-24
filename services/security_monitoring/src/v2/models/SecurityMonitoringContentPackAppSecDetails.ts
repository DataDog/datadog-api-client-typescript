import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringContentPackAppSecDetailsType } from "./SecurityMonitoringContentPackAppSecDetailsType";

/**
 * Details for an Application Security content pack.
 */
export class SecurityMonitoringContentPackAppSecDetails {
  /**
   * Type for Application Security content pack details.
   */
  "type": SecurityMonitoringContentPackAppSecDetailsType;
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
    type: {
      baseName: "type",
      type: "SecurityMonitoringContentPackAppSecDetailsType",
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
    return SecurityMonitoringContentPackAppSecDetails.attributeTypeMap;
  }

  public constructor() {}
}
