/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelRequestDataAttributesSearch } from "./FunnelRequestDataAttributesSearch";
import { FunnelRequestDataAttributesTime } from "./FunnelRequestDataAttributesTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class FunnelRequestDataAttributes {
  "dataSource"?: string;
  "enforcedExecutionType"?: string;
  "requestId"?: string;
  "search"?: FunnelRequestDataAttributesSearch;
  "time"?: FunnelRequestDataAttributesTime;

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
    enforcedExecutionType: {
      baseName: "enforced_execution_type",
      type: "string",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    search: {
      baseName: "search",
      type: "FunnelRequestDataAttributesSearch",
    },
    time: {
      baseName: "time",
      type: "FunnelRequestDataAttributesTime",
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
    return FunnelRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
