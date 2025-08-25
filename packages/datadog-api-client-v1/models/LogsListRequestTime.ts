/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Timeframe to retrieve the log from.
 */
export class LogsListRequestTime {
  /**
   * Minimum timestamp for requested logs.
   */
  "from": Date;
  /**
   * Timezone can be specified both as an offset (for example "UTC+03:00")
   * or a regional zone (for example "Europe/Paris").
   */
  "timezone"?: string;
  /**
   * Maximum timestamp for requested logs.
   */
  "to": Date;

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
    from: {
      baseName: "from",
      type: "Date",
      required: true,
      format: "date-time",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
    to: {
      baseName: "to",
      type: "Date",
      required: true,
      format: "date-time",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsListRequestTime.attributeTypeMap;
  }

  public constructor() {}
}
