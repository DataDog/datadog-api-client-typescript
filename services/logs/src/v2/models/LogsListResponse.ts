import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Log } from "./Log";
import { LogsListResponseLinks } from "./LogsListResponseLinks";
import { LogsResponseMetadata } from "./LogsResponseMetadata";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
