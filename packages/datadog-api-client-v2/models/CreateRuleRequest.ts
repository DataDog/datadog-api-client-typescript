/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateRuleRequestData } from "./CreateRuleRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Scorecard create rule request.
 */
export class CreateRuleRequest {
  /**
   * Scorecard create rule request data.
   */
  "data"?: CreateRuleRequestData;

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
      type: "CreateRuleRequestData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
