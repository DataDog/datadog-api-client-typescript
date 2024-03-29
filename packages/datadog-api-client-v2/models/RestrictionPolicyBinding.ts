/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Specifies which principals are associated with a relation.
 */
export class RestrictionPolicyBinding {
  /**
   * An array of principals. A principal is a subject or group of subjects.
   * Each principal is formatted as `type:id`. Supported types: `role`, `team`, `user`, and `org`.
   * The org ID can be obtained through the api/v2/current_user API.
   * The user principal type accepts service account IDs.
   */
  "principals": Array<string>;
  /**
   * The role/level of access.
   */
  "relation": string;

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
    principals: {
      baseName: "principals",
      type: "Array<string>",
      required: true,
    },
    relation: {
      baseName: "relation",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RestrictionPolicyBinding.attributeTypeMap;
  }

  public constructor() {}
}
