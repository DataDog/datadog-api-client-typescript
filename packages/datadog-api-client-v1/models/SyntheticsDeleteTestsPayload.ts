/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A JSON list of the ID or IDs of the Synthetic tests that you want
 * to delete.
 */
export class SyntheticsDeleteTestsPayload {
  /**
   * An array of Synthetic test IDs you want to delete.
   */
  "publicIds"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    publicIds: {
      baseName: "public_ids",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsDeleteTestsPayload.attributeTypeMap;
  }

  public constructor() {}
}
