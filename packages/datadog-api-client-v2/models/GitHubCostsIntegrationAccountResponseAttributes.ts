/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitHubCostsIntegrationAccountAuthenticationResponse } from "./GitHubCostsIntegrationAccountAuthenticationResponse";
import { GitHubCostsIntegrationAccountSettingsResponse } from "./GitHubCostsIntegrationAccountSettingsResponse";
import { GitHubCostsIntegrationDataflowsResponse } from "./GitHubCostsIntegrationDataflowsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a GitHub Costs integration account returned in responses.
 */
export class GitHubCostsIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the GitHub Costs integration account.
   */
  "authentication"?: GitHubCostsIntegrationAccountAuthenticationResponse;
  /**
   * Data Datadog collects from GitHub Costs, keyed by dataflow id.
   */
  "dataflows"?: GitHubCostsIntegrationDataflowsResponse;
  /**
   * Human-readable name of the GitHub Costs integration account.
   */
  "name": string;
  /**
   * Settings configured on the GitHub Costs integration account.
   */
  "settings": GitHubCostsIntegrationAccountSettingsResponse;

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
      type: "GitHubCostsIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "GitHubCostsIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "GitHubCostsIntegrationAccountSettingsResponse",
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
    return GitHubCostsIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
