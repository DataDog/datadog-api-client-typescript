import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleAuthorRelationship } from "./ReportScheduleAuthorRelationship";
import { ReportScheduleListResourceRelationship } from "./ReportScheduleListResourceRelationship";

/**
 * Relationships for a report schedule in a list response.
 */
export class ReportScheduleListResponseRelationships {
  /**
   * Relationship to the author of the report schedule.
   */
  "author": ReportScheduleAuthorRelationship;
  /**
   * Relationship to the report target resource.
   */
  "resource"?: ReportScheduleListResourceRelationship;
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
    author: {
      baseName: "author",
      type: "ReportScheduleAuthorRelationship",
      required: true,
    },
    resource: {
      baseName: "resource",
      type: "ReportScheduleListResourceRelationship",
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
    return ReportScheduleListResponseRelationships.attributeTypeMap;
  }

  public constructor() {}
}
