import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsWifIntakeMappingData } from "./AwsWifIntakeMappingData";

/**
 * Response containing a single AWS WIF intake mapping.
 */
export class AwsWifIntakeMappingResponse {
  /**
   * An AWS WIF intake mapping resource.
   */
  "data": AwsWifIntakeMappingData;
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
      type: "AwsWifIntakeMappingData",
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
    return AwsWifIntakeMappingResponse.attributeTypeMap;
  }

  public constructor() {}
}
