import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppGitHubAccountUpdateRequestRepository } from "./CIAppGitHubAccountUpdateRequestRepository";

/**
 * Attributes for updating a GitHub account's CI Visibility opt-in status.
 * At least one of `enabled` or `repository.enabled` must be provided.
 * Account-level and repository-level opt-in changes are independent and may both be supplied in the same request.
 */
export class CIAppGitHubAccountUpdateRequestAttributes {
  /**
   * The GitHub account (organization or user) name to update, identified by name.
   */
  "account": string;
  /**
   * Whether to enable or disable CI Visibility at the account level.
   */
  "enabled"?: boolean;
  /**
   * The GitHub host (`github.com` or a GHES hostname) the account belongs to. Required to disambiguate
   * when the same account name exists on more than one host.
   */
  "host"?: string;
  /**
   * Repository-level opt-in change to apply, identified by name.
   */
  "repository"?: CIAppGitHubAccountUpdateRequestRepository;
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
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    host: {
      baseName: "host",
      type: "string",
    },
    repository: {
      baseName: "repository",
      type: "CIAppGitHubAccountUpdateRequestRepository",
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
    return CIAppGitHubAccountUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
