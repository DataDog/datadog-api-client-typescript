import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Project creation attributes.
 */
export class ProjectCreateAttributes {
  /**
   * List of enabled custom case type IDs.
   */
  "enabledCustomCaseTypes"?: Array<string>;
  /**
   * Project's key. Cannot be "CASE".
   */
  "key": string;
  /**
   * Project name.
   */
  "name": string;
  /**
   * Team UUID to associate with the project.
   */
  "teamUuid"?: string;
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
    enabledCustomCaseTypes: {
      baseName: "enabled_custom_case_types",
      type: "Array<string>",
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    teamUuid: {
      baseName: "team_uuid",
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
    return ProjectCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
