import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeDirectionality } from "./ChangeDirectionality";
import { ChangeDuration } from "./ChangeDuration";
import { ChangeLayout } from "./ChangeLayout";
import { ChangeType } from "./ChangeType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ComparisonRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "directionality"?: ChangeDirectionality;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "duration": ChangeDuration;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "layout"?: ChangeLayout;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type"?: ChangeType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    directionality: {
      baseName: "directionality",
      type: "ChangeDirectionality",
    },
    duration: {
      baseName: "duration",
      type: "ChangeDuration",
      required: true,
    },
    layout: {
      baseName: "layout",
      type: "ChangeLayout",
    },
    type: {
      baseName: "type",
      type: "ChangeType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ComparisonRequest.attributeTypeMap;
  }

  public constructor() {}
}
