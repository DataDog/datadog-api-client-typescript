/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelSource } from "./FunnelSource";
import { FunnelStep } from "./FunnelStep";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Updated funnel widget.
 */
export class FunnelQuery {
  /**
   * Source from which to query items to display in the funnel.
   */
  "dataSource": FunnelSource;
  /**
   * The widget query.
   */
  "queryString": string;
  /**
   * List of funnel steps.
   */
  "steps": Array<FunnelStep>;

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
      type: "FunnelSource",
      required: true,
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    steps: {
      baseName: "steps",
      type: "Array<FunnelStep>",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FunnelQuery.attributeTypeMap;
  }

  public constructor() {}
}
