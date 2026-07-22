import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleAuthorType } from "./ReportScheduleAuthorType";

/**
 * Relationship data for the author of the report schedule.
 */
export class ReportScheduleAuthorRelationshipData {
  /**
   * The user UUID of the report schedule author.
   */
  "id": string;
  /**
   * JSON:API resource type for the included report author.
   */
  "type": ReportScheduleAuthorType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReportScheduleAuthorType",
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
    return ReportScheduleAuthorRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
