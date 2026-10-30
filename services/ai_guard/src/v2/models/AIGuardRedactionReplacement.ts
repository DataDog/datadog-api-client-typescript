import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The fully redacted content for one path in the request.
 */
export class AIGuardRedactionReplacement {
  /**
   * The path of the redacted content relative to the request attributes.
   */
  "path": string;
  /**
   * The redacted replacement content.
   */
  "replacement": string;
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
    path: {
      baseName: "path",
      type: "string",
      required: true,
    },
    replacement: {
      baseName: "replacement",
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
    return AIGuardRedactionReplacement.attributeTypeMap;
  }

  public constructor() {}
}
