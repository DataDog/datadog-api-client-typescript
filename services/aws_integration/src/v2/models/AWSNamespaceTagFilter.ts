import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS Metrics Collection tag filters list. Defaults to `[]`.
 * The array of custom AWS resource tags (in the form `key:value`) defines a filter that Datadog uses
 * when collecting metrics from a specified service.
 * Wildcards, such as `?` (match a single character) and `*` (match multiple characters),
 * and exclusion using `!` before the tag are supported.
 * For EC2, only hosts that match one of the defined tags are imported into Datadog.
 * The rest are ignored. For example, `env:production,instance-type:c?.*,!region:us-east-1`.
 */
export class AWSNamespaceTagFilter {
  /**
   * The AWS service for which the tag filters defined in `tags` will be applied.
   */
  "namespace"?: string;
  /**
   * The AWS resource tags to filter on for the service specified by `namespace`.
   */
  "tags"?: Array<string>;
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
    namespace: {
      baseName: "namespace",
      type: "string",
    },
    tags: {
      baseName: "tags",
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
    return AWSNamespaceTagFilter.attributeTypeMap;
  }

  public constructor() {}
}
