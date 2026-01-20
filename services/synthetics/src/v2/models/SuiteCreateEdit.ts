import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsSuite } from "./SyntheticsSuite";
import { SyntheticsSuiteTypes } from "./SyntheticsSuiteTypes";

export class SuiteCreateEdit {
  /**
   * Object containing details about a Synthetic suite.
   */
  "attributes": SyntheticsSuite;
  /**
   * Type for the Synthetics suites responses, `suites`.
   */
  "type": SyntheticsSuiteTypes;
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
      type: "SyntheticsSuite",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsSuiteTypes",
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
    return SuiteCreateEdit.attributeTypeMap;
  }

  public constructor() {}
}
