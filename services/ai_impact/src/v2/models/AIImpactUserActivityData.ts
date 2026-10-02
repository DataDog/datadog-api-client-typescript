import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIImpactUserActivityAttributes } from "./AIImpactUserActivityAttributes";
import { AIImpactUserActivityType } from "./AIImpactUserActivityType";

/**
 * A single daily AI tool activity entry.
 */
export class AIImpactUserActivityData {
  /**
   * Daily AI coding tool activity for a single user. Each entry reports whether the user was
   * active on a given day and which AI tools and models they used.
   */
  "attributes": AIImpactUserActivityAttributes;
  /**
   * JSON:API type for AI Impact user activity entries.
   */
  "type": AIImpactUserActivityType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "AIImpactUserActivityAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AIImpactUserActivityType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AIImpactUserActivityData.attributeTypeMap;
  }

  public constructor() {}
}
