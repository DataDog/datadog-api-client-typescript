import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleCreateRequestAttributes } from "./ReportScheduleCreateRequestAttributes";
import { ReportScheduleType } from "./ReportScheduleType";

/**
 * The JSON:API data object for a report schedule creation request.
 */
export class ReportScheduleCreateRequestData {
  /**
   * The configuration of the report schedule to create.
   */
  "attributes": ReportScheduleCreateRequestAttributes;
  /**
   * JSON:API resource type for report schedules.
   */
  "type": ReportScheduleType;
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
    attributes: {
      baseName: "attributes",
      type: "ReportScheduleCreateRequestAttributes",
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
    return ReportScheduleCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
