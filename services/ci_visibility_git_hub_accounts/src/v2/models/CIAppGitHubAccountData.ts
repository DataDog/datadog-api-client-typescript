import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppGitHubAccountAttributes } from "./CIAppGitHubAccountAttributes";
import { CIAppGitHubAccountType } from "./CIAppGitHubAccountType";

/**
 * Data object for a GitHub account.
 */
export class CIAppGitHubAccountData {
  /**
   * Attributes describing a GitHub account's CI Visibility opt-in status.
   */
  "attributes": CIAppGitHubAccountAttributes;
  /**
   * The account's unique identifier, in the form `<host>/<account name>`
   * (for example `github.com/datadog`).
   */
  "id": string;
  /**
   * JSON:API type for the GitHub account resource.
   * The value must always be `ci_github_account`.
   */
  "type": CIAppGitHubAccountType;
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
    attributes: {
      baseName: "attributes",
      type: "CIAppGitHubAccountAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CIAppGitHubAccountType",
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
    return CIAppGitHubAccountData.attributeTypeMap;
  }

  public constructor() {}
}
