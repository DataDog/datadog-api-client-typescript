/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Attributes of the global variable.
 */
export class SyntheticsGlobalVariableAttributes {
  /**
   * A list of role identifiers that can be pulled from the Roles API, for restricting read and write access.
   */
  "restrictedRoles"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    restrictedRoles: {
      baseName: "restricted_roles",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsGlobalVariableAttributes.attributeTypeMap;
  }

  public constructor() {}
}
