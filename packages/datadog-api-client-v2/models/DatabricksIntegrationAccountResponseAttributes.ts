/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatabricksIntegrationAccountAuthenticationResponse } from "./DatabricksIntegrationAccountAuthenticationResponse";
import { DatabricksIntegrationAccountSettingsResponse } from "./DatabricksIntegrationAccountSettingsResponse";
import { DatabricksIntegrationDataflowsResponse } from "./DatabricksIntegrationDataflowsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
