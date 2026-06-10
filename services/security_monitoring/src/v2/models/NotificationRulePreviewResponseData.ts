import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationRulePreviewResponseAttributes } from "./NotificationRulePreviewResponseAttributes";
import { NotificationRulePreviewResponseType } from "./NotificationRulePreviewResponseType";

/**
 * The notification preview response data.
 */
export class NotificationRulePreviewResponseData {
  /**
   * Attributes of the notification preview response.
   */
  "attributes": NotificationRulePreviewResponseAttributes;
  /**
   * The ID of the notification preview response.
   */
  "id"?: string;
  /**
   * The type of the notification preview response.
   */
  "type": NotificationRulePreviewResponseType;
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
      type: "NotificationRulePreviewResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "NotificationRulePreviewResponseType",
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
    return NotificationRulePreviewResponseData.attributeTypeMap;
  }

  public constructor() {}
}
