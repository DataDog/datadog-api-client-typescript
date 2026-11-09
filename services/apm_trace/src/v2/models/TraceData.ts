import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TraceAttributes } from "./TraceAttributes";
import { TraceType } from "./TraceType";

/**
 * A trace resource document.
 */
export class TraceData {
  /**
   * The attributes of a trace returned by the Get trace by ID endpoint.
   */
  "attributes": TraceAttributes;
  /**
   * The lower 64 bits of the trace ID, as a decimal string.
   * The full trace ID is in each span's `traceIDFull`.
   */
  "id": string;
  /**
   * The type of the trace resource. The value is always `trace`.
   */
  "type": TraceType;
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
    attributes: {
      baseName: "attributes",
      type: "TraceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TraceType",
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
    return TraceData.attributeTypeMap;
  }

  public constructor() {}
}
