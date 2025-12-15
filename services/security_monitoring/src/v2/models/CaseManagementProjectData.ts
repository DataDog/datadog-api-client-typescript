import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseManagementProjectDataType } from "./CaseManagementProjectDataType";

export class CaseManagementProjectData {
  /**
   * Unique identifier of the case management project.
   */
  "id": string;
  /**
   * Projects resource type.
   */
  "type": CaseManagementProjectDataType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseManagementProjectDataType",
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
    return CaseManagementProjectData.attributeTypeMap;
  }

  public constructor() {}
}
