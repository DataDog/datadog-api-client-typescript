import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOErrorTimeframe } from "./SLOErrorTimeframe";

/**
 * Object describing the error.
 */
export class SLOBulkDeleteError {
  /**
   * The ID of the service level objective object associated with
   * this error.
   */
  "id": string;
  /**
   * The error message.
   */
  "message": string;
  /**
   * The timeframe of the threshold associated with this error
   * or "all" if all thresholds are affected.
   */
  "timeframe": SLOErrorTimeframe;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    timeframe: {
      baseName: "timeframe",
      type: "SLOErrorTimeframe",
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
    return SLOBulkDeleteError.attributeTypeMap;
  }

  public constructor() {}
}
