/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsSpanData } from "./LLMObsSpanData";
import { LLMObsSpansResponseLinks } from "./LLMObsSpansResponseLinks";
import { LLMObsSpansResponseMeta } from "./LLMObsSpansResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of LLM Observability spans.
 */
export class LLMObsSpansResponse {
  /**
   * List of spans matching the query.
   */
  "data": Array<LLMObsSpanData>;
  /**
   * Pagination links accompanying the spans response.
   */
  "links"?: LLMObsSpansResponseLinks;
  /**
   * Metadata accompanying the spans response.
   */
  "meta": LLMObsSpansResponseMeta;

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
      type: "Array<LLMObsSpanData>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "LLMObsSpansResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "LLMObsSpansResponseMeta",
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
    return LLMObsSpansResponse.attributeTypeMap;
  }

  public constructor() {}
}
