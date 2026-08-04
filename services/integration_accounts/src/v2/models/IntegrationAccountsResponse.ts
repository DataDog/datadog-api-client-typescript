import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountData } from "./IntegrationAccountData";

/**
 * Response payload for a list of integration accounts.
 */
export class IntegrationAccountsResponse {
  /**
   * List of integration accounts.
   */
  "data"?: Array<IntegrationAccountData>;
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
      type: "Array<IntegrationAccountData>",
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
    return IntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
