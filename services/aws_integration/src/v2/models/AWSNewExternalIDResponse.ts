import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSNewExternalIDResponseData } from "./AWSNewExternalIDResponseData";

/**
 * AWS External ID response body.
 */
export class AWSNewExternalIDResponse {
  /**
   * AWS External ID response body.
   */
  "data": AWSNewExternalIDResponseData;
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
      type: "AWSNewExternalIDResponseData",
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
    return AWSNewExternalIDResponse.attributeTypeMap;
  }

  public constructor() {}
}
