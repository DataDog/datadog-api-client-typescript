import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleBulkDeleteData } from "./SecurityMonitoringRuleBulkDeleteData";

/**
 * Payload for bulk deleting security monitoring rules.
 */
export class SecurityMonitoringRuleBulkDeletePayload {
  /**
   * Data for bulk deleting security monitoring rules.
   */
  "data": SecurityMonitoringRuleBulkDeleteData;
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
      type: "SecurityMonitoringRuleBulkDeleteData",
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
    return SecurityMonitoringRuleBulkDeletePayload.attributeTypeMap;
  }

  public constructor() {}
}
