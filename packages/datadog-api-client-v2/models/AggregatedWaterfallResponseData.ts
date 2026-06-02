/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AggregatedWaterfallRequestType } from "./AggregatedWaterfallRequestType";
import { AggregatedWaterfallResponseAttributes } from "./AggregatedWaterfallResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data envelope for an aggregated waterfall response.
 */
export class AggregatedWaterfallResponseData {
  /**
   * Attributes of an aggregated waterfall response.
   */
  "attributes": AggregatedWaterfallResponseAttributes;
  /**
   * Hash-based unique identifier for this aggregation.
   */
  "id": string;
  /**
   * The JSON:API type for aggregated waterfall requests.
   */
  "type": AggregatedWaterfallRequestType;

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
    attributes: {
      baseName: "attributes",
      type: "AggregatedWaterfallResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AggregatedWaterfallRequestType",
      required: true,
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
    return AggregatedWaterfallResponseData.attributeTypeMap;
  }

  public constructor() {}
}
