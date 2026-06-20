import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AmsIntegrationAccountResponseData } from "./AmsIntegrationAccountResponseData";

/**
 * Response containing a list of web integration accounts.
 */
export class AmsIntegrationAccountsResponse {
  "data"?: Array<AmsIntegrationAccountResponseData>;
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
      type: "Array<AmsIntegrationAccountResponseData>",
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
    return AmsIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
