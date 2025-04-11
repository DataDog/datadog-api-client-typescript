import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { InputSchemaParameters } from "./InputSchemaParameters";

/**
 * A list of input parameters for the workflow. These can be used as dynamic runtime values in your workflow.
 */
export class InputSchema {
  /**
   * The `InputSchema` `parameters`.
   */
  "parameters"?: Array<InputSchemaParameters>;
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
    parameters: {
      baseName: "parameters",
      type: "Array<InputSchemaParameters>",
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
    return InputSchema.attributeTypeMap;
  }

  public constructor() {}
}
