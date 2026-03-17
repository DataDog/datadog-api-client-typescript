import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentHandleRelationshipData } from "./IncidentHandleRelationshipData";

/**
 * A single relationship object for an incident handle, wrapping the related resource data.
 */
export class IncidentHandleRelationship {
  /**
   * Relationship data for an incident handle, containing the ID and type of the related resource.
   */
  "data": IncidentHandleRelationshipData;
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
      type: "IncidentHandleRelationshipData",
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
    return IncidentHandleRelationship.attributeTypeMap;
  }

  public constructor() {}
}
