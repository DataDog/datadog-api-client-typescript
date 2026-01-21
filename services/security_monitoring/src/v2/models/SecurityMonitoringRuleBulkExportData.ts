import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleBulkExportAttributes } from "./SecurityMonitoringRuleBulkExportAttributes";
import { SecurityMonitoringRuleBulkExportDataType } from "./SecurityMonitoringRuleBulkExportDataType";

/**
 * Data for bulk exporting security monitoring rules.
 */
export class SecurityMonitoringRuleBulkExportData {
  /**
   * Attributes for bulk exporting security monitoring rules.
   */
  "attributes": SecurityMonitoringRuleBulkExportAttributes;
  /**
   * Request ID.
   */
  "id"?: string;
  /**
   * The type of the resource.
   */
  "type": SecurityMonitoringRuleBulkExportDataType;
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
      type: "SecurityMonitoringRuleBulkExportAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringRuleBulkExportDataType",
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
    return SecurityMonitoringRuleBulkExportData.attributeTypeMap;
  }

  public constructor() {}
}
