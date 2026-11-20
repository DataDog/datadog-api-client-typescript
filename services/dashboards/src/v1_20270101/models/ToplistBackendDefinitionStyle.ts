import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ToplistBackendDefinitionStyle20270101Display } from "./ToplistBackendDefinitionStyle20270101Display";
import { ToplistBackendDefinitionStyleScaling } from "./ToplistBackendDefinitionStyleScaling";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ToplistBackendDefinitionStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "display"?: ToplistBackendDefinitionStyle20270101Display;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scaling"?: ToplistBackendDefinitionStyleScaling;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    display: {
      baseName: "display",
      type: "ToplistBackendDefinitionStyle20270101Display",
    },
    palette: {
      baseName: "palette",
      type: "string",
    },
    scaling: {
      baseName: "scaling",
      type: "ToplistBackendDefinitionStyleScaling",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ToplistBackendDefinitionStyle.attributeTypeMap;
  }

  public constructor() {}
}
