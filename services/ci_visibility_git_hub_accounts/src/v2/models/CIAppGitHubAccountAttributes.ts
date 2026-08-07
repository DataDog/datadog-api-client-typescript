import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppGitHubAccountRepository } from "./CIAppGitHubAccountRepository";

/**
 * Attributes describing a GitHub account's CI Visibility opt-in status.
 */
export class CIAppGitHubAccountAttributes {
  /**
   * The GitHub account (organization or user) name.
   */
  "account"?: string;
  /**
   * Whether CI Visibility is enabled at the account level.
   */
  "enabled"?: boolean;
  /**
   * The GitHub host (`github.com` or a GHES hostname) this account belongs to.
   */
  "host"?: string;
  /**
   * The number of repositories known for this account.
   */
  "repoCount"?: number;
  /**
   * The repositories belonging to this account, with their individual opt-in status.
   */
  "repositories"?: Array<CIAppGitHubAccountRepository>;
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
    account: {
      baseName: "account",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    host: {
      baseName: "host",
      type: "string",
    },
    repoCount: {
      baseName: "repo_count",
      type: "number",
      format: "int64",
    },
    repositories: {
      baseName: "repositories",
      type: "Array<CIAppGitHubAccountRepository>",
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
    return CIAppGitHubAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
