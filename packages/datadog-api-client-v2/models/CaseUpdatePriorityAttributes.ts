/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CasePriority } from "./CasePriority";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case update priority attributes
 */
export class CaseUpdatePriorityAttributes {
  /**
   * Case priority
   */
  "priority": CasePriority;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    priority: {
      baseName: "priority",
      type: "CasePriority",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseUpdatePriorityAttributes.attributeTypeMap;
  }

  public constructor() {}
}