import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The notification template's attributes.
 */
export class IncidentNotificationTemplateAttributes {
  /**
   * The category of the notification template.
   */
  "category": string;
  /**
   * The content body of the notification template.
   */
  "content": string;
  /**
   * Timestamp when the notification template was created.
   */
  "created": Date;
  /**
   * Timestamp when the notification template was last modified.
   */
  "modified": Date;
  /**
   * The name of the notification template.
   */
  "name": string;
  /**
   * The subject line of the notification template.
   */
  "subject": string;
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
    category: {
      baseName: "category",
      type: "string",
      required: true,
    },
    content: {
      baseName: "content",
      type: "string",
      required: true,
    },
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    subject: {
      baseName: "subject",
      type: "string",
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
    return IncidentNotificationTemplateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
