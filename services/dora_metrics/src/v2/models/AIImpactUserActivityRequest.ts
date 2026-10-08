import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AIImpactUserActivityData } from "./AIImpactUserActivityData";

/**
 * Request to send daily AI tool activity for one or more users.
 */
export class AIImpactUserActivityRequest {
  /**
   * A batch of daily AI tool activity entries. A batch must contain between 1 and 1,000 entries.
   */
  "data": Array<AIImpactUserActivityData>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<AIImpactUserActivityData>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AIImpactUserActivityRequest.attributeTypeMap;
  }

  public constructor() {}
}
