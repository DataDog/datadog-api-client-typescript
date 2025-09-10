import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentNotificationTemplateAttributes } from "./IncidentNotificationTemplateAttributes";
import { IncidentNotificationTemplateRelationships } from "./IncidentNotificationTemplateRelationships";
import { IncidentNotificationTemplateType } from "./IncidentNotificationTemplateType";

/**
 * A notification template object for inclusion in other resources.
 */
export class IncidentNotificationTemplateObject {
  /**
   * The notification template's attributes.
   */
  "attributes"?: IncidentNotificationTemplateAttributes;
  /**
   * The unique identifier of the notification template.
   */
  "id": string;
  /**
   * The notification template's resource relationships.
   */
  "relationships"?: IncidentNotificationTemplateRelationships;
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
    attributes: {
      baseName: "attributes",
      type: "IncidentNotificationTemplateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentNotificationTemplateRelationships",
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
    return IncidentNotificationTemplateObject.attributeTypeMap;
  }

  public constructor() {}
}
