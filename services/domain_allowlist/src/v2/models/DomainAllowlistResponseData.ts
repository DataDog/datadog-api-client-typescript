import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DomainAllowlistResponseDataAttributes } from "./DomainAllowlistResponseDataAttributes";
import { DomainAllowlistType } from "./DomainAllowlistType";

/**
 * The email domain allowlist response for an org.
 */
export class DomainAllowlistResponseData {
  /**
   * The details of the email domain allowlist.
   */
  "attributes"?: DomainAllowlistResponseDataAttributes;
  /**
   * The unique identifier of the org.
   */
  "id"?: string;
  /**
   * Email domain allowlist allowlist type.
   */
  "type": DomainAllowlistType;
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
      type: "DomainAllowlistResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DomainAllowlistType",
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
    return DomainAllowlistResponseData.attributeTypeMap;
  }

  public constructor() {}
}
