import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a case link.
 */
export class IncidentCaseLinkDataAttributes {
  /**
   * The entity identifier.
   */
  "entityId": string;
  /**
   * Whether this is a page link.
   */
  "isPage": boolean;
  /**
   * The relationship type.
   */
  "relationship": string;
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
    entityId: {
      baseName: "entity_id",
      type: "string",
      required: true,
    },
    isPage: {
      baseName: "is_page",
      type: "boolean",
      required: true,
    },
    relationship: {
      baseName: "relationship",
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
    return IncidentCaseLinkDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
