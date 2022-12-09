/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Log } from "./Log";
import { LogsListResponseLinks } from "./LogsListResponseLinks";
import { LogsResponseMetadata } from "./LogsResponseMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object with all logs matching the request and pagination information.
 */
export class LogsListResponse {
  /**
   * Array of logs matching the request.
   */
  "data"?: Array<Log>;
  /**
   * Links attributes.
   */
  "links"?: LogsListResponseLinks;
  /**
   * The metadata associated with a request
   */
  "meta"?: LogsResponseMetadata;

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
      type: "Array<Log>",
    },
    links: {
      baseName: "links",
      type: "LogsListResponseLinks",
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
    return LogsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
