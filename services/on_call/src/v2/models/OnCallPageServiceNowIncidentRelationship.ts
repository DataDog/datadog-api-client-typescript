import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageServiceNowIncidentRelationshipData } from "./OnCallPageServiceNowIncidentRelationshipData";

/**
 * The ServiceNow incident linked to the Page.
 */
export class OnCallPageServiceNowIncidentRelationship {
  /**
   * Reference to a ServiceNow incident.
   */
  "data"?: OnCallPageServiceNowIncidentRelationshipData;
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
      type: "OnCallPageServiceNowIncidentRelationshipData",
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
    return OnCallPageServiceNowIncidentRelationship.attributeTypeMap;
  }

  public constructor() {}
}
