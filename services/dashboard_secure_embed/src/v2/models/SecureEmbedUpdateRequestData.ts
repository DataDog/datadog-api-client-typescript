import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedUpdateRequestAttributes } from "./SecureEmbedUpdateRequestAttributes";
import { SecureEmbedUpdateRequestType } from "./SecureEmbedUpdateRequestType";

/**
 * Data object for updating a secure embed.
 */
export class SecureEmbedUpdateRequestData {
  /**
   * Attributes for updating a secure embed shared dashboard. All fields are optional.
   */
  "attributes": SecureEmbedUpdateRequestAttributes;
  /**
   * Resource type for secure embed update requests.
   */
  "type": SecureEmbedUpdateRequestType;
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
      type: "SecureEmbedUpdateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecureEmbedUpdateRequestType",
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
    return SecureEmbedUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
