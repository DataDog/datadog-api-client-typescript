/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupPolicySuggestionAttributes } from "./OrgGroupPolicySuggestionAttributes";
import { OrgGroupPolicySuggestionRelationships } from "./OrgGroupPolicySuggestionRelationships";
import { OrgGroupPolicySuggestionType } from "./OrgGroupPolicySuggestionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An org group policy suggestion resource.
 */
export class OrgGroupPolicySuggestionData {
  /**
   * Attributes of an org group policy suggestion.
   */
  "attributes": OrgGroupPolicySuggestionAttributes;
  /**
   * The ID of the org group policy suggestion.
   */
  "id": string;
  /**
   * Relationships of an org group policy suggestion.
   */
  "relationships"?: OrgGroupPolicySuggestionRelationships;
  /**
   * Org group policy suggestions resource type.
   */
  "type": OrgGroupPolicySuggestionType;

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
      type: "OrgGroupPolicySuggestionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "OrgGroupPolicySuggestionRelationships",
    },
    type: {
      baseName: "type",
      type: "OrgGroupPolicySuggestionType",
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
    return OrgGroupPolicySuggestionData.attributeTypeMap;
  }

  public constructor() {}
}
