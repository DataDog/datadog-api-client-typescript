import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A script that can be used to remediate the issue.
 */
export class AgentHealthRemediationScript {
  /**
   * The content of the script.
   */
  "content"?: string;
  /**
   * The filename of the script.
   */
  "filename"?: string;
  /**
   * The language of the script.
   */
  "language"?: string;
  /**
   * The language version used by the script.
   */
  "languageVersion"?: string;
  /**
   * Whether the script requires root privileges.
   */
  "requiresRoot"?: boolean;
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
    content: {
      baseName: "content",
      type: "string",
    },
    filename: {
      baseName: "filename",
      type: "string",
    },
    language: {
      baseName: "language",
      type: "string",
    },
    languageVersion: {
      baseName: "language_version",
      type: "string",
    },
    requiresRoot: {
      baseName: "requires_root",
      type: "boolean",
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
    return AgentHealthRemediationScript.attributeTypeMap;
  }

  public constructor() {}
}
