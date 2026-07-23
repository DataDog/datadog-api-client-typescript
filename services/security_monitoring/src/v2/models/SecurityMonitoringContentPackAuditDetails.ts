import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringContentPackAuditDetailsType } from "./SecurityMonitoringContentPackAuditDetailsType";

/**
 * Details for an audit trail content pack.
 */
export class SecurityMonitoringContentPackAuditDetails {
  /**
   * Type for audit trail content pack details.
   */
  "type": SecurityMonitoringContentPackAuditDetailsType;
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
      type: "SecurityMonitoringContentPackAuditDetailsType",
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
    return SecurityMonitoringContentPackAuditDetails.attributeTypeMap;
  }

  public constructor() {}
}
