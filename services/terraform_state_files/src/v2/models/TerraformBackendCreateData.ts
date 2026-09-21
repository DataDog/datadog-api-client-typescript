import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TerraformBackendCreateAttributes } from "./TerraformBackendCreateAttributes";
import { TerraformBackendType } from "./TerraformBackendType";

/**
 * Terraform backend configuration create data.
 */
export class TerraformBackendCreateData {
  /**
   * Settings for a new Terraform backend sync configuration.
   */
  "attributes": TerraformBackendCreateAttributes;
  /**
   * Terraform backend configuration resource type.
   */
  "type": TerraformBackendType;
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
      type: "TerraformBackendCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TerraformBackendType",
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
    return TerraformBackendCreateData.attributeTypeMap;
  }

  public constructor() {}
}
