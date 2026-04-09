import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedCreateRequestData } from "./SecureEmbedCreateRequestData";

/**
 * Request to create a secure embed shared dashboard.
 */
export class SecureEmbedCreateRequest {
  /**
   * Data object for creating a secure embed.
   */
  "data": SecureEmbedCreateRequestData;
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
      type: "SecureEmbedCreateRequestData",
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
    return SecureEmbedCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
