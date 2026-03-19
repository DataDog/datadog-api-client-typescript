import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Reference to a component affected by a vulnerability.
 */
export class CycloneDXAffect {
  /**
   * Reference to a component's bom-ref.
   */
  "ref": string;
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
    ref: {
      baseName: "ref",
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
    return CycloneDXAffect.attributeTypeMap;
  }

  public constructor() {}
}
