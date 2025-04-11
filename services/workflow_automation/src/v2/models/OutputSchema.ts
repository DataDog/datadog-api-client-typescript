import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OutputSchemaParameters } from "./OutputSchemaParameters";

/**
 * A list of output parameters for the workflow.
 */
export class OutputSchema {
  /**
   * The `OutputSchema` `parameters`.
   */
  "parameters"?: Array<OutputSchemaParameters>;
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
      type: "Array<OutputSchemaParameters>",
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
    return OutputSchema.attributeTypeMap;
  }

  public constructor() {}
}
