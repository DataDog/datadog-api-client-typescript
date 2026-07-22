import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCcmConfigValidationResponseData } from "./AWSCcmConfigValidationResponseData";

/**
 * AWS CCM config validation response body.
 */
export class AWSCcmConfigValidationResponse {
  /**
   * AWS CCM config validation response data.
   */
  "data": AWSCcmConfigValidationResponseData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "AWSCcmConfigValidationResponseData",
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
    return AWSCcmConfigValidationResponse.attributeTypeMap;
  }

  public constructor() {}
}
