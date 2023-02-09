/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RestrictionPolicy } from "./RestrictionPolicy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing information about a single restriction policy.
 */
export class GetRestrictionPolicyResponse {
  /**
   * Restriction policy object.
   */
  "data": RestrictionPolicy;

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
      type: "RestrictionPolicy",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GetRestrictionPolicyResponse.attributeTypeMap;
  }

  public constructor() {}
}
