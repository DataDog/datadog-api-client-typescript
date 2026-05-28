import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PrunedTraceAttributes } from "./PrunedTraceAttributes";
import { PrunedTraceType } from "./PrunedTraceType";

/**
 * A pruned trace resource document.
 */
export class PrunedTraceData {
  /**
   * The attributes of a pruned trace returned by the Get pruned trace by ID endpoint.
   */
  "attributes": PrunedTraceAttributes;
  /**
   * The full 128-bit trace ID, encoded as a 32-character hexadecimal string.
   */
  "id": string;
  /**
   * The type of the pruned trace resource. The value is always `pruned_trace`.
   */
  "type": PrunedTraceType;
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
      type: "PrunedTraceAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PrunedTraceType",
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
    return PrunedTraceData.attributeTypeMap;
  }

  public constructor() {}
}
