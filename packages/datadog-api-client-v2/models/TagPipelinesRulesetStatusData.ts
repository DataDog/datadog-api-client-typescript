/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagPipelinesRulesetStatusAttributes } from "./TagPipelinesRulesetStatusAttributes";
import { TagPipelinesRulesetStatusType } from "./TagPipelinesRulesetStatusType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Tag pipeline ruleset status data.
 */
export class TagPipelinesRulesetStatusData {
  /**
   * Attributes for a tag pipeline ruleset status.
   */
  "attributes": TagPipelinesRulesetStatusAttributes;
  /**
   * The unique identifier of the ruleset.
   */
  "id": string;
  /**
   * Tag pipeline ruleset status resource type.
   */
  "type": TagPipelinesRulesetStatusType;

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
      type: "TagPipelinesRulesetStatusAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TagPipelinesRulesetStatusType",
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
    return TagPipelinesRulesetStatusData.attributeTypeMap;
  }

  public constructor() {}
}
