import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetCohortUsersRequestDataAttributesDefinition } from "./GetCohortUsersRequestDataAttributesDefinition";
import { GetCohortUsersRequestDataAttributesTime } from "./GetCohortUsersRequestDataAttributesTime";

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
