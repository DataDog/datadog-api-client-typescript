import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedCreateRequestAttributes } from "./SecureEmbedCreateRequestAttributes";
import { SecureEmbedRequestType } from "./SecureEmbedRequestType";

/**
 * Data object for creating a secure embed.
 */
export class SecureEmbedCreateRequestData {
  /**
   * Attributes for creating a secure embed shared dashboard.
   */
  "attributes": SecureEmbedCreateRequestAttributes;
  /**
   * Resource type for secure embed create requests.
   */
  "type": SecureEmbedRequestType;
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
      type: "SecureEmbedCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecureEmbedRequestType",
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
    return SecureEmbedCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
