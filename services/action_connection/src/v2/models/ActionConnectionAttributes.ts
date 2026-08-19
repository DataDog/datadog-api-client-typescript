import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActionConnectionIntegration } from "./ActionConnectionIntegration";

/**
 * The definition of `ActionConnectionAttributes` object.
 */
export class ActionConnectionAttributes {
  /**
   * The definition of `ActionConnectionIntegration` object.
   */
  "integration": ActionConnectionIntegration;
  /**
   * Name of the connection
   */
  "name": string;
  /**
   * Tags associated with the connection. Each tag must follow the `key:value` format.
   * The `default` tag key is reserved.
   */
  "tags"?: Array<string>;
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
    integration: {
      baseName: "integration",
      type: "ActionConnectionIntegration",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return ActionConnectionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
