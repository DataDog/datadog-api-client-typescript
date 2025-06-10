import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Schema for kind.
 */
export class KindObj {
  /**
   * Short description of the kind.
   */
  "description"?: string;
  /**
   * The display name of the kind. Automatically generated if not provided.
   */
  "displayName"?: string;
  /**
   * The name of the kind to create or update. This must be in kebab-case format.
   */
  "kind": string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "displayName",
      type: "string",
    },
    kind: {
      baseName: "kind",
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
    return KindObj.attributeTypeMap;
  }

  public constructor() {}
}
