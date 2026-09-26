import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Replacement bucket set for a Terraform backend sync configuration.
 */
export class TerraformBackendUpdateAttributes {
  /**
   * Complete set of S3 bucket names to synchronize. Names must be nonempty and unique.
   */
  "bucketNames": Array<string>;
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
    bucketNames: {
      baseName: "bucket_names",
      type: "Array<string>",
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
    return TerraformBackendUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
