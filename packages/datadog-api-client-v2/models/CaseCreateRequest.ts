/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseCreate } from "./CaseCreate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case create request
 */
export class CaseCreateRequest {
  /**
   * Case creation data
   */
  "data": CaseCreate;

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
      type: "CaseCreate",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
