import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsCITest } from "./SyntheticsCITest";

/**
 * Object describing the synthetics tests to trigger.
 */
export class SyntheticsCITestBody {
  /**
   * List of Synthetic tests with overrides.
   */
  "tests"?: Array<SyntheticsCITest>;
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
      type: "Array<SyntheticsCITest>",
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
    return SyntheticsCITestBody.attributeTypeMap;
  }

  public constructor() {}
}
