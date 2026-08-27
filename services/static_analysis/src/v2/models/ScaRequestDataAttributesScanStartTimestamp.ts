import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The time when the SCA scan started.
 */
export class ScaRequestDataAttributesScanStartTimestamp {
  /**
   * Non-negative fractions of a second at nanosecond resolution.
   */
  "nanos"?: number;
  /**
   * Seconds of UTC time since Unix epoch.
   */
  "seconds"?: number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    nanos: {
      baseName: "nanos",
      type: "number",
      format: "int32",
    },
    seconds: {
      baseName: "seconds",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScaRequestDataAttributesScanStartTimestamp.attributeTypeMap;
  }

  public constructor() {}
}
