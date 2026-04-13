import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedUpdateRequestData } from "./SecureEmbedUpdateRequestData";

/**
 * Request to update a secure embed shared dashboard.
 */
export class SecureEmbedUpdateRequest {
  /**
   * Data object for updating a secure embed.
   */
  "data": SecureEmbedUpdateRequestData;
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
      type: "SecureEmbedUpdateRequestData",
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
    return SecureEmbedUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
