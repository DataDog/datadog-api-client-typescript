import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSNamespace } from "./AWSNamespace";

/**
 * A tag filter.
 */
export class AWSTagFilter {
  /**
   * The namespace associated with the tag filter entry.
   */
  "namespace"?: AWSNamespace;
  /**
   * The tag filter string.
   */
  "tagFilterStr"?: string;
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
      type: "AWSNamespace",
    },
    tagFilterStr: {
      baseName: "tag_filter_str",
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
    return AWSTagFilter.attributeTypeMap;
  }

  public constructor() {}
}
