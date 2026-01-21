import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleBulkExportData } from "./SecurityMonitoringRuleBulkExportData";

/**
 * Payload for bulk exporting security monitoring rules.
 */
export class SecurityMonitoringRuleBulkExportPayload {
  /**
   * Data for bulk exporting security monitoring rules.
   */
  "data": SecurityMonitoringRuleBulkExportData;
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
      type: "SecurityMonitoringRuleBulkExportData",
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
    return SecurityMonitoringRuleBulkExportPayload.attributeTypeMap;
  }

  public constructor() {}
}
