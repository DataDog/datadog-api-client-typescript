import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Reference to the author of a Page action.
 */
export class OnCallPageAuthorRelationshipData {
  /**
   * The ID of the author.
   */
  "id": string;
  /**
   * The resource type of the author, for example `users`, `monitors`,
   * `incident_authors`, or `security_signal`.
   */
  "type": string;
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
      required: true,
    },
    type: {
      baseName: "type",
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
    return OnCallPageAuthorRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
