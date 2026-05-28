import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueDefinitionData } from "./IssueDefinitionData";

/**
 * Response body for the issues endpoint, returning all available device issue definitions.
 */
export class IssueDefinitionArray {
  /**
   * List of available issue definitions.
   */
  "data": Array<IssueDefinitionData>;
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
      type: "Array<IssueDefinitionData>",
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
    return IssueDefinitionArray.attributeTypeMap;
  }

  public constructor() {}
}
