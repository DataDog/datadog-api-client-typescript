import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Modifier of the object.
 */
export class SLOCorrectionResponseAttributesModifier {
  /**
   * Email of the Modifier.
   */
  "email"?: string;
  /**
   * Handle of the Modifier.
   */
  "handle"?: string;
  /**
   * Name of the Modifier.
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
    name: {
      baseName: "name",
      type: "string",
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
    return SLOCorrectionResponseAttributesModifier.attributeTypeMap;
  }

  public constructor() {}
}
