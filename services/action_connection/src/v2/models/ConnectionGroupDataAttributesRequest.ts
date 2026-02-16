import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating a connection group.
 */
export class ConnectionGroupDataAttributesRequest {
  /**
   * List of connection IDs associated with the connection group.
   */
  "connections"?: Array<string>;
  /**
   * The description of the connection group.
   */
  "description"?: string;
  /**
   * The integration type of the connection group.
   */
  "integrationType"?: string;
  /**
   * The name of the connection group.
   */
  "name"?: string;
  /**
   * Policy attributes for the connection group.
   */
  "policyAttributes"?: string;
  /**
   * Tag keys associated with the connection group.
   */
  "tagKeys"?: Array<string>;
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
    connections: {
      baseName: "connections",
      type: "Array<string>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    integrationType: {
      baseName: "integration_type",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    policyAttributes: {
      baseName: "policy_attributes",
      type: "string",
    },
    tagKeys: {
      baseName: "tag_keys",
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
    return ConnectionGroupDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
