import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HistoricalJobListMeta } from "./HistoricalJobListMeta";
import { HistoricalJobResponseData } from "./HistoricalJobResponseData";

/**
 * List of historical jobs.
 */
export class ListHistoricalJobsResponse {
  /**
   * Array containing the list of historical jobs.
   */
  "data"?: Array<HistoricalJobResponseData>;
  /**
   * Metadata about the list of jobs.
   */
  "meta"?: HistoricalJobListMeta;
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
      type: "Array<HistoricalJobResponseData>",
    },
    meta: {
      baseName: "meta",
      type: "HistoricalJobListMeta",
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
    return ListHistoricalJobsResponse.attributeTypeMap;
  }

  public constructor() {}
}
