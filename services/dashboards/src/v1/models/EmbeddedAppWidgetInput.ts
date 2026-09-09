import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EmbeddedAppWidgetInputValue } from "./EmbeddedAppWidgetInputValue";

/**
 * An input passed to the embedded app.
 */
export class EmbeddedAppWidgetInput {
  /**
   * Name of the app input.
   */
  "name": string;
  /**
   * Value of the app input. This can be a string, number, boolean, object, or a non-empty homogeneous array of those types.
   */
  "value": EmbeddedAppWidgetInputValue;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "EmbeddedAppWidgetInputValue",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EmbeddedAppWidgetInput.attributeTypeMap;
  }

  public constructor() {}
}
