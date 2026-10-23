import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageServiceNowIncidentType } from "./OnCallPageServiceNowIncidentType";

/**
 * Reference to a ServiceNow incident.
 */
export class OnCallPageServiceNowIncidentRelationshipData {
  /**
   * The ID of the ServiceNow incident.
   */
  "id": string;
  /**
   * ServiceNow incident resource type.
   */
  "type": OnCallPageServiceNowIncidentType;
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
    },
    type: {
      baseName: "type",
      type: "OnCallPageServiceNowIncidentType",
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
    return OnCallPageServiceNowIncidentRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
