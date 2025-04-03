import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DomainAllowlistAttributes } from "./DomainAllowlistAttributes";
import { DomainAllowlistType } from "./DomainAllowlistType";

/**
 * The email domain allowlist for an org.
 */
export class DomainAllowlist {
  /**
   * The details of the email domain allowlist.
   */
  "attributes"?: DomainAllowlistAttributes;
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
      type: "DomainAllowlistAttributes",
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DomainAllowlist.attributeTypeMap;
  }

  public constructor() {}
}
