import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansAggregateResponseStatus } from "./SpansAggregateResponseStatus";
import { SpansWarning } from "./SpansWarning";

/**
 * The metadata associated with a request.
 */
export class SpansAggregateResponseMetadata {
  /**
   * The time elapsed in milliseconds.
   */
  "elapsed"?: number;
  /**
   * The identifier of the request.
   */
  "requestId"?: string;
  /**
   * The status of the response.
   */
  "status"?: SpansAggregateResponseStatus;
  /**
   * A list of warnings (non fatal errors) encountered, partial results might be returned if
   * warnings are present in the response.
   */
  "warnings"?: Array<SpansWarning>;
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
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "SpansAggregateResponseStatus",
    },
    warnings: {
      baseName: "warnings",
      type: "Array<SpansWarning>",
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
    return SpansAggregateResponseMetadata.attributeTypeMap;
  }

  public constructor() {}
}
