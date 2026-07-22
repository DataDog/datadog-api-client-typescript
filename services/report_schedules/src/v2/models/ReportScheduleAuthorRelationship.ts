import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleAuthorRelationshipData } from "./ReportScheduleAuthorRelationshipData";

/**
 * Relationship to the author of the report schedule.
 */
export class ReportScheduleAuthorRelationship {
  /**
   * Relationship data for the author of the report schedule.
   */
  "data": ReportScheduleAuthorRelationshipData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "ReportScheduleAuthorRelationshipData",
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
    return ReportScheduleAuthorRelationship.attributeTypeMap;
  }

  public constructor() {}
}
