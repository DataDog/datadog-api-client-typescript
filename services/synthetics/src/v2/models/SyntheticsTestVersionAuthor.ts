import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object describing the author of a test version.
 */
export class SyntheticsTestVersionAuthor {
  /**
   * Email address of the author.
   */
  "email"?: string;
  /**
   * The author's Datadog handle (login username).
   */
  "handle"?: string;
  /**
   * UUID of the author.
   */
  "id"?: string;
  /**
   * Display name of the author.
   */
  "name"?: string;
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
    email: {
      baseName: "email",
      type: "string",
    },
    handle: {
      baseName: "handle",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return SyntheticsTestVersionAuthor.attributeTypeMap;
  }

  public constructor() {}
}
