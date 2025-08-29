import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueUpdateStateRequestData } from "./IssueUpdateStateRequestData";

/**
 * Update issue state request payload.
 */
export class IssueUpdateStateRequest {
  /**
   * Update issue state request.
   */
  "data": IssueUpdateStateRequestData;
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
      type: "IssueUpdateStateRequestData",
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
    return IssueUpdateStateRequest.attributeTypeMap;
  }

  public constructor() {}
}
