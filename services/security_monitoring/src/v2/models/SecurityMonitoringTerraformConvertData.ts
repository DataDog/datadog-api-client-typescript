import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringTerraformConvertAttributes } from "./SecurityMonitoringTerraformConvertAttributes";

/**
 * The convert request data object.
 */
export class SecurityMonitoringTerraformConvertData {
  /**
   * Attributes for the convert request.
   */
  "attributes": SecurityMonitoringTerraformConvertAttributes;
  /**
   * The ID of the resource being converted.
   */
  "id": string;
  /**
   * The JSON:API type. Always `convert_resource`.
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
      type: "SecurityMonitoringTerraformConvertAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return SecurityMonitoringTerraformConvertData.attributeTypeMap;
  }

  public constructor() {}
}
