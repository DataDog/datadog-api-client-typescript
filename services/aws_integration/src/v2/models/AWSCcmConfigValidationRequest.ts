import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCcmConfigValidationRequestData } from "./AWSCcmConfigValidationRequestData";

/**
 * AWS CCM config validation request body.
 */
export class AWSCcmConfigValidationRequest {
  /**
   * AWS CCM config validation request data.
   */
  "data": AWSCcmConfigValidationRequestData;
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
      type: "AWSCcmConfigValidationRequestData",
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
    return AWSCcmConfigValidationRequest.attributeTypeMap;
  }

  public constructor() {}
}
