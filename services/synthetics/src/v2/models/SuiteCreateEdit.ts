import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsSuite } from "./SyntheticsSuite";
import { SyntheticsSuiteType } from "./SyntheticsSuiteType";

export class SuiteCreateEdit {
  /**
   * Object containing details about a Synthetic suite.
   */
  "attributes": SyntheticsSuite;
  /**
   * Type of the Synthetic suite, `suite`.
   */
  "type": SyntheticsSuiteType;
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
      type: "SyntheticsSuiteType",
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
