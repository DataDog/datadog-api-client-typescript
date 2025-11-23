/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetCohortRequestDataAttributesDefinition } from "./GetCohortRequestDataAttributesDefinition";
import { GetCohortRequestDataAttributesTime } from "./GetCohortRequestDataAttributesTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
