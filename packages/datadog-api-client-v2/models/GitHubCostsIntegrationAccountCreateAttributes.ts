/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GitHubCostsIntegrationAccountAuthenticationRequest } from "./GitHubCostsIntegrationAccountAuthenticationRequest";
import { GitHubCostsIntegrationAccountSettingsRequest } from "./GitHubCostsIntegrationAccountSettingsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to create a GitHub Costs integration account.
 */
export class GitHubCostsIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the GitHub Costs integration account. Exactly one method is set.
   */
  "authentication": GitHubCostsIntegrationAccountAuthenticationRequest;
  /**
   * Human-readable name of the GitHub Costs integration account.
   */
  "name": string;
  /**
   * Settings for creating the GitHub Costs integration account.
   */
  "settings": GitHubCostsIntegrationAccountSettingsRequest;

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
      type: "GitHubCostsIntegrationAccountAuthenticationRequest",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "GitHubCostsIntegrationAccountSettingsRequest",
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
    return GitHubCostsIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
