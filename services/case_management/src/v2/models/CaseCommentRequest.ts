import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseComment } from "./CaseComment";

/**
 * Case comment request
 */
export class CaseCommentRequest {
  /**
   * Case comment
   */
  "data": CaseComment;
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
      type: "CaseComment",
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
    return CaseCommentRequest.attributeTypeMap;
  }

  public constructor() {}
}
