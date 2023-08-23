/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RestrictionPolicyAttributes } from "./RestrictionPolicyAttributes";
import { RestrictionPolicyType } from "./RestrictionPolicyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Restriction policy object.
 */
export class RestrictionPolicy {
  /**
   * Restriction policy attributes.
   */
  "attributes": RestrictionPolicyAttributes;
  /**
   * The identifier, always equivalent to the value specified in the `resource_id` path parameter.
   */
  "id": string;
  /**
   * Restriction policy type.
   */
  "type": RestrictionPolicyType;

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
      type: "RestrictionPolicyAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RestrictionPolicyType",
      required: true,
    },
  };
}
