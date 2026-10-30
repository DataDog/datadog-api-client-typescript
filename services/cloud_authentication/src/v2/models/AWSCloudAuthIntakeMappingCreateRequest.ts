import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCloudAuthIntakeMappingCreateData } from "./AWSCloudAuthIntakeMappingCreateData";

/**
 * Request used to create an AWS cloud authentication intake mapping.
 */
export class AWSCloudAuthIntakeMappingCreateRequest {
  /**
   * Data for creating an AWS cloud authentication intake mapping.
   */
  "data": AWSCloudAuthIntakeMappingCreateData;
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
      type: "AWSCloudAuthIntakeMappingCreateData",
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
    return AWSCloudAuthIntakeMappingCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
