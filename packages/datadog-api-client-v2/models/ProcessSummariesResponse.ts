/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProcessSummariesMeta } from "./ProcessSummariesMeta";
import { ProcessSummary } from "./ProcessSummary";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of process summaries.
 */
export class ProcessSummariesResponse {
  /**
   * Array of process summary objects.
   */
  "data"?: Array<ProcessSummary>;
  /**
   * Response metadata object.
   */
  "meta"?: ProcessSummariesMeta;

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
      type: "Array<ProcessSummary>",
    },
    meta: {
      baseName: "meta",
      type: "ProcessSummariesMeta",
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
    return ProcessSummariesResponse.attributeTypeMap;
  }

  public constructor() {}
}
