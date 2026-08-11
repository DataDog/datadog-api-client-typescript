import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Repository-level opt-in change to apply, identified by name.
 */
export class CIAppGitHubAccountUpdateRequestRepository {
  /**
   * Whether to enable or disable CI Visibility for this repository.
   */
  "enabled": boolean;
  /**
   * The repository name to update.
   */
  "name": string;
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
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
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
    return CIAppGitHubAccountUpdateRequestRepository.attributeTypeMap;
  }

  public constructor() {}
}
