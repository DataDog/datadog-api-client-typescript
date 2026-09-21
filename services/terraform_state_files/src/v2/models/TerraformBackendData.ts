import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TerraformBackendAttributes } from "./TerraformBackendAttributes";
import { TerraformBackendType } from "./TerraformBackendType";

/**
 * A Terraform backend sync configuration.
 */
export class TerraformBackendData {
  /**
   * Terraform backend sync configuration and bucket statuses.
   */
  "attributes": TerraformBackendAttributes;
  /**
   * Configuration ID, serialized as a string to preserve integer precision.
   */
  "id": string;
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
      type: "TerraformBackendAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return TerraformBackendData.attributeTypeMap;
  }

  public constructor() {}
}
