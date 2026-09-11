import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { InboxRuleDataCreate } from "./InboxRuleDataCreate";

/**
 * The body of an inbox rule create request.
 */
export class InboxRuleCreateRequest {
  /**
   * The data object for an inbox rule create request.
   */
  "data": InboxRuleDataCreate;
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
      type: "InboxRuleDataCreate",
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
    return InboxRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
