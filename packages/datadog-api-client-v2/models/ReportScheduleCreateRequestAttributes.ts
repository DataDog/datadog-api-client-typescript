/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportScheduleDeliveryFormat } from "./ReportScheduleDeliveryFormat";
import { ReportScheduleResourceType } from "./ReportScheduleResourceType";
import { ReportScheduleTemplateVariable } from "./ReportScheduleTemplateVariable";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The configuration of the report schedule to create.
*/
export class ReportScheduleCreateRequestAttributes {
  /**
   * How a PDF-export report is delivered. `pdf` attaches a PDF file, `png` embeds
   * an inline PNG image, and `pdf_and_png` delivers both.
  */
  "deliveryFormat"?: ReportScheduleDeliveryFormat;
  /**
   * A description of the report, up to 4096 characters.
  */
  "description": string;
  /**
   * The recipients of the report. Each entry is an email address, a Slack channel
   * reference in the form `slack:{team_id}.{channel_id}.{channel_name}`, or a Microsoft
   * Teams channel reference in the form `teams:{tenant_id}|{team_id}|{channel_id}`.
  */
  "recipients": Array<string>;
  /**
   * The identifier of the dashboard or integration dashboard to render in the report.
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
   * The identifier of the dashboard tab to render, when the dashboard has tabs.
  */
  "tabId"?: string;
  /**
   * The dashboard template variables applied when rendering the report.
  */
  "templateVariables": Array<ReportScheduleTemplateVariable>;
  /**
   * The relative timeframe of data to include in the report.
  */
  "timeframe": string;
  /**
   * The IANA time zone identifier the recurrence rule is evaluated in.
  */
  "timezone": string;
  /**
   * The title of the report, between 1 and 78 characters.
  */
  "title": string;

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
    "deliveryFormat": {
      "baseName": "delivery_format",
      "type": "ReportScheduleDeliveryFormat",
    },
    "description": {
      "baseName": "description",
      "type": "string",
      "required": true,
    },
    "recipients": {
      "baseName": "recipients",
      "type": "Array<string>",
      "required": true,
    },
    "resourceId": {
      "baseName": "resource_id",
      "type": "string",
      "required": true,
    },
    "resourceType": {
      "baseName": "resource_type",
      "type": "ReportScheduleResourceType",
      "required": true,
    },
    "rrule": {
      "baseName": "rrule",
      "type": "string",
      "required": true,
    },
    "tabId": {
      "baseName": "tab_id",
      "type": "string",
      "format": "uuid",
    },
    "templateVariables": {
      "baseName": "template_variables",
      "type": "Array<ReportScheduleTemplateVariable>",
      "required": true,
    },
    "timeframe": {
      "baseName": "timeframe",
      "type": "string",
      "required": true,
    },
    "timezone": {
      "baseName": "timezone",
      "type": "string",
      "required": true,
    },
    "title": {
      "baseName": "title",
      "type": "string",
      "required": true,
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




    return ReportScheduleCreateRequestAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









