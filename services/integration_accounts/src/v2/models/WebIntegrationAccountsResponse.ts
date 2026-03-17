import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebIntegrationAccountResponseData } from "./WebIntegrationAccountResponseData";

/**
 * Response containing a list of web integration accounts.
 */
export class WebIntegrationAccountsResponse {
  "data"?: Array<WebIntegrationAccountResponseData>;
  /**
   * The name of the integration.
   */
  "integrationName"?: string;
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
    integrationName: {
      baseName: "integration_name",
      type: "string",
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
