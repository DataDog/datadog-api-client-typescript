import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringTerraformBulkExportData } from "./SecurityMonitoringTerraformBulkExportData";

/**
 * Request body for bulk exporting security monitoring resources to Terraform.
 */
export class SecurityMonitoringTerraformBulkExportRequest {
  /**
   * The bulk export request data object.
   */
  "data": SecurityMonitoringTerraformBulkExportData;
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
      type: "SecurityMonitoringTerraformBulkExportData",
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
    return SecurityMonitoringTerraformBulkExportRequest.attributeTypeMap;
  }

  public constructor() {}
}
