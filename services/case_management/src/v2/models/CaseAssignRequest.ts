import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseAssign } from "./CaseAssign";

/**
 * Case assign request
 */
export class CaseAssignRequest {
  /**
   * Case assign
   */
  "data": CaseAssign;
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
      type: "CaseAssign",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseAssignRequest.attributeTypeMap;
  }

  public constructor() {}
}
