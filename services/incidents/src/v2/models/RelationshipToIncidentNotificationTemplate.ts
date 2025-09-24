import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToIncidentNotificationTemplateData } from "./RelationshipToIncidentNotificationTemplateData";

/**
 * A relationship reference to a notification template.
 */
export class RelationshipToIncidentNotificationTemplate {
  /**
   * The notification template relationship data.
   */
  "data": RelationshipToIncidentNotificationTemplateData;
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
      type: "RelationshipToIncidentNotificationTemplateData",
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
    return RelationshipToIncidentNotificationTemplate.attributeTypeMap;
  }

  public constructor() {}
}
