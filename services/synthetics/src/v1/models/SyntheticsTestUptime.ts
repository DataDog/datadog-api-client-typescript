import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsUptime } from "./SyntheticsUptime";

/**
 * Object containing the uptime for a Synthetic test ID.
 */
export class SyntheticsTestUptime {
  /**
   * Timestamp in seconds for the start of uptime.
   */
  "fromTs"?: number;
  /**
   * Object containing the uptime information.
   */
  "overall"?: SyntheticsUptime;
  /**
   * A Synthetic test ID.
   */
  "publicId"?: string;
  /**
   * Timestamp in seconds for the end of uptime.
   */
  "toTs"?: number;
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
    fromTs: {
      baseName: "from_ts",
      type: "number",
      format: "int64",
    },
    overall: {
      baseName: "overall",
      type: "SyntheticsUptime",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    toTs: {
      baseName: "to_ts",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestUptime.attributeTypeMap;
  }

  public constructor() {}
}
