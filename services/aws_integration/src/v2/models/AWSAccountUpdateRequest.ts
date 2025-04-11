import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSAccountUpdateRequestData } from "./AWSAccountUpdateRequestData";

/**
 * AWS Account Update Request body.
 */
export class AWSAccountUpdateRequest {
  /**
   * AWS Account Update Request data.
   */
  "data": AWSAccountUpdateRequestData;
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
      type: "AWSAccountUpdateRequestData",
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
    return AWSAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
