/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HistoricalJobListMeta } from "./HistoricalJobListMeta";
import { HistoricalJobResponseData } from "./HistoricalJobResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "{ [key: string]: any; }",
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
