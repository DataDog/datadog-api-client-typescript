/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportScheduleResourceType } from "./ReportScheduleResourceType";
import { ReportScheduleResponseAttributesDeliveryFormat } from "./ReportScheduleResponseAttributesDeliveryFormat";
import { ReportScheduleStatus } from "./ReportScheduleStatus";
import { ReportScheduleTemplateVariable } from "./ReportScheduleTemplateVariable";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The configuration and derived state of a report schedule in a list response.
 */
export class ReportScheduleListResponseAttributes {
  /**
   * The delivery format for dashboard report schedules, or `null` if not set.
   */
  "deliveryFormat"?: ReportScheduleResponseAttributesDeliveryFormat;
  /**
   * The description of the report.
   */
  "description": string;
  /**
   * The Unix timestamp, in milliseconds, of the next scheduled delivery, or `null` if none is scheduled.
   */
  "nextRecurrence": number | null;
  /**
   * The recipients of the report (email addresses, Slack channel references, or Microsoft Teams channel references).
   */
  "recipients": Array<string>;
  /**
   * The identifier of the resource rendered in the report.
   */
  "resourceId": string;
  /**
   * The type of dashboard resource the report schedule targets.
   */
  "resourceType": ReportScheduleResourceType;
  /**
   * The recurrence rule for the schedule, expressed as an iCalendar `RRULE` string.
   */
  "rrule": string;
  /**
   * Whether the schedule is currently delivering reports (`active`) or paused (`inactive`).
   */
  "status": ReportScheduleStatus;
  /**
   * The dashboard template variables applied when rendering the report.
   */
  "templateVariables": Array<ReportScheduleTemplateVariable>;
  /**
   * The relative timeframe of data included in the report, or `null` if not set.
   */
  "timeframe": string | null;
  /**
   * The IANA time zone identifier the recurrence rule is evaluated in.
   */
  "timezone": string;
  /**
   * The title of the report.
   */
  "title": string;

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
    deliveryFormat: {
      baseName: "delivery_format",
      type: "ReportScheduleResponseAttributesDeliveryFormat",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    nextRecurrence: {
      baseName: "next_recurrence",
      type: "number",
      required: true,
      format: "int64",
    },
    recipients: {
      baseName: "recipients",
      type: "Array<string>",
      required: true,
    },
    resourceId: {
      baseName: "resource_id",
      type: "string",
      required: true,
    },
    resourceType: {
      baseName: "resource_type",
      type: "ReportScheduleResourceType",
      required: true,
    },
    rrule: {
      baseName: "rrule",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "ReportScheduleStatus",
      required: true,
    },
    templateVariables: {
      baseName: "template_variables",
      type: "Array<ReportScheduleTemplateVariable>",
      required: true,
    },
    timeframe: {
      baseName: "timeframe",
      type: "string",
      required: true,
    },
    timezone: {
      baseName: "timezone",
      type: "string",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
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
    return ReportScheduleListResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
