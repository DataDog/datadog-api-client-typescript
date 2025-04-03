import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OktaAccount } from "./OktaAccount";

/**
 * Response object for an Okta account.
 */
export class OktaAccountResponse {
  /**
   * Schema for an Okta account.
   */
  "data"?: OktaAccount;
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
      type: "OktaAccount",
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
    return OktaAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
