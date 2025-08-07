import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSLogSourceTagFilter } from "./AWSLogSourceTagFilter";

/**
 * Log source configuration.
 */
export class AWSLambdaForwarderConfigLogSourceConfig {
  /**
   * List of AWS log source tag filters. Defaults to `[]`.
   */
  "tagFilters"?: Array<AWSLogSourceTagFilter>;
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
    tagFilters: {
      baseName: "tag_filters",
      type: "Array<AWSLogSourceTagFilter>",
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
    return AWSLambdaForwarderConfigLogSourceConfig.attributeTypeMap;
  }

  public constructor() {}
}
