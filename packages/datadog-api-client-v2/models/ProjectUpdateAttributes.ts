/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProjectColumnsConfig } from "./ProjectColumnsConfig";
import { ProjectSettings } from "./ProjectSettings";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Project update attributes
 */
export class ProjectUpdateAttributes {
  /**
   * Project columns configuration
   */
  "columnsConfig"?: ProjectColumnsConfig;
  /**
   * List of enabled custom case type IDs
   */
  "enabledCustomCaseTypes"?: Array<string>;
  /**
   * Project name
   */
  "name"?: string;
  /**
   * Project settings
   */
  "settings"?: ProjectSettings;
  /**
   * Team UUID to associate with the project
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
    columnsConfig: {
      baseName: "columns_config",
      type: "ProjectColumnsConfig",
    },
    enabledCustomCaseTypes: {
      baseName: "enabled_custom_case_types",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "ProjectSettings",
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
    return ProjectUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
