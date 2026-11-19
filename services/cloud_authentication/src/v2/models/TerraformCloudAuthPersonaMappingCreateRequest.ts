import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TerraformCloudAuthPersonaMappingCreateData } from "./TerraformCloudAuthPersonaMappingCreateData";

/**
 * Request to create an HCP Terraform persona mapping.
 */
export class TerraformCloudAuthPersonaMappingCreateRequest {
  /**
   * Data for creating an HCP Terraform persona mapping.
   */
  "data": TerraformCloudAuthPersonaMappingCreateData;
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
      type: "TerraformCloudAuthPersonaMappingCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TerraformCloudAuthPersonaMappingCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
