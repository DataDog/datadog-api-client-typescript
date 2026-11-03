/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportScheduleResourceType } from "./ReportScheduleResourceType";
import { ReportScheduleTemplateVariable } from "./ReportScheduleTemplateVariable";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The configuration for a print-only report. Specify exactly one of `timeframe` (for a
 * relative time window) or both `from_ts` and `to_ts` (for an absolute time range).
 */
export class PrintReportRequestAttributes {
  /**
   * The start of an absolute time range, as a Unix timestamp in milliseconds.
   * Required when `timeframe` is omitted.
   */
  "fromTs"?: number;
  /**
   * The identifier of the dashboard or integration dashboard to render.
   */
  "resourceId": string;
  /**
   * The type of dashboard resource the report schedule targets.
   */
  "resourceType": ReportScheduleResourceType;
  /**
   * The dashboard template variables applied when rendering the report.
   */
  "templateVariables": Array<ReportScheduleTemplateVariable>;
  /**
   * A relative time window (for example `1w` or `calendar_month`). Mutually
   * exclusive with `from_ts` and `to_ts`.
   */
  "timeframe"?: string;
  /**
   * The IANA time zone identifier used to evaluate the time window.
   */
  "timezone": string;
  /**
   * The end of an absolute time range, as a Unix timestamp in milliseconds.
   * Required when `timeframe` is omitted.
   */
  "toTs"?: number;

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
    fromTs: {
      baseName: "from_ts",
      type: "number",
      format: "int64",
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
    templateVariables: {
      baseName: "template_variables",
      type: "Array<ReportScheduleTemplateVariable>",
      required: true,
    },
    timeframe: {
      baseName: "timeframe",
      type: "string",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
      required: true,
    },
    toTs: {
      baseName: "to_ts",
      type: "number",
      format: "int64",
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
    return PrintReportRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
