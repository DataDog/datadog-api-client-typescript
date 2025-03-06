/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TriggerRateLimit } from "./TriggerRateLimit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Trigger a workflow VIA a Monitor. For automatic triggering a handle must be configured and the workflow must be published.
 */
export class MonitorTrigger {
  /**
   * Defines a rate limit for a trigger.
   */
  "rateLimit"?: TriggerRateLimit;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    rateLimit: {
      baseName: "rateLimit",
      type: "TriggerRateLimit",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorTrigger.attributeTypeMap;
  }

  public constructor() {}
}
