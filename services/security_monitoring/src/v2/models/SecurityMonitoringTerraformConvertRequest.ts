import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringTerraformConvertData } from "./SecurityMonitoringTerraformConvertData";

/**
 * Request body for converting a security monitoring resource JSON to Terraform.
 */
export class SecurityMonitoringTerraformConvertRequest {
  /**
   * The convert request data object.
   */
  "data": SecurityMonitoringTerraformConvertData;
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
      type: "SecurityMonitoringTerraformConvertData",
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
    return SecurityMonitoringTerraformConvertRequest.attributeTypeMap;
  }

  public constructor() {}
}
