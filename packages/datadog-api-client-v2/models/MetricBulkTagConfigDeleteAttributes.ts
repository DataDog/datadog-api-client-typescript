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
 * Optional parameters for bulk deleting metric tag configurations.
 */
export class MetricBulkTagConfigDeleteAttributes {
  /**
   * A list of account emails to notify when the configuration is applied.
   */
  "emails"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    emails: {
      baseName: "emails",
      type: "Array<string>",
      format: "email",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricBulkTagConfigDeleteAttributes.attributeTypeMap;
  }

  public constructor() {}
}
