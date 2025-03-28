/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SingleAggregatedConnectionResponseDataAttributes } from "./SingleAggregatedConnectionResponseDataAttributes";
import { SingleAggregatedConnectionResponseDataType } from "./SingleAggregatedConnectionResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `SingleAggregatedConnectionResponseData` object.
 */
export class SingleAggregatedConnectionResponseData {
  /**
   * The definition of `SingleAggregatedConnectionResponseDataAttributes` object.
   */
  "attributes"?: SingleAggregatedConnectionResponseDataAttributes;
  /**
   * The `SingleAggregatedConnectionResponseData` `id`.
   */
  "id"?: string;
  /**
   * Aggregated connection resource type. Allowed enum values: `aggregated_connection`.
   * default: `aggregated_connection`
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
