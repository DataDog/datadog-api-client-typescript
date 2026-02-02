import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class SankeyResponseDataAttributesNodesItemsAggregatedNodesItems {
  "id"?: string;
  "incomingValue"?: number;
  "name"?: string;
  "outgoingValue"?: number;
  "type"?: string;
  "value"?: number;
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
    id: {
      baseName: "id",
      type: "string",
    },
    incomingValue: {
      baseName: "incoming_value",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    outgoingValue: {
      baseName: "outgoing_value",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "int64",
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
    return SankeyResponseDataAttributesNodesItemsAggregatedNodesItems.attributeTypeMap;
  }

  public constructor() {}
}
