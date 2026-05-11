import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebIntegrationAccountResponseData } from "./WebIntegrationAccountResponseData";

/**
 * The expected response schema when listing web integration accounts.
 */
export class WebIntegrationAccountsResponse {
  /**
   * The JSON:API data array.
   */
  "data"?: Array<WebIntegrationAccountResponseData>;
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
      type: "Array<WebIntegrationAccountResponseData>",
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
    return WebIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
