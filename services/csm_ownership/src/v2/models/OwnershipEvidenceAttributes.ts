import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of an ownership evidence response.
 */
export class OwnershipEvidenceAttributes {
  /**
   * The list of evidence versions associated with an inference.
   */
  "evidenceVersions": Array<{ [key: string]: any }> | null;
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
    evidenceVersions: {
      baseName: "evidence_versions",
      type: "Array<{ [key: string]: any; }>",
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
    return OwnershipEvidenceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
