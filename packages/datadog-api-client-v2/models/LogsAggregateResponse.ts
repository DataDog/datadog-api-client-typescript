/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsAggregateResponseData } from "./LogsAggregateResponseData";
import { LogsResponseMetadata } from "./LogsResponseMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response object for the logs aggregate API endpoint
 */
export class LogsAggregateResponse {
  /**
   * The query results
   */
  "data"?: LogsAggregateResponseData;
  /**
   * The metadata associated with a request
   */
  "meta"?: LogsResponseMetadata;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "LogsAggregateResponseData",
    },
    meta: {
      baseName: "meta",
      type: "LogsResponseMetadata",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsAggregateResponse.attributeTypeMap;
  }

  public constructor() {}
}
