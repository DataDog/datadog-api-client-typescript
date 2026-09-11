import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountAuthenticationRequest } from "./DatabricksIntegrationAccountAuthenticationRequest";
import { DatabricksIntegrationAccountSettingsRequest } from "./DatabricksIntegrationAccountSettingsRequest";
import { DatabricksIntegrationDataflowsRequest } from "./DatabricksIntegrationDataflowsRequest";

/**
 * Writable attributes used to create a Databricks integration account.
 */
export class DatabricksIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the Databricks integration account. Exactly one method is set. Choosing `private-action-runner` leaves the `databricks-model-serving-metrics` dataflow unable to collect data.
   */
  "authentication": DatabricksIntegrationAccountAuthenticationRequest;
  /**
   * Data Datadog collects from Databricks, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to start or stop it, and use `settings` to tune what it gathers. The defaults noted below apply when the account is created; on update, anything left out keeps its current value. Some dataflows have prerequisites, noted on each; unless one is documented as rejecting the request, it is not verified, so a dataflow enabled without it is stored but collects no data.
   */
  "dataflows"?: DatabricksIntegrationDataflowsRequest;
  /**
   * Human-readable name of the Databricks integration account.
   */
  "name": string;
  /**
   * Settings for creating the Databricks integration account.
   */
  "settings": DatabricksIntegrationAccountSettingsRequest;
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
      type: "DatabricksIntegrationAccountAuthenticationRequest",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "DatabricksIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "DatabricksIntegrationAccountSettingsRequest",
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
    return DatabricksIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
