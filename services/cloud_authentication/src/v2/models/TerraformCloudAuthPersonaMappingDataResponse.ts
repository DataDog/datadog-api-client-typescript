import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TerraformCloudAuthPersonaMappingAttributesResponse } from "./TerraformCloudAuthPersonaMappingAttributesResponse";
import { TerraformCloudAuthPersonaMappingType } from "./TerraformCloudAuthPersonaMappingType";

/**
 * HCP Terraform persona mapping resource.
 */
export class TerraformCloudAuthPersonaMappingDataResponse {
  /**
   * Stored HCP Terraform persona mapping attributes.
   */
  "attributes": TerraformCloudAuthPersonaMappingAttributesResponse;
  /**
   * Unique identifier of the persona mapping.
   */
  "id": string;
  /**
   * Type identifier for an HCP Terraform persona mapping.
   */
  "type": TerraformCloudAuthPersonaMappingType;
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
      type: "TerraformCloudAuthPersonaMappingAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TerraformCloudAuthPersonaMappingType",
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
    return TerraformCloudAuthPersonaMappingDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
