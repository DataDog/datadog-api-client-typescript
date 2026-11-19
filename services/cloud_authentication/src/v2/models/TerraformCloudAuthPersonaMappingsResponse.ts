import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TerraformCloudAuthPersonaMappingDataResponse } from "./TerraformCloudAuthPersonaMappingDataResponse";

/**
 * Response containing a list of HCP Terraform persona mappings.
 */
export class TerraformCloudAuthPersonaMappingsResponse {
  /**
   * Configured HCP Terraform persona mappings.
   */
  "data": Array<TerraformCloudAuthPersonaMappingDataResponse>;
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
      type: "Array<TerraformCloudAuthPersonaMappingDataResponse>",
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
    return TerraformCloudAuthPersonaMappingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
