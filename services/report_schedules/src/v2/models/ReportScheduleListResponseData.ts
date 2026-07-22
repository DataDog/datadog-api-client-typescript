import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleListResponseAttributes } from "./ReportScheduleListResponseAttributes";
import { ReportScheduleListResponseRelationships } from "./ReportScheduleListResponseRelationships";
import { ReportScheduleType } from "./ReportScheduleType";

/**
 * The JSON:API data object representing a report schedule in a list response.
 */
export class ReportScheduleListResponseData {
  /**
   * The configuration and derived state of a report schedule in a list response.
   */
  "attributes": ReportScheduleListResponseAttributes;
  /**
   * The unique identifier of the report schedule.
   */
  "id": string;
  /**
   * Relationships for a report schedule in a list response.
   */
  "relationships": ReportScheduleListResponseRelationships;
  /**
   * JSON:API resource type for report schedules.
   */
  "type": ReportScheduleType;
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
    attributes: {
      baseName: "attributes",
      type: "ReportScheduleListResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ReportScheduleListResponseRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReportScheduleType",
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
    return ReportScheduleListResponseData.attributeTypeMap;
  }

  public constructor() {}
}
