/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DdsqlTabularQueryResponseData } from "./DdsqlTabularQueryResponseData";
import { DdsqlTabularQueryResponseMeta } from "./DdsqlTabularQueryResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response envelope for both the execute and fetch DDSQL tabular query endpoints.
 * Carries the JSON:API primary resource and a top-level `meta` block with
 * request-scoped observability handles.
 */
export class DdsqlTabularQueryResponse {
  /**
   * JSON:API resource object for a DDSQL tabular query response.
   */
  "data": DdsqlTabularQueryResponseData;
  /**
   * Top-level JSON:API meta block accompanying every DDSQL tabular query response.
   * Carries standard observability handles for client-side correlation.
   */
  "meta": DdsqlTabularQueryResponseMeta;

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
      type: "DdsqlTabularQueryResponseData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "DdsqlTabularQueryResponseMeta",
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
    return DdsqlTabularQueryResponse.attributeTypeMap;
  }

  public constructor() {}
}
