import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TerraformBackendType } from "./TerraformBackendType";
import { TerraformBackendUpdateAttributes } from "./TerraformBackendUpdateAttributes";

/**
 * Terraform backend configuration update data.
 */
export class TerraformBackendUpdateData {
  /**
   * Replacement bucket set for a Terraform backend sync configuration.
   */
  "attributes": TerraformBackendUpdateAttributes;
  /**
   * Configuration ID. Must match the ID in the request path.
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
      type: "TerraformBackendUpdateAttributes",
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
    return TerraformBackendUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
