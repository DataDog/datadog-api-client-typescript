import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseView } from "./CaseView";

/**
 * Response containing a list of case views.
 */
export class CaseViewsResponse {
  /**
   * A list of case views.
   */
  "data": Array<CaseView>;
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
      type: "Array<CaseView>",
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
    return CaseViewsResponse.attributeTypeMap;
  }

  public constructor() {}
}
