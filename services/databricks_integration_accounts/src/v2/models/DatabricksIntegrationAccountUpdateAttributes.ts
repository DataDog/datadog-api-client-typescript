import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksIntegrationAccountAuthenticationUpdate } from "./DatabricksIntegrationAccountAuthenticationUpdate";
import { DatabricksIntegrationAccountSettingsUpdate } from "./DatabricksIntegrationAccountSettingsUpdate";
import { DatabricksIntegrationDataflowsRequest } from "./DatabricksIntegrationDataflowsRequest";

/**
 * Writable attributes used to update a Databricks integration account. Every field is optional; only the fields provided are changed. When `dataflows` is provided, only the dataflow ids included in the request are modified; dataflows omitted from the map keep their current configuration, as do the settings of an included dataflow that provides only `enabled`.
 */
export class DatabricksIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the Databricks integration account. Exactly one method is set. Choosing `private-action-runner` leaves the `databricks-model-serving-metrics` dataflow unable to collect data. `pat` is accepted only on accounts that already use it, so it cannot move an account onto personal access token authentication.
   */
  "authentication"?: DatabricksIntegrationAccountAuthenticationUpdate;
  /**
   * Dataflows to configure on the Databricks integration account, keyed by dataflow id. Some dataflows and settings have prerequisites, noted on each. Those prerequisites are not checked when the request is made, so anything left enabled without them is stored but collects no data.
   */
  "dataflows"?: DatabricksIntegrationDataflowsRequest;
  /**
   * Human-readable name of the Databricks integration account.
   */
  "name"?: string;
  /**
   * Settings for updating the Databricks integration account. Only the fields provided are changed.
   */
  "settings"?: DatabricksIntegrationAccountSettingsUpdate;
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
      type: "DatabricksIntegrationAccountAuthenticationUpdate",
    },
    dataflows: {
      baseName: "dataflows",
      type: "DatabricksIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "DatabricksIntegrationAccountSettingsUpdate",
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
    return DatabricksIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
