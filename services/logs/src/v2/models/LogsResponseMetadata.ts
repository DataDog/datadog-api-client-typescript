import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsAggregateResponseStatus } from "./LogsAggregateResponseStatus";
import { LogsResponseMetadataPage } from "./LogsResponseMetadataPage";
import { LogsWarning } from "./LogsWarning";

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
