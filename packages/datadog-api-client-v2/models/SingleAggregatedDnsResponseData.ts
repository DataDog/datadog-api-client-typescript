/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SingleAggregatedDnsResponseDataAttributes } from "./SingleAggregatedDnsResponseDataAttributes";
import { SingleAggregatedDnsResponseDataType } from "./SingleAggregatedDnsResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing an aggregated DNS flow.
 */
export class SingleAggregatedDnsResponseData {
  /**
   * Attributes for an aggregated DNS flow.
   */
  "attributes"?: SingleAggregatedDnsResponseDataAttributes;
  /**
   * A unique identifier for the aggregated DNS traffic based on the group by values.
   */
  "id"?: string;
  /**
   * Aggregated DNS resource type.
   */
  "type"?: SingleAggregatedDnsResponseDataType;

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
      type: "SingleAggregatedDnsResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SingleAggregatedDnsResponseDataType",
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
    return SingleAggregatedDnsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
