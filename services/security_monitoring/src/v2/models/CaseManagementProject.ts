import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseManagementProjectData } from "./CaseManagementProjectData";

/**
 * Case management project.
 */
export class CaseManagementProject {
  "data": CaseManagementProjectData;
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
    data: {
      baseName: "data",
      type: "CaseManagementProjectData",
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
    return CaseManagementProject.attributeTypeMap;
  }

  public constructor() {}
}
