import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TraceData } from "./TraceData";

/**
 * Response containing a single trace.
 */
export class TraceResponse {
  /**
   * A trace resource document.
   */
  "data": TraceData;
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
      type: "TraceData",
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
    return TraceResponse.attributeTypeMap;
  }

  public constructor() {}
}
