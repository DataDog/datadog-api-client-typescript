import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OktaAccountAttributes } from "./OktaAccountAttributes";
import { OktaAccountType } from "./OktaAccountType";

/**
 * Schema for an Okta account.
 */
export class OktaAccount {
  /**
   * Attributes object for an Okta account.
   */
  "attributes": OktaAccountAttributes;
  /**
   * The ID of the Okta account, a UUID hash of the account name.
   */
  "id"?: string;
  /**
   * Account type for an Okta account.
   */
  "type": OktaAccountType;
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
      type: "OktaAccountAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "OktaAccountType",
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
    return OktaAccount.attributeTypeMap;
  }

  public constructor() {}
}
