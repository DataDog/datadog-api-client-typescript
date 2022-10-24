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
 * Wrapper object with the list of monitor IDs.
 */
export class CheckCanDeleteMonitorResponseData {
  /**
   * An array of of Monitor IDs that can be safely deleted.
   */
  "ok"?: Array<number>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ok: {
      baseName: "ok",
      type: "Array<number>",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CheckCanDeleteMonitorResponseData.attributeTypeMap;
  }

  public constructor() {}
}
