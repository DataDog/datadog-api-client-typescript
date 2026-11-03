/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserJourneySearchTarget } from "./UserJourneySearchTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Graph filter for user journey search.
 */
export class UserJourneySearchGraphFilter {
  /**
   * Filter name.
   */
  "name"?: string;
  /**
   * Filter operator.
   */
  "operator"?: string;
  /**
   * Target for user journey search.
   */
  "target"?: UserJourneySearchTarget;
  /**
   * Filter value.
   */
  "value"?: number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
    },
    operator: {
      baseName: "operator",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "UserJourneySearchTarget",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserJourneySearchGraphFilter.attributeTypeMap;
  }

  public constructor() {}
}
