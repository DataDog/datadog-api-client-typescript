/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetCohortUsersRequestDataAttributesDefinition } from "./GetCohortUsersRequestDataAttributesDefinition";
import { GetCohortUsersRequestDataAttributesTime } from "./GetCohortUsersRequestDataAttributesTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class GetCohortUsersRequestDataAttributes {
  "dataSource"?: string;
  "definition"?: GetCohortUsersRequestDataAttributesDefinition;
  "execution"?: number;
  "time"?: GetCohortUsersRequestDataAttributesTime;
  "userSelection"?: string;
  "windowSize"?: string;

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
    dataSource: {
      baseName: "data_source",
      type: "string",
    },
    definition: {
      baseName: "definition",
      type: "GetCohortUsersRequestDataAttributesDefinition",
    },
    execution: {
      baseName: "execution",
      type: "number",
      format: "int64",
    },
    time: {
      baseName: "time",
      type: "GetCohortUsersRequestDataAttributesTime",
    },
    userSelection: {
      baseName: "user_selection",
      type: "string",
    },
    windowSize: {
      baseName: "window_size",
      type: "string",
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
    return GetCohortUsersRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
