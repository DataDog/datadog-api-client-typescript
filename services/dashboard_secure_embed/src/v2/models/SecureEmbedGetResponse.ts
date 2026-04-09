import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedGetResponseData } from "./SecureEmbedGetResponseData";

/**
 * Response for getting a secure embed shared dashboard.
 */
export class SecureEmbedGetResponse {
  /**
   * Data object for a secure embed get response.
   */
  "data": SecureEmbedGetResponseData;
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
      type: "SecureEmbedGetResponseData",
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
    return SecureEmbedGetResponse.attributeTypeMap;
  }

  public constructor() {}
}
