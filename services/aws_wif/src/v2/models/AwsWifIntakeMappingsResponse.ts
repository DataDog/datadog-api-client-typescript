import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsWifIntakeMappingData } from "./AwsWifIntakeMappingData";

/**
 * Response containing a list of AWS WIF intake mappings.
 */
export class AwsWifIntakeMappingsResponse {
  "data": Array<AwsWifIntakeMappingData>;
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
      type: "Array<AwsWifIntakeMappingData>",
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
    return AwsWifIntakeMappingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
