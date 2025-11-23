/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelRequestDataAttributesSearchStepsItems } from "./FunnelRequestDataAttributesSearchStepsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class FunnelRequestDataAttributesSearch {
  "crossSessionFilter"?: string;
  "queryString"?: string;
  "steps"?: Array<FunnelRequestDataAttributesSearchStepsItems>;
  "subqueryId"?: string;

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
    crossSessionFilter: {
      baseName: "cross_session_filter",
      type: "string",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
    },
    steps: {
      baseName: "steps",
      type: "Array<FunnelRequestDataAttributesSearchStepsItems>",
    },
    subqueryId: {
      baseName: "subquery_id",
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
    return FunnelRequestDataAttributesSearch.attributeTypeMap;
  }

  public constructor() {}
}
