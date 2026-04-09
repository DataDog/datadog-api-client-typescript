import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedUpdateResponseAttributes } from "./SecureEmbedUpdateResponseAttributes";
import { SecureEmbedUpdateResponseType } from "./SecureEmbedUpdateResponseType";

/**
 * Data object for a secure embed update response.
 */
export class SecureEmbedUpdateResponseData {
  /**
   * Attributes of an updated secure embed shared dashboard.
   */
  "attributes": SecureEmbedUpdateResponseAttributes;
  /**
   * Internal share ID.
   */
  "id": string;
  /**
   * Resource type for secure embed update responses.
   */
  "type": SecureEmbedUpdateResponseType;
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
      type: "SecureEmbedUpdateResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecureEmbedUpdateResponseType",
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
    return SecureEmbedUpdateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
