import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountAuthenticationResponse } from "./DatabricksIntegrationAccountAuthenticationResponse";
import { DatabricksIntegrationAccountSettingsResponse } from "./DatabricksIntegrationAccountSettingsResponse";
import { DatabricksIntegrationDataflowsResponse } from "./DatabricksIntegrationDataflowsResponse";

/**
 * Attributes of a Databricks integration account returned in responses.
 */
export class DatabricksIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the Databricks integration account.
   */
  "authentication"?: DatabricksIntegrationAccountAuthenticationResponse;
  /**
   * Dataflows configured on the Databricks integration account, keyed by dataflow id.
   */
  "dataflows"?: DatabricksIntegrationDataflowsResponse;
  /**
   * Human-readable name of the Databricks integration account.
   */
  "name": string;
  /**
   * Settings configured on the Databricks integration account.
   */
  "settings": DatabricksIntegrationAccountSettingsResponse;
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
    authentication: {
      baseName: "authentication",
      type: "DatabricksIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "DatabricksIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "DatabricksIntegrationAccountSettingsResponse",
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
    return DatabricksIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
