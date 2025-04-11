import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Finding object containing the finding information.
 */
export class BulkMuteFindingsRequestMetaFindings {
  /**
   * The unique ID for this finding.
   */
  "findingId"?: string;
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
    findingId: {
      baseName: "finding_id",
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
    return BulkMuteFindingsRequestMetaFindings.attributeTypeMap;
  }

  public constructor() {}
}
