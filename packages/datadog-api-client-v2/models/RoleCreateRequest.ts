/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RoleCreateData } from "./RoleCreateData";

import { AttributeTypeMap } from "../util";

/**
 * Create a role.
 */
export class RoleCreateRequest {
  /**
   * Data related to the creation of a role.
   */
  "data": RoleCreateData;

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
      type: "RoleCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RoleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
