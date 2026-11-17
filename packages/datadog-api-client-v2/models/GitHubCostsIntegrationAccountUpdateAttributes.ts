/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitHubCostsIntegrationAccountAuthenticationUpdate } from "./GitHubCostsIntegrationAccountAuthenticationUpdate";
import { GitHubCostsIntegrationAccountSettingsUpdate } from "./GitHubCostsIntegrationAccountSettingsUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to update a GitHub Costs integration account. Every field is optional; only the fields provided are changed.
 */
export class GitHubCostsIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the GitHub Costs integration account. Exactly one method is set.
   */
  "authentication"?: GitHubCostsIntegrationAccountAuthenticationUpdate;
  /**
   * Human-readable name of the GitHub Costs integration account.
   */
  "name"?: string;
  /**
   * Settings for updating the GitHub Costs integration account. Only the fields provided are changed.
   */
  "settings"?: GitHubCostsIntegrationAccountSettingsUpdate;

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
      type: "GitHubCostsIntegrationAccountAuthenticationUpdate",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "GitHubCostsIntegrationAccountSettingsUpdate",
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
    return GitHubCostsIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
