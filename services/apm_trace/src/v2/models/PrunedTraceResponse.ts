import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PrunedTraceData } from "./PrunedTraceData";

/**
 * Response containing a single pruned trace.
 */
export class PrunedTraceResponse {
  /**
   * A pruned trace resource document.
   */
  "data": PrunedTraceData;
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
      type: "PrunedTraceData",
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
    return PrunedTraceResponse.attributeTypeMap;
  }

  public constructor() {}
}
