import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsWifIntakeMappingCreateData } from "./AwsWifIntakeMappingCreateData";

/**
 * Request body for creating an AWS WIF intake mapping.
 */
export class AwsWifIntakeMappingCreateRequest {
  /**
   * Data for creating an AWS WIF intake mapping.
   */
  "data": AwsWifIntakeMappingCreateData;
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
      type: "AwsWifIntakeMappingCreateData",
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
    return AwsWifIntakeMappingCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
