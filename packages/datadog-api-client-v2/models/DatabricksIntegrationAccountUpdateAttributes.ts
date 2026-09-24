/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksIntegrationAccountAuthenticationUpdate } from "./DatabricksIntegrationAccountAuthenticationUpdate";
import { DatabricksIntegrationAccountSettingsUpdate } from "./DatabricksIntegrationAccountSettingsUpdate";
import { DatabricksIntegrationDataflowsRequest } from "./DatabricksIntegrationDataflowsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to update a Databricks integration account. Every field is optional; only the fields provided are changed. When `dataflows` is provided, only the dataflow ids included in the request are modified; dataflows omitted from the map keep their current configuration, as do the settings of an included dataflow that provides only `enabled`.
 */
export class DatabricksIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the Databricks integration account. Exactly one method is set. Choosing `private_action_runner` leaves the `databricks-model-serving-metrics` dataflow unable to collect data. `bearer_token` is deprecated on Databricks: it is accepted only on accounts that already use it and never on creation, so it cannot move an account onto token authentication. Migrate those accounts to `databricks_oauth` or `private_action_runner`.
   */
  "authentication"?: DatabricksIntegrationAccountAuthenticationUpdate;
  /**
   * Data Datadog collects from Databricks, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to start or stop it, and use `settings` to configure what it collects. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Some dataflows have prerequisites, noted on each; unless one is documented as rejecting the request, it is not verified, so a dataflow enabled without it is stored but collects no data.
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
