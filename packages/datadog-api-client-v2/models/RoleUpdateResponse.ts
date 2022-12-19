/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RoleUpdateResponseData } from "./RoleUpdateResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing information about an updated role.
 */
export class RoleUpdateResponse {
  /**
   * Role object returned by the API.
   */
  "data"?: RoleUpdateResponseData;

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
      type: "RoleUpdateResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RoleUpdateResponse.attributeTypeMap;
  }

  public constructor() {}
}
