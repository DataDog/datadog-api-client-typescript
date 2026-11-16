import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueSnoozeRequestData } from "./IssueSnoozeRequestData";

/**
 * Snooze issue request payload.
 */
export class IssueSnoozeRequest {
  /**
   * Snooze issue request.
   */
  "data": IssueSnoozeRequestData;
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
      type: "IssueSnoozeRequestData",
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
    return IssueSnoozeRequest.attributeTypeMap;
  }

  public constructor() {}
}
