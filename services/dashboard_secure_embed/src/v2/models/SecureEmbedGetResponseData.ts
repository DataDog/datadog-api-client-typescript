import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedGetResponseAttributes } from "./SecureEmbedGetResponseAttributes";
import { SecureEmbedGetResponseType } from "./SecureEmbedGetResponseType";

/**
 * Data object for a secure embed get response.
 */
export class SecureEmbedGetResponseData {
  /**
   * Attributes of an existing secure embed shared dashboard.
   */
  "attributes": SecureEmbedGetResponseAttributes;
  /**
   * Internal share ID.
   */
  "id": string;
  /**
   * Resource type for secure embed get responses.
   */
  "type": SecureEmbedGetResponseType;
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
    attributes: {
      baseName: "attributes",
      type: "SecureEmbedGetResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecureEmbedGetResponseType",
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
    return SecureEmbedGetResponseData.attributeTypeMap;
  }

  public constructor() {}
}
