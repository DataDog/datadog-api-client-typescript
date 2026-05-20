import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseUpdateDueDate } from "./CaseUpdateDueDate";

/**
 * Request payload for updating a case's due date.
 */
export class CaseUpdateDueDateRequest {
  /**
   * Data object for updating a case's due date.
   */
  "data": CaseUpdateDueDate;
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
      type: "CaseUpdateDueDate",
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
    return CaseUpdateDueDateRequest.attributeTypeMap;
  }

  public constructor() {}
}
