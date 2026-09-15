import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountUpdateData } from "./DatabricksIntegrationAccountUpdateData";

/**
 * Request payload to update a Databricks integration account.
 */
export class DatabricksIntegrationAccountUpdateRequest {
  /**
   * Data envelope for updating a Databricks integration account.
   */
  "data": DatabricksIntegrationAccountUpdateData;
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
      type: "DatabricksIntegrationAccountUpdateData",
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
    return DatabricksIntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
