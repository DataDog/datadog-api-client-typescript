/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseAggregateRequestAttributes } from "./CaseAggregateRequestAttributes";
import { CaseAggregateResourceType } from "./CaseAggregateResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object wrapping the aggregation query type and attributes.
 */
export class CaseAggregateRequestData {
  /**
   * Attributes for the aggregation request, including the search query and grouping configuration.
   */
  "attributes": CaseAggregateRequestAttributes;
  /**
   * JSON:API resource type for case aggregation requests.
   */
  "type": CaseAggregateResourceType;

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
      type: "CaseAggregateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseAggregateResourceType",
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
    return CaseAggregateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
