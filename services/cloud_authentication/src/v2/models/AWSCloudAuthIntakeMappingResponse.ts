import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCloudAuthIntakeMappingDataResponse } from "./AWSCloudAuthIntakeMappingDataResponse";

/**
 * Response containing a single AWS cloud authentication intake mapping.
 */
export class AWSCloudAuthIntakeMappingResponse {
  /**
   * Data for AWS cloud authentication intake mapping response.
   */
  "data": AWSCloudAuthIntakeMappingDataResponse;
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
      type: "AWSCloudAuthIntakeMappingDataResponse",
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
    return AWSCloudAuthIntakeMappingResponse.attributeTypeMap;
  }

  public constructor() {}
}
