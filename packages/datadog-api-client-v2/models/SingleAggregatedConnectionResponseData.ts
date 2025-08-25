/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SingleAggregatedConnectionResponseDataAttributes } from "./SingleAggregatedConnectionResponseDataAttributes";
import { SingleAggregatedConnectionResponseDataType } from "./SingleAggregatedConnectionResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing an aggregated connection.
 */
export class SingleAggregatedConnectionResponseData {
  /**
   * Attributes for an aggregated connection.
   */
  "attributes"?: SingleAggregatedConnectionResponseDataAttributes;
  /**
   * A unique identifier for the aggregated connection based on the group by values.
   */
  "id"?: string;
  /**
   * Aggregated connection resource type.
   */
  "type"?: SingleAggregatedConnectionResponseDataType;

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
      type: "SingleAggregatedConnectionResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SingleAggregatedConnectionResponseDataType",
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
    return SingleAggregatedConnectionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
