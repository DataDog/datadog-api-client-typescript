import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleAuthorRelationship } from "./ReportScheduleAuthorRelationship";

/**
 * Relationships for the report schedule.
 */
export class ReportScheduleResponseRelationships {
  /**
   * Relationship to the author of the report schedule.
   */
  "author": ReportScheduleAuthorRelationship;
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
    author: {
      baseName: "author",
      type: "ReportScheduleAuthorRelationship",
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
    return ReportScheduleResponseRelationships.attributeTypeMap;
  }

  public constructor() {}
}
