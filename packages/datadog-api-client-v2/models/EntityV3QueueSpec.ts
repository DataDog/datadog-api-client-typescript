/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of Entity V3 Queue Spec object.
 */
export class EntityV3QueueSpec {
  /**
   * The lifecycle state of the queue.
   */
  "lifecycle"?: string;
  /**
   * The importance of the queue
   */
  "tier"?: string;
  /**
   * The type of queue
   */
  "type"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    lifecycle: {
      baseName: "lifecycle",
      type: "string",
    },
    tier: {
      baseName: "tier",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3QueueSpec.attributeTypeMap;
  }

  public constructor() {}
}
