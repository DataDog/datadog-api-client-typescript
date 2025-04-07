import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTriggerTest } from "./SyntheticsTriggerTest";

/**
 * Object describing the Synthetic tests to trigger.
 */
export class SyntheticsTriggerBody {
  /**
   * List of Synthetic tests.
   */
  "tests": Array<SyntheticsTriggerTest>;
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
    tests: {
      baseName: "tests",
      type: "Array<SyntheticsTriggerTest>",
      required: true,
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
    return SyntheticsTriggerBody.attributeTypeMap;
  }

  public constructor() {}
}
