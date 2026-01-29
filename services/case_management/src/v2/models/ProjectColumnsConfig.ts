import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectColumnsConfigColumnsItems } from "./ProjectColumnsConfigColumnsItems";

/**
 * Project columns configuration
 */
export class ProjectColumnsConfig {
  "columns"?: Array<ProjectColumnsConfigColumnsItems>;
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
    columns: {
      baseName: "columns",
      type: "Array<ProjectColumnsConfigColumnsItems>",
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
    return ProjectColumnsConfig.attributeTypeMap;
  }

  public constructor() {}
}
