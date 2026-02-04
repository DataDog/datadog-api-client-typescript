import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Parameters for upserting a form version.
 */
export class FormVersionUpsertParams {
  /**
   * The entity tag for conflict detection.
   */
  "etag"?: string;
  /**
   * The match policy for upserting.
   */
  "matchPolicy"?: string;
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
    etag: {
      baseName: "etag",
      type: "string",
    },
    matchPolicy: {
      baseName: "match_policy",
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
    return FormVersionUpsertParams.attributeTypeMap;
  }

  public constructor() {}
}
