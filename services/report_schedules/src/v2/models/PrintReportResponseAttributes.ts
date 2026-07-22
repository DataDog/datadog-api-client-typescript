import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReportScheduleResourceType } from "./ReportScheduleResourceType";
import { ReportScheduleTemplateVariable } from "./ReportScheduleTemplateVariable";

/**
 * The configuration and download URL for the initiated print-only report.
 */
export class PrintReportResponseAttributes {
  /**
   * The URL from which the rendered PDF report can be downloaded.
   */
  "downloadUrl": string;
  /**
   * The start of the rendered time range, as a Unix timestamp in milliseconds.
   */
  "fromTs": number;
  /**
   * The identifier of the dashboard or integration dashboard.
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
   * The relative time window used, if one was specified in the request.
   */
  "timeframe"?: string;
  /**
   * The IANA time zone identifier used when rendering the report.
   */
  "timezone": string;
  /**
   * The end of the rendered time range, as a Unix timestamp in milliseconds.
   */
  "toTs": number;
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
    downloadUrl: {
      baseName: "download_url",
      type: "string",
      required: true,
    },
    fromTs: {
      baseName: "from_ts",
      type: "number",
      required: true,
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
      required: true,
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
    return PrintReportResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
