import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A GitHub repository within a GitHub account, and its CI Visibility opt-in status.
 */
export class CIAppGitHubAccountRepository {
  /**
   * Whether CI Visibility is enabled for this repository.
   */
  "enabled"?: boolean;
  /**
   * The repository name.
   */
  "name"?: string;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return CIAppGitHubAccountRepository.attributeTypeMap;
  }

  public constructor() {}
}
