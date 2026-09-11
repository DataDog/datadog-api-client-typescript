import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { InboxRuleDataUpdate } from "./InboxRuleDataUpdate";

/**
 * The body of an inbox rule update request.
 */
export class InboxRuleUpdateRequest {
  /**
   * The data object for an inbox rule update request. The `id` must match the `rule_id` path parameter.
   */
  "data": InboxRuleDataUpdate;
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
      type: "InboxRuleDataUpdate",
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
    return InboxRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
