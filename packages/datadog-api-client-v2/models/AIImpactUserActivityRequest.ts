/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIImpactUserActivityData } from "./AIImpactUserActivityData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
