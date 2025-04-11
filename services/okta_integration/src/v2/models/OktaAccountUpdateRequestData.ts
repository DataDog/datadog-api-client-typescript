import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OktaAccountType } from "./OktaAccountType";
import { OktaAccountUpdateRequestAttributes } from "./OktaAccountUpdateRequestAttributes";

/**
 * Data object for updating an Okta account.
 */
export class OktaAccountUpdateRequestData {
  /**
   * Attributes object for updating an Okta account.
   */
  "attributes"?: OktaAccountUpdateRequestAttributes;
  /**
   * Account type for an Okta account.
   */
  "type"?: OktaAccountType;
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
      type: "OktaAccountUpdateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "OktaAccountType",
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
    return OktaAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
