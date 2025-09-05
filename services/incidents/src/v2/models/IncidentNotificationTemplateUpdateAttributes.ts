import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes to update on a notification template.
 */
export class IncidentNotificationTemplateUpdateAttributes {
  /**
   * The category of the notification template.
   */
  "category"?: string;
  /**
   * The content body of the notification template.
   */
  "content"?: string;
  /**
   * The name of the notification template.
   */
  "name"?: string;
  /**
   * The subject line of the notification template.
   */
  "subject"?: string;
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
    },
    content: {
      baseName: "content",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    subject: {
      baseName: "subject",
      type: "string",
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
    return IncidentNotificationTemplateUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
