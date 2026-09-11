import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountResponseData } from "./DatabricksIntegrationAccountResponseData";

/**
 * Response payload for a list of Databricks integration accounts.
 */
export class DatabricksIntegrationAccountsResponse {
  /**
   * List of Databricks integration accounts.
   */
  "data": Array<DatabricksIntegrationAccountResponseData>;
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
      type: "Array<DatabricksIntegrationAccountResponseData>",
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
    return DatabricksIntegrationAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
