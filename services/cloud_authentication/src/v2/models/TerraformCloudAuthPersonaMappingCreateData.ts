import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TerraformCloudAuthPersonaMappingCreateAttributes } from "./TerraformCloudAuthPersonaMappingCreateAttributes";
import { TerraformCloudAuthPersonaMappingType } from "./TerraformCloudAuthPersonaMappingType";

/**
 * Data for creating an HCP Terraform persona mapping.
 */
export class TerraformCloudAuthPersonaMappingCreateData {
  /**
   * Attributes for creating an HCP Terraform persona mapping.
   */
  "attributes": TerraformCloudAuthPersonaMappingCreateAttributes;
  /**
   * Type identifier for an HCP Terraform persona mapping.
   */
  "type": TerraformCloudAuthPersonaMappingType;
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
      type: "TerraformCloudAuthPersonaMappingCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TerraformCloudAuthPersonaMappingType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TerraformCloudAuthPersonaMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
