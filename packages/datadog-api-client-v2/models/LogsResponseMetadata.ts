/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsAggregateResponseStatus } from "./LogsAggregateResponseStatus";
import { LogsResponseMetadataPage } from "./LogsResponseMetadataPage";
import { LogsWarning } from "./LogsWarning";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The metadata associated with a request
 */
export class LogsResponseMetadata {
  /**
   * The time elapsed in milliseconds
   */
  "elapsed"?: number;
  /**
   * Paging attributes.
   */
  "page"?: LogsResponseMetadataPage;
  /**
   * The identifier of the request
   */
  "requestId"?: string;
  /**
   * The status of the response
   */
  "status"?: LogsAggregateResponseStatus;
  /**
   * A list of warnings (non fatal errors) encountered, partial results might be returned if
   * warnings are present in the response.
   */
  "warnings"?: Array<LogsWarning>;

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
    elapsed: {
      baseName: "elapsed",
      type: "number",
      format: "int64",
    },
    page: {
      baseName: "page",
      type: "LogsResponseMetadataPage",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "LogsAggregateResponseStatus",
    },
    warnings: {
      baseName: "warnings",
      type: "Array<LogsWarning>",
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
    return LogsResponseMetadata.attributeTypeMap;
  }

  public constructor() {}
}
