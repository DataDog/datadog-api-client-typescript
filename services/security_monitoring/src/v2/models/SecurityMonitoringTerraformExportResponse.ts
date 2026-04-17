import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringTerraformExportData } from "./SecurityMonitoringTerraformExportData";

/**
 * Response containing the Terraform configuration for a security monitoring resource.
 */
export class SecurityMonitoringTerraformExportResponse {
  /**
   * The Terraform export data object.
   */
  "data"?: SecurityMonitoringTerraformExportData;
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
      type: "SecurityMonitoringTerraformExportData",
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
    return SecurityMonitoringTerraformExportResponse.attributeTypeMap;
  }

  public constructor() {}
}
