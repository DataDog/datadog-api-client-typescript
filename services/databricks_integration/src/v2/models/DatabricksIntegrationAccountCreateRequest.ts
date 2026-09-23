import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountCreateData } from "./DatabricksIntegrationAccountCreateData";

/**
 * Request payload to create a Databricks integration account.
 */
export class DatabricksIntegrationAccountCreateRequest {
  /**
   * Data envelope for creating a Databricks integration account.
   */
  "data": DatabricksIntegrationAccountCreateData;
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
      type: "DatabricksIntegrationAccountCreateData",
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
    return DatabricksIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
