import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { InboxRuleType } from "./InboxRuleType";

/**
 * A reference to an inbox rule used for reordering.
 */
export class InboxRuleReorderItem {
  /**
   * The ID of the inbox rule.
   */
  "id": string;
  /**
   * The JSON:API type for inbox rules.
   */
  "type": InboxRuleType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "InboxRuleType",
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
    return InboxRuleReorderItem.attributeTypeMap;
  }

  public constructor() {}
}
