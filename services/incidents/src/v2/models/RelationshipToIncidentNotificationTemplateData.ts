import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentNotificationTemplateType } from "./IncidentNotificationTemplateType";

/**
 * The notification template relationship data.
 */
export class RelationshipToIncidentNotificationTemplateData {
  /**
   * The unique identifier of the notification template.
   */
  "id": string;
  /**
   * Notification templates resource type.
   */
  "type": IncidentNotificationTemplateType;
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
      type: "IncidentNotificationTemplateType",
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
    return RelationshipToIncidentNotificationTemplateData.attributeTypeMap;
  }

  public constructor() {}
}
