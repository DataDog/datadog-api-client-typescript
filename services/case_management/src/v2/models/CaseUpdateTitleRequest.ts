import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseUpdateTitle } from "./CaseUpdateTitle";

/**
 * Work item update title request
 */
export class CaseUpdateTitleRequest {
  /**
   * Work item update title
   */
  "data": CaseUpdateTitle;
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
      type: "CaseUpdateTitle",
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
    return CaseUpdateTitleRequest.attributeTypeMap;
  }

  public constructor() {}
}
