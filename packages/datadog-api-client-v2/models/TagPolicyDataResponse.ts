/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagPolicyAttributesResponse } from "./TagPolicyAttributesResponse";
import { TagPolicyType } from "./TagPolicyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data envelope for tag policy response.
 */
export class TagPolicyDataResponse {
  /**
   * Attributes of a tag policy response.
   */
  "attributes": TagPolicyAttributesResponse;
  /**
   * The unique identifier of the tag policy.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `tag_policy`.
   */
  "type": TagPolicyType;

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
      type: "TagPolicyAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TagPolicyType",
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
    return TagPolicyDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
