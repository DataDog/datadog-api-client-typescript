/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseUpdatePriority } from "./CaseUpdatePriority";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case update priority request
 */
export class CaseUpdatePriorityRequest {
  /**
   * Case priority status
   */
  "data": CaseUpdatePriority;

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
      type: "CaseUpdatePriority",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseUpdatePriorityRequest.attributeTypeMap;
  }

  public constructor() {}
}
