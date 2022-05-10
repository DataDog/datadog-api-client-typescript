/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RoleClone } from "./RoleClone";

import { AttributeTypeMap } from "../util";

/**
 * Request to create a role by cloning an existing role.
 */
export class RoleCloneRequest {
  /**
   * Data for the clone role request.
   */
  "data": RoleClone;

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
      type: "RoleClone",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RoleCloneRequest.attributeTypeMap;
  }

  public constructor() {}
}
