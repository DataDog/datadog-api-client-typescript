import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActionQuerySpecConnectionGroup } from "./ActionQuerySpecConnectionGroup";
import { ActionQuerySpecInputs } from "./ActionQuerySpecInputs";

/**
 * The action query spec object.
 */
export class ActionQuerySpecObject {
  /**
   * The connection group to use for an action query.
   */
  "connectionGroup"?: ActionQuerySpecConnectionGroup;
  /**
   * The ID of the custom connection to use for this action query.
   */
  "connectionId"?: string;
  /**
   * The fully qualified name of the action type.
   */
  "fqn": string;
  /**
   * The inputs to the action query. These are the values that are passed to the action when it is triggered.
   */
  "inputs"?: ActionQuerySpecInputs;
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
    connectionGroup: {
      baseName: "connectionGroup",
      type: "ActionQuerySpecConnectionGroup",
    },
    connectionId: {
      baseName: "connectionId",
      type: "string",
    },
    fqn: {
      baseName: "fqn",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "ActionQuerySpecInputs",
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
    return ActionQuerySpecObject.attributeTypeMap;
  }

  public constructor() {}
}
