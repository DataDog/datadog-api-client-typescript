import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `Connection` object.
 */
export class Connection {
  /**
   * The `Connection` `connectionId`.
   */
  "connectionId": string;
  /**
   * The `Connection` `label`.
   */
  "label": string;
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
    connectionId: {
      baseName: "connectionId",
      type: "string",
      required: true,
    },
    label: {
      baseName: "label",
      type: "string",
      required: true,
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
    return Connection.attributeTypeMap;
  }

  public constructor() {}
}
