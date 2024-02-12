/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseResourceType } from "./CaseResourceType";
import { CaseUpdatePriorityAttributes } from "./CaseUpdatePriorityAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case priority status
 */
export class CaseUpdatePriority {
  /**
   * Case update priority attributes
   */
  "attributes": CaseUpdatePriorityAttributes;
  /**
   * Case resource type
   */
  "type": CaseResourceType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "CaseUpdatePriorityAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseResourceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseUpdatePriority.attributeTypeMap;
  }

  public constructor() {}
}
