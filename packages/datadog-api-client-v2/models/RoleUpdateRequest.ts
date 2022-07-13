/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RoleUpdateData } from "./RoleUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update a role.
 */
export class RoleUpdateRequest {
  /**
   * Data related to the update of a role.
   */
  "data": RoleUpdateData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "RoleUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RoleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
