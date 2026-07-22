import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationRulePreviewResult } from "./NotificationRulePreviewResult";

/**
 * Attributes of the notification preview response.
 */
export class NotificationRulePreviewResponseAttributes {
  /**
   * List of preview results for each rule type matched by the notification rule.
   */
  "previewResults": Array<NotificationRulePreviewResult>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    previewResults: {
      baseName: "preview_results",
      type: "Array<NotificationRulePreviewResult>",
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
    return NotificationRulePreviewResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
