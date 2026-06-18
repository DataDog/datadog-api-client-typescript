import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsWifPersonaMappingData } from "./AwsWifPersonaMappingData";

/**
 * Response containing a list of AWS WIF persona mappings.
 */
export class AwsWifPersonaMappingsResponse {
  "data": Array<AwsWifPersonaMappingData>;
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
      type: "Array<AwsWifPersonaMappingData>",
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
    return AwsWifPersonaMappingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
