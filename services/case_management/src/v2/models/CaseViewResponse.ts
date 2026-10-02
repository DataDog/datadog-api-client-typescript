import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseView } from "./CaseView";

/**
 * Response containing a single work item view.
 */
export class CaseViewResponse {
  /**
   * A saved work item view that provides a filtered, reusable list of work items matching a specific query. Views act as persistent dashboards for monitoring work item subsets.
   */
  "data": CaseView;
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
      type: "CaseView",
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
    return CaseViewResponse.attributeTypeMap;
  }

  public constructor() {}
}
