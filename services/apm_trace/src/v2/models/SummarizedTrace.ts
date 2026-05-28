import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SummarizedSpan } from "./SummarizedSpan";

/**
 * A summarized, hierarchical view of a trace.
 */
export class SummarizedTrace {
  /**
   * A node in the pruned trace tree.
   */
  "root": SummarizedSpan;
  /**
   * The full 128-bit trace ID, encoded as a 32-character hexadecimal string.
   */
  "traceId": string;
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
    root: {
      baseName: "root",
      type: "SummarizedSpan",
      required: true,
    },
    traceId: {
      baseName: "traceId",
      type: "string",
      required: true,
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
    return SummarizedTrace.attributeTypeMap;
  }

  public constructor() {}
}
