/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagPolicyResourceType } from "./TagPolicyResourceType";
import { TagPolicyUpdateAttributes } from "./TagPolicyUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating a tag policy.
 */
export class TagPolicyUpdateData {
  /**
   * Mutable attributes of a tag policy. Each field is optional; omitting a field leaves its
   * current value unchanged. The `source` of a policy cannot be changed.
   */
  "attributes"?: TagPolicyUpdateAttributes;
  /**
   * The unique identifier of the tag policy being updated.
   */
  "id": string;
  /**
   * JSON:API resource type for a tag policy.
   */
  "type": TagPolicyResourceType;

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
      type: "TagPolicyUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TagPolicyResourceType",
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
    return TagPolicyUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
