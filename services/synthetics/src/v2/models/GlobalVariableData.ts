import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GlobalVariableType } from "./GlobalVariableType";
import { SyntheticsGlobalVariable } from "./SyntheticsGlobalVariable";

/**
 * Synthetics global variable data. Wrapper around the global variable object.
 */
export class GlobalVariableData {
  /**
   * Synthetic global variable.
   */
  "attributes"?: SyntheticsGlobalVariable;
  /**
   * Global variable identifier.
   */
  "id"?: string;
  /**
   * Global variable type.
   */
  "type"?: GlobalVariableType;
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
      type: "SyntheticsGlobalVariable",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GlobalVariableType",
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
    return GlobalVariableData.attributeTypeMap;
  }

  public constructor() {}
}
