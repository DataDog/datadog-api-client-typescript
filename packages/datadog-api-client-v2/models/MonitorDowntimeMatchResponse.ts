/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeMeta } from "./DowntimeMeta";
import { MonitorDowntimeMatchResponseData } from "./MonitorDowntimeMatchResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for retrieving all downtime matches for a monitor.
 */
export class MonitorDowntimeMatchResponse {
  /**
   * An array of downtime matches.
   */
  "data"?: Array<MonitorDowntimeMatchResponseData>;
  /**
   * Pagination metadata returned by the API.
   */
  "meta"?: DowntimeMeta;

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
    data: {
      baseName: "data",
      type: "Array<MonitorDowntimeMatchResponseData>",
    },
    meta: {
      baseName: "meta",
      type: "DowntimeMeta",
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
    return MonitorDowntimeMatchResponse.attributeTypeMap;
  }

  public constructor() {}
}
