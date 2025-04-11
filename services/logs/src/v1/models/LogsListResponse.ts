import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Log } from "./Log";

/**
 * Response object with all logs matching the request and pagination information.
 */
export class LogsListResponse {
  /**
   * Array of logs matching the request and the `nextLogId` if sent.
   */
  "logs"?: Array<Log>;
  /**
   * Hash identifier of the next log to return in the list.
   * This parameter is used for the pagination feature.
   */
  "nextLogId"?: string;
  /**
   * Status of the response.
   */
  "status"?: string;
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
    logs: {
      baseName: "logs",
      type: "Array<Log>",
    },
    nextLogId: {
      baseName: "nextLogId",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
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
