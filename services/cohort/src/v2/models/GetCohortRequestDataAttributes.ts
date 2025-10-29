import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetCohortRequestDataAttributesDefinition } from "./GetCohortRequestDataAttributesDefinition";
import { GetCohortRequestDataAttributesTime } from "./GetCohortRequestDataAttributesTime";

export class GetCohortRequestDataAttributes {
  "dataSource"?: string;
  "definition"?: GetCohortRequestDataAttributesDefinition;
  "enforcedExecutionType"?: string;
  "requestId"?: string;
  "time"?: GetCohortRequestDataAttributesTime;
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
      type: "GetCohortRequestDataAttributesDefinition",
    },
    enforcedExecutionType: {
      baseName: "enforced_execution_type",
      type: "string",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    time: {
      baseName: "time",
      type: "GetCohortRequestDataAttributesTime",
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
    return GetCohortRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
