import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { InboxRuleAttributesCreate } from "./InboxRuleAttributesCreate";
import { InboxRuleType } from "./InboxRuleType";

/**
 * The data object for an inbox rule update request. The `id` must match the `rule_id` path parameter.
 */
export class InboxRuleDataUpdate {
  /**
   * Attributes for creating or updating an inbox rule.
   */
  "attributes": InboxRuleAttributesCreate;
  /**
   * The ID of the inbox rule to update.
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
    attributes: {
      baseName: "attributes",
      type: "InboxRuleAttributesCreate",
      required: true,
    },
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
    return InboxRuleDataUpdate.attributeTypeMap;
  }

  public constructor() {}
}
