import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseCommentAttributes } from "./CaseCommentAttributes";
import { CaseResourceType } from "./CaseResourceType";

/**
 * Case comment
 */
export class CaseComment {
  /**
   * Case comment attributes
   */
  "attributes": CaseCommentAttributes;
  /**
   * Case resource type
   */
  "type": CaseResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "CaseCommentAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseResourceType",
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
    return CaseComment.attributeTypeMap;
  }

  public constructor() {}
}
