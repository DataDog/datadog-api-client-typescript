import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountResponseData } from "./DatabricksIntegrationAccountResponseData";

/**
 * Response payload for a single Databricks integration account.
 */
export class DatabricksIntegrationAccountResponse {
  /**
   * Data envelope of a Databricks integration account, including server-assigned identity.
   */
  "data": DatabricksIntegrationAccountResponseData;
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
      type: "DatabricksIntegrationAccountResponseData",
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
    return DatabricksIntegrationAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
