import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCloudAuthIntakeMappingDataResponse } from "./AWSCloudAuthIntakeMappingDataResponse";

/**
 * Response containing a list of AWS cloud authentication intake mappings.
 */
export class AWSCloudAuthIntakeMappingsResponse {
  /**
   * List of AWS cloud authentication intake mappings.
   */
  "data": Array<AWSCloudAuthIntakeMappingDataResponse>;
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
      type: "Array<AWSCloudAuthIntakeMappingDataResponse>",
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
    return AWSCloudAuthIntakeMappingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
