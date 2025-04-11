import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeMeta } from "./DowntimeMeta";
import { MonitorDowntimeMatchResponseData } from "./MonitorDowntimeMatchResponseData";

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
