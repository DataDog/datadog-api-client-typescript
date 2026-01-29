import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectColumnsConfig } from "./ProjectColumnsConfig";
import { ProjectSettings } from "./ProjectSettings";

/**
 * Project attributes
 */
export class ProjectAttributes {
  /**
   * Project columns configuration
   */
  "columnsConfig"?: ProjectColumnsConfig;
  /**
   * List of enabled custom case type IDs
   */
  "enabledCustomCaseTypes"?: Array<string>;
  /**
   * The project's key
   */
  "key"?: string;
  /**
   * Project's name
   */
  "name"?: string;
  /**
   * Whether the project is restricted
   */
  "restricted"?: boolean;
  /**
   * Project settings
   */
  "settings"?: ProjectSettings;
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
    columnsConfig: {
      baseName: "columns_config",
      type: "ProjectColumnsConfig",
    },
    enabledCustomCaseTypes: {
      baseName: "enabled_custom_case_types",
      type: "Array<string>",
    },
    key: {
      baseName: "key",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    restricted: {
      baseName: "restricted",
      type: "boolean",
    },
    settings: {
      baseName: "settings",
      type: "ProjectSettings",
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
    return ProjectAttributes.attributeTypeMap;
  }

  public constructor() {}
}
