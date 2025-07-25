/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Search filters for listing security signals.
 */
export class SecurityMonitoringSignalListRequestFilter {
  /**
   * The minimum timestamp for requested security signals.
   */
  "from"?: Date;
  /**
   * Search query for listing security signals.
   */
  "query"?: string;
  /**
   * The maximum timestamp for requested security signals.
   */
  "to"?: Date;

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
      format: "date-time",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    to: {
      baseName: "to",
      type: "Date",
      format: "date-time",
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
    return SecurityMonitoringSignalListRequestFilter.attributeTypeMap;
  }

  public constructor() {}
}
