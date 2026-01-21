import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCcmConfigResponseData } from "./AWSCcmConfigResponseData";

/**
 * AWS CCM Config response body.
 */
export class AWSCcmConfigResponse {
  /**
   * AWS CCM Config response data.
   */
  "data": AWSCcmConfigResponseData;
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
      type: "AWSCcmConfigResponseData",
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
    return AWSCcmConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
