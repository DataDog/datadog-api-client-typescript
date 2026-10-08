/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RecommendationV2RequestData } from "./RecommendationV2RequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for retrieving SPA recommendations by forwarding a Spark job's raw arguments
 * instead of a pre-computed shard.
 */
export class RecommendationV2RequestBody {
  /**
   * JSON:API resource object for the SPA v2 recommendation request.
   */
  "data": RecommendationV2RequestData;

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
    data: {
      baseName: "data",
      type: "RecommendationV2RequestData",
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
    return RecommendationV2RequestBody.attributeTypeMap;
  }

  public constructor() {}
}
