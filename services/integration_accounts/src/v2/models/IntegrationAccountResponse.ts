import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountData } from "./IntegrationAccountData";

/**
 * Response payload for a single integration account.
 */
export class IntegrationAccountResponse {
  /**
   * Data envelope of an integration account, including server-assigned identity.
   */
  "data"?: IntegrationAccountData;
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
      type: "IntegrationAccountData",
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
    return IntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
