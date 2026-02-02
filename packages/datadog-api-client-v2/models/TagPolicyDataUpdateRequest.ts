/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagPolicyAttributesUpdateRequest } from "./TagPolicyAttributesUpdateRequest";
import { TagPolicyType } from "./TagPolicyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data envelope for tag policy update request.
 */
export class TagPolicyDataUpdateRequest {
  /**
   * Attributes for updating a tag policy. All fields are optional.
   */
  "attributes": TagPolicyAttributesUpdateRequest;
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
      type: "TagPolicyAttributesUpdateRequest",
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
    return TagPolicyDataUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
