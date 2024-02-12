/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseResourceType } from "./CaseResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case empty request data
 */
export class CaseEmpty {
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
    return CaseEmpty.attributeTypeMap;
  }

  public constructor() {}
}
