import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A RUM node within a journey step.
 */
export class DemRumNode {
  /**
   * The RUM application ID whose events this node query matches. This value is required for every node when creating or updating a DEM feature or journey, including variants, and is used to discover the resource in application-scoped searches. Use `GET /api/v2/rum/applications` to find RUM application IDs.
   */
  "appId": string;
  /**
   * The ID of the RUM node element.
   */
  "id"?: string;
  /**
   * The RUM query for matching this node.
   */
  "query": string;
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
    appId: {
      baseName: "app_id",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
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
    return DemRumNode.attributeTypeMap;
  }

  public constructor() {}
}
