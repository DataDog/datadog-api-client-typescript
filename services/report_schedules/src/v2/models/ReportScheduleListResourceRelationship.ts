import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleListResourceRelationshipData } from "./ReportScheduleListResourceRelationshipData";

/**
 * Relationship to the report target resource.
 */
export class ReportScheduleListResourceRelationship {
  /**
   * Relationship data for the report target resource.
   */
  "data": ReportScheduleListResourceRelationshipData;
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
      type: "ReportScheduleListResourceRelationshipData",
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
    return ReportScheduleListResourceRelationship.attributeTypeMap;
  }

  public constructor() {}
}
