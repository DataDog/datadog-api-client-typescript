import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringTerraformBulkExportAttributes } from "./SecurityMonitoringTerraformBulkExportAttributes";

/**
 * The bulk export request data object.
 */
export class SecurityMonitoringTerraformBulkExportData {
  /**
   * Attributes for the bulk export request.
   */
  "attributes": SecurityMonitoringTerraformBulkExportAttributes;
  /**
   * The JSON:API type. Always `bulk_export_resources`.
   */
  "type": string;
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
      type: "SecurityMonitoringTerraformBulkExportAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return SecurityMonitoringTerraformBulkExportData.attributeTypeMap;
  }

  public constructor() {}
}
