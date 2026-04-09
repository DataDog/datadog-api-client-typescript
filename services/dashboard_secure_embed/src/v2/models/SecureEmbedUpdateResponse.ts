import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedUpdateResponseData } from "./SecureEmbedUpdateResponseData";

/**
 * Response for updating a secure embed shared dashboard.
 */
export class SecureEmbedUpdateResponse {
  /**
   * Data object for a secure embed update response.
   */
  "data": SecureEmbedUpdateResponseData;
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
      type: "SecureEmbedUpdateResponseData",
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
    return SecureEmbedUpdateResponse.attributeTypeMap;
  }

  public constructor() {}
}
