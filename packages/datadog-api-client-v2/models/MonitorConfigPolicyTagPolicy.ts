/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Tag attributes of a monitor configuration policy.
 */
export class MonitorConfigPolicyTagPolicy {
  /**
   * The key of the tag.
   */
  "tagKey"?: string;
  /**
   * If a tag key is required for monitor creation.
   */
  "tagKeyRequired"?: boolean;
  /**
   * Valid values for the tag.
   */
  "validTagValues"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tagKey: {
      baseName: "tag_key",
      type: "string",
    },
    tagKeyRequired: {
      baseName: "tag_key_required",
      type: "boolean",
    },
    validTagValues: {
      baseName: "valid_tag_values",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorConfigPolicyTagPolicy.attributeTypeMap;
  }

  public constructor() {}
}
