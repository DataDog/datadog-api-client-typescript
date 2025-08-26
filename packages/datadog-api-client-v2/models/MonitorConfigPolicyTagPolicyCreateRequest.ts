/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Tag attributes of a monitor configuration policy.
 */
export class MonitorConfigPolicyTagPolicyCreateRequest {
  /**
   * The key of the tag.
   */
  "tagKey": string;
  /**
   * If a tag key is required for monitor creation.
   */
  "tagKeyRequired": boolean;
  /**
   * Valid values for the tag.
   */
  "validTagValues": Array<string>;

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
    tagKey: {
      baseName: "tag_key",
      type: "string",
      required: true,
    },
    tagKeyRequired: {
      baseName: "tag_key_required",
      type: "boolean",
      required: true,
    },
    validTagValues: {
      baseName: "valid_tag_values",
      type: "Array<string>",
      required: true,
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
    return MonitorConfigPolicyTagPolicyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
