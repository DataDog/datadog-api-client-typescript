import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSAccountCreateRequestData } from "./AWSAccountCreateRequestData";

/**
 * AWS Account Create Request body.
 */
export class AWSAccountCreateRequest {
  /**
   * AWS Account Create Request data.
   */
  "data": AWSAccountCreateRequestData;
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
      type: "AWSAccountCreateRequestData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
