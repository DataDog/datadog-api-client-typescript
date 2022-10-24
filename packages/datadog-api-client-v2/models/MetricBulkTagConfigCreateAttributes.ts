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
 * Optional parameters for bulk creating metric tag configurations.
 */
export class MetricBulkTagConfigCreateAttributes {
  /**
   * A list of account emails to notify when the configuration is applied.
   */
  "emails"?: Array<string>;
  /**
   * A list of tag names to apply to the configuration.
   */
  "tags"?: Array<string>;

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
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricBulkTagConfigCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
