import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCloudAuthPersonaMappingCreateData } from "./AWSCloudAuthPersonaMappingCreateData";

/**
 * Request used to create an AWS cloud authentication persona mapping
 */
export class AWSCloudAuthPersonaMappingCreateRequest {
  /**
   * Data for creating an AWS cloud authentication persona mapping
   */
  "data": AWSCloudAuthPersonaMappingCreateData;
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
      type: "AWSCloudAuthPersonaMappingCreateData",
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
    return AWSCloudAuthPersonaMappingCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
