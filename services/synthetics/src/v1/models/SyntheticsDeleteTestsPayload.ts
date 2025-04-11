import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A JSON list of the ID or IDs of the Synthetic tests that you want
 * to delete.
 */
export class SyntheticsDeleteTestsPayload {
  /**
   * Delete the Synthetic test even if it's referenced by other resources
   * (for example, SLOs and composite monitors).
   */
  "forceDeleteDependencies"?: boolean;
  /**
   * An array of Synthetic test IDs you want to delete.
   */
  "publicIds"?: Array<string>;
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
    forceDeleteDependencies: {
      baseName: "force_delete_dependencies",
      type: "boolean",
    },
    publicIds: {
      baseName: "public_ids",
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
    return SyntheticsDeleteTestsPayload.attributeTypeMap;
  }

  public constructor() {}
}
