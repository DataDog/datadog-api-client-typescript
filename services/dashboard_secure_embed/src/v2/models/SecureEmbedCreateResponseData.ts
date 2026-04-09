import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedCreateResponseAttributes } from "./SecureEmbedCreateResponseAttributes";
import { SecureEmbedCreateResponseType } from "./SecureEmbedCreateResponseType";

/**
 * Data object for a secure embed create response.
 */
export class SecureEmbedCreateResponseData {
  /**
   * Attributes of a newly created secure embed shared dashboard.
   */
  "attributes": SecureEmbedCreateResponseAttributes;
  /**
   * Internal share ID.
   */
  "id": string;
  /**
   * Resource type for secure embed create responses.
   */
  "type": SecureEmbedCreateResponseType;
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
      type: "SecureEmbedCreateResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecureEmbedCreateResponseType",
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
    return SecureEmbedCreateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
