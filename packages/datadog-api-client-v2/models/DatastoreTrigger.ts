/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TriggerRateLimit } from "./TriggerRateLimit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Trigger a workflow from a Datastore. For automatic triggering a handle must be configured and the workflow must be published.
 */
export class DatastoreTrigger {
  /**
   * Defines a rate limit for a trigger.
   */
  "rateLimit"?: TriggerRateLimit;

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
    rateLimit: {
      baseName: "rateLimit",
      type: "TriggerRateLimit",
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
    return DatastoreTrigger.attributeTypeMap;
  }

  public constructor() {}
}
