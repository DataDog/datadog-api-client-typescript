import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WildcardSpecificationType } from "./WildcardSpecificationType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WildcardBackendDefinitionSpecification {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "contents": { [key: string]: any };
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": WildcardSpecificationType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    contents: {
      baseName: "contents",
      type: "{ [key: string]: any; }",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WildcardSpecificationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WildcardBackendDefinitionSpecification.attributeTypeMap;
  }

  public constructor() {}
}
