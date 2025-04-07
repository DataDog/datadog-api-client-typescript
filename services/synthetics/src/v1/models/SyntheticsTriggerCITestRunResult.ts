import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Information about a single test run.
 */
export class SyntheticsTriggerCITestRunResult {
  /**
   * The device ID.
   */
  "device"?: string;
  /**
   * The location ID of the test run.
   */
  "location"?: number;
  /**
   * The public ID of the Synthetic test.
   */
  "publicId"?: string;
  /**
   * ID of the result.
   */
  "resultId"?: string;
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
    device: {
      baseName: "device",
      type: "string",
    },
    location: {
      baseName: "location",
      type: "number",
      format: "int64",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    resultId: {
      baseName: "result_id",
      type: "string",
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
    return SyntheticsTriggerCITestRunResult.attributeTypeMap;
  }

  public constructor() {}
}
