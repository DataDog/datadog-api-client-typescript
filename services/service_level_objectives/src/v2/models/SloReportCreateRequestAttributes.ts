import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOReportInterval } from "./SLOReportInterval";

/**
 * The attributes portion of the SLO report request.
 */
export class SloReportCreateRequestAttributes {
  /**
   * The `from` timestamp for the report in epoch seconds.
   */
  "fromTs": number;
  /**
   * The frequency at which report data is to be generated.
   */
  "interval"?: SLOReportInterval;
  /**
   * The query string used to filter SLO results. Some examples of queries include `service:<service-name>` and `slo-name`.
   */
  "query": string;
  /**
   * The timezone used to determine the start and end of each interval. For example, weekly intervals start at 12am on Sunday in the specified timezone.
   */
  "timezone"?: string;
  /**
   * The `to` timestamp for the report in epoch seconds.
   */
  "toTs": number;
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
      required: true,
      format: "int64",
    },
    interval: {
      baseName: "interval",
      type: "SLOReportInterval",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    timezone: {
      baseName: "timezone",
      type: "string",
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
    return SloReportCreateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
