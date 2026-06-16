/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagPolicyScoreRelationship } from "./TagPolicyScoreRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Related resources for a tag policy. Only present when the corresponding `include` query parameter is supplied.
 */
export class TagPolicyRelationships {
  /**
   * A relationship to the compliance score resource for this policy.
   */
  "score"?: TagPolicyScoreRelationship;

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
    score: {
      baseName: "score",
      type: "TagPolicyScoreRelationship",
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
    return TagPolicyRelationships.attributeTypeMap;
  }

  public constructor() {}
}
