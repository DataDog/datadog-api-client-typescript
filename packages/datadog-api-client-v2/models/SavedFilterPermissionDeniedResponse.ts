/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SavedFilterPermissionDeniedData } from "./SavedFilterPermissionDeniedData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The caller lacks edit permission on one or more feature flags that reference this saved filter.
 */
export class SavedFilterPermissionDeniedResponse {
  /**
   * The caller lacks edit permission on one or more feature flags that reference this saved filter.
   */
  "data": SavedFilterPermissionDeniedData;

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
      type: "SavedFilterPermissionDeniedData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SavedFilterPermissionDeniedResponse.attributeTypeMap;
  }

  public constructor() {}
}
