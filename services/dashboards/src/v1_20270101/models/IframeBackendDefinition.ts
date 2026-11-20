import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IframeBackendDefinitionType } from "./IframeBackendDefinitionType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class IframeBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": IframeBackendDefinitionType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "url": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "IframeBackendDefinitionType",
      required: true,
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IframeBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
