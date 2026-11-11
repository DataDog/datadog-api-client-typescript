/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A daily per-engineer engagement signal that [AI Impact](https://docs.datadoghq.com/delivery_performance/ai_impact/) uses to attribute AI-assisted pull requests.
 */
export class OpenAICodexDoraIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `true`; set to `false` to stop collection.
   */
  "enabled"?: boolean;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAICodexDoraIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
