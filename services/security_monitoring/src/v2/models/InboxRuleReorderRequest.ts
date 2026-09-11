import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { InboxRuleReorderItem } from "./InboxRuleReorderItem";

/**
 * The body of an inbox rule reorder request.
 */
export class InboxRuleReorderRequest {
  /**
   * The ordered list of all inbox rules. Every rule must be included.
   */
  "data": Array<InboxRuleReorderItem>;
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
      type: "Array<InboxRuleReorderItem>",
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
    return InboxRuleReorderRequest.attributeTypeMap;
  }

  public constructor() {}
}
