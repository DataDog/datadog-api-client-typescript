/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportScheduleResponseAttributes } from "./ReportScheduleResponseAttributes";
import { ReportScheduleResponseRelationships } from "./ReportScheduleResponseRelationships";
import { ReportScheduleType } from "./ReportScheduleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API data object representing a report schedule.
 */
export class ReportScheduleResponseData {
  /**
   * The configuration and derived state of a report schedule.
   */
  "attributes": ReportScheduleResponseAttributes;
  /**
   * The unique identifier of the report schedule.
   */
  "id": string;
  /**
   * Relationships for the report schedule.
   */
  "relationships": ReportScheduleResponseRelationships;
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
      type: "ReportScheduleResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ReportScheduleResponseRelationships",
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
    return ReportScheduleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
