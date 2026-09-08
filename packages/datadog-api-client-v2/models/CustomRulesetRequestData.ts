/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomRulesetDataType } from "./CustomRulesetDataType";
import { CustomRulesetRequestDataAttributes } from "./CustomRulesetRequestDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a custom ruleset create or update request. The resource `id` is
 * required and must equal both `attributes.name` and, on update, the `ruleset_name`
 * path parameter; a request that omits it or supplies a different value is rejected
 * with a 412 response.
 */
export class CustomRulesetRequestData {
  /**
   * Attributes for creating or updating a custom ruleset. `name` is required and must
   * equal the resource `id`; the server rejects a mismatch with a 412 response.
   */
  "attributes": CustomRulesetRequestDataAttributes;
  /**
   * Ruleset identifier, which is the same as the ruleset name.
   */
  "id": string;
  /**
   * Resource type
   */
  "type": CustomRulesetDataType;

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
    attributes: {
      baseName: "attributes",
      type: "CustomRulesetRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomRulesetDataType",
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
    return CustomRulesetRequestData.attributeTypeMap;
  }

  public constructor() {}
}
