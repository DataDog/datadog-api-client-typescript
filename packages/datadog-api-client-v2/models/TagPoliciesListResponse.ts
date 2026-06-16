/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagPolicyData } from "./TagPolicyData";
import { TagPolicyScoreData } from "./TagPolicyScoreData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A page of tag policies.
 */
export class TagPoliciesListResponse {
  /**
   * An array of tag policy data objects.
   */
  "data": Array<TagPolicyData>;
  /**
   * Related resources fetched alongside the primary tag policies. Populated when an `include` query parameter is supplied.
   */
  "included"?: Array<TagPolicyScoreData>;

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
    data: {
      baseName: "data",
      type: "Array<TagPolicyData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<TagPolicyScoreData>",
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
    return TagPoliciesListResponse.attributeTypeMap;
  }

  public constructor() {}
}
