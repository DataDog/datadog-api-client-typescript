/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportScheduleListResponseAttributes } from "./ReportScheduleListResponseAttributes";
import { ReportScheduleListResponseRelationships } from "./ReportScheduleListResponseRelationships";
import { ReportScheduleType } from "./ReportScheduleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
