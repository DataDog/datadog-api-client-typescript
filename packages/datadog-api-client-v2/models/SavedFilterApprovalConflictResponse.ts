/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SavedFilterApprovalConflictData } from "./SavedFilterApprovalConflictData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * One or more feature flags that reference this saved filter require approval for the rule update.
 */
export class SavedFilterApprovalConflictResponse {
  /**
   * One or more feature flags that reference this saved filter require approval for the rule update.
   */
  "data": SavedFilterApprovalConflictData;

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
      type: "SavedFilterApprovalConflictData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SavedFilterApprovalConflictResponse.attributeTypeMap;
  }

  public constructor() {}
}
