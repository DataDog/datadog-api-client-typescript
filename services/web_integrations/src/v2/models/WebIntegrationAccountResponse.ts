import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebIntegrationAccountResponseData } from "./WebIntegrationAccountResponseData";

/**
 * The expected response schema when getting a single web integration account.
 */
export class WebIntegrationAccountResponse {
  /**
   * Data object of a web integration account.
   */
  "data"?: WebIntegrationAccountResponseData;
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
      type: "WebIntegrationAccountResponseData",
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
    return WebIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
