/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object containing array of IDs of canceled downtimes.
 */
export class CanceledDowntimesIds {
  /**
   * ID of downtimes that were canceled.
   */
  "cancelledIds"?: Array<number>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cancelledIds: {
      baseName: "cancelled_ids",
      type: "Array<number>",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CanceledDowntimesIds.attributeTypeMap;
  }

  public constructor() {}
}
