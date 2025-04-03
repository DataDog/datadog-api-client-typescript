import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActionQueryMockedOutputsEnabled } from "./ActionQueryMockedOutputsEnabled";

/**
 * The mocked outputs of the action query.
 */
export class ActionQueryMockedOutputsObject {
  /**
   * Whether to enable the mocked outputs for testing.
   */
  "enabled": ActionQueryMockedOutputsEnabled;
  /**
   * The mocked outputs of the action query, serialized as JSON.
   */
  "outputs"?: string;
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
    enabled: {
      baseName: "enabled",
      type: "ActionQueryMockedOutputsEnabled",
      required: true,
    },
    outputs: {
      baseName: "outputs",
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
    return ActionQueryMockedOutputsObject.attributeTypeMap;
  }

  public constructor() {}
}
